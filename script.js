/**
 * TFI HANGMAN — Telugu Cinema Movie Challenge
 * Complete Game Engine, State Management, UI & Sound Logic
 * Vanilla JavaScript (Strictly Zero External Dependencies)
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. Game Configuration & Audio System (Web Audio API)
       ========================================================================== */

    const CONFIG = {
        MAX_ATTEMPTS: 7,
        POINTS_CORRECT_LETTER: 10,
        POINTS_INCORRECT_LETTER: -5,
        POINTS_MOVIE_SOLVED: 50,
        POINTS_HINT_PENALTY: -10,
        STORAGE_KEY: 'tfi_hangman_stats_v1',
        AUDIO_KEY: 'tfi_hangman_audio_muted'
    };

    // Native Web Audio Synthesizer (No external audio files required)
    class SoundEngine {
        constructor() {
            this.ctx = null;
            this.isMuted = localStorage.getItem(CONFIG.AUDIO_KEY) === 'true';
        }

        initContext() {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        toggleMute() {
            this.isMuted = !this.isMuted;
            localStorage.setItem(CONFIG.AUDIO_KEY, this.isMuted);
            return this.isMuted;
        }

        playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
            if (this.isMuted) return;
            try {
                this.initContext();
                if (!this.ctx) return;

                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                const startTime = this.ctx.currentTime + delay;
                osc.type = type;
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(gainVal, startTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + duration);
            } catch (e) {
                // Ignore audio context autoplay restrictions
            }
        }

        playClick() {
            this.playTone(600, 'triangle', 0.05, 0.05);
        }

        playCorrect() {
            // Pleasant ascending chime
            this.playTone(523.25, 'sine', 0.12, 0.08, 0.00); // C5
            this.playTone(659.25, 'sine', 0.16, 0.08, 0.08); // E5
            this.playTone(783.99, 'sine', 0.22, 0.08, 0.16); // G5
        }

        playIncorrect() {
            // Low thud / buzz
            this.playTone(180, 'sawtooth', 0.18, 0.09, 0.00);
            this.playTone(140, 'triangle', 0.22, 0.09, 0.06);
        }

        playWin() {
            // Triumphant Fanfare Arpeggio
            const notes = [440, 554.37, 659.25, 880, 1108.73];
            notes.forEach((freq, idx) => {
                this.playTone(freq, 'sine', 0.25, 0.12, idx * 0.1);
            });
        }

        playGameOver() {
            // Descending melancholic chime
            const notes = [440, 415.30, 392, 349.23];
            notes.forEach((freq, idx) => {
                this.playTone(freq, 'triangle', 0.35, 0.12, idx * 0.15);
            });
        }
    }

    const sound = new SoundEngine();

    /* ==========================================================================
       2. Lightweight Pure Canvas Confetti System
       ========================================================================== */

    class ConfettiManager {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
            this.particles = [];
            this.animationId = null;
            this.colors = ['#FFC107', '#FF4D6D', '#22C55E', '#38BDF8', '#A855F7', '#F97316'];
            this.resize();
            window.addEventListener('resize', () => this.resize());
        }

        resize() {
            if (!this.canvas) return;
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        start(particleCount = 120) {
            if (!this.canvas || !this.ctx) return;
            this.resize();
            this.particles = [];

            for (let i = 0; i < particleCount; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * -this.canvas.height * 0.5,
                    w: Math.random() * 9 + 5,
                    h: Math.random() * 7 + 4,
                    color: this.colors[Math.floor(Math.random() * this.colors.length)],
                    vx: Math.random() * 4 - 2,
                    vy: Math.random() * 4 + 3,
                    tilt: Math.random() * 10 - 5,
                    tiltAngle: Math.random() * Math.PI,
                    tiltAngleInc: Math.random() * 0.08 + 0.04
                });
            }

            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            this.loop();
        }

        loop() {
            if (!this.ctx || this.particles.length === 0) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach((p, idx) => {
                p.tiltAngle += p.tiltAngleInc;
                p.y += p.vy;
                p.x += Math.sin(p.tiltAngle) * 2 + p.vx;
                p.tilt = Math.sin(p.tiltAngle) * 12;

                this.ctx.beginPath();
                this.ctx.lineWidth = p.h;
                this.ctx.strokeStyle = p.color;
                this.ctx.moveTo(p.x + p.tilt + p.w / 2, p.y);
                this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.h / 2);
                this.ctx.stroke();

                if (p.y > this.canvas.height + 20) {
                    this.particles.splice(idx, 1);
                }
            });

            if (this.particles.length > 0) {
                this.animationId = requestAnimationFrame(() => this.loop());
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }

        stop() {
            this.particles = [];
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            if (this.ctx && this.canvas) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
    }

    const confetti = new ConfettiManager('confetti-canvas');

    /* ==========================================================================
       3. Game State & Statistics
       ========================================================================== */

    const gameState = {
        // Active selections from Start Screen
        mode: 'normal',       // 'normal' | 'deepcut'
        difficulty: 'medium', // 'easy' | 'medium' | 'hard' | 'random'
        category: 'all',      // 'all' | genre name
        era: 'all',           // 'all' | era string

        // Round State
        currentMovie: null,
        currentClue: '',
        remainingAttempts: CONFIG.MAX_ATTEMPTS,
        guessedLetters: new Set(),
        incorrectLetters: new Set(),
        hintsRevealed: 0,
        roundScore: 0,
        isRoundOver: false,

        // Session Tracking (Avoid repeat movies)
        usedMovieIds: new Set(),
        sessionScore: 0,
        currentStreak: 0,

        // Persistent Career Statistics
        stats: {
            highScore: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            bestStreak: 0,
            moviesSolved: 0
        }
    };

    // Load statistics from localStorage
    function loadStatistics() {
        try {
            const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                gameState.stats = Object.assign(gameState.stats, parsed);
                gameState.currentStreak = parsed.currentStreak || 0;
            }
        } catch (e) {
            console.warn('Failed to load stats from localStorage:', e);
        }
        updateHeaderBadges();
    }

    // Save statistics to localStorage
    function saveStatistics() {
        try {
            const payload = {
                highScore: Math.max(gameState.stats.highScore, gameState.sessionScore),
                gamesPlayed: gameState.stats.gamesPlayed,
                gamesWon: gameState.stats.gamesWon,
                bestStreak: gameState.stats.bestStreak,
                moviesSolved: gameState.stats.moviesSolved,
                currentStreak: gameState.currentStreak
            };
            gameState.stats.highScore = payload.highScore;
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            console.warn('Failed to save stats to localStorage:', e);
        }
        updateHeaderBadges();
    }

    function resetStatistics() {
        gameState.stats = {
            highScore: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            bestStreak: 0,
            moviesSolved: 0
        };
        gameState.currentStreak = 0;
        gameState.sessionScore = 0;
        saveStatistics();
        renderStatsModal();
        announceToScreenReader('All statistics have been reset.');
    }

    function updateHeaderBadges() {
        const scoreEl = document.getElementById('score-val');
        const streakEl = document.getElementById('streak-val');
        if (scoreEl) scoreEl.textContent = gameState.sessionScore;
        if (streakEl) streakEl.textContent = gameState.currentStreak;
    }

    function announceToScreenReader(text) {
        const el = document.getElementById('sr-announcer');
        if (el) {
            el.textContent = text;
        }
    }

    /* ==========================================================================
       4. Movie Selection & Category Filtering
       ========================================================================== */

    // Dynamically extract all available genres from the database
    function populateCategories() {
        const selectEl = document.getElementById('select-category');
        if (!selectEl || typeof movies === 'undefined' || !Array.isArray(movies)) return;

        const genreSet = new Set();
        movies.forEach(m => {
            if (Array.isArray(m.genres)) {
                m.genres.forEach(g => genreSet.add(g));
            }
        });

        const sortedGenres = Array.from(genreSet).sort();
        selectEl.innerHTML = '<option value="all">All Genres (Full Archive)</option>';
        sortedGenres.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g;
            opt.textContent = g;
            selectEl.appendChild(opt);
        });

        // Update database metric badge on start screen
        const dbBadge = document.getElementById('db-count-text');
        if (dbBadge) {
            dbBadge.textContent = `${movies.length} Movies`;
        }
    }

    // Filter available movies based on user configurations
    function getFilteredMovies() {
        if (typeof movies === 'undefined' || !Array.isArray(movies) || movies.length === 0) {
            console.error('Movies database not available');
            return [];
        }

        return movies.filter(movie => {
            // Era filter
            if (gameState.era !== 'all' && movie.era !== gameState.era) {
                return false;
            }

            // Category / Genre filter
            if (gameState.category !== 'all') {
                if (!Array.isArray(movie.genres) || !movie.genres.includes(gameState.category)) {
                    return false;
                }
            }

            // Difficulty filter
            if (gameState.difficulty !== 'random') {
                if (movie.difficulty !== gameState.difficulty) {
                    return false;
                }
            }

            return true;
        });
    }

    // Pick the next movie according to mode and session history
    function selectNextMovie() {
        let pool = getFilteredMovies();

        // If no movies match the strict combination, fallback to all movies matching the era/genre
        if (pool.length === 0) {
            console.warn('No movies matched strict criteria, broadening filter...');
            pool = movies.filter(m => {
                if (gameState.category !== 'all' && (!m.genres || !m.genres.includes(gameState.category))) {
                    return false;
                }
                return true;
            });
            if (pool.length === 0) pool = [...movies];
        }

        // TFI Deep Cut Mode prioritization
        if (gameState.mode === 'deepcut') {
            const deepCutPool = pool.filter(m => 
                ['cult', 'critically-acclaimed', 'independent', 'lesser-known'].includes(m.popularity) ||
                m.era === '2000-2004' || m.era === '2005-2009' || m.difficulty === 'hard'
            );
            if (deepCutPool.length > 0) {
                pool = deepCutPool;
            }
        }

        // Exclude already played movies in this session
        let unplayed = pool.filter(m => !gameState.usedMovieIds.has(m.id));

        // If all matching movies have been played, reset session history for this filter
        if (unplayed.length === 0) {
            pool.forEach(m => gameState.usedMovieIds.delete(m.id));
            unplayed = [...pool];
            console.log('Session movie pool refreshed.');
        }

        // Pick random movie from unplayed pool
        const randomIndex = Math.floor(Math.random() * unplayed.length);
        const selected = unplayed[randomIndex];

        gameState.usedMovieIds.add(selected.id);
        gameState.currentMovie = selected;

        // Pick random indirect clue
        if (Array.isArray(selected.clues) && selected.clues.length > 0) {
            const clueIdx = Math.floor(Math.random() * selected.clues.length);
            gameState.currentClue = selected.clues[clueIdx];
        } else {
            gameState.currentClue = "An iconic Telugu cinema masterpiece. Can you identify the title from its letters?";
        }

        return selected;
    }

    /* ==========================================================================
       5. Title Normalization & Word Slot Rendering
       ========================================================================== */

    // Normalizes movie title for guessing (A-Z)
    function normalizeTitle(title) {
        return (title || '').toUpperCase().trim();
    }

    // Render word slots grouping characters by words so words never awkwardly break
    function renderWordSlots() {
        const container = document.getElementById('word-slots-container');
        if (!container || !gameState.currentMovie) return;

        container.innerHTML = '';
        const rawTitle = normalizeTitle(gameState.currentMovie.title);

        // Split title by whitespace into words
        const words = rawTitle.split(/\s+/);

        words.forEach(word => {
            const wordGroup = document.createElement('div');
            wordGroup.className = 'title-word-group';

            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                const slot = document.createElement('div');
                slot.className = 'letter-slot';

                if (char >= 'A' && char <= 'Z') {
                    slot.dataset.letter = char;
                    if (gameState.guessedLetters.has(char)) {
                        slot.textContent = char;
                        slot.classList.add('revealed');
                    } else {
                        slot.textContent = '';
                    }
                } else {
                    // Punctuation, digits, colons, hyphens are automatically revealed
                    slot.textContent = char;
                    slot.classList.add('punct-slot', 'revealed');
                }

                wordGroup.appendChild(slot);
            }

            container.appendChild(wordGroup);
        });
    }

    // Check if entire title has been solved
    function isTitleSolved() {
        if (!gameState.currentMovie) return false;
        const rawTitle = normalizeTitle(gameState.currentMovie.title);

        for (let i = 0; i < rawTitle.length; i++) {
            const char = rawTitle[i];
            if (char >= 'A' && char <= 'Z') {
                if (!gameState.guessedLetters.has(char)) {
                    return false;
                }
            }
        }
        return true;
    }

    /* ==========================================================================
       6. Hangman SVG Progression & Visual States
       ========================================================================== */

    const HANGMAN_PART_IDS = [
        'hang-head',
        'hang-body',
        'hang-arm-l',
        'hang-arm-r',
        'hang-leg-l',
        'hang-leg-r',
        'hang-gameover'
    ];

    function resetHangmanVisual() {
        HANGMAN_PART_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('visible');
        });
        const face = document.getElementById('hang-face');
        if (face) face.classList.remove('visible');
        updatePipsTrack();
    }

    function updateHangmanVisual() {
        const mistakesMade = CONFIG.MAX_ATTEMPTS - gameState.remainingAttempts;

        for (let i = 0; i < HANGMAN_PART_IDS.length; i++) {
            const partEl = document.getElementById(HANGMAN_PART_IDS[i]);
            if (partEl) {
                if (i < mistakesMade) {
                    partEl.classList.add('visible');
                    // Head also reveals facial features
                    if (i === 0) {
                        const face = document.getElementById('hang-face');
                        if (face) face.classList.add('visible');
                    }
                } else {
                    partEl.classList.remove('visible');
                }
            }
        }

        updatePipsTrack();
    }

    function updatePipsTrack() {
        const attemptsText = document.getElementById('attempts-val');
        if (attemptsText) {
            attemptsText.textContent = `${gameState.remainingAttempts} / ${CONFIG.MAX_ATTEMPTS}`;
        }

        const pips = document.querySelectorAll('.pips-track .pip');
        pips.forEach((pip, idx) => {
            if (idx < gameState.remainingAttempts) {
                pip.className = 'pip pip-active';
                if (gameState.remainingAttempts <= 2) {
                    pip.classList.add('danger');
                } else if (gameState.remainingAttempts <= 4) {
                    pip.classList.add('warning');
                }
            } else {
                pip.className = 'pip';
            }
        });
    }

    function triggerHangmanShake() {
        const box = document.querySelector('.hangman-box');
        if (box) {
            box.classList.remove('shake-anim');
            void box.offsetWidth; // Force reflow
            box.classList.add('shake-anim');
        }
    }

    /* ==========================================================================
       7. Virtual Keyboard
       ========================================================================== */

    const KEYBOARD_LAYOUT = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
        ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    ];

    function renderVirtualKeyboard() {
        const kbContainer = document.getElementById('virtual-keyboard');
        if (!kbContainer) return;

        kbContainer.innerHTML = '';

        KEYBOARD_LAYOUT.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';

            row.forEach(letter => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'key-btn';
                btn.textContent = letter;
                btn.dataset.key = letter;
                btn.setAttribute('aria-label', `Guess letter ${letter}`);

                if (gameState.guessedLetters.has(letter)) {
                    btn.classList.add('correct');
                    btn.disabled = true;
                } else if (gameState.incorrectLetters.has(letter)) {
                    btn.classList.add('incorrect');
                    btn.disabled = true;
                }

                btn.addEventListener('click', () => handleGuess(letter));
                rowDiv.appendChild(btn);
            });

            kbContainer.appendChild(rowDiv);
        });
    }

    function updateVirtualKey(letter, isCorrect) {
        const keyBtn = document.querySelector(`.key-btn[data-key="${letter}"]`);
        if (keyBtn) {
            if (isCorrect) {
                keyBtn.classList.add('correct');
            } else {
                keyBtn.classList.add('incorrect');
            }
            keyBtn.disabled = true;
        }
    }

    /* ==========================================================================
       8. Progressive Hint Station
       ========================================================================== */

    const HINT_TIERS = [
        { label: 'HINT 1: THEME & OVERVIEW', icon: '🌱' },
        { label: 'HINT 2: NARRATIVE CONTEXT', icon: '🌿' },
        { label: 'HINT 3: DISTINCTIVE TRAIT', icon: '🌳' },
        { label: 'HINT 4: ERA & REGIONAL CONTEXT', icon: '🎬' }
    ];

    function renderHintStation() {
        const countBadge = document.getElementById('hints-count-badge');
        const listContainer = document.getElementById('revealed-hints-list');
        const btnHint = document.getElementById('btn-use-hint');

        const available = Math.max(0, 3 - gameState.hintsRevealed);
        if (countBadge) {
            countBadge.textContent = `${available} Available`;
        }

        if (btnHint) {
            btnHint.disabled = (available === 0 || gameState.isRoundOver);
            btnHint.innerHTML = available > 0 
                ? `<span>💡 Reveal Next Hint (-10 pts)</span>`
                : `<span>✓ All 3 Hints Revealed</span>`;
        }

        if (!listContainer || !gameState.currentMovie) return;

        if (gameState.hintsRevealed === 0) {
            listContainer.innerHTML = `
                <div class="hint-placeholder-msg" id="hint-placeholder">
                    No hints requested yet. Need assistance? Click below.
                </div>
            `;
            return;
        }

        listContainer.innerHTML = '';
        const hints = gameState.currentMovie.hints || [];

        for (let i = 0; i < gameState.hintsRevealed; i++) {
            if (hints[i]) {
                const tier = HINT_TIERS[i] || { label: `HINT ${i + 1}`, icon: '💡' };
                const item = document.createElement('div');
                item.className = 'hint-item';
                item.innerHTML = `
                    <div class="hint-item-badge">
                        <span>${tier.icon}</span>
                        <span>${tier.label}</span>
                    </div>
                    <div class="hint-item-text">${hints[i]}</div>
                `;
                listContainer.appendChild(item);
            }
        }
    }

    function useNextHint() {
        if (gameState.isRoundOver) return;
        if (gameState.hintsRevealed >= 3) return;

        sound.playClick();
        gameState.hintsRevealed++;

        // Hint penalty
        gameState.sessionScore = Math.max(0, gameState.sessionScore + CONFIG.POINTS_HINT_PENALTY);
        updateHeaderBadges();

        renderHintStation();
        announceToScreenReader(`Hint ${gameState.hintsRevealed} revealed.`);
    }

    /* ==========================================================================
       9. Core Guessing Engine
       ========================================================================== */

    function handleGuess(rawLetter) {
        if (gameState.isRoundOver || !gameState.currentMovie) return;

        const letter = (rawLetter || '').toUpperCase().trim();
        if (!letter || letter.length !== 1 || letter < 'A' || letter > 'Z') return;

        // Ignore already guessed letters
        if (gameState.guessedLetters.has(letter) || gameState.incorrectLetters.has(letter)) {
            return;
        }

        const normTitle = normalizeTitle(gameState.currentMovie.title);

        if (normTitle.includes(letter)) {
            // Correct guess!
            gameState.guessedLetters.add(letter);
            gameState.sessionScore += CONFIG.POINTS_CORRECT_LETTER;
            updateHeaderBadges();

            sound.playCorrect();
            updateVirtualKey(letter, true);
            renderWordSlots();

            announceToScreenReader(`Correct letter: ${letter}`);

            // Check if solved
            if (isTitleSolved()) {
                handleRoundWin();
            }
        } else {
            // Incorrect guess
            gameState.incorrectLetters.add(letter);
            gameState.remainingAttempts--;
            gameState.sessionScore = Math.max(0, gameState.sessionScore + CONFIG.POINTS_INCORRECT_LETTER);
            updateHeaderBadges();

            sound.playIncorrect();
            triggerHangmanShake();
            updateVirtualKey(letter, false);
            updateHangmanVisual();

            announceToScreenReader(`Incorrect letter: ${letter}. ${gameState.remainingAttempts} attempts remaining.`);

            // Check if lost
            if (gameState.remainingAttempts <= 0) {
                handleRoundLoss();
            }
        }
    }

    /* ==========================================================================
       10. Round Outcome: Win & Loss Handlers
       ========================================================================== */

    function handleRoundWin() {
        gameState.isRoundOver = true;
        gameState.sessionScore += CONFIG.POINTS_MOVIE_SOLVED;
        gameState.currentStreak++;
        gameState.stats.gamesPlayed++;
        gameState.stats.gamesWon++;
        gameState.stats.moviesSolved++;

        if (gameState.currentStreak > gameState.stats.bestStreak) {
            gameState.stats.bestStreak = gameState.currentStreak;
        }

        saveStatistics();
        sound.playWin();
        confetti.start(150);

        showResultModal(true);
        announceToScreenReader(`Victory! You solved the movie: ${gameState.currentMovie.displayTitle}`);
    }

    function handleRoundLoss() {
        gameState.isRoundOver = true;
        gameState.currentStreak = 0;
        gameState.stats.gamesPlayed++;

        saveStatistics();
        sound.playGameOver();

        // Reveal complete title on slots
        revealUnsolvedTitle();
        showResultModal(false);
        announceToScreenReader(`Game over. The movie was: ${gameState.currentMovie.displayTitle}`);
    }

    function revealUnsolvedTitle() {
        const slots = document.querySelectorAll('.letter-slot');
        slots.forEach(slot => {
            const letter = slot.dataset.letter;
            if (letter && !slot.classList.contains('revealed')) {
                slot.textContent = letter;
                slot.classList.add('revealed');
                slot.style.color = 'var(--danger)';
                slot.style.borderBottomColor = 'var(--danger)';
            }
        });
    }

    /* ==========================================================================
       11. Result Modal Display
       ========================================================================== */

    function showResultModal(isWin) {
        const modal = document.getElementById('modal-result');
        if (!modal || !gameState.currentMovie) return;

        const m = gameState.currentMovie;
        const graphic = document.getElementById('modal-graphic');
        const title = document.getElementById('modal-status-title');
        const sub = document.getElementById('modal-status-sub');

        if (isWin) {
            graphic.textContent = '🎉';
            title.textContent = 'MOVIE SOLVED!';
            title.className = 'modal-status-title win';
            sub.textContent = 'Spectacular TFI Knowledge!';
        } else {
            graphic.textContent = '💀';
            title.textContent = 'ATTEMPTS EXHAUSTED';
            title.className = 'modal-status-title loss';
            sub.textContent = 'Better luck on the next Telugu classic!';
        }

        // Movie Information
        const engTitle = document.getElementById('reveal-eng-title');
        const telTitle = document.getElementById('reveal-tel-title');
        const yearChip = document.getElementById('reveal-year-chip');
        const genreChip = document.getElementById('reveal-genre-chip');
        const eraChip = document.getElementById('reveal-era-chip');
        const directorEl = document.getElementById('reveal-director');
        const actorsEl = document.getElementById('reveal-actors');

        if (engTitle) engTitle.textContent = m.displayTitle || m.title;
        if (telTitle) telTitle.textContent = m.teluguTitle || '';
        if (yearChip) yearChip.textContent = m.year;
        if (genreChip) genreChip.textContent = (m.genres || []).join(' • ');
        if (eraChip) eraChip.textContent = m.era || '';
        if (directorEl) directorEl.textContent = m.director || 'N/A';
        if (actorsEl) actorsEl.textContent = (m.actors || []).join(', ');

        // Score Breakdown
        const roundScoreEl = document.getElementById('breakdown-round-score');
        const hintPenaltyEl = document.getElementById('breakdown-hint-penalty');
        const totalScoreEl = document.getElementById('breakdown-total-score');
        const streakEl = document.getElementById('breakdown-streak');

        const letterBonus = gameState.guessedLetters.size * CONFIG.POINTS_CORRECT_LETTER;
        const solvedBonus = isWin ? CONFIG.POINTS_MOVIE_SOLVED : 0;
        const mistakePenalty = gameState.incorrectLetters.size * CONFIG.POINTS_INCORRECT_LETTER;
        const hintPenalty = gameState.hintsRevealed * CONFIG.POINTS_HINT_PENALTY;
        const netRound = Math.max(0, letterBonus + solvedBonus + mistakePenalty);

        if (roundScoreEl) roundScoreEl.textContent = isWin ? `+${netRound} pts` : `0 pts`;
        if (hintPenaltyEl) hintPenaltyEl.textContent = hintPenalty !== 0 ? `${hintPenalty} pts` : '0 pts';
        if (totalScoreEl) totalScoreEl.textContent = `${gameState.sessionScore} pts`;
        if (streakEl) streakEl.textContent = `🔥 ${gameState.currentStreak}`;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    function hideResultModal() {
        const modal = document.getElementById('modal-result');
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
        confetti.stop();
    }

    /* ==========================================================================
       12. Career Statistics & Modals
       ========================================================================== */

    function renderStatsModal() {
        const highScoreEl = document.getElementById('stat-high-score');
        const gamesPlayedEl = document.getElementById('stat-games-played');
        const winRateEl = document.getElementById('stat-win-rate');
        const currStreakEl = document.getElementById('stat-curr-streak');
        const bestStreakEl = document.getElementById('stat-best-streak');
        const solvedCountEl = document.getElementById('stat-solved-count');

        const rate = gameState.stats.gamesPlayed > 0 
            ? Math.round((gameState.stats.gamesWon / gameState.stats.gamesPlayed) * 100) 
            : 0;

        if (highScoreEl) highScoreEl.textContent = gameState.stats.highScore;
        if (gamesPlayedEl) gamesPlayedEl.textContent = gameState.stats.gamesPlayed;
        if (winRateEl) winRateEl.textContent = `${rate}%`;
        if (currStreakEl) currStreakEl.textContent = gameState.currentStreak;
        if (bestStreakEl) bestStreakEl.textContent = gameState.stats.bestStreak;
        if (solvedCountEl) solvedCountEl.textContent = gameState.stats.moviesSolved;
    }

    function toggleStatsModal(show) {
        const modal = document.getElementById('modal-stats');
        if (!modal) return;
        if (show) {
            renderStatsModal();
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        } else {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    function toggleHelpModal(show) {
        const modal = document.getElementById('modal-help');
        if (!modal) return;
        if (show) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        } else {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    /* ==========================================================================
       13. Screen Navigation & Game Loop Initiation
       ========================================================================== */

    function showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(s => s.classList.remove('active'));

        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
        }

        // Header Mode Badge
        const modeBadge = document.getElementById('header-mode-badge');
        if (modeBadge) {
            if (screenId === 'screen-game') {
                modeBadge.classList.remove('hidden');
                modeBadge.textContent = gameState.mode === 'deepcut' ? 'TFI Deep Cut 🎯' : 'Standard TFI';
            } else {
                modeBadge.classList.add('hidden');
            }
        }
    }

    function startNewRound() {
        hideResultModal();

        gameState.remainingAttempts = CONFIG.MAX_ATTEMPTS;
        gameState.guessedLetters.clear();
        gameState.incorrectLetters.clear();
        gameState.hintsRevealed = 0;
        gameState.isRoundOver = false;

        const movie = selectNextMovie();
        if (!movie) {
            alert('No movies matching the selected criteria were found.');
            showScreen('screen-start');
            return;
        }

        // Update Meta Badges
        const eraBadge = document.getElementById('game-era-badge');
        const diffBadge = document.getElementById('game-diff-badge');
        const genreBadge = document.getElementById('game-genre-badge');

        if (eraBadge) eraBadge.textContent = `Era: ${movie.era}`;
        if (diffBadge) diffBadge.textContent = `Difficulty: ${movie.difficulty.toUpperCase()}`;
        if (genreBadge) genreBadge.textContent = (movie.genres || []).join(', ');

        // Update Clue Card
        const clueEl = document.getElementById('clue-text');
        if (clueEl) {
            clueEl.textContent = gameState.currentClue;
        }

        // Render UI Components
        resetHangmanVisual();
        renderWordSlots();
        renderVirtualKeyboard();
        renderHintStation();
        updateHeaderBadges();

        showScreen('screen-game');
        announceToScreenReader('New movie round started. Read the clue and guess the title.');
    }

    /* ==========================================================================
       14. Event Listeners & Keyboard Hook
       ========================================================================== */

    function setupEventListeners() {
        // Physical Keyboard Listener
        window.addEventListener('keydown', (e) => {
            // Ignore when typing inside any inputs (none in gameplay, but good safety)
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Enter or Space on active result modal advances to next round
            const resultModal = document.getElementById('modal-result');
            if (resultModal && resultModal.classList.contains('active')) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    startNewRound();
                    return;
                }
            }

            // Escape closes modals
            if (e.key === 'Escape') {
                toggleStatsModal(false);
                toggleHelpModal(false);
                return;
            }

            // Physical key A-Z
            if (/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const gameScreen = document.getElementById('screen-game');
                if (gameScreen && gameScreen.classList.contains('active') && !gameState.isRoundOver) {
                    handleGuess(e.key.toUpperCase());
                }
            }
        });

        // Start Screen: Mode Selectors
        document.querySelectorAll('.pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                sound.playClick();
                document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                gameState.mode = btn.dataset.mode;
            });
        });

        // Start Screen: Difficulty Buttons
        document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                sound.playClick();
                document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                gameState.difficulty = btn.dataset.diff;
            });
        });

        // Start Screen: Dropdowns
        const selectCat = document.getElementById('select-category');
        if (selectCat) {
            selectCat.addEventListener('change', (e) => {
                gameState.category = e.target.value;
            });
        }

        const selectEra = document.getElementById('select-era');
        if (selectEra) {
            selectEra.addEventListener('change', (e) => {
                gameState.era = e.target.value;
            });
        }

        // Play Button
        const btnStart = document.getElementById('btn-start-game');
        if (btnStart) {
            btnStart.addEventListener('click', () => {
                sound.playClick();
                startNewRound();
            });
        }

        // Header Navigation & Toggles
        const btnHome = document.getElementById('btn-home');
        if (btnHome) {
            btnHome.addEventListener('click', () => {
                sound.playClick();
                hideResultModal();
                showScreen('screen-start');
            });
        }

        const btnSound = document.getElementById('btn-sound');
        if (btnSound) {
            const icon = document.getElementById('sound-icon');
            if (icon) {
                icon.textContent = sound.isMuted ? '🔇' : '🔊';
            }
            btnSound.addEventListener('click', () => {
                const muted = sound.toggleMute();
                if (icon) {
                    icon.textContent = muted ? '🔇' : '🔊';
                }
            });
        }

        const btnStats = document.getElementById('btn-stats');
        if (btnStats) {
            btnStats.addEventListener('click', () => {
                sound.playClick();
                toggleStatsModal(true);
            });
        }

        const btnCloseStats = document.getElementById('btn-close-stats');
        if (btnCloseStats) {
            btnCloseStats.addEventListener('click', () => {
                sound.playClick();
                toggleStatsModal(false);
            });
        }

        const btnResetStats = document.getElementById('btn-reset-stats');
        if (btnResetStats) {
            btnResetStats.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all your career statistics and high score?')) {
                    sound.playClick();
                    resetStatistics();
                }
            });
        }

        const btnHelp = document.getElementById('btn-help');
        if (btnHelp) {
            btnHelp.addEventListener('click', () => {
                sound.playClick();
                toggleHelpModal(true);
            });
        }

        const btnCloseHelp = document.getElementById('btn-close-help');
        if (btnCloseHelp) {
            btnCloseHelp.addEventListener('click', () => {
                sound.playClick();
                toggleHelpModal(false);
            });
        }

        // Hint Button
        const btnUseHint = document.getElementById('btn-use-hint');
        if (btnUseHint) {
            btnUseHint.addEventListener('click', useNextHint);
        }

        // Next Movie Buttons
        const btnNextMovie = document.getElementById('btn-next-movie');
        if (btnNextMovie) {
            btnNextMovie.addEventListener('click', () => {
                sound.playClick();
                startNewRound();
            });
        }

        const btnModalMenu = document.getElementById('btn-modal-menu');
        if (btnModalMenu) {
            btnModalMenu.addEventListener('click', () => {
                sound.playClick();
                hideResultModal();
                showScreen('screen-start');
            });
        }
    }

    /* ==========================================================================
       15. Initialization
       ========================================================================== */

    function init() {
        console.log('%c🎬 TFI HANGMAN Engine Initialized', 'color: #FFC107; font-weight: bold; font-size: 16px;');

        // Run validation check from movies.js if available
        if (typeof validateMovieDatabase === 'function') {
            validateMovieDatabase();
        }

        populateCategories();
        loadStatistics();
        setupEventListeners();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

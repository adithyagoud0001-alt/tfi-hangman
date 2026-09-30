# 🎬 TFI HANGMAN — Telugu Cinema Movie Challenge

A polished, responsive, highly replayable Hangman-style quiz game dedicated exclusively to the **Telugu Film Industry (TFI)**. 

Built strictly with **Vanilla HTML5, CSS3, and JavaScript** — zero external UI libraries, frameworks, or dependencies.

---

## 🌟 Highlights

- **350 Verified Telugu Movies (2000–2026)**:
  - 100% original Telugu films across 6 eras (no dubs or TV shows).
  - Authentic Telugu script titles (`తెలుగు టైటిల్స్`), directors, cast, release years, and genres.
  - 4–6 indirect narrative/thematic clues per film (all strictly audited with zero direct title leaks).
- **Progressive Hint Station**:
  - Up to 3 progressive hints per movie (Thematic Overview, Narrative Context, Distinctive Trait).
  - Hint penalty system (-10 pts per hint, score floored at 0).
- **7-Stage SVG Hangman Gallows**:
  - Custom neon-styled animated Hangman SVG with progressive body parts and glowing aesthetics.
- **Web Audio API Sound Synth**:
  - Native procedural audio synthesis for button clicks, correct chime, wrong buzz, victory fanfare, and game-over melancholic tune (no external audio files required).
- **Pure Canvas Confetti**:
  - Lightweight physics-based confetti celebration on solved movies.
- **Modes & Filters**:
  - **Standard TFI**: Balanced mix of commercial blockbusters and hits.
  - **TFI Deep Cut 🎯**: For passionate cinephiles (cult classics, indie gems, offbeat cinema).
  - Filter by 6 distinct Cinema Eras (2000–2026) or dynamically generated Genre Categories.
- **Persistent Career Stats**:
  - High score, games played, win rate (%), current streak, and best streak saved in `localStorage`.

---

## 🚀 Live Demo & Deployment

### Run Locally
Simply open `index.html` in any modern web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Deploy to Vercel
This project is configured for zero-configuration static deployment on [Vercel](https://vercel.com).
Import this repository directly into Vercel or deploy via Vercel CLI:
```bash
npx vercel
```

---

## 📂 Project Structure

```
Hangman/
├── index.html       # Semantic HTML5 markup, SVG Hangman, game boards, and modals
├── style.css        # Cinematic dark theme (#080810), responsive layout, and animations
├── script.js        # Game engine, Web Audio synth, state manager, and input listeners
├── movies.js        # Verified database of 314 Telugu movies (2000–2026)
├── vercel.json      # Vercel deployment configuration
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

---

## 🎮 How to Play

1. **Read the Clue**: Decode the indirect premise describing a Telugu film.
2. **Guess Letters**: Use your physical keyboard (`A–Z`) or tap the on-screen keypad.
3. **7 Mistakes Allowed**: You have 7 attempts before the gallows is completed.
4. **Use Hints Wisely**: Need assistance? Unlock up to 3 progressive hints for -10 points each.
5. **Score Points**: +10 for correct letter, -5 for wrong letter, +50 for solving the title!

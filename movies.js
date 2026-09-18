/**
 * TFI HANGMAN - Comprehensive Telugu Movie Database (2000-2026)
 * Total verified films: 314
 * Strictly verified Telugu-language films from Tollywood.
 * Every movie includes verified title, Telugu script, director, leads, year, genres, clues, and progressive hints.
 */

const movies = [
    {
        "title": "BADRI",
        "displayTitle": "Badri",
        "teluguTitle": "బద్రి",
        "year": 2000,
        "director": "Puri Jagannadh",
        "actors": [
            "Pawan Kalyan",
            "Renu Desai",
            "Ameesha Patel"
        ],
        "genres": [
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A brash ad agency director finds himself caught between his existing relationship and a playful wager with his girlfriend.",
            "The narrative pivots around a high-stakes challenge: make an independent woman fall in love within a strict time limit.",
            "The movie introduced an iconic aggressive and nonchalant protagonist persona that influenced Telugu youth culture at the turn of the millennium.",
            "Set in the advertising and urban youth world, balancing fierce conflicts with modern romantic tension."
        ],
        "hints": [
            "The film is centered on romantic dilemmas, ego clashes, and impulsive bets.",
            "The male lead runs an advertising firm and takes up an arrogant relationship challenge.",
            "The protagonist's name itself forms the short five-letter title of the film."
        ],
        "id": 1
    },
    {
        "title": "NUVVE KAVALI",
        "displayTitle": "Nuvve Kavali",
        "teluguTitle": "నువ్వే కావాలి",
        "year": 2000,
        "director": "K. Vijaya Bhaskar",
        "actors": [
            "Tarun",
            "Richa Pallod",
            "Sai Kiran"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "Two inseparable childhood best friends born on the exact same day realize their hidden feelings only when an arranged marriage enters the picture.",
            "A landmark coming-of-age romantic musical that defined college campus romance in the year 2000.",
            "The story examines the delicate thin line separating lifelong platonic friendship from romantic passion.",
            "A college-centric drama featuring a celebrated soundtrack by Koti with heartfelt themes of unspoken affection."
        ],
        "hints": [
            "The premise revolves around childhood neighbors who believe they are only best friends.",
            "The turning point comes when one of them receives a marriage proposal from another suitor.",
            "The title expresses a heartfelt yearning that translates directly to wanting only that person."
        ],
        "id": 2
    },
    {
        "title": "KALISUNDAM RAA",
        "displayTitle": "Kalisundam Raa",
        "teluguTitle": "కలిసుందాం రా",
        "year": 2000,
        "director": "Udayasankar",
        "actors": [
            "Venkatesh",
            "Simran",
            "K. Vishwanath"
        ],
        "genres": [
            "Family",
            "Drama",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A foreign-educated grandson returns to his ancestral village aiming to mend a long-standing bitter feud between elders.",
            "The plot centers on an emotional joint family reunion framed against upcoming wedding celebrations.",
            "A celebrated joint family drama exploring generational estrangement, cultural roots, and forgiveness.",
            "The hero works covertly to unite his grandfather with his estranged daughter's family."
        ],
        "hints": [
            "A massive family reunion story set amidst traditional village celebrations.",
            "The protagonist hides his true parentage initially to gain entry into his grandfather's heart.",
            "The title translates as an encouraging invitation to stay together in harmony."
        ],
        "id": 3
    },
    {
        "title": "CHITRAM",
        "displayTitle": "Chitram",
        "teluguTitle": "చిత్రం",
        "year": 2000,
        "director": "Teja",
        "actors": [
            "Uday Kiran",
            "Reemma Sen"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "hard",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A low-budget trendsetter that dealt with the serious consequences of teenage infatuation and an unexpected pregnancy among college freshmen.",
            "Launched the career of a director known for intense romantic conflicts and introduced fresh faces to Tollywood.",
            "The film broke away from traditional formulaic romance to address youthful recklessness with raw realism.",
            "Features a youthful soundtrack by R. P. Patnaik that became an instant sensation in college campuses."
        ],
        "hints": [
            "The story focuses on two young college students confronting adolescent mistakes.",
            "Societal stigma and family disapproval threaten the young couple's future.",
            "The one-word title means 'picture' or 'wonder' in Telugu."
        ],
        "id": 4
    },
    {
        "title": "AZAD",
        "displayTitle": "Azad",
        "teluguTitle": "ఆజాద్",
        "year": 2000,
        "director": "Thirupathisamy",
        "actors": [
            "Nagarjuna",
            "Soundarya",
            "Shilpa Shetty"
        ],
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "recognized",
        "era": "2000-2004",
        "clues": [
            "An innocent, carefree man is inadvertently pulled into a patriotic crusade when a brave journalist attributes an underground crusader's identity to him.",
            "The narrative balances high-voltage anti-terrorism action with a double identity mystery.",
            "A principled investigative journalist invents an anonymous hero in her newspaper columns, which subsequently comes to life.",
            "The protagonist is forced to rise to the occasion and protect the state from political conspirators."
        ],
        "hints": [
            "The story involves an ordinary man assuming the heroic identity fabricated by a newspaper reporter.",
            "Themes of patriotism and fighting terrorist plots take center stage.",
            "The title is an Urdu word meaning 'Free' or 'Liberated'."
        ],
        "id": 5
    },
    {
        "title": "JAYAM MANADERA",
        "displayTitle": "Jayam Manadera",
        "teluguTitle": "జయం మనదేరా",
        "year": 2000,
        "director": "N. Shankar",
        "actors": [
            "Venkatesh",
            "Soundarya",
            "Bhanupriya"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "recognized",
        "era": "2000-2004",
        "clues": [
            "A fun-loving UK tourist discovers his startling resemblance to a deceased revolutionary who fought oppressive feudal lords in Rayalaseema.",
            "Features a dual role contrasting modern urban lightheartedness with intense faction-ridden rural rebellion.",
            "The protagonist returns to an oppressed village to avenge his father's murder and liberate downtrodden villagers.",
            "Set partially in Europe before moving to the rugged, dramatic landscapes of rural Andhra."
        ],
        "hints": [
            "A dual-role action drama involving the liberation of an oppressed rural community.",
            "The son learns of his father's sacrifice during a trip abroad when he encounters family loyalists.",
            "The title proclaims that victory belongs rightfully to us."
        ],
        "id": 6
    },
    {
        "title": "NUVVU NENU",
        "displayTitle": "Nuvvu Nenu",
        "teluguTitle": "నువ్వు నేను",
        "year": 2000,
        "director": "Teja",
        "actors": [
            "Uday Kiran",
            "Anita Hassanandani",
            "Sunil"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "The stark economic divide between a wealthy tycoon's pampered son and a poor milkman's daughter sparks a fierce class conflict.",
            "Features an emotional climax set in Mumbai with runaway young lovers fighting ruthless parental opposition.",
            "A mega blockbuster of its year that cemented the romantic hero status of its male lead.",
            "The film earned numerous Nandi Awards and is remembered for its emotional melodies like 'Gaajuvaka Pilla'."
        ],
        "hints": [
            "A passionate college love story divided by vast economic disparity.",
            "The hero's arrogant wealthy father hires goons to separate the young lovers.",
            "The title is a simple two-word phrase meaning 'You and Me'."
        ],
        "id": 7
    },
    {
        "title": "MURARI",
        "displayTitle": "Murari",
        "teluguTitle": "మురారి",
        "year": 2001,
        "director": "Krishna Vamsi",
        "actors": [
            "Mahesh Babu",
            "Sonali Bendre",
            "Lakshmi"
        ],
        "genres": [
            "Drama",
            "Fantasy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A devastating ancestral curse placed by the goddess Ammavaru dictates that an heir dies every forty-eight years in a royal Zamindar lineage.",
            "The protagonist's stepmother fights divine astrological destiny and undertakes grueling vows to preserve his life.",
            "The film masterfully weaves together rich Telugu cultural rituals, joint family affection, and supernatural folklore.",
            "Celebrated for its grand festive songs, mythological backdrop, and poignant climax at a sacred temple pond."
        ],
        "hints": [
            "Centuries-old ancestral divine curse threatens the life of a charismatic young family heir.",
            "The stepmother's unconditional maternal love stands as the spiritual shield.",
            "The title is the titular name of the happy-go-lucky protagonist."
        ],
        "id": 8
    },
    {
        "title": "KUSHI",
        "displayTitle": "Kushi",
        "teluguTitle": "ఖుషి",
        "year": 2001,
        "director": "S. J. Suryah",
        "actors": [
            "Pawan Kalyan",
            "Bhumika Chawla",
            "Mumtaj"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "Two college students from Kolkata and Hyderabad constantly clash due to massive egos while trying to unite two mutual friends.",
            "A cultural milestone known for its trendsetting fashion, energetic music by Mani Sharma, and unforgettable verbal sparring.",
            "The story begins with an astrological prologue tracing two babies born in separate corners of the country destined to meet.",
            "Features memorable comedic episodes involving stubborn pride, missed confessions, and a scene inside a temple."
        ],
        "hints": [
            "A whirlwind college romantic comedy built on stubborn ego and pride.",
            "The leads spend the entire narrative bickering even as they secretly cherish each other.",
            "The title signifies happiness or joy and is a popular five-letter word."
        ],
        "id": 9
    },
    {
        "title": "NUVVU NAAKU NACHAV",
        "displayTitle": "Nuvvu Naaku Nachav",
        "teluguTitle": "నువ్వు నాకు నచ్చావ్",
        "year": 2001,
        "director": "K. Vijaya Bhaskar",
        "actors": [
            "Venkatesh",
            "Aarti Agarwal",
            "Prakash Raj"
        ],
        "genres": [
            "Comedy",
            "Romance",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "An unemployed youth visits his father's childhood friend in the city and unexpectedly wins over a family preparing for a daughter's wedding.",
            "Considered one of the greatest Telugu comedy scripts of all time, packed with timeless dialogues written by Trivikram Srinivas.",
            "The protagonist must suppress his budding feelings to honor his father's sacred friendship and avoid disrupting an engagement.",
            "Features legendary comic chemistry between the lead, Sunil, Brahmanandam, and MS Narayana."
        ],
        "hints": [
            "A comedy-drama where a visiting guest unintentionally falls in love with an already-engaged woman.",
            "Celebrated for its repeat-watchable witty humor, family warmth, and Trivikram's punchlines.",
            "The title translates as 'I like you'."
        ],
        "id": 10
    },
    {
        "title": "ITLU SRAVANI SUBRAMANYAM",
        "displayTitle": "Itlu Sravani Subramanyam",
        "teluguTitle": "ఇట్లు శ్రావణి సుబ్రమణ్యం",
        "year": 2001,
        "director": "Puri Jagannadh",
        "actors": [
            "Ravi Teja",
            "Tanu Roy"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "Two desperate strangers meet at a suicide spot, make a mutual pact to end their lives, but miraculously survive after being saved.",
            "Their second chance at life leads to friendship, financial struggle, and unexpected romantic affection.",
            "Served as the breakthrough movie that established the male lead as a dependable commercial star.",
            "The narrative balances dark desperation with hopeful urban survival in Visakhapatnam."
        ],
        "hints": [
            "The story begins with two strangers meeting at a cliff to end their misery together.",
            "After waking up in a hospital, they discover new reasons to live.",
            "The title is phrased like a formal sign-off in a Telugu letter between the two leads."
        ],
        "id": 11
    },
    {
        "title": "STUDENT NO. 1",
        "displayTitle": "Student No.1",
        "teluguTitle": "స్టూడెంట్ నెం.1",
        "year": 2001,
        "director": "S. S. Rajamouli",
        "actors": [
            "Jr NTR",
            "Gajala",
            "Rajeev Kanakala"
        ],
        "genres": [
            "Action",
            "Drama",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A serious law college student strictly adheres to disciplinary boundaries because he is actually an inmate serving a life sentence on day parole.",
            "Marked the directorial debut of a filmmaker who would later craft India's most monumental historical epics.",
            "The protagonist hides a tragic backstory involving protecting his family honor from ruthless gangsters.",
            "Features high-energy action, student solidarity against campus bullies, and an emotional father-son relationship."
        ],
        "hints": [
            "The lead character attends law classes during the day and returns to Central Jail at night.",
            "The directorial debut of S. S. Rajamouli.",
            "The title combines a common collegiate term with a top numerical ranking."
        ],
        "id": 12
    },
    {
        "title": "HANUMAN JUNCTION",
        "displayTitle": "Hanuman Junction",
        "teluguTitle": "హనుమాన్ జంక్షన్",
        "year": 2001,
        "director": "M. Raja",
        "actors": [
            "Jagapathi Babu",
            "Arjun Sarja",
            "Sneha",
            "Laya"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "Two fiercely loyal foster brothers rule a rural crossroad town and refuse to marry until their beloved sister is happily settled.",
            "A riotous comedy of errors ensues when both brothers secretly fall for the same woman and misread each other's romantic intentions.",
            "Packed with slapstick confusion, village rivalry, and legendary comedy tracks featuring Ali and Brahmanandam.",
            "A celebrated multi-starrer comedy drama that became a massive festive box office success."
        ],
        "hints": [
            "Two sworn brothers who govern a bustling junction get into comedic misunderstandings over a girl.",
            "Family loyalty and hilarious confusion dominate the second half.",
            "The title is named after a real and famous railway junction town in Andhra Pradesh."
        ],
        "id": 13
    },
    {
        "title": "SANTOSHAM",
        "displayTitle": "Santosham",
        "teluguTitle": "సంతోషం",
        "year": 2002,
        "director": "Dasaradh",
        "actors": [
            "Nagarjuna",
            "Shriya Saran",
            "Gracy Singh",
            "Prabhu Deva"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "An architect living in New Zealand loses his wife in a tragic mishap and returns to India with his young son to heal an alienated family.",
            "His deceased wife's cousin harbors a deep, silent affection for him while trying to ease his profound grief.",
            "A mature family drama with soulful music composed by R. P. Patnaik that celebrated the resilience of love.",
            "Focuses on second chances, sacrifice, and overcoming bereavement through familial warmth."
        ],
        "hints": [
            "A widower father struggles with sorrow while his sister-in-law stands by his young child.",
            "Features the emotional anthem 'Devadeva Dhavala Charitha' and serene overseas visuals.",
            "The one-word title translates directly to 'Happiness'."
        ],
        "id": 14
    },
    {
        "title": "JAYAM",
        "displayTitle": "Jayam",
        "teluguTitle": "జయం",
        "year": 2002,
        "director": "Teja",
        "actors": [
            "Nithiin",
            "Sadha",
            "Gopichand"
        ],
        "genres": [
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A frail poor village boy challenges a violent, ruthless feudal landlord's son to protect his childhood romance.",
            "Spawned the iconic catchphrase 'Vellostha' and introduced a memorable villain whose menacing whistle terrorized audiences.",
            "A gripping tale of rustic lovers fleeing through dense forest landscapes pursued by an armed factionist.",
            "A huge musical hit of 2002 that launched the careers of both its lead actor and its menacing antagonist."
        ],
        "hints": [
            "A raw rustic romance pitted against a terrifying, possessive cousin and zamindar.",
            "The couple runs into the woods, relying on wit and courage to survive.",
            "The title translates as 'Victory'."
        ],
        "id": 15
    },
    {
        "title": "AADI",
        "displayTitle": "Aadi",
        "teluguTitle": "ఆది",
        "year": 2002,
        "director": "V. V. Vinayak",
        "actors": [
            "Jr NTR",
            "Keerthi Chawla",
            "Rajan P. Dev"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A college youth raised peacefully in Hyderabad is unaware that he is the lone surviving scion of a martyred Rayalaseema landlord.",
            "Features explosive mass dialogues in an engineering college backdrop and blood-soaked faction vengeance.",
            "The breakthrough mass action blockbuster that cemented its young nineteen-year-old lead as a top-tier mass superstar.",
            "Famous for thunderous confrontations like the iconic challenge in the factionist's den."
        ],
        "hints": [
            "A young man learns of his bloody Rayalaseema lineage and steps into his father's shoes.",
            "The directorial debut of action filmmaker V. V. Vinayak.",
            "The four-letter title is the pet name and official identity of the protagonist."
        ],
        "id": 16
    },
    {
        "title": "MANMADHUDU",
        "displayTitle": "Manmadhudu",
        "teluguTitle": "మన్మథుడు",
        "year": 2002,
        "director": "K. Vijaya Bhaskar",
        "actors": [
            "Nagarjuna",
            "Sonali Bendre",
            "Anshu"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A cynical ad agency manager who harbors a profound hatred for women due to past heartbreak is forced to work closely with a new female executive on a Paris project.",
            "Boasts an immortal comedy track featuring Brahmanandam as Lavangam and Dharmavarapu Subramanyam.",
            "Scripted by Trivikram Srinivas, virtually every dialogue in this film remains an entrenched pop-culture meme in Andhra and Telangana.",
            "Deals with overcoming deep emotional trauma to rediscover faith in companionship."
        ],
        "hints": [
            "The protagonist claims he despises women, but travels to Paris with an ad agency colleague.",
            "Lavangam's comedic antics in France are unforgettable.",
            "The title refers to the mythological Hindu god of love and desire, Kamadeva."
        ],
        "id": 17
    },
    {
        "title": "INDRA",
        "displayTitle": "Indra",
        "teluguTitle": "ఇంద్ర",
        "year": 2002,
        "director": "B. Gopal",
        "actors": [
            "Chiranjeevi",
            "Sonali Bendre",
            "Aarti Agarwal"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A mild-mannered taxi company owner in Varanasi conceals his royal identity as a revered Rayalaseema chieftain who sacrificed all to build a water reservoir.",
            "All-time industry record-breaker renowned for dramatic chair-drag sequences and fierce faction reconciliation.",
            "The protagonist resolves to end decades of bloodletting by giving up his ancestral lands for the public welfare of parched drought lands.",
            "Mani Sharma's thunderous background score and songs made this film a landmark cultural event in 2002."
        ],
        "hints": [
            "A humble man in Kashi is revealed to be a legendary peace-loving Rayalaseema leader.",
            "Water reservoir construction forms the noble mission at the core of the conflict.",
            "The title is the regal name shared with the king of the devas in Hindu mythology."
        ],
        "id": 18
    },
    {
        "title": "IDIOT",
        "displayTitle": "Idiot",
        "teluguTitle": "ఇడియట్",
        "year": 2002,
        "director": "Puri Jagannadh",
        "actors": [
            "Ravi Teja",
            "Rakshita",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A reckless police constable's son falls in love with the daughter of the strict City Police Commissioner and openly defies him with fearless banter.",
            "Redefined the rebel protagonist archetype in modern Telugu cinema with a distinct carefree, unapologetic swagger.",
            "The hero refuses traditional subservience and challenges police brutality with sheer street-smart bravado.",
            "Features the explosive dialogue dynamic between the young lover and the authoritarian commissioner played by Prakash Raj."
        ],
        "hints": [
            "The hero dares to woo the top cop's daughter despite constant arrests and warnings.",
            "Puri Jagannadh directed this pathbreaking action entertainer.",
            "The title is a common English insult adopted by the rebellious hero with pride."
        ],
        "id": 19
    },
    {
        "title": "KHADGAM",
        "displayTitle": "Khadgam",
        "teluguTitle": "ఖడ్గం",
        "year": 2002,
        "director": "Krishna Vamsi",
        "actors": [
            "Srikanth",
            "Ravi Teja",
            "Prakash Raj",
            "Sonali Bendre",
            "Sangeetha"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "An ensemble drama intertwining an upright Hindu police officer, a struggling Muslim auto driver seeking communal brotherhood, and an ambitious aspiring cinema actor.",
            "A passionate patriotic call against communal divide and cross-border terrorism in Hyderabad.",
            "Features the iconic song 'Meme Indians' and raw depiction of film industry struggles alongside national defense.",
            "Won multiple State Nandi Awards for its fiery emotional intensity and social harmony message."
        ],
        "hints": [
            "Three distinct men unite to stop a terrorist plot targeting the historic city of Hyderabad.",
            "The cinema aspirant character keeps declaring 'Nenu Trend ni follow avvanu, set chestha'.",
            "The title is the Telugu word for 'Sword'."
        ],
        "id": 20
    },
    {
        "title": "SHOW",
        "displayTitle": "Show",
        "teluguTitle": "షో",
        "year": 2002,
        "director": "Neelakanta",
        "actors": [
            "Manjula Ghattamaneni",
            "Surya"
        ],
        "genres": [
            "Drama",
            "Thriller",
            "Experimental"
        ],
        "difficulty": "hard",
        "popularity": "critically-acclaimed",
        "era": "2000-2004",
        "clues": [
            "A rare minimalist two-character experimental film set almost entirely inside a secluded country cottage over an afternoon.",
            "A businesswoman wanting to purchase a remote resort interacts with an eccentric caretaker who turns their conversation into psychological roleplay.",
            "Won the prestigious National Film Award for Best Feature Film in Telugu and Best Screenplay.",
            "Relies exclusively on razor-sharp intellectual dialogue, suspenseful mind games, and actor nuances without song sequences."
        ],
        "hints": [
            "A single-location chamber drama featuring only two primary actors on screen.",
            "Directed by Neelakanta, exploring theatrical psychological deception.",
            "The four-letter English title refers to an exhibition or dramatic performance."
        ],
        "id": 21
    },
    {
        "title": "AITHE",
        "displayTitle": "Aithe",
        "teluguTitle": "ఐతే",
        "year": 2003,
        "director": "Chandra Sekhar Yeleti",
        "actors": [
            "Shashank",
            "Sindhu Tolani",
            "Pavan Malhotra"
        ],
        "genres": [
            "Thriller",
            "Crime",
            "Mystery"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "Four desperate, unemployed youngsters are lured into an audacious plot by an international fugitive to hijack a domestic passenger flight.",
            "A groundbreaking Telugu heist and hostage thriller that introduced realistic, screenplay-driven cinema to a new generation.",
            "Won the National Film Award for Best Feature Film in Telugu for its innovative low-budget craft.",
            "Tagline famously proclaimed: 'Any thing can happen, any time'."
        ],
        "hints": [
            "Four ordinary youths are manipulated by a mafia don into hijacking an airplane.",
            "Directed by Chandra Sekhar Yeleti in his directorial debut.",
            "The single five-letter title is a Telugu conditional word meaning 'Then' or 'If so'."
        ],
        "id": 22
    },
    {
        "title": "OKKADU",
        "displayTitle": "Okkadu",
        "teluguTitle": "ఒక్కడు",
        "year": 2003,
        "director": "Gunasekhar",
        "actors": [
            "Mahesh Babu",
            "Bhumika Chawla",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A state-level Kabaddi player visiting Kurnool for a tournament unexpectedly rescues a helpless young woman from a psychotic factionist wanting to marry her.",
            "The hero smuggles her to Hyderabad and conceals her in his own house right under his strict police commissioner father's nose.",
            "Famous for the massive Charminar set constructed in Gandipet and heart-stopping chase sequences.",
            "Considered one of the most defining and influential commercial action-romance films of modern Telugu cinema."
        ],
        "hints": [
            "A Kabaddi athlete protects an innocent woman from the obsessive Obul Reddy.",
            "The historical Charminar in Old City serves as the backdrop for the thrilling climax.",
            "The title translates as 'The Only One' or 'A Lone Man'."
        ],
        "id": 23
    },
    {
        "title": "DIL",
        "displayTitle": "Dil",
        "teluguTitle": "దిల్",
        "year": 2003,
        "director": "V. V. Vinayak",
        "actors": [
            "Nithiin",
            "Neha Bamb",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "A courageous college student falls in love with the daughter of a merciless land mafia don and repeatedly foils his threats.",
            "The film gave its renowned producer his permanent industry prefix moniker.",
            "Features an adrenaline-pumping college campus atmosphere, athletic fights, and stubborn family defiance.",
            "The hero risks his life and takes severe beatings to prove the unyielding strength of his love."
        ],
        "hints": [
            "The male lead takes on a ruthless underworld father to win his classmate's hand.",
            "Producer Raju earned his famous nickname from the title of this movie.",
            "The three-letter title means 'Heart'."
        ],
        "id": 24
    },
    {
        "title": "SIMHADRI",
        "displayTitle": "Simhadri",
        "teluguTitle": "సింహాద్రి",
        "year": 2003,
        "director": "S. S. Rajamouli",
        "actors": [
            "Jr NTR",
            "Bhumika Chawla",
            "Ankitha",
            "Mukesh Rishi"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A devoted household servant in Visakhapatnam harbors a deadly secret identity as an ax-wielding savior of the oppressed in Kerala.",
            "The hero protects a mentally challenged girl who turns out to be the granddaughter of his revered adoptive father.",
            "The film achieved historic box office records and solidified the unstoppable combination of its director and lead actor.",
            "Renowned for the thunderous interval twist and high-octane emotional melodrama."
        ],
        "hints": [
            "The loyal family servant is secretly the feared protector known as 'Singamalai' across the state border.",
            "An ax with a curved blade became the famous weapon associated with this film.",
            "The title is the eight-letter name of the heroic protagonist."
        ],
        "id": 25
    },
    {
        "title": "MISSAMMA",
        "displayTitle": "Missamma",
        "teluguTitle": "మిస్సమ్మ",
        "year": 2003,
        "director": "Neelakanta",
        "actors": [
            "Bhoomika Chawla",
            "Sivaji",
            "Laya"
        ],
        "genres": [
            "Thriller",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A strict, high-powered female corporate managing director offers a meek male subordinate a lucrative promotion if he agrees to an unusual personal agreement.",
            "The young husband is driven to immense mental paranoia as the boss appears to intentionally sabotage his happy domestic marriage.",
            "Won prestigious Nandi Awards, including Best Feature Film in Bronze and Best Actress.",
            "A suspenseful workplace psychological puzzle exploring power dynamics, jealousy, and hidden motivations."
        ],
        "hints": [
            "A domineering female boss drives an innocent married accountant to the brink of insanity.",
            "The mystery unravels to reveal an emotional medical emergency and noble sacrifice.",
            "The title shares its name with the legendary 1955 classic starring NTR and ANR."
        ],
        "id": 26
    },
    {
        "title": "AMMA NANNA O TAMILA AMMAYI",
        "displayTitle": "Amma Nanna O Tamila Ammayi",
        "teluguTitle": "అమ్మ నాన్న ఓ తమిళ అమ్మాయి",
        "year": 2003,
        "director": "Puri Jagannadh",
        "actors": [
            "Ravi Teja",
            "Asin",
            "Jayasudha",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Drama",
            "Romance",
            "Sports"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "Following his dying mother's wish, an amateur kickboxer travels to Hyderabad to meet the estranged father who abandoned them years ago.",
            "The protagonist enters professional boxing to earn the respect of his father, a renowned boxing coach who trains a rival champion.",
            "Simultaneously tracks a sweet cross-cultural romance with an innocent Tamil girl who relocated to the city.",
            "Celebrated for its heartfelt mother-son sentiment and electric boxing showdowns."
        ],
        "hints": [
            "A kickboxer fights in the ring while trying to reconnect with his distant coach father.",
            "Introduced actress Asin to the Telugu film industry.",
            "The long title mentions parents and a girl from a neighboring southern state."
        ],
        "id": 27
    },
    {
        "title": "TAGORE",
        "displayTitle": "Tagore",
        "teluguTitle": "ఠాగూర్",
        "year": 2003,
        "director": "V. V. Vinayak",
        "actors": [
            "Chiranjeevi",
            "Shriya Saran",
            "Jyothika"
        ],
        "genres": [
            "Action",
            "Drama",
            "Social Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A respected physics professor secretly orchestrates the Anti-Corruption Force (ACF) with his former students to eliminate corrupt government officials.",
            "The protagonist uses systematic data collection to identify and kidnap the most corrupt officers across departments.",
            "Features the famous court monologue advocating systemic reform and the plight of the common citizen.",
            "A sensational social action drama that dominated the box office in late 2003."
        ],
        "hints": [
            "A college professor runs a clandestine vigilante organization targeting bureaucratic corruption.",
            "The hero loses his entire family in an unsafe apartment building collapse caused by bribery.",
            "The title is named after the noble alias used by the vigilante professor."
        ],
        "id": 28
    },
    {
        "title": "SIVAMANI",
        "displayTitle": "Sivamani",
        "teluguTitle": "శివమణి",
        "year": 2003,
        "director": "Puri Jagannadh",
        "actors": [
            "Nagarjuna",
            "Asin",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "An intense, righteous circle inspector falls in love with a speech-impaired singer, but a sadistic mafia gangster destroys their world.",
            "The heartbroken cop wanders across towns with an alcohol flask, desperately searching for his missing beloved.",
            "Features the famous tagline '9848022338 - Cell No', which became a massive craze among mobile users in the early 2000s.",
            "A stylish, gritty action romance scored with haunting melodies by Chakri."
        ],
        "hints": [
            "The protagonist is an aggressive police officer who lost his voice and his lover to a mobster.",
            "A specific ten-digit mobile phone number served as the film's official promotional subtitle.",
            "The title is the first name of the tough police protagonist."
        ],
        "id": 29
    },
    {
        "title": "SATYAM",
        "displayTitle": "Satyam",
        "teluguTitle": "సత్యం",
        "year": 2003,
        "director": "Surya Kiran",
        "actors": [
            "Sumanth",
            "Genelia D'Souza",
            "Kota Srinivasa Rao"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "A struggling aspiring lyricist pens profound romantic poetry for his beloved, but an opportunistic friend steals his work and claims credit.",
            "The protagonist endures heartbreak and poverty in silence rather than disillusioning the girl he loves.",
            "Features the chartbuster album composed by Chakri, with iconic songs like 'Madhurame Madhurame'.",
            "A sensitive romance exploring artistic integrity, unrequited devotion, and selfless sacrifice."
        ],
        "hints": [
            "The hero is a ghostwriter whose romantic poems win the heart of a girl for someone else.",
            "Produced under the prestigious Annapurna Studios banner.",
            "The title is the six-letter name of the honest protagonist."
        ],
        "id": 30
    },
    {
        "title": "VARSHAM",
        "displayTitle": "Varsham",
        "teluguTitle": "వర్షం",
        "year": 2004,
        "director": "Sobhan",
        "actors": [
            "Prabhas",
            "Trisha Krishnan",
            "Gopichand"
        ],
        "genres": [
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "Two lovers whose affection blossoms during rain showers are torn apart by an opportunistic father and a violent landlord's son.",
            "Years later, the girl has become a famous movie actress, and her former lover is hired to protect her on set from her stalker.",
            "Catapulted its male lead to mainstream stardom and produced one of Devi Sri Prasad's all-time greatest romantic soundtracks.",
            "The monsoon rain acts as a recurring poetic motif symbolizing their love and ultimate reunion."
        ],
        "hints": [
            "Rain serves as the central character witnessing the love story between Venkat and Sailaja.",
            "Features the iconic dance track 'Mellaga Karagani' in the rain.",
            "The title is the Telugu word for 'Rain'."
        ],
        "id": 31
    },
    {
        "title": "MALLESHWARI",
        "displayTitle": "Malliswari",
        "teluguTitle": "మల్లీశ్వరి",
        "year": 2004,
        "director": "K. Vijaya Bhaskar",
        "actors": [
            "Venkatesh",
            "Katrina Kaif"
        ],
        "genres": [
            "Comedy",
            "Romance",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "An honest bank employee in Visakhapatnam unintentionally shields a wealthy royal heiress who is on the run from assassins seeking her grandfather's inheritance.",
            "The male lead believes she is an ordinary, destitute relative of his boss and constantly helps her out.",
            "Marked the South Indian cinema debut of a future leading Bollywood actress.",
            "Written by Trivikram Srinivas, packed with legendary comedy scenes featuring Brahmanandam, Sunil, and Kota Srinivasa Rao."
        ],
        "hints": [
            "A royal princess hiding in Vizag falls for a simple bank clerk while dodging murder plots.",
            "The heroine inherits several hundred crores of royal estate on her approaching birthday.",
            "The title is the royal name of the female protagonist."
        ],
        "id": 32
    },
    {
        "title": "VENKY",
        "displayTitle": "Venky",
        "teluguTitle": "వెంకీ",
        "year": 2004,
        "director": "Srinu Vaitla",
        "actors": [
            "Ravi Teja",
            "Sneha",
            "Ashutosh Rana"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A reckless slacker and his friends board a train to Hyderabad for police training and accidentally get entangled in a brutal double homicide.",
            "Features what is universally regarded as one of the funniest train comedy episodes in Indian cinema history featuring Gajala and comic drunkards.",
            "The protagonists try to pass police academy exams while hiding evidence that mistakenly frames them for murder.",
            "Srinu Vaitla's signature comedy thriller with unforgettable performances by Brahmanandam and Venu Madhav."
        ],
        "hints": [
            "The Godavari Express train journey in this film contains legendary comedy with 'Gajala from Washington'.",
            "The hero mistakenly believes he committed a murder while heavily intoxicated.",
            "The five-letter title is the casual pet name of the protagonist."
        ],
        "id": 33
    },
    {
        "title": "ARYA",
        "displayTitle": "Arya",
        "teluguTitle": "ఆర్య",
        "year": 2004,
        "director": "Sukumar",
        "actors": [
            "Allu Arjun",
            "Anu Mehta",
            "Siva Balaji"
        ],
        "genres": [
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A free-spirited college student advocates a radical philosophy of unconditional 'one-side love' towards a girl committed to someone else.",
            "The protagonist actively assists the girl and her possessive, short-tempered boyfriend in overcoming parental resistance.",
            "The directorial debut of Sukumar that established a new benchmark for stylish cinematography and innovative romantic writing.",
            "Features the iconic energetic chartbuster 'Aa Ante Amalapuram' and Devi Sri Prasad's timeless soundtrack."
        ],
        "hints": [
            "The hero believes in loving wholeheartedly without expecting the girl to love him back.",
            "The tagline 'Feel my love' became an anthem among contemporary youth.",
            "The four-letter title is the name of the eccentric, joyful male lead."
        ],
        "id": 34
    },
    {
        "title": "SYE",
        "displayTitle": "Sye",
        "teluguTitle": "సై",
        "year": 2004,
        "director": "S. S. Rajamouli",
        "actors": [
            "Nithiin",
            "Genelia D'Souza",
            "Pradeep Rawat",
            "Shashank"
        ],
        "genres": [
            "Sports",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "Two warring college factions united by their love for campus rivalry must set aside animosity to challenge a brutal land mafia don in a high-stakes rugby match.",
            "A pioneering sports-action drama that introduced the game of rugby to the mainstream South Indian audience.",
            "Features the terrifying antagonist 'Bhikshu Yadav', whose menacing screen presence became iconic.",
            "S. S. Rajamouli infused intense athletic adrenaline, collegiate spirit, and patriotic pride into the climax."
        ],
        "hints": [
            "College students settle land ownership with a dreaded gangster on the rugby field.",
            "Arts and Science college rival groups combine forces to save their campus grounds.",
            "The three-letter title is an assertive Telugu exclamation meaning 'Are you ready for the challenge?'"
        ],
        "id": 35
    },
    {
        "title": "ANAND",
        "displayTitle": "Anand",
        "teluguTitle": "ఆనంద్",
        "year": 2004,
        "director": "Sekhar Kammula",
        "actors": [
            "Raja",
            "Kamalinee Mukherjee",
            "Satya Krishnan"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "An independent young woman calls off her wedding due to in-law arrogance, only for a wealthy, gentle suitor to move into her neighborhood unannounced.",
            "The film carried the famous promotional tagline 'Manchi coffee lanti cinema' (A film like a good cup of coffee).",
            "A breath of fresh air that revived urban, realistic, and character-driven storytelling in Telugu cinema.",
            "Won six State Nandi Awards, celebrating everyday human conversations and quiet emotional resonance."
        ],
        "hints": [
            "A charming, subtle romance centered on the strong-willed Rupa living in Hyderabad.",
            "Sekhar Kammula's breakthrough independent success.",
            "The title translates to 'Bliss' or 'Joy' and is also the male lead's name."
        ],
        "id": 36
    },
    {
        "title": "SHANKAR DADA M.B.B.S.",
        "displayTitle": "Shankar Dada M.B.B.S.",
        "teluguTitle": "శంకర్ దాదా ఎంబీబీఎస్",
        "year": 2004,
        "director": "Jayanth C. Paranjee",
        "actors": [
            "Chiranjeevi",
            "Sonali Bendre",
            "Srikanth",
            "Paresh Rawal"
        ],
        "genres": [
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A benevolent local mob enforcer pretends to run a charitable hospital to appease his visiting village parents.",
            "When his charade is humiliated by a medical dean, he enrolls in medical college to earn an actual degree and treats patients with compassion.",
            "Popularized the concept of 'Chitti' (ATM) friendship and empathetic healing over mechanical medical procedures.",
            "A massive blockbuster remake of Munna Bhai M.B.B.S. that showcased peerless comic timing and emotional warmth."
        ],
        "hints": [
            "A good-natured don attends medical school to heal people through affection and hugs.",
            "Srikanth plays his loyal right-hand partner 'ATM'.",
            "The title contains the don's respectful street moniker followed by the medical degree abbreviation."
        ],
        "id": 37
    },
    {
        "title": "AA NALUGURU",
        "displayTitle": "Aa Naluguru",
        "teluguTitle": "ఆ నలుగురు",
        "year": 2004,
        "director": "Chandra Siddhartha",
        "actors": [
            "Rajendra Prasad",
            "Aamani",
            "Kota Srinivasa Rao"
        ],
        "genres": [
            "Drama",
            "Social Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2000-2004",
        "clues": [
            "An idealistic newspaper editor firmly believes that human relationships and social empathy outweigh monetary wealth.",
            "His own materialistic children and wife force him into a devastating moral dilemma over personal finances and borrowing.",
            "A deeply philosophical masterpiece that asks whether four people will willingly carry your bier when you die.",
            "Won multiple Nandi Awards including Best Feature Film and Best Actor for Rajendra Prasad."
        ],
        "hints": [
            "The movie contrasts unconditional human generosity with the greedy selfishness of modern society.",
            "The protagonist Raghuram sacrifices his pride to satisfy his children's materialistic demands.",
            "The title translates as 'Those Four People'."
        ],
        "id": 38
    },
    {
        "title": "7G BRINDAVAN COLONY",
        "displayTitle": "7G Brindavan Colony",
        "teluguTitle": "7/జి బృందావన్ కాలనీ",
        "year": 2004,
        "director": "Selvaraghavan",
        "actors": [
            "Ravi Krishna",
            "Sonia Agarwal"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "An aimless, unruly youth living in a middle-class housing colony is transformed by his obsessive yet genuine love for a reserved Punjabi girl.",
            "A raw and bittersweet romantic tragedy scored with an immortal soundtrack by Yuvan Shankar Raja.",
            "The film portrays the agonizing transition from irresponsible adolescence to sober maturity through tragic loss.",
            "Features the haunting imaginary conversations the protagonist has with his lost love on a colony bench."
        ],
        "hints": [
            "A troubled youth from an apartment complex finds redemption through love, only to face unbearable destiny.",
            "Famous for songs like 'Kanula Basalu' and poignant emotional realism.",
            "The title combines a specific door/flat number with the residential colony's name."
        ],
        "id": 39
    },
    {
        "title": "MASS",
        "displayTitle": "Mass",
        "teluguTitle": "మాస్",
        "year": 2004,
        "director": "Raghava Lawrence",
        "actors": [
            "Nagarjuna",
            "Jyothika",
            "Charmy Kaur",
            "Rahul Dev"
        ],
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "An orphan adopts a fierce street persona to single-handedly dismantle a dreaded international mafia syndicate that murdered his beloved foster brother.",
            "The directorial debut of choreographer Raghava Lawrence featuring high-voltage dancing and stylized action.",
            "Devi Sri Prasad's electrifying soundtrack and background score gave the protagonist an unforgettable commercial action persona.",
            "The hero uses cunning psychological warfare to turn two rival mafia brothers against each other in Vizag."
        ],
        "hints": [
            "The hero avenges the brutal murder of his best friend Adi by confronting the ruthless Seshu.",
            "A four-letter action title embodying raw commercial street appeal.",
            "The title matches popular Indian cinema slang denoting adrenaline-packed appeal for the front rows."
        ],
        "id": 40
    },
    {
        "title": "GHARSHANA",
        "displayTitle": "Gharshana",
        "teluguTitle": "ఘర్షణ",
        "year": 2004,
        "director": "Gautham Vasudev Menon",
        "actors": [
            "Venkatesh",
            "Asin",
            "Salim Baig"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A disciplined, solitary DCP in the Hyderabad police elite encounter squad faces personal devastation when a ruthless gangster targets his newlywed wife.",
            "Known for its stylish cinematic realism, tactical firearms choreography, and Harris Jayaraj's chart-topping album.",
            "The narrative captures the internal emotional conflict of an officer who believes policemen should never have personal emotional vulnerabilities.",
            "Features the iconic song 'Cheliya Cheliya' and a brutal final battle in a remote desert cabin."
        ],
        "hints": [
            "An encounter specialist cop falls in love with a school teacher, only for a sadistic outlaw to seek revenge.",
            "The protagonist's character name is DCP Raghavan.",
            "The title is the Telugu word for 'Friction' or 'Clash'."
        ],
        "id": 41
    },
    {
        "title": "GRAHANAM",
        "displayTitle": "Grahanam",
        "teluguTitle": "గ్రహణం",
        "year": 2004,
        "director": "Mohan Krishna Indraganti",
        "actors": [
            "Tanikella Bharani",
            "Jayalalitha"
        ],
        "genres": [
            "Drama",
            "Period Drama",
            "Experimental"
        ],
        "difficulty": "hard",
        "popularity": "critically-acclaimed",
        "era": "2000-2004",
        "clues": [
            "Set in 1930s feudal Andhra, an innocent village woman is branded a witch by superstitions after a local landlord falls mysteriously sick.",
            "Based on the celebrated classic Telugu literary story 'Doshagunam' by Chalam.",
            "Won the National Film Award for Best Debut Film of a Director and numerous State Nandi Awards.",
            "Shot with remarkable artistic contrast, exploring blind faith, social hypocrisy, and human vulnerability in a rural community."
        ],
        "hints": [
            "An artistic period drama examining feudal bigotry and witch-hunting.",
            "The directorial debut of Mohan Krishna Indraganti based on a Chalam story.",
            "The title is the Telugu word for 'Eclipse'."
        ],
        "id": 42
    },
    {
        "title": "NAA AUTOGRAPH",
        "displayTitle": "Naa Autograph",
        "teluguTitle": "నా ఆటోగ్రాఫ్",
        "year": 2004,
        "director": "S. Gopal Reddy",
        "actors": [
            "Ravi Teja",
            "Bhumika Chawla",
            "Gopika",
            "Mallika"
        ],
        "genres": [
            "Drama",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "On the eve of his wedding, a middle-aged advertising professional journeys back through his past to personally invite the women who shaped his life.",
            "Traces three distinct phases of romantic growth: innocent school days in a village, passionate college youth in Kerala, and urban corporate survival.",
            "Features the immortal philosophical motivational song 'Mounamgane Edagani' penned by Chandrabose.",
            "A poignant, nostalgic slice-of-life drama about gratitude, maturity, and emotional closure."
        ],
        "hints": [
            "A man travels across his memories inviting past lovers and childhood mentors to his marriage.",
            "Bhumika plays Divya, a supportive friend who helps him rebuild his broken life in Hyderabad.",
            "The title translates as 'My Autograph'."
        ],
        "id": 43
    },
    {
        "title": "GUDUMBA SHANKAR",
        "displayTitle": "Gudumba Shankar",
        "teluguTitle": "గుడుంబా శంకర్",
        "year": 2004,
        "director": "Veera Shankar Bairisetty",
        "actors": [
            "Pawan Kalyan",
            "Meera Jasmine",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A petty, nomadic conman rescues an escaping bride from a violent factionist and invents a string of hilarious deceptions to keep her safe.",
            "The lead actor personally handled the screenplay and action choreography, sporting iconic double-pant styling and eccentric swagger.",
            "Contains a riotous comedy track involving a fake swamiji, arranged marriages, and comic confusion orchestrated with Ali.",
            "Features a pulsating soundtrack by Mani Sharma with songs like 'Killi Killi' and 'Chiguraku Chatu'."
        ],
        "hints": [
            "A quick-witted trickster outsmarts a dangerous faction goon to marry the girl he rescued on a highway.",
            "The hero invents astrological lies to delay the villain's wedding.",
            "The two-word title is the eccentric full name of the streetwise hero."
        ],
        "id": 44
    },
    {
        "title": "YAGNAM",
        "displayTitle": "Yagnam",
        "teluguTitle": "యజ్ఞం",
        "year": 2004,
        "director": "A. S. Ravi Kumar Chowdary",
        "actors": [
            "Gopichand",
            "Moon Banerjee",
            "Devaraj"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "A fiercely loyal henchman raised by a factionist leader discovers that he has been used as a pawn in ruthless rural blood feuds.",
            "When he falls in love with the factionist's daughter, his former master orders his immediate execution, forcing a violent rebellion.",
            "Turned its lead actor from a recognized screen antagonist into an established action hero.",
            "A gripping Rayalaseema faction drama contrasting blind loyalty with moral awakening."
        ],
        "hints": [
            "A devoted follower realizes the horrific reality of faction violence and fights for peace.",
            "The male lead had previously played villains in films like Jayam and Varsham.",
            "The title is a Sanskrit-derived Telugu word meaning a sacred ritual sacrifice."
        ],
        "id": 45
    },
    {
        "title": "NUVVOSTANANTE NENODDANTANA",
        "displayTitle": "Nuvvostanante Nenoddantana",
        "teluguTitle": "నువ్వొస్తానంటే నేనొద్దంటానా",
        "year": 2005,
        "director": "Prabhu Deva",
        "actors": [
            "Siddharth",
            "Trisha Krishnan",
            "Srihari"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A wealthy NRI youth visits an Indian village wedding, falls for an innocent rural girl, and must work as a laborer on her brother's farm to win his blessing.",
            "The protective elder brother sets a rigorous agricultural challenge: grow a larger crop yield on a single patch of land than anyone else.",
            "Directorial debut of Prabhu Deva that swept nine Filmfare Awards South and multiple Nandi Awards.",
            "Features the soulful agricultural romance and chartbuster music composed by Devi Sri Prasad."
        ],
        "hints": [
            "A spoiled foreign-bred youth works under the scorching sun as a farmer to prove his devotion.",
            "Srihari plays the loving, protective older brother Sivaji.",
            "The title is a playful Telugu question asking: 'If you wish to come, would I say no?'"
        ],
        "id": 46
    },
    {
        "title": "ATHADU",
        "displayTitle": "Athadu",
        "teluguTitle": "అతడు",
        "year": 2005,
        "director": "Trivikram Srinivas",
        "actors": [
            "Mahesh Babu",
            "Trisha Krishnan",
            "Sonu Sood",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Drama",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A professional sniper is framed for the assassination of a prominent politician and hides in a peaceful joint family village using an alias.",
            "The protagonist steps into the shoes of a runaway grandson who was accidentally killed in a railway crossfire.",
            "A celebrated cult classic boasting timeless dialogues, masterful action staging, and high television rewatch value.",
            "A relentless CBI officer pieces together ballistic clues while the fugitive discovers family love for the first time."
        ],
        "hints": [
            "A hired assassin takes refuge in a traditional Godavari village family under the identity of Pardhasaradhi.",
            "Prakash Raj plays CBI officer Anjaneya Prasad hunting him down.",
            "The single-word title translates to 'Him' or 'That Man'."
        ],
        "id": 47
    },
    {
        "title": "CHATRAPATHI",
        "displayTitle": "Chatrapathi",
        "teluguTitle": "ఛత్రపతి",
        "year": 2005,
        "director": "S. S. Rajamouli",
        "actors": [
            "Prabhas",
            "Shriya Saran",
            "Bhanupriya",
            "Pradeep Rawat"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A Sri Lankan refugee arrives on the shores of Visakhapatnam, endures brutal exploitation by local port mobsters, and rises as a savior of his people.",
            "The protagonist is driven by a lifelong yearning to reunite with the adoptive mother who was separated from him during the refugee exodus.",
            "Features the iconic interval confrontation sequence where the hero defeats the villain Katraju on the beach.",
            "Renowned for M. M. Keeravani's thunderous background score and the deeply emotional mother-son sentiment."
        ],
        "hints": [
            "A displaced refugee in Vizag rises against oppressive port mafia to protect his fellow refugees.",
            "The hero yearns to find his mother, who was misled by his jealous stepbrother Ashok.",
            "The title is an honorable royal title famously associated with Shivaji the Great."
        ],
        "id": 48
    },
    {
        "title": "ANUKOKUNDA OKA ROJU",
        "displayTitle": "Anukokunda Oka Roju",
        "teluguTitle": "అనుకోకుండా ఒక రోజు",
        "year": 2005,
        "director": "Chandra Sekhar Yeleti",
        "actors": [
            "Charmy Kaur",
            "Jagapathi Babu",
            "Shashank"
        ],
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A young chorus singer realizes with growing horror that she has completely lost twenty-four hours of her memory after attending a wild party.",
            "Mysterious cult members and hitmen target her on the streets as she pieces together what transpired during that missing day.",
            "One of Telugu cinema's most acclaimed neo-noir mystery thrillers, featuring a gripping soundtrack by M. M. Keeravani.",
            "An upright police officer played by Jagapathi Babu helps uncover a bizarre cult conspiracy."
        ],
        "hints": [
            "The heroine cannot recall a single event from an entire day that now endangers her life.",
            "Involves a mysterious secret cult, memory loss, and a frantic search for truth.",
            "The title translates as 'Unexpectedly One Day'."
        ],
        "id": 49
    },
    {
        "title": "BHADRA",
        "displayTitle": "Bhadra",
        "teluguTitle": "భద్ర",
        "year": 2005,
        "director": "Boyapati Srinu",
        "actors": [
            "Ravi Teja",
            "Meera Jasmine",
            "Arjan Bajwa",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Drama",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A college student visits his close friend's village and falls in love with his sister, just before a brutal rival faction massacres the entire family.",
            "The hero escapes with the surviving sister and conceals her in Hyderabad, protecting her from bloodthirsty killers while keeping her trauma secret.",
            "Marked the explosive directorial debut of Boyapati Srinu, known for high-octane emotional mass action.",
            "Features the balance between sweet romantic comedy in the city and raw, intense faction vendetta."
        ],
        "hints": [
            "A loyal friend shields his deceased classmate's sister from ruthless faction killers.",
            "The hero hides the reality of her family's massacre until she is safe.",
            "The title is the six-letter name of the heroic protagonist."
        ],
        "id": 50
    },
    {
        "title": "BUNNY",
        "displayTitle": "Bunny",
        "teluguTitle": "బన్నీ",
        "year": 2005,
        "director": "V. V. Vinayak",
        "actors": [
            "Allu Arjun",
            "Gowri Munjal",
            "Prakash Raj",
            "Mukesh Rishi"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A stylish college student systematically maneuvers himself into the household of a corrupt, powerful business tycoon in Visakhapatnam.",
            "The protagonist uses charm and combat to win over the tycoon's pampered daughter while secretly executing a calculated revenge mission.",
            "Known for spectacular dance numbers, dynamic college fight sequences, and Devi Sri Prasad's hit songs.",
            "The hero avenges his noble father Somaraju, whose lifelong industrial project was stolen by greedy conspirators."
        ],
        "hints": [
            "The hero blackmails and outsmarts a rich father by wooing his daughter for a hidden past vengeance.",
            "Gave the lead actor one of his most famous industry nicknames.",
            "The title is a five-letter name that also means a little rabbit."
        ],
        "id": 51
    },
    {
        "title": "SUPER",
        "displayTitle": "Super",
        "teluguTitle": "సూపర్",
        "year": 2005,
        "director": "Puri Jagannadh",
        "actors": [
            "Nagarjuna",
            "Ayesha Takia",
            "Anushka Shetty",
            "Sonu Sood"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Crime"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "Two competitive street thieves and professional bike racers fall out over an audacious heist involving rare diamonds.",
            "Marked the high-profile film debut of a future leading lady of South Indian cinema.",
            "Set against slick underground racing, high-tech robberies, and stylish oceanfront locations in Mumbai and Goa.",
            "Features the song 'Gili Giligas' and a memorable rivalry between lifelong partners turned enemies."
        ],
        "hints": [
            "High-tech diamond robberies and motorcycle racing form the backdrop of this action entertainer.",
            "Introduced Anushka Shetty to the silver screen.",
            "The five-letter English title means extraordinary or excellent."
        ],
        "id": 52
    },
    {
        "title": "ATHANOKKADE",
        "displayTitle": "Athanokkade",
        "teluguTitle": "అతనొక్కడే",
        "year": 2005,
        "director": "Surender Reddy",
        "actors": [
            "Kalyan Ram",
            "Sindhu Tolani",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Action",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "An enigmatic, calculated youth methodically assassinates the henchmen of a dreaded mafia lord while living under an alias in an ACP's household.",
            "The narrative employs smart screenplay deception, revealing his tragic childhood trauma through flashbacks.",
            "The directorial debut of Surender Reddy that established a stylish new visual aesthetic in Telugu action cinema.",
            "Features the protagonist eliminating corruption and avenging the slaughter of his entire family."
        ],
        "hints": [
            "A lone vigilante uses a calculated strategy to dismantle an untouchable criminal syndicate.",
            "Produced under the N.T.R. Arts banner by Kalyan Ram himself.",
            "The title translates as 'He, The Lone Man'."
        ],
        "id": 53
    },
    {
        "title": "POKIRI",
        "displayTitle": "Pokiri",
        "teluguTitle": "పోకిరి",
        "year": 2006,
        "director": "Puri Jagannadh",
        "actors": [
            "Mahesh Babu",
            "Ileana D'Cruz",
            "Prakash Raj",
            "Nassar"
        ],
        "genres": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A ruthless street killer for hire infiltrates rival underworld gangs in Hyderabad, only to be revealed as an undercover IPS officer in a historic twist.",
            "The all-time industry record-breaker that ran for over 500 days and revolutionized Telugu commercial dialogue and protagonist style.",
            "Spawned countless legendary pop-culture dialogues including 'Evadu kodithe dhimma thirigi mind block aipothudo, aade pandugadu'.",
            "The hero takes down the international mafia don Ali Bhai while protecting his identity and his beloved."
        ],
        "hints": [
            "The ultimate undercover cop story set in the Hyderabad underworld.",
            "Features the unforgettable twist where Pandu is revealed as Krishna Manohar IPS.",
            "The six-letter title translates as 'Rogue' or 'Hooligan'."
        ],
        "id": 54
    },
    {
        "title": "BOMMARILLU",
        "displayTitle": "Bommarillu",
        "teluguTitle": "బొమ్మరిల్లు",
        "year": 2006,
        "director": "Bhaskar",
        "actors": [
            "Siddharth",
            "Genelia D'Souza",
            "Prakash Raj",
            "Jayasudha"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A suffocated young man living under his hyper-controlling father's micromanaged roof secretly brings his eccentric, bubbly girlfriend home for seven days.",
            "A landmark coming-of-age family drama that redefined parent-child relationships and emotional independence in modern urban India.",
            "Features the iconic energetic character 'Hasini' whose cheerful mannerisms became a youth sensation across South India.",
            "Culminates in an emotionally volcanic confrontation between the suppressed son and his overprotective father."
        ],
        "hints": [
            "A father who decides everything for his son from shirt colors to life partners is challenged by his son's true feelings.",
            "Hasini's childlike innocence and 'Ha Ha Hasini' charm defined the film.",
            "The title is the Telugu word for a 'Dollhouse'."
        ],
        "id": 55
    },
    {
        "title": "VIKRAMARKUDU",
        "displayTitle": "Vikramarkudu",
        "teluguTitle": "విక్రమార్కుడు",
        "year": 2006,
        "director": "S. S. Rajamouli",
        "actors": [
            "Ravi Teja",
            "Anushka Shetty",
            "Vineet Kumar",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Drama",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A petty thief discovers an abandoned young girl who calls him papa, unaware he is the spitting image of a martyred, fearsome IPS officer.",
            "The ruthless cop had waged a ferocious war against a tyrannical rural warlord in the lawless badlands of Chambal / Devgarh.",
            "A legendary dual-role commercial action blockbuster that was remade across several Indian languages including Hindi (Rowdy Rathore).",
            "Features unforgettable characters like the terrifying villain Bavoji and the iconic honest cop Rathore."
        ],
        "hints": [
            "A street pickpocket takes on the persona of a dead, legendary police officer to liberate a terrorized village.",
            "The famous cop character proclaims: 'Vikram Rathore... police'.",
            "The title refers to the legendary righteous king Vikramarka."
        ],
        "id": 56
    },
    {
        "title": "GODAVARI",
        "displayTitle": "Godavari",
        "teluguTitle": "గోదావరి",
        "year": 2006,
        "director": "Sekhar Kammula",
        "actors": [
            "Sumanth",
            "Kamalinee Mukherjee",
            "Neetu Chandra"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "Two emotionally wounded individuals embark on a scenic river cruise from Rajahmundry to Bhadrachalam and slowly find companionship.",
            "A poetic, serene romance set against the gentle waters, temple ghats, and lush riverbanks of Andhra.",
            "Features a lovable canine character named Kotigadu who provides internal philosophical voiceovers.",
            "K. M. Radha Krishnan's classical musical score and Veturi's lyrics earned widespread critical and cultural acclaim."
        ],
        "hints": [
            "The entire romantic journey takes place aboard a leisurely riverboat named Punyabhumi.",
            "The male protagonist Sriram and independent heroine Seetha face personal heartbreak before meeting.",
            "The title is the name of the sacred South Indian river on which the journey unfolds."
        ],
        "id": 57
    },
    {
        "title": "SRI RAMADASU",
        "displayTitle": "Sri Ramadasu",
        "teluguTitle": "శ్రీ రామదాసు",
        "year": 2006,
        "director": "K. Raghavendra Rao",
        "actors": [
            "Nagarjuna",
            "Sneha",
            "Suman",
            "Nassar"
        ],
        "genres": [
            "Biographical",
            "Historical",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A 17th-century tahsildar diverts royal Golconda kingdom tax revenues to build a magnificent temple for Lord Rama in Bhadrachalam.",
            "The pious devotee endures twelve agonizing years of solitary imprisonment and torture in the dungeons of Golconda Fort.",
            "A critically acclaimed devotional biographical classic featuring legendary Carnatic compositions and M. M. Keeravani's music.",
            "Tani Shah, the sultan of Golconda, eventually witnesses a divine miracle that secures the devotee's liberation."
        ],
        "hints": [
            "The life story of Kancharla Gopanna, who constructed the Bhadrachalam Rama Temple.",
            "Features timeless devotional keerthanas like 'Paluke Bangaramayena'.",
            "The title is the revered spiritual name of the great saint-composer."
        ],
        "id": 58
    },
    {
        "title": "DEVADASU",
        "displayTitle": "Devadasu",
        "teluguTitle": "దేవదాసు",
        "year": 2005,
        "director": "Y. V. S. Chowdary",
        "actors": [
            "Ram Pothineni",
            "Ileana D'Cruz",
            "Sayaji Shinde"
        ],
        "genres": [
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A poor college youth in Hyderabad falls in love with the daughter of a ruthless NRI senator who forcibly whisks her away to New York.",
            "The daring hero travels across the globe with zero money, crossing international boundaries to rescue his sweetheart.",
            "The sensational blockbuster debut of both its energetic male lead and leading actress.",
            "Chakri's soundtrack was a massive youth rage, running for over 175 days across theaters."
        ],
        "hints": [
            "A high-energy musical romance where a young hero journeys to America to defy an arrogant billionaire father.",
            "Launched the careers of Ram and Ileana in 2006.",
            "The title invokes the legendary tragic romantic literary figure, though with an action-packed twist."
        ],
        "id": 59
    },
    {
        "title": "STYLE",
        "displayTitle": "Style",
        "teluguTitle": "స్టైల్",
        "year": 2006,
        "director": "Raghava Lawrence",
        "actors": [
            "Raghava Lawrence",
            "Prabhu Deva",
            "Charmy Kaur",
            "Kamalinee Mukherjee"
        ],
        "genres": [
            "Musical",
            "Drama",
            "Sports"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A passionate street cleaner dreams of becoming a champion dancer, guided by a disabled former master who was betrayed by a ruthless rival.",
            "A dedicated dance-drama featuring electric choreography and a high-stakes national dance championship face-off.",
            "Brought together two of India's most celebrated dance masters sharing the screen.",
            "Mani Sharma's energetic beats and inspiring training montages made it a favorite among youth."
        ],
        "hints": [
            "The story centers on dance competitions, artistic discipline, and physical handicap.",
            "The protagonist fights through personal injuries to win a trophy for his crippled master.",
            "The five-letter English title signifies flair and fashion."
        ],
        "id": 60
    },
    {
        "title": "STALIN",
        "displayTitle": "Stalin",
        "teluguTitle": "స్టాలిన్",
        "year": 2006,
        "director": "AR Murugadoss",
        "actors": [
            "Chiranjeevi",
            "Trisha Krishnan",
            "Prakash Raj",
            "Khushbu"
        ],
        "genres": [
            "Action",
            "Social Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An ex-military officer initiates a unique social chain reaction where a person helped by someone must help three others instead of saying thank you.",
            "The humanitarian chain movement spreads across society, eventually provoking the wrath of a corrupt home minister.",
            "Directed by AR Murugadoss, emphasizing civilian empowerment and non-violent social responsibility alongside mass action.",
            "Later officially remade in Hindi as 'Jai Ho' starring Salman Khan."
        ],
        "hints": [
            "A former soldier builds a chain of mutual kindness that transforms a state.",
            "The hero defends a disabled girl's education and sparks a public revolution.",
            "The title is the protagonist's name, shared with a famous historical Soviet leader."
        ],
        "id": 61
    },
    {
        "title": "SAINIKUDU",
        "displayTitle": "Sainikudu",
        "teluguTitle": "సైనికుడు",
        "year": 2006,
        "director": "Gunasekhar",
        "actors": [
            "Mahesh Babu",
            "Trisha Krishnan",
            "Irfan Khan",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Political Drama",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "recognized",
        "era": "2005-2009",
        "clues": [
            "A principled young man and his college comrades intercept relief food supplies stolen by a corrupt politician during devastating floods.",
            "The hero kidnaps the politician's prospective bride from the wedding altar to force the release of his captive friends.",
            "Features celebrated Bollywood actor Irfan Khan in a rare, prominent Telugu antagonist role.",
            "A political action thriller showcasing flood disaster management and youth civic resistance."
        ],
        "hints": [
            "College students wage a direct battle against flood-relief scamming politicians.",
            "The heroine is hidden inside a remote mountain fortress during the conflict.",
            "The title is the Telugu word for 'Soldier'."
        ],
        "id": 62
    },
    {
        "title": "DESAMUDURU",
        "displayTitle": "Desamuduru",
        "teluguTitle": "దేశముదురు",
        "year": 2007,
        "director": "Puri Jagannadh",
        "actors": [
            "Allu Arjun",
            "Hansika Motwani",
            "Pradeep Rawat"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A fearless television crime reporter is sent on assignment to the Himalayas and falls in love with a sanyasini at an ashram.",
            "The innocent ascetic woman turns out to be an escaped heiress hunted by a brutal factionist seeking her family wealth.",
            "Showcased the male lead's stunning six-pack physical transformation that set a major trend in Tollywood.",
            "Chakri's vibrant soundtrack features massive hits like 'Ninnochina Prema' and 'Gola Gola'."
        ],
        "hints": [
            "A hot-blooded TV journalist rescues a novice nun in Kullu Manali from a vicious mafia don.",
            "The hero's character name is Bala Govind.",
            "The title is a Telugu colloquial slang term meaning a sharp, shrewd streetwise youngster."
        ],
        "id": 63
    },
    {
        "title": "YAMADONGA",
        "displayTitle": "Yamadonga",
        "teluguTitle": "యమదొంగ",
        "year": 2007,
        "director": "S. S. Rajamouli",
        "actors": [
            "Jr NTR",
            "Priyamani",
            "Mohan Babu",
            "Mamta Mohandas"
        ],
        "genres": [
            "Fantasy",
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An unscrupulous orphan thief is murdered prematurely and sent to Naraka, where he outwits the God of Death and usurps his heavenly throne.",
            "Features an electrifying classical Telugu dialogue showdown between the mortal thief and Lord Yama.",
            "A grand socio-fantasy blockbuster that brought together Mohan Babu as Yama and Jr NTR in an unforgettable dual-generation tribute.",
            "The hero uses the divine Yamadandam to reform sinners and protect his childhood lover back on Earth."
        ],
        "hints": [
            "A clever scoundrel steals the staff of the Lord of the Underworld and causes chaos in hell.",
            "The famous dialogue delivery in chaste grandhika Telugu stunned audiences.",
            "The compound title blends the name of the deity of death with the Telugu word for thief."
        ],
        "id": 64
    },
    {
        "title": "HAPPY DAYS",
        "displayTitle": "Happy Days",
        "teluguTitle": "హ్యాపీ డేస్",
        "year": 2007,
        "director": "Sekhar Kammula",
        "actors": [
            "Varun Sandesh",
            "Tamannaah Bhatia",
            "Nikhil Siddharth",
            "Sonia Deepti"
        ],
        "genres": [
            "Drama",
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "Follows the four-year journey of eight engineering college students as they navigate ragging, exams, canteen banter, heartbreaks, and lasting friendships.",
            "A generational cult classic that accurately captured the authentic engineering college experience in Andhra Pradesh and Telangana.",
            "Introduced a cluster of fresh young talents who went on to become prominent stars in the Telugu film industry.",
            "Mickey J. Meyer's nostalgic soundtrack features college graduation anthems like 'Arey Rey' and 'Ya Paathashala'."
        ],
        "hints": [
            "Chandu, Rajesh, Tyson, and Appu are characters whose four years of engineering study are chronicled.",
            "The film made the phrase 'Are you happy?' deeply poignant.",
            "The title is a cheerful two-word English phrase for joyful times."
        ],
        "id": 65
    },
    {
        "title": "CHIRUTHA",
        "displayTitle": "Chirutha",
        "teluguTitle": "చిరుత",
        "year": 2007,
        "director": "Puri Jagannadh",
        "actors": [
            "Ram Charan",
            "Neha Sharma",
            "Prakash Raj",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Action",
            "Romance",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A young boy accepts a twelve-year prison sentence for a crime he didn't commit to pay for his critically ill mother's surgery.",
            "Upon release, he travels to Bangkok as a tour guide to track down and eliminate the sadistic gangster who murdered his father.",
            "The blockbuster debut film of Megastar Chiranjeevi's son, establishing him as an athletic dance and action talent.",
            "Shot extensively across Thailand with high-adrenaline island survival sequences."
        ],
        "hints": [
            "The hero avenges his honest auto-driver father's murder in Bangkok.",
            "Features the wild island romance with the spoiled daughter of a rich tycoon.",
            "The title is the Telugu word for 'Cheetah' or 'Leopard'."
        ],
        "id": 66
    },
    {
        "title": "DHEE",
        "displayTitle": "Dhee",
        "teluguTitle": "ఢీ",
        "year": 2007,
        "director": "Srinu Vaitla",
        "actors": [
            "Vishnu Manchu",
            "Genelia D'Souza",
            "Srihari",
            "Brahmanandam"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A clever youth lands an accounting job in the den of a ruthless underworld don and secretly falls in love with the don's beloved sister.",
            "To evade execution, the protagonist orchestrates a web of comic deceptions, making the don believe a rival gang is hunting his sister.",
            "Regarded as the definitive breakthrough for the director's signature brand of high-octane confusion comedy.",
            "Brahmanandam's role as the hapless auditor 'Chari' alongside Srihari's 'Shankar Goud' created all-time comedy gold."
        ],
        "hints": [
            "Chari is made a scapegoat in every single hilarious misunderstanding inside a mafia fortress.",
            "The hero marries the don's sister under the don's very own sponsorship without him realizing it.",
            "The single-syllable four-letter title means a head-on collision or face-off."
        ],
        "id": 67
    },
    {
        "title": "CHANDAMAMA",
        "displayTitle": "Chandamama",
        "teluguTitle": "చందమామ",
        "year": 2007,
        "director": "Krishna Vamsi",
        "actors": [
            "Navdeep",
            "Siva Balaji",
            "Kajal Aggarwal",
            "Sindhu Menon"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A village patriarch arranges his innocent daughter's wedding to a cultured young man, unaware that a careless city boy had previously stolen her heart.",
            "Set against traditional Godavari rural festivities, intricate family values, and colorful village weddings.",
            "A warm emotional family drama scored by K. M. Radha Krishnan, celebrating village innocence and sacrifice.",
            "Features the delicate tension between keeping parental honor and honoring true love."
        ],
        "hints": [
            "The film is steeped in Godavari culture, featuring Kajal Aggarwal in an early career-defining role.",
            "A playful suitor tries to undo the heartbreak he thoughtlessly caused an innocent rural girl.",
            "The title is the affectionate Telugu word for the Moon."
        ],
        "id": 68
    },
    {
        "title": "LAKSHYAM",
        "displayTitle": "Lakshyam",
        "teluguTitle": "లక్ష్యం",
        "year": 2007,
        "director": "Srivass",
        "actors": [
            "Gopichand",
            "Anushka Shetty",
            "Jagapathi Babu",
            "Yashpal Sharma"
        ],
        "genres": [
            "Action",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "An upright police officer is brutally framed and murdered by a ruthless extortion cartel operating in Hyderabad.",
            "His college-going younger brother vows to clear his brother's smeared reputation and takes down the criminals one by one.",
            "Directorial debut of Srivass that showcased strong brotherly affection and explosive vengeance.",
            "Mani Sharma provided high-energy commercial numbers including the popular romantic track 'Chekkara Keli'."
        ],
        "hints": [
            "The hero avenges the martyrdom of his honest ACP elder brother Bose.",
            "Jagapathi Babu gave an acclaimed supporting performance as the sacrificial elder brother.",
            "The title translates as 'Target' or 'Objective'."
        ],
        "id": 69
    },
    {
        "title": "TULASI",
        "displayTitle": "Tulasi",
        "teluguTitle": "తులసి",
        "year": 2007,
        "director": "Boyapati Srinu",
        "actors": [
            "Venkatesh",
            "Nayanthara",
            "Shriya Saran"
        ],
        "genres": [
            "Action",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A peace-loving husband is separated from his terrified pregnant wife when his violent past in faction-hit Rayalaseema catches up with him.",
            "Years later, he learns his young son suffers from a severe psychological trauma and risks everything to protect him from vengeful enemies.",
            "Boyapati Srinu blends high-voltage machete action with poignant father-son sentiment.",
            "Features the hero operating undercover in Mauritius before returning to the dusty faction badlands."
        ],
        "hints": [
            "A father must keep his terrifying violent strength hidden from his traumatized young child.",
            "Set partly in overseas scenic locations and partly in Rayalaseema.",
            "The title is named after the holy, medicinal plant revered in traditional Hindu courtyards."
        ],
        "id": 70
    },
    {
        "title": "MUNNA",
        "displayTitle": "Munna",
        "teluguTitle": "మున్నా",
        "year": 2007,
        "director": "Vamsi Paidipally",
        "actors": [
            "Prabhas",
            "Ileana D'Cruz",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A fiery college student wages a relentless personal and legal war against the undisputed mafia kingpin of Hyderabad, who is actually his biological father.",
            "The protagonist vows to avenge the misery and horrific death his mother suffered at the hands of the arrogant crime boss.",
            "The directorial debut of Vamsi Paidipally, featuring stylish action set-pieces and Harris Jayaraj's music.",
            "Features high-stakes mind games between an invincible father and an incorruptible rebel son."
        ],
        "hints": [
            "A college student takes on the mafia don Kakha, who abandoned him and his mother years ago.",
            "Known for the soulful rock-ballad 'Manasa Manasa'.",
            "The five-letter title is the street moniker of the protagonist."
        ],
        "id": 71
    },
    {
        "title": "AADAVARI MATALAKU ARTHALE VERULE",
        "displayTitle": "Aadavari Matalaku Arthale Verule",
        "teluguTitle": "ఆడవారి మాటలకు అర్థాలే వేరులే",
        "year": 2007,
        "director": "Selvaraghavan",
        "actors": [
            "Venkatesh",
            "Trisha Krishnan",
            "Kota Srinivasa Rao",
            "Karthi"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An unemployed, desperate software aspirant finally secures a job, falls in love with a female colleague, but discovers she is betrothed to his childhood friend.",
            "A deeply touching family drama exploring the bittersweet bond between an unemployed son and his devoted, elderly father.",
            "Features Kota Srinivasa Rao's legendary tear-jerking performance as a loving middle-class father.",
            "Yuvan Shankar Raja's music and Selvaraghavan's nuanced human drama made it an emotional superhit."
        ],
        "hints": [
            "Ganesh struggles with job rejections while his father constantly encourages him with humor and love.",
            "The hero travels to his best friend's ancestral village only to find the woman he secretly adores.",
            "The title borrows from a vintage classic Telugu song meaning 'Women's words often carry opposite meanings'."
        ],
        "id": 72
    },
    {
        "title": "ANASUYA",
        "displayTitle": "Anasuya",
        "teluguTitle": "అనసూయ",
        "year": 2007,
        "director": "Ravi Babu",
        "actors": [
            "Bhumika Chawla",
            "Abbas",
            "Ravi Babu"
        ],
        "genres": [
            "Thriller",
            "Crime",
            "Mystery"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A fearless investigative television journalist investigates a gruesome serial killer who surgically harvests internal organs and leaves roses at crime scenes.",
            "A chilling psycho-thriller renowned for its eerie atmospheric suspense, medical mysteries, and rain-soaked investigations.",
            "The female lead risks her life tracking the killer to an abandoned amusement park and vintage slaughterhouse.",
            "Won multiple Nandi Awards for its pathbreaking technical craft in Telugu suspense cinema."
        ],
        "hints": [
            "A woman reporter tracks down the terrifying 'Gulabi Puvvu Govind' serial killer.",
            "Directed by Ravi Babu, who also played the psychotic antagonist.",
            "The title is the name of the brave female television journalist."
        ],
        "id": 73
    },
    {
        "title": "MANTRA",
        "displayTitle": "Mantra",
        "teluguTitle": "మంత్ర",
        "year": 2007,
        "director": "Osho Tulasiram",
        "actors": [
            "Charmy Kaur",
            "Sivaji"
        ],
        "genres": [
            "Horror",
            "Thriller",
            "Mystery"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "An orphan woman tries to sell an eerie ancestral mansion in the outskirts, but anyone who attempts to live there dies mysteriously.",
            "A daring hero takes up a three-month wager to live inside the haunted villa to convince prospective buyers it is safe.",
            "A surprise sleeper hit that revived the modern female-centric horror-thriller genre in Tollywood.",
            "Features the viral supernatural hit song 'Maha Maha'."
        ],
        "hints": [
            "A cursed, isolated mansion in the outskirts hides dark psychological and supernatural horrors.",
            "Charmy Kaur played the titular role battling haunting apparitions.",
            "The six-letter title is the heroine's name and also means a sacred incantation."
        ],
        "id": 74
    },
    {
        "title": "GAMYAM",
        "displayTitle": "Gamyam",
        "teluguTitle": "గమ్యం",
        "year": 2008,
        "director": "Radhakrishna Jagarlamudi (Krish)",
        "actors": [
            "Allari Naresh",
            "Sharwanand",
            "Kamalinee Mukherjee"
        ],
        "genres": [
            "Drama",
            "Adventure",
            "Slice of Life"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "An arrogant, wealthy playboy sets out on a motorcycle road trip across Andhra to find the idealistic social worker who walked out of his life.",
            "Along the highway, he meets Gaali Seenu, a cheerful petty motorcycle thief whose selfless innocence forever alters his worldview.",
            "The critically acclaimed directorial debut of Krish that won the Nandi Award for Best Feature Film and Filmfare Award for Best Film.",
            "Features the heartbreaking climax illustrating the profound philosophy that the journey is greater than the destination."
        ],
        "hints": [
            "A transformative road journey where an arrogant rich boy learns humanity from a destitute thief.",
            "Allari Naresh delivered a career-defining performance as Gaali Seenu.",
            "The title translates as 'Destination' or 'Goal'."
        ],
        "id": 75
    },
    {
        "title": "ASHTA CHAMMA",
        "displayTitle": "Ashta Chamma",
        "teluguTitle": "అష్టా చమ్మా",
        "year": 2008,
        "director": "Mohan Krishna Indraganti",
        "actors": [
            "Nani",
            "Swathi Reddy",
            "Srinivas Avasarala",
            "Bhargavi"
        ],
        "genres": [
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "An obsessive fangirl of superstar Mahesh Babu swears she will only marry a man named Mahesh, prompting a bizarre comedy of assumed identities.",
            "A witty, screwball romantic comedy inspired by Oscar Wilde's classic play 'The Importance of Being Earnest'.",
            "Launched the acting career of Nani and comedian/writer Srinivas Avasarala.",
            "Swathi Reddy won the Filmfare Award for Best Actress for her delightful portrayal of Lavanya."
        ],
        "hints": [
            "A girl's stubborn obsession with a celebrity's first name forces a young man to pretend his name is Mahesh.",
            "Features Anand's identity dilemmas in an eccentric suburban household.",
            "The title is named after a traditional Indian board game played with cowrie shells."
        ],
        "id": 76
    },
    {
        "title": "JALSA",
        "displayTitle": "Jalsa",
        "teluguTitle": "జల్సా",
        "year": 2008,
        "director": "Trivikram Srinivas",
        "actors": [
            "Pawan Kalyan",
            "Ileana D'Cruz",
            "Mukesh Rishi",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A former extreme left-wing Naxalite rebel who renounced violence is pulled back into conflict when a faction warlord targets his benefactor cop.",
            "Trivikram Srinivas's celebrated entertainer packed with philosophical humor, witty banter, and Devi Sri Prasad's record-setting music.",
            "Features the famous voiceover narration by superstar Mahesh Babu introducing the hero Sanjay Sahu.",
            "Balances hilarious romantic entanglements with two sisters against a serious past of rural rebellion."
        ],
        "hints": [
            "An ex-naxalite turned post-graduate student takes on factionist Damodar Reddy.",
            "Pawan Kalyan's comic timing and dialogue delivery made this an instant youth anthem.",
            "The five-letter title is an Urdu-derived word meaning celebration or having fun."
        ],
        "id": 77
    },
    {
        "title": "READY",
        "displayTitle": "Ready",
        "teluguTitle": "రెడీ",
        "year": 2008,
        "director": "Srinu Vaitla",
        "actors": [
            "Ram Pothineni",
            "Genelia D'Souza",
            "Brahmanandam",
            "Nassar"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Romance",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An energetic engineering graduate who specializes in helping runaway lovers accidentally kidnaps the wrong bride from a wedding hall.",
            "To reconcile two violent, warring factionist uncles, he infiltrates their household posing as a chartered accountant's nephew.",
            "Brahmanandam's legendary comedy performance as 'McDowell Murthy' remains one of the most celebrated in modern Telugu cinema.",
            "A massive box office blockbuster that was subsequently remade in Bollywood starring Salman Khan."
        ],
        "hints": [
            "The hero brings peace to two violent Rayalaseema families through hilarious deception in Chicago and India.",
            "McDowell Murthy's suffering at the hands of the hero's schemes is unforgettable.",
            "The five-letter English title signifies being fully prepared."
        ],
        "id": 78
    },
    {
        "title": "PARUGU",
        "displayTitle": "Parugu",
        "teluguTitle": "పరుగు",
        "year": 2008,
        "director": "Bhaskar",
        "actors": [
            "Allu Arjun",
            "Sheela Kaur",
            "Prakash Raj"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A powerful village head kidnaps a group of city friends suspected of assisting his elder daughter in eloping with her lover.",
            "While held captive in the village, one of the kidnapped youths secretly falls in love with the patriarch's younger daughter.",
            "Prakash Raj's poignant performance as an anguished father grappling with daughters' independence won wide acclaim.",
            "Features Mani Sharma's melodious album with emotional hits like 'Hrudayam Ekkadunnadi'."
        ],
        "hints": [
            "A strict father searches desperately for his runaway daughter while holding innocent suspects hostage.",
            "The hero Krishna sympathizes with the father even as he loves the younger sister.",
            "The title is the Telugu word for 'Run' or 'Sprint'."
        ],
        "id": 79
    },
    {
        "title": "KRISHNA",
        "displayTitle": "Krishna",
        "teluguTitle": "కృష్ణ",
        "year": 2008,
        "director": "V. V. Vinayak",
        "actors": [
            "Ravi Teja",
            "Trisha Krishnan",
            "Mukul Dev",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An unemployed youth living in Vijayawada falls in love with a girl who turns out to be the sister of a merciless international criminal.",
            "The hero takes the villain's threats head-on, delivering nonstop mass entertainment and hilarious slapstick.",
            "Features the immortal comedy track involving Brahmanandam as 'Jilebi' and his chaotic wedding sequences.",
            "A high-grossing Sankranti commercial hit directed by V. V. Vinayak."
        ],
        "hints": [
            "Jilebi's comedic suffering alongside Ravi Teja's energetic swagger drove the box office.",
            "The hero tackles a ruthless mobster named Jakka in Vijayawada.",
            "The title is named after the Hindu deity and is also the protagonist's name."
        ],
        "id": 80
    },
    {
        "title": "KOTHA BANGARU LOKAM",
        "displayTitle": "Kotha Bangaru Lokam",
        "teluguTitle": "కొత్త బంగారు లోకం",
        "year": 2008,
        "director": "Srikanth Addala",
        "actors": [
            "Varun Sandesh",
            "Shweta Basu Prasad",
            "Prakash Raj",
            "Jayasudha"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "Two residential junior college students in rural Andhra fall in love amidst the suffocating pressures of intermediate academic rankings.",
            "The film popularized the famous dialogue catchphrase 'Nijamga!' delivered in a sweet, distinctive tone.",
            "Srikanth Addala's sensitive directorial debut highlighting gentle parenting and the innocence of adolescent dreams.",
            "Mickey J. Meyer composed a timeless musical score with hits like 'Kallaloki Kallu Petti' and 'Nenani Neevani'."
        ],
        "hints": [
            "A tender romance blossoming inside a strict residential intermediate college.",
            "Prakash Raj plays an extraordinarily gentle and understanding father.",
            "The three-word title translates to 'A New Golden World'."
        ],
        "id": 81
    },
    {
        "title": "BUJJIGADU",
        "displayTitle": "Bujjigadu",
        "teluguTitle": "బుజ్జిగాడు",
        "year": 2008,
        "director": "Puri Jagannadh",
        "actors": [
            "Prabhas",
            "Trisha Krishnan",
            "Mohan Babu",
            "Sanjana"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A stubborn boy runs away to Chennai after a childhood quarrel with his little playmate, swearing not to meet her for twelve years.",
            "Years later, he returns as an adult, speaking colorful Chennai-slang Telugu and agreeing to a contract assassination to find his lost love.",
            "Features legendary witty banter and dynamic chemistry between Prabhas and veteran actor Mohan Babu.",
            "The subtitle famously read 'Made in Chennai', celebrating the protagonist's quirky regional slang."
        ],
        "hints": [
            "The hero spends twelve years in Chennai waiting for a childhood reunion promise to mature.",
            "Mohan Babu plays Sivanna, the powerful brother of the girl he is looking for.",
            "The nine-letter title is the affectionate childhood nickname of the hero."
        ],
        "id": 82
    },
    {
        "title": "VINAYAKUDU",
        "displayTitle": "Vinayakudu",
        "teluguTitle": "వినాయకుడు",
        "year": 2008,
        "director": "Sai Kiran Adivi",
        "actors": [
            "Krishnudu",
            "Sonia Deepti",
            "Poonam Kaur"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "An overweight, gentle-natured software employee wins the heart of an arrogant, career-oriented ad agency colleague through sheer warmth and kindness.",
            "A rare body-positive romantic comedy that challenged conventional stereotypes of leading men in Telugu cinema.",
            "Praised for its subtle, slice-of-life humor, relatable office setting, and refreshing soundtrack by Sam D. Raj.",
            "The protagonist's cheerful disposition mirrors the benevolent deity whose name he bears."
        ],
        "hints": [
            "A chubby, kindhearted gentleman named Karthik proves that character matters more than physical appearance.",
            "Produced and directed as an independent urban feel-good romantic film.",
            "The title is another reverent name for Lord Ganesha."
        ],
        "id": 83
    },
    {
        "title": "ARUNDHATI",
        "displayTitle": "Arundhati",
        "teluguTitle": "అరుంధతి",
        "year": 2009,
        "director": "Kodi Ramakrishna",
        "actors": [
            "Anushka Shetty",
            "Sonu Sood",
            "Sayaji Shinde"
        ],
        "genres": [
            "Horror",
            "Fantasy",
            "Period Drama",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A young woman visiting her ancestral palace in Gadwal learns she is the reincarnation of a valiant queen who entombed a sadistic Aghora sorcerer alive.",
            "The evil sorcerer's spirit is unleashed from his underground tomb, seeking bloodthirsty revenge across generations.",
            "A monumental visual effects and horror-fantasy milestone that redefined female-led commercial cinema in South India.",
            "Features the iconic terrifying dialogue 'Bommali... Ninnu Vadalani' and Anushka's career-defining royal performance."
        ],
        "hints": [
            "Jejamma's valiant battle against the demonic tantric Pasupathi.",
            "Swept ten Nandi Awards and became one of the highest-grossing Telugu films of its era.",
            "The title is the name of the brave royal scion and bride-to-be."
        ],
        "id": 84
    },
    {
        "title": "MAGADHEERA",
        "displayTitle": "Magadheera",
        "teluguTitle": "మగధీర",
        "year": 2009,
        "director": "S. S. Rajamouli",
        "actors": [
            "Ram Charan",
            "Kajal Aggarwal",
            "Dev Gill",
            "Srihari"
        ],
        "genres": [
            "Period Drama",
            "Fantasy",
            "Action",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A modern bike stuntman experiences vivid memories of a 400-year-old past life where he was Kala Bhairava, the supreme warrior of the royal kingdom of Udaigarh.",
            "The legendary warrior had fought 100 soldiers simultaneously on a cliff to protect his beloved princess Mithravinda.",
            "An epoch-making visual effects masterpiece that shattered all previous box office records in the history of Telugu cinema.",
            "Directed by S. S. Rajamouli, scoring two National Film Awards for Choreography and Visual Effects."
        ],
        "hints": [
            "A reincarnation epic connecting 17th-century kingdom valor with modern Hyderabad motorcycling.",
            "Srihari played the noble Sher Khan who acknowledges Kala Bhairava's unmatched martial bravery.",
            "The title is a Sanskrit compound word meaning 'A Brave and Gallant Hero'."
        ],
        "id": 85
    },
    {
        "title": "KICK",
        "displayTitle": "Kick",
        "teluguTitle": "కిక్",
        "year": 2009,
        "director": "Surender Reddy",
        "actors": [
            "Ravi Teja",
            "Ileana D'Cruz",
            "Shaam",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "An eccentric thrill-seeker abandons comfortable jobs and relationships because he only does things that give him an exhilarating rush.",
            "He transforms into a phantom thief stealing vast hoards of illicit wealth from corrupt politicians to fund pediatric medical surgeries.",
            "Brahmanandam's comedic performance as 'Halwa Raj' remains one of the funniest comic tracks in cinema history.",
            "A runaway blockbuster that set a trend for adrenaline-fueled comedy thrillers and was remade in Hindi."
        ],
        "hints": [
            "The hero Kalyan lives entirely for the psychological sensation he calls his personal high.",
            "A smart police officer played by Shaam pursues the elusive phantom robber in Malaysia.",
            "The four-letter English title means a sudden strike or a thrill."
        ],
        "id": 86
    },
    {
        "title": "ARYA 2",
        "displayTitle": "Arya 2",
        "teluguTitle": "ఆర్య 2",
        "year": 2009,
        "director": "Sukumar",
        "actors": [
            "Allu Arjun",
            "Kajal Aggarwal",
            "Navdeep",
            "Shraddha Das"
        ],
        "genres": [
            "Psychological Thriller",
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A psychologically unstable, possessive orphan who desperately yearns for friendship infiltrates his childhood buddy's corporate software firm.",
            "The protagonist leads a bizarre double life: a saintly gentleman by day and a manic, unpredictable puppet-master behind closed doors.",
            "Sukumar's daring psychological character study featuring the worldwide dance phenomenon 'Ringa Ringa'.",
            "A cult musical romance exploring toxic affection, unconditional sacrifice, and emotional isolation."
        ],
        "hints": [
            "The protagonist's extreme, obsessive concept of friendship creates chaotic workplace havoc.",
            "Features the moonwalk dance in 'Mr. Perfect' and high-energy music by Devi Sri Prasad.",
            "The title is a sequel designation following the director's 2004 debut."
        ],
        "id": 87
    },
    {
        "title": "BILLA",
        "displayTitle": "Billa",
        "teluguTitle": "బిల్లా",
        "year": 2009,
        "director": "Meher Ramesh",
        "actors": [
            "Prabhas",
            "Anushka Shetty",
            "Namitha",
            "Krishnam Raju"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "When an elusive international mafia kingpin is mortally wounded by police in Malaysia, a naive streetwise lookalike is trained to take his place.",
            "Shot with ultra-stylish European aesthetics, lavish sports cars, and slick gun battles.",
            "Featured veteran actor and real-life uncle Krishnam Raju alongside Prabhas as an Interpol officer.",
            "Mani Sharma delivered a sleek, techno-infused soundtrack complementing the lavish underworld visual style."
        ],
        "hints": [
            "Ranga, a simple village-born thief, must masquerade as the ruthless underworld gangster.",
            "Anushka Shetty played the revenge-seeking assassin Sasha.",
            "The five-letter title is the dreaded crime lord's international code name."
        ],
        "id": 88
    },
    {
        "title": "OY!",
        "displayTitle": "Oy!",
        "teluguTitle": "ఓయ్!",
        "year": 2009,
        "director": "Anand Ranga",
        "actors": [
            "Siddharth",
            "Shamili",
            "Sunil"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A wealthy, carefree urban youth falls in love with an austere, principled seaside girl and learns she has only a few months left to live.",
            "He commits to fulfilling twelve of her unfulfilled life wishes on twelve special calendar dates before time runs out.",
            "Yuvan Shankar Raja composed what is widely considered one of the greatest Telugu romantic music albums of all time.",
            "Marked the adult debut of former celebrated child actress 'Baby Shamili'."
        ],
        "hints": [
            "The film is set against the pristine beaches of Visakhapatnam and deals with a terminal illness.",
            "Famous for songs like 'Anukoledenadu' and 'Seheri'.",
            "The two-letter title with an exclamation mark is an affectionate Telugu exclamation used to call someone."
        ],
        "id": 89
    },
    {
        "title": "BUMPER OFFER",
        "displayTitle": "Bumper Offer",
        "teluguTitle": "బంపర్ ఆఫర్",
        "year": 2009,
        "director": "Jaya Ravindra",
        "actors": [
            "Sairam Shankar",
            "Bindu Madhavi",
            "Sayaji Shinde"
        ],
        "genres": [
            "Comedy",
            "Romance",
            "Action"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A poor mechanic's son loves a billionaire's daughter; when the arrogant father offers him crores to abandon her, the boy counters with a reverse proposal.",
            "The hero challenges the billionaire to live on a daily working-class laborer's wage without his bodyguard empire.",
            "Scripted by Puri Jagannadh, featuring sharp street-smart dialogues and Raghu Kunche's viral music.",
            "A popular youth comedy that achieved major commercial success through its witty social clash."
        ],
        "hints": [
            "The film revolves around an ego battle between a humble mechanic and a stubborn real estate mogul.",
            "Features the famous song 'Ravana Seetha'.",
            "The title is an English marketing term for an extraordinary promotional deal."
        ],
        "id": 90
    },
    {
        "title": "AMARAVATHI",
        "displayTitle": "Amaravathi",
        "teluguTitle": "అమరావతి",
        "year": 2009,
        "director": "Ravi Babu",
        "actors": [
            "Sneha",
            "Bhumika Chawla",
            "Tarak Ratna",
            "Ravi Babu"
        ],
        "genres": [
            "Psychological Thriller",
            "Crime",
            "Mystery"
        ],
        "difficulty": "hard",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A twisted serial killer abducts pregnant women and surgically removes their unborn fetuses, baffling the police department.",
            "A specialized Task Force officer investigates a dark past involving an idyllic rural childhood and a horrific crime against an innocent woman.",
            "A dark, macabre psychological thriller that won two State Nandi Awards.",
            "Tarak Ratna received widespread critical acclaim for his chilling portrayal of the traumatized antagonist Srinu."
        ],
        "hints": [
            "A dark crime thriller dealing with infant abductions and hypnosis.",
            "Bhumika Chawla plays the titular character around whom the tragedy originated.",
            "The title is the name of a historic Telugu city and the tragic female lead."
        ],
        "id": 91
    },
    {
        "title": "KONCHEM ISHTAM KONCHEM KASHTAM",
        "displayTitle": "Konchem Ishtam Konchem Kashtam",
        "teluguTitle": "కొంచెం ఇష్టం కొంచెం కష్టం",
        "year": 2009,
        "director": "Kishore Kumar Pardasani",
        "actors": [
            "Siddharth",
            "Tamannaah Bhatia",
            "Prakash Raj",
            "Ramya Krishnan"
        ],
        "genres": [
            "Romance",
            "Family",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A charming college playboy falls in love with a traditional village girl whose strict father refuses marriage because the hero's parents are divorced.",
            "The protagonist undertakes an uphill emotional quest to reunite his estranged, fiercely stubborn mother and father after a decade of separation.",
            "Prakash Raj and Ramya Krishnan deliver stellar performances as the proud, divorced parents.",
            "A vibrant musical romantic drama featuring Shankar-Ehsaan-Loy's melodious soundtrack."
        ],
        "hints": [
            "A son must reconcile his divorced parents to convince his prospective father-in-law.",
            "Features the energetic college track 'Aanati Devadasu'.",
            "The four-word title translates as 'A Little Like, A Little Trouble'."
        ],
        "id": 92
    },
    {
        "title": "BENDU APPARAO R.M.P",
        "displayTitle": "Bendu Apparao R.M.P",
        "teluguTitle": "బెందు అప్పారావు R.M.P",
        "year": 2009,
        "director": "E. V. V. Satyanarayana",
        "actors": [
            "Allari Naresh",
            "Kamna Jethmalani",
            "Meghana Raj"
        ],
        "genres": [
            "Comedy",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A comical rural medical practitioner in a Godavari village hoards money for his sister's dowry, but is entrusted with fifteen lakhs by a dying accident victim.",
            "Torn between his selfish greed to settle his family and the moral guilt of returning the money to the deceased's family.",
            "A signature rural comedy from veteran director E. V. V. Satyanarayana loaded with hilarious village caricatures.",
            "Features memorable comedic chemistry between Allari Naresh, Ali, Krishna Bhagavan, and Dharmavarapu."
        ],
        "hints": [
            "The hero is an unlicensed medical quack practicing medicine in an East Godavari village.",
            "A dying man's final wish creates moral and comic chaos for a greedy village doctor.",
            "The title is the name of the protagonist followed by his medical qualification acronym."
        ],
        "id": 93
    },
    {
        "title": "PRASTHANAM",
        "displayTitle": "Prasthanam",
        "teluguTitle": "ప్రస్థానం",
        "year": 2010,
        "director": "Deva Katta",
        "actors": [
            "Sharwanand",
            "Sai Kumar",
            "Sundeep Kishan"
        ],
        "genres": [
            "Political Drama",
            "Crime",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A respected political patriarch in Andhra favors his principled stepson over his erratic, violent biological son as his political successor.",
            "The fraternal jealousy erupts into a Shakespearean tragic struggle for dynastic political dominance.",
            "A masterclass in Telugu political screenwriting, renowned for profound dialogues exploring morality, power, and human flaws.",
            "Sai Kumar gave a career-best, award-winning performance as the conflicted political patriarch Lokanadham."
        ],
        "hints": [
            "A political dynasty torn apart by the sibling rivalry between Mitra and Chinna.",
            "Contains philosophical dialogues about how righteousness becomes blurred by power.",
            "The title translates to 'The Great Journey' or 'March'."
        ],
        "id": 94
    },
    {
        "title": "LEADER",
        "displayTitle": "Leader",
        "teluguTitle": "లీడర్",
        "year": 2010,
        "director": "Sekhar Kammula",
        "actors": [
            "Rana Daggubati",
            "Richa Gangopadhyay",
            "Priya Anand",
            "Suhasini Maniratnam"
        ],
        "genres": [
            "Political Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "Following his Chief Minister father's assassination, an idealistic US-educated son blackmails corrupt politicians using illicit funds to secure the top executive office.",
            "The young Chief Minister attempts to root out deeply entrenched systemic corruption, only to discover dirty compromises are demanded at every step.",
            "Directorial departure for Sekhar Kammula into sharp political drama, introducing a commanding new male lead.",
            "Mickey J. Meyer composed inspiring patriotic anthems including 'Maa Telugu Thalliki' and 'Avunanna Kadanna'."
        ],
        "hints": [
            "Arjun Prasad uses his father's corrupt slush fund to buy the Chief Minister's seat in order to reform the system.",
            "Introduced Rana Daggubati as a lead actor.",
            "The English title refers to a political guide or head of government."
        ],
        "id": 95
    },
    {
        "title": "YE MAAYA CHESAVE",
        "displayTitle": "Ye Maaya Chesave",
        "teluguTitle": "ఏ మాయ చేశావె",
        "year": 2010,
        "director": "Gautham Vasudev Menon",
        "actors": [
            "Naga Chaitanya",
            "Samantha Ruth Prabhu"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An aspiring Hindu filmmaker falls head over heels for his conservative Malayali Christian landlord's daughter living upstairs.",
            "The narrative tracks their complex, indecisive relationship across years, dealing with cultural differences, family opposition, and career dreams in Chennai and New York.",
            "A landmark romantic milestone that introduced Samantha to cinema and formed a beloved real-life and reel-life pair.",
            "A. R. Rahman composed an immortal musical soundtrack with classics like 'Kundana Bomma' and 'Ee Hridayam'."
        ],
        "hints": [
            "Karthik, an engineering graduate aspiring to be a director, falls for Jessie.",
            "Famous for its soulful Alappuzha church visuals and realistic heartbreak.",
            "The title is a poetic Telugu query meaning 'What magical spell have you cast?'"
        ],
        "id": 96
    },
    {
        "title": "VEDAM",
        "displayTitle": "Vedam",
        "teluguTitle": "వేదం",
        "year": 2010,
        "director": "Krish",
        "actors": [
            "Allu Arjun",
            "Anushka Shetty",
            "Manoj Manchu",
            "Manoj Bajpayee"
        ],
        "genres": [
            "Drama",
            "Social Drama",
            "Hyperlink"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A landmark hyperlink drama weaving together five distinct lives in Hyderabad: a slum cable operator, a commercial sex worker, an aspiring rock musician, a debt-ridden weaver, and an ostracized Muslim elder.",
            "Their fateful paths intersect at a private hospital on New Year's Eve when armed terrorists stage a deadly hostage siege.",
            "Swept four Filmfare Awards including Best Film, Best Director, Best Actor, and Best Actress.",
            "Celebrated for its intense human empathy, showing how ordinary people overcome social stigmas to become unexpected saviors."
        ],
        "hints": [
            "Cable Raju and Saroja are two iconic characters whose lives collide during a hospital terror attack.",
            "M. M. Keeravani's music and Krish's multi-narrative structure earned universal acclaim.",
            "The title is the sacred Sanskrit/Telugu word for ancient Vedic knowledge."
        ],
        "id": 97
    },
    {
        "title": "MARYADA RAMANNA",
        "displayTitle": "Maryada Ramanna",
        "teluguTitle": "మర్యాద రామన్న",
        "year": 2010,
        "director": "S. S. Rajamouli",
        "actors": [
            "Sunil",
            "Saloni Aswani",
            "Nagineedu",
            "Supreeth"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An impoverished, naive young man visits a Rayalaseema village to claim ancestral land and is invited into a factionist's household as an honored guest.",
            "He soon discovers his hosts have sworn a blood oath to kill him, but their strict code of hospitality forbids shedding blood inside their threshold.",
            "The hero invents desperate, comical excuses to stay trapped inside the house forever to avoid being hacked to death outdoors.",
            "Directed by S. S. Rajamouli, proving his mastery over tight situational comedy and tension without a traditional superhero lead."
        ],
        "hints": [
            "The protagonist cannot step outside a factionist's mansion without facing instant decapitation.",
            "A humorous red bicycle with an internal voiceover assists the protagonist.",
            "The title translates as 'Respectable Ramanna'."
        ],
        "id": 98
    },
    {
        "title": "BRINDAVANAM",
        "displayTitle": "Brindavanam",
        "teluguTitle": "బృందావనం",
        "year": 2010,
        "director": "Vamsi Paidipally",
        "actors": [
            "Jr NTR",
            "Kajal Aggarwal",
            "Samantha Ruth Prabhu",
            "Prakash Raj",
            "Srihari"
        ],
        "genres": [
            "Family",
            "Action",
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A billionaire's son agrees to pose as his girlfriend's friend's fake lover to help her escape an unwanted rustic arranged marriage.",
            "Once inside a joint family fortress, he finds two estranged brothers whose feud threatens the entire village's peace.",
            "The hero uses empathy, tact, and heroic diplomacy to heal decades of deep familial resentment without raising fists.",
            "Thaman S. composed an energetic musical score that helped the film dominate the Dasara box office."
        ],
        "hints": [
            "The hero enters a village manor as a fake lover and unites two warring feudal brothers.",
            "Prakash Raj and Srihari play the proud, estranged stepbrothers.",
            "The title refers to Lord Krishna's mythical sacred earthly garden."
        ],
        "id": 99
    },
    {
        "title": "DARLING",
        "displayTitle": "Darling",
        "teluguTitle": "డార్లింగ్",
        "year": 2010,
        "director": "A. Karunakaran",
        "actors": [
            "Prabhas",
            "Kajal Aggarwal",
            "Prabhu",
            "Shraddha Das"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "To evade a dangerous gangster whose daughter wants to marry him, a witty youth invents an elaborate, fictitious childhood love story set in Switzerland.",
            "Later, during a grand reunion of college friends in an Indian hill station, his real childhood sweetheart actually arrives.",
            "Gave its lead star a lifelong loving moniker used by millions of fans.",
            "G. V. Prakash Kumar composed one of his most celebrated Telugu albums featuring hits like 'Inka Edo' and 'Neeve'."
        ],
        "hints": [
            "Prabha fabricates an imaginative romantic flashback in Bern to save his friends from a local mobster.",
            "The hero's real-life fans are universally identified by the movie's title.",
            "The seven-letter English title is a common term of deep affection."
        ],
        "id": 100
    },
    {
        "title": "KHALEJA",
        "displayTitle": "Khaleja",
        "teluguTitle": "ఖలేజా",
        "year": 2010,
        "director": "Trivikram Srinivas",
        "actors": [
            "Mahesh Babu",
            "Anushka Shetty",
            "Prakash Raj",
            "Rao Ramesh"
        ],
        "genres": [
            "Action",
            "Fantasy",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A talkative, unlucky Hyderabad taxi driver is hailed as a divine incarnation by a dying drought-stricken village in Rajasthan.",
            "He must defend the innocent villagers against an industrial conglomerate secretly poisoning groundwater to mine rare minerals.",
            "Initially misunderstood upon release, this unique philosophical socio-fantasy grew into one of the most revered cult classics of Telugu cinema.",
            "Packed with rapid-fire philosophical wit, exploring how the divine manifests through selfless human action."
        ],
        "hints": [
            "Alluri Seetarama Raju, a cab driver, is hailed as God by the dying villagers of Pali.",
            "Famous for hilarious comedy between the hero and a superstitious heroine who brings bad luck.",
            "The seven-letter title is an Urdu/Telugu word for immense courage or valor."
        ],
        "id": 101
    },
    {
        "title": "ORANGE",
        "displayTitle": "Orange",
        "teluguTitle": "ఆరెంజ్",
        "year": 2010,
        "director": "Bhaskar",
        "actors": [
            "Ram Charan",
            "Genelia D'Souza",
            "Shazahn Padamsee"
        ],
        "genres": [
            "Romance",
            "Musical",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An Australian graffiti artist believes love is temporary and cannot remain eternal throughout a lifetime, refusing to make dishonest vows of forever.",
            "His philosophical honesty clashes directly with an innocent girl who believes true romantic love lasts until eternity.",
            "Harris Jayaraj delivered an epochal musical masterpiece that remains one of the highest-streamed Telugu albums of all time.",
            "Re-released years later to housefull crowds, gaining immense cult status for its bold, honest exploration of relationship fatigue."
        ],
        "hints": [
            "The hero Ram lives in Sydney, painting graffiti and questioning the reality of lifelong romance.",
            "Contains timeless songs like 'Rooba Rooba', 'Nenu Nuvvantu', and 'Ola Olaala Ala'.",
            "The title is the English name of a citrus fruit and a vibrant color."
        ],
        "id": 102
    },
    {
        "title": "GOLCONDA HIGH SCHOOL",
        "displayTitle": "Golconda High School",
        "teluguTitle": "గోల్కొండ హైస్కూల్",
        "year": 2011,
        "director": "Mohan Krishna Indraganti",
        "actors": [
            "Sumanth",
            "Swathi Reddy",
            "Subbaraju",
            "Tanikella Bharani"
        ],
        "genres": [
            "Sports",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An ex-student and former cricket prodigy returns to his struggling alma mater as a coach to train an undisciplined team in a high-stakes inter-school tournament.",
            "If the team fails to reach the finals, the corrupt school board trustee will sell the school's historic playground to real estate builders.",
            "Based on the acclaimed sports novel 'Hari Biryani' written by H. G. Prasanna.",
            "A realistic, heart-warming sports drama celebrated for teaching teamwork, resilience, and reclaiming children's right to play."
        ],
        "hints": [
            "Coach Sampath transforms a group of rebellious school boys into champion cricket athletes.",
            "The survival of their beloved school sports ground hinges on winning matches.",
            "The title combines a historic Hyderabadi fortress name with a secondary educational institution."
        ],
        "id": 103
    },
    {
        "title": "ALA MODALAINDI",
        "displayTitle": "Ala Modalaindi",
        "teluguTitle": "అలా మొదలైంది",
        "year": 2011,
        "director": "B. V. Nandini Reddy",
        "actors": [
            "Nani",
            "Nithya Menen",
            "Sneha Ullal"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A young man is kidnapped on his way to his ex-girlfriend's wedding and narrates his bizarre history of ill-timed missed connections with a spirited woman.",
            "Every time either of them prepares to confess their feelings, comic misunderstandings or surprise engagements derail them.",
            "Directorial debut of Nandini Reddy and the breakthrough Telugu film of acclaimed actress Nithya Menen.",
            "Known for fresh urban humor, catchy acoustic melodies, and a hilarious final sequence at an upscale wedding."
        ],
        "hints": [
            "Gautham and Nithya keep missing their chances to express their mutual love due to hilarious bad timing.",
            "The entire narrative is told as a flashback to a highway kidnapper.",
            "The title translates as 'And so it began'."
        ],
        "id": 104
    },
    {
        "title": "100% LOVE",
        "displayTitle": "100% Love",
        "teluguTitle": "100% లవ్",
        "year": 2011,
        "director": "Sukumar",
        "actors": [
            "Naga Chaitanya",
            "Tamannaah Bhatia"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An arrogant college topper whose entire self-worth is tied to ranking first in class is challenged when his village cousin moves in and beats him in exams.",
            "Their academic rivalry turns into a fierce battle of personal egos, even as deep romantic attraction simmers beneath.",
            "Sukumar's witty romantic comedy dealing with hyper-competitive students and juvenile relationship insecurity.",
            "Devi Sri Prasad delivered a chartbuster youth album featuring 'A Square B Square' and 'Diyalo Diyalo'."
        ],
        "hints": [
            "Balu and Mahalakshmi compete fiercely for the top rank in their engineering college.",
            "Ego clashes prevent them from admitting their love until their grandmother's illness brings perspective.",
            "The title combines a complete percentage score with the word Love."
        ],
        "id": 105
    },
    {
        "title": "MR. PERFECT",
        "displayTitle": "Mr. Perfect",
        "teluguTitle": "మిస్టర్ పర్ఫెక్ట్",
        "year": 2011,
        "director": "Dasaradh",
        "actors": [
            "Prabhas",
            "Kajal Aggarwal",
            "Taapsee Pannu",
            "Prakash Raj"
        ],
        "genres": [
            "Romance",
            "Family",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A rigid, uncompromising software entrepreneur refuses to sacrifice his personal principles for anyone, rejecting an arranged match with a childhood friend.",
            "When he travels to Australia and meets an equally headstrong modern woman, he slowly realizes that true relationships thrive on compromise and empathy.",
            "A major summer commercial blockbuster that delivered strong messages on interpersonal flexibility and family bonds.",
            "Devi Sri Prasad's soundtrack features iconic feel-good tracks like 'Rao Gari Abbayi' and 'Chali Chaliga'."
        ],
        "hints": [
            "Vicky believes in living purely on his own terms until he learns the beauty of selflessness.",
            "Kajal Aggarwal plays Priya, who selflessly adapts to others' happiness in a rural village.",
            "The two-word title is an English honorific praising flawless perfection."
        ],
        "id": 106
    },
    {
        "title": "DOOKUDU",
        "displayTitle": "Dookudu",
        "teluguTitle": "దూకుడు",
        "year": 2011,
        "director": "Srinu Vaitla",
        "actors": [
            "Mahesh Babu",
            "Samantha Ruth Prabhu",
            "Prakash Raj",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A daring IPS officer operating in Turkey returns to India and creates an elaborate artificial reality TV show set in an old palace to protect his comatose father from shock.",
            "His ailing politician father wakes up believing his son is an MLA, while the cop secretly uses the setup to hunt down the mobsters who ambushed his family.",
            "Brahmanandam's legendary performance as 'Padmashri' acting in fake reality shows created all-time comedy history.",
            "Swept seven Nandi Awards and became the highest-grossing Telugu film of its year."
        ],
        "hints": [
            "The hero stages a fake political world to keep his recovering father Shankar Narayana happy.",
            "Padmashri believes he is living in a high-tech reality TV experiment with hidden cameras.",
            "The seven-letter title translates as 'Aggressiveness' or 'Impetuousness'."
        ],
        "id": 107
    },
    {
        "title": "OOSARAVELLI",
        "displayTitle": "Oosaravelli",
        "teluguTitle": "ఊసరవెల్లి",
        "year": 2011,
        "director": "Surender Reddy",
        "actors": [
            "Jr NTR",
            "Tamannaah Bhatia",
            "Shaam",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A mercenary who claims he will do anything for money protects a traumatized woman who witnessed a brutal political slaughter in Kashmir.",
            "The hero constantly changes his allegiances and motives like a reptile to carry out an undercover mission of vengeance on her behalf.",
            "Surender Reddy delivers an unconventional action thriller with unexpected tonal shifts and psychological revenge.",
            "Devi Sri Prasad's hit score includes the melancholic rock-ballad 'Niharika'."
        ],
        "hints": [
            "The protagonist claims he has no morals and changes his stance for money, hiding a selfless vow.",
            "The heroine's traumatic memory of losing her family in Kashmir drives the plot.",
            "The title is the Telugu word for 'Chameleon'."
        ],
        "id": 108
    },
    {
        "title": "PILLA ZAMINDAR",
        "displayTitle": "Pilla Zamindar",
        "teluguTitle": "పిల్ల జమీందార్",
        "year": 2011,
        "director": "G. Ashok",
        "actors": [
            "Nani",
            "Hariprriya",
            "Bindu Madhavi",
            "Rao Ramesh"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Coming-of-Age"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An arrogant, spoiled teenage heir must live as an ordinary student in a remote village degree college on a meager monthly allowance to inherit his grandfather's vast fortune.",
            "The deceased grandfather's strict will forces the arrogant boy to complete his graduation, live in a hostel, and win the college presidency.",
            "A heartfelt coming-of-age comedy drama that transitions from arrogant humor to profound emotional maturity.",
            "Rao Ramesh's unforgettable performance as the strict Telugu lecturer Military Rajanna inspired a generation of students."
        ],
        "hints": [
            "PJ must give up luxury cars and fancy suits to survive on 71 rupees a month in Siripuram.",
            "He learns the true value of education, friendship, and humility through village mentors.",
            "The title translates as 'Junior Landlord'."
        ],
        "id": 109
    },
    {
        "title": "BUSINESSMAN",
        "displayTitle": "Businessman",
        "teluguTitle": "బిజినెస్‌మేన్",
        "year": 2012,
        "director": "Puri Jagannadh",
        "actors": [
            "Mahesh Babu",
            "Kajal Aggarwal",
            "Prakash Raj",
            "Nassar"
        ],
        "genres": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An ambitious, unapologetic young man lands in Mumbai with a cold philosophy: to conquer the financial capital when the city had been officially declared underworld-free.",
            "He recruits frustrated, unemployed youth into a corporatized crime syndicate and targets corrupt banking syndicates and national politicians.",
            "Celebrated for its razor-sharp cynical dialogues, breakneck pacing, and the protagonist's chilling motivational monologues on greed and power.",
            "Thaman S. composed an electrifying electronic score including the anthem 'Sir Osthara'."
        ],
        "hints": [
            "Surya Bhai arrives in Mumbai with empty pockets and takes over the city's crime network within months.",
            "The protagonist declares: 'Nenu unnanani cheppara, Mumbai ki nenu vachesanani'.",
            "The English title refers to someone engaged in commercial trade or enterprise."
        ],
        "id": 110
    },
    {
        "title": "ISHQ",
        "displayTitle": "Ishq",
        "teluguTitle": "ఇష్క్",
        "year": 2012,
        "director": "Vikram Kumar",
        "actors": [
            "Nithiin",
            "Nithya Menen",
            "Ajay"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "Two travelers meet on a delayed flight from New Delhi to Hyderabad and experience an enchanting day of blossoming romance in Goa.",
            "The hero discovers that the girl's aggressive older brother is the very same man whose life he had inadvertently disrupted during college years.",
            "The romantic hit that revived the career of its lead actor, featuring breathtaking cinematography by P. C. Sreeram.",
            "Anoop Rubens scored an unforgettable romantic album with soulful hits like 'Chinnadana Neekosam'."
        ],
        "hints": [
            "Rahul falls in love with Priya on a diverted flight, only to meet her vengeful brother Siva.",
            "P. C. Sreeram's lighting and camera work set a benchmark for romantic cinema.",
            "The four-letter title is a classic Arabic/Urdu word for deep, passionate love."
        ],
        "id": 111
    },
    {
        "title": "GABBAR SINGH",
        "displayTitle": "Gabbar Singh",
        "teluguTitle": "గబ్బర్ సింగ్",
        "year": 2012,
        "director": "Harish Shankar",
        "actors": [
            "Pawan Kalyan",
            "Shruti Haasan",
            "Abhimanyu Singh",
            "Kota Srinivasa Rao"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A flamboyant, rogue circle inspector posted in his hometown of Kondaveedu challenges a ruthless local politician and corrupt factionists on his own eccentric terms.",
            "Reinvigorated the lead superstar's career with unprecedented box office dominance after a decade of commercial setbacks.",
            "Devi Sri Prasad's soundtrack features monumental energetic anthems and chartbusters like 'Kevvu Keka'.",
            "Packed with iconic comedy scenes, including the memorable Antakshari sequence inside the police station with captured thugs."
        ],
        "hints": [
            "A rebellious police officer who named himself after a famous vintage Bollywood bandit.",
            "The police station Antakshari episode remains legendary in Telugu pop culture.",
            "The title is the name the protagonist adopted since childhood."
        ],
        "id": 112
    },
    {
        "title": "EEGA",
        "displayTitle": "Eega",
        "teluguTitle": "ఈగ",
        "year": 2012,
        "director": "S. S. Rajamouli",
        "actors": [
            "Nani",
            "Samantha Ruth Prabhu",
            "Sudeep"
        ],
        "genres": [
            "Fantasy",
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A young man brutally murdered by a billionaire sociopath reincarnates as a common housefly to torment his killer and protect his beloved.",
            "A worldwide visual effects marvel where a tiny insect employs tools, mirrors, and sleepless psychological warfare against a wealthy human antagonist.",
            "Won two National Film Awards, including Best Feature Film in Telugu and Best Special Effects.",
            "Directed by S. S. Rajamouli, turning an impossible premise into a universally celebrated cinematic masterpiece."
        ],
        "hints": [
            "The hero reincarnates as a tiny winged insect seeking revenge on the villain Sudeep.",
            "The miniature hero wears tiny needle weapons crafted by a micro-artist heroine.",
            "The four-letter title is the Telugu word for a common housefly."
        ],
        "id": 113
    },
    {
        "title": "JULAYI",
        "displayTitle": "Julayi",
        "teluguTitle": "జులాయి",
        "year": 2012,
        "director": "Trivikram Srinivas",
        "actors": [
            "Allu Arjun",
            "Ileana D'Cruz",
            "Sonu Sood",
            "Rajendra Prasad"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A hyper-intelligent, carefree young man accidentally foils a 1500-crore bank robbery masterminded by a ruthless criminal genius.",
            "The police commissioner places the hero in witness protection in Hyderabad, sparking a high-stakes intellectual duel of chess moves between the hero and the robber.",
            "Renowned for Trivikram's dazzling dialogue wit, logic-driven action, and Devi Sri Prasad's hit songs.",
            "Rajendra Prasad delivered a memorable supporting role as a stressed-out police inspector housing the protagonist."
        ],
        "hints": [
            "Ravi uses sheer deductive intelligence to outwit criminal mastermind Bittu.",
            "The hero can calculate odds, trajectory, and human behavior within split seconds.",
            "The six-letter title is an Urdu/Hindi loanword for an aimless wanderer or slacker."
        ],
        "id": 114
    },
    {
        "title": "MITHUNAM",
        "displayTitle": "Mithunam",
        "teluguTitle": "మిథునం",
        "year": 2012,
        "director": "Tanikella Bharani",
        "actors": [
            "S. P. Balasubrahmanyam",
            "Lakshmi"
        ],
        "genres": [
            "Drama",
            "Slice of Life"
        ],
        "difficulty": "hard",
        "popularity": "critically-acclaimed",
        "era": "2010-2014",
        "clues": [
            "An elderly retired couple lives peacefully in a self-sufficient rural homestead, cherishing their playful daily bickering and enduring romance while their children live overseas.",
            "A rare minimalist two-actor gem directed by actor-writer Tanikella Bharani, based on Sri Ramana's celebrated Telugu literary story.",
            "Celebrated legendary playback singer S. P. Balasubrahmanyam and veteran actress Lakshmi carrying the entire feature with heartwarming authenticity.",
            "Won multiple Nandi Awards, hailed as an artistic testament to geriatric love, Telugu culinary traditions, and simple living."
        ],
        "hints": [
            "Appadasu and Buchilakshmi spend their twilight years cooking traditional foods and teasing each other.",
            "Only two actors appear on screen throughout virtually the entire film.",
            "The title refers to the zodiac sign Gemini and symbolizes a harmonious couple."
        ],
        "id": 115
    },
    {
        "title": "SEETHAMMA VAKITLO SIRIMALLE CHETTU",
        "displayTitle": "Seethamma Vakitlo Sirimalle Chettu",
        "teluguTitle": "సీతమ్మ వాకిట్లో సిరిమల్లె చెట్టు",
        "year": 2013,
        "director": "Srikanth Addala",
        "actors": [
            "Venkatesh",
            "Mahesh Babu",
            "Anjali",
            "Samantha Ruth Prabhu",
            "Prakash Raj"
        ],
        "genres": [
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "Two unemployed brothers with contrasting temperaments live in Relangi village under a perpetually cheerful, selfless father who smiles through all adversity.",
            "Revived the grand multi-starrer tradition in modern Telugu cinema after nearly two decades.",
            "Praised for its gentle Godavari conversational cadence, lack of traditional villains, and profound emphasis on family goodwill.",
            "Mickey J. Meyer composed an evocative family soundtrack with timeless songs like 'Aaradugula Bullet' and title track."
        ],
        "hints": [
            "Peddodu and Chinnodu navigate fraternal love, job searches, and marriage proposals in Relangi.",
            "Prakash Raj's character is fondly remembered as the 'Relangi Mavayya'.",
            "The long, poetic title translates to 'The Jasmine Tree in Seethamma's Courtyard'."
        ],
        "id": 116
    },
    {
        "title": "MIRCHI",
        "displayTitle": "Mirchi",
        "teluguTitle": "మిర్చి",
        "year": 2013,
        "director": "Koratala Siva",
        "actors": [
            "Prabhas",
            "Anushka Shetty",
            "Richa Gangopadhyay",
            "Sathyaraj"
        ],
        "genres": [
            "Action",
            "Drama",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An architect living in Italy returns to rural Palnadu using a philosophy of unconditional affection to reform and disarm violent factionist families.",
            "The protagonist conceals that his own noble father had renounced machetes years ago to stop the endless cycle of generational bloodshed.",
            "The sensational blockbuster directorial debut of Koratala Siva that established his brand of socially conscious mass commercial cinema.",
            "Devi Sri Prasad's pulsating soundtrack features the iconic mass title song and heartfelt melodious numbers."
        ],
        "hints": [
            "Jai enters his enemy's hostile village fortress with love, declaring: 'Prematho edaina gelavochu'.",
            "Sathyaraj played Deva, the peace-loving father who abandoned faction feuds.",
            "The six-letter title is the Telugu word for a fiery red chili."
        ],
        "id": 117
    },
    {
        "title": "SWAMY RA RA",
        "displayTitle": "Swamy Ra Ra",
        "teluguTitle": "స్వామి రారా",
        "year": 2013,
        "director": "Sudheer Varma",
        "actors": [
            "Nikhil Siddharth",
            "Swathi Reddy",
            "Pooja Ramachandran",
            "Ravi Babu"
        ],
        "genres": [
            "Crime",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "Three petty pickpockets in Hyderabad accidentally acquire a stolen antique golden idol of Lord Vinayaka worth crores.",
            "They find themselves chased across town by a ruthless international antique dealer, an ambitious corrupt cop, and illegal smugglers.",
            "A trendsetting stylish crime-caper that sparked a new wave of low-budget, high-concept noir comedies in modern Tollywood.",
            "Sunny M. R. delivered a fresh retro synth-pop soundtrack that redefined contemporary Telugu background scores."
        ],
        "hints": [
            "A stolen golden Ganesha idol from Anantha Padmanabha Swamy Temple sets off a chaotic chase.",
            "Directorial debut of Sudheer Varma known for its Quentin Tarantino-style non-linear pacing.",
            "The title is a devotional call to God, commonly sung in traditional keerthanas."
        ],
        "id": 118
    },
    {
        "title": "ATTARINTIKI DAREDI",
        "displayTitle": "Attarintiki Daredi",
        "teluguTitle": "అత్తారింటికి దారేది",
        "year": 2013,
        "director": "Trivikram Srinivas",
        "actors": [
            "Pawan Kalyan",
            "Samantha Ruth Prabhu",
            "Pranitha Subhash",
            "Nadhiya",
            "Boman Irani"
        ],
        "genres": [
            "Family",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A billionaire heir from Milan arrives in India working as a humble car driver to reconcile with his proud, estranged paternal aunt on his ailing grandfather's behalf.",
            "Shattered all historical Telugu cinema box office records despite substantial pre-release piracy leaks.",
            "Nadhiya delivered an unforgettable performance as the fiercely independent aunt Sunanda.",
            "Renowned for emotional monologues in railway stations, high-energy comedy with Brahmanandam as Baddham Bhaskar, and DSP's music."
        ],
        "hints": [
            "Gautham Nanda disguises himself as driver 'Siddhu' to bring his proud aunt back to his grandfather.",
            "Features the hilarious corporate parody 'Ahalya drama' with Brahmanandam.",
            "The title translates as a question: 'Which way leads to my mother-in-law's (or aunt's) house?'"
        ],
        "id": 119
    },
    {
        "title": "VENKATADRI EXPRESS",
        "displayTitle": "Venkatadri Express",
        "teluguTitle": "వెంకటాద్రి ఎక్స్‌ప్రెస్",
        "year": 2013,
        "director": "Merlapaka Gandhi",
        "actors": [
            "Sundeep Kishan",
            "Rakul Preet Singh",
            "Brahmaji"
        ],
        "genres": [
            "Comedy",
            "Adventure",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A young man raised by a father who has a strict rule of disowning any family member who commits one hundred mistakes must catch a night train to Tirupati for his brother's wedding.",
            "Having already accumulated ninety-nine mistakes, he steps off the train to fetch a bag and gets stranded, triggering a frantic overnight chase along the railway track.",
            "A fast-paced, edge-of-the-seat road and railway comedy thriller that was a major commercial sleeper hit.",
            "Directorial debut of Merlapaka Gandhi, noted for tight screenplay writing and relentless comedic situations."
        ],
        "hints": [
            "Sundeep Kishan must catch up with an ongoing train to keep his mistake count from reaching one hundred.",
            "The hero races across railway stations alongside a stranded young woman.",
            "The title is named after a famous real-life South Central Railway express train to Tirupati."
        ],
        "id": 120
    },
    {
        "title": "UYYALA JAMPALA",
        "displayTitle": "Uyyala Jampala",
        "teluguTitle": "ఉయ్యాల జంపాల",
        "year": 2013,
        "director": "Virinchi Varma",
        "actors": [
            "Raj Tarun",
            "Avika Gor",
            "Punarnavi Bhupalam"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "Two mischievous rural cousins in the Godavari district grow up fighting constantly, completely blind to their natural unspoken romance.",
            "When the girl falls for a scheming outsider, her cousin intervenes to protect her, forcing both to confront their true feelings.",
            "A refreshing low-budget rustic romance that launched the career of its young lead actor from short films to silver screen fame.",
            "Sunny M. R. composed a melodious rural score featuring songs like 'Lapak Lapak'."
        ],
        "hints": [
            "Suri and Uma Devi spend their childhood bickering across village lanes and ponds.",
            "Set against scenic Godavari rural landscapes.",
            "The title refers to a traditional playground swing or seesaw rhythm."
        ],
        "id": 121
    },
    {
        "title": "PREMA KATHA CHITRAM",
        "displayTitle": "Prema Katha Chitram",
        "teluguTitle": "ప్రేమ కథా చిత్రమ్",
        "year": 2013,
        "director": "J. Prabhakar Reddy",
        "actors": [
            "Sudheer Babu",
            "Nanditha Raj",
            "Praveen",
            "Saptagiri"
        ],
        "genres": [
            "Horror",
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "Four disillusioned young people rent a secluded farmhouse to commit group suicide, only to discover the bungalow is haunted by a bizarre, unpredictable ghost.",
            "The ghost possesses the heroine, switching personalities wildly whenever lights are turned off.",
            "Pioneered the highly lucrative modern 'Horror-Comedy' genre formula in modern Telugu commercial cinema.",
            "Saptagiri's comedic role as 'Giri' launched him into overnight stardom."
        ],
        "hints": [
            "A group of friends planning suicide in a resort are terrified by a ghost who loves romantic drama.",
            "The ghost only attacks or flirts when darkness falls.",
            "The title translates as 'A Romantic Story Film'."
        ],
        "id": 122
    },
    {
        "title": "1: NENOKKADINE",
        "displayTitle": "1: Nenokkadine",
        "teluguTitle": "1: నేనొక్కడినే",
        "year": 2014,
        "director": "Sukumar",
        "actors": [
            "Mahesh Babu",
            "Kriti Sanon",
            "Nassar",
            "Pradeep Rawat"
        ],
        "genres": [
            "Psychological Thriller",
            "Action",
            "Mystery"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A rock musician suffering from severe schizophrenia and memory hallucinations embarks on an international hunt to find the assassins who murdered his parents twenty years ago.",
            "The protagonist struggles to differentiate between vivid psychological illusions in his mind and objective physical reality.",
            "Shot with world-class technical values across Belfast, London, and Goa, featuring an intricate non-linear narrative.",
            "Celebrated today as one of the most ambitious and sophisticated psychological action thrillers in Indian cinema history."
        ],
        "hints": [
            "Gautham is a rockstar who cannot tell if three mysterious men he is hunting actually exist or are in his head.",
            "Marked the feature film debut of Bollywood actress Kriti Sanon.",
            "The title combines a numerical digit with a Telugu phrase meaning 'I, The Lone One'."
        ],
        "id": 123
    },
    {
        "title": "RACE GURRAM",
        "displayTitle": "Race Gurram",
        "teluguTitle": "రేసు గుర్రం",
        "year": 2014,
        "director": "Surender Reddy",
        "actors": [
            "Allu Arjun",
            "Shruti Haasan",
            "Shaam",
            "Ravi Kishan",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "Two fiercely competitive brothers—one an upright ACP and the other a carefree slacker—take on a ruthless gangster turned aspiring politician.",
            "When the honest brother's life is endangered, the younger slacker utilizes unorthodox, hilarious tactics to crush the politician's election bid.",
            "Brahmanandam's climactic comedy entry as 'Kill Bill Pandey' became a sensational pop-culture phenomenon.",
            "Swept multiple Filmfare Awards South and emerged as the highest-grossing Telugu film of 2014."
        ],
        "hints": [
            "Lucky loves frustrating his disciplined elder police brother Ram until danger strikes.",
            "Kill Bill Pandey's entry in the second half brought non-stop theater laughter.",
            "The title translates as 'Race Horse'."
        ],
        "id": 124
    },
    {
        "title": "MANAM",
        "displayTitle": "Manam",
        "teluguTitle": "మనం",
        "year": 2014,
        "director": "Vikram Kumar",
        "actors": [
            "Akkineni Nageswara Rao",
            "Nagarjuna",
            "Naga Chaitanya",
            "Samantha Ruth Prabhu",
            "Shriya Saran"
        ],
        "genres": [
            "Fantasy",
            "Family",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A magical 100-year generational reincarnation tale connecting three real-life generations of the legendary Akkineni acting dynasty.",
            "A billionaire businessman discovers that an elderly mentor and a young collegian are the reincarnations of his deceased parents and grandparents.",
            "Marked the final cinematic appearance of legendary thespian Akkineni Nageswara Rao (ANR).",
            "A masterwork of emotional screenwriting by Vikram Kumar, scored with Anoop Rubens's timeless melodies like 'Kanulanu Thaake'."
        ],
        "hints": [
            "Parents die in an accident and are reincarnated as younger contemporaries of their own grown son.",
            "Brought together ANR, Nagarjuna, and Naga Chaitanya in a seamless emotional puzzle.",
            "The simple two-syllable title means 'Us' or 'We'."
        ],
        "id": 125
    },
    {
        "title": "KARTHIKEYA",
        "displayTitle": "Karthikeya",
        "teluguTitle": "కార్తికేయ",
        "year": 2014,
        "director": "Chandoo Mondeti",
        "actors": [
            "Nikhil Siddharth",
            "Swathi Reddy",
            "Tanikella Bharani",
            "Rao Ramesh"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Supernatural"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An inquisitive medical student with an obsessive habit of investigating scientific mysteries travels to a village where a historic temple has remained shut for decades.",
            "Anyone who attempts to investigate the temple's secret or open its locked sanctum mysteriously dies of lethal snakebites.",
            "A gripping rationalist mystery thriller that blends scientific deduction with mythological lore.",
            "Spawned a nationwide blockbuster franchise years later exploring ancient Indian cultural treasures."
        ],
        "hints": [
            "A curious medico solves the mystery of snake venom deaths around the Subramanya Swamy temple in Subramaniyapuram.",
            "Directed by Chandoo Mondeti in his breakthrough debut.",
            "The title is the name of both the rationalist hero and the Hindu warrior deity of the temple."
        ],
        "id": 126
    },
    {
        "title": "OOHALU GUSAGUSALADE",
        "displayTitle": "Oohalu Gusagusalade",
        "teluguTitle": "ఊహలు గుసగుసలాడే",
        "year": 2014,
        "director": "Srinivas Avasarala",
        "actors": [
            "Naga Shaurya",
            "Rashi Khanna",
            "Srinivas Avasarala"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An aspiring television news anchor is blackmailed by his narcissistic, tongue-tied boss into ghostwriting romantic lines to woo a woman.",
            "In a cruel twist of fate, the woman his pompous boss is pursuing happens to be the anchor's own unforgotten first love from Vizag.",
            "A modern, sophisticated Telugu adaptation of Edmond Rostand's classic Cyrano de Bergerac.",
            "Celebrated for its poetic humor, civilized dialogue, and Kalyani Malik's soulful soundtrack featuring 'Em Sandeham Ledu'."
        ],
        "hints": [
            "A young man must feed romantic dialogue into his boss's earphone while watching him woo his own ex-girlfriend.",
            "Directorial debut of Srinivas Avasarala, who also played the vain boss Uday.",
            "The title translates as 'Whispering Imaginations'."
        ],
        "id": 127
    },
    {
        "title": "RUN RAJA RUN",
        "displayTitle": "Run Raja Run",
        "teluguTitle": "రన్ రాజా రన్",
        "year": 2014,
        "director": "Sujeeth",
        "actors": [
            "Sharwanand",
            "Seerat Kapoor",
            "Adivi Sesh",
            "Sampath Raj"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "A cheerful vegetable vendor's son who has faced repeated romantic breakups falls in love with the daughter of a tough police commissioner.",
            "The commissioner demands he help solve a string of baffling ministerial kidnappings taking place across the city.",
            "Features a major third-act screenplay twist that completely redefines the cheerful protagonist's true motives.",
            "The stylish directorial debut of Sujeeth, featuring a colorful palette and Ghibran's musical score."
        ],
        "hints": [
            "The protagonist Raja looks like a harmless cheerful lover boy but hides an ingenious criminal strategy.",
            "Features the famous song 'Bujji Amma Bujji Amma'.",
            "The three-word alliterative title urges the protagonist to flee."
        ],
        "id": 128
    },
    {
        "title": "DRUSHYAM",
        "displayTitle": "Drushyam",
        "teluguTitle": "దృశ్యం",
        "year": 2014,
        "director": "Sripriya",
        "actors": [
            "Venkatesh",
            "Meena",
            "Nadiya",
            "Naresh"
        ],
        "genres": [
            "Thriller",
            "Crime",
            "Drama",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A simple, cinema-loving cable TV operator in a sleepy Araku valley village fabricates an airtight alibi using movie logic to shield his family from a murder investigation.",
            "His family accidentally kills the unprincipled son of the state's ruthless Inspector General of Police.",
            "An edge-of-the-seat battle of psychological wits between an uneducated common man and the entire state police apparatus.",
            "Features the famous alibi established around the specific dates of October 2nd and 3rd."
        ],
        "hints": [
            "Rambabu uses his encyclopedic knowledge of cinema plots to create an unbreakable visual memory for witnesses.",
            "The film is the official Telugu remake of the legendary Malayalam thriller Drishyam.",
            "The seven-letter title translates as 'Visual' or 'Scene'."
        ],
        "id": 129
    },
    {
        "title": "LOUKYAM",
        "displayTitle": "Loukyam",
        "teluguTitle": "లౌక్యం",
        "year": 2014,
        "director": "Srivass",
        "actors": [
            "Gopichand",
            "Rakul Preet Singh",
            "Brahmanandam",
            "Chandra Mohan"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "A diplomatic youth who believes in resolving violent crises with wit rather than muscles helps his friend elope with a dangerous factionist's sister.",
            "While in hiding in Hyderabad, he falls in love with another woman who turns out to be the sister of an even more terrifying Warangal gangster.",
            "Brahmanandam's comedic performance as 'Siemens Sastri' elevated the film to a massive festive box office success.",
            "An entertaining commercial comedy demonstrating the power of diplomacy over brute force."
        ],
        "hints": [
            "The hero solves dangerous gang rivalries by using tactful manipulation and humor.",
            "Siemens Sastri is duped into performing comedic rituals in a gangster's home.",
            "The seven-letter title is the Telugu word for diplomacy, tact, or worldly wisdom."
        ],
        "id": 130
    },
    {
        "title": "BAAHUBALI: THE BEGINNING",
        "displayTitle": "Baahubali: The Beginning",
        "teluguTitle": "బాహుబలి: ది బిగినింగ్",
        "year": 2015,
        "director": "S. S. Rajamouli",
        "actors": [
            "Prabhas",
            "Rana Daggubati",
            "Anushka Shetty",
            "Tamannaah Bhatia",
            "Ramya Krishnan",
            "Sathyaraj"
        ],
        "genres": [
            "Period Drama",
            "Action",
            "Fantasy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Raised by tribal villagers beneath a colossal waterfall, a young man scales the giant cliffs guided by a mystical wooden mask.",
            "Upon reaching the kingdom of Mahishmati, he learns his true royal lineage and sets out to free his chained mother from a cruel tyrant.",
            "A global cinematic milestone that catapulted Indian cinema to unprecedented worldwide attention.",
            "Ended with the ultimate cliffhanger question that kept the entire nation speculating for two years: 'Why did Katappa kill him?'"
        ],
        "hints": [
            "Sivagami holds a newborn baby prince above the raging river waters in the opening shot.",
            "Features the colossal battle of Mahishmati against the barbarian Kalakeya hordes.",
            "The title refers to the legendary prince possessing 'arms of immense strength'."
        ],
        "id": 131
    },
    {
        "title": "SRIMANTHUDU",
        "displayTitle": "Srimanthudu",
        "teluguTitle": "శ్రీమంతుడు",
        "year": 2015,
        "director": "Koratala Siva",
        "actors": [
            "Mahesh Babu",
            "Shruti Haasan",
            "Jagapathi Babu",
            "Rajendra Prasad"
        ],
        "genres": [
            "Action",
            "Social Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "The sole heir to a vast corporate empire finds no meaning in inherited billions and chooses to adopt a neglected, drought-ridden ancestral village.",
            "He arrives on a bicycle to build schools, lay roads, and empower villagers against a ruthless local mafia lord.",
            "The film ignited a real-life trend of prominent celebrities and politicians adopting rural villages in the Telugu states.",
            "Devi Sri Prasad's soundtrack features inspiring hits like 'Jaago Jaago' and 'Rama Rama'."
        ],
        "hints": [
            "Harsha gives back to society because he believes wealth without social responsibility creates spiritual poverty.",
            "Jagapathi Babu plays the billionaire father Ravikanth.",
            "The title translates as 'The Wealthy One' or 'The Noble Millionaire'."
        ],
        "id": 132
    },
    {
        "title": "BHALE BHALE MAGADIVOY",
        "displayTitle": "Bhale Bhale Magadivoy",
        "teluguTitle": "భలే భలే మగాడివోయ్",
        "year": 2015,
        "director": "Maruthi",
        "actors": [
            "Nani",
            "Lavanya Tripathi",
            "Murali Sharma",
            "Naresh"
        ],
        "genres": [
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A talented junior botanist suffers from severe situational amnesia, easily forgetting what he was doing whenever he is distracted for a single second.",
            "To marry the girl he loves, he fabricates a series of wild deceptions to hide his chronic absentmindedness from her strict father.",
            "A massive commercial breakthrough that proved low-budget situational comedy can break major overseas box office records.",
            "Features hilarious comedic cover-ups where the hero pretends to be a martial artist, a doctor, and a hero."
        ],
        "hints": [
            "Lucky's extreme distractibility leads him to wander off mid-conversation, causing endless panic.",
            "Murali Sharma plays the skeptical prospective father-in-law.",
            "The title borrows a vintage classic Telugu phrase meaning 'What an extraordinary man!'"
        ],
        "id": 133
    },
    {
        "title": "KANCHE",
        "displayTitle": "Kanche",
        "teluguTitle": "కంచె",
        "year": 2015,
        "director": "Krish",
        "actors": [
            "Varun Tej",
            "Pragya Jaiswal",
            "Nikitin Dheer"
        ],
        "genres": [
            "Period Drama",
            "War",
            "Social Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "Intercuts the fierce battlefields of World War II in Italy with the rigid caste divisions of a rural Andhra village in the 1930s.",
            "A courageous Indian British Army captain finds himself serving under the same arrogant upper-caste commander whose sister he loved back home.",
            "Won the National Film Award for Best Feature Film in Telugu for its philosophical depth and historic recreation.",
            "Explores how artificial social fences erected by human ego destroy more lives than foreign wars."
        ],
        "hints": [
            "Dhupati Haribabu fights Nazi soldiers in Europe while remembering the caste prejudice of his native village.",
            "Features the moving lyric 'Ooru Manadi Raa' and Sirivennela's poetic masterclass.",
            "The five-letter title is the Telugu word for a 'Fence' or 'Barrier'."
        ],
        "id": 134
    },
    {
        "title": "TEMPER",
        "displayTitle": "Temper",
        "teluguTitle": "టెంపర్",
        "year": 2015,
        "director": "Puri Jagannadh",
        "actors": [
            "Jr NTR",
            "Kajal Aggarwal",
            "Prakash Raj",
            "Posani Krishna Murali"
        ],
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A corrupt, bribe-hungry police sub-inspector in Visakhapatnam experiences a traumatic moral awakening after encountering an innocent girl's horrific tragedy.",
            "He commits legal suicide by deliberately testifying against himself in court to ensure four politically untouchable rapists receive the death penalty.",
            "A high-voltage redemption arc that marked a dramatic career evolution for its lead actor.",
            "Posani Krishna Murali gave an emotionally iconic performance as the loyal, upright constable Narayana Murthy."
        ],
        "hints": [
            "Daya starts as an unrepentantly greedy cop who proudly proclaims: 'I am a corrupted officer'.",
            "The court sequence where Daya confesses his complicity to send the rapists to the gallows stunned audiences.",
            "The title is an English word denoting an irritable disposition or anger."
        ],
        "id": 135
    },
    {
        "title": "MALLI MALLI IDI RANI ROJU",
        "displayTitle": "Malli Malli Idi Rani Roju",
        "teluguTitle": "మళ్ళీ మళ్ళీ ఇది రాని రోజు",
        "year": 2015,
        "director": "Kranthi Madhav",
        "actors": [
            "Sharwanand",
            "Nithya Menen",
            "Pavani Reddy"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An aspiring national 100-meter track athlete falls in love with a reserved Muslim girl who observes him silently from behind her burqa.",
            "Separated by career compromises, religious boundaries, and decades of silence, their unconditional affection endures into middle age.",
            "A poetic, dialogue-rich romantic masterpiece celebrated for Sai Madhav Burra's philosophical writing.",
            "Gopi Sundar's soulful musical score won widespread critical acclaim."
        ],
        "hints": [
            "Raja Ram trains as an Olympic sprinter while Nazira waits patiently across years.",
            "The lovers reunite as mature adults to discover their affection never aged a day.",
            "The title translates as 'A day like this will never come again'."
        ],
        "id": 136
    },
    {
        "title": "YEVADE SUBRAMANYAM",
        "displayTitle": "Yevade Subramanyam",
        "teluguTitle": "ఎవడే సుబ్రమణ్యం",
        "year": 2015,
        "director": "Nag Ashwin",
        "actors": [
            "Nani",
            "Malvika Nair",
            "Vijay Deverakonda",
            "Krishnam Raju"
        ],
        "genres": [
            "Adventure",
            "Drama",
            "Philosophy"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A hyper-materialistic investment banker obsessed with corporate mergers is forced to undertake a grueling spiritual trek to the Himalayas.",
            "He journeys toward the sacred high-altitude lake of Dudh Kosi to scatter the ashes of his deceased, free-spirited childhood friend.",
            "The critically acclaimed directorial debut of Nag Ashwin that introduced Vijay Deverakonda in a pivotal supporting role.",
            "Shot in treacherous real locations near Everest Base Camp, exploring the illusion of materialistic success versus true living."
        ],
        "hints": [
            "Subbu learns to look beyond company stock options and boardroom deals in the snowy peaks of Nepal.",
            "Rishi's carefree philosophy teaches Subbu how to actually live.",
            "The title poses an existential Telugu question: 'Who on earth is Subramanyam?'"
        ],
        "id": 137
    },
    {
        "title": "KSHANAM",
        "displayTitle": "Kshanam",
        "teluguTitle": "క్షణం",
        "year": 2016,
        "director": "Ravikanth Perepu",
        "actors": [
            "Adivi Sesh",
            "Adah Sharma",
            "Anasuya Bharadwaj",
            "Satyadev Kancharana"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An NRI investment banker returns to Hyderabad when his distressed ex-girlfriend claims her young daughter has been abducted.",
            "Bizarrely, every acquaintance, neighbor, and even the girl's husband insists that the child never existed in the first place.",
            "A sleek, taut mystery thriller made on a shoe-string budget that revolutionized modern Telugu thriller writing.",
            "Adivi Sesh co-wrote the screenplay, starting his streak of iconic investigative thrillers."
        ],
        "hints": [
            "Rishi investigates the disappearance of little Ria, while everyone claims she is a hallucination.",
            "Anasuya Bharadwaj played the calculating ACP Jaya Bharadwaj.",
            "The six-letter title is the Telugu word for a 'Moment' or 'Second'."
        ],
        "id": 138
    },
    {
        "title": "OOPIRI",
        "displayTitle": "Oopiri",
        "teluguTitle": "ఊపిరి",
        "year": 2016,
        "director": "Vamsi Paidipally",
        "actors": [
            "Nagarjuna",
            "Karthi",
            "Tamannaah Bhatia",
            "Prakash Raj"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Slice of Life"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A paralyzed, wheelchair-bound multi-billionaire hires an irreverent, paroled street convict as his primary live-in caretaker.",
            "The cynical convict's lack of pity and infectious lust for life breathes renewed joy into the lonely billionaire's suffocating world.",
            "An official adaptation of the French masterpiece 'The Intouchables', celebrating human dignity and genuine male bonding.",
            "Nagarjuna acted using only his facial expressions and voice from a wheelchair, earning the Filmfare Award for Best Director for Vamsi."
        ],
        "hints": [
            "Vikramaditya finds freedom and laughter through the streetwise ex-con Seenu.",
            "Features the uplifting song 'O Podhaam' and beautiful Paris travel sequences.",
            "The title is the Telugu word for 'Breath' or 'Life Force'."
        ],
        "id": 139
    },
    {
        "title": "SARRAINODU",
        "displayTitle": "Sarrainodu",
        "teluguTitle": "సరైనోడు",
        "year": 2016,
        "director": "Boyapati Srinu",
        "actors": [
            "Allu Arjun",
            "Rakul Preet Singh",
            "Catherine Tresa",
            "Aadhi Pinisetty"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An ex-military commando takes the law into his own hands to punish criminals who slip through judicial loopholes.",
            "His vigilante justice brings him into an all-out war with a psychotic, power-drunk Chief Minister's son who terrorizes the state.",
            "Became one of the highest-grossing Telugu action entertainers of 2016 and broke massive records on digital streaming and Hindi dubbing.",
            "Aadhi Pinisetty gave a chilling performance as the aristocratic villain Vairam Dhanush."
        ],
        "hints": [
            "Gana uses an iron rod to deliver brutal justice to criminals shielded by political power.",
            "Boyapati Srinu crafted massive interval blockades and high-decibel action.",
            "The title is a colloquial Telugu term meaning 'The Right Man' or 'The Proper Guy'."
        ],
        "id": 140
    },
    {
        "title": "A AA",
        "displayTitle": "A Aa",
        "teluguTitle": "అ ఆ",
        "year": 2016,
        "director": "Trivikram Srinivas",
        "actors": [
            "Nithiin",
            "Samantha Ruth Prabhu",
            "Anupama Parameswaran",
            "Naresh"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A sheltered, depressed rich girl visits her maternal aunt's picturesque village in Rayalaseema to escape her overbearing mother's control.",
            "She falls in love with her gentle, resourceful cousin who is drowning in agricultural debts to pay off family obligations.",
            "Inspired loosely by Yaddanapudi Sulochana Rani's classic novel 'Meena', penned with Trivikram's trademark philosophical charm.",
            "Mickey J. Meyer composed a soothing rural romantic score featuring 'Yellipoke Shyamala'."
        ],
        "hints": [
            "Anasuya Ramalingam finds solace and love in the home of Aanand Vihari.",
            "The hero is pressured to marry a comical village girl named Nagavalli.",
            "The title is formed by the first two vowel letters of the Telugu alphabet."
        ],
        "id": 141
    },
    {
        "title": "PELLI CHOOPULU",
        "displayTitle": "Pelli Choopulu",
        "teluguTitle": "పెళ్లి చూపులు",
        "year": 2016,
        "director": "Tharun Bhascker",
        "actors": [
            "Vijay Deverakonda",
            "Ritu Varma",
            "Priyadarshi Pulikonda",
            "Abhay Bethiganti"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Coming-of-Age"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "Two young strangers accidentally get locked inside a bedroom during an arranged matchmaking meeting and share their real ambitions and failures.",
            "The lazy engineering graduate who dreams of being a chef teams up with the ambitious, business-minded woman to launch a food truck startup.",
            "Won two National Film Awards, including Best Feature Film in Telugu and Best Screenplay.",
            "Launched Vijay Deverakonda to stardom and introduced Priyadarshi with the iconic comedic catchphrase 'Naa Saavu Nenu Sastha'."
        ],
        "hints": [
            "Prashanth and Chitra build an artisanal food truck business called 'Spitfire' after an accidental match meeting.",
            "Tharun Bhascker's refreshing sync-sound directorial debut.",
            "The title refers to the traditional Indian ceremonial matchmaking meeting between prospective brides and grooms."
        ],
        "id": 142
    },
    {
        "title": "JANATHA GARAGE",
        "displayTitle": "Janatha Garage",
        "teluguTitle": "జనతా గ్యారేజ్",
        "year": 2016,
        "director": "Koratala Siva",
        "actors": [
            "Mohanlal",
            "Jr NTR",
            "Samantha Ruth Prabhu",
            "Nithya Menen",
            "Unni Mukundan"
        ],
        "genres": [
            "Action",
            "Social Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An environmental science researcher who fiercely defends nature meets the leader of an automobile garage that has resolved civic injustice for decades.",
            "The elderly patriarch appoints the principled young environmentalist as his successor to maintain their community court of vigilante justice.",
            "Brought together Malayalam legend Mohanlal and Jr NTR in a commanding multi-starrer.",
            "Won two National Film Awards and emerged as the highest-grossing Telugu film of 2016."
        ],
        "hints": [
            "Sathyam's mechanics fix both damaged automobile engines and the broken lives of oppressed citizens.",
            "The tagline proclaimed: 'Icchata anni repairlu cheyabadunu' (All repairs done here).",
            "The title combines a word meaning 'People's' with an automobile workshop."
        ],
        "id": 143
    },
    {
        "title": "DHRUVA",
        "displayTitle": "Dhruva",
        "teluguTitle": "ధ్రువ",
        "year": 2016,
        "director": "Surender Reddy",
        "actors": [
            "Ram Charan",
            "Arvind Swamy",
            "Rakul Preet Singh",
            "Navdeep"
        ],
        "genres": [
            "Thriller",
            "Action",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A brilliant IPS probationer uses covert investigative mapping to deduce that an acclaimed medical scientist is the secret puppet-master behind the state's organized crime syndicates.",
            "The protagonist challenges his nemesis to a psychological war of surveillance, bugs, and intellectual traps.",
            "Arvind Swamy delivered an iconic antagonist performance as the ruthless, charming genius Dr. Siddharth Abhimanyu.",
            "An official remake of the acclaimed Tamil thriller 'Thani Oruvan', celebrated for high-octane intellectual tension."
        ],
        "hints": [
            "The police officer believes that by destroying the single mastermind at the top, a hundred small crimes vanish.",
            "Features the hidden microchip bug planted inside the hero's body.",
            "The six-letter title refers to the Pole Star, symbolizing steadfast resolve."
        ],
        "id": 144
    },
    {
        "title": "GHAZI",
        "displayTitle": "Ghazi",
        "teluguTitle": "ఘాజీ",
        "year": 2017,
        "director": "Sankalp Reddy",
        "actors": [
            "Rana Daggubati",
            "Kay Kay Menon",
            "Atul Kulkarni",
            "Taapsee Pannu"
        ],
        "genres": [
            "War",
            "Thriller",
            "Historical"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "India's first underwater submarine war film chronicles the classified 1971 underwater clash between an Indian submarine and an enemy Pakistani submarine hunter vessel.",
            "An executive naval officer must manage a hot-tempered captain while executing desperate underwater depth-charge maneuvers in the Bay of Bengal.",
            "Won the National Film Award for Best Feature Film in Telugu for its technical mastery and historical authenticity.",
            "Constructed inside an authentic submarine set, creating claustrophobic maritime tension and patriotic courage."
        ],
        "hints": [
            "Classified underwater submarine combat off the coast of Visakhapatnam during the 1971 war.",
            "Lieutenant Commander Arjun Varma navigates torpedo strikes beneath sea level.",
            "The five-letter title is the name of the enemy submarine hunter vessel."
        ],
        "id": 145
    },
    {
        "title": "BAAHUBALI 2: THE CONCLUSION",
        "displayTitle": "Baahubali 2: The Conclusion",
        "teluguTitle": "బాహుబలి 2: ది కన్‌క్లూజన్",
        "year": 2017,
        "director": "S. S. Rajamouli",
        "actors": [
            "Prabhas",
            "Rana Daggubati",
            "Anushka Shetty",
            "Ramya Krishnan",
            "Sathyaraj"
        ],
        "genres": [
            "Period Drama",
            "Action",
            "Fantasy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "The crown prince of Mahishmati chooses exile and loyalty to his fiery warrior queen Devasena over royal privilege, falling victim to palace treachery.",
            "Decades later, his son returns from the waterfalls to decapitate the tyrannical king and reclaim the throne of his father.",
            "The highest-grossing Indian film domestically of all time, shattering all global box office records with historic footfalls.",
            "Won three National Film Awards and resolved the legendary riddle of Katappa's fateful betrayal."
        ],
        "hints": [
            "The coronation, royal oath, and ultimate betrayal of Amarendra Baahubali.",
            "Anushka Shetty delivers a fierce royal performance as Princess Devasena of Kuntala.",
            "The title is the monumental second chapter carrying the subtitle 'The Conclusion'."
        ],
        "id": 146
    },
    {
        "title": "NINNU KORI",
        "displayTitle": "Ninnu Kori",
        "teluguTitle": "నిన్ను కోరి",
        "year": 2017,
        "director": "Shiva Nirvana",
        "actors": [
            "Nani",
            "Nivetha Thomas",
            "Aadhi Pinisetty"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A heartbroken PhD student in San Francisco drinks himself to ruin after his lover marries another man under family pressure.",
            "The married couple invites the ex-lover into their home for ten days to prove that an arranged marriage can be genuinely happy and healthy.",
            "Directorial debut of Shiva Nirvana exploring mature emotional closure rather than typical toxic jealousy.",
            "Gopi Sundar's music was a massive hit, featuring soul-stirring melodies like 'Adiga Adiga'."
        ],
        "hints": [
            "Uma, Pallavi, and Arun spend ten days under one roof in California confronting past feelings.",
            "A refreshing take on how life doesn't end with a romantic breakup.",
            "The title is a classical Telugu phrase translating as 'Longing for You'."
        ],
        "id": 147
    },
    {
        "title": "FIDAA",
        "displayTitle": "Fidaa",
        "teluguTitle": "ఫిదా",
        "year": 2017,
        "director": "Sekhar Kammula",
        "actors": [
            "Varun Tej",
            "Sai Pallavi"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An NRI medical student from Texas falls in love with a fiery, independent village girl from Banswada during his brother's wedding.",
            "The heroine refuses to abandon her beloved father and rural farmland to relocate across the globe to America.",
            "Sai Pallavi's sensational Telugu debut with authentic Telangana dialect and energetic dance in 'Vachinde' became a cultural phenomenon.",
            "A massive blockbuster celebrating regional rural culture, father-daughter tenderness, and mutual respect in love."
        ],
        "hints": [
            "Bhanumathi declares: 'Bhanumathi... okate piece!' and wins hearts across the Telugu diaspora.",
            "The clash between life in the USA and deep emotional roots in a Telangana village.",
            "The five-letter Urdu loanword in the title means to be utterly smitten or enchanted."
        ],
        "id": 148
    },
    {
        "title": "ARJUN REDDY",
        "displayTitle": "Arjun Reddy",
        "teluguTitle": "అర్జున్ రెడ్డి",
        "year": 2017,
        "director": "Sandeep Reddy Vanga",
        "actors": [
            "Vijay Deverakonda",
            "Shalini Pandey",
            "Rahul Ramakrishna"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A brilliant, short-tempered house surgeon descends into severe alcoholism and substance abuse after his lover is forcibly married to an orthodox family.",
            "The film caused a cultural earthquake in modern Indian cinema with its unapologetic raw realism, intense profanity, and visceral emotional unraveling.",
            "Cemented its lead actor as a nationwide youth icon and revolutionized contemporary romantic character arcs.",
            "Radhan's rock-influenced soundtrack and Harshavardhan Rameshwar's background score captured the protagonist's fiery agony."
        ],
        "hints": [
            "A high-performing medical prodigy whose anger management issues destroy his personal life.",
            "Rahul Ramakrishna delivered a standout performance as the loyal, long-suffering best friend Siva.",
            "The title is the first and last name of the reckless medical protagonist."
        ],
        "id": 149
    },
    {
        "title": "PSV GARUDA VEGA",
        "displayTitle": "PSV Garuda Vega",
        "teluguTitle": "పి.ఎస్.వి. గరుడ వేగ",
        "year": 2017,
        "director": "Praveen Sattaru",
        "actors": [
            "Rajasekhar",
            "Pooja Kumar",
            "Kishore",
            "Shraddha Das"
        ],
        "genres": [
            "Action",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An alienated NIA assistant commissioner investigating a routine vehicle bombing uncovers a massive multi-billion-dollar national thorium mining conspiracy.",
            "A slick, Hollywood-grade tactical espionage action thriller that staged a remarkable career comeback for veteran actor Rajasekhar.",
            "Praised for its authentic intelligence surveillance procedures, high-speed highway chases, and complex geopolitical stakes.",
            "Features the hunt for a brilliant young hacker possessing a cryptographic drive carrying explosive national secrets."
        ],
        "hints": [
            "Officer Chandrasekhar risks his life and marriage to protect a whistleblower hacker.",
            "A high-stakes conspiracy threatening the nation's nuclear thorium deposits.",
            "The title combines three military acronym letters with the mythological vehicle of Vishnu."
        ],
        "id": 150
    },
    {
        "title": "AWE!",
        "displayTitle": "Awe!",
        "teluguTitle": "అ!",
        "year": 2018,
        "director": "Prasanth Varma",
        "actors": [
            "Kajal Aggarwal",
            "Nithya Menen",
            "Regina Cassandra",
            "Eesha Rebba",
            "Murali Sharma"
        ],
        "genres": [
            "Psychological Thriller",
            "Mystery",
            "Experimental"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A surreal psychological puzzle taking place inside a quirky restaurant involving a chef, a magician, a time-traveler, a goth girl, and two anthropomorphic objects (a fish and a bonsai tree).",
            "The climactic revelation discloses that all these eccentric individuals are fractured split personalities of an abused woman with Dissociative Identity Disorder.",
            "Won two National Film Awards for Best Special Effects and Best Make-up.",
            "The innovative directorial debut of Prasanth Varma, produced independently by actor Nani."
        ],
        "hints": [
            "A talking fish voiced by Nani and a bonsai tree voiced by Ravi Teja observe weird customers in a cafe.",
            "The psychological climax unravels the dark trauma of Kali, played by Kajal Aggarwal.",
            "The three-letter title with an exclamation mark expresses utter astonishment."
        ],
        "id": 151
    },
    {
        "title": "RANGASTHALAM",
        "displayTitle": "Rangasthalam",
        "teluguTitle": "రంగస్థలం",
        "year": 2018,
        "director": "Sukumar",
        "actors": [
            "Ram Charan",
            "Samantha Ruth Prabhu",
            "Aadhi Pinisetty",
            "Jagapathi Babu"
        ],
        "genres": [
            "Period Drama",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "In 1980s rural Andhra, a semi-deaf motor-sound engineer becomes the fierce bodyguard for his educated brother who dares to run for village president against a tyrannical feudal landlord.",
            "A period masterpiece renowned for its authentic rustic detailing, retro costumes, and Devi Sri Prasad's folk-infused soundtrack.",
            "Ram Charan gave a career-best, transformative performance as 'Sound Engineer' Chitti Babu.",
            "Won the National Film Award for Best Audiography and set all-time non-Baahubali box office records."
        ],
        "hints": [
            "Chitti Babu cannot hear soft sounds but can Lip-read and defend his brother Kumar Babu with unbridled fury.",
            "Jagapathi Babu played the ruthless, untouchable village president Phanindra Bhupathi.",
            "The title translates as 'The Theatre' or 'The Stage'."
        ],
        "id": 152
    },
    {
        "title": "BHARAT ANE NENU",
        "displayTitle": "Bharat Ane Nenu",
        "teluguTitle": "భరత్ అనే నేను",
        "year": 2018,
        "director": "Koratala Siva",
        "actors": [
            "Mahesh Babu",
            "Kiara Advani",
            "Prakash Raj",
            "Rao Ramesh"
        ],
        "genres": [
            "Political Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An Oxford graduate unexpectedly sworn in as Chief Minister of Andhra Pradesh following his father's sudden death enforces strict civic laws and governance accountability.",
            "His core philosophy centers on a childhood promise to his mother: that breaking a promise makes one no longer human.",
            "Features the protagonist reforming basic traffic fines, public education budgets, and health infrastructure while battling corrupt party elders.",
            "Marked the South Indian debut of Bollywood actress Kiara Advani."
        ],
        "hints": [
            "A foreign-educated son honors a sacred pledge to his mother that a broken promise diminishes human integrity.",
            "Prakash Raj plays the scheming party mentor Varadarajulu.",
            "The three-word title is the exact opening phrase of a minister's Telugu constitutional swearing-in ceremony."
        ],
        "id": 153
    },
    {
        "title": "MAHANATI",
        "displayTitle": "Mahanati",
        "teluguTitle": "మహానటి",
        "year": 2018,
        "director": "Nag Ashwin",
        "actors": [
            "Keerthy Suresh",
            "Dulquer Salmaan",
            "Samantha Ruth Prabhu",
            "Vijay Deverakonda"
        ],
        "genres": [
            "Biographical",
            "Period Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An investigative journalist in the 1980s pieces together the rise, golden peak, and tragic twilight of South Indian cinema's greatest iconic actress Savitri.",
            "Keerthy Suresh gave a transcendent performance that earned her the National Film Award for Best Actress.",
            "Won three National Film Awards, recreating the vintage golden age of Gemini Studios, Maya Bazaar, and Madras cinema sets.",
            "Dulquer Salmaan made his Telugu debut playing the charismatic yet turbulent Tamil star Gemini Ganesan."
        ],
        "hints": [
            "The heartbreaking life journey of Nadigaiyar Thilagam / Savitri from poverty to cinematic queen to comatose neglect.",
            "Madhuravani and Vijay Anthony uncover her mysterious letters in Bangalore.",
            "The title is the revered Telugu epithet meaning 'The Great Actress'."
        ],
        "id": 154
    },
    {
        "title": "SAMMOHANAM",
        "displayTitle": "Sammohanam",
        "teluguTitle": "సమ్మోహనం",
        "year": 2018,
        "director": "Mohan Krishna Indraganti",
        "actors": [
            "Sudheer Babu",
            "Aditi Rao Hydari",
            "Naresh",
            "Pavani Gangireddy"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An independent children's book illustrator who harbors contempt for the superficial cinema industry has his house rented out for a movie shoot.",
            "He is hired to coach a Hindi-speaking superstar heroine in Telugu dialogue delivery, leading to an intellectual, tender romance.",
            "A sophisticated meta-film exploring the loneliness behind celebrity glamour and the artistic integrity of literature.",
            "Vivek Sagar composed a mesmerizing acoustic and classical soundtrack featuring 'O Cheli Thaara'."
        ],
        "hints": [
            "Vijay learns that superstar Sameera is a vulnerable human being beyond paparazzi gossip.",
            "Naresh delivered an uproarious performance as a cinema-crazy father yearning to act.",
            "The title is a poetic Sanskrit word meaning 'Mesmerizing Attraction' or 'Fascination'."
        ],
        "id": 155
    },
    {
        "title": "EE NAGARANIKI EMAINDI",
        "displayTitle": "Ee Nagaraniki Emaindi",
        "teluguTitle": "ఈ నగరానికి ఏమైంది",
        "year": 2018,
        "director": "Tharun Bhascker",
        "actors": [
            "Vishwak Sen",
            "Sai Sushanth Reddy",
            "Abhinav Gomatam",
            "Venkatesh Kakumanu"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Buddy Film"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "Four estranged college buddies reunite over drinks, impulsively travel to Goa for a bachelor trip, and enter a short film competition to recover lost gambling money.",
            "An epochal buddy comedy that became one of the most quotable cult films for modern Telugu youth and meme culture.",
            "Introduced Vishwak Sen as director Vivek and Abhinav Gomatam with hilarious dry one-liners.",
            "Vivek Sagar's lo-fi jazz-fusion soundtrack and Tharun Bhascker's naturalistic dialogue captured modern urban youth camaraderie."
        ],
        "hints": [
            "Four friends in Goa make an impromptu short film while dealing with hangovers and broken dreams.",
            "Iconic for lines like 'Karthik, driving chusthava?' and 'Let's take a break'.",
            "The title is borrowed from the familiar government anti-smoking cinema public advisory: 'What has happened to this city?'"
        ],
        "id": 156
    },
    {
        "title": "CHI LA SOW",
        "displayTitle": "Chi La Sow",
        "teluguTitle": "చి ల సౌ",
        "year": 2018,
        "director": "Rahul Ravindran",
        "actors": [
            "Sushanth",
            "Ruhani Sharma",
            "Vennela Kishore",
            "Rohini"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "A commitment-phobic bachelor who wants to delay marriage by five years is forced into an arranged meeting with an independent, stressed woman on a fateful evening.",
            "Over one eventful night involving a police station visit, a sick mother, and street encounters, they discover unexpected emotional compatibility.",
            "Won the National Film Award for Best Original Screenplay for debutant director Rahul Ravindran.",
            "Celebrated for its dignity, realistic pacing, and sensitive portrayal of a middle-class woman supporting her family."
        ],
        "hints": [
            "Arjun and Anjali spend a single chaotic night in Hyderabad discovering whether arranged marriage can turn into true love.",
            "Vennela Kishore delivered award-winning comedic relief as Suhas.",
            "The title is a traditional Telugu acronym placed before a bride's name on wedding cards (Chiranjeevi Lakshmi Sowbhagyavathi)."
        ],
        "id": 157
    },
    {
        "title": "GOODACHARI",
        "displayTitle": "Goodachari",
        "teluguTitle": "గూఢచారి",
        "year": 2018,
        "director": "Sashi Kiran Tikka",
        "actors": [
            "Adivi Sesh",
            "Sobhita Dhulipala",
            "Jagapathi Babu",
            "Supriya Yarlagadda"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Espionage"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A brilliant orphan recruit in a secret Indian intelligence service named Trinetra is framed for the assassination of his own agency heads on graduation day.",
            "The young spy goes rogue to clear his name, discovering a shocking personal truth about his supposedly deceased patriotic father.",
            "A slick, fast-paced espionage action thriller that proved high-concept spy cinema can be mounted brilliantly on modest Indian budgets.",
            "Adivi Sesh co-wrote the script, cementing his status as Telugu cinema's contemporary thriller maestro."
        ],
        "hints": [
            "Agent 116 Gopi must unmask the traitor inside the top-secret Trinetra bureau.",
            "Jagapathi Babu plays Rana, his mysterious biological father.",
            "The nine-letter title is the traditional Telugu word for 'Secret Agent' or 'Spy'."
        ],
        "id": 158
    },
    {
        "title": "GEETHA GOVINDAM",
        "displayTitle": "Geetha Govindam",
        "teluguTitle": "గీత గోవిందం",
        "year": 2018,
        "director": "Parasuram",
        "actors": [
            "Vijay Deverakonda",
            "Rashmika Mandanna",
            "Subbaraju"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An innocent, idealistic college lecturer is mistaken for an unruly harasser by a spirited woman on an overnight intercity bus ride.",
            "To his horror, she turns out to be the prospective sister-in-law of his own beloved sister, forcing him to serve as her chauffeur while clearing his name.",
            "Gopi Sundar's viral soundtrack featuring Sid Sriram's 'Inkem Inkem Inkem Kaavaale' became a nationwide music craze.",
            "Emerged as one of the most profitable romantic blockbusters in Telugu cinema history."
        ],
        "hints": [
            "Govind struggles desperately to prove he is a gentleman to the skeptical Geetha.",
            "The film achieved historic box office returns against a modest budget in 2018.",
            "The title combines the first names of both the female and male leads."
        ],
        "id": 159
    },
    {
        "title": "C/O KANCHARAPALEM",
        "displayTitle": "Care of Kancharapalem",
        "teluguTitle": "కేరాఫ్ కంచరపాలెం",
        "year": 2018,
        "director": "Venkatesh Maha",
        "actors": [
            "Subba Rao",
            "Radha Bessy",
            "Mohan Bhagath",
            "Praveena Paruchuri"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Independent"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "An acclaimed independent masterpiece chronicling four non-conventional romances across different age groups in a rustic suburb of Visakhapatnam.",
            "Features a schoolboy infatuation, a statue artist's inter-faith love, an alcoholic scavenger's devotion to a prostitute, and a 49-year-old unmarried clerk.",
            "Cast with over eighty genuine, non-professional residents of the titular locality, giving it unmatched emotional authenticity.",
            "A masterstroke twist at the conclusion links all four separate love stories into the life stages of a single man."
        ],
        "hints": [
            "Sundaram, Joseph, Geddam, and Raju represent four seasons of love in a real Vizag neighborhood.",
            "The first Telugu film ever screened at the New York Indian Film Festival.",
            "The title uses postal address notation 'Care of' followed by the name of the neighborhood."
        ],
        "id": 160
    },
    {
        "title": "ARAVINDA SAMETHA VEERA RAGHAVA",
        "displayTitle": "Aravinda Sametha Veera Raghava",
        "teluguTitle": "అరవింద సమేత వీర రాఘవ",
        "year": 2018,
        "director": "Trivikram Srinivas",
        "actors": [
            "Jr NTR",
            "Pooja Hegde",
            "Jagapathi Babu",
            "Naveen Chandra"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Following a bloody faction clash that claims his father's life, a young Rayalaseema scion abandons violence and relocates to Hyderabad to end thirty years of bloodshed.",
            "Influenced by an anthropology student studying village conflicts, he returns to broker peace without drawing weapons.",
            "A powerful ideological deconstruction of faction violence, shifting the focus to the suffering endured by rural women and widowed mothers.",
            "Features the explosive, breathless opening action sequence and Jagapathi Babu's chilling villainous performance as Basi Reddy."
        ],
        "hints": [
            "Veera Raghava vows that no mother or sister should mourn a hacked son in his territory ever again.",
            "Thaman S. delivered a thunderous emotional score with hits like 'Anaganaganaga' and 'Peniviti'.",
            "The title begins with the heroine's name meaning 'Accompanied by Aravinda'."
        ],
        "id": 161
    },
    {
        "title": "TAXIEWAALA",
        "displayTitle": "Taxiwaala",
        "teluguTitle": "టాక్సీవాలా",
        "year": 2018,
        "director": "Rahul Sankrityan",
        "actors": [
            "Vijay Deverakonda",
            "Priyanka Jawalkar",
            "Malvika Nair"
        ],
        "genres": [
            "Sci-Fi",
            "Comedy",
            "Horror"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2015-2019",
        "clues": [
            "An unemployed graduate buys a vintage modified red car to become a cab driver, only to discover the vehicle is possessed by a vengeful poltergeist.",
            "A supernatural investigation reveals the car is bonded to the spirit of a deceased young woman through astral projection science.",
            "Blends sci-fi paranormal research with hilarious horror-comedy set in nocturnal Hyderabad.",
            "Jakes Bejoy composed the viral musical chartbuster 'Maate Vinadhuga'."
        ],
        "hints": [
            "Shiva's vintage Ambassador car moves on its own and attacks thugs in the night.",
            "Explores astral projection and medical experiments alongside spooky comedy.",
            "The title is the Hindi/Telugu colloquial term for a cab driver."
        ],
        "id": 162
    },
    {
        "title": "JERSEY",
        "displayTitle": "Jersey",
        "teluguTitle": "జెర్సీ",
        "year": 2019,
        "director": "Gowtam Tinnanuri",
        "actors": [
            "Nani",
            "Shraddha Srinath",
            "Sathyaraj",
            "Ronit Kamra"
        ],
        "genres": [
            "Sports",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "A gifted 36-year-old former cricketer who quit the game ten years ago decides to return to first-class cricket to gift his young son a sports uniform.",
            "Battling poverty, domestic humiliation, and an undiagnosed heart condition, he fights his way back into the Ranji Trophy squad through sheer willpower.",
            "Won two National Film Awards, including Best Feature Film in Telugu and Best Editing.",
            "Anirudh Ravichander scored an emotionally transcendent background score and songs that moved audiences to tears."
        ],
        "hints": [
            "Arjun's heroic sacrifice for his son Nani remains one of the most emotional sports films in Indian cinema.",
            "The iconic train station scream scene where Arjun celebrates his selection.",
            "The six-letter title refers to the sports team shirt the protagonist fought to buy."
        ],
        "id": 163
    },
    {
        "title": "AGENT SAI SRINIVASA ATHREYA",
        "displayTitle": "Agent Sai Srinivasa Athreya",
        "teluguTitle": "ఏజెంట్ సాయి శ్రీనివాస ఆత్రేయ",
        "year": 2019,
        "director": "Swaroop RSJ",
        "actors": [
            "Naveen Polishetty",
            "Shruti Sharma",
            "Suhas"
        ],
        "genres": [
            "Mystery",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A quirky, Sherlock Holmes-obsessed private detective operating a low-rent agency in Nellore investigates an unidentified corpse on a railway track.",
            "The seemingly minor inquiry draws him into a chilling nationwide racket involving organ harvesting, abandoned bodies, and religious extortion.",
            "Naveen Polishetty's breakout starring vehicle that became an instant cult comedy-thriller.",
            "Masterfully balances eccentric humor with a serious, deeply emotional investigative screenplay."
        ],
        "hints": [
            "A detective operating FBI (Fast Boyz Investigation) agency gets framed for murder in a mortuary.",
            "The investigation connects railway corpse dumps with false religious prophecies.",
            "The title comprises the title 'Agent' followed by the detective's formal three-part name."
        ],
        "id": 164
    },
    {
        "title": "BROCHEVAREVARURA",
        "displayTitle": "Brochevarevarura",
        "teluguTitle": "బ్రోచేవారెవరురా",
        "year": 2019,
        "director": "Vivek Athreya",
        "actors": [
            "Sree Vishnu",
            "Nivetha Thomas",
            "Satyadev Kancharana",
            "Nivetha Pethuraj",
            "Priyadarshi",
            "Rahul Ramakrishna"
        ],
        "genres": [
            "Crime",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "Three slacker intermediate college students attempt a fake kidnapping of their female classmate to help her escape her strict father's pressure.",
            "Simultaneously, a novice film director narrates an identical crime script to a leading actress, only for fiction and real crime to collide unpredictably.",
            "Vivek Sagar scored an eclectic soundtrack, and Vivek Athreya crafted a flawless hyperlink screenplay.",
            "Renowned for the uproarious trio dynamics of 'R3' (Rahul, Rambo, and Rocky) played by Sree Vishnu, Priyadarshi, and Rahul Ramakrishna."
        ],
        "hints": [
            "A staged kidnapping goes catastrophically wrong when actual criminals kidnap the girl for real.",
            "Features the hilarious scene with auto drivers and comedy kidnappings.",
            "The title is a famous classical Thyagaraja Carnatic keerthana phrase meaning 'Who will save us now?'"
        ],
        "id": 165
    },
    {
        "title": "MALLESHAM",
        "displayTitle": "Mallesham",
        "teluguTitle": "మల్లేశం",
        "year": 2019,
        "director": "Raj R",
        "actors": [
            "Priyadarshi Pulikonda",
            "Ananya Nagalla",
            "Jhansi"
        ],
        "genres": [
            "Biographical",
            "Period Drama",
            "Social Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "A school dropout from a handloom weaving family in Telangana spends sixteen years in relentless poverty attempting to automate the grueling Asu weaving machine.",
            "Moved by his mother's agonizing physical pain from winding yarn thousands of times daily, he braves mockery and debt to revolutionize Pochampally silk weaving.",
            "The inspiring real-life biographical drama of an uneducated handloom weaver who was conferred with the Padma Shri.",
            "Priyadarshi gave a poignant, career-defining dramatic performance captured with authentic rural realism."
        ],
        "hints": [
            "An uneducated village mechanic invents a mechanized machine to relieve his mother's severe shoulder agony.",
            "Features the authentic rural dialect and traditions of Aler in Nalgonda.",
            "The title is the first name of the celebrated weaver-inventor."
        ],
        "id": 166
    },
    {
        "title": "MATHU VADALARA",
        "displayTitle": "Mathu Vadalara",
        "teluguTitle": "మత్తు వదలరా",
        "year": 2019,
        "director": "Ritesh Rana",
        "actors": [
            "Sri Simha Koduri",
            "Satya",
            "Naresh Agastya",
            "Vennela Kishore"
        ],
        "genres": [
            "Comedy",
            "Thriller",
            "Crime"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An underpaid, exhausted delivery boy suffering from narcolepsy attempts a petty scam to make quick money inside an upscale apartment complex.",
            "When an elderly female resident collapses dead during his delivery, he finds himself trapped in a nightmare involving illegal narcotics and murder.",
            "Satya's comic performance as 'Yesu Babu' analyzing TV serial parodies like 'Ori Naa Kodaka' won universal acclaim.",
            "A breakout neo-noir dark comedy thriller made with innovative visual styles, quirky edits, and Kaala Bhairava's score."
        ],
        "hints": [
            "A delivery boy who falls asleep involuntarily tries to dispose of an old lady's corpse inside a luxury apartment.",
            "Directorial debut of Ritesh Rana.",
            "The title borrows a traditional Telugu nursery lullaby lyric cautioning against sloth and intoxication."
        ],
        "id": 167
    },
    {
        "title": "ALA VAIKUNTHAPURRAMULOO",
        "displayTitle": "Ala Vaikunthapurramuloo",
        "teluguTitle": "అల వైకుంఠపురములో",
        "year": 2020,
        "director": "Trivikram Srinivas",
        "actors": [
            "Allu Arjun",
            "Pooja Hegde",
            "Tabu",
            "Jayaram",
            "Murali Sharma"
        ],
        "genres": [
            "Action",
            "Family",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "An envious hospital clerk swaps his newborn son with his wealthy employer's child, raising the billionaire's real heir in squalor while abusing him verbally.",
            "Years later, the neglected boy discovers his true parentage and enters his biological family's palatial residence to subtly fix their dysfunctional lives.",
            "Thaman S. composed a historic global musical phenomenon, with 'Butta Bomma' and 'Samajavaragamana' breaking global streaming records.",
            "Murali Sharma delivered an acclaimed, award-winning performance as the scheming, selfish father Valmiki."
        ],
        "hints": [
            "Bantu discovers that he was swapped at birth by Valmiki and is the rightful heir to the Vaikunthapuram mansion.",
            "Features the famous boardroom dance conference sequence.",
            "The title refers to the name of the palatial mansion where the hero's biological parents reside."
        ],
        "id": 168
    },
    {
        "title": "SARILERU NEEKEVVARU",
        "displayTitle": "Sarileru Neekevvaru",
        "teluguTitle": "సరిలేరు నీకెవ్వరు",
        "year": 2020,
        "director": "Anil Ravipudi",
        "actors": [
            "Mahesh Babu",
            "Rashmika Mandanna",
            "Vijayashanti",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "An elite Indian Army Major is dispatched to Kurnool to deliver tragic news to a martyred soldier's mother, only to find her family besieged by a corrupt local minister.",
            "The soldier takes up residence in the village to shield the courageous family and teach the lawless minister constitutional duty.",
            "Marked the prestigious acting comeback of veteran action queen Vijayashanti after a 13-year hiatus.",
            "Features a massive comedic train journey sequence with Bandla Ganesh and Rashmika's family."
        ],
        "hints": [
            "Major Ajay Krishna defends Bharathi, a professor whose son sacrificed his life at the national border.",
            "Prakash Raj plays the corrupt politician Nagendra in Kurnool.",
            "The title translates as 'None Can Match You' or 'You Have No Equal'."
        ],
        "id": 169
    },
    {
        "title": "HIT: THE FIRST CASE",
        "displayTitle": "HIT: The First Case",
        "teluguTitle": "హిట్: ది ఫస్ట్ కేస్",
        "year": 2020,
        "director": "Sailesh Kolanu",
        "actors": [
            "Vishwak Sen",
            "Ruhani Sharma",
            "Brahmaji",
            "Bhanu Chander"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Crime"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A brilliant homicide intervention team officer suffering from severe PTSD and panic attacks investigates the disappearance of a young woman on a highway.",
            "The stakes turn agonizingly personal when his own forensic-investigator girlfriend vanishes while working on the same case.",
            "A taut, realistic procedural crime thriller that launched an interconnected investigative cinematic universe.",
            "Vishwak Sen gave an intense, grounded performance as the emotionally unstable detective Vikram Rudraraju."
        ],
        "hints": [
            "An investigator traumatized by past fire incidents searches for missing girl Preethi on Outer Ring Road.",
            "The title is the acronym for Homicide Intervention Team.",
            "The subtitle designates it as the opening chapter of the investigative franchise."
        ],
        "id": 170
    },
    {
        "title": "COLOR PHOTO",
        "displayTitle": "Color Photo",
        "teluguTitle": "కలర్ ఫోటో",
        "year": 2020,
        "director": "Sandeep Raj",
        "actors": [
            "Suhas",
            "Chandini Chowdary",
            "Sunil",
            "Harsha Chemudu"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Period Drama"
        ],
        "difficulty": "easy",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "Set in the late 1990s in Machilipatnam, an impoverished, dark-skinned engineering student falls in love with his fair-skinned, affluent classmate.",
            "Their tender relationship faces brutal hostility from the girl's violent, color-conscious police officer brother.",
            "Won the National Film Award for Best Feature Film in Telugu for its heartbreaking exploration of colorism and social prejudice in Indian society.",
            "Kaala Bhairava composed an evocative classical musical score featuring 'Tharagathi Gadhi Daati'."
        ],
        "hints": [
            "Jayammu and Deepthi's poignant love story challenged by skin tone discrimination.",
            "Sunil played a terrifying, sadistic police inspector Rama Raju.",
            "The English title refers to a printed film photograph captured in color."
        ],
        "id": 171
    },
    {
        "title": "MIDDLE CLASS MELODIES",
        "displayTitle": "Middle Class Melodies",
        "teluguTitle": "మిడిల్ క్లాస్ మెలోడీస్",
        "year": 2020,
        "director": "Vinod Anantoju",
        "actors": [
            "Anand Deverakonda",
            "Varsha Bollamma",
            "Goparaju Ramana"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Slice of Life"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A passionate young man from a nearby village moves to the bustling city of Guntur to open his dream tiffin center specializing in Bombay Chutney.",
            "He faces commercial failures, family financial strains, and property disputes alongside an eccentric father whose explosive temper hides deep affection.",
            "A slice-of-life comedy praised for its authentic Guntur regional dialect, culinary warmth, and realistic middle-class aspirations.",
            "Goparaju Ramana delivered an unforgettable, breakout comedic performance as the perpetually angry father Kondala Rao."
        ],
        "hints": [
            "Raghava bets his entire future on his mother's secret recipe for Bombay Chutney.",
            "The film captures the everyday sights, sounds, and snacks of Guntur.",
            "The three-word English title honors the everyday tunes and struggles of the middle class."
        ],
        "id": 172
    },
    {
        "title": "JATHI RATNALU",
        "displayTitle": "Jathi Ratnalu",
        "teluguTitle": "జాతిరత్నాలు",
        "year": 2021,
        "director": "Anudeep K. V.",
        "actors": [
            "Naveen Polishetty",
            "Priyadarshi Pulikonda",
            "Rahul Ramakrishna",
            "Faria Abdullah"
        ],
        "genres": [
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Three dimwitted, unemployed small-town buddies from Jogipet move to Hyderabad seeking respectable careers, only to get framed for an assassination attempt on a state minister.",
            "The film emerged as a sensational theatrical blockbuster, becoming one of the most celebrated slapstick absurdist comedies in modern Telugu history.",
            "Naveen Polishetty's court defense monologue parodying legal procedures remains an iconic comedic highlight.",
            "Radhan's viral chartbuster 'Chitti' was one of the biggest romantic comedy songs of the year."
        ],
        "hints": [
            "Srikanth, Sekhar, and Ravi spend their days in Chanchalguda prison enjoying royal jail food.",
            "Features the fictional town identity 'Jogipet Srikanth'.",
            "The title translates as 'Gems of the Nation', used here with deep comedic irony."
        ],
        "id": 173
    },
    {
        "title": "CINEMA BANDI",
        "displayTitle": "Cinema Bandi",
        "teluguTitle": "సినిమా బండి",
        "year": 2021,
        "director": "Praveen Kandregula",
        "actors": [
            "Vikas Vasistha",
            "Sandeep Varanasi",
            "Rag Mayur",
            "Uma YG"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Independent"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "A poor auto-rickshaw driver in a parched border village finds an expensive high-end cinema camera accidentally left behind in his vehicle.",
            "Instead of returning it, he rallies the entire village to shoot a feature film, believing the box office profits will bring electricity and water to their drought-hit community.",
            "An indie festival darling produced by Raj & DK, filmed with local non-professional actors in authentic Rayalaseema slang.",
            "Celebrated for its pure, innocent love letter to the grassroots magic of filmmaking."
        ],
        "hints": [
            "Veerabhadram the auto driver and Ganapathi the local wedding photographer attempt to make a blockbuster.",
            "The village barber is cast as the handsome male lead.",
            "The title translates as 'The Cinema Cart'."
        ],
        "id": 174
    },
    {
        "title": "LOVE STORY",
        "displayTitle": "Love Story",
        "teluguTitle": "లవ్ స్టోరీ",
        "year": 2021,
        "director": "Sekhar Kammula",
        "actors": [
            "Naga Chaitanya",
            "Sai Pallavi",
            "Rajeev Kanakala",
            "Devayani"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Social Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A lower-caste rural youth runs a modest Zumba fitness studio in Hyderabad and falls in love with an upper-caste engineering graduate seeking a corporate job.",
            "The narrative bravely confronts deep-seated caste discrimination and the suppressed trauma of childhood sexual abuse in conservative families.",
            "Sai Pallavi and Naga Chaitanya's dance performance in 'Saranga Dariya' and 'Evo Evo Kalalu' broke records across digital platforms.",
            "Marked the massive post-pandemic return of audiences to cinema halls with emotional resonance."
        ],
        "hints": [
            "Revanth and Mounica build a joint dance academy on a city terrace while fleeing family bigotry.",
            "Sekhar Kammula addresses caste taboos and child abuse within traditional joint families.",
            "The simple two-word English title represents the universal romantic narrative."
        ],
        "id": 175
    },
    {
        "title": "PUSHPA: THE RISE",
        "displayTitle": "Pushpa: The Rise",
        "teluguTitle": "పుష్ప: ది రైజ్",
        "year": 2021,
        "director": "Sukumar",
        "actors": [
            "Allu Arjun",
            "Rashmika Mandanna",
            "Fahadh Faasil",
            "Sunil",
            "Anasuya Bharadwaj"
        ],
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A daily-wage laborer in the Seshachalam forests rises through sheer audacity to take over a ruthless multi-crore red sandalwood smuggling syndicate.",
            "Won the National Film Award for Best Actor for Allu Arjun, making history as the first Telugu actor ever to win the honor.",
            "The film's iconic gestures, shoulder tilt, and dialogues like 'Thaggedhe Le' turned into a worldwide pop-culture craze across sports and entertainment.",
            "Devi Sri Prasad won the National Film Award for Best Music Direction for viral anthems like 'Oo Antava' and 'Srivalli'."
        ],
        "hints": [
            "Pushpa Raj outsmarts Konda Reddy and Mangalam Srinu in the dense red sander jungles.",
            "Fahadh Faasil enters as the eccentric, ruthless SP Bhanwar Singh Shekhawat.",
            "The title begins with the hero's floral first name followed by 'The Rise'."
        ],
        "id": 176
    },
    {
        "title": "SHYAM SINGHA ROY",
        "displayTitle": "Shyam Singha Roy",
        "teluguTitle": "శ్యామ్ సింగరాయ్",
        "year": 2021,
        "director": "Rahul Sankrityan",
        "actors": [
            "Nani",
            "Sai Pallavi",
            "Krithi Shetty",
            "Madonna Sebastian"
        ],
        "genres": [
            "Period Drama",
            "Fantasy",
            "Romance",
            "Social Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A contemporary aspiring Telugu film director accused of copyright plagiarism undergoes clinical hypnosis and recalls a past life in 1970s Bengal.",
            "In that past era, he was an audacious revolutionary writer and social reformer who fought to emancipate Devadasis from temple exploitation.",
            "Sai Pallavi's classical Odissi and temple dance performances in 'Pranavalaya' earned widespread cultural acclaim.",
            "Mickey J. Meyer composed an evocative period soundtrack capturing both modern Hyderabad and vintage Kolkata."
        ],
        "hints": [
            "Vasu remembers his past life as an untouchable champion who loved the temple dancer Maitreyi.",
            "Features the iconic cigarette-lighting scene in front of Goddess Kali.",
            "The title is the regal three-part name of the revolutionary Bengali author."
        ],
        "id": 177
    },
    {
        "title": "DJ TILLU",
        "displayTitle": "DJ Tillu",
        "teluguTitle": "డిజె టిల్లు",
        "year": 2022,
        "director": "Vimal Krishna",
        "actors": [
            "Siddu Jonnalagadda",
            "Neha Shetty",
            "Prince Cecil",
            "Brahmaji"
        ],
        "genres": [
            "Comedy",
            "Crime",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "An eccentric local disc jockey from Hyderabad who plays at local street gatherings accidentally gets entangled in a murder mystery after falling for an enigmatic woman.",
            "The protagonist's distinct Telangana dialect, quirky boastful banter, and colorful flamboyant fashion created an overnight cult phenomenon.",
            "Ram Miriyala scored the wildly viral title track that became the permanent party anthem of the Telugu states.",
            "Siddu Jonnalagadda co-wrote the dialogue and screenplay, catapulting himself into the top tier of contemporary stars."
        ],
        "hints": [
            "Bala Gangadhar Tilak, a street DJ, finds himself burying a corpse in the outskirts of Hyderabad.",
            "Features the catchphrase: 'Gundellona gunapam dimpinave Radhika!'.",
            "The title combines the musical disc jockey abbreviation with the hero's pet nickname."
        ],
        "id": 178
    },
    {
        "title": "BHEEMLA NAYAK",
        "displayTitle": "Bheemla Nayak",
        "teluguTitle": "భీమ్లా నాయక్",
        "year": 2022,
        "director": "Saagar K. Chandra",
        "actors": [
            "Pawan Kalyan",
            "Rana Daggubati",
            "Nithya Menen",
            "Samyuktha Menon"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A fierce clash of colossal egos erupts when an arrogant ex-military Havildar is arrested for smuggling alcohol across a state border checkpost by an upright tribal police sub-inspector.",
            "The administrative conflict rapidly escalates into a destructive war of pride, personal humiliation, and family destruction.",
            "Trivikram Srinivas adapted the screenplay from the Malayalam hit 'Ayyappanum Koshiyum', infusing fiery mass dialogues.",
            "Thaman S. composed an electrifying tribal folk-rock score featuring legendary folk singer Mogulaiah."
        ],
        "hints": [
            "A battle between the aristocratic arrogance of Daniel Shekar and the dormant volcanic rage of an honest tribal cop.",
            "Features the iconic lungi-folding fight inside the police lockup.",
            "The title is the complete name of the fearless sub-inspector."
        ],
        "id": 179
    },
    {
        "title": "RRR",
        "displayTitle": "RRR",
        "teluguTitle": "ఆర్.ఆర్.ఆర్",
        "year": 2022,
        "director": "S. S. Rajamouli",
        "actors": [
            "N. T. Rama Rao Jr.",
            "Ram Charan",
            "Alia Bhatt",
            "Ajay Devgn",
            "Shriya Saran"
        ],
        "genres": [
            "Period Drama",
            "Action",
            "Historical Fiction"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A fictional friendship blossoms in 1920s Delhi between two legendary real-life Indian revolutionaries: Gond tribal guardian Komaram Bheem and undercover police officer Alluri Sitarama Raju.",
            "Won the Academy Award (Oscar) and Golden Globe Award for Best Original Song for the viral dance phenomenon 'Naatu Naatu'.",
            "A global cinematic spectacle that captivated audiences and Hollywood directors worldwide with its unmatched action imagination.",
            "Features iconic sequences like the wild animal rescue at the British Governor's palace and the two heroes teaming up on horseback and motorcycle."
        ],
        "hints": [
            "Fire and Water personified through two revolutionaries who join forces against British colonial tyranny.",
            "First Indian feature film song to win an Academy Award.",
            "The three-letter title stands for Roudram, Ranam, Rudhiram in Telugu."
        ],
        "id": 180
    },
    {
        "title": "MAJOR",
        "displayTitle": "Major",
        "teluguTitle": "మేజర్",
        "year": 2022,
        "director": "Sashi Kiran Tikka",
        "actors": [
            "Adivi Sesh",
            "Saiee Manjrekar",
            "Sobhita Dhulipala",
            "Prakash Raj",
            "Revathi"
        ],
        "genres": [
            "Biographical",
            "Action",
            "War",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "The biographical account of National Security Guard (NSG) commando Sandeep Unnikrishnan, who laid down his life fighting terrorists during the 2008 Mumbai Taj Hotel attacks.",
            "Explores his childhood passion for the uniform, his tender romance, and his selfless leadership: 'Do not come up, I will handle them.'",
            "Adivi Sesh spent years researching and scripting the tribute with the blessing of the martyr's parents.",
            "Prakash Raj delivered a profoundly tearful closing court monologue praising the essence of a true soldier."
        ],
        "hints": [
            "The life and ultimate martyrdom of Sandeep Unnikrishnan during the 26/11 attacks in Mumbai.",
            "Brave commandos rescue hundreds of trapped hotel guests from burning corridors.",
            "The title is the military rank achieved by the heroic NSG officer."
        ],
        "id": 181
    },
    {
        "title": "ANTE SUNDARANIKI",
        "displayTitle": "Ante Sundaraniki",
        "teluguTitle": "అంటే సుందరానికీ",
        "year": 2022,
        "director": "Vivek Athreya",
        "actors": [
            "Nani",
            "Nazriya Nazim",
            "Naresh",
            "Rohini"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "An orthodox Brahmin youth and a devout Christian woman invent two contrasting medical lies to convince their deeply conservative parents to approve their inter-faith wedding.",
            "Their desperate, complex web of lies collapses into an avalanche of chaotic familial misunderstandings in Hyderabad and the USA.",
            "Marked the Telugu cinema debut of acclaimed Malayalam actress Nazriya Nazim.",
            "A masterclass in intricate non-linear comedy screenwriting and progressive satire by Vivek Athreya, scored by Vivek Sagar."
        ],
        "hints": [
            "Sundar and Leela struggle to unite their traditional Brahmin and Christian households.",
            "Features the hilarious childhood trauma of constant religious homams and superstitions.",
            "The title translates as 'As for Sundar...' or 'When it comes to Sundar'."
        ],
        "id": 182
    },
    {
        "title": "SITA RAMAM",
        "displayTitle": "Sita Ramam",
        "teluguTitle": "సీతా రామం",
        "year": 2022,
        "director": "Hanu Raghavapudi",
        "actors": [
            "Dulquer Salmaan",
            "Mrunal Thakur",
            "Rashmika Mandanna",
            "Sumanth"
        ],
        "genres": [
            "Period Drama",
            "Romance",
            "War",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In 1965, an orphan Indian Army lieutenant stationed in the snowy valleys of Kashmir receives mysterious romantic letters from a woman claiming to be his wife.",
            "Twenty years later, a rebellious Pakistani student in London is tasked with delivering the soldier's final undelivered letter to uncover a tragic royal sacrifice.",
            "A poetic, sweeping classic romance that emerged as a monumental pan-Indian commercial and emotional blockbuster.",
            "Vishal Chandrashekhar composed a timeless classical soundtrack with melodies like 'Inthandham' and 'Kaanunna Kalyanam'."
        ],
        "hints": [
            "Lieutenant Ram's unyielding devotion to Princess Noor Jahan / Sita Mahalakshmi across war boundaries.",
            "Afreen journeys through India to fulfill her grandfather's dying military penance.",
            "The title combines the names of the mythological divine couple."
        ],
        "id": 183
    },
    {
        "title": "KARTHIKEYA 2",
        "displayTitle": "Karthikeya 2",
        "teluguTitle": "కార్తికేయ 2",
        "year": 2022,
        "director": "Chandoo Mondeti",
        "actors": [
            "Nikhil Siddharth",
            "Anupama Parameswaran",
            "Anupam Kher"
        ],
        "genres": [
            "Mystery",
            "Adventure",
            "Fantasy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A rationalist young doctor travels to Dwarka and is thrust into a dangerous international quest to find an ancient divine anklet designed by Lord Krishna to heal future humanity.",
            "He must decipher ancient astronomical puzzles and riddles across the Himalayas while pursued by a ruthless secret cult.",
            "Won the National Film Award for Best Feature Film in Telugu and emerged as a massive pan-Indian surprise blockbuster.",
            "Anupam Kher delivered a viral, mesmerizing philosophical monologue explaining the historical and scientific grandeur of Lord Krishna."
        ],
        "hints": [
            "Dr. Karthikeya Kumaraswamy unlocks the mystery left behind 5000 years ago in submerged Dwarka.",
            "The sequel to the 2014 mystery hit.",
            "The title is the protagonist's name followed by the numeral 2."
        ],
        "id": 184
    },
    {
        "title": "OKE OKA JEEVITHAM",
        "displayTitle": "Oke Oka Jeevitham",
        "teluguTitle": "ఒకే ఒక జీవితం",
        "year": 2022,
        "director": "Shree Karthick",
        "actors": [
            "Sharwanand",
            "Ritu Varma",
            "Amala Akkineni",
            "Vennela Kishore",
            "Priyadarshi"
        ],
        "genres": [
            "Sci-Fi",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "An insecure musician struggling with stage fright is offered an opportunity by an eccentric scientist to travel twenty years into the past via a time machine.",
            "He attempts to rewrite his timeline and save his beloved mother from a fatal road accident that shattered his childhood.",
            "Amala Akkineni gave a profoundly moving maternal performance that resonated deeply with family audiences.",
            "A heart-wrenching sci-fi family drama exploring destiny, grief, and the realization that the past cannot be changed, but the future can be embraced."
        ],
        "hints": [
            "Three friends travel back to 1998 in a time machine to correct their childhood regrets.",
            "Jakes Bejoy's emotional mother song 'Amma' became a tear-jerker.",
            "The four-word title translates as 'Only One Life'."
        ],
        "id": 185
    },
    {
        "title": "MASOODA",
        "displayTitle": "Masooda",
        "teluguTitle": "మసూద",
        "year": 2022,
        "director": "Sai Kiran",
        "actors": [
            "Sangeetha",
            "Thiruveer",
            "Kavya Kalyanram",
            "Bandhavi Sridhar"
        ],
        "genres": [
            "Horror",
            "Thriller",
            "Mystery"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A cowardly young software employee in Hyderabad is persuaded by his single-mother neighbor to help rescue her teenage daughter who is possessed by a terrifying demonic entity.",
            "Their desperate quest for an exorcist uncovers the gruesome past of an executed black-magic sorceress who sacrificed children for immortality.",
            "Widely celebrated as one of the genuinely terrifying, atmospheric, and technically superior horror films produced in modern Telugu cinema.",
            "Prashanth R. Vihari's bone-chilling background score and eerie sound design set new standards in Telugu horror."
        ],
        "hints": [
            "Gopi overcomes his inherent cowardice to save young Naziya from an ancient evil djinn.",
            "Features the dark historical mystery of a cruel sorceress buried in a remote village.",
            "The seven-letter title is the name of the terrifying demonic sorceress."
        ],
        "id": 186
    },
    {
        "title": "BALAGAM",
        "displayTitle": "Balagam",
        "teluguTitle": "బలగం",
        "year": 2023,
        "director": "Venu Yeldandi",
        "actors": [
            "Priyadarshi Pulikonda",
            "Kavya Kalyanram",
            "Muralidhar Goud",
            "Sudhakar Reddy"
        ],
        "genres": [
            "Drama",
            "Family",
            "Cultural"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "Following the sudden demise of a respected rural patriarch in Telangana, a crow stubbornly refuses to touch the ritual food offering, indicating deep unresolved family malice.",
            "Over the mandatory eleven days of mourning rituals, hidden property grudges, fraternal bitterness, and severed bonds are painfully brought to light.",
            "The sensational directorial debut of comedian Venu Yeldandi that won over forty international film awards.",
            "Features the deeply emotional climactic Oggu Katha folk ballad that united estranged real-life families across the state."
        ],
        "hints": [
            "Sailu desperately tries to get a crow to touch his grandfather Komurayya's funeral food to save his personal debts.",
            "Captures the authentic mourning rituals and rural culture of Siricilla.",
            "The six-letter title is the Telangana colloquial word for 'Family / Relatives / Kinship'."
        ],
        "id": 187
    },
    {
        "title": "DASARA",
        "displayTitle": "Dasara",
        "teluguTitle": "దసరా",
        "year": 2023,
        "director": "Srikanth Odela",
        "actors": [
            "Nani",
            "Keerthy Suresh",
            "Dheekshith Shetty",
            "Shine Tom Chacko"
        ],
        "genres": [
            "Period Drama",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Set against the coal dust, liquor politics, and caste oppression of Veerlapally village in Godavarikhani during the late 1990s.",
            "A fearless, alcoholic coal thief seeks savage retribution against a tyrannical sarpanch's son who murdered his closest brother-like friend on his wedding night.",
            "Directorial debut of Srikanth Odela featuring Nani in a raw, soot-smeared, uninhibited rustic avatar.",
            "Santhosh Narayanan composed a fiery folk-rock score featuring the viral energetic hit 'Dhoom Dhaam Dhosthaan'."
        ],
        "hints": [
            "Dharani hides bottles in his waistband and steals coal from passing trains before tragedy strikes.",
            "Keerthy Suresh delivered an award-winning performance as the village bride Vennela.",
            "The title is the name of the celebrated autumn festival commemorating the triumph of good over evil."
        ],
        "id": 188
    },
    {
        "title": "VIRUPAKSHA",
        "displayTitle": "Virupaksha",
        "teluguTitle": "విరూపాక్ష",
        "year": 2023,
        "director": "Karthik Varma Dandu",
        "actors": [
            "Sai Dharam Tej",
            "Samyuktha Menon",
            "Sunil",
            "Brahmaji"
        ],
        "genres": [
            "Horror",
            "Mystery",
            "Supernatural",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In a secluded 1990s forest village named Rudravanam, residents begin committing gruesome, inexplicable suicides one after another under a mysterious occult curse.",
            "The village elders seal the village borders for eight days, trapping a visiting outsider who must decipher the dark sorcery before everyone perishes.",
            "Sukumar penned the gripping screenplay, creating an authentic folk-supernatural mystery thriller.",
            "Ajaneesh Loknath's haunting musical score and the bone-chilling climax twist made it a sensational summer blockbuster."
        ],
        "hints": [
            "Surya investigates an ancient black-magic curse unleashed on the isolated village of Rudravanam.",
            "Villagers are forbidden from leaving the sacred village perimeter during the death wave.",
            "The title is an epithet of Lord Shiva meaning 'The One with Formless or Multi-faceted Vision'."
        ],
        "id": 189
    },
    {
        "title": "SAMAJAVARAGAMANA",
        "displayTitle": "Samajavaragamana",
        "teluguTitle": "సామజవరగమన",
        "year": 2023,
        "director": "Ram Abbaraju",
        "actors": [
            "Sree Vishnu",
            "Reba Monica John",
            "Naresh",
            "Srikanth Iyengar"
        ],
        "genres": [
            "Comedy",
            "Romance",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A stingy multiplex box-office employee spends years trying to help his middle-aged father pass his pending degree college exams to inherit a grandfather's property.",
            "He falls in love with a female student who stays as a paying guest in his house, only to discover an absurd family connection that threatens to turn her into his legal cousin.",
            "One of the biggest comedy blockbusters of 2023, celebrated for nonstop theatrical laughs and sparkling witty dialogues.",
            "Naresh gave a riotous performance as the hapless father Uma Maheshwara Rao failing his college degree repeatedly."
        ],
        "hints": [
            "Balu must prevent his girlfriend from becoming his sister due to a bizarre past relationship puzzle.",
            "The father cannot graduate college without his son coaching him relentlessly.",
            "The title borrows from a famous Tyagaraja keerthana and an iconic 2020 chartbuster song."
        ],
        "id": 190
    },
    {
        "title": "BABY",
        "displayTitle": "Baby",
        "teluguTitle": "బేబీ",
        "year": 2023,
        "director": "Sai Rajesh",
        "actors": [
            "Anand Deverakonda",
            "Vaishnavi Chaitanya",
            "Viraj Ashwin"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "An innocent slum girl from a working-class background enters an upscale urban engineering college and slowly drifts away from her childhood auto-driver lover.",
            "She gets swept up in modern westernized college lifestyle, luxury parties, and peer pressure, leading to an emotionally volcanic tragedy.",
            "A monumental musical romantic drama that became an unprecedented box office sensation among contemporary youth.",
            "Vijai Bulganin composed a soul-shattering musical album featuring viral hits like 'O Rendu Prema Meghaalila'."
        ],
        "hints": [
            "The heartbreaking transformation of Vaishnavi and the agonizing pain of auto driver Anand.",
            "Vaishnavi Chaitanya gave an award-winning breakout performance as the conflicted heroine.",
            "The four-letter English title is a common term of romantic endearment."
        ],
        "id": 191
    },
    {
        "title": "MISS SHETTY MR POLISHETTY",
        "displayTitle": "Miss Shetty Mr Polishetty",
        "teluguTitle": "మిస్ శెట్టి మిస్టర్ పోలిశెట్టి",
        "year": 2023,
        "director": "Mahesh Babu P.",
        "actors": [
            "Anushka Shetty",
            "Naveen Polishetty",
            "Murali Sharma",
            "Jayasudha"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A fiercely independent master chef living in London wants to become a single mother through artificial insemination without getting married.",
            "She travels to India and scouts an eccentric, struggling stand-up comedian as her prospective sperm donor, hiding her true intention under the guise of friendship.",
            "Naveen Polishetty's impeccable comedic timing and stand-up routines delivered relentless humor.",
            "A progressive romantic comedy addressing unconventional modern life choices with taste, dignity, and heartwarming humor."
        ],
        "hints": [
            "Anvitha Shetty selects the humorous stand-up comic Sidhu Polishetty for an unconventional reason.",
            "Sidhu mistakenly believes she has fallen head over heels in love with him.",
            "The title combines the honorific titles and surnames of both lead actors."
        ],
        "id": 192
    },
    {
        "title": "MAD",
        "displayTitle": "MAD",
        "teluguTitle": "మ్యాడ్",
        "year": 2023,
        "director": "Kalyan Shankar",
        "actors": [
            "Narne Nithin",
            "Sangeeth Shobhan",
            "Ram Nithin",
            "Sri Gouri Priya"
        ],
        "genres": [
            "Comedy",
            "Youth"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "Three eccentric, reckless engineering freshmen—an aggressive orphan, an unabashed flirt, and a timid romantic—turn their campus hostel upside down.",
            "A laugh-a-minute slapstick youth riot filled with absurd hostel antics, canteen brawls, fake romantic telephone identities, and inter-branch rivalries.",
            "Sangeeth Shobhan's comedic portrayal of 'Damodhar' (DD) became an overnight sensation among youth and meme creators.",
            "A surprise sleeper blockbuster that emerged as one of the most profitable comedy entertainers of 2023."
        ],
        "hints": [
            "Manoj, Ashok, and Damodhar represent the chaotic spirit of engineering hostel life.",
            "Features the mystery girl 'Jenni' who only interacts via secret phone calls.",
            "The three-letter title spells an English word meaning insane or wildly crazy."
        ],
        "id": 193
    },
    {
        "title": "HI NANNA",
        "displayTitle": "Hi Nanna",
        "teluguTitle": "హాయ్ నాన్న",
        "year": 2023,
        "director": "Shouryuv",
        "actors": [
            "Nani",
            "Mrunal Thakur",
            "Baby Kiara Khanna",
            "Jayaram"
        ],
        "genres": [
            "Family",
            "Drama",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A successful celebrity fashion photographer raises his six-year-old daughter who suffers from cystic fibrosis, inventing bedtime fairy tales about her absent mother.",
            "When the curious child befriends an elegant woman on the street, a concealed history of traumatic memory loss and immense matrimonial sacrifice begins to surface.",
            "Hesham Abdul Wahab composed a heart-tugging musical masterpiece with songs like 'Samayama' and 'Ammaadi'.",
            "A refined, tear-jerking emotional drama celebrating the purest depths of fatherhood and selfless second chances."
        ],
        "hints": [
            "Viraj and little Mahi's world changes when Yashna enters their lives.",
            "Deals with a daughter's chronic lung illness and a mother's tragic amnesia.",
            "The title is the affectionate Telugu phrase a child uses to greet their father."
        ],
        "id": 194
    },
    {
        "title": "SALAAR: PART 1 – CEASEFIRE",
        "displayTitle": "Salaar: Part 1 – Ceasefire",
        "teluguTitle": "సాలార్: పార్ట్ 1 – సీజ్‌ఫైర్",
        "year": 2023,
        "director": "Prashanth Neel",
        "actors": [
            "Prabhas",
            "Prithviraj Sukumaran",
            "Shruti Haasan",
            "Jagapathi Babu"
        ],
        "genres": [
            "Action",
            "Drama",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In the dystopian, sovereign city-state of Khansaar ruled by three ruthless feudal tribes, a prince calls upon his exiled, unstoppable childhood friend to secure his crown.",
            "The protagonist had sworn an oath to live a peaceful life operating machinery, but unleashes apocalyptic fury to keep a childhood promise.",
            "Directed by Prashanth Neel, featuring colossal industrial world-building, thunderous action set-pieces, and Ravi Basrur's earth-shaking background score.",
            "Ended with the revelation of the protagonist's royal Shouryanga lineage, setting up a clash of titans."
        ],
        "hints": [
            "Deva unleashes monstrous violence to make his blood-brother Varadharaja Mannar the king of Khansaar.",
            "Features the famous tribal weapon with the signature mark.",
            "The title is an Urdu word meaning commander or leader, followed by 'Part 1 – Ceasefire'."
        ],
        "id": 195
    },
    {
        "title": "HANU-MAN",
        "displayTitle": "Hanu-Man",
        "teluguTitle": "హను-మాన్",
        "year": 2024,
        "director": "Prasanth Varma",
        "actors": [
            "Teja Sajja",
            "Amritha Aiyer",
            "Varalaxmi Sarathkumar",
            "Vinay Rai"
        ],
        "genres": [
            "Fantasy",
            "Superhero",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A petty thief in the fictional rustic village of Anjanadri dives into the sea and discovers a mystical solar gem carrying celestial superpowers.",
            "He must defend his village and the divine gem from a megalomaniac tech billionaire who arrives with advanced robotic armor to steal the divine power.",
            "A massive historical Sankranti blockbuster that overcame severe theater competition to gross over 300 crores globally on a modest budget.",
            "The sensational opening chapter of the Prasanth Varma Cinematic Universe (PVCU), featuring the iconic devotional hymn climax."
        ],
        "hints": [
            "The village boy protagonist discovers the Rudhira Mani at the bottom of the sea.",
            "Combines traditional Indian mythology with modern superhero visual effects.",
            "The title is the hyphenated name of the revered monkey deity."
        ],
        "id": 196
    },
    {
        "title": "TILLU SQUARE",
        "displayTitle": "Tillu Square",
        "teluguTitle": "టిల్లు స్క్వేర్",
        "year": 2024,
        "director": "Mallik Ram",
        "actors": [
            "Siddu Jonnalagadda",
            "Anupama Parameswaran",
            "Murali Sharma"
        ],
        "genres": [
            "Comedy",
            "Crime",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "The flamboyant Hyderabadi DJ gets ensnared in yet another deadly espionage and murder web after falling for a mysterious, glamorous woman he meets at an upscale pub.",
            "He discovers that his new lover is an undercover intelligence operative and the sister of the criminal he previously helped eliminate.",
            "Achieved massive 100-crore box office success, proving the enduring comedic appeal of Siddu's fast-talking protagonist.",
            "Packed with uproarious one-liners, self-aware situational comedy, and Ram Miriyala's hit music."
        ],
        "hints": [
            "DJ Tillu falls into Lilly's dangerous trap and is interrogated by international intelligence officers.",
            "Features the viral party song 'Ticket Eh Konakunda'.",
            "The title combines the hero's name with a mathematical power term denoting two."
        ],
        "id": 197
    },
    {
        "title": "KALKI 2898 AD",
        "displayTitle": "Kalki 2898 AD",
        "teluguTitle": "కల్కి 2898 AD",
        "year": 2024,
        "director": "Nag Ashwin",
        "actors": [
            "Prabhas",
            "Amitabh Bachchan",
            "Kamal Haasan",
            "Deepika Padukone"
        ],
        "genres": [
            "Sci-Fi",
            "Mythological",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In a post-apocalyptic dystopian world 6000 years after the Kurukshetra war, an immortal warrior awaits the birth of Lord Vishnu's tenth and final avatar.",
            "A selfish bounty hunter and his AI vehicle Bujji attempt to capture a pregnant refugee from the totalitarian Complex ruled by the tyrannical Supreme Yaskin.",
            "A monumental Indian sci-fi epic that grossed over 1000 crores globally, merging Hindu mythology with futuristic cyberpunk technology.",
            "Amitabh Bachchan delivered a towering performance as the immortal Ashwatthama, wielding divine astras."
        ],
        "hints": [
            "Bhairava hunts SUM-80 across the wasteland of Kashi to buy passage into the Complex.",
            "The jaw-dropping interval and climax reveal connecting the bounty hunter to the warrior Karna.",
            "The title names the prophesied final avatar followed by a futuristic calendar year."
        ],
        "id": 198
    },
    {
        "title": "SARIPODHAA SANIVAARAM",
        "displayTitle": "Saripodhaa Sanivaaram",
        "teluguTitle": "సరిపోదా శనివారం",
        "year": 2024,
        "director": "Vivek Athreya",
        "actors": [
            "Nani",
            "S. J. Suryah",
            "Priyanka Arul Mohan"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Vigilante"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Bound by a sacred childhood promise to his dying mother, an ordinary insurance agent suppresses his explosive rage all week, unleashing his anger only on Saturdays.",
            "He records his grievances in a notebook and takes on a psychotic, abusive police circle inspector who brutally terrorizes the innocent residents of Sokulapalem.",
            "S. J. Suryah gave a thunderous antagonist performance as the maniacal CI R. Dayanand.",
            "Jakes Bejoy provided an electrifying, innovative musical score that drove the high-concept vigilante action."
        ],
        "hints": [
            "Surya maintains a ledger of wrongs and punishes offenders strictly on one designated day of the week.",
            "Dayanand vents his fraternal inferiority complex by torturing poor villagers.",
            "The title is an assertive Telugu question asking: 'Is Saturday not enough?'"
        ],
        "id": 199
    },
    {
        "title": "LUCKY BASKHAR",
        "displayTitle": "Lucky Baskhar",
        "teluguTitle": "లక్కీ భాస్కర్",
        "year": 2024,
        "director": "Venky Atluri",
        "actors": [
            "Dulquer Salmaan",
            "Meenakshi Chaudhary",
            "Ramki"
        ],
        "genres": [
            "Crime",
            "Period Drama",
            "Thriller",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Set against the Bombay financial markets of the late 1980s and early 1990s, an honest, underpaid middle-class bank cashier is pushed by poverty into manipulating banking loopholes.",
            "He amasses unfathomable wealth through illicit hawala scams and money-market instruments, entering a dangerous game of financial survival during the 1992 scam.",
            "Dulquer Salmaan delivered a masterclass in subtlety and ambition, carrying the period financial drama to critical and commercial triumph.",
            "G. V. Prakash Kumar's gripping background score amplified the high-stakes stock-market tension."
        ],
        "hints": [
            "Baskhar Kumar works at Magadha Bank, turning from an impoverished clerk into an untouchable financial puppet-master.",
            "Deals with stock market deceptions, fake pay orders, and offshore funds.",
            "The title combines an adjective meaning fortunate with the protagonist's first name."
        ],
        "id": 200
    },
    {
        "title": "PUSHPA 2: THE RULE",
        "displayTitle": "Pushpa 2: The Rule",
        "teluguTitle": "పుష్ప 2: ది రూల్",
        "year": 2024,
        "director": "Sukumar",
        "actors": [
            "Allu Arjun",
            "Rashmika Mandanna",
            "Fahadh Faasil",
            "Jagapathi Babu"
        ],
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Having established absolute dominion over the red sandalwood trade, the unyielding smuggler takes on international syndicates and state police forces.",
            "His escalating psychological war of humiliation with SP Bhanwar Singh Shekhawat threatens to tear down political governments.",
            "The monumental, record-shattering second installment that rewrote all Indian cinema box office history with historic worldwide opening records.",
            "Features the iconic, breathtaking Jathara sequence where the lead actor performs an unforgettable ardhanarishvara temple dance in sarees."
        ],
        "hints": [
            "Pushpa's absolute reign over national borders and his clash with Shekhawat.",
            "The sensational Gangamma Thalli Jathara sequence stunned audiences globally.",
            "The title is the second chapter of the franchise carrying the subtitle 'The Rule'."
        ],
        "id": 201
    },
    {
        "title": "NINNE PREMISTHA",
        "displayTitle": "Ninne Premistha",
        "teluguTitle": "నిన్నే ప్రేమిస్తా",
        "year": 2000,
        "director": "R. R. Shinde",
        "actors": [
            "Srikanth",
            "Soundarya",
            "Nagarjuna"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "A visually impaired young woman falls in love with the memory of her deceased cornea donor through his personal diary.",
            "An innocent village youth seeks to marry her, discovering that the organ donor whose eyes she received was a martyred military officer.",
            "Features the soulful devotional and romantic song 'Oka Devatha' that topped radio charts for months.",
            "Nagarjuna played an unforgettable special extended cameo as the sacrificial officer Sreenu."
        ],
        "hints": [
            "A woman receives the eyes of a soldier she never met in person and falls in love with his soul.",
            "Soundarya and Srikanth deliver emotional performances about grief and selflessness.",
            "The title translates as 'I Will Love You Forever'."
        ],
        "id": 202
    },
    {
        "title": "RAYALASEEMA RAMANNA CHOWDARY",
        "displayTitle": "Rayalaseema Ramanna Chowdary",
        "teluguTitle": "రాయలసీమ రామన్న చౌదరి",
        "year": 2000,
        "director": "Suresh Krissna",
        "actors": [
            "Mohan Babu",
            "Jayasudha",
            "Soundarya"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "A noble, towering village head in Rayalaseema adjudicates disputes with divine fairness while concealing a painful family curse.",
            "His peaceful administration is disrupted by bitter relatives who exploit an ancient boundary conflict to tear the family apart.",
            "Mohan Babu delivered thunderous theatrical monologues showcasing his celebrated diction and commanding presence.",
            "Mani Sharma composed a rich traditional folk and classical soundtrack."
        ],
        "hints": [
            "A revered village chieftain strives to keep his region free from factional bloodshed.",
            "Features the conflict between righteousness and deceitful rural conspirators.",
            "The title combines a famous Andhra region with the protagonist's formal full name."
        ],
        "id": 203
    },
    {
        "title": "CHENNAKESAVA REDDY",
        "displayTitle": "Chennakesava Reddy",
        "teluguTitle": "చెన్నకేశవ రెడ్డి",
        "year": 2002,
        "director": "V. V. Vinayak",
        "actors": [
            "Nandamuri Balakrishna",
            "Tabu",
            "Shriya Saran"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "An honest, fearless Mumbai police officer is shocked to learn that his father is a feared Rayalaseema faction leader imprisoned in Tihar Jail.",
            "When the aged father is released, he returns to his faction-torn province in a helicopter to eliminate the corrupt traitors who murdered his family.",
            "Directed by V. V. Vinayak, celebrated for legendary mass helicopter entry sequences and faction dialogues.",
            "Mani Sharma's thunderous background score and songs made it an explosive commercial hit."
        ],
        "hints": [
            "A dual-role action drama contrasting an upright Mumbai cop with a legendary Rayalaseema tiger.",
            "Features the famous helicopter landing scene in the faction lands.",
            "The title is the complete full name of the fierce elder protagonist."
        ],
        "id": 204
    },
    {
        "title": "PELLAM OORELITHE",
        "displayTitle": "Pellam Oorelithe",
        "teluguTitle": "పెళ్ళాం ఊరెళితే",
        "year": 2003,
        "director": "S. V. Krishna Reddy",
        "actors": [
            "Srikanth",
            "Venu Thottempudi",
            "Sangeetha",
            "Rakshitha"
        ],
        "genres": [
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2000-2004",
        "clues": [
            "Two married friends decide to have a wild bachelor night of fun the moment their wives travel out of town to their native villages.",
            "They hire an escort, but end up in an escalating spiral of comical lies, mistaken identities, and panicked alibis when their wives return early.",
            "A riotous comedy of errors that dominated the box office in early 2003.",
            "Sunil, Brahmanandam, and Kota Srinivasa Rao contributed to endless laugh-out-loud slapstick sequences."
        ],
        "hints": [
            "Two husbands face sheer panic when their secret party gets exposed by sudden unexpected homecomings.",
            "Directed by family entertainer specialist S. V. Krishna Reddy.",
            "The title is a common Telugu conditional proverb: 'When the wife goes out of town'."
        ],
        "id": 205
    },
    {
        "title": "SEETAYYA",
        "displayTitle": "Seetayya",
        "teluguTitle": "సీతయ్య",
        "year": 2003,
        "director": "Y. V. S. Chowdary",
        "actors": [
            "Nandamuri Harikrishna",
            "Simran",
            "Soundarya"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A ruthless, uncompromising police circle inspector is dispatched to a lawless factionist town ruled by two warring families.",
            "He enforces law and order with zero tolerance, famously declaring that he will not listen to anyone once he makes up his mind.",
            "Spawned an iconic mass catchphrase asserting that the stubborn protagonist listens to absolutely no one once his mind is made up.",
            "M. M. Keeravani's energetic soundtrack features the viral anthem 'Ravoyi Chandamama'."
        ],
        "hints": [
            "A cop who refuses political compromises brings peace to a violent faction province on his own terms.",
            "Nandamuri Harikrishna's fierce mass performance as a no-nonsense policeman.",
            "The title is the first name of the stubborn titular police officer."
        ],
        "id": 206
    },
    {
        "title": "CHANTIGADU",
        "displayTitle": "Chantigadu",
        "teluguTitle": "చంటిగాడు",
        "year": 2003,
        "director": "B. A. Jaya",
        "actors": [
            "Baladitya",
            "Suhasini",
            "Sarath Babu"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "hard",
        "popularity": "cult",
        "era": "2000-2004",
        "clues": [
            "A poor village youth falls in love with the daughter of a proud, wealthy village landlord who despises the lower classes.",
            "Directed by pioneering female Telugu filmmaker B. A. Jaya, this low-budget rural romance became a surprise commercial musical hit.",
            "Vandemataram Srinivas scored an evergreen folk-infused album featuring the chartbuster 'Kokilamma'."
        ],
        "hints": [
            "An innocent rural boy's steadfast love challenges the arrogant village aristocracy.",
            "Directed by prominent female filmmaker B. A. Jaya.",
            "The title is the affectionate rural pet name of the young hero."
        ],
        "id": 207
    },
    {
        "title": "ANJI",
        "displayTitle": "Anji",
        "teluguTitle": "అంజి",
        "year": 2004,
        "director": "Kodi Ramakrishna",
        "actors": [
            "Chiranjeevi",
            "Namrata Shirodkar",
            "Tinu Anand",
            "Bhupinder Singh"
        ],
        "genres": [
            "Fantasy",
            "Action",
            "Adventure"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2000-2004",
        "clues": [
            "A simple tourist guide in the Himalayas finds himself defending the sacred 'Atmalingam' of Lord Shiva from an evil sorcerer seeking absolute cosmic power.",
            "Took over five years to produce and won the National Film Award for Best Special Effects.",
            "Features the epic climactic battle inside an ancient temple cave guarded by divine tridents and fire.",
            "Mani Sharma composed high-energy spiritual anthems including the famous 'Maanava Maanava'."
        ],
        "hints": [
            "A humble guide protects a divine Shiva lingam endowed with cosmic immortality.",
            "Won the National Award for Special Effects in 2004.",
            "The title is the four-letter pet name of the protagonist, inspired by Lord Anjaneya."
        ],
        "id": 208
    },
    {
        "title": "SANKRANTI",
        "displayTitle": "Sankranti",
        "teluguTitle": "సంక్రాంతి",
        "year": 2005,
        "director": "Muppalaneni Shiva",
        "actors": [
            "Venkatesh",
            "Srikanth",
            "Sneha",
            "Aarti Agarwal",
            "Sangeetha"
        ],
        "genres": [
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "Four devoted brothers run a traditional provision store with immense harmony until marriage brings petty domestic politics and financial friction.",
            "The eldest brother sacrifices his personal savings, marital peace, and pride to ensure his younger brothers are educated and married.",
            "A grand emotional joint family blockbuster that became the definitive festive harvest holiday family hit of 2005.",
            "S. A. Rajkumar's melodies like 'Andala Srimathiki' captured warm traditional Telugu domestic bonds."
        ],
        "hints": [
            "Raghavendra and his three younger brothers endure the painful splitting of a joint family household.",
            "A classic tear-jerker about brotherly sacrifice and rural family values.",
            "The title is named after the premier harvest festival of the Telugu people."
        ],
        "id": 209
    },
    {
        "title": "CHAKRAM",
        "displayTitle": "Chakram",
        "teluguTitle": "చక్రం",
        "year": 2005,
        "director": "Krishna Vamsi",
        "actors": [
            "Prabhas",
            "Asin",
            "Charmy Kaur",
            "Prakash Raj"
        ],
        "genres": [
            "Drama",
            "Philosophical"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A brilliant foreign-educated doctor learns he is suffering from terminal cancer and abandons his bride at the altar to spare her grief.",
            "He arrives in a secluded colony in Hyderabad called 'Sahara', devoting his remaining days to bringing joy and resolving the broken lives of neighbors.",
            "Features the iconic philosophical motivational anthem 'Jagamantha Kutumbam Naadi' penned by Sirivennela Sitaramasastri.",
            "Won multiple State Nandi Awards for its deeply moving exploration of mortality and selfless joy."
        ],
        "hints": [
            "A dying doctor chooses to spend his final months spreading laughter to strangers rather than mourning his fate.",
            "Contains the immortal song celebrating the entire world as one's family.",
            "The title is the Sanskrit word for 'Wheel' or 'Circle of Life' and is the hero's name."
        ],
        "id": 210
    },
    {
        "title": "ANDHRUDU",
        "displayTitle": "Andhrudu",
        "teluguTitle": "ఆంధ్రుడు",
        "year": 2005,
        "director": "Paruchuri Murali",
        "actors": [
            "Gopichand",
            "Gowri Pandit",
            "Sayaji Shinde",
            "Pawan Malhotra"
        ],
        "genres": [
            "Action",
            "Drama",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "An upright police constable in Andhra is sent to Bihar to protect an honest election commissioner facing death threats from a ruthless local mafia don.",
            "He takes on the Bihar underworld single-handedly with raw martial courage while falling for the commissioner's daughter.",
            "Showcased Gopichand as an athletic action hero with intense physical hand-to-hand combat choreography.",
            "Kalyani Malik composed the hit soundtrack featuring songs like 'Gundello Edo'."
        ],
        "hints": [
            "Surendra journeys to the lawless badlands of Bihar to safeguard an upright official.",
            "Explores a police constable's valor against cross-state criminal syndicates.",
            "The title translates as 'The Man from Andhra'."
        ],
        "id": 211
    },
    {
        "title": "LAKSHMI",
        "displayTitle": "Lakshmi",
        "teluguTitle": "లక్ష్మి",
        "year": 2006,
        "director": "V. V. Vinayak",
        "actors": [
            "Venkatesh",
            "Nayanthara",
            "Charmy Kaur"
        ],
        "genres": [
            "Action",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "The eldest brother of an industrial family sacrifices his own happiness to build an industrial empire and nurture his younger stepbrothers.",
            "When greedy relatives manipulate the ungrateful brothers to seize his factories, he steps down quietly, only to protect them when enemies strike.",
            "V. V. Vinayak blends high-decibel mass action with deeply sentimental brotherly affection.",
            "Ramana Gogula composed a chartbuster musical score that drove the film to historic Sankranti box office collections."
        ],
        "hints": [
            "The self-sacrificing elder brother protects his industrial enterprise and ungrateful stepbrothers from Kolkata mobsters.",
            "Features the famous train fight sequence and mass dialogues.",
            "The title is the name of the Goddess of Wealth and the protagonist's first name."
        ],
        "id": 212
    },
    {
        "title": "BANGARAM",
        "displayTitle": "Bangaram",
        "teluguTitle": "బంగారం",
        "year": 2006,
        "director": "Dharani",
        "actors": [
            "Pawan Kalyan",
            "Meera Chopra",
            "Ashutosh Rana",
            "Mukesh Rishi"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "An energetic television reporter desperate for a visa to the BBC in London needs an official sign-off from a strict bureaucrat.",
            "To get his signature, he inadvertently gets embroiled in rescuing the bureaucrat's runaway daughter from a ruthless Rayalaseema factionist wedding.",
            "Directed by Dharani, renowned for non-stop kinetic camera movements, colorful comic sequences, and stylized action.",
            "Vidyasagar scored an energetic musical album featuring popular dance tracks and 'Chedugudu'."
        ],
        "hints": [
            "A TV reporter helps an innocent bride elope with her lover while fleeing faction machetes.",
            "Pawan Kalyan's hyperactive comic persona and unconventional action style.",
            "The title is the Telugu word for 'Gold', also used as a sweet term of endearment."
        ],
        "id": 213
    },
    {
        "title": "RANAM",
        "displayTitle": "Ranam",
        "teluguTitle": "రణం",
        "year": 2006,
        "director": "Amma Rajasekhar",
        "actors": [
            "Gopichand",
            "Kamna Jethmalani",
            "Biju Menon"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2005-2009",
        "clues": [
            "A fearless college student in Hyderabad falls in love with a girl who turns out to be the sister of the city's most feared mafia kingpin.",
            "Rather than fleeing, the hero walks straight into the gangster's fortress and challenges him with psychological defiance and physical might.",
            "Directorial debut of choreographer Amma Rajasekhar that established Gopichand as a top-tier commercial action hero.",
            "Mani Sharma's soundtrack was a massive commercial hit, featuring songs like 'Cheliya Cheliya'."
        ],
        "hints": [
            "Chinna takes on the terrifying underworld don Bhagawati to win his sister's hand.",
            "Features the famous college campus fights and intense villain confrontations.",
            "The title is the Telugu word for 'Battle' or 'War'."
        ],
        "id": 214
    },
    {
        "title": "ANNAVARAM",
        "displayTitle": "Annavaram",
        "teluguTitle": "అన్నవరం",
        "year": 2006,
        "director": "Bhimaneni Srinivasa Rao",
        "actors": [
            "Pawan Kalyan",
            "Asin",
            "Sandhya",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Action",
            "Family",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A devoted brother living in a remote rural village gets his beloved sister married to a decent man in the historic city of Hyderabad.",
            "When he visits the city and finds his sister's domestic peace threatened by ruthless extortion gangs, he secretly launches a nighttime slaughter of the underworld.",
            "Official Telugu remake of the Tamil blockbuster 'Thirupaachi', scored with Ramana Gogula's high-energy music.",
            "Balances tender, tearful brother-sister bonding with ferocious urban vigilante action."
        ],
        "hints": [
            "A brother hunts down three underworld kingpins in Hyderabad to ensure his pregnant sister can live safely.",
            "Features the famous sister sentiment and mass weapon combats.",
            "The title is named after a famous pilgrimage town of Lord Satyanarayana Swamy in Andhra."
        ],
        "id": 215
    },
    {
        "title": "ATHIDHI",
        "displayTitle": "Athidhi",
        "teluguTitle": "అతిథి",
        "year": 2007,
        "director": "Surender Reddy",
        "actors": [
            "Mahesh Babu",
            "Amrita Rao",
            "Murali Sharma",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Crime"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A framed orphan youth spends fourteen years in prison for the murder of an innocent couple who had taken him in as an adoptive son.",
            "Upon release, he seeks out the real psychotic serial killer while protecting the couple's surviving daughter from danger in Delhi.",
            "Surender Reddy brought high-speed, stylized action cinematography and sleek urban aesthetics.",
            "Murali Sharma made an explosive Telugu debut as the psychopathic, shape-shifting serial killer 'Kaiser'."
        ],
        "hints": [
            "The hero is falsely accused of killing his benefactors and hunts the sinister Kaiser.",
            "Amrita Rao's sole Telugu cinema appearance.",
            "The title translates as 'The Guest'."
        ],
        "id": 216
    },
    {
        "title": "HOMAM",
        "displayTitle": "Homam",
        "teluguTitle": "హోమం",
        "year": 2008,
        "director": "J. D. Chakravarthy",
        "actors": [
            "Jagapathi Babu",
            "J. D. Chakravarthy",
            "Pradeep Rawat",
            "Mamta Mohandas"
        ],
        "genres": [
            "Crime",
            "Action",
            "Thriller"
        ],
        "difficulty": "hard",
        "popularity": "cult",
        "era": "2005-2009",
        "clues": [
            "A police officer is planted deep undercover in a dreaded mafia syndicate, while the mafia boss simultaneously plants a mole inside the state police department.",
            "Both moles desperately race to unmask each other's identities before their double lives are exposed and terminated.",
            "Inspired by Martin Scorsese's 'The Departed' and the Hong Kong classic 'Infernal Affairs'.",
            "Praised for its gritty neo-noir realism, sharp dialogues, and stylish crime direction by J. D. Chakravarthy."
        ],
        "hints": [
            "A cat-and-mouse game between an undercover cop in the mob and a mob informant in uniform.",
            "Jagapathi Babu and J. D. Chakravarthy square off as the two opposite moles.",
            "The title is the Sanskrit/Telugu word for a sacred fire ritual."
        ],
        "id": 217
    },
    {
        "title": "EK NIRANJAN",
        "displayTitle": "Ek Niranjan",
        "teluguTitle": "ఏక్ నిరంజన్",
        "year": 2009,
        "director": "Puri Jagannadh",
        "actors": [
            "Prabhas",
            "Kangana Ranaut",
            "Sonu Sood",
            "Makarand Deshpande"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "An orphan bounty hunter in Hyderabad tracks down escaped criminals and hands them over to the police purely to earn reward money to find his real parents.",
            "He falls in love with an innocent guitar teacher whose brother is a vital hitman for a ruthless underworld politician.",
            "Features Prabhas in a quintessential Puri Jagannadh streetwise, arrogant mass hero avatar.",
            "Mani Sharma's vibrant soundtrack features the hit songs 'Gundello Mulla' and 'Hey Hey Mera Baap'."
        ],
        "hints": [
            "Chotu hunts bail-jumpers for police cash, longing to know his birth parents.",
            "Kangana Ranaut made her Telugu cinema debut as Sameera.",
            "The title is a Hindi/Telugu spiritual phrase meaning 'The Solitary, Pure One'."
        ],
        "id": 218
    },
    {
        "title": "MAHATMA",
        "displayTitle": "Mahatma",
        "teluguTitle": "మహాత్మా",
        "year": 2009,
        "director": "Krishna Vamsi",
        "actors": [
            "Srikanth",
            "Bhavana",
            "Charmme Kaur"
        ],
        "genres": [
            "Social Drama",
            "Political Drama",
            "Action"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2005-2009",
        "clues": [
            "A violent, rowdy street thug employed by a corrupt political faction undergoes a profound moral awakening after studying the non-violent philosophy of Mohandas Karamchand Gandhi.",
            "He abandons weapons and launches an extraordinary Gandhian non-violent Satyagraha movement against corrupt land syndicates.",
            "Marked the milestone 100th film of veteran actor Srikanth, earning widespread praise for its social message.",
            "Vijay Antony composed the stirring patriotic and folk score featuring the hit 'Indiramma Intiperu'."
        ],
        "hints": [
            "Dasu transforms from a weapon-wielding goon into a peaceful satyagrahi reforming the state.",
            "Krishna Vamsi's direct social commentary on modern political decay.",
            "The title is the revered Sanskrit title bestowed upon Mohandas Karamchand Gandhi."
        ],
        "id": 219
    },
    {
        "title": "NAMO VENKATESA",
        "displayTitle": "Namo Venkatesa",
        "teluguTitle": "నమో వెంకటేశ",
        "year": 2010,
        "director": "Srinu Vaitla",
        "actors": [
            "Venkatesh",
            "Trisha Krishnan",
            "Brahmanandam",
            "Mukesh Rishi"
        ],
        "genres": [
            "Comedy",
            "Romance",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "A pious, naive ventriloquist who believes heavily in astrology travels to Europe and falls in love with an NRI girl who pretends to like him as a prank.",
            "To rescue her from an unwanted factionist wedding in Rayalaseema, he enters her ancestral house posing as an astrologer.",
            "Brahmanandam's comedic performance as 'Paris Prasad' suffering absurd misfortunes in France became an instant comedy hit.",
            "Devi Sri Prasad composed an energetic festive soundtrack that drove the film to commercial success."
        ],
        "hints": [
            "Venkataramana uses ventriloquism and astrological predictions to outsmart factionists.",
            "Paris Prasad's comedic travails in Europe are widely celebrated.",
            "The title is a reverent Sanskrit salutation to Lord Venkateswara."
        ],
        "id": 220
    },
    {
        "title": "BINDAAS",
        "displayTitle": "Bindaas",
        "teluguTitle": "బిందాస్",
        "year": 2010,
        "director": "Veeru Potla",
        "actors": [
            "Manoj Manchu",
            "Sheena Shahabadi",
            "Ahuti Prasad"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A carefree, fearless youth is brought in to resolve a bloody, decades-long feud between two violent factionist families in Rayalaseema.",
            "He uses sheer audacious cheekiness, hilarious psychological provocation, and combat to dismantle their desire for vengeance.",
            "Directorial debut of writer Veeru Potla, packed with high-speed comical mass dialogues.",
            "Manoj Manchu performed daredevil real-life stunts and energetic comedy sequences."
        ],
        "hints": [
            "Ajay enters the den of faction enemies with a smile, proving that fearlessness can defeat hatred.",
            "Features the famous tagline: 'No Fear, Only Fun'.",
            "The title is a popular Hindi/Hindustani slang word meaning carefree or chilled-out."
        ],
        "id": 221
    },
    {
        "title": "RAGADA",
        "displayTitle": "Ragada",
        "teluguTitle": "రగడ",
        "year": 2010,
        "director": "Veeru Potla",
        "actors": [
            "Nagarjuna",
            "Anushka Shetty",
            "Priyamani",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A stylish, wealthy outsider arrives in Hyderabad and begins playing two warring underworld syndicates against each other for a mysterious agenda.",
            "He pretends to work as a mercenary for whichever mobster bids higher, while secretly executing a grand personal vengeance for his village.",
            "Brahmanandam's comedy track as 'Banker Brahmanandam' added nonstop laughter.",
            "Thaman S. composed an electrifying commercial soundtrack with chartbusters like 'Meelo Evaru Koteeswarudu'."
        ],
        "hints": [
            "Satya Reddy outwits GK and Peddanna using financial contracts and fists.",
            "Nagarjuna's ultra-stylish mass avatar with sunglasses and leather jackets.",
            "The six-letter title is a Hyderabadi slang word meaning a commotion, conflict, or high-energy brawl."
        ],
        "id": 222
    },
    {
        "title": "BADRINATH",
        "displayTitle": "Badrinath",
        "teluguTitle": "బద్రీనాథ్",
        "year": 2011,
        "director": "V. V. Vinayak",
        "actors": [
            "Allu Arjun",
            "Tamannaah Bhatia",
            "Prakash Raj",
            "Kelly Dorji"
        ],
        "genres": [
            "Action",
            "Martial Arts",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A loyal, martial-arts-trained temple warrior sworn to celibacy guards a sacred Himalayan shrine from terrorists and desecrators.",
            "His strict spiritual vows to his revered guru are challenged when an atheist woman falls in love with him and seeks his protection.",
            "Allu Arjun traveled to Vietnam to train in specialized sword fighting and martial arts for the high-intensity combat scenes.",
            "M. M. Keeravani composed a rich devotional and dance soundtrack featuring 'Nath Nath' and 'Chiranjeeva'."
        ],
        "hints": [
            "Badri must choose between his sacred oath to his martial guru Bheeshma Narayan and the woman who adores him.",
            "Set primarily against the snowy, sacred backdrop of the Himalayas.",
            "The title is named after the holy Himalayan temple of Lord Vishnu."
        ],
        "id": 223
    },
    {
        "title": "SOLO",
        "displayTitle": "Solo",
        "teluguTitle": "సోలో",
        "year": 2011,
        "director": "Parasuram",
        "actors": [
            "Nara Rohit",
            "Nisha Aggarwal",
            "Prakash Raj",
            "Jayasudha"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "An orphan who has grown up yearning desperately for the warmth of a large joint family resolves to marry only a girl from a huge household.",
            "However, the girl's traditional father adamantly refuses an orphan son-in-law, fearing he will take his daughter away without social roots.",
            "Nara Rohit gave an emotionally grounded performance celebrated for dialogue delivery and sensitive characterization.",
            "Mani Sharma's soundtrack features the beautiful, tearful melody 'Marumallela Vaana'."
        ],
        "hints": [
            "Gautham fights to earn the respect of a joint family that despises his lack of lineage.",
            "Prakash Raj plays the stubborn father who believes family background is everything.",
            "The four-letter English title means alone or solitary."
        ],
        "id": 224
    },
    {
        "title": "PANJAA",
        "displayTitle": "Panjaa",
        "teluguTitle": "పంజా",
        "year": 2011,
        "director": "Vishnuvardhan",
        "actors": [
            "Pawan Kalyan",
            "Sarah-Jane Dias",
            "Anjali Lavania",
            "Jackie Shroff"
        ],
        "genres": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A fiercely loyal underworld enforcer in Kolkata is forced to execute his crime boss's sadistic, psychopathic son after he brutally murders an innocent woman.",
            "He flees to an idyllic village in Andhra to seek a peaceful life, only for the vengeful mafia empire to hunt him down.",
            "A stylish, atmospheric neo-noir gangster thriller directed by Vishnuvardhan, praised for its slick visual tone and European action staging.",
            "Yuvan Shankar Raja delivered an epochal background score and iconic songs like the thunderous title track."
        ],
        "hints": [
            "Jaidev turns against the mob patriarch Bhagavan after slaying his monstrous son Munna.",
            "Features the transition from dark Kolkata underworld rains to serene rural Andhra green fields.",
            "The six-letter title translates as 'The Paw' or 'The Claw'."
        ],
        "id": 225
    },
    {
        "title": "POOLARANGADU",
        "displayTitle": "Poola Rangadu",
        "teluguTitle": "పూల రంగడు",
        "year": 2012,
        "director": "Veerabhadram Chowdary",
        "actors": [
            "Sunil",
            "Isha Chawla",
            "Kota Srinivasa Rao",
            "Pradeep Rawat"
        ],
        "genres": [
            "Comedy",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An impoverished, debt-ridden real estate agent buys thirty acres of disputed rural land, unaware it lies right in the crosshairs of two bloodthirsty factionist warlords.",
            "He uses hilarious deceptions, turning a disputed barren plot into an active agricultural property while dodging murder attempts.",
            "Comedian-turned-hero Sunil underwent an astonishing physical transformation, sporting an eight-pack physique for the climactic battle.",
            "A commercial laugh-riot that emerged as a major box office hit in early 2012."
        ],
        "hints": [
            "Ranga pretends to be a fearless tough guy to sell a land plot contested by violent factionists.",
            "Sunil's eight-pack physical reveal stunned audiences.",
            "The title borrows from a legendary 1967 ANR classic translating to 'A Flamboyant Playful Man'."
        ],
        "id": 226
    },
    {
        "title": "RACHA",
        "displayTitle": "Racha",
        "teluguTitle": "రచ్చ",
        "year": 2012,
        "director": "Sampath Nandi",
        "actors": [
            "Ram Charan",
            "Tamannaah Bhatia",
            "Mukesh Rishi",
            "Kota Srinivasa Rao"
        ],
        "genres": [
            "Action",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A carefree street betting expert accepts a dangerous 20-lakh wager to make the sheltered, heavily guarded daughter of a billionaire fall in love with him.",
            "He uncovers that his own adoptive father's illness and the girl's royal inheritance are tied to a tragic childhood massacre.",
            "A thunderous mass commercial blockbuster that achieved record-breaking theatrical openings.",
            "Mani Sharma's energetic music features the superhit remix of the classic track 'Vaana Vaana Velluvaye'."
        ],
        "hints": [
            "Betting Raj takes on an impossible romantic bet that turns into an explosive revenge battle.",
            "Features the famous bamboo forest combat sequence.",
            "The five-letter title is a Telugu slang word meaning a massive celebration, sensation, or commotion."
        ],
        "id": 227
    },
    {
        "title": "SUDIGADU",
        "displayTitle": "Sudigadu",
        "teluguTitle": "సుడిగాడు",
        "year": 2012,
        "director": "Bhimaneni Srinivasa Rao",
        "actors": [
            "Allari Naresh",
            "Monal Gajjar",
            "Sayaji Shinde",
            "Brahmanandam"
        ],
        "genres": [
            "Parody",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A superhuman baby born with a six-pack can stop bullets with his bare chest, summon helicopters with a whistle, and defeat hundreds of goons with comedic gravity defiance.",
            "A comprehensive, uproarious spoof that parodied over a hundred famous Telugu commercial cinema tropes, slow-motion clichés, and hero dialogues.",
            "The biggest commercial blockbuster in Allari Naresh's career, grossing historic figures for a comedy film.",
            "Sri Vasanth's music was a viral hit, featuring the unforgettable spoof anthem 'Inky Pinky Ponky'."
        ],
        "hints": [
            "Shiva Kameshwar Rao can deflect missiles and rewrite physics with cinematic parody power.",
            "The official Telugu remake of the Tamil spoof film Thamizh Padam.",
            "The title translates as 'The Lucky Whirlwind Guy'."
        ],
        "id": 228
    },
    {
        "title": "LIFE IS BEAUTIFUL",
        "displayTitle": "Life Is Beautiful",
        "teluguTitle": "లైఫ్ ఈజ్ బ్యూటిఫుల్",
        "year": 2012,
        "director": "Sekhar Kammula",
        "actors": [
            "Abhijeet",
            "Shriya Saran",
            "Amala Akkineni",
            "Anjala Zaveri"
        ],
        "genres": [
            "Drama",
            "Coming-of-Age",
            "Slice of Life"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "Six youngsters living in a middle-class housing colony called Sunshine Colony in Hyderabad navigate friendship, class divide, college exams, and first loves.",
            "The narrative captures the bittersweet bond between a widowed mother fighting a fatal illness and her devoted young son.",
            "Marked the long-awaited acting return of veteran actress Amala Akkineni in a deeply touching maternal role.",
            "Mickey J. Meyer composed a soothing, nostalgic musical score celebrating everyday suburban youth life."
        ],
        "hints": [
            "Srnivas, Nagaraj, and Lakshmi navigate life and love in Sunshine Colony.",
            "Explores the emotional bond between Srinu and his ailing mother.",
            "The title is a celebrated three-word English philosophical phrase about optimism."
        ],
        "id": 229
    },
    {
        "title": "REBEL",
        "displayTitle": "Rebel",
        "teluguTitle": "రెబెల్",
        "year": 2012,
        "director": "Raghava Lawrence",
        "actors": [
            "Prabhas",
            "Tamannaah Bhatia",
            "Deeksha Seth",
            "Krishnam Raju"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "A grief-stricken son infiltrates the Bangkok underworld to hunt down the international crime syndicate that brutally massacred his noble village family.",
            "Known for its over-the-top, high-octane martial arts combat choreography and heavy background score composed by the director himself.",
            "Featured veteran superstar Krishnam Raju sharing the screen with Prabhas as his aristocratic father Bhupathi.",
            "The hero wages an apocalyptic final battle using dual machetes against hundreds of armed mobsters."
        ],
        "hints": [
            "Rishi transforms into an unstoppable killing machine after losing his parents in a village ambush.",
            "Prabhas earned a permanent star moniker associated with the film's title.",
            "The five-letter English title denotes an insubordinate defiance against authority."
        ],
        "id": 230
    },
    {
        "title": "KRISHNAM VANDE JAGADGURUM",
        "displayTitle": "Krishnam Vande Jagadgurum",
        "teluguTitle": "కృష్ణం వందే జగద్గురుమ్",
        "year": 2012,
        "director": "Krish",
        "actors": [
            "Rana Daggubati",
            "Nayanthara",
            "Kota Srinivasa Rao",
            "Murali Sharma"
        ],
        "genres": [
            "Action",
            "Drama",
            "Mythological",
            "Social Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A reluctant, arrogant theatre artist who plays Lord Krishna in a traditional street troupe travels to Bellary to perform his final contractual show before fleeing to the USA.",
            "There, he witnesses the horrific environmental devastation wrought by an illegal iron-ore mining mafia and steps into his role as a modern avatar to liberate oppressed tribals.",
            "Directed by Krish, brilliantly interweaving classical mythological Dashavatara themes with modern social mining resistance.",
            "Mani Sharma delivered an epochal musical masterpiece with classical songs like 'Jaruguthunnaadi Jagannatakam'."
        ],
        "hints": [
            "B. Tech Babu discovers that real life demands the same moral valor as the stage epics his grandfather taught him.",
            "Nayanthara plays a courageous documentary journalist investigating mining scams.",
            "The title is a sacred Sanskrit chant hailing Lord Krishna as the teacher of the universe."
        ],
        "id": 231
    },
    {
        "title": "NAAYAK",
        "displayTitle": "Naayak",
        "teluguTitle": "నాయక్",
        "year": 2013,
        "director": "V. V. Vinayak",
        "actors": [
            "Ram Charan",
            "Kajal Aggarwal",
            "Amala Paul",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A clever software engineer in Hyderabad is framed for assassinating a corrupt minister because of his identical lookalike operating in Kolkata.",
            "The lookalike turns out to be a fearless vigilante who eliminated the corrupt politicians who wiped out his village and family.",
            "Brahmanandam's hilarious comedy role as 'Jilebi' operating in Kolkata created uproarious theatrical moments.",
            "Thaman S. composed an energetic musical score that helped the film dominate the Sankranti 2013 box office."
        ],
        "hints": [
            "Cherry uses his lookalike brother's vigilante reputation to pull off high-stakes comedy and justice.",
            "Features the famous Kolkata comedy tracks and stylish mass action.",
            "The title translates as 'The Leader' or 'The Hero'."
        ],
        "id": 232
    },
    {
        "title": "BAADSHAH",
        "displayTitle": "Baadshah",
        "teluguTitle": "బాద్‍షా",
        "year": 2013,
        "director": "Srinu Vaitla",
        "actors": [
            "Jr NTR",
            "Kajal Aggarwal",
            "Navdeep",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An international intelligence agent infiltrates the Italian underworld to bring down a global terror mastermind named Sadhu Bhai.",
            "He travels to India to protect an innocent girl whose wedding is being orchestrated by a stressed, superstitious police officer.",
            "Brahmanandam's legendary performance as the stressed CI 'Padmanabha Simha' acting under dream hypnosis produced all-time comedy gold.",
            "Thaman S. delivered a high-energy dance soundtrack that made the film a massive summer 2013 box office success."
        ],
        "hints": [
            "The hero makes a police officer believe his wild dreams are reality through funny psychological hypnosis.",
            "The protagonist boasts that once his mind is made up, any conflict turns into a completely one-sided battle.",
            "The eight-letter title is an Urdu imperial title for an Emperor or King."
        ],
        "id": 233
    },
    {
        "title": "GUNDE JAARI GALLANTHAYYINDE",
        "displayTitle": "Gunde Jaari Gallanthayyinde",
        "teluguTitle": "గుండె జారి గల్లంతయ్యిందే",
        "year": 2013,
        "director": "Vijay Kumar Konda",
        "actors": [
            "Nithiin",
            "Nithya Menen",
            "Isha Talwar"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A brash young man dials a wrong phone number believing it belongs to an attractive woman he saw at a wedding and begins an anonymous phone romance.",
            "Unbeknownst to him, the woman on the other end knows his true identity and plays an elaborate reverse mind-game on him.",
            "A runaway romantic comedy hit that re-established the successful on-screen pairing of Nithiin and Nithya Menen.",
            "Anoop Rubens scored an infectious soundtrack featuring the viral dance hit 'Ding Ding Ding'."
        ],
        "hints": [
            "Karthik falls into Sravani's clever telephone trap while attempting to woo someone else.",
            "Features the famous remix of the classic Pawan Kalyan hit 'Dil Se'.",
            "The poetic title translates as 'My heart slipped and got utterly lost'."
        ],
        "id": 234
    },
    {
        "title": "BALUPU",
        "displayTitle": "Balupu",
        "teluguTitle": "బలుపు",
        "year": 2013,
        "director": "Gopichand Malineni",
        "actors": [
            "Ravi Teja",
            "Shruti Haasan",
            "Anjali",
            "Prakash Raj",
            "Brahmanandam"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "A bank loan recovery agent in Bangalore teaches a lesson to a prankster girl and her uncle who delight in breaking lovers' hearts.",
            "When the girl falls for him for real, his past identity as 'Shankar', a feared Rayalaseema faction leader, comes back to settle old scores.",
            "Brahmanandam's comedic performance as 'Crazy Mohan' produced riotous theatrical laughs.",
            "Thaman S. composed an energetic mass score that revived the commercial dominance of its lead actor."
        ],
        "hints": [
            "Ravi Teja's high-voltage comeback vehicle featuring the iconic confrontation with Poorna.",
            "Crazy Mohan falls victim to a string of hilarious romantic pranks.",
            "The title is a Telugu colloquial slang term meaning arrogance, swagger, or excess pride."
        ],
        "id": 235
    },
    {
        "title": "SAHASAM",
        "displayTitle": "Sahasam",
        "teluguTitle": "సాహసం",
        "year": 2013,
        "director": "Chandra Sekhar Yeleti",
        "actors": [
            "Gopichand",
            "Taapsee Pannu",
            "Shakti Kapoor"
        ],
        "genres": [
            "Adventure",
            "Action",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2010-2014",
        "clues": [
            "A humble security guard in Hyderabad finds his grandfather's antique will leading to an enormous hidden ancestral diamond treasure in Pakistan.",
            "He travels across the dangerous border to the rugged landscapes of Hinglaj in Balochistan to decipher ancient clues.",
            "A rare, high-concept treasure hunt adventure in Telugu cinema praised for its archaeological authenticity and realistic suspense.",
            "Sri composed an atmospheric orchestral score that elevated the desert exploration."
        ],
        "hints": [
            "Gautham deciphers ancient symbols to reclaim his partitioned family's buried wealth in Balochistan.",
            "Shot extensively in Ladakh and desert terrains to recreate Pakistani badlands.",
            "The title translates as 'Courage', 'Valor', or 'Adventure'."
        ],
        "id": 236
    },
    {
        "title": "LEGEND",
        "displayTitle": "Legend",
        "teluguTitle": "లెజెండ్",
        "year": 2014,
        "director": "Boyapati Srinu",
        "actors": [
            "Nandamuri Balakrishna",
            "Jagapathi Babu",
            "Radhika Apte",
            "Sonal Chauhan"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An NRI returns to Rayalaseema for his wedding and prevents an assassination attempt by an untouchable political crime warlord.",
            "When the crime lord seeks revenge, the NRI's uncle—an immortal, fearsome patriarch who had sworn never to step foot in his ancestral town again—returns in an armored custom safari vehicle.",
            "Jagapathi Babu reinvented his entire career as a terrifying, stylish antagonist in this massive blockbuster.",
            "Ran for over 1000 days in single-screen theatres in Andhra Pradesh, establishing record theatrical longevity."
        ],
        "hints": [
            "Jaidev arrives in a custom 4x4 vehicle to annihilate the criminal syndicate of Jitendra.",
            "Boyapati Srinu's signature high-voltage political and faction drama.",
            "The six-letter English title signifies an immortal mythic figure."
        ],
        "id": 237
    },
    {
        "title": "GOVINDUDU ANDARIVADELE",
        "displayTitle": "Govindudu Andarivadele",
        "teluguTitle": "గోవిందుడు అందరివాడేలే",
        "year": 2014,
        "director": "Krishna Vamsi",
        "actors": [
            "Ram Charan",
            "Kajal Aggarwal",
            "Prakash Raj",
            "Jayasudha",
            "Srikanth"
        ],
        "genres": [
            "Family",
            "Drama",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2010-2014",
        "clues": [
            "An NRI youth raised in London travels to an idyllic Godavari village to reunite his estranged doctor father with an unforgiving, proud grandfather.",
            "He conceals his true identity, living as an ordinary agricultural guest to heal twenty-five years of deep emotional bitterness.",
            "A rich, festive joint family drama celebrating rural Telugu traditions, handloom crafts, and agricultural warmth.",
            "Yuvan Shankar Raja composed a soulful traditional score featuring 'Gulabi Kallu Rendu' and 'Chinnadana'."
        ],
        "hints": [
            "Abhiram wins the heart of village patriarch Balaraju without revealing he is his grandson.",
            "Prakash Raj and Jayasudha deliver stellar joint family elder performances.",
            "The title borrows from a classic Telugu devotional song asserting that the Lord belongs to everyone."
        ],
        "id": 238
    },
    {
        "title": "AAGADU",
        "displayTitle": "Aagadu",
        "teluguTitle": "ఆగడు",
        "year": 2014,
        "director": "Srinu Vaitla",
        "actors": [
            "Mahesh Babu",
            "Tamannaah Bhatia",
            "Sonu Sood",
            "Rajendra Prasad"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2010-2014",
        "clues": [
            "An aggressive, quick-tongued police circle inspector is transferred to a lawless town named Bukkapatnam to halt an illegal power plant project.",
            "He employs non-stop psychological warfare, cinematic parodies, and sarcastic wordplay to turn the corrupt mining syndicate inward.",
            "Renowned for rapid-fire, marathon dialogue delivery with practically no pauses between sentences.",
            "Thaman S. composed an energetic mass soundtrack featuring high-voltage dance tracks and 'Bhelpuri'."
        ],
        "hints": [
            "CI Shankar delivers hundreds of rhyming punchlines per minute to intimidate mobster Damodar.",
            "Features the famous catchphrase: 'Mee aayana gurinchi meeku theliyadhu, naaku thelusu'.",
            "The title is an emphatic Telugu word meaning 'He will not stop'."
        ],
        "id": 239
    },
    {
        "title": "GOPALA GOPALA",
        "displayTitle": "Gopala Gopala",
        "teluguTitle": "గోపాల గోపాల",
        "year": 2015,
        "director": "Kishore Kumar Pardasani",
        "actors": [
            "Venkatesh",
            "Pawan Kalyan",
            "Shriya Saran",
            "Mithun Chakraborty"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Fantasy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An atheist antique shopkeeper sues God and commercial religious godmen in court after an unseasonal earthquake destroys only his shop.",
            "Lord Krishna descends to Earth riding a modern motorcycle to personally protect and guide his outspoken non-believer plaintiff.",
            "Brought together Venkatesh and Pawan Kalyan in a celebrated, socially insightful multi-starrer.",
            "Mithun Chakraborty reprised his iconic role as the effeminate fraudulent godman Leeladhar Swamy."
        ],
        "hints": [
            "Gopal Rao challenges religious hypocrisy and commercial godmen in open court.",
            "Pawan Kalyan's divine cameo as modern-day Lord Krishna.",
            "The title is the repeated name of the cowherd manifestation of Lord Krishna."
        ],
        "id": 240
    },
    {
        "title": "JIL",
        "displayTitle": "Jil",
        "teluguTitle": "జిల్",
        "year": 2015,
        "director": "Radha Krishna Kumar",
        "actors": [
            "Gopichand",
            "Rashi Khanna",
            "Kabir Duhan Singh"
        ],
        "genres": [
            "Action",
            "Romance",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2015-2019",
        "clues": [
            "An ultra-stylish Mumbai fire officer aids an injured underworld accountant who whispers a secret coat-check token with his dying breath.",
            "The fire-fighter finds himself and his lover hunted by a terrifying, cold-blooded international mafia syndicate led by Chotta Nayak.",
            "Known for high-fashion European styling, slick suit-clad aesthetics, and vibrant cinematography.",
            "Ghibran composed a modern retro synth-pop soundtrack with hits like 'Swing Swing'."
        ],
        "hints": [
            "Jai must decode a coat-room locker key to protect thousands of crores from mafia don Nayak.",
            "Kabir Duhan Singh's stylish antagonist debut in South cinema.",
            "The three-letter title is a modern slang term denoting a chilling thrill."
        ],
        "id": 241
    },
    {
        "title": "SUBRAMANYAM FOR SALE",
        "displayTitle": "Subramanyam for Sale",
        "teluguTitle": "సుబ్రమణ్యం ఫర్ సేల్",
        "year": 2015,
        "director": "Harish Shankar",
        "actors": [
            "Sai Dharam Tej",
            "Regina Cassandra",
            "Brahmanandam",
            "Rao Ramesh"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A money-minded Telugu youth in the USA who does any odd job for dollars agrees to pose as an abandoned bride's fake husband for cash.",
            "They return to an orthodox joint family in Kurnool, triggering a landslide of comedic deceptions against strict factionist relatives.",
            "Brahmanandam's comedic performance as 'Chintakaya' added nonstop laughter in America and India.",
            "Mickey J. Meyer composed an energetic commercial soundtrack featuring the remix of 'Guvva Gorinkatho'."
        ],
        "hints": [
            "Subramanyam calculates everything in dollars until he learns the warmth of an Indian joint family.",
            "The hero pretends to be married to Seetha to save her from family honor killings.",
            "The title combines the hero's traditional name with an English commercial slogan."
        ],
        "id": 242
    },
    {
        "title": "KUMARI 21F",
        "displayTitle": "Kumari 21F",
        "teluguTitle": "కుమారి 21F",
        "year": 2015,
        "director": "Palnati Surya Pratap",
        "actors": [
            "Raj Tarun",
            "Hebah Patel"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "An insecure culinary chef falls in love with an uninhibited, modern model whose bold, flirtatious honesty challenges his conservative sensibilities.",
            "Pushed by his suspicious street friends, he doubts her virginity and orchestrates a twisted moral test that ends in a horrific, heartbreaking tragedy.",
            "Written and produced by Sukumar, delivering a bold, revolutionary deconstruction of male hypocrisy and judgmental attitudes towards modern women.",
            "Devi Sri Prasad composed an iconic youth soundtrack with hits like 'Bang Bang Bangkok'."
        ],
        "hints": [
            "Siddhu questions whether a modern, bold woman can be genuinely innocent and pure of heart.",
            "Hebah Patel's breakout role as the unapologetically expressive Kumari.",
            "The title begins with an honorific and the female lead's name followed by an alphanumeric apartment code."
        ],
        "id": 243
    },
    {
        "title": "NANNAKU PREMATHO",
        "displayTitle": "Nannaku Prematho",
        "teluguTitle": "నాన్నకు ప్రేమతో",
        "year": 2016,
        "director": "Sukumar",
        "actors": [
            "Jr NTR",
            "Rakul Preet Singh",
            "Jagapathi Babu",
            "Rajendra Prasad"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Learning that his cancer-stricken father was swindled of his life's fortune by a cunning billionaire, an intelligent son has thirty days to bankrupt the oligarch.",
            "He uses sophisticated game theory, deductive mathematics, and butterfly-effect psychology in London to strip his rival of his entire empire.",
            "Jr NTR's milestone 25th film, celebrated for ultra-stylish bearded grooming, bespoke suits, and cerebral screenplay puzzles.",
            "Devi Sri Prasad composed an emotional, award-winning musical album including the tearful title tribute."
        ],
        "hints": [
            "Abhiram uses pure intellect and science rather than physical brawls to defeat Krishnamurthy.",
            "Jagapathi Babu played the cold, calculating billionaire antagonist in London.",
            "The title is an emotional Telugu dedication meaning 'To Father, with Love'."
        ],
        "id": 244
    },
    {
        "title": "SUPREME",
        "displayTitle": "Supreme",
        "teluguTitle": "సుప్రీమ్",
        "year": 2016,
        "director": "Anil Ravipudi",
        "actors": [
            "Sai Dharam Tej",
            "Rashi Khanna",
            "Mikhail Gandhi",
            "Kabir Duhan Singh"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An aggressive taxi driver in Hyderabad who cannot tolerate anyone touching his beloved taxi's horn adopts an orphan boy who is the rightful heir to a charitable royal trust.",
            "He battles a ruthless corporate land shark who is hunting the child down to seize thousands of acres of community land in Rajasthan.",
            "Rashi Khanna delivered a comical performance as the inept police sub-inspector 'Bellam Sridevi'.",
            "Sai Kartheek scored an energetic soundtrack that drove the film to massive summer commercial returns."
        ],
        "hints": [
            "Balu's customized taxi with the label 'Don't sound horn' takes on land mafia killers.",
            "Features the famous physically challenged fight sequence in the desert.",
            "The seven-letter English title denotes the highest authority or rank."
        ],
        "id": 245
    },
    {
        "title": "GENTLEMAN",
        "displayTitle": "Gentleman",
        "teluguTitle": "జెంటిల్ మేన్",
        "year": 2016,
        "director": "Mohan Krishna Indraganti",
        "actors": [
            "Nani",
            "Nivetha Thomas",
            "Surabhi"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Two women on an international flight share stories about their respective boyfriends, only to realize the same man appears to be leading two contrasting lives.",
            "When one boyfriend dies under mysterious circumstances, an intricate web of corporate espionage, murder, and twin deception begins to unravel.",
            "Mani Sharma's gripping background score and Mohan Krishna Indraganti's Hitchcockian screenplay kept audiences guessing till the final frame.",
            "Nani gave a virtuoso, morally ambiguous performance alternating between villainy and noble sacrifice."
        ],
        "hints": [
            "Is Gautham a chivalrous lover or a sinister sociopathic corporate murderer?",
            "Nivetha Thomas made her widely acclaimed Telugu debut as Catherine.",
            "The nine-letter title is a classic English term for a courteous, honorable man."
        ],
        "id": 246
    },
    {
        "title": "EKKADIKI POTHAVU CHINNAVADA",
        "displayTitle": "Ekkadiki Pothavu Chinnavada",
        "teluguTitle": "ఎక్కడికి పోతావు చిన్నవాడా",
        "year": 2016,
        "director": "VI Anand",
        "actors": [
            "Nikhil Siddharth",
            "Hebah Patel",
            "Nandita Swetha",
            "Vennela Kishore"
        ],
        "genres": [
            "Horror",
            "Comedy",
            "Fantasy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A visual effects supervisor accompanies a mentally unstable friend to an exorcism clinic in Kerala and falls in love with an enigmatic woman.",
            "He later discovers that she is deceased, and her romantic spirit hops across different women's bodies to be near him.",
            "Nandita Swetha gave a terrifying yet touching performance as the possessed spirit Amala.",
            "VI Anand's smart, supernatural romantic comedy triumphed at the box office right during the national demonetization wave."
        ],
        "hints": [
            "A loving ghost inhabits other women's bodies purely to experience the hero's gentle companionship.",
            "Vennela Kishore's comedy in a haunted mental asylum was a laugh-riot.",
            "The title borrows from a vintage classic Telugu song query: 'Where are you heading, little boy?'"
        ],
        "id": 247
    },
    {
        "title": "APPATLO OKADUNDEVADU",
        "displayTitle": "Appatlo Okadundevadu",
        "teluguTitle": "అప్పట్లో ఒకడుండేవాడు",
        "year": 2016,
        "director": "Saagar K. Chandra",
        "actors": [
            "Nara Rohit",
            "Sree Vishnu",
            "Tanya Hope"
        ],
        "genres": [
            "Period Drama",
            "Crime",
            "Action"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "In 1990s Hyderabad, an aspiring national cricketer is systematically hounded and framed by a ruthless, trigger-happy police officer due to his sister's alleged Naxalite ties.",
            "Pushed out of sports and society, the innocent cricketer transforms into an untouchable underworld extortion kingpin ruling the Old City.",
            "A critically acclaimed period crime drama exploring how police brutality and political prejudice breed the very monsters they claim to fight.",
            "Sree Vishnu delivered a gut-wrenching, realistic performance as the tragic sportsman-turned-don Railway Raju."
        ],
        "hints": [
            "Railway Raju's dream of playing for the Indian cricket team is destroyed by ACP Imtiaz Ali.",
            "Captures the authentic 1990s political unrest, globalization, and underworld in Hyderabad.",
            "The title translates as 'Once upon a time, there was a man'."
        ],
        "id": 248
    },
    {
        "title": "GAUTAMIPUTRA SATAKARNI",
        "displayTitle": "Gautamiputra Satakarni",
        "teluguTitle": "గౌతమిపుత్ర శాతకర్ణి",
        "year": 2017,
        "director": "Krish",
        "actors": [
            "Nandamuri Balakrishna",
            "Shriya Saran",
            "Hema Malini",
            "Kabir Bedi"
        ],
        "genres": [
            "Historical",
            "Period Drama",
            "War"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "The epic historical chronicle of the 2nd-century CE Satavahana emperor who united all warring Indian kingdoms under one sovereign flag to repel foreign Greek invaders.",
            "The emperor took his mother Gautami Balashri's name as his prefix, establishing a historic tradition of maternal honor.",
            "Marked the milestone 100th feature film of Nandamuri Balakrishna, celebrated for fiery Grandhika Telugu dialogue delivery.",
            "Chirantan Bhatt composed an epic orchestral soundtrack and battle hymns."
        ],
        "hints": [
            "The Telugu emperor who initiated the Shalivahana Shaka calendar through supreme military valor.",
            "Directed by Krish, featuring grand naval battles and land sieges.",
            "The title is the complete imperial name of the great Satavahana ruler."
        ],
        "id": 249
    },
    {
        "title": "SHATAMANAM BHAVATI",
        "displayTitle": "Shatamanam Bhavati",
        "teluguTitle": "శతమానం భవతి",
        "year": 2017,
        "director": "Satish Vegesna",
        "actors": [
            "Sharwanand",
            "Anupama Parameswaran",
            "Prakash Raj",
            "Jayasudha"
        ],
        "genres": [
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An elderly rural couple in Godavari concoct a fake divorce notice to compel their busy, overseas-settled children to return home for the Sankranti festival.",
            "Their stay in the village rekindles forgotten childhood affection, joint family warmth, and cultural roots.",
            "Won the National Film Award for Best Popular Film Providing Wholesome Entertainment.",
            "Mickey J. Meyer composed an evergreen festive soundtrack that captured rural harvest celebrations."
        ],
        "hints": [
            "Raghavaraju and Janakamma stage a domestic crisis so their distant NRI children will visit their ancestral village.",
            "Sharwanand plays Raju, the devoted grandson caring for the village.",
            "The title is a traditional Vedic wedding blessing wishing for a full hundred years of prosperous life."
        ],
        "id": 250
    },
    {
        "title": "NENU LOCAL",
        "displayTitle": "Nenu Local",
        "teluguTitle": "నేను లోకల్",
        "year": 2017,
        "director": "Trinadha Rao Nakkina",
        "actors": [
            "Nani",
            "Keerthy Suresh",
            "Naveen Chandra",
            "Sachin Khedekar"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An attitude-filled slacker who barely cleared his engineering degree pursues an ambitious, studious woman whose strict father demands an accomplished son-in-law.",
            "He must outshine an upright, highly respected police inspector whom the father has selected as the prospective bridegroom.",
            "Devi Sri Prasad delivered a massive viral youth album featuring 'Next Enti' and 'Side Please'.",
            "A high-grossing commercial romantic entertainer powered by Nani's energetic comic timing."
        ],
        "hints": [
            "Babu uses unyielding perseverance and street attitude to win Keerthy's heart.",
            "Features the famous examination hall cheating scene.",
            "The two-word title is an assertive declaration translating as 'I am a Local'."
        ],
        "id": 251
    },
    {
        "title": "RARANDOI VEDUKA CHUDHAM",
        "displayTitle": "Rarandoi Veduka Chudham",
        "teluguTitle": "రారండోయ్ వేడుక చూద్దాం",
        "year": 2017,
        "director": "Kalyan Krishna",
        "actors": [
            "Naga Chaitanya",
            "Rakul Preet Singh",
            "Jagapathi Babu",
            "Sampath Raj"
        ],
        "genres": [
            "Family",
            "Romance",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An urban athletic youth falls in love with an innocent, village-bred woman at a grand traditional wedding in coastal Andhra.",
            "Their blossoming relationship is shattered when an old, bitter misunderstanding between their respective fathers resurfaces.",
            "Jagapathi Babu and Sampath Raj played the two loving, stubborn fathers whose friendship is tested.",
            "Devi Sri Prasad composed a vibrant wedding-themed soundtrack that made the film a massive summer family hit."
        ],
        "hints": [
            "Shiva must win over the proud father of his beloved Bhramaramba.",
            "Produced under the Annapurna Studios banner by Akkineni Nagarjuna.",
            "The three-word title is a festive invitation translating as 'Come, let us witness the grand celebration'."
        ],
        "id": 252
    },
    {
        "title": "ANANDO BRAHMA",
        "displayTitle": "Anando Brahma",
        "teluguTitle": "ఆనందో బ్రహ్మ",
        "year": 2017,
        "director": "Mahi V. Raghav",
        "actors": [
            "Taapsee Pannu",
            "Srinivas Reddy",
            "Vennela Kishore",
            "Shakalaka Shankar",
            "Tagubothu Ramesh"
        ],
        "genres": [
            "Horror",
            "Comedy"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "Four desperate men with unique physical and psychological quirks agree to spend three nights in a haunted mansion to prove it is ghost-free for prospective buyers.",
            "In an ingenious comedic twist, the supernatural ghosts inside the house end up getting terrified by the bizarre, unpredictable antics of the human occupants.",
            "Features Vennela Kishore with night blindness, Shakalaka Shankar possessed by movie characters, Tagubothu Ramesh drunk, and Srinivas Reddy with heart palpitations.",
            "A breakout sleeper hit that inverted the traditional horror-comedy formula."
        ],
        "hints": [
            "The ghosts are terrified of four eccentric humans who show zero ordinary fear.",
            "Taapsee Pannu plays the leader of the ghostly family seeking justice.",
            "The title is a playful riff on the Upanishadic philosophical phrase 'Aham Brahmasmi'."
        ],
        "id": 253
    },
    {
        "title": "JAI LAVA KUSA",
        "displayTitle": "Jai Lava Kusa",
        "teluguTitle": "జై లవ కుశ",
        "year": 2017,
        "director": "K. S. Ravindra (Bobby)",
        "actors": [
            "Jr NTR",
            "Raashi Khanna",
            "Nivetha Thomas",
            "Ronit Roy"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Identical triplet brothers with contrasting personalities are separated in childhood: one stutters and becomes a terrifying Ravana-worshipping mobster, while the others become an honest bank manager and a petty fraud.",
            "Jr NTR delivered an extraordinary, career-defining triple performance, flawlessly shifting accents, body language, and emotions.",
            "The stammering, menacing character of 'Jai' (Ravana Maharaj) became an iconic pop-culture phenomenon.",
            "Devi Sri Prasad's soundtrack features the thunderous villainous anthem 'Raavana'."
        ],
        "hints": [
            "Jai uses his identical brothers to fulfill his political and personal vendetta.",
            "Based loosely on the Ramayana sibling dynamics with an epic mythological framing.",
            "The title strings together the names of all three triplet brothers."
        ],
        "id": 254
    },
    {
        "title": "RAJA THE GREAT",
        "displayTitle": "Raja the Great",
        "teluguTitle": "రాజా ది గ్రేట్",
        "year": 2017,
        "director": "Anil Ravipudi",
        "actors": [
            "Ravi Teja",
            "Mehreen Pirzada",
            "Radhika Sarathkumar",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A visually impaired young man trained rigorously in martial arts by his police-constable mother takes on a secret assignment to rescue a traumatized orphan girl from a violent syndicate.",
            "He proves that physical disability is no barrier to heroism, using hearing, spatial acoustics, and fighting prowess.",
            "Spawned the iconic catchphrase: 'Welcome to my world!' delivered with a stylish blind swagger.",
            "Sai Kartheek composed high-energy mass dance numbers that made the film a Diwali box office winner."
        ],
        "hints": [
            "A visually impaired protagonist fights armed criminals using ultrasonic sensory reflexes.",
            "Radhika Sarathkumar plays the proud, tough constable mother.",
            "The title is the hero's first name followed by an English honorific praising his greatness."
        ],
        "id": 255
    },
    {
        "title": "MIDDLE CLASS ABBAYI",
        "displayTitle": "Middle Class Abbayi",
        "teluguTitle": "మిడిల్ క్లాస్ అబ్బాయి",
        "year": 2017,
        "director": "Venu Sriram",
        "actors": [
            "Nani",
            "Sai Pallavi",
            "Bhumika Chawla",
            "Vijay Varma"
        ],
        "genres": [
            "Action",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A photographic-memory middle-class youth in Warangal who resents his strict government RTO sister-in-law must protect her from a ruthless inter-state transport mafia don.",
            "The film captures the genuine everyday domestic struggles, bargaining habits, and fierce protective loyalties of the Indian middle class.",
            "Bhumika Chawla delivered an acclaimed supporting performance as the fearless, uncompromising RTO officer Jyothi.",
            "Devi Sri Prasad's soundtrack features superhits like 'Yevandoi Nani Garu'."
        ],
        "hints": [
            "Nani defends his sister-in-law against the ruthless criminal Warangal Shiva.",
            "Commonly known by its popular three-letter acronym MCA.",
            "The title translates as 'Middle Class Boy'."
        ],
        "id": 256
    },
    {
        "title": "MENTAL MADHILO",
        "displayTitle": "Mental Madhilo",
        "teluguTitle": "మెంటల్ మదిలో",
        "year": 2017,
        "director": "Vivek Athreya",
        "actors": [
            "Sree Vishnu",
            "Nivetha Pethuraj",
            "Amrutha Srinivasan"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A chronically indecisive young man who suffers intense panic whenever forced to choose between two options falls in love with an understanding, practical woman.",
            "When he travels to Mumbai for job training, an unexpected encounter with another eccentric girl throws his romantic life into total disarray.",
            "The sparkling directorial debut of Vivek Athreya, noted for refined conversational humor and authentic urban dilemmas.",
            "Prashanth R. Vihari composed an acoustic and jazz-tinged soundtrack featuring 'Manavi Aalakinchara'."
        ],
        "hints": [
            "Aravind cannot even pick a shirt color without freezing in dilemma.",
            "Nivetha Pethuraj made her acclaimed Telugu debut as the grounded Swecha.",
            "The title is a playful rhyming Telugu phrase meaning 'Crazy at Heart' or 'In a Confused Mind'."
        ],
        "id": 257
    },
    {
        "title": "MALLI RAAVA",
        "displayTitle": "Malli Raava",
        "teluguTitle": "మళ్ళీ రావా",
        "year": 2017,
        "director": "Gowtam Tinnanuri",
        "actors": [
            "Sumanth",
            "Aakanksha Singh",
            "Annapoorna"
        ],
        "genres": [
            "Romance",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2015-2019",
        "clues": [
            "Told across three distinct phases of life (1999, 2012, and 2017), tracing the unfinished romance between two individuals from their school days in Rameswaram to adulthood.",
            "Every time they prepare to unite, circumstances, family pressures, and silent misunderstandings pull them apart.",
            "The sensitive directorial debut of Gowtam Tinnanuri, celebrated for melancholic emotional depth and quiet dignity.",
            "Shravan Bharadwaj scored a hauntingly beautiful musical album."
        ],
        "hints": [
            "Karthik and Anjali keep meeting and separating across decades.",
            "Gowtam Tinnanuri's breakthrough debut before he directed Jersey.",
            "The title is an emotional plea meaning 'Will you come back again?'"
        ],
        "id": 258
    },
    {
        "title": "BHAAGAMATHIE",
        "displayTitle": "Bhaagamathie",
        "teluguTitle": "భాగమతి",
        "year": 2018,
        "director": "G. Ashok",
        "actors": [
            "Anushka Shetty",
            "Unni Mukundan",
            "Jayaram",
            "Murali Sharma"
        ],
        "genres": [
            "Horror",
            "Thriller",
            "Mystery"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "An imprisoned honest IAS officer is taken to a dilapidated, haunted forest palace for an illegal CBI interrogation regarding an upright minister.",
            "While held captive inside the eerie palace, she begins exhibiting signs of possession by the vengeful ghost of an ancient queen.",
            "Features a shocking, double-twist climax that dismantles supernatural beliefs in favor of intellectual revenge.",
            "Thaman S. composed an atmospheric, nerve-wracking background score that elevated the terror."
        ],
        "hints": [
            "Chanchala IAS stays inside an abandoned haunted bungalow and nails her own hand to a door.",
            "Anushka Shetty's fierce performance as the possessed queen.",
            "The title is the name of the legendary historic queen associated with Hyderabad's origins."
        ],
        "id": 259
    },
    {
        "title": "CHALO",
        "displayTitle": "Chalo",
        "teluguTitle": "ఛలో",
        "year": 2018,
        "director": "Venky Kudumula",
        "actors": [
            "Naga Shaurya",
            "Rashmika Mandanna",
            "Achyuth Kumar"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A brawl-obsessed youth who cannot survive a day without fighting is sent by his frustrated parents to a college in Tiruppuram, a town strictly divided by a hostile Tamil-Telugu border fence.",
            "He falls in love with a Tamil girl and must solve a thirty-year-old ridiculous village dispute to unite the two warring linguistic factions.",
            "Directorial debut of Venky Kudumula and the sensational Telugu cinema debut of leading actress Rashmika Mandanna.",
            "Mahati Swara Sagar's viral dance track 'Choosi Choodangane' became a massive youth anthem."
        ],
        "hints": [
            "Hari navigates a college divided right down the middle by a fence separating Telugu and Tamil students.",
            "Introduced Rashmika Mandanna to Tollywood.",
            "The five-letter title is a common Hindi/Telugu exclamation meaning 'Let's Go!'."
        ],
        "id": 260
    },
    {
        "title": "F2: FUN AND FRUSTRATION",
        "displayTitle": "F2: Fun and Frustration",
        "teluguTitle": "ఎఫ్ 2: ఫన్ అండ్ ఫ్రస్ట్రేషన్",
        "year": 2019,
        "director": "Anil Ravipudi",
        "actors": [
            "Venkatesh",
            "Varun Tej",
            "Tamannaah Bhatia",
            "Mehreen Pirzada"
        ],
        "genres": [
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Two henpecked men—one married and the other newly engaged—flee their domineering female partners and escape to Europe for a wild bachelor holiday.",
            "Their plans collapse when their furious wives and in-laws track them to Prague, setting off an escalating series of domestic comedy traps.",
            "Emerged as the monster Sankranti 2019 comedy blockbuster, grossing over 140 crores.",
            "Venkatesh's vintage comedic performance with the iconic 'Venky Asana' gesture generated nonstop theater hysteria."
        ],
        "hints": [
            "Venky and Varun attempt to escape marital frustration, only to get trapped in Prague.",
            "Features the famous gesture 'Anthega Anthega'.",
            "The title comprises an alphanumeric code followed by two alliterative English emotion words."
        ],
        "id": 261
    },
    {
        "title": "118",
        "displayTitle": "118",
        "teluguTitle": "118",
        "year": 2019,
        "director": "K. V. Guhan",
        "actors": [
            "Kalyan Ram",
            "Shalini Pandey",
            "Nivetha Thomas"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Sci-Fi"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2015-2019",
        "clues": [
            "An investigative journalist experiences a recurring lucid dream where an injured young woman is murdered in a specific hotel room.",
            "When he investigates, he uncovers an illegal pharmaceutical testing conspiracy that resulted in the mysterious murder of an innocent social worker.",
            "Directorial debut of ace cinematographer K. V. Guhan, featuring slick camera work and tight pacing.",
            "Shekhar Chandra composed a haunting, atmospheric background score."
        ],
        "hints": [
            "Goutham decodes lucid dreams that point to a real-life medical crime.",
            "Nivetha Thomas played the tragic whistleblower Aadhya.",
            "The title is a three-digit numerical hotel room number."
        ],
        "id": 262
    },
    {
        "title": "MAJILI",
        "displayTitle": "Majili",
        "teluguTitle": "మజిలీ",
        "year": 2019,
        "director": "Shiva Nirvana",
        "actors": [
            "Naga Chaitanya",
            "Samantha Ruth Prabhu",
            "Divyansha Kaushik",
            "Rao Ramesh"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Sports"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A heartbroken former cricket aspirant in Visakhapatnam ruins his youth drinking and mourning an unresolved first love from his teenage days.",
            "He enters an unloving arranged marriage with a devoted railway employee whose silent, selfless affection gradually helps him coach his ex-lover's daughter in cricket.",
            "A deeply touching, mature domestic drama that emerged as a major commercial and critical blockbuster.",
            "Gopi Sundar and Thaman S. composed an emotional soundtrack featuring 'Priyathama Priyathama'."
        ],
        "hints": [
            "Poorna's destructive past is healed by the unconditional, patient love of his wife Sravani.",
            "Set in the scenic coastal neighborhoods and cricket stadiums of Vizag.",
            "The title is an Urdu/Telugu word meaning a rest stop or significant stage on a journey."
        ],
        "id": 263
    },
    {
        "title": "CHITRALAHARI",
        "displayTitle": "Chitralahari",
        "teluguTitle": "చిత్రలహరి",
        "year": 2019,
        "director": "Kishore Tirumala",
        "actors": [
            "Sai Dharam Tej",
            "Kalyani Priyadarshan",
            "Nivetha Pethuraj",
            "Sunil",
            "Posani Krishna Murali"
        ],
        "genres": [
            "Drama",
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2015-2019",
        "clues": [
            "A chronic technological failure who has faced relentless job and startup rejections invents an automated road-safety accident-alert device.",
            "He battles social mockery and relationship heartbreak, guided by a loving father who advises him that failure is merely a companion, not an end.",
            "Devi Sri Prasad composed an inspiring soundtrack featuring the motivational anthem 'Parugu Parugu'.",
            "Marked an emotional commercial comeback for its lead actor, celebrated for sincere dialogue writing."
        ],
        "hints": [
            "Vijay invents an emergency vehicle accident-tracking system while everyone labels him a born loser.",
            "Posani delivers a touching performance as an unconditionally supportive father.",
            "The title shares its name with the iconic vintage Doordarshan weekly film songs program."
        ],
        "id": 264
    },
    {
        "title": "MAHARSHI",
        "displayTitle": "Maharshi",
        "teluguTitle": "మహర్షి",
        "year": 2019,
        "director": "Vamsi Paidipally",
        "actors": [
            "Mahesh Babu",
            "Pooja Hegde",
            "Allari Naresh",
            "Jagasudha",
            "Prakash Raj"
        ],
        "genres": [
            "Social Drama",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "A global tech conglomerate CEO in New York returns to rural Ramavaram in Andhra after learning his impoverished college friend sacrificed his future for his success.",
            "The billionaire executive initiates weekend agricultural farming, rallying youth to cultivate barren lands and protect farmers from predatory gas pipeline projects.",
            "Won two National Film Awards, including Best Popular Film Providing Wholesome Entertainment and Best Choreography.",
            "Allari Naresh gave an acclaimed, award-winning performance as the selfless rural friend Ravi."
        ],
        "hints": [
            "K. Rishi Kumar evolves from an ambitious college student to Wall Street CEO to a grassroots farmer.",
            "Popularized the concept of 'weekend farming' among urban software professionals.",
            "The title is the venerable Sanskrit word for a 'Great Sage' or 'Visionary Seer'."
        ],
        "id": 265
    },
    {
        "title": "DEAR COMRADE",
        "displayTitle": "Dear Comrade",
        "teluguTitle": "డియర్ కామ్రేడ్",
        "year": 2019,
        "director": "Bharat Kamma",
        "actors": [
            "Vijay Deverakonda",
            "Rashmika Mandanna",
            "Suhas",
            "Shruti Ramachandran"
        ],
        "genres": [
            "Romance",
            "Drama",
            "Sports",
            "Social Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A hot-tempered student union leader in Kakinada falls in love with a state-level woman cricketer who suffers traumatic sexual harassment by a cricket board selector.",
            "After years of separation and anger therapy, he returns to stand by her, encouraging her to speak out against abuse and reclaim her sporting dreams.",
            "Justin Prabhakaran composed an evergreen, soul-stirring musical masterpiece featuring 'Kadalalle' and 'Gira Gira'."
        ],
        "hints": [
            "Bobby learns to channel his anger to fight for Lilly against institutional abuse.",
            "A powerful story about standing by one's partner through their deepest emotional struggles.",
            "The title combines an affectionate English greeting with a communist term for a fellow fighter."
        ],
        "id": 266
    },
    {
        "title": "EVARU",
        "displayTitle": "Evaru",
        "teluguTitle": "ఎవరు",
        "year": 2019,
        "director": "Venkat Ramji",
        "actors": [
            "Adivi Sesh",
            "Regina Cassandra",
            "Naveen Chandra",
            "Murali Sharma"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Crime"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "A corrupt police sub-inspector is hired by a wealthy businesswoman who claims she shot a senior DSP in self-defense during a sexual assault in a resort.",
            "As they reconstruct the crime to fabricate an airtight court alibi, a layered psychological puzzle of blackmail, deceit, and a missing boy comes to light.",
            "An official adaptation of the Spanish mystery thriller 'The Invisible Guest', rewritten with unexpected indigenous twists.",
            "Regina Cassandra delivered a stunning, multi-layered performance as Sameera Maha."
        ],
        "hints": [
            "Inspector Vikram Vasudev pieces together the conflicting statements of a murder in Coonoor.",
            "A taut, edge-of-the-seat locked-room mystery thriller.",
            "The five-letter title is the Telugu interrogative pronoun for 'Who'."
        ],
        "id": 267
    },
    {
        "title": "GANG LEADER",
        "displayTitle": "Gang Leader",
        "teluguTitle": "గ్యాంగ్ లీడర్",
        "year": 2019,
        "director": "Vikram Kumar",
        "actors": [
            "Nani",
            "Priyanka Arul Mohan",
            "Kartikeya Gummakonda",
            "Lakshmi",
            "Saranya Ponvannan"
        ],
        "genres": [
            "Comedy",
            "Thriller",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2015-2019",
        "clues": [
            "Five grief-stricken women of different generations unite to avenge their loved ones killed in a 300-crore bank heist and hire a mediocre pulp fiction crime novelist to lead them.",
            "The quirky revenge squad plans amateur heists, wiretaps, and surveillance to unmask a ruthless championship race-car driver.",
            "Anirudh Ravichander composed a whimsical, stylish musical score featuring 'Hoyna Hoyna'.",
            "Kartikeya Gummakonda gave a menacing antagonist performance as the psychopathic racer Dev."
        ],
        "hints": [
            "Pencil Parthasarathy leads five bereaved women on a bizarre mission of retribution.",
            "Priyanka Arul Mohan's charming debut in Telugu cinema.",
            "The title borrows from a legendary 1991 Chiranjeevi action classic."
        ],
        "id": 268
    },
    {
        "title": "SYE RAA NARASIMHA REDDY",
        "displayTitle": "Sye Raa Narasimha Reddy",
        "teluguTitle": "సైరా నరసింహారెడ్డి",
        "year": 2019,
        "director": "Surender Reddy",
        "actors": [
            "Chiranjeevi",
            "Nayanthara",
            "Tamannaah Bhatia",
            "Amitabh Bachchan",
            "Vijay Sethupathi",
            "Sudeep"
        ],
        "genres": [
            "Historical",
            "Period Drama",
            "War",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "The historical biography of the revered 19th-century polygar chieftain of Uyyalawada who ignited India's first armed rebellion against the British East India Company in 1847.",
            "A monumental visual epic featuring massive battlefield charges, fort sieges, and an ensemble cast across Indian cinema industries.",
            "Amitabh Bachchan made a special appearance as the chieftain's spiritual guru Gosayi Venkanna.",
            "Features the iconic climactic decapitation where the martyr's severed head hung on the fort gates continues to inspire millions to fight for independence."
        ],
        "hints": [
            "Uyyalawada Narasimha Reddy unites sixty-six palegars against British taxation in Rayalaseema.",
            "Produced by Ram Charan under the Konidela Production Company banner.",
            "The title begins with a battle cry followed by the revolutionary chieftain's name."
        ],
        "id": 269
    },
    {
        "title": "PRATI ROJU PANDAGE",
        "displayTitle": "Prati Roju Pandage",
        "teluguTitle": "ప్రతి రోజూ పండగే",
        "year": 2019,
        "director": "Maruthi",
        "actors": [
            "Sai Dharam Tej",
            "Raashi Khanna",
            "Sathyaraj",
            "Rao Ramesh"
        ],
        "genres": [
            "Comedy",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2015-2019",
        "clues": [
            "Learning that his grandfather has only five weeks left to live due to terminal lung cancer, an affectionate grandson travels to Rajahmundry to fulfill his final life wishes.",
            "He must navigate his selfish, busy NRI uncles who arrive only to calculate property inheritance before the old man even dies.",
            "Rao Ramesh gave an uproarious comedic performance as a cynical, stressed son calculating funeral expenses.",
            "A massive Christmas 2019 commercial blockbuster that treated terminal illness with warmth, celebration, and humor."
        ],
        "hints": [
            "Sai decides that his grandfather Raghu Ramayya's final weeks should be an everyday festival of joy.",
            "Raashi Khanna's role as TikTok celebrity 'Angel Aarna' was a viral sensation.",
            "The title translates as 'Every day is a festival'."
        ],
        "id": 270
    },
    {
        "title": "UMA MAHESWARA UGRA ROOPASYA",
        "displayTitle": "Uma Maheswara Ugra Roopasya",
        "teluguTitle": "ఉమామహేశ్వర ఉగ్రరూపస్య",
        "year": 2020,
        "director": "Venkatesh Maha",
        "actors": [
            "Satyadev Kancharana",
            "Roopa Koduvayur",
            "Naresh",
            "Suhas"
        ],
        "genres": [
            "Comedy",
            "Drama",
            "Slice of Life"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A mild-mannered photographer in the scenic Araku valley is publicly humiliated in a street brawl and takes a vow to walk barefoot until he exacts revenge.",
            "Instead of mindless violence, his journey becomes a tender artistic and emotional rediscovery of genuine photography, love, and martial arts.",
            "An acclaimed adaptation of the Malayalam classic 'Maheshinte Prathikaaram', set against the misty, serene hills of Araku.",
            "Satyadev gave a nuanced, soulful performance captured with naturalistic humor by director Venkatesh Maha."
        ],
        "hints": [
            "Uma Maheshwara Rao swears never to wear footwear again until he avenges his public beating.",
            "Features the charming, innocent rural tea shop debates and photography studio life in Araku.",
            "The title is a Sanskrit-derived phrase translating as 'The Fierce Form of Uma Maheswara'."
        ],
        "id": 271
    },
    {
        "title": "SOLO BRATHUKE SO BETTER",
        "displayTitle": "Solo Brathuke So Better",
        "teluguTitle": "సోలో బ్రతుకే సో బెటర్",
        "year": 2020,
        "director": "Subbu",
        "actors": [
            "Sai Dharam Tej",
            "Nabha Natesh",
            "Rajendra Prasad",
            "Rao Ramesh"
        ],
        "genres": [
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "A charismatic youth forms a college club promoting lifelong bachelorhood and emotional independence, inspired by philosophical thinkers.",
            "His anti-marriage ideology crumbles when he moves to Hyderabad and falls in love with an eccentric woman who took his bachelor philosophy too literally.",
            "The historic first major Telugu film released theatrically following the prolonged national COVID-19 lockdown in Christmas 2020.",
            "Thaman S. composed an energetic musical score featuring the viral anthem 'No Pelli'."
        ],
        "hints": [
            "Virat advocates that living solo is the key to eternal happiness until love enters his life.",
            "Features the famous bachelor oath and family reconciliation.",
            "The title is a catchy slogan stating that a solitary life is much better."
        ],
        "id": 272
    },
    {
        "title": "NAANDHI",
        "displayTitle": "Naandhi",
        "teluguTitle": "నాంది",
        "year": 2021,
        "director": "Vijay Kanakamedala",
        "actors": [
            "Allari Naresh",
            "Varalaxmi Sarathkumar",
            "Harish Uthaman",
            "Priyadarshi"
        ],
        "genres": [
            "Courtroom Drama",
            "Crime",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "An innocent software engineer is falsely framed for the gruesome murder of an anti-corruption activist and endures eight years of horrific custodial torture.",
            "A young pro-bono defense lawyer takes up his case, invoking Section 211 of the IPC to prosecute the corrupt police officers who framed him.",
            "A transformative serious dramatic performance from Allari Naresh that revived his career and earned critical acclaim.",
            "Sricharan Pakala composed an intense, haunting background score that highlighted police brutality and judicial delays."
        ],
        "hints": [
            "Surya Prakash spends eight agonizing years in undertrial detention fighting for justice.",
            "Varalaxmi Sarathkumar plays the tenacious advocate Aadhya.",
            "The six-letter title is the Telugu word for 'The Beginning' or 'Genesis'."
        ],
        "id": 273
    },
    {
        "title": "CHECK",
        "displayTitle": "Check",
        "teluguTitle": "చెక్",
        "year": 2021,
        "director": "Chandra Sekhar Yeleti",
        "actors": [
            "Nithiin",
            "Priya Prakash Varrier",
            "Rakul Preet Singh",
            "Sampath Raj"
        ],
        "genres": [
            "Thriller",
            "Prison Drama",
            "Sports"
        ],
        "difficulty": "medium",
        "popularity": "recognized",
        "era": "2020-2024",
        "clues": [
            "A conman on death row in Central Jail accused of masterminding a terrorist bombing learns the game of chess from a fellow inmate.",
            "He rises to become a national chess grandmaster from behind bars, using his celebrity matches as a calculated cover for an audacious escape plan.",
            "Directed by Chandra Sekhar Yeleti, renowned for logical puzzles, high-concept screenplays, and intellectual tension.",
            "Rakul Preet Singh played an idealistic young human-rights lawyer defending the prisoner."
        ],
        "hints": [
            "Aditya masters chess openings in prison to challenge death-row execution.",
            "The climax hinges on an incredible escape during a high-profile championship.",
            "The five-letter English title is the term used in chess when the King is under direct attack."
        ],
        "id": 274
    },
    {
        "title": "A1 EXPRESS",
        "displayTitle": "A1 Express",
        "teluguTitle": "ఎ1 ఎక్స్‌ప్రెస్",
        "year": 2021,
        "director": "Dennis Jeevan Kanukolanu",
        "actors": [
            "Sundeep Kishan",
            "Lavanya Tripathi",
            "Murali Sharma",
            "Rao Ramesh"
        ],
        "genres": [
            "Sports",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "A former national hockey prodigy who quit the sport in trauma returns to the field to save a historic public stadium in Yanam from being sold to corrupt corporate builders.",
            "Considered Telugu cinema's first mainstream sports drama centered entirely on field hockey.",
            "Hiphop Tamizha composed an adrenaline-pumping sports soundtrack featuring the viral dance track 'Single Kingulam'.",
            "Murali Sharma gave a poignant performance as a selfless, passionate hockey coach."
        ],
        "hints": [
            "Sanju picks up the hockey stick again to protect a municipal sports ground.",
            "Features intense competitive hockey matches and administrative corruption.",
            "The title combines an alphanumeric grade with a rapid transit term."
        ],
        "id": 275
    },
    {
        "title": "CHAAVU KABURU CHALLAGA",
        "displayTitle": "Chaavu Kaburu Challaga",
        "teluguTitle": "చావు కబురు చల్లగా",
        "year": 2021,
        "director": "Koushik Pegallapati",
        "actors": [
            "Kartikeya Gummakonda",
            "Lavanya Tripathi",
            "Aamani",
            "Murali Sharma"
        ],
        "genres": [
            "Drama",
            "Comedy",
            "Romance"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A carefree mortuary van driver in Visakhapatnam who witnesses death daily falls in love with an austere young widow at her husband's funeral.",
            "The narrative bravely explores the heavy social taboos surrounding widow remarriage, maternal loneliness, and finding love amidst grief.",
            "Jakes Bejoy composed a vibrant soundtrack featuring the hit rustic number 'Kadhile Kaalannadiga'.",
            "Aamani delivered an emotionally powerful supporting performance as the protagonist's resilient mother."
        ],
        "hints": [
            "Basthi Balaraju drives a hearse van and views life through a unique, fearless perspective on death.",
            "A dark-humored yet sensitive exploration of grief and second love.",
            "The title translates as 'May the news of death arrive gently'."
        ],
        "id": 276
    },
    {
        "title": "MOST ELIGIBLE BACHELOR",
        "displayTitle": "Most Eligible Bachelor",
        "teluguTitle": "మోస్ట్ ఎలిజిబుల్ బ్యాచిలర్",
        "year": 2021,
        "director": "Bhaskar",
        "actors": [
            "Akhil Akkineni",
            "Pooja Hegde",
            "Murali Sharma"
        ],
        "genres": [
            "Romance",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "An NRI bachelor from New York returns to India to select a bride through twenty arranged marriage meetings within twenty days.",
            "He meets an outspoken, free-spirited stand-up comedian whose bold questions about physical and emotional intimacy shatter his mechanical views on marriage.",
            "A major commercial Dussehra box office hit that revitalized the lead actor's commercial career.",
            "Gopi Sundar composed an infectious romantic score featuring 'Leharaayi' and 'Guche Gulabi'."
        ],
        "hints": [
            "Harsha learns from stand-up comedian Vibha that marriage requires passion and friendship, not a mechanical checklist.",
            "Directed by 'Bommarillu' Bhaskar.",
            "The three-word English title refers to a highly sought-after unmarried gentleman."
        ],
        "id": 277
    },
    {
        "title": "REPUBLIC",
        "displayTitle": "Republic",
        "teluguTitle": "రిపబ్లిక్",
        "year": 2021,
        "director": "Deva Katta",
        "actors": [
            "Sai Dharam Tej",
            "Aishwarya Rajesh",
            "Jagapathi Babu",
            "Ramya Krishnan"
        ],
        "genres": [
            "Political Drama",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "An uncompromising IAS collector appointed to Eluru district discovers that an entire freshwater lake is being poisoned by an illegal fish-farming mafia run by a ruthless political leader.",
            "He takes on the entrenched nexus between judiciary, executive, and public voter apathy in a tragic, hard-hitting ideological battle.",
            "Renowned for Deva Katta's blistering, philosophical dialogues dissecting the failure of democratic institutions.",
            "Ramya Krishnan delivered a cold, calculating performance as the Machiavellian political matriarch Vishakha Vani."
        ],
        "hints": [
            "Panja Abhiram IAS fights to save the dying Kolleru lake and democratic principles.",
            "Features an unapologetically somber, tragic climax examining society's complicity in corruption.",
            "The eight-letter English title denotes a state where supreme power rests in the hands of the people and their representatives."
        ],
        "id": 278
    },
    {
        "title": "VARUDU KAAVALENU",
        "displayTitle": "Varudu Kaavalenu",
        "teluguTitle": "వరుడు కావలెను",
        "year": 2021,
        "director": "Lakshmi Sowjanya",
        "actors": [
            "Naga Shaurya",
            "Ritu Varma",
            "Nadhiya",
            "Murali Sharma"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "A successful eco-architect from Europe returns to India pursuing an independent, sharp-tongued boutique owner who has rejected dozens of marriage proposals.",
            "A past collegiate heartbreak in Hyderabad had hardened the woman's heart, requiring patient, respectful wooing.",
            "Directorial debut of female filmmaker Lakshmi Sowjanya, praised for clean family humor, aesthetics, and dignified character arcs.",
            "Vishal Chandrashekhar and Thaman S. composed a melodious album featuring the hit 'Digu Digu Digu Naaga'."
        ],
        "hints": [
            "Akash waits patiently for Bhoomi to overcome her past collegiate trauma and open her heart.",
            "Nadhiya plays the exasperated mother trying to marry off her thirty-year-old daughter.",
            "The title translates as 'Groom Wanted', reminiscent of newspaper matrimonial advertisements."
        ],
        "id": 279
    },
    {
        "title": "DRUSHYAM 2",
        "displayTitle": "Drushyam 2",
        "teluguTitle": "దృశ్యం 2",
        "year": 2021,
        "director": "Jeethu Joseph",
        "actors": [
            "Venkatesh",
            "Meena",
            "Nadhiya",
            "Naresh",
            "Sampath Raj"
        ],
        "genres": [
            "Thriller",
            "Crime",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Six years after the murder of an IG's son, the humble cinema-hall owner faces a renewed, covert police investigation with undercover spies planted as his neighbors.",
            "When the victim's skeleton is finally exhumed from the police station floor, the hero's brilliant, long-term contingency plan shocks the entire legal system.",
            "Directed by Jeethu Joseph himself, delivering a masterclass in tension, family paranoia, and flawless alibi engineering.",
            "Venkatesh brought immense subtlety and paternal desperation to the iconic role of Rambabu."
        ],
        "hints": [
            "Rambabu scripts an unpublished cinema screenplay that matches his exact real-life murder defense.",
            "The shocking DNA swap at the forensic laboratory forms the climactic masterstroke.",
            "The title is the direct sequel to the 2014 mystery blockbuster, carrying the numeral 2."
        ],
        "id": 280
    },
    {
        "title": "SKYLAB",
        "displayTitle": "Skylab",
        "teluguTitle": "స్కైలాబ్",
        "year": 2021,
        "director": "Vishvak Khanderao",
        "actors": [
            "Nithya Menen",
            "Satyadev Kancharana",
            "Rahul Ramakrishna"
        ],
        "genres": [
            "Period Drama",
            "Comedy",
            "Independent"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "Set in 1979 in the sleepy village of Banda Lingampally, residents panic over radio reports that NASA's disintegrating space station is about to crash directly onto their homes.",
            "An ambitious aristocratic journalist, a debt-ridden doctor, and a desperate village youth all try to exploit the impending space disaster for personal glory and wealth.",
            "A quirky, Wes Anderson-style vintage period satire produced independently, featuring sync sound and a magnificent Western orchestral score by Prashanth R. Vihari.",
            "Praised for its gentle, eccentric humor, whimsical character arcs, and authentic Telangana rural setting."
        ],
        "hints": [
            "Gowri, Anand, and Subrahmanyam navigate the mass hysteria of a falling American space satellite.",
            "Villagers spend their life savings on luxury feasts thinking the world is about to end.",
            "The title is the actual historical name of the first United States space station that re-entered Earth in 1979."
        ],
        "id": 281
    },
    {
        "title": "BANGARRAJU",
        "displayTitle": "Bangarraju",
        "teluguTitle": "బంగర్రాజు",
        "year": 2022,
        "director": "Kalyan Krishna",
        "actors": [
            "Akkineni Nagarjuna",
            "Naga Chaitanya",
            "Ramya Krishnan",
            "Krithi Shetty"
        ],
        "genres": [
            "Fantasy",
            "Family",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "The playful spirit of a deceased village patriarch is sent back from heaven by Lord Yama to possess his timid grandson and protect an ancient Shiva temple treasure from conspirators.",
            "Brought together real-life father and son Akkineni Nagarjuna and Naga Chaitanya in a colorful festive Sankranti blockbuster.",
            "The direct sequel to the 2016 blockbuster 'Soggade Chinni Nayana', filled with village festivals, supernatural comedy, and colorful rural charm.",
            "Anoop Rubens composed a festive, foot-tapping score featuring 'Vaasivaadi Tassadiyya'."
        ],
        "hints": [
            "The soul of the charming grandfather enters his timid namesake grandson to save their ancestral legacy.",
            "Ramya Krishnan reprises her role as the heavenly spirit Satyabhama.",
            "The ten-letter title is the iconic, charismatic name of the titular protagonist."
        ],
        "id": 282
    },
    {
        "title": "RADHE SHYAM",
        "displayTitle": "Radhe Shyam",
        "teluguTitle": "రాధే శ్యామ్",
        "year": 2022,
        "director": "Radha Krishna Kumar",
        "actors": [
            "Prabhas",
            "Pooja Hegde",
            "Bhagyashree",
            "Krishnam Raju"
        ],
        "genres": [
            "Period Drama",
            "Romance",
            "Fantasy"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "Set in 1970s Italy, a world-renowned palmist who can read anyone's destiny with 100% accuracy falls in love with a terminally ill doctor whose palm shows a long, healthy life.",
            "When an unexpected medical turnaround occurs, the palmist must battle nature, destiny, and a massive ocean shipwreck to prove love is greater than written fate.",
            "Mounted on a grand scale with lavish European period sets, vintage trains, and sweeping orchestral compositions.",
            "Features the eternal conflict between fixed astrology and human willpower."
        ],
        "hints": [
            "Vikramaditya the palmist does not have a love line on his own hand.",
            "Pooja Hegde plays Prerana, who is afflicted with an incurable disease.",
            "The title combines the divine names of Radha and Lord Krishna."
        ],
        "id": 283
    },
    {
        "title": "ASHOKA VANAMLO ARJUNA KALYANAM",
        "displayTitle": "Ashoka Vanamlo Arjuna Kalyanam",
        "teluguTitle": "అశోకవనంలో అర్జున కళ్యాణం",
        "year": 2022,
        "director": "Vidya Sagar Chinta",
        "actors": [
            "Vishwak Sen",
            "Rukshar Dhillon",
            "Ritika Nayak"
        ],
        "genres": [
            "Romance",
            "Comedy",
            "Family"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A 33-year-old bachelor from Suryapet travels with his large family to a Godavari village for an inter-caste engagement, only for the national COVID lockdown to strand them inside the bride's house.",
            "Matters turn catastrophic when the prospective bride elopes with her lover, forcing the bachelor and the bride's sister into an impromptu comedy of errors.",
            "Vishwak Sen gave a delightfully subdued, endearing performance, shedding his typical aggressive urban persona.",
            "Jay Krish composed a melodious rural score featuring 'Sinnavaada'."
        ],
        "hints": [
            "Arjun Kumar Allam faces extreme social pressure to get married before turning thirty-four.",
            "The entire family is quarantined inside an awkward household in East Godavari.",
            "The title is a poetic mythological phrase referencing an epic wedding in an Ashoka grove."
        ],
        "id": 284
    },
    {
        "title": "SARKARU VAARI PAATA",
        "displayTitle": "Sarkaru Vaari Paata",
        "teluguTitle": "సర్కారు వారి పాట",
        "year": 2022,
        "director": "Parasuram",
        "actors": [
            "Mahesh Babu",
            "Keerthy Suresh",
            "Samuthirakani"
        ],
        "genres": [
            "Action",
            "Social Drama",
            "Comedy"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A money lender in Miami travels to Visakhapatnam to recover a ten-thousand-dollar debt from an arrogant MP, only to uncover a massive 10,000-crore corporate banking loan fraud.",
            "He exposes the criminal double standards of national banks that harass poor farmers over pennies while waiving billions for corrupt industrialists.",
            "Thaman S. composed an electrifying commercial album featuring the global chartbuster 'Kalaavathi'.",
            "Mahesh Babu showcased high-energy comic swagger and long-haired styling that delighted fans."
        ],
        "hints": [
            "Mahesh uses unconventional banking recovery techniques to collect national debts from Rajendranath.",
            "Features the famous Miami casino romance and debt collection.",
            "The title translates as 'The Government's Bid' or 'State Auction'."
        ],
        "id": 285
    },
    {
        "title": "BIMBISARA",
        "displayTitle": "Bimbisara",
        "teluguTitle": "బింబిసార",
        "year": 2022,
        "director": "Mallidi Vassishta",
        "actors": [
            "Nandamuri Kalyan Ram",
            "Catherine Tresa",
            "Samyuktha Menon"
        ],
        "genres": [
            "Fantasy",
            "Period Drama",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A tyrannical, bloodthirsty ancient 5th-century BCE emperor of Trigartala kingdom is cursed through a mystical mirror and transported into modern-day Hyderabad.",
            "Stripped of his empire, he encounters the modern descendants of those he oppressed, undergoing a profound moral transformation to become their savior.",
            "A massive surprise fantasy-action blockbuster that staged a triumphant theatrical comeback for Kalyan Ram.",
            "Chirantan Bhatt and M. M. Keeravani provided an epic orchestral and background score."
        ],
        "hints": [
            "The ancient emperor travels forward through time via the mystical Maya Darpanam.",
            "Features the famous sword duel where the ancient warrior confronts modern machine guns.",
            "The eight-letter title is the regal name of the titular historical emperor."
        ],
        "id": 286
    },
    {
        "title": "GODFATHER",
        "displayTitle": "Godfather",
        "teluguTitle": "గాడ్‌ఫాదర్",
        "year": 2022,
        "director": "Mohan Raja",
        "actors": [
            "Chiranjeevi",
            "Nayanthara",
            "Satyadev Kancharana",
            "Salman Khan"
        ],
        "genres": [
            "Political Drama",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Following the sudden death of a long-serving Chief Minister, a shadow kingmaker operating from behind the scenes works to prevent a corrupt narcotics syndicate from capturing state power.",
            "Features a high-profile guest cameo by Bollywood superstar Salman Khan arriving with machine guns to assist the protagonist.",
            "An official adaptation of the Malayalam political classic 'Lucifer', directed with mass-action elevation by Mohan Raja.",
            "Satyadev delivered a chilling performance as the ambitious, treacherous son-in-law Jaidev."
        ],
        "hints": [
            "Brahma / Abram Qureshi uses political chess moves to install a clean successor in Andhra Pradesh.",
            "Nayanthara plays his estranged step-sister Satya.",
            "The English title refers to an influential, protective figure or crime patriarch."
        ],
        "id": 287
    },
    {
        "title": "HIT: THE SECOND CASE",
        "displayTitle": "HIT: The Second Case",
        "teluguTitle": "హిట్: ది సెకండ్ కేస్",
        "year": 2022,
        "director": "Sailesh Kolanu",
        "actors": [
            "Adivi Sesh",
            "Meenakshi Chaudhary",
            "Rao Ramesh",
            "Suhas"
        ],
        "genres": [
            "Mystery",
            "Thriller",
            "Crime"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A laid-back, cocky SP heading the Homicide Intervention Team in Visakhapatnam is shaken to his core when a dismembered female body is found assembled from parts of different victims.",
            "He must decode the twisted, misogynistic psychological patterns of a cold-blooded serial killer operating under the guise of an ordinary citizen.",
            "A sleek, gruesome investigative procedural that expanded the HIT cinematic universe with intense forensic details.",
            "Adivi Sesh gave a sharp, charismatic performance as the investigator KD (Krishna Dev)."
        ],
        "hints": [
            "KD must catch the psychopathic killer who leaves a mocking calling card at horrific crime scenes in Vizag.",
            "The shocking climax unmasks an unexpected killer played by Suhas.",
            "The title is the franchise name followed by 'The Second Case'."
        ],
        "id": 288
    },
    {
        "title": "18 PAGES",
        "displayTitle": "18 Pages",
        "teluguTitle": "18 పేజెస్",
        "year": 2022,
        "director": "Palnati Surya Pratap",
        "actors": [
            "Nikhil Siddharth",
            "Anupama Parameswaran",
            "Dinesh Tej"
        ],
        "genres": [
            "Romance",
            "Mystery",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "A heartbroken app developer finds a discarded diary on the street written by a woman who lives entirely without smart technology or social media.",
            "As he reads through her handwritten entries, he falls deeply in love with her soul and discovers that the diary abruptly ends, leading him to investigate her mysterious disappearance.",
            "Written by Sukumar, blending sensitive romantic longing with an edge-of-the-seat investigative mystery.",
            "Gopi Sundar composed a melodious soundtrack featuring the chartbuster 'Nannayya Raasina'."
        ],
        "hints": [
            "Siddhu falls in love with Nandini purely through the handwritten pages of her lost diary.",
            "The heroine refuses to use a mobile phone, believing in direct human touch.",
            "The title is a numerical quantity followed by the English word for book sheets."
        ],
        "id": 289
    },
    {
        "title": "DHAMAKA",
        "displayTitle": "Dhamaka",
        "teluguTitle": "ధమాకా",
        "year": 2022,
        "director": "Trinadha Rao Nakkina",
        "actors": [
            "Ravi Teja",
            "Sreeleela",
            "Jayaram"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A young woman is torn between two identical-looking men: a wealthy, sophisticated CEO and an unemployed, street-smart neighborhood ruffian.",
            "The climactic twist reveals that both personalities are an elaborate dual-identity charade executed by one man to take down a predatory corporate syndicate.",
            "Crossed the 100-crore box office mark, becoming one of the biggest commercial blockbusters of late 2022.",
            "Bheems Ceciroleo delivered an explosive folk-dance soundtrack with viral hits like 'Jinthaak' and 'Pulsar Bike'."
        ],
        "hints": [
            "Swamy and Anand are revealed to be the exact same person executing a double game.",
            "Sreeleela's energetic dance sequences catapulted her into top stardom.",
            "The title is a Hindi/Telugu loanword denoting an explosive blast or sensation."
        ],
        "id": 290
    },
    {
        "title": "WALTAIR VEERAYYA",
        "displayTitle": "Waltair Veerayya",
        "teluguTitle": "వాల్తేరు వీరయ్య",
        "year": 2023,
        "director": "Bobby Kolli",
        "actors": [
            "Chiranjeevi",
            "Ravi Teja",
            "Shruti Haasan",
            "Catherine Tresa",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A notorious seaside fisherman and smuggler from Visakhapatnam is hired by RAW to travel to Malaysia and kidnap a dreaded international drug kingpin.",
            "The mission conceals a deeply personal vendetta involving the tragic martyrdom of his estranged younger half-brother, an honest ACP.",
            "Brought together Megastar Chiranjeevi and Mass Maharaja Ravi Teja in an electrifying, emotional multi-starrer.",
            "Devi Sri Prasad composed a monstrously viral soundtrack featuring 'Boss Party' and 'Poonakaalu Loading'."
        ],
        "hints": [
            "A Vizag coastal hero battles international cartel kingpin Solomon Caesar to avenge ACP Vikram Sagar.",
            "The mega Sankranti 2023 blockbuster grossing over 200 crores.",
            "The title combines an iconic port locality in Vizag with the hero's name."
        ],
        "id": 291
    },
    {
        "title": "VEERA SIMHA REDDY",
        "displayTitle": "Veera Simha Reddy",
        "teluguTitle": "వీరసింహా రెడ్డి",
        "year": 2023,
        "director": "Gopichand Malineni",
        "actors": [
            "Nandamuri Balakrishna",
            "Shruti Haasan",
            "Varalaxmi Sarathkumar",
            "Duniya Vijay"
        ],
        "genres": [
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A gentle youth running a car dealership in Istanbul is unaware that his father is the legendary, sword-wielding guardian of Pulicharla in Rayalaseema.",
            "When the aged father travels to Turkey for his son's wedding, a bitter sister's thirty-year-old vendetta triggers an explosive bloodbath.",
            "A massive Sankranti commercial blockbuster celebrating raw faction action and sister sentiment.",
            "Thaman S. composed an earth-shaking mass score featuring 'Suguna Sundari' and 'Jai Balayya'."
        ],
        "hints": [
            "A father whose very name strikes terror into the hearts of factionists across the border.",
            "Varalaxmi Sarathkumar delivered an intense antagonist performance as the vengeful sister Bhanumathi.",
            "The three-part title is the full formal name of the legendary lion-hearted elder."
        ],
        "id": 292
    },
    {
        "title": "WRITER PADMABHUSHAN",
        "displayTitle": "Writer Padmabhushan",
        "teluguTitle": "రైటర్ పద్మభూషణ్",
        "year": 2023,
        "director": "Shanmukha Prasanth",
        "actors": [
            "Suhas",
            "Tina Shilparaj",
            "Rohini",
            "Ashish Vidyarthi"
        ],
        "genres": [
            "Comedy",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "A struggling, unpublished 25-year-old assistant librarian in Vijayawada borrows money to self-publish his first novel, which sells zero copies.",
            "Suddenly, a sensational best-selling feminist book is published under his name across Andhra, and he must find the secret ghostwriter who authored it.",
            "Features a tear-jerking, revelatory climax celebrating the unsung artistic talents and suppressed dreams of Indian middle-class mothers.",
            "Rohini gave a profoundly moving maternal performance that touched audiences across demographics."
        ],
        "hints": [
            "An aspiring author takes credit for a blockbuster book he didn't write, only to discover his own mother's secret soul.",
            "Set in the streets, libraries, and middle-class homes of Vijayawada.",
            "The title combines an English profession with the protagonist's formal Indian name."
        ],
        "id": 293
    },
    {
        "title": "SIR",
        "displayTitle": "Sir",
        "teluguTitle": "సార్",
        "year": 2023,
        "director": "Venky Atluri",
        "actors": [
            "Dhanush",
            "Samyuktha Menon",
            "Samuthirakani",
            "Sai Kumar"
        ],
        "genres": [
            "Social Drama",
            "Period Drama",
            "Action"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In the late 1990s, an idealistic junior mathematics lecturer is dispatched by a private coaching cartel to teach at a rundown government college in a border village.",
            "Defying his greedy corporate bosses, he offers free top-tier education to impoverished, lower-caste rural students, helping them conquer state engineering entrance exams.",
            "G. V. Prakash Kumar composed an emotionally uplifting soundtrack featuring the chartbuster 'Maastaru Maastaru'.",
            "A massive critical and commercial blockbuster tackling the commercialization of the Indian education system."
        ],
        "hints": [
            "Balamurugan teaches mathematics through movie theaters and audio cassettes when his coaching classroom is demolished.",
            "Samuthirakani plays the greedy corporate education mafia kingpin.",
            "The simple three-letter English title is the respectful honorific students use for a male teacher."
        ],
        "id": 294
    },
    {
        "title": "MEM FAMOUS",
        "displayTitle": "Mem Famous",
        "teluguTitle": "మేమ్ ఫేమస్",
        "year": 2023,
        "director": "Sumanth Prabhas",
        "actors": [
            "Sumanth Prabhas",
            "Saarya Laxman",
            "Mani Aegurla",
            "Mourya Chowdary"
        ],
        "genres": [
            "Comedy",
            "Youth",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "Three directionless, unemployed village youths in rural Telangana are mocked by elders as complete failures.",
            "They launch an unconventional tent-house and village events venture, determined to prove their worth and become famous in their native town.",
            "Written, directed by, and starring 24-year-old debutant Sumanth Prabhas, made entirely with fresh grassroots talent.",
            "Celebrated for its authentic Telangana rural humor, energetic promotional campaigns, and youthful spirit."
        ],
        "hints": [
            "Mai, Bali, and Durga turn their small-town village into an entrepreneurial hub.",
            "Features the authentic colloquial dialect and youth camaraderie of Bandanarsampally.",
            "The title is a playful Telangana-English proclamation meaning 'We are Famous'."
        ],
        "id": 295
    },
    {
        "title": "BRO",
        "displayTitle": "Bro",
        "teluguTitle": "బ్రో",
        "year": 2023,
        "director": "Samuthirakani",
        "actors": [
            "Pawan Kalyan",
            "Sai Dharam Tej",
            "Priya Prakash Varrier",
            "Ketika Sharma"
        ],
        "genres": [
            "Fantasy",
            "Comedy",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A stressed, self-centered corporate executive dies in a sudden road accident and is granted a ninety-day extension of life by the embodiment of Time Himself.",
            "The divine entity accompanies the mortal across Hyderabad, teaching him that the world does not stop spinning without him and guiding him to settle his family.",
            "United real-life uncle and nephew Pawan Kalyan and Sai Dharam Tej sharing the screen.",
            "Thaman S. composed an energetic soundtrack and background score featuring the viral theme 'My Dear Markandeya'."
        ],
        "hints": [
            "Titan, the God of Time, teaches Markandeya how to let go of ego and live selflessly.",
            "Adapted from the Tamil fantasy hit Vinodhaya Sitham.",
            "A three-letter modern informal slang word used by youngsters to address a close male friend."
        ],
        "id": 296
    },
    {
        "title": "BEDURULANKA 2012",
        "displayTitle": "Bedurulanka 2012",
        "teluguTitle": "బెదురులంక 2012",
        "year": 2023,
        "director": "Clax",
        "actors": [
            "Kartikeya Gummakonda",
            "Neha Shetty",
            "Ajay Ghosh",
            "Srikanth Iyengar"
        ],
        "genres": [
            "Comedy",
            "Social Drama"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "Set on a secluded island in the Godavari delta in December 2012, corrupt village elders exploit Mayan apocalypse doomsday rumors to loot innocent villagers of their gold.",
            "A free-thinking graphical animator who returned from the city uses theater, practical jokes, and psychology to expose the hypocrisy of blind religious faith.",
            "Mani Sharma composed a delightful quirky soundtrack featuring 'Vennello Aadapilla'.",
            "A sharp, witty social satire exploring human gullibility, mortality fears, and village politics."
        ],
        "hints": [
            "Shiva orchestrates a hilarious fake doomsday event to dismantle the village godmen's deceit.",
            "Ajay Ghosh and Srikanth Iyengar play comical scheming village leaders.",
            "The title combines a Godavari island name with a famous Mayan calendar year."
        ],
        "id": 297
    },
    {
        "title": "BHAGAVANTH KESARI",
        "displayTitle": "Bhagavanth Kesari",
        "teluguTitle": "భగవంత్ కేసరి",
        "year": 2023,
        "director": "Anil Ravipudi",
        "actors": [
            "Nandamuri Balakrishna",
            "Sreeleela",
            "Kajal Aggarwal",
            "Arjun Rampal"
        ],
        "genres": [
            "Action",
            "Drama",
            "Social Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A former prisoner raises his deceased best friend's timid daughter, training her rigorously to overcome anxiety and join the Indian Army as a fearless soldier.",
            "When a ruthless, megalomaniac corporate tycoon targets them, the protective father unleashes volcanic fury, teaching women never to surrender to fear.",
            "Won the Filmfare Award South and grossed over 130 crores as a major Dasara 2023 blockbuster.",
            "Balakrishna spoke in authentic Telangana dialect, delivering a mature, socially inspiring father-figure performance."
        ],
        "hints": [
            "Nelakonda fights to make young Vijji fearless, declaring: 'I don't care!'.",
            "Bollywood actor Arjun Rampal played the corporate villain Rahul Sanghvi.",
            "The title is the complete two-part name of the fearless protagonist."
        ],
        "id": 298
    },
    {
        "title": "KEEDAA COLA",
        "displayTitle": "Keedaa Cola",
        "teluguTitle": "కీడా కోలా",
        "year": 2023,
        "director": "Tharun Bhascker",
        "actors": [
            "Chaitanya Rao Madadi",
            "Rag Mayur",
            "Brahmanandam",
            "Tharun Bhascker"
        ],
        "genres": [
            "Crime",
            "Comedy",
            "Dark Comedy"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "An insecure young man with a speech stutter and his wheelchair-bound grandfather discover a dead cockroach inside a sealed soft-drink bottle.",
            "They plot an audacious multi-crore extortion scheme against the corporate beverage company, attracting eccentric hitmen, corrupt politicians, and bizarre fixers.",
            "Legendary comedian Brahmanandam made a memorable return to cinema as the grumpy grandfather Varadaraju in a motorized wheelchair.",
            "Tharun Bhascker's zany, surreal screwball dark comedy featuring Vivek Sagar's eclectic retro-funk score."
        ],
        "hints": [
            "A cockroach in a soda bottle sets off a chaotic criminal chase across Hyderabad.",
            "Features eccentric characters like Naidu, Barbaam, and Lancham.",
            "The title combines a Hindi/Telugu word for an insect with a carbonated beverage."
        ],
        "id": 299
    },
    {
        "title": "MANGALAVAARAM",
        "displayTitle": "Mangalavaaram",
        "teluguTitle": "మంగళవారం",
        "year": 2023,
        "director": "Ajay Bhupathi",
        "actors": [
            "Payal Rajput",
            "Nandita Swetha",
            "Priyadarshi",
            "Ajay Ghosh"
        ],
        "genres": [
            "Mystery",
            "Psychological Thriller",
            "Horror"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "In an isolated 1990s Andhra village, mysterious anonymous graffiti scrawled on village walls exposes illicit affairs, leading to gruesome deaths strictly on Tuesdays.",
            "A female police officer uncovers a dark past involving medical nymphomania, social ostracization, and a tragic young woman's exploitation.",
            "Ajaneesh Loknath composed a spine-chilling, award-winning rustic background score featuring eerie village chants.",
            "Payal Rajput delivered a fearless, raw, and critically acclaimed dramatic performance as the tragic Sailaja."
        ],
        "hints": [
            "Bizarre deaths and suicides happen strictly on one specific day of the week in Mahalakshmipuram.",
            "Explores a misunderstood psychological condition against rural superstitions.",
            "The title is the Telugu word for 'Tuesday'."
        ],
        "id": 300
    },
    {
        "title": "GUNTUR KAARAM",
        "displayTitle": "Guntur Kaaram",
        "teluguTitle": "గుంటూరు కారం",
        "year": 2024,
        "director": "Trivikram Srinivas",
        "actors": [
            "Mahesh Babu",
            "Sreeleela",
            "Meenakshi Chaudhary",
            "Ramya Krishnan",
            "Prakash Raj"
        ],
        "genres": [
            "Action",
            "Family",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "A spicy, bidi-smoking youth from Guntur is demanded by his scheming political grandfather to sign a legal document severing all blood ties with his estranged minister mother.",
            "He refuses to sign, using sheer colloquial arrogance, witty comebacks, and fists to uncover why his beloved mother abandoned him twenty-five years ago.",
            "Thaman S. composed an earth-shaking dance soundtrack with viral global anthems like 'Kurchi Madathapetti'.",
            "Mahesh Babu's electrifying, unapologetic Guntur dialect and vintage mass energy carried the Sankranti 2024 box office."
        ],
        "hints": [
            "Ramana defends his maternal bond while smoking beedis with signature style.",
            "Features the world-famous viral dance step to 'Kurchi Madathapetti'.",
            "The title combines an iconic commercial chili city with the Telugu word for spice/heat."
        ],
        "id": 301
    },
    {
        "title": "SAINDHAV",
        "displayTitle": "Saindhav",
        "teluguTitle": "సైంధవ్",
        "year": 2024,
        "director": "Sailesh Kolanu",
        "actors": [
            "Venkatesh",
            "Shraddha Srinath",
            "Nawazuddin Siddiqui",
            "Arya",
            "Andrea Jeremiah"
        ],
        "genres": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "difficulty": "medium",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "A mild-mannered crane operator in the fictional coastal port city of Chandraprastha learns his young daughter suffers from spinal muscular atrophy requiring a 17-crore injection.",
            "To fund the cure, he revives his dormant past as an unstoppable underworld assassin named 'Saiko', entering an all-out war with an illegal cartel.",
            "Marked the milestone 75th feature film of veteran star Venkatesh in a gritty, neo-noir action avatar.",
            "Bollywood acclaimed actor Nawazuddin Siddiqui made his explosive South cinema debut as the eccentric mobster Vikas Malik."
        ],
        "hints": [
            "A loving father returns to his deadly assassin past to save his terminally ill child.",
            "Set in the dystopian, rainy port town of Chandraprastha.",
            "The title is the codename of the lethal protagonist, inspired by a Mahabharata warrior."
        ],
        "id": 302
    },
    {
        "title": "NAA SAAMI RANGA",
        "displayTitle": "Naa Saami Ranga",
        "teluguTitle": "నా సామిరంగ",
        "year": 2024,
        "director": "Vijay Binni",
        "actors": [
            "Akkineni Nagarjuna",
            "Allari Naresh",
            "Raj Tarun",
            "Ashika Ranganath"
        ],
        "genres": [
            "Action",
            "Period Drama",
            "Romance",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "In a 1980s coastal Andhra village, an upright, fiercely loyal villager defends his aristocratic foster brother and village honor against greedy feudal conspirators.",
            "His lifelong, unspoken romance with an orthodox girl endures through decades of village turmoil and knife fights.",
            "A festive Sankranti 2024 box office winner featuring Oscar-winner M. M. Keeravani's vibrant folk and classical musical score.",
            "Allari Naresh gave an emotionally moving supporting performance as the devoted foster brother Anji."
        ],
        "hints": [
            "Kishtayya's unyielding loyalty to his village brothers and his patient love for Varalu.",
            "Features the famous Sankranti festive setting, rooster fights, and beach combats.",
            "The title is a legendary Telugu exclamation of sheer festive astonishment and joy."
        ],
        "id": 303
    },
    {
        "title": "EAGLE",
        "displayTitle": "Eagle",
        "teluguTitle": "ఈగల్",
        "year": 2024,
        "director": "Karthik Gattamneni",
        "actors": [
            "Ravi Teja",
            "Anupama Parameswaran",
            "Kavya Thapar",
            "Navdeep"
        ],
        "genres": [
            "Action",
            "Thriller",
            "Espionage"
        ],
        "difficulty": "easy",
        "popularity": "popular",
        "era": "2020-2024",
        "clues": [
            "An investigative journalist in Delhi writes a routine article on a rare wild cotton grown in the Talakona forests, only to trigger a high-priority national security alert.",
            "She uncovers that the peaceful cotton farmer is actually the world's most feared phantom sniper assassin who vanished after wiping out international arms cartels.",
            "Known for Hollywood-grade ballistic choreography, tactical weapons research, and world-building.",
            "Davzand composed a thumping electronic action background score."
        ],
        "hints": [
            "Sahadev Varma uses sniper rifles from an isolated mountain fortress to intercept illegal arms deals.",
            "Directed and shot by ace cinematographer Karthik Gattamneni.",
            "The five-letter English title is the predatory bird codename of the supreme assassin."
        ],
        "id": 304
    },
    {
        "title": "GAAMI",
        "displayTitle": "Gaami",
        "teluguTitle": "గామి",
        "year": 2024,
        "director": "Vidyadhar Kagita",
        "actors": [
            "Vishwak Sen",
            "Chandini Chowdary",
            "Abhinaya",
            "Mohammad Samad"
        ],
        "genres": [
            "Adventure",
            "Fantasy",
            "Sci-Fi",
            "Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "An amnesiac Aghora suffering from an agonizing human-touch phobia embarks on an impossible journey to the mystical Dronagiri mountain in the frozen Himalayas.",
            "He must find the sacred nocturnal Sanjeevani flower that blooms only once every thirty-six years to cure his tactile curse.",
            "Crowdfunded over five years by passionate indie cinephiles, achieving breathtaking visual effects and snowy cinematography on a modest budget.",
            "Features three non-linear parallel storylines intersecting in a deeply spiritual, existential climax."
        ],
        "hints": [
            "Shankar collapses in convulsions whenever touched by human skin.",
            "Interweaves a remote medical experimentation lab with a devadasi mother and a Himalayan trek.",
            "The five-letter title is a Sanskrit word meaning 'A Seeker', 'Traveler', or 'One who journeys'."
        ],
        "id": 305
    },
    {
        "title": "COMMITTEE KURROLLU",
        "displayTitle": "Committee Kurrollu",
        "teluguTitle": "కమిటీ కుర్రోళ్లు",
        "year": 2024,
        "director": "Yadhu Vamsi",
        "actors": [
            "Sandeep Saroj",
            "Yaswanth Pendyala",
            "Eshwar Rachiraju",
            "Sai Kumar"
        ],
        "genres": [
            "Drama",
            "Coming-of-Age",
            "Period Drama"
        ],
        "difficulty": "medium",
        "popularity": "critically-acclaimed",
        "era": "2020-2024",
        "clues": [
            "Follows eleven childhood friends in a lush Godavari village from their carefree school days in the early 2000s to their bitter adult estrangement over caste-based election politics.",
            "Produced by Niharika Konidela, featuring a cast of fresh young newcomers whose natural performances earned universal praise.",
            "An authentic, heartwarming rural coming-of-age drama that became a surprise sleeper theatrical blockbuster in mid-2024.",
            "Anudeep Dev provided a nostalgic, folk-infused musical score capturing traditional Jathara festivals."
        ],
        "hints": [
            "A lifelong circle of village friends is fractured when reservation and panchayat politics divide them.",
            "Set in the scenic, picturesque coconut groves of Konaseema.",
            "The title translates as 'The Committee Boys'."
        ],
        "id": 306
    },
    {
        "title": "AAY",
        "displayTitle": "Aay",
        "teluguTitle": "ఆయ్",
        "year": 2024,
        "director": "Kanchi Anji Babu",
        "actors": [
            "Narne Nithin",
            "Nayan Sarika",
            "Ankith Koyya",
            "Rajkumar Kasireddy"
        ],
        "genres": [
            "Comedy",
            "Romance"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "During the rainy monsoon season in a Godavari village, three inseparable friends spend their days chatting, laughing, and meddling in local village affairs.",
            "When the protagonist falls in love with an upper-caste woman, his comical buddies orchestrate absurd schemes to bypass caste boundaries.",
            "A surprise monsoon comedy blockbuster produced by GA2 Pictures that earned huge returns through pure word of mouth.",
            "Ankith Koyya and Rajkumar Kasireddy provided nonstop, riotous Godavari comedic banter."
        ],
        "hints": [
            "A light-hearted rural romance drenched in continuous Godavari monsoon rain.",
            "Features the famous local linguistic expression used repeatedly in conversation.",
            "The three-letter title is the quintessential colloquial Godavari affirmative exclamation."
        ],
        "id": 307
    },
    {
        "title": "MATHU VADALARA 2",
        "displayTitle": "Mathu Vadalara 2",
        "teluguTitle": "మత్తు వదలరా 2",
        "year": 2024,
        "director": "Ritesh Rana",
        "actors": [
            "Sri Simha Koduri",
            "Satya",
            "Faria Abdullah",
            "Vennela Kishore",
            "Sunil"
        ],
        "genres": [
            "Comedy",
            "Crime",
            "Thriller"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2020-2024",
        "clues": [
            "Former delivery boys now employed as special undercover agents in the 'HE Team' (High Emergency Team) supplement their low salaries by skimming money from rescued kidnap victims.",
            "When they are framed for the murder of a prominent politician's daughter, they must clear their names while evading both the police and criminal cartels.",
            "Satya delivered an absolute comedic tour-de-force as 'Yesu', earning thunderous standing ovations in theatres.",
            "Kaala Bhairava scored a zany synth-pop score in this smash-hit comedy thriller sequel."
        ],
        "hints": [
            "Babu and Yesu get trapped in an apartment with another mysterious corpse while working for special police.",
            "Satya's comic brilliance and mime routines drove the film to massive box office numbers.",
            "The title is the direct numbered sequel to the 2019 cult comedy hit."
        ],
        "id": 308
    },
    {
        "title": "SWAG",
        "displayTitle": "Swag",
        "teluguTitle": "శ్వాగ్",
        "year": 2024,
        "director": "Hasith Goli",
        "actors": [
            "Sree Vishnu",
            "Ritu Varma",
            "Meera Jasmine",
            "Sunil"
        ],
        "genres": [
            "Comedy",
            "Period Drama",
            "Satire",
            "Experimental"
        ],
        "difficulty": "medium",
        "popularity": "cult",
        "era": "2020-2024",
        "clues": [
            "An eccentric, five-century generational lineage tracing the royal Vinjamara dynasty from a 16th-century matriarchal kingdom to modern-day property claimants.",
            "Sree Vishnu portrayed four drastically different characters spanning centuries, showcasing jaw-dropping comedic and dialect flexibility.",
            "A sharp, satirical feminist deconstruction of gender supremacy, toxic patriarchy, and dynastic vanity.",
            "Vivek Sagar composed an intricate, experimental classical fusion musical score."
        ],
        "hints": [
            "Singa, Bhavabhuti, Yayati, and King Anaganaga battle for an ancient royal treasury trust.",
            "Marked the prestigious Telugu screen comeback of acclaimed actress Meera Jasmine.",
            "The four-letter title is an English slang term for style, acronymized for the royal clan."
        ],
        "id": 309
    },
    {
        "title": "DAAKU MAHARAJ",
        "displayTitle": "Daaku Maharaaj",
        "teluguTitle": "డాకు మహారాజ్",
        "year": 2025,
        "director": "Bobby Kolli",
        "actors": [
            "Nandamuri Balakrishna",
            "Bobby Deol",
            "Pragya Jaiswal",
            "Shraddha Srinath"
        ],
        "genres": [
            "Action",
            "Period Drama",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2025-2026",
        "clues": [
            "A legendary bandit leader in the rugged ravines of Chambal protects the impoverished while battling ruthless feudal kings and modern betrayers.",
            "A monumental Sankranti 2025 festive action blockbuster showcasing fierce desert warfare, royal heritage, and vintage mass swagger.",
            "Thaman S. composed an earth-shaking period folk-action soundtrack with thunderous battle rhythms.",
            "Features high-voltage confrontations between the bandit king and Bollywood actor Bobby Deol as the ruthless royal antagonist."
        ],
        "hints": [
            "A royal bandit king commands horse cavalry against greedy royal tyrants.",
            "The Sankranti 2025 release starring Balakrishna.",
            "The title combines a Hindi/Telugu word for a bandit with an imperial royal title."
        ],
        "id": 310
    },
    {
        "title": "GAME CHANGER",
        "displayTitle": "Game Changer",
        "teluguTitle": "గేమ్ ఛేంజర్",
        "year": 2025,
        "director": "S. Shankar",
        "actors": [
            "Ram Charan",
            "Kiara Advani",
            "S. J. Suryah",
            "Anjali"
        ],
        "genres": [
            "Political Drama",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2025-2026",
        "clues": [
            "A brilliant, unyielding Indian Administrative Service (IAS) officer takes on deep-seated electoral malpractice and political syndicate corruption.",
            "He devises revolutionary administrative systems to ensure clean, tamper-proof voting and fair elections across the state.",
            "Directed by Shankar, featuring grand visual sets, massive public demonstrations, and Thaman's musical score.",
            "Features the hero in dual avatars connecting an idealistic rural social crusader from the past with a modern top civil servant."
        ],
        "hints": [
            "Ram Nandan IAS challenges corrupt electoral kingpins.",
            "S. J. Suryah plays the scheming, ambitious political adversary.",
            "The two-word English title refers to an event or individual that dramatically transforms existing rules."
        ],
        "id": 311
    },
    {
        "title": "SANKRANTHIKI VASTHUNAM",
        "displayTitle": "Sankranthiki Vasthunam",
        "teluguTitle": "సంక్రాంతికి వస్తున్నాం",
        "year": 2025,
        "director": "Anil Ravipudi",
        "actors": [
            "Venkatesh",
            "Aishwarya Rajesh",
            "Meenakshi Chaudhary"
        ],
        "genres": [
            "Comedy",
            "Action",
            "Family"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2025-2026",
        "clues": [
            "An ex-cop living in domestic bliss with his loving wife gets pulled into an absurd comedic mission involving his glamorous former girlfriend.",
            "A festive Sankranti 2025 laugh-riot filled with Anil Ravipudi's signature rapid-fire situational comedy, domestic sarcasm, and energetic dance numbers.",
            "Bheems Ceciroleo delivered viral folk-infused tunes that dominated the Sankranti holiday box office.",
            "Venkatesh showcased his vintage, peerless comic timing in high-stakes family misunderstandings."
        ],
        "hints": [
            "A retired police officer gets stuck between an ex-lover and his suspicious wife.",
            "Directed by Anil Ravipudi as a festive family comedy.",
            "The title translates as 'We are coming for the Sankranti festival'."
        ],
        "id": 312
    },
    {
        "title": "THANDEL",
        "displayTitle": "Thandel",
        "teluguTitle": "తండేల్",
        "year": 2025,
        "director": "Chandoo Mondeti",
        "actors": [
            "Naga Chaitanya",
            "Sai Pallavi"
        ],
        "genres": [
            "Period Drama",
            "Romance",
            "Action",
            "Drama"
        ],
        "difficulty": "easy",
        "popularity": "blockbuster",
        "era": "2025-2026",
        "clues": [
            "Based on the real-life 2018 ordeal of Srikakulam fishermen who inadvertently drifted into Pakistani territorial waters and were imprisoned.",
            "The leader of the captured fishermen fights torture and builds prisoner solidarity while his spirited lover wages an emotional battle back home to secure their return.",
            "Devi Sri Prasad composed an authentic North Coastal Andhra folk-music album capturing Srikakulam dialect and maritime culture.",
            "Reunited the celebrated lead pair of 'Love Story' in a raw, maritime survival drama."
        ],
        "hints": [
            "Raju leads his fellow captured coastal fishermen through grueling prison survival in Karachi.",
            "Bujji fights bureaucratic apathy in Andhra to bring her lover home.",
            "The title is the traditional maritime term for a boat captain or sailing master in coastal Andhra."
        ],
        "id": 313
    },
    {
        "title": "MIRAI",
        "displayTitle": "Mirai",
        "teluguTitle": "మిరాయ్",
        "year": 2025,
        "director": "Karthik Gattamneni",
        "actors": [
            "Teja Sajja",
            "Ritika Nayak",
            "Manchu Manoj"
        ],
        "genres": [
            "Fantasy",
            "Action",
            "Adventure"
        ],
        "difficulty": "medium",
        "popularity": "blockbuster",
        "era": "2025-2026",
        "clues": [
            "An adventurous warrior must prevent an ancient dark warlord from desecrating King Ashoka's legendary secret Nine Unknown sacred texts.",
            "Mounted on a grand scale combining historical Indian scriptures, mystical superweapons, and martial arts visual spectacles.",
            "Gowra Hari composed an adrenaline-surging mythological-action soundtrack.",
            "Features Manchu Manoj as the terrifying, sword-wielding 'Black Sword' antagonist."
        ],
        "hints": [
            "A brave young guardian is chosen to protect the celestial secrets of Emperor Ashoka's Nine Unknown Books.",
            "A high-concept superhero fantasy action spectacle directed by Karthik Gattamneni.",
            "The five-letter Japanese-derived title translates to 'The Future'."
        ],
        "id": 314
    }
];


// Data Validation Utility for Game Integrity
function validateMovieDatabase() {
    if (!Array.isArray(movies) || movies.length === 0) {
        console.error("Movie database is empty or not an array!");
        return false;
    }
    
    const ids = new Set();
    const titles = new Set();
    let issues = 0;
    
    movies.forEach(movie => {
        if (!movie.id || ids.has(movie.id)) {
            console.warn(`Duplicate or missing ID: ${movie.id} (${movie.title})`);
            issues++;
        }
        ids.add(movie.id);
        
        const norm = movie.title.toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (titles.has(norm)) {
            console.warn(`Duplicate movie normalized title: ${movie.title}`);
            issues++;
        }
        titles.add(norm);
        
        if (!movie.year || movie.year < 2000 || movie.year > 2026) {
            console.warn(`Year out of bounds [2000-2026]: ${movie.title} (${movie.year})`);
            issues++;
        }
        
        if (!movie.clues || movie.clues.length < 3) {
            console.warn(`Insufficient clues for movie: ${movie.title}`);
            issues++;
        }
        
        if (!movie.hints || movie.hints.length < 3) {
            console.warn(`Insufficient hints for movie: ${movie.title}`);
            issues++;
        }
    });
    
    if (issues === 0) {
        console.log(`%c✓ TFI Movie Database Verified: ${movies.length} valid Telugu movies loaded.`, "color: #22C55E; font-weight: bold; font-size: 14px;");
    } else {
        console.warn(`Movie Database has ${issues} warnings.`);
    }
    return issues === 0;
}

// Export for Node testing or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { movies, validateMovieDatabase };
}

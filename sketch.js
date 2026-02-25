// freq  = tone frequency (Hz) — low/somber for oppressed, higher/harsh for
// powerful wave  = oscillator waveform: 'sine' (pure), 'triangle' (soft),
// 'sawtooth' (harsh)
const GROUPS = [
  // ── Caste groups ──────────────────────────────────────────────────────────
  {
    color: [167, 230, 224],
    count: 180,
    freq: 82.4,
    wave: 'sine',
    facts: [
      '32.6% of Scheduled Tribes are multidimensionally poor.',
      'The 1931 Census remains the last source of publicly available caste-wise population data.',
      'In 2011 a Socio-Economic and Caste Census was conducted, but its caste data was never released.',
    ],
    sources: [
      {
        label: 'Counting Castes and Inequalities in India — Kathmandu Post',
        url:
            'https://kathmandupost.com/columns/2025/05/22/counting-castes-and-inequalities-in-india'
      },
      {
        label: 'NITI Aayog — Multidimensional Poverty Index',
        url: 'https://niti.gov.in/national-multidimensional-poverty-index'
      },
    ]
  },
  {
    color: [245, 175, 175],
    count: 160,
    freq: 98.0,
    wave: 'sine',
    facts: [
      'One crime is committed against a Dalit every 18 minutes.',
      '13 Dalits are murdered every week.',
      '27.4% of Dalits / SCs are multidimensionally poor.',
    ],
    sources: [
      {
        label: 'National Campaign on Dalit Human Rights',
        url: 'https://www.ncdhr.org.in'
      },
      {
        label: 'Counting Castes and Inequalities — Kathmandu Post',
        url:
            'https://kathmandupost.com/columns/2025/05/22/counting-castes-and-inequalities-in-india'
      },
      {
        label: 'Scheduled Caste violence — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Caste-related_violence_in_India'
      },
    ]
  },
  {
    color: [210, 180, 255],
    count: 150,
    freq: 110.0,
    wave: 'sine',
    facts: [
      '"A Shudra is unfit to receive education." — Manusmriti',
      '"A Brahmin can order a Shudra to serve him without any remuneration." — Manusmriti',
      '"Nobody has the right to free him." — Manusmriti',
    ],
    sources: [
      {
        label: 'Manusmriti — Sacred Texts Archive',
        url: 'https://www.sacred-texts.com/hin/manu.htm'
      },
      {
        label: 'Manusmriti — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Manusmriti'
      },
    ]
  },
  {
    color: [255, 210, 160],
    count: 120,
    freq: 130.8,
    wave: 'sine',
    facts: [
      '18.3% of Other Backward Classes are multidimensionally poor.',
      '64% of total GST came from the bottom 50% of the population.',
      'Only 4% of GST came from the top 10%.',
    ],
    sources: [
      {
        label: 'Counting Castes and Inequalities — Kathmandu Post',
        url:
            'https://kathmandupost.com/columns/2025/05/22/counting-castes-and-inequalities-in-india'
      },
      {
        label: 'Oxfam India — Inequality Report',
        url: 'https://www.oxfamindia.org/inequality-report'
      },
    ]
  },
  {
    color: [210, 210, 210],
    count: 50,
    freq: 164.8,
    wave: 'triangle',
    facts: [
      'The top 10% hold 77% of total national wealth.',
      '74% of India\'s population could not afford a healthy diet.',
    ],
    sources: [
      {
        label: 'World Inequality Report (updated 2026) — wid.world',
        url: 'https://wir2022.wid.world'
      },
      {
        label: 'UN SOFI Report 2024 — FAO',
        url: 'https://www.fao.org/publications/sofi'
      },
      {
        label: 'Global Hunger Index 2023 — India',
        url: 'https://www.globalhungerindex.org/india.html'
      },
      {
        label: 'Oxfam India Inequality Report',
        url: 'https://www.oxfamindia.org/inequality-report'
      },
    ]
  },
  {
    color: [255, 236, 153],
    count: 20,
    freq: 261.6,
    wave: 'triangle',
    facts: [
      '"Brahma gave birth to the Brahmins from his mouth." — Manusmriti',
      '"He must never read the Vedas in the presence of the Shudras." — Manusmriti',
    ],
    sources: [
      {
        label: 'Manusmriti — Sacred Texts Archive',
        url: 'https://www.sacred-texts.com/hin/manu.htm'
      },
      {
        label: 'Varna system — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Varna_(Hinduism)'
      },
    ]
  },
  {
    color: [174, 213, 255],
    count: 18,
    freq: 293.7,
    wave: 'triangle',
    facts: [
      '"The Kingdom of that monarch who looks on while a Shudra settles the law will sink low." — Manusmriti',
    ],
    sources: [
      {
        label: 'Manusmriti — Sacred Texts Archive',
        url: 'https://www.sacred-texts.com/hin/manu.htm'
      },
    ]
  },
  {
    color: [180, 240, 180],
    count: 16,
    freq: 329.6,
    wave: 'triangle',
    facts: [
      'Vaishyas — the merchant-trading varna — historically used caste hierarchy to consolidate commercial capital while remaining insulated from manual labour.',
    ],
    sources: [
      {
        label: 'Manusmriti — Sacred Texts Archive',
        url: 'https://www.sacred-texts.com/hin/manu.htm'
      },
    ]
  },

  // ── Religious groups ───────────────────────────────────────────────────────
  {
    color: [160, 220, 190],
    count: 145,
    freq: 116.5,
    wave: 'sine',
    facts: [
      '84% of cow vigilante violence victims (2010–2017) were Muslim.',
      'In the 2002 Gujarat riots ~1,000 were killed, mostly Muslims. 20,000 homes destroyed.',
      '90% of religion-based hate crimes between 2009–2019 occurred after BJP came to power.',
      'In 2024: 59 communal riots — 13 lives claimed, 10 of them Muslim.',
    ],
    sources: [
      {
        label: 'Cow Vigilante Violence — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cow_vigilante_violence_in_India'
      },
      {
        label: '2002 Gujarat Riots — Ballard Brief',
        url: 'https://ballardbrief.byu.edu/issue-briefs/the-2002-gujarat-riots'
      },
      {
        label: 'Religious Hate Crimes 2023 — South Asia Justice Campaign',
        url: 'https://www.southasiajusticecampaign.org'
      },
      {
        label: 'India Communal Violence 2024 — CSSS',
        url: 'https://csss-isla.com'
      },
    ]
  },
  {
    color: [255, 195, 160],
    count: 95,
    freq: 196.0,
    wave: 'triangle',
    facts: [
      'India\'s 2023 GHI score is 28.7 — considered serious.',
      'The poorer 50% of the world accounts for just 3% of carbon emissions from private capital.',
    ],
    sources: [
      {
        label: 'Global Hunger Index 2023',
        url: 'https://www.globalhungerindex.org/india.html'
      },
      {label: 'World Inequality Report 2022', url: 'https://wir2022.wid.world'},
    ]
  },
  {
    color: [175, 205, 240],
    count: 12,
    freq: 220.0,
    wave: 'triangle',
    facts: [
      '1 Christian killed in 2023 hate crimes.',
      '1 Christian killed in 2024 mob lynching incidents.',
    ],
    sources: [
      {
        label: 'Religious Violence 2023 — South Asia Justice Campaign',
        url: 'https://www.southasiajusticecampaign.org'
      },
    ]
  },

  // ── Actors of violence / power ─────────────────────────────────────────────
  {
    color: [230, 170, 170],
    count: 30,
    freq: 233.1,
    wave: 'sawtooth',
    facts: [
      'At least 44 people killed by cow vigilantes between May 2015 and December 2018.',
      '36 of those 44 victims were Muslim. About 280 injured in 100+ attacks.',
      '97% of cow vigilante attacks reported after May 2014.',
    ],
    sources: [
      {
        label: 'Cow Vigilante Violence — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cow_vigilante_violence_in_India'
      },
      {
        label: '44 Killed by Cow Vigilantes — The Print',
        url:
            'https://theprint.in/india/44-killed-by-cow-vigilantes-since-2015/153031/'
      },
      {
        label: 'Cow Violence Tracker — IndiaSpend / Hindustan Times',
        url: 'https://www.indiaspend.com/cow-violence/'
      },
      {
        label: 'Cow Vigilante Violence — Human Rights Watch',
        url:
            'https://www.hrw.org/report/2019/02/19/violent-cow-protection-india'
      },
    ]
  },
  {
    color: [240, 185, 185],
    count: 18,
    freq: 246.9,
    wave: 'sawtooth',
    facts: [
      '"Either prepare to die or get ready to kill." — Rally speech',
      '"Even if 100 of us kill 20 lakhs of them, we will be victorious." — Rally speech',
      'Hate speech increased nearly 500% from 2014 to 2018.',
    ],
    sources: [
      {
        label:
            '90% Hate Crimes Post-2014; 500% Hate Speech Rise — FactChecker.in',
        url: 'https://www.factchecker.in'
      },
      {
        label: 'Communal Violence 2023–2025 — South Asia Justice Campaign',
        url: 'https://www.southasiajusticecampaign.org'
      },
      {
        label: 'Islamophobia in India — Ballard Brief',
        url: 'https://ballardbrief.byu.edu/issue-briefs/the-2002-gujarat-riots'
      },
    ]
  },

  // ── Billionaire class ──────────────────────────────────────────────────────
  {
    color: [245, 240, 190],
    count: 5,
    freq: 440.0,
    wave: 'triangle',
    facts: [
      '358 billionaires in India own approximately $1.9 trillion.',
      'The richest 1% own 53% of India\'s wealth. The bottom 50% own just 4.1%.',
    ],
    sources: [
      {
        label: '358 Billionaires, Hurun Rich List — Business Standard 2025',
        url:
            'https://www.business-standard.com/finance/personal-finance/india-records-358-billionaires-ambani-keads-with-9-5-lakh-cr-wealth-125100100522_1.html'
      },
      {
        label: 'Bottom 50% Wealth ($910B) — World Inequality Lab',
        url: 'https://wir2022.wid.world'
      },
      {
        label: '1% owns 53%, bottom 50% at 4.1% — Oxfam India',
        url: 'https://www.oxfamindia.org/inequality-report'
      },
    ]
  },

  // ── Named individuals ──────────────────────────────────────────────────────
  {
    color: [255, 195, 175],
    count: 1,
    sizeMult: 5,
    freq: 369.9,
    wave: 'sawtooth',
    facts: [
      'Modi — claimed Muslim "infiltrators" threaten security of "our sisters and daughters".',
      '90% of religion-based hate crimes occurred after Modi\'s BJP came to power in 2014.',
    ],
    sources: [
      {label: 'Modi Hate Speech — The Wire', url: 'https://thewire.in'},
      {
        label: 'Religion-Based Hate Crimes After 2014 — Ballard Brief',
        url: 'https://ballardbrief.byu.edu/issue-briefs/the-2002-gujarat-riots'
      },
    ]
  },
  {
    color: [245, 170, 170],
    count: 1,
    sizeMult: 5,
    freq: 349.2,
    wave: 'sawtooth',
    facts: [
      'Amit Shah — presented Maharashtra Bhushan awards where 12 died of heatstroke.',
    ],
    sources: [
      {
        label: 'Maharashtra Bhushan Heatstroke Deaths — Indian Express',
        url: 'https://indianexpress.com'
      },
      {label: 'Amit Shah at Ceremony — NDTV', url: 'https://www.ndtv.com'},
    ]
  },
  {
    color: [250, 235, 175],
    count: 1,
    sizeMult: 6,
    freq: 523.3,
    wave: 'sawtooth',
    facts: [
      'Adani — doubling coal-power to 38 GW. Will burn 155 MT of coal per annum.',
      'CO₂ emissions will exceed 200 MT per annum. World\'s biggest private coal developer.',
    ],
    sources: [
      {
        label: 'Adani Coal Expansion — AdaniWatch',
        url: 'https://adaniwatch.org'
      },
      {
        label: 'Adani Coal Power Analysis — The Guardian',
        url: 'https://www.theguardian.com/environment/adani'
      },
    ]
  },
  {
    color: [245, 240, 165],
    count: 1,
    sizeMult: 6,
    freq: 493.9,
    wave: 'sawtooth',
    facts: [
      'Ambani — ₹9.5 lakh crore in wealth. India\'s wealthiest individual.',
      '358 billionaires own ~$1.9T — more than the bottom 50% of India combined.',
    ],
    sources: [
      {
        label: 'India Records 358 Billionaires — Business Standard',
        url:
            'https://www.business-standard.com/finance/personal-finance/india-records-358-billionaires-ambani-keads-with-9-5-lakh-cr-wealth-125100100522_1.html'
      },
    ]
  },
  {
    color: [220, 185, 185],
    count: 1,
    sizeMult: 3,
    freq: 277.2,
    wave: 'sawtooth',
    facts: [
      'Dinesh Kushwaha — BJP leader assaulted 65-year-old Bhawarlal Jain, mistaking him for Muslim. Jain died.',
    ],
    sources: [
      {label: 'Kushwaha Assault — The Wire', url: 'https://thewire.in'},
      {label: 'Bhawarlal Jain Death — NDTV', url: 'https://www.ndtv.com'},
    ]
  },
  {
    color: [225, 180, 180],
    count: 1,
    sizeMult: 3,
    freq: 261.6,
    wave: 'sawtooth',
    facts: [
      'Haribhushan Thakur Bachaul — BJP MLA: "Muslims should be set ablaze like Ravana effigies."',
    ],
    sources: [
      {label: 'BJP MLA Hate Speech — The Wire', url: 'https://thewire.in'},
      {label: 'Communal Hate Speech — NDTV', url: 'https://www.ndtv.com'},
    ]
  },

  // ── LGBTQ+ community ──────────────────────────────────────────────────────
  // index 22
  {
    color: [210, 190, 255],
    count: 60,
    freq: 174.6,
    wave: 'triangle',
    facts: [
      'Section 377 of the IPC criminalized consensual same-sex relations for 158 years, until struck down in 2018.',
      'In 2023 the Supreme Court declined to legalise same-sex marriage, leaving couples with no legal recognition.',
      'The Transgender Persons (Protection of Rights) Act 2019 was widely criticised for requiring state certification of gender identity.',
      'Hijra and other gender-diverse communities face systematic exclusion from employment, healthcare, and housing.',
      'LGBTQ+ Dalits and Adivasis face compounded discrimination — caste, class, and sexuality intersect violently.',
      'Conversion therapy — banned in India as a punishable offence.',
    ],
    sources: [
      {
        label:
            'Navtej Singh Johar v. Union of India (2018) — Supreme Court of India',
        url:
            'https://main.sci.gov.in/supremecourt/2016/7929/7929_2016_Judgement_06-Sep-2018.pdf'
      },
      {
        label:
            'Same-Sex Marriage Ruling (2023) — Supriya Chakraborty v. UoI — The Hindu',
        url:
            'https://www.thehindu.com/news/national/supreme-court-same-sex-marriage-verdict/article67461150.ece'
      },
      {
        label: 'NALSA v. Union of India (2014) — Transgender Rights Judgment',
        url: 'https://main.sci.gov.in/jonew/judis/41411.pdf'
      },
      {
        label: 'Transgender Persons Act 2019 — Human Rights Watch',
        url: 'https://www.hrw.org/news/2019/12/02/india-transgender-bill-flawed'
      },
      {
        label: 'ILGA World — State-Sponsored Homophobia Report',
        url: 'https://ilga.org/state-sponsored-homophobia-report'
      },
      {
        label: 'LGBTQ+ Rights in India — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/LGBT_rights_in_India'
      },
    ]
  },
];

// ── Audio — F# minor 7 pad synthesizer (persistent oscillator pool) ────────
let audioCtx = null;
let oscPool = [];  // 6 always-running {osc, gain} pairs

// Mid-range root per group (200–600 Hz, F# natural minor scale).
// Bass oscillators are always added separately below 150 Hz.
const GROUP_ROOTS = [
  207.65,  // 0  Scheduled Tribes    G#3
  207.65,  // 1  Dalits              G#3
  220.00,  // 2  Shudras             A3
  246.94,  // 3  OBCs                B3
  293.66,  // 4  General Category    D4
  370.00,  // 5  Brahmins            F#4
  415.30,  // 6  Kshatriyas          G#4
  329.63,  // 7  Vaishyas            E4
  220.00,  // 8  Muslims             A3
  246.94,  // 9  Hindus              B3
  220.00,  // 10 Christians          A3
  329.63,  // 11 Cow vigilantes      E4
  370.00,  // 12 BJP hardliners      F#4
  493.88,  // 13 Billionaires        B4
  415.30,  // 14 Modi                G#4
  370.00,  // 15 Amit Shah           F#4
  554.37,  // 16 Adani               C#5
  493.88,  // 17 Ambani              B4
  293.66,  // 18 Kushwaha            D4
  277.18,  // 19 Bachaul             C#4
  207.65,  // 20 LGBTQ+              G#3
];

// F# minor 7 chord tones in semitones: root, m3, P5, m7
const FM7_SEMITONES = [0, 3, 7, 10];

// Bass oscillators: always-present F# minor notes below 150 Hz
const BASS_FREQS = [92.50, 110.00];  // F#2, A2

function initAudio() {
  if (audioCtx) {
    // iOS Safari suspends AudioContext between gestures — always try to resume
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  // webkitAudioContext fallback for older iOS Safari
  const AC = window.AudioContext || window['webkitAudioContext'];
  audioCtx = new AC();
  audioCtx.resume();  // iOS requires explicit resume even inside a gesture handler
  // 2 bass oscillators (indices 0–1) + 4 mid oscillators (indices 2–5)
  for (let i = 0; i < 6; i++) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = i < 2 ? BASS_FREQS[i] : 220.00;
    gainNode.gain.value = 0;
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    oscPool.push({osc, gain: gainNode});
  }
}

function stopAllTones() {
  if (!oscPool.length) return;
  const now = audioCtx.currentTime;
  for (const {gain} of oscPool) {
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.8);
  }
}

// Layout: oscillators 0–1 = bass (<150 Hz), oscillators 2–5 = mid (200–600 Hz).
// Bass: 1 osc always, 2 when layers >= 4.
// Mid: remaining layers, chord tones octave-folded into 200–600 Hz.
function playPad(gi, durationSec = 7) {
  initAudio();

  const g = GROUPS[gi];
  const now = audioCtx.currentTime;
  const midRoot = GROUP_ROOTS[gi] || 220.00;

  const layers = Math.min(6, Math.max(1, Math.ceil(g.count / 30)));
  const numBass = layers >= 4 ? 2 : 1;
  const numMid = layers - numBass;

  const peakVol = 0.042 / Math.sqrt(layers);
  const glideTime = 0.9;
  const attackTime = 1.5;
  const releaseTime = 2.0;

  for (let i = 0; i < 6; i++) {
    const {osc, gain} = oscPool[i];
    gain.gain.cancelScheduledValues(now);
    osc.frequency.cancelScheduledValues(now);

    if (i < numBass) {
      // Bass layer — fixed F# minor notes below 150 Hz, glide to target
      const targetFreq = BASS_FREQS[i];
      osc.frequency.setValueAtTime(osc.frequency.value, now);
      osc.frequency.exponentialRampToValueAtTime(targetFreq, now + glideTime);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(peakVol * 0.75, now + attackTime);
      gain.gain.setValueAtTime(peakVol * 0.75, now + durationSec - releaseTime);
      gain.gain.linearRampToValueAtTime(0, now + durationSec);

    } else if (i < layers) {
      // Mid layer — FM7 chord tone, octave-folded into 200–600 Hz
      const midIdx = i - numBass;
      const semitones = FM7_SEMITONES[midIdx % FM7_SEMITONES.length];
      let targetFreq = midRoot * Math.pow(2, semitones / 12);
      // Fold into 200–600 Hz
      while (targetFreq > 600) targetFreq /= 2;
      while (targetFreq < 200) targetFreq *= 2;
      // Gentle detune spread across mid layers (±6 cents max)
      const detuneCents =
          numMid > 1 ? (midIdx - (numMid - 1) / 2) * (12 / (numMid - 1)) : 0;
      targetFreq *= Math.pow(2, detuneCents / 1200);

      osc.frequency.setValueAtTime(osc.frequency.value, now);
      osc.frequency.exponentialRampToValueAtTime(targetFreq, now + glideTime);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(peakVol, now + attackTime);
      gain.gain.setValueAtTime(peakVol, now + durationSec - releaseTime);
      gain.gain.linearRampToValueAtTime(0, now + durationSec);

    } else {
      // Unused layer: fade out
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.5);
    }
  }
}

// ── Group names (parallel to GROUPS array) ────────────────────────────────
const GROUP_NAMES = [
  'Scheduled Tribes',
  'Dalits / SCs',
  'Shudras',
  'OBCs',
  'General Category',
  'Brahmins',
  'Kshatriyas',
  'Vaishyas',
  'Muslims',
  'Hindus',
  'Christians',
  'Cow Vigilantes',
  'BJP Hardliners',
  'Billionaires',
  'Modi',
  'Amit Shah',
  'Adani',
  'Ambani',
  'Kushwaha',
  'Bachaul',
  'LGBTQ+',
];

// ── Power relations (group index → indices it oppresses) ───────────────────
const OPPRESSES = {
  5: [0, 1, 2, 3, 20],  // Brahmins       → STs, Dalits, Shudras, OBCs, LGBTQ+
  6: [0, 1, 2, 3],      // Kshatriyas     → lower castes
  7: [0, 1, 2, 3],      // Vaishyas       → lower castes
  9: [8, 10, 20],       // Hindus (majority) → Muslims, Christians, LGBTQ+
  11: [8],              // Cow vigilantes  → Muslims
  12: [8, 10, 20],      // BJP hardliners  → Muslims, Christians, LGBTQ+
  13: [0, 1, 2, 3],     // Billionaires    → poor groups
  14: [8, 0, 1, 2],     // Modi            → Muslims, lower castes
  15: [8, 0, 1, 2],     // Amit Shah       → Muslims, lower castes
  16: [0, 1, 2, 3],     // Adani           → working poor
  17: [0, 1, 2, 3],     // Ambani          → working poor
  18: [8],              // Kushwaha        → Muslims
  19: [8],              // Bachaul         → Muslims
};

// Reverse: oppressed[gi] = list of group indices that oppress gi
const OPPRESSED_BY = {};
for (const [opp, victims] of Object.entries(OPPRESSES)) {
  for (const v of victims) {
    (OPPRESSED_BY[v] = OPPRESSED_BY[v] || []).push(+opp);
  }
}

function setScales(gi) {
  const victims = OPPRESSES[gi] || [];
  const oppressors = OPPRESSED_BY[gi] || [];
  const targets = {};

  if (victims.length) {
    // Clicked oppressor: it swells, victims shrink
    targets[gi] = 2.4;
    victims.forEach(v => targets[v] = 0.3);
  } else if (oppressors.length) {
    // Clicked oppressed group: it shrinks, oppressors loom large
    targets[gi] = 0.35;
    oppressors.forEach(o => targets[o] = 2.2);
  } else {
    targets[gi] = 1.7;
  }

  for (const b of boids) b.targetScale = targets[b.groupId] ?? 1.0;
}

function resetScales() {
  for (const b of boids) b.targetScale = 1.0;
}

// ── Sources overlay (HTML, so links are real and clickable) ───────────────
let lastClickedGi = null;
let sourcesVisible = false;

function showSources(gi) {
  hideSources();
  const g = GROUPS[gi];
  const [r, gv, bl] = g.color;
  const col = `rgb(${r},${gv},${bl})`;

  // Inject keyframe once
  if (!document.getElementById('src-style')) {
    const s = document.createElement('style');
    s.id = 'src-style';
    s.textContent = `
      @keyframes srcFadeIn { from { opacity:0; transform:translate(-50%,-46%); } to { opacity:1; transform:translate(-50%,-50%); } }
      #sources-panel a:hover { opacity: 1 !important; text-decoration: underline; }
    `;
    document.head.appendChild(s);
  }

  const div = document.createElement('div');
  div.id = 'sources-panel';
  div.style.cssText = `
    position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    background:rgba(6,6,12,0.97); border:1px solid ${col}33;
    border-left:3px solid ${col}; border-radius:8px;
    padding:24px 28px; max-width:500px; width:90%;
    font-family:'Courier New',monospace; font-size:12px; color:${col};
    z-index:1000; animation:srcFadeIn 0.25s ease; box-sizing:border-box;
  `;

  div.innerHTML =
      `
    <div style="font-size:9px;letter-spacing:2px;opacity:0.4;margin-bottom:18px;text-transform:uppercase;">
      SOURCES — press S to close
    </div>
    ${
          g.sources
              .map(
                  s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         style="display:block;color:${
                      col};text-decoration:none;margin-bottom:12px;
                line-height:1.55;opacity:0.8;font-size:11px;">
        ↗ ${s.label}
      </a>`).join('')}
    <div id="src-close"
         style="margin-top:18px;opacity:0.3;cursor:pointer;font-size:9px;letter-spacing:1px;">
      × CLOSE
    </div>
  `;

  document.body.appendChild(div);
  document.getElementById('src-close').addEventListener('click', hideSources);
  sourcesVisible = true;
}

function hideSources() {
  const el = document.getElementById('sources-panel');
  if (el) el.remove();
  sourcesVisible = false;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    if (sourcesVisible)
      hideSources();
    else if (lastClickedGi !== null)
      showSources(lastClickedGi);
  }
}

// ── State ──────────────────────────────────────────────────────────────────
let boids = [];
let centers = [];
let panel = null;

// ── Setup ──────────────────────────────────────────────────────────────────
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  init();
  loop();  // keep looping so the first-visit hint can pulse; noLoop() called once settled
}

function init() {
  placeCenters();
  spawnBoids();
}

function placeCenters() {
  centers = [];
  const minD = Math.min(width, height) * 0.12;
  let tries = 0, i = 0;
  while (i < GROUPS.length && tries < 5000) {
    const x = random(width * 0.05, width * 0.95);
    const y = random(height * 0.05, height * 0.95);
    let ok = true;
    for (const c of centers) {
      if (dist(x, y, c.x, c.y) < minD) {
        ok = false;
        break;
      }
    }
    if (ok) {
      centers.push({x, y});
      i++;
    }
    tries++;
  }
  while (centers.length < GROUPS.length) {
    centers.push({x: random(width), y: random(height)});
  }
}

function spawnBoids() {
  boids = [];
  GROUPS.forEach((g, gi) => {
    const cx = centers[gi].x;
    const cy = centers[gi].y;
    const sm = g.sizeMult || 1;
    const spread = g.count === 1 ? 0 : sqrt(g.count) * 12;

    for (let i = 0; i < g.count; i++) {
      const angle = random(TWO_PI);
      const r = spread * sqrt(random());
      const verts = 24;
      const jitter = Array.from({length: verts}, () => random(0.88, 1.12));
      boids.push({
        x: cx + cos(angle) * r,
        y: cy + sin(angle) * r,
        sz: random(2.5, 5.5) * sm,
        rot: random(TWO_PI),
        col: g.color,
        circle: g.sizeMult != null,
        groupId: gi,
        jitter,
        verts,
        scale: 1.0,
        targetScale: 1.0,
      });
    }
  });
}

// ── Draw ───────────────────────────────────────────────────────────────────
function draw() {
  background(10, 10, 15);

  let allSettled = true;
  for (const b of boids) {
    // Lerp scale toward target
    b.scale += (b.targetScale - b.scale) * 0.06;
    if (Math.abs(b.scale - b.targetScale) > 0.005) allSettled = false;

    const [r, g, bl] = b.col;
    // Opacity: swelling boids brighten, shrinking ones fade
    const baseAlpha = b.circle ? 185 : 165;
    const alpha = baseAlpha * constrain(b.scale * 0.7 + 0.3, 0.15, 1.4);

    noFill();
    push();
    translate(b.x, b.y);
    rotate(b.rot);
    scale(b.scale);
    stroke(r, g, bl, alpha);
    strokeWeight(b.circle ? b.sz * 0.28 : 0.9);

    beginShape();
    for (let a = -3; a < b.verts + 3; a++) {
      const idx = ((a % b.verts) + b.verts) % b.verts;
      const theta = TWO_PI / b.verts * idx;
      const rad = b.sz * b.jitter[idx];
      curveVertex(cos(theta) * rad, sin(theta) * rad);
    }
    endShape();
    pop();
  }

  // First-visit hint
  if (firstTouch) {
    const hint = 'tap to explore';
    const pulse = 0.55 + 0.45 * sin(frameCount * 0.06);
    noStroke();
    textFont('Courier New');
    textSize(11);
    textAlign(CENTER, BOTTOM);
    fill(200, 200, 200, 160 * pulse);
    text(hint, width / 2, height - 22);
  }

  if (panel) {
    panel.update();
    panel.render();
    if (panel.done) {
      panel = null;
      resetScales();
    }
  } else if (allSettled) {
    noLoop();
  }
}

// ── Interaction ────────────────────────────────────────────────────────────
let firstTouch = true;

function handleInteraction(px, py) {
  firstTouch = false;
  let nearestGi = 0, nearestD = Infinity;
  centers.forEach((c, i) => {
    const d = dist(px, py, c.x, c.y);
    if (d < nearestD) {
      nearestD = d;
      nearestGi = i;
    }
  });

  lastClickedGi = nearestGi;
  hideSources();
  const g = GROUPS[nearestGi];
  const dur = 6 + g.facts.length * 1.5;
  playPad(nearestGi, dur);
  setScales(nearestGi);
  panel = new Panel(px, py, g.color, g.facts, dur, GROUP_NAMES[nearestGi]);
  loop();
}

// Desktop click
function mousePressed() {
  if (touches.length === 0) handleInteraction(mouseX, mouseY);
}

// Mobile touch — return false prevents scroll and stops mouse event double-fire
function touchStarted() {
  if (touches.length > 0) handleInteraction(touches[0].x, touches[0].y);
  return false;
}

// ── Panel ──────────────────────────────────────────────────────────────────
const PW = 330;
const PH = 17;
const PP = 18;

class Panel {
  constructor(x, y, col, facts, holdSec, groupName) {
    this.col = col;
    this.facts = facts;
    this.groupName = groupName || '';
    this.alpha = 0;
    this.slide = 12;
    this.state = 'in';
    this.hold = 0;
    this.holdMax = holdSec * 30;
    this.done = false;

    const lines =
        facts.reduce((acc, f) => acc + Math.ceil(f.length / 44) + 0.5, 0);
    this.h = PP * 2 + 14 + lines * PH + 8;  // +14 for group name header
    this.x = constrain(x, PP, width - PW - PP);
    this.y = constrain(y, PP, height - this.h - PP);
  }

  update() {
    if (this.state === 'in') {
      this.alpha += 10;
      this.slide = max(0, this.slide - 1.2);
      if (this.alpha >= 235) {
        this.alpha = 235;
        this.state = 'hold';
      }
    } else if (this.state === 'hold') {
      this.hold++;
      if (this.hold > this.holdMax) this.state = 'out';
    } else {
      this.alpha -= 6;
      this.slide = min(12, this.slide + 0.8);
      if (this.alpha <= 0) {
        this.alpha = 0;
        this.done = true;
        stopAllTones();
      }
    }
  }

  render() {
    const [r, g, bl] = this.col;
    const al = this.alpha;
    const py = this.y + this.slide;

    push();
    noStroke();
    fill(8, 8, 14, al * 0.93);
    rect(this.x, py, PW, this.h, 5);

    // Accent bar
    fill(r, g, bl, al);
    rect(this.x, py, 3, this.h, 5, 0, 0, 5);

    // Group name header
    textFont('Courier New');
    textAlign(LEFT, TOP);
    textSize(9);
    fill(r, g, bl, al * 0.45);
    text(this.groupName.toUpperCase(), this.x + PP, py + PP - 2);

    // Facts
    textSize(11);
    textLeading(PH);
    let ty = py + PP + 14;
    for (const fact of this.facts) {
      fill(r, g, bl, al * 0.92);
      text(fact, this.x + PP, ty, PW - PP * 2 - 4);
      ty += Math.ceil(fact.length / 44) * PH + 8;
    }

    // Footer — citation prompt
    fill(r, g, bl, al * 0.35);
    textSize(9);
    textAlign(RIGHT, BOTTOM);
    text('S — sources & citations', this.x + PW - PP * 0.5, py + this.h - 6);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init();
  redraw();
}

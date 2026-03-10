// ── Middle East Escalation: February 28 – March 9, 2026 ───────────────────────
// Objective data extracted from facts.md and official sources
// Each party represented by boid count proportional to involvement level
const GROUPS = [
  {
    name: 'United States',
    color: [200, 220, 100],
    count: 140,
    freq: 329.6,
    wave: 'sawtooth',
    facts: [
      'Co-launched major military operation with Israel on February 28, 2026.',
      'US forces struck more than 3,000 targets in Iran since February 28.',
      'Sank Iranian warship IRIS Dena in Indian Ocean near Sri Lanka on March 2, 2026. Sri Lankan Navy recovered 80+ bodies and 32 survivors; 100+ missing.',
      'Trump administration demanded Iran\'s nuclear disarmament as defensive measure.',
      'Trump demanded unconditional surrender from Iran and stated new Iranian leader must receive US approval.',
    ],
    sources: [
      {
        label: 'US-Israel attacks on Iran: Death toll and injuries live tracker — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker'
      },
      {
        label: 'India offered sanctuary to Iranian ship three days before US sank it — BBC News',
        url: 'https://www.bbc.com/news/articles/c2e4yxj0pd3o'
      },
      {
        label: 'The final voyage of the Iranian warship sunk by the US — BBC News',
        url: 'https://www.bbc.com/news/articles/c4geelnw7w3o'
      },
      {
        label: 'Is the Iran war really costing the US $2bn per day? — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/is-the-iran-war-really-costing-the-us-2bn-per-day'
      },
    ]
  },
  {
    name: 'Iran',
    color: [150, 100, 200],
    count: 130,
    freq: 220.0,
    wave: 'triangle',
    facts: [
      '1,255 deaths as of March 9, 2026 from US-Israel strikes.',
      'Supreme Leader Ali Khamenei assassinated in strikes. Son Mojtaba Khamenei declared as 3rd supreme leader.',
      'Minab girls\' school hit on February 28; at least 168 killed including children.',
      'Fuel depots hit in Tehran and Karaj according to Iran\'s oil ministry.',
      'Carried out retaliatory strikes on Saudi Arabia, UAE, Qatar, Oman, Iraq, Kuwait, and Turkey.',
      'Fired 174 ballistic missiles (161 intercepted, 13 fell into sea); launched 689 UAVs (645 intercepted, 44 caused impact); fired 8 cruise missiles (all intercepted).',
    ],
    sources: [
      {
        label: 'US-Israel attacks on Iran: Death toll and injuries live tracker — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker'
      },
    ]
  },
  {
    name: 'Israel',
    color: [100, 150, 220],
    count: 120,
    freq: 246.9,
    wave: 'sawtooth',
    facts: [
      'Israel Defense Forces conducted approximately 3,400 strikes and disabled more than 150 Iranian defense systems as of March 9.',
      'Sent foot soldiers into South Lebanon and carried out airstrikes killing dozens according to Lebanese health officials.',
      'Coordinated major military operation with US launched February 28, 2026.',
      'Israeli special forces raid on Lebanese village killed 41+ civilians; 40+ wounded.',
      'Issued evacuation orders for residents in southern Lebanon, urging movement north of the Litani River causing massive displacement.',
      'Human Rights Watch found evidence Israel used white phosphorus in residential areas of southern Lebanon in violation of international humanitarian law.',
    ],
    sources: [
      {
        label: 'In maps: Ten days of strikes across the Middle East — BBC News',
        url: 'https://www.bbc.com/news/articles/c4g0pnnj8xyo'
      },
      {
        label: 'Dozens killed as Israeli special forces raid Lebanese village — BBC News',
        url: 'https://www.bbc.com/news/articles/cy8l2p2l3v0o'
      },
      {
        label: 'US missile hit military base near Iran school, video analysis shows — BBC Verify',
        url: 'https://www.bbc.com/news/articles/cvg548lyjnyo'
      },
      {
        label: 'Hezbollah launches new salvo of rockets at Israel — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/2/hezbollah-launches-new-salvo-of-rockets-at-israel'
      },
    ]
  },
  {
    name: 'Lebanon',
    color: [180, 140, 100],
    count: 80,
    freq: 174.6,
    wave: 'triangle',
    facts: [
      '486 people killed as of March 9, 2026 due to Israeli strikes according to Lebanese Health Ministry.',
      'More than 700,000 people displaced from the starting of the war.',
      'Hezbollah launched rocket and drone attack on military site in Haifa, Israel on March 2, marking first direct strike since November 2024 ceasefire.',
      'Israeli strikes hit apartment in Ramada Hotel building in Raouche district of Beirut killing at least 4 people and wounding 10 others.',
      'Lebanon experiencing intense military escalation with Israeli airstrikes across the country, particularly targeting southern Beirut suburbs and southern Lebanon.',
    ],
    sources: [
      {
        label: 'Almost 700,000 displaced in Lebanon as war enters second week — UN News',
        url: 'https://news.un.org/en/story/2026/03/1167098'
      },
      {
        label: '\'We couldn\'t sleep because of fear\': Residents flee as Israel pounds south Beirut — BBC',
        url: 'https://www.bbc.com/news/articles/cwy9xlp46zgo'
      },
      {
        label: 'Israel strikes Hezbollah financial institutions as Lebanon calls for talks — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/israel-strikes-hezbollah-financial-institutions-as-lebanon-calls-for-talks'
      },
    ]
  },
  {
    name: 'Iraq',
    color: [160, 120, 100],
    count: 80,
    freq: 195.0,
    wave: 'triangle',
    facts: [
      'Iraq\'s Prime Minister told US Secretary of State Marco Rubio that Iraq should not be used as launchpad for attacks in Middle East war.',
      'Iran-backed Kataib Imam Ali group reported 4 members killed and 12 injured in US air attacks in northern Iraq.',
      'Iranian Revolutionary Guards stated they targeted Al-Harir Air Base in Kurdistan region with five missiles.',
      'Wissam Yassin, digital marketer in Iraq, noted Shiite community views Iran weakening as existential threat to political power.',
      'Sunni community perceives war as opportunity to rearrange political landscape as Iranian influence on Iraq weakens.',
    ],
    sources: [
      {
        label: 'Iraq warns against becoming theater for regional conflict — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/4/iraq-warns-against-becoming-theater-for-regional-conflict'
      },
      {
        label: 'Kataib Imam Ali: Members killed in US strikes — Telegram statement',
        url: 'https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker'
      },
      {
        label: 'Iraq divided: Sectarian tensions rise amid Iran-US conflict — DW',
        url: 'https://www.dw.com/en/iraq-divided-sectarian-tensions-rise-amid-iran-us-conflict/a-67032581'
      },
    ]
  },
  {
    name: 'Saudi Arabia',
    color: [200, 80, 100],
    count: 60,
    freq: 164.8,
    wave: 'triangle',
    facts: [
      'Targeted by Iranian retaliatory strikes for hosting US military bases.',
      'Saudi Ministry of Defense reported destruction of 2 Iranian drones over kingdom\'s oil-rich eastern region.',
      'Oil refineries including Shahbah oilfield hit by incoming Iranian drones.',
      'Saudi kingdom declared Iran\'s attacks on civilian infrastructure—oil facilities, desalination plants, and CIA headquarters in Riyadh—have crossed critical red line.',
      'Iranian missile attack hit US base in Saudi Arabia; US soldier died from wounds sustained 8 days later.',
      'Iranian drone strike hit residential building in Al-Kharj killing 2 people of Indian and Bangladeshi nationalities and injuring 12 others.',
    ],
    sources: [
      {
        label: '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
      },
      {
        label: 'Saudi Arabia declares Iran attacks crossed red line — Reuters',
        url: 'https://www.reuters.com/world/middle-east/saudi-arabia-declares-iran-attacks-crossed-red-line-2026-03-09/'
      },
    ]
  },
  {
    name: 'United Arab Emirates',
    color: [220, 140, 100],
    count: 60,
    freq: 185.0,
    wave: 'triangle',
    facts: [
      'Targeted by Iranian retaliatory strikes for hosting US military bases.',
      'Iranian drones hit hotels Burj al Arab and Fairmont The Palm Dubai, Dubai International Airport, and residential areas.',
      'Dubai International Airport operating with limited resumption of flights following temporary suspension due to regional security concerns.',
      'Zayed International Airport in Abu Dhabi partially operational as of March 10, 2026 following disruptions from Iran-Israel-US conflict.',
      'UAE Consulate in Erbil targeted by drone strike resulting in material damage but no reported injuries.',
      'Member of Federal National Council refuted reports of attack on Iran\'s desalination plant, emphasizing UAE will not treat Iranian people as regime has acted.',
    ],
    sources: [
      {
        label: '2026 Iranian strikes on the United Arab Emirates — Wikipedia',
        url: 'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates'
      },
    ]
  },
  {
    name: 'Qatar',
    color: [200, 160, 80],
    count: 50,
    freq: 196.0,
    wave: 'sine',
    facts: [
      'Targeted by Iranian retaliatory strikes for hosting US military bases.',
      'Qatar\'s Ministry of Interior reported 66 Iranian missiles targeted Qatar, which were intercepted.',
      'Debris from intercepted missiles caused 16 injuries.',
      'Qatar hosts major US military installations and major LNG export facilities threatened by conflict.',
    ],
    sources: [
      {
        label: '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
      },
      {
        label: 'US-Israel attacks on Iran: Death toll and injuries live tracker — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker'
      },
    ]
  },
  {
    name: 'Oman',
    color: [160, 150, 100],
    count: 40,
    freq: 164.0,
    wave: 'sine',
    facts: [
      'Targeted by Iranian retaliatory strikes for hosting US military bases.',
      'Hosted multiple rounds of nuclear and political talks between US and Iran; two countries have had no formal diplomatic relations since April 7, 1980.',
      'Omani Minister of Foreign Affairs Badr al-Busaidi, who mediated US-Iran talks before war, stated diplomatic options remain available to de-escalate Middle East situation.',
      'Two Iranian drones hit Duqm Port in Al Wusta Governorate with one striking mobile workers\' housing unit.',
      'Oil tanker flying Marshall Islands flag attacked by Iranian drone boat.',
      'Fuel tank at Duqm Port hit by several unmanned aircraft on March 3.',
    ],
    sources: [
      {
        label: '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
      },
      {
        label: 'Oman calls for dialogue amid escalating Middle East tensions — Middle East Monitor',
        url: 'https://www.middleeastmonitor.com/20260309-oman-calls-for-dialogue-amid-escalating-middle-east-tensions'
      },
    ]
  },
  {
    name: 'Turkey',
    color: [200, 120, 100],
    count: 40,
    freq: 207.65,
    wave: 'sine',
    facts: [
      'Targeted by Iranian retaliatory strikes.',
      'Iranian missiles and drones penetrated Turkish airspace.',
      'President Erdogan told Iranian President Pezeshkian that airspace violation "cannot be excused for any reason whatsoever."',
      'Erdogan stated Turkey will continue to take all necessary measures against airspace violations.',
      'Turkey hosts US military presence and strategic importance for regional stability.',
    ],
    sources: [
      {
        label: '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
      },
      {
        label: 'Erdogan warns Iran over airspace violations — Turkish Ministry Official Statement',
        url: 'https://www.dailysabah.com/politics/2026/03/erdogan-iran-airspace-violations'
      },
    ]
  },
  {
    name: 'Kuwait',
    color: [200, 100, 100],
    count: 30,
    freq: 146.83,
    wave: 'triangle',
    facts: [
      'Targeted by Iranian retaliatory strikes for hosting US military bases.',
      'Iranian drone strike hit government high-rise; building engulfed in flames.',
      'Kuwait hosts critical US military installations.',
    ],
    sources: [
      {
        label: 'Kuwaiti government high-rise hit by Iranian drone — BBC Video',
        url: 'https://www.bbc.com/news/videos/c9wnex8g5dyo'
      },
      {
        label: '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
        url: 'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
      },
    ]
  },
];

// ── Audio — F# minor 7 pad synthesizer (persistent oscillator pool) ────────
let audioCtx = null;
let oscPool = [];  // 6 always-running {osc, gain} pairs

// Frequencies extracted from GROUPS array—no need for separate mapping

// F# minor 7 chord tones in semitones: root, m3, P5, m7
const FM7_SEMITONES = [0, 3, 7, 10];

// Bass oscillators: always-present F# minor notes below 150 Hz
const BASS_FREQS = [92.50, 110.00];  // F#2, A2

function initAudio() {
  if (audioCtx) {
    // iOS Safari suspends AudioContext between gestures — always try to
    // resume
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  // webkitAudioContext fallback for older iOS Safari
  const AC = window.AudioContext || window['webkitAudioContext'];
  audioCtx = new AC();
  audioCtx.resume();  // iOS requires explicit resume even inside a gesture
                      // handler
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
  const midRoot = g.freq || 220.00;

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

// ── Conflict Relations (group index → indices affected by/related to this group) ─
// When user clicks a party, related parties are highlighted
// Based on direct mentions in facts.md and documented military/diplomatic involvement
const AFFECTS = {
  0: [1, 3, 4, 5, 6, 7, 8, 9],     // USA attacks/coordinates with Israel → Iran, Lebanon, Iraq, Saudi Arabia, UAE, Qatar, Oman, Turkey
  1: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Iran strikes → USA, Israel, Lebanon, Iraq, Saudi Arabia, UAE, Qatar, Oman, Turkey, Kuwait
  2: [1, 3, 4, 5],                 // Israel strikes → Iran, Lebanon, Iraq, Saudi Arabia (likely through drone/missile intelligence)
  3: [0, 2],                       // Lebanon (Hezbollah) → USA, Israel (direct retaliation)
  4: [0, 1, 2],                    // Iraq → USA, Iran, Israel (caught in middle)
  5: [1, 0],                       // Saudi Arabia affected by → Iran, USA (hosts bases, targeted)
  6: [1, 0],                       // UAE affected by → Iran, USA (hosts bases, targeted)
  7: [1, 0],                       // Qatar affected by → Iran, USA (hosts bases, targeted)
  8: [1, 0],                       // Oman affected by → Iran, USA (hosts bases, targeted)
  9: [1, 0],                       // Turkey affected by → Iran, USA (airspace violated)
  10: [1, 0],                      // Kuwait affected by → Iran, USA (hosts bases, targeted)
};

// Reverse: who affects each party
const AFFECTED_BY = {};
for (const [actor, affected] of Object.entries(AFFECTS)) {
  for (const party of affected) {
    (AFFECTED_BY[party] = AFFECTED_BY[party] || []).push(+actor);
  }
}

function setScales(gi) {
  const affected = AFFECTS[gi] || [];
  const affectedBy = AFFECTED_BY[gi] || [];
  const targets = {};

  if (affected.length) {
    // Clicked actor: highlight self (brightest) and all affected parties (dim)
    targets[gi] = 2.5;  // Selected group - brightest
    affected.forEach(v => targets[v] = 1.2);  // Related parties - dim
  } else if (affectedBy.length) {
    // Clicked affected party: highlight self (brightest) and all actors affecting it (dim)
    targets[gi] = 2.5;  // Selected group - brightest
    affectedBy.forEach(o => targets[o] = 1.2);  // Related parties - dim
  } else {
    targets[gi] = 2.5;  // Fallback: brightest
  }

  // Hide all other groups completely
  for (let i = 0; i < GROUPS.length; i++) {
    if (!(i === gi || affected.includes(i) || affectedBy.includes(i))) {
      targets[i] = 0;  // Invisible
    }
  }

  for (const b of boids) b.targetScale = targets[b.groupId] ?? 0;
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
      #sources-panel a { pointer-events: auto !important; }
      #sources-panel a:hover { opacity: 1 !important; text-decoration: underline; cursor: pointer; }
    `;
    document.head.appendChild(s);
  }

  const div = document.createElement('div');
  div.id = 'sources-panel';
  div.style.cssText = `
    position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
    background:rgba(6,6,12,0.98); border:1px solid ${col}33;
    border-left:3px solid ${col}; border-radius:8px;
    padding:24px 28px; max-width:550px; width:90%; max-height:70vh;
    font-family:'Courier New',monospace; font-size:12px; color:${col};
    z-index:2000; animation:srcFadeIn 0.25s ease; box-sizing:border-box;
    overflow-y:auto; pointer-events: auto;
  `;

  const sourcesList = g.sources
      .map(
          s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         style="display:block;color:${col};text-decoration:none;margin-bottom:14px;
                line-height:1.6;opacity:0.85;font-size:11px;word-wrap:break-word;">
        ↗ ${s.label}
      </a>`).join('');

  div.innerHTML = `
    <div style="font-size:9px;letter-spacing:2px;opacity:0.5;margin-bottom:18px;text-transform:uppercase;">
      SOURCES & CITATIONS — press S to close
    </div>
    ${sourcesList}
    <div id="src-close"
         style="margin-top:18px;opacity:0.4;cursor:pointer;font-size:9px;letter-spacing:1px;padding-top:12px;border-top:1px solid ${col}22;">
      × CLOSE
    </div>
  `;

  document.body.appendChild(div);

  // Ensure all links are clickable
  const links = div.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  document.getElementById('src-close').addEventListener('click', hideSources);

  // Prevent panel from closing when clicking inside it
  div.addEventListener('click', (e) => {
    e.stopPropagation();
  });

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
  loop();  // keep looping so the first-visit hint can pulse; noLoop() called
           // once settled
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
    // Opacity: selected boids are brightest, invisible when scale=0
    const baseAlpha = b.circle ? 220 : 200;
    const alpha = baseAlpha * constrain(b.scale * 0.5 + 0.2, 0, 1.5);

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
  panel = new Panel(px, py, g.color, g.facts, dur, g.name);
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
    this.h = PP * 2 + 28 + lines * PH + 8;  // +28 for larger group name header with spacing
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
    textSize(14);
    textStyle(BOLD);
    fill(r, g, bl, al * 0.95);
    text(this.groupName.toUpperCase(), this.x + PP, py + PP - 4);

    // Facts
    textSize(11);
    textStyle(NORMAL);
    textLeading(PH);
    let ty = py + PP + 28;
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

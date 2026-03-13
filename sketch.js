// ── Middle East Escalation: February 28 – March 9, 2026
// ─────────────────────── Objective data extracted from facts.md and official
// sources Each party represented by boid count proportional to involvement
// level
const
    GROUPS =
        [
          {
            name: 'USA & Israel',
            color: [55, 100, 150],  // storm steel blue
            count: 250,
            freq: 287.0,
            wave: 'sawtooth',
            facts: [
              'Co-launched major military operation on February 28, 2026.',
              'Conducted approximately 3,400 strikes with 150+ Iranian defense systems disabled.',
              'Killed 1,255 people in Iran as of March 9, 2026, including Supreme Leader Ali Khamenei.',
              'Minab girls\' school in south Iran hit on February 28; at least 168 people including children killed.',
              'Sank Iranian warship IRIS Dena in Indian Ocean near Sri Lanka on March 2, 2026. Sri Lankan Navy recovered 80+ bodies and 32 survivors; 100+ missing.',
              'Trump administration demanded Iran\'s nuclear disarmament as defensive measure and unconditional surrender.',
              'Israeli special forces raid on Lebanese village killed 41+ civilians; 40+ wounded.',
              'US soldier died from wounds sustained in attack on US base in Saudi Arabia.',
              'Issued evacuation orders for residents in southern Lebanon, causing 700,000 displaced.',
              'Human Rights Watch found evidence Israel used white phosphorus in residential areas of southern Lebanon in violation of international humanitarian law.',
              'Marine veteran Brian McGinnis, running as Green Party candidate, protested at Capitol hearing shouting "no one wants to fight for Israel". Physically removed by police and Senator Tim Sheehy.',
            ],
            sources: [
              {
                label:
                    'Iran says 1,255 killed in US-Israeli attacks, mostly civilians — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/9/iran-says-1255-killed-in-us-israeli-attacks-mostly-civilians'
              },
              {
                label:
                    'February 28, 2026 — US-Israeli strikes on Iran (live) — CNN',
                url:
                    'https://www.cnn.com/world/live-news/israel-iran-attack-02-28-26-hnk-intl'
              },
              {
                label:
                    'US submarine sank Iran\'s warship off Sri Lanka coast — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/4/at-least-100-missing-after-iranian-military-ship-sinks-off-sri-lanka-coast'
              },
              {
                label:
                    'IRIS Dena: In torpedoing Iran warship, US Navy did something it hasn\'t done in eight decades — CNN',
                url:
                    'https://www.cnn.com/2026/03/05/middleeast/us-iran-submarine-warship-analysis-intl-hnk-ml'
              },
              {
                label:
                    'Dozens killed as Israeli commandos raid Lebanon in hunt for missing airman — CNN',
                url:
                    'https://www.cnn.com/2026/03/07/middleeast/israel-commando-raid-lebanon-airman-intl'
              },
              {
                label:
                    'US/Israel: Investigate Iran School Attack as a War Crime — Human Rights Watch',
                url:
                    'https://www.hrw.org/news/2026/03/07/us/israel-investigate-iran-school-attack-as-a-war-crime'
              },
              {
                label:
                    '\'No deal with Iran except unconditional surrender,\' Trump says — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/6/no-deal-with-iran-except-unconditional-surrender-trump-says'
              },
              {
                label:
                    'Lebanon: Israel Unlawfully Using White Phosphorus — Human Rights Watch',
                url:
                    'https://www.hrw.org/news/2026/03/09/lebanon-israel-unlawfully-using-white-phosphorus'
              },
              {
                label:
                    'Sen. Tim Sheehy forcibly removes anti-war protester who shouted, \'No one wants to fight for Israel\' — JTA',
                url:
                    'https://www.jta.org/2026/03/05/united-states/sen-tim-sheehy-forcibly-removes-anti-war-protester-who-shouted-no-one-wants-to-fight-for-israel'
              },
              {
                label:
                    'Is the Iran war really costing the US $2bn per day? — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/9/is-the-iran-war-really-costing-the-us-2bn-per-day'
              },
            ]
          },
          {
            name: 'Iran',
            color: [100, 35, 145],  // deep storm purple
            count: 130,
            freq: 220.0,
            wave: 'triangle',
            facts: [
              '1,255 deaths as of March 9, 2026 from USA-Israel strikes.',
              'Supreme Leader Ali Khamenei assassinated in strikes. Son Mojtaba Khamenei declared as 3rd supreme leader.',
              'Fuel depots hit in Tehran and Karaj according to Iran\'s oil ministry.',
              'Carried out retaliatory strikes on Saudi Arabia, UAE, Qatar, Oman, Iraq, and Turkey.',
              'Fired 174 ballistic missiles (161 intercepted, 13 fell into sea); launched 689 UAVs (645 intercepted, 44 caused impact); fired 8 cruise missiles .',
            ],
            sources: [
              {
                label:
                    'Iran says 1,255 killed in US-Israeli attacks, mostly civilians — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/9/iran-says-1255-killed-in-us-israeli-attacks-mostly-civilians'
              },
              {
                label:
                    'Iran confirms Supreme Leader Ali Khamenei dead after US-Israeli attacks — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/2/28/irans-supreme-leader-ali-khamenei-killed-in-us-israeli-attacks-reports'
              },
              {
                label:
                    'Mojtaba Khamenei named Iran\'s Supreme Leader — Democracy Now',
                url:
                    'https://www.democracynow.org/2026/3/9/headlines/mojtaba_khamenei_son_of_ayatollah_assassinated_by_us_and_israel_named_irans_supreme_leader'
              },
              {
                label:
                    'Iran Update Evening Special Report, March 3, 2026 — Critical Threats',
                url:
                    'https://www.criticalthreats.org/analysis/iran-update-evening-special-report-march-3-2026'
              },
            ]
          },
          {
            name: 'Lebanon',
            color: [170, 20, 25],  // dark crimson red
            count: 80,
            freq: 174.6,
            wave: 'triangle',
            facts: [
              '486 people killed as of March 9, 2026 due to Israeli strikes according to Lebanese Health Ministry.',
              'More than 700,000 people displaced from the starting of the war.',
              'Hezbollah launched rocket and drone attack on military site in Haifa, Israel on March 2 in retaliation for assassination of Iranian Supreme Leader, marking first direct strike since November 2024 ceasefire.',
              'Israeli strikes hit apartment in Ramada Hotel building in Raouche district of Beirut killing at least 4 people and wounding 10 others.',
              'Lebanon experiencing intense military escalation with Israeli airstrikes across the country, particularly targeting southern Beirut suburbs and southern Lebanon.',
            ],
            sources: [
              {
                label:
                    'Nearly 700,000 displaced in Lebanon as Middle East crisis escalates — UN News',
                url: 'https://news.un.org/en/story/2026/03/1167098'
              },
              {
                label:
                    'Israel kills 31 in Beirut strike following Hezbollah rocket attack — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/2/israel-bombs-beirut-after-hezbollah-launches-rocket-attack'
              },
              {
                label:
                    'IDF strikes in Beirut after Hezbollah fires rockets, drones at north — Times of Israel',
                url:
                    'https://www.timesofisrael.com/idf-strikes-targets-in-beirut-after-hezbollah-enters-fray-fires-at-northern-israel/'
              },
              {
                label:
                    'Israeli attack on hotel in Lebanon\'s Beirut kills four — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/8/israeli-strike-on-hotel-in-lebanons-beirut-kills-four-people'
              },
            ]
          },
          {
            name: 'Iraq',
            color: [20, 105, 125],  // deep storm teal
            count: 80,
            freq: 195.0,
            wave: 'triangle',
            facts: [
              'Iraq\'s Prime Minister told US Secretary of State Marco Rubio that Iraq should not be used as launchpad for attacks in Middle East war.',
              'Iran-backed Kataib Imam Ali group reported 4 members killed and 12 injured in US air attacks in northern Iraq.',
              'Iranian Revolutionary Guards stated they targeted Al-Harir Air Base in Kurdistan region with five missiles.',
              'Wissam Yassin, digital marketer in Iraq, noted Shiite community views Iran weakening as existential threat to political power in Iraq.',
              'Sunni community perceives war as opportunity to rearrange political landscape as Iranian influence on Iraq weakens.',
            ],
            sources: [
              {
                label:
                    'Air strike kills four Iran-linked fighters in Iraq — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/10/air-strike-kills-four-iran-linked-fighters-in-iraq'
              },
              {
                label:
                    'Iraq warns against becoming theater for regional conflict — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/4/iraq-warns-against-becoming-theater-for-regional-conflict'
              },
              {
                label:
                    'Why Iraq was attacked from all sides amid US-Israel war on Iran — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/11/attacks-from-all-sides-why-iraq-was-dragged-into-us-israel-war-on-iran'
              },
            ]
          },
          {
            name: 'Saudi Arabia',
            color: [160, 105, 15],  // storm amber ochre
            count: 60,
            freq: 164.8,
            wave: 'triangle',
            facts: [
              'Saudi Ministry of Defense reported destruction of 2 Iranian drones over kingdom\'s oil-rich eastern region.',
              'Oil refineries including Shahbah oilfield hit by incoming Iranian drones.',
              'Saudi kingdom declared Iran\'s attacks on civilian infrastructure—oil facilities, desalination plants, and CIA headquarters in Riyadh—have crossed critical red line.',
              'Iranian missile attack hit US base in Saudi Arabia; US soldier died from wounds sustained 8 days later.',
              'Iranian drone strike hit residential building in Al-Kharj killing 2 people of Indian and Bangladeshi nationalities and injuring 12 others.',
            ],
            sources: [
              {
                label:
                    '\'Reprehensible\': New wave of Iranian missiles, drones target Gulf nations — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations'
              },
              {
                label:
                    'More attacks on Shaybah oil field despite Saudi warnings to Iran — Al Arabiya',
                url:
                    'https://english.alarabiya.net/News/gulf/2026/03/10/more-attacks-on-shaybah-oil-field-despite-saudi-warnings-to-iran'
              },
              {
                label:
                    'Pentagon identifies soldier who died from attack on Saudi Arabia — Task & Purpose',
                url:
                    'https://taskandpurpose.com/news/7th-us-death-saudi-arabia-iran/'
              },
              {
                label: '2026 Iranian strikes on Saudi Arabia — Wikipedia',
                url:
                    'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Saudi_Arabia'
              },
            ]
          },
          {
            name: 'United Arab Emirates',
            color: [35, 55, 140],  // midnight indigo
            count: 60,
            freq: 185.0,
            wave: 'triangle',
            facts: [
              'Iranian drones hit hotels Burj al Arab and Fairmont The Palm Dubai, Dubai International Airport, and residential areas.',
              'Dubai International Airport operating with limited resumption of flights following temporary suspension due to regional security concerns.',
              'Zayed International Airport in Abu Dhabi partially operational as of March 10, 2026 following disruptions from Iran-Israel-US conflict.',
              'UAE Consulate in Erbil targeted by drone strike resulting in material damage but no reported injuries.',
              'Member of Federal National Council refuted reports of attack on Iran\'s desalination plant, emphasizing UAE will not treat Iranian people as regime has acted.',
            ],
            sources: [
              {
                label:
                    '2026 Iranian strikes on the United Arab Emirates — Wikipedia',
                url:
                    'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates'
              },
              {
                label:
                    'Iranian strikes hit Dubai and Abu Dhabi, damaging airport and Burj Al Arab — Euronews',
                url:
                    'https://www.euronews.com/2026/03/01/iranian-strikes-hit-dubai-and-abu-dhabi-damaging-airport-terminals-and-the-burj-al-arab'
              },
              {
                label:
                    'Four injured after Iranian drone strike near Dubai Airport — The National',
                url:
                    'https://www.thenationalnews.com/news/uae/2026/03/11/four-injured-after-iranian-drone-strike-near-dubai-airport/'
              },
            ]
          },
          {
            name: 'Qatar',
            color: [40, 130, 90],  // storm sea-green
            count: 50,
            freq: 196.0,
            wave: 'sine',
            facts: [
              'Qatar\'s Ministry of Interior reported 66 Iranian missiles targeted Qatar, which were intercepted.',
              'Debris from intercepted missiles caused 16 injuries.',
              'Qatar hosts major US military installations and major LNG export facilities threatened by conflict.',
            ],
            sources: [
              {
                label:
                    'Missile debris injures 16 in Qatar after Iran launches barrage — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/2/28/missile-debris-injures-eight-in-qatar-after-iran-launches-barrage'
              },
              {
                label:
                    'Qatar: Armed Forces interrupted waves of Iranian missiles — Qatar MOFA',
                url:
                    'https://mofa.gov.qa/en/qatar/latest-articles/latest-news/details/2026/03/01/ministries-of-defense--interior--foreign-affairs--armed-forces-interrupted-waves-of-iranian-missiles--no-casualties'
              },
              {
                label:
                    'Iran launches 66 missiles against Qatar: debris injures 16 — Ukrainska Pravda',
                url: 'https://www.pravda.com.ua/eng/news/2026/03/01/8023315/'
              },
            ]
          },
          {
            name: 'Oman',
            color: [200, 120, 70],  // storm bronze
            count: 40,
            freq: 164.0,
            wave: 'sine',
            facts: [
              'Hosted multiple rounds of nuclear and political talks between US and Iran; two countries have had no formal diplomatic relations since April 7, 1980.',
              'Omani Minister of Foreign Affairs Badr al-Busaidi, who mediated US-Iran talks before war, stated diplomatic options remain available to de-escalate Middle East situation.',
              'Two Iranian drones hit Duqm Port in Al Wusta Governorate with one striking mobile workers\' housing unit.',
              'Oil tanker flying Marshall Islands flag attacked by Iranian drone boat.',
              'Fuel tank at Duqm Port hit by several unmanned aircraft on March 3.',
            ],
            sources: [
              {
                label: '2026 Iranian strikes on Oman — Wikipedia',
                url:
                    'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Oman'
              },
              {
                label:
                    '1 injured in drone strike on Oman\'s Duqm port — Anadolu Agency',
                url:
                    'https://www.aa.com.tr/en/middle-east/1-injured-in-drone-strike-on-oman-s-duqm-port-amid-us-israeli-confrontation-with-iran/3844783'
              },
              {
                label:
                    'Ship crew film drone strike on oil facility at Oman\'s Salalah port — Al Jazeera',
                url:
                    'https://www.aljazeera.com/video/newsfeed/2026/3/11/ship-crew-film-drone-strike-on-oil-facility-at-omans-salalah-port'
              },
              {
                label: 'US Embassy and Omani port hit by drones — Al Jazeera',
                url:
                    'https://www.aljazeera.com/news/2026/3/3/us-embassy-in-saudi-capital-riyadh-hit-by-drones-fire-reported-ministry'
              },
            ]
          },
          {
            name: 'Turkey',
            color: [120, 35, 90],  // storm plum magenta
            count: 40,
            freq: 207.65,
            wave: 'sine',
            facts: [
              'Iranian missiles and drones penetrated Turkish airspace.',
              'President Erdogan told Iranian President Pezeshkian that airspace violation "cannot be excused for any reason whatsoever."',
              'Turkey hosts US military presence and strategic importance for regional stability.',
            ],
            sources: [
              {
                label:
                    'Erdogan to Pezeshkian: Violation of Türkiye\'s airspace \'cannot be excused for any reason\' — TRT World',
                url: 'https://www.trtworld.com/article/1b0ad9a0032a'
              },
              {
                label:
                    'Erdogan tells Iran violation of Turkey\'s airspace cannot be excused — The Express Tribune',
                url:
                    'https://tribune.com.pk/story/2596762/erdogan-tells-iran-violation-of-turkeys-airspace-cannot-be-excused-for-any-reason'
              },
              {
                label:
                    'NATO downs second Iranian missile over Turkey — Times of Israel',
                url:
                    'https://www.timesofisrael.com/nato-downs-second-iranian-missile-over-turkey-which-stresses-right-to-self-defense/'
              },
            ]
          },
        ];

// ── Geographic Data ─────────────────────────────────────────────────────────
// World bounds matching the Natural Earth / world-atlas TopoJSON data
const SVG_GEO = {
  lonWest: -180,
  lonEast: 180,
  latNorth: 83.65,
  latSouth: -56.5
};

// Country polygons as [longitude, latitude] pairs
// Simplified but recognizable outlines for satellite map rendering
const GEO_SHAPES = {
  // ── Group countries (where boids spawn) ──
  israel: {
    poly: [
      [34.2, 32], [34.3, 31.5], [34.5, 31], [34.9, 29.5], [35.5, 29.5],
      [35.5, 33.1], [35.2, 33.1], [34.2, 32]
    ],
    terrain: [129, 150, 171]
  },
  iran: {
    poly: [
      [44, 39.8],   [44.5, 39],   [46, 38.8],   [48.5, 38.5], [49.5, 37.5],
      [51, 36.7],   [53.5, 37],   [55, 37.5],   [57, 37.5],   [59.5, 37],
      [61, 35.5],   [61.5, 33.5], [61, 31],     [60.5, 29],   [58.5, 27],
      [57, 26.5],   [55.5, 26.3], [54, 26.3],   [52, 27],     [50.5, 26.8],
      [49.5, 27.5], [49, 28.5],   [48.5, 30.5], [46, 37],     [44.5, 38.5],
      [44, 39.8]
    ],
    terrain: [27, 48, 69]
  },
  lebanon: {
    poly: [[35.1, 34.6], [35.2, 33.1], [36, 33.7], [36, 34.6], [35.1, 34.6]],
    terrain: [57, 38, 77]
  },
  iraq: {
    poly: [
      [38.5, 33.3], [42, 37.5], [44, 37], [44.5, 38.5], [46, 37], [48.5, 30.5],
      [48, 29.5], [47.5, 29], [45.5, 29.5], [44, 30], [42, 31], [39, 32],
      [38.5, 33.3]
    ],
    terrain: [36, 64, 92]
  },
  saudiarabia: {
    poly: [
      [36.5, 29],   [37, 29.2], [39, 32],   [42, 31],   [44, 30],
      [45.5, 29.5], [47, 29.5], [47.5, 29], [50, 26],   [51.5, 24.5],
      [55, 22.5],   [55, 19],   [52, 16],   [45, 12.5], [43, 14.5],
      [42, 17],     [41, 19],   [39, 20],   [37, 22],   [36, 25],
      [36.5, 29]
    ],
    terrain: [37, 50, 88]
  },
  uae: {
    poly: [
      [51.5, 24.5], [52.5, 24.5], [55, 24.5], [56, 24.5], [56, 22.5],
      [55, 22.5], [51.5, 24.5]
    ],
    terrain: [87, 114, 143]
  },
  qatar: {
    poly: [
      [50.7, 25.5], [51, 26.2], [51.6, 26.2], [51.6, 25.5], [51, 24.5],
      [50.7, 25.5]
    ],
    terrain: [46, 80, 115]
  },
  oman: {
    poly: [
      [56, 24.5], [56.3, 26.2], [57, 26.5], [59.5, 22.5], [59, 21], [58, 19.5],
      [56, 17.5], [55, 19], [55, 22.5], [56, 22.5], [56, 24.5]
    ],
    terrain: [71, 71, 54]
  },
  turkey: {
    poly: [
      [26, 36.5],   [28, 36.5], [30, 36.6], [33, 36.2],   [35.8, 36.3],
      [36.2, 37.1], [38, 37],   [40, 37],   [42, 37.5],   [44, 37],
      [44.5, 38.5], [44, 39.8], [43, 41.2], [40, 41.2],   [36, 42],
      [33, 42],     [30, 41.5], [28, 41.3], [26.5, 41.7], [26, 39],
      [26, 36.5]
    ],
    terrain: [198, 208, 42]
  },
  // ── Background countries (for map completeness) ──
  syria: {
    poly: [
      [35.8, 36.3], [35.8, 35.2], [36, 34.6], [37, 34], [38.5, 33.3],
      [42, 37.5], [40, 37], [38, 37], [36.2, 37.1], [35.8, 36.3]
    ],
    terrain: [46, 80, 115]
  },
  jordan: {
    poly: [
      [35.5, 33.1], [36, 33.7], [37, 34], [38.5, 33.3], [39, 32], [37, 29.2],
      [35.5, 29.5], [35.5, 33.1]
    ],
    terrain: [36, 64, 92]
  },
  egypt: {
    poly: [
      [24, 22], [24, 31.5], [30, 31.5], [32.5, 31.2], [34.3, 29.5], [34.5, 28],
      [34.3, 27.5], [36, 22], [24, 22]
    ],
    terrain: [71, 71, 54]
  },
  kuwait: {
    poly: [
      [46.5, 29.5], [47.5, 29.5], [48, 30], [48.5, 30.5], [48, 29.5],
      [47.5, 28.5], [46.5, 29.5]
    ],
    terrain: [87, 114, 143]
  },
  yemen: {
    poly: [
      [43, 14.5], [45, 12.5], [52, 16], [55, 19], [56, 17.5], [53, 12.5],
      [48, 12], [45, 12], [43, 14.5]
    ],
    terrain: [37, 50, 88]
  },
  afghanistan: {
    poly: [
      [61, 35.5], [63, 37], [65, 37.5], [66, 36], [66, 33], [64, 31], [62, 30],
      [61, 31], [61, 35.5]
    ],
    terrain: [129, 150, 171]
  },
  pakistan: {
    poly: [
      [61, 31], [62, 30], [64, 31], [66, 33], [66, 25], [64, 24], [62, 25],
      [60.5, 29], [61, 31]
    ],
    terrain: [87, 114, 143]
  },
  turkmenistan: {
    poly: [
      [53.5, 37], [55, 37.5], [57, 37.5], [59.5, 37], [61, 35.5], [63, 37],
      [66, 38.5], [66, 42], [60, 42.5], [55, 40], [53.5, 37]
    ],
    terrain: [46, 80, 115]
  },
  armenia: {
    poly: [
      [43, 41.2], [44, 40], [44, 39.8], [45, 39.5], [46, 40], [46, 41],
      [44.5, 41.5], [43, 41.2]
    ],
    terrain: [49, 43, 88]
  },
  azerbaijan: {
    poly: [
      [46, 40], [45, 39.5], [44.5, 39], [46, 38.8], [48.5, 38.5], [50, 39.5],
      [50, 41.5], [48, 42], [46, 41], [46, 40]
    ],
    terrain: [36, 64, 92]
  },
  georgia: {
    poly: [
      [40, 41.2], [43, 41.2], [44.5, 41.5], [46, 41], [48, 42], [46, 43.5],
      [42, 43.5], [40, 42], [40, 41.2]
    ],
    terrain: [87, 114, 143]
  },
  eritrea: {
    poly: [
      [38, 15.5], [40, 13], [42, 12.5], [43, 14.5], [42, 17], [41, 19],
      [39, 18], [38, 15.5]
    ],
    terrain: [71, 71, 54]
  },
  somalia: {
    poly: [
      [42, 12.5], [48, 12], [50, 11.5], [49, 11], [46, 11], [42, 11.5],
      [42, 12.5]
    ],
    terrain: [37, 50, 88]
  },
  // ── World map context shapes ──────────────────────────────────────────────
  usa: {
    poly: [
      [-124.7, 48.3], [-96, 49],   [-83, 46],    [-82.5, 41.5], [-79.8, 43.5],
      [-75, 45],      [-72, 44],   [-67, 47],    [-70, 42],     [-76, 34],
      [-81.3, 25],    [-82.5, 30], [-85, 30],    [-88.5, 29.5], [-94, 30],
      [-97, 26],      [-109, 29],  [-117, 32.5], [-122, 37],    [-124.2, 40.5],
      [-124.7, 48.3]
    ],
    terrain: [129, 150, 171]
  },
  canada: {
    poly: [
      [-140, 74], [-60, 72], [-52, 47], [-67, 47], [-72, 44], [-75, 45],
      [-79.8, 43.5], [-82.5, 41.5], [-83, 46], [-96, 49], [-124.7, 48.3],
      [-124, 60], [-130, 62], [-140, 60], [-140, 74]
    ],
    terrain: [87, 114, 143]
  },
  south_america: {
    poly: [
      [-78, 12], [-63, 11], [-50, 0], [-35, -5], [-35, -10], [-38, -23],
      [-45, -30], [-52, -33], [-65, -55], [-75, -50], [-80, -35], [-80, -3],
      [-77, 5], [-78, 12]
    ],
    terrain: [37, 50, 88]
  },
  uk: {
    poly: [
      [-5, 50], [2, 51], [0, 53], [-2, 58], [-5, 58], [-7, 54], [-6, 50],
      [-5, 50]
    ],
    terrain: [129, 150, 171]
  },
  western_europe: {
    poly: [
      [-9, 36], [3, 36], [16, 38], [22, 38], [26, 46], [24, 47], [18, 45],
      [14, 44], [8, 48], [2, 51], [-5, 48], [-9, 43], [-9, 36]
    ],
    terrain: [87, 114, 143]
  },
  scandinavia: {
    poly: [
      [5, 57], [14, 56], [20, 55], [22, 57], [26, 60], [28, 66], [28, 70],
      [22, 72], [14, 69], [6, 62], [5, 57]
    ],
    terrain: [46, 80, 115]
  },
  eastern_europe: {
    poly: [
      [22, 38], [38, 38], [44, 42], [48, 46], [40, 52], [30, 55], [22, 52],
      [22, 42], [22, 38]
    ],
    terrain: [49, 43, 88]
  },
  russia: {
    poly: [
      [24, 68], [60, 72], [100, 73], [150, 73], [175, 68], [175, 50], [140, 44],
      [130, 42], [100, 50], [80, 52], [58, 56], [50, 55], [42, 46], [38, 48],
      [30, 55], [24, 55], [24, 68]
    ],
    terrain: [49, 43, 88]
  },
  north_africa_west: {
    poly: [
      [-6, 36], [12, 37], [24, 32], [24, 22], [0, 22], [-18, 20], [-18, 36],
      [-6, 36]
    ],
    terrain: [71, 71, 54]
  },
  sub_saharan_africa: {
    poly: [
      [-18, 20], [0, 22], [24, 22], [36, 22], [42, 12], [52, 12], [50, 10],
      [44, 8], [40, -8], [35, -18], [26, -34], [18, -35], [14, -22], [0, -18],
      [-17, 14], [-18, 20]
    ],
    terrain: [129, 150, 171]
  },
  central_asia: {
    poly: [
      [50, 55], [84, 52], [87, 47], [85, 42], [75, 38], [66, 38], [56, 40],
      [50, 45], [50, 55]
    ],
    terrain: [71, 71, 54]
  },
  india: {
    poly: [
      [67, 24], [68, 22], [68, 20], [73, 15], [78, 8], [80, 10], [85, 13],
      [92, 22], [90, 27], [78, 28], [73, 32], [68, 28], [67, 24]
    ],
    terrain: [129, 150, 171]
  },
  china: {
    poly: [
      [74, 40], [78, 32], [88, 27], [97, 22], [108, 20], [121, 22], [122, 32],
      [135, 48], [128, 53], [115, 53], [100, 48], [85, 50], [74, 40]
    ],
    terrain: [87, 114, 143]
  },
  southeast_asia: {
    poly: [
      [95, 22], [100, 10], [104, 1], [108, -4], [120, -4], [128, 2], [136, 4],
      [130, 10], [120, 20], [108, 18], [95, 22]
    ],
    terrain: [46, 80, 115]
  },
  japan: {
    poly: [
      [130, 32], [133, 34], [136, 36], [141, 44], [145, 44], [143, 40],
      [140, 36], [137, 34], [131, 31], [130, 32]
    ],
    terrain: [49, 43, 88]
  },
  australia: {
    poly: [
      [114, -22], [124, -14], [136, -12], [139, -17], [145, -15], [152, -25],
      [151, -32], [148, -38], [138, -35], [130, -32], [116, -34], [114, -26],
      [114, -22]
    ],
    terrain: [37, 50, 88]
  },
};

// ── Conflict participant countries for SVG highlight rendering ───────────────
const HIGHLIGHTED_GEO_KEYS = new Set([
  'usa',
  'israel',
  'iran',
  'lebanon',
  'iraq',
  'saudiarabia',
  'uae',
  'qatar',
  'oman',
  'turkey',
]);

// Maps geographic shape key → GROUPS index (for group color on highlighted
// shapes)
const GEO_TO_GROUP_IDX = {
  israel: 0,
  usa: 0,
  iran: 1,
  lebanon: 2,
  iraq: 3,
  saudiarabia: 4,
  uae: 5,
  qatar: 6,
  oman: 7,
  turkey: 8,
};

// Map each GROUPS index to one or more GEO_SHAPES keys for boid spawning
const GROUP_GEO_KEYS = [
  ['israel', 'usa'],  // 0: USA & Israel — boids in both countries
  ['iran'],           // 1: Iran
  ['lebanon'],        // 2: Lebanon
  ['iraq'],           // 3: Iraq
  ['saudiarabia'],    // 4: Saudi Arabia
  ['uae'],            // 5: UAE
  ['qatar'],          // 6: Qatar
  ['oman'],           // 7: Oman
  ['turkey'],         // 8: Turkey
];

// ── Map Projection ──────────────────────────────────────────────────────────
// Simple equirectangular matching the SVG's geoViewBox exactly.
// Drawing image(mapImage, 0, 0, width, height) stretches SVG to fill canvas,
// so lon/lat → x/y must use the same linear mapping.
function geoToScreen(lon, lat) {
  const {lonWest, lonEast, latNorth, latSouth} = SVG_GEO;
  const x = (lon - lonWest) / (lonEast - lonWest) * width;
  const y = (latNorth - lat) / (latNorth - latSouth) * height;
  return {x, y};
}

// Point-in-polygon test (ray casting) for screen coordinates
function pointInPolyScreen(px, py, screenPoly) {
  let inside = false;
  for (let i = 0, j = screenPoly.length - 1; i < screenPoly.length; j = i++) {
    const xi = screenPoly[i].x, yi = screenPoly[i].y;
    const xj = screenPoly[j].x, yj = screenPoly[j].y;
    if ((yi > py) !== (yj > py) &&
        px < (xj - xi) * (py - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// Compute centroid of screen polygon
function polyCentroid(screenPoly) {
  let cx = 0, cy = 0;
  for (const p of screenPoly) {
    cx += p.x;
    cy += p.y;
  }
  return {x: cx / screenPoly.length, y: cy / screenPoly.length};
}

// Compute area of screen polygon using the shoelace formula
function polyScreenArea(screenPoly) {
  let area = 0;
  const n = screenPoly.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += screenPoly[i].x * screenPoly[j].y;
    area -= screenPoly[j].x * screenPoly[i].y;
  }
  return Math.abs(area) / 2;
}

// ── SVG Map Background ──────────────────────────────────────────────────────
function renderSVGMap() {
  const NS = 'http://www.w3.org/2000/svg';
  let svg = document.getElementById('map-svg');
  if (!svg) {
    svg = document.createElementNS(NS, 'svg');
    svg.id = 'map-svg';
    svg.style.cssText =
        'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    const canvas = document.querySelector('canvas');
    if (canvas)
      canvas.parentNode.insertBefore(svg, canvas);
    else
      document.body.appendChild(svg);
  }

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.innerHTML = '';

  // ── Defs ──
  const defs = document.createElementNS(NS, 'defs');

  // Ocean radial gradient
  const rg = document.createElementNS(NS, 'radialGradient');
  rg.id = 'ocean-grad';
  rg.setAttribute('cx', '50%');
  rg.setAttribute('cy', '50%');
  rg.setAttribute('r', '70%');
  const s1 = document.createElementNS(NS, 'stop');
  s1.setAttribute('offset', '0%');
  s1.setAttribute('stop-color', '#0c1828');
  const s2 = document.createElementNS(NS, 'stop');
  s2.setAttribute('offset', '100%');
  s2.setAttribute('stop-color', '#03070d');
  rg.appendChild(s1);
  rg.appendChild(s2);
  defs.appendChild(rg);

  svg.appendChild(defs);

  // ── Ocean fill ──
  const ocean = document.createElementNS(NS, 'rect');
  ocean.setAttribute('width', width);
  ocean.setAttribute('height', height);
  ocean.setAttribute('fill', 'url(#ocean-grad)');
  svg.appendChild(ocean);

  const allEntries = Object.entries(GEO_SHAPES);
  const bgEntries = allEntries.filter(([n]) => !HIGHLIGHTED_GEO_KEYS.has(n));
  const fgEntries = allEntries.filter(([n]) => HIGHLIGHTED_GEO_KEYS.has(n));

  // ── Background countries: outline only ──
  for (const [, data] of bgEntries) {
    const sp = data.poly.map(([lon, lat]) => geoToScreen(lon, lat));
    const pts = sp.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const pg = document.createElementNS(NS, 'polygon');
    pg.setAttribute('points', pts);
    pg.setAttribute('fill', 'none');
    pg.setAttribute('stroke', 'rgba(38,48,32,0.55)');
    pg.setAttribute('stroke-width', '0.5');
    pg.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(pg);
  }

  // ── Highlighted countries: glow halo then crisp outline ──
  for (const [name, data] of fgEntries) {
    const sp = data.poly.map(([lon, lat]) => geoToScreen(lon, lat));
    const pts = sp.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const gi = GEO_TO_GROUP_IDX[name] ?? 0;
    const [gr, gg, gb] = GROUPS[gi].color;

    // Wide soft glow ring
    const glow = document.createElementNS(NS, 'polygon');
    glow.setAttribute('points', pts);
    glow.setAttribute('fill', 'none');
    glow.setAttribute('stroke', `rgba(${gr},${gg},${gb},0.18)`);
    glow.setAttribute('stroke-width', '10');
    glow.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(glow);

    // Crisp outline
    const pg = document.createElementNS(NS, 'polygon');
    pg.setAttribute('points', pts);
    pg.setAttribute('fill', 'none');
    pg.setAttribute('stroke', `rgba(${gr},${gg},${gb},0.88)`);
    pg.setAttribute('stroke-width', '1.1');
    pg.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(pg);
  }

  // ── Labels ──
  const LABEL_DATA = {
    // Conflict participants
    usa: {lbl: 'USA', hi: true},
    iran: {lbl: 'IRAN', hi: true},
    israel: {lbl: 'ISRAEL', hi: true},
    iraq: {lbl: 'IRAQ', hi: true},
    turkey: {lbl: 'TURKEY', hi: true},
    saudiarabia: {lbl: 'SAUDI ARABIA', hi: true},
    oman: {lbl: 'OMAN', hi: true},
    lebanon: {lbl: 'LBN', hi: true},
    uae: {lbl: 'UAE', hi: true},
    qatar: {lbl: 'QAT', hi: true},
    // Geographic context (dimmed)
    russia: {lbl: 'RUSSIA', hi: false},
    china: {lbl: 'CHINA', hi: false},
    india: {lbl: 'INDIA', hi: false},
    canada: {lbl: 'CANADA', hi: false},
    south_america: {lbl: 'S. AMERICA', hi: false},
    australia: {lbl: 'AUSTRALIA', hi: false},
    western_europe: {lbl: 'EUROPE', hi: false},
    sub_saharan_africa: {lbl: 'AFRICA', hi: false},
  };

  for (const [name, {lbl, hi}] of Object.entries(LABEL_DATA)) {
    const data = GEO_SHAPES[name];
    if (!data) continue;
    const sp = data.poly.map(([lon, lat]) => geoToScreen(lon, lat));
    const cent = polyCentroid(sp);

    let fillColor, fontSize, strokeColor, strokeWidth;
    if (hi) {
      const gi = GEO_TO_GROUP_IDX[name] ?? 0;
      const [gr, gg, gb] = GROUPS[gi].color;
      fillColor = `rgba(${gr},${gg},${gb},1)`;
      strokeColor = `rgba(${gr},${gg},${gb},0.3)`;
      strokeWidth = '0.8';
      fontSize =
          ['iran', 'saudiarabia', 'turkey', 'usa'].includes(name) ? '12' : '11';
    } else {
      fillColor = 'rgba(55,65,48,0.65)';
      strokeColor = 'rgba(15,20,10,0.4)';
      strokeWidth = '0.6';
      fontSize = '9';
    }

    const t = document.createElementNS(NS, 'text');
    t.setAttribute('x', cent.x.toFixed(1));
    t.setAttribute('y', cent.y.toFixed(1));
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('dominant-baseline', 'middle');
    t.setAttribute('fill', fillColor);
    t.setAttribute('stroke', strokeColor);
    t.setAttribute('stroke-width', strokeWidth);
    t.setAttribute('font-family', 'Courier New, monospace');
    t.setAttribute('font-size', fontSize);
    t.setAttribute('font-weight', 'bold');
    t.setAttribute('letter-spacing', '1.8');
    t.textContent = lbl;
    svg.appendChild(t);
  }
}

// ── Audio — F# minor 7 pad synthesizer (persistent oscillator pool) ────────
let audioCtx = null;
let oscPool = [];  // 6 always-running {osc, gain} pairs

const FM7_SEMITONES = [0, 3, 7, 10];
const BASS_FREQS = [92.50, 110.00];  // F#2, A2

function initAudio() {
  if (audioCtx) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(
          e => console.log('AudioContext resume failed:', e));
    }
    return;
  }
  const AC = window.AudioContext || window['webkitAudioContext'];
  if (!AC) {
    console.warn('AudioContext not supported');
    return;
  }

  audioCtx = new AC();

  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(e => console.log('AudioContext resume failed:', e));
  }

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

function playPad(gi, durationSec = 7) {
  initAudio();

  const g = GROUPS[gi];
  const now = audioCtx.currentTime;
  let midRoot = g.freq || 220.00;
  if (g.wave === 'sine') {
    const variation = 0.8 + Math.random() * 0.4;
    midRoot *= variation;
  }

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
      const targetFreq = BASS_FREQS[i];
      osc.frequency.setValueAtTime(osc.frequency.value, now);
      osc.frequency.exponentialRampToValueAtTime(targetFreq, now + glideTime);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(peakVol * 0.75, now + attackTime);
      gain.gain.setValueAtTime(peakVol * 0.75, now + durationSec - releaseTime);
      gain.gain.linearRampToValueAtTime(0, now + durationSec);

    } else if (i < layers) {
      const midIdx = i - numBass;
      const semitones = FM7_SEMITONES[midIdx % FM7_SEMITONES.length];
      let targetFreq = midRoot * Math.pow(2, semitones / 12);
      while (targetFreq > 600) targetFreq /= 2;
      while (targetFreq < 200) targetFreq *= 2;
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
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.5);
    }
  }
}

// ── Conflict Relations ──────────────────────────────────────────────────────
const AFFECTS = {
  0: [1, 2, 3, 4, 5, 6, 7, 8],
  1: [0, 2, 3, 4, 5, 6, 7, 8],
  2: [0, 1],
  3: [0, 1],
  4: [1, 0],
  5: [1, 0],
  6: [1, 0],
  7: [1, 0],
  8: [1, 0],
};

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
    targets[gi] = 2.5;
    affected.forEach(v => targets[v] = 1.2);
  } else if (affectedBy.length) {
    targets[gi] = 2.5;
    affectedBy.forEach(o => targets[o] = 1.2);
  } else {
    targets[gi] = 2.5;
  }

  for (let i = 0; i < GROUPS.length; i++) {
    if (!(i === gi || affected.includes(i) || affectedBy.includes(i))) {
      targets[i] = 0;
    }
  }

  for (const b of boids) b.targetScale = targets[b.groupId] ?? 0;
}

function resetScales() {
  for (const b of boids) b.targetScale = 1.0;
}

// ── Sources overlay ─────────────────────────────────────────────────────────
let lastClickedGi = null;
let sourcesVisible = false;

function showSources(gi) {
  hideSources();
  const g = GROUPS[gi];
  const [r, gv, bl] = g.color;
  const col = `rgb(${r},${gv},${bl})`;

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
         style="display:block;color:${
                                  col};text-decoration:none;margin-bottom:14px;
                line-height:1.6;opacity:0.85;font-size:11px;word-wrap:break-word;">
        ↗ ${s.label}
      </a>`).join('');

  div.innerHTML = `
    <div style="font-size:9px;letter-spacing:2px;opacity:0.5;margin-bottom:18px;text-transform:uppercase;">
      SOURCES & CITATIONS — press S to close
    </div>
    ${sourcesList}
    <div id="src-close"
         style="margin-top:18px;opacity:0.4;cursor:pointer;font-size:9px;letter-spacing:1px;padding-top:12px;border-top:1px solid ${
      col}22;">
      × CLOSE
    </div>
  `;

  document.body.appendChild(div);

  const links = div.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  document.getElementById('src-close').addEventListener('click', hideSources);

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

// ── Flow Field Physics Constants ───────────────────────────────────────────
const NOISE_SCALE = 0.018;  // spatial scale of Perlin noise field (higher = more turbulent)
const TIME_SCALE = 0.008;   // how fast the field evolves over time (higher = faster changes)
const FLOW_FORCE = 0.35;    // force applied along flow direction each frame (higher = stronger)
const MAX_SPEED = 1.5;      // maximum boid speed (pixels/frame)
const DAMPING = 0.82;       // velocity damping per frame (lower = more momentum)

// ── State ──────────────────────────────────────────────────────────────────
let boids = [];
let centers = [];
let groupBoundaries =
    [];  // groupBoundaries[gi] = array of screenPoly for each country in group
let panel = null;
let mapBuffer = null;  // cached map graphics drawn once

// ── Camera Controls ────────────────────────────────────────────────────────
let zoom = 1.0;
let panX = 0;
let panY = 0;
let isPanning = false;
let lastMouseX = 0;
let lastMouseY = 0;

function updateMapTransform() {
  // No longer needed - map is drawn on canvas
}

// ── Preload ───────────────────────────────────────────────────────────────
let topoData = null;

function preload() {
  // Load Natural Earth-based world-atlas TopoJSON (no SVG needed)
  topoData =
      loadJSON('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
}

// ── ISO 3166-1 numeric → GEO_SHAPES key ──────────────────────────────────
const ISO_TO_KEY = {
  '840': 'usa',
  '376': 'israel',
  '364': 'iran',
  '422': 'lebanon',
  '368': 'iraq',
  '682': 'saudiarabia',
  '784': 'uae',
  '634': 'qatar',
  '512': 'oman',
  '792': 'turkey',
  '760': 'syria',
  '400': 'jordan',
  '818': 'egypt',
  '414': 'kuwait',
  '887': 'yemen',
  '004': 'afghanistan',
  '586': 'pakistan',
  '795': 'turkmenistan',
  '051': 'armenia',
  '031': 'azerbaijan',
  '268': 'georgia',
  '232': 'eritrea',
  '706': 'somalia',
  '643': 'russia',
  '156': 'china',
  '356': 'india',
  '124': 'canada',
  '076': 'south_america',
  '826': 'uk',
  '250': 'western_europe',
  '036': 'australia',
  '392': 'japan',
};

function extractCountryPolygons() {
  if (!topoData || !window.topojson) return null;
  try {
    const countries =
        window.topojson.feature(topoData, topoData.objects.countries);
    const polygonMap = {};
    for (const feature of countries.features) {
      const key = ISO_TO_KEY[feature.id];
      if (!key || !feature.geometry) continue;
      const geom = feature.geometry;
      const rings = geom.type === 'Polygon' ? [geom.coordinates[0]] :
                                              geom.coordinates.map(p => p[0]);
      if (rings.length > 0) {
        const mainRing =
            rings.reduce((max, r) => r.length > max.length ? r : max);
        polygonMap[key] = {poly: mainRing, terrain: [30, 30, 30]};
      }
    }
    return polygonMap;
  } catch (e) {
    console.warn('Error extracting country polygons:', e);
    return null;
  }
}

// ── Map Rendering from TopoJSON ────────────────────────────────────────────
function buildMapBuffer() {
  if (!topoData || !window.topojson) return null;

  const buf = createGraphics(width, height);
  buf.noSmooth();

  const countries =
      window.topojson.feature(topoData, topoData.objects.countries);
  const land = window.topojson.feature(topoData, topoData.objects.land);

  // Ocean — black
  buf.background(0, 0, 0);

  // Land fill — greyish white
  buf.noStroke();
  buf.fill(200, 198, 192);
  for (const f of land.features) drawFeatureOnBuf(buf, f);

  // All country borders — medium grey lines
  buf.noFill();
  buf.stroke(130, 125, 118, 150);
  buf.strokeWeight(0.4);
  for (const f of countries.features) drawFeatureOnBuf(buf, f);

  // Highlighted conflict countries — tinted fill + crisp border
  for (const f of countries.features) {
    const key = ISO_TO_KEY[f.id];
    if (!key || !HIGHLIGHTED_GEO_KEYS.has(key)) continue;
    const gi = GEO_TO_GROUP_IDX[key] ?? 0;
    const [r, g, bl] = GROUPS[gi].color;

    buf.fill(r, g, bl, 55);
    buf.stroke(r, g, bl, 200);
    buf.strokeWeight(0.9);
    drawFeatureOnBuf(buf, f);
  }

  return buf;
}

function drawFeatureOnBuf(buf, feature) {
  const geom = feature.geometry;
  if (!geom) return;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  for (const poly of polys) {
    drawRingOnBuf(buf, poly[0]);
  }
}

// Draw a GeoJSON ring, normalizing longitudes to avoid antimeridian artifacts.
// Each longitude is adjusted to stay within 180° of the previous point,
// so the polygon is drawn as a continuous shape. Coordinates that end up
// slightly outside [-180, 180] are rendered off-canvas and clipped harmlessly.
function drawRingOnBuf(buf, ring) {
  if (!ring || ring.length < 2) return;

  buf.beginShape();
  let prevLon = ring[0][0];
  for (let i = 0; i < ring.length; i++) {
    let lon = ring[i][0];
    const lat = ring[i][1];
    if (i > 0) {
      while (lon - prevLon > 180) lon -= 360;
      while (prevLon - lon > 180) lon += 360;
    }
    prevLon = lon;
    const {x, y} = geoToScreen(lon, lat);
    buf.vertex(x, y);
  }
  buf.endShape(CLOSE);
}

// ── Setup ──────────────────────────────────────────────────────────────────
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  // Overwrite GEO_SHAPES with accurate TopoJSON polygons
  if (topoData && window.topojson) {
    const topoShapes = extractCountryPolygons();
    if (topoShapes) Object.assign(GEO_SHAPES, topoShapes);
  }

  // Build cached map background
  mapBuffer = buildMapBuffer();

  init();
  loop();

  const initAudioOnce = () => {
    initAudio();
    document.removeEventListener('click', initAudioOnce);
    document.removeEventListener('touchstart', initAudioOnce);
  };
  document.addEventListener('click', initAudioOnce);
  document.addEventListener('touchstart', initAudioOnce);

  document.addEventListener('touchmove', (e) => {
    if (e.target === document.body || e.target.tagName === 'CANVAS') {
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0 &&
        (e.target === document.body || e.target.tagName === 'CANVAS')) {
      const touch = e.touches[0];
      handleInteraction(touch.clientX, touch.clientY);
      e.preventDefault();
    }
  }, {passive: false});
}

function init() {
  placeCenters();
  spawnBoids();
}

// ── Geographic Center Placement ─────────────────────────────────────────────
function placeCenters() {
  centers = [];
  groupBoundaries = [];
  for (let gi = 0; gi < GROUPS.length; gi++) {
    const keys = GROUP_GEO_KEYS[gi];
    const polys = [];
    let cx = 0, cy = 0, count = 0;
    for (const key of keys) {
      const shape = GEO_SHAPES[key];
      if (shape) {
        const sp = shape.poly.map(([lon, lat]) => geoToScreen(lon, lat));
        const cent = polyCentroid(sp);
        cx += cent.x;
        cy += cent.y;
        count++;
        polys.push(sp);
      }
    }
    groupBoundaries.push(polys);
    centers.push(
        count > 0 ? {x: cx / count, y: cy / count} :
                    {x: random(width), y: random(height)});
  }
}

// ── Spawn Boids Within Country Polygons ─────────────────────────────────────
function spawnInPoly(screenPoly, count) {
  const points = [];
  // Safe loop-based bounds (spread operator fails for large TopoJSON polygons)
  let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
  for (const p of screenPoly) {
    if (p.x < bx0) bx0 = p.x;
    if (p.x > bx1) bx1 = p.x;
    if (p.y < by0) by0 = p.y;
    if (p.y > by1) by1 = p.y;
  }

  // Phase 1: rejection sampling — fast and well-distributed for most polygons
  for (let i = 0; i < count * 200 && points.length < count; i++) {
    const px = random(bx0, bx1);
    const py = random(by0, by1);
    if (pointInPolyScreen(px, py, screenPoly)) {
      points.push({x: px, y: py});
    }
  }

  // Phase 2: grid scan fallback — guarantees coverage for large/complex
  // polygons
  if (points.length < count) {
    const gridN = Math.ceil(Math.sqrt((count - points.length) * 12));
    for (let gx = 0; gx <= gridN && points.length < count; gx++) {
      for (let gy = 0; gy <= gridN && points.length < count; gy++) {
        const px = bx0 + (bx1 - bx0) * gx / gridN;
        const py = by0 + (by1 - by0) * gy / gridN;
        if (pointInPolyScreen(px, py, screenPoly)) {
          points.push({x: px, y: py});
        }
      }
    }
  }

  // Last resort: scatter near centroid
  const cent = polyCentroid(screenPoly);
  while (points.length < count) {
    points.push({x: cent.x + random(-15, 15), y: cent.y + random(-15, 15)});
  }
  return points;
}

function spawnBoids() {
  boids = [];

  // First pass: compute screen area for every country used by any group
  const countryAreas = {};
  for (let gi = 0; gi < GROUPS.length; gi++) {
    for (const key of GROUP_GEO_KEYS[gi]) {
      if (GEO_SHAPES[key] && !(key in countryAreas)) {
        const sp =
            GEO_SHAPES[key].poly.map(([lon, lat]) => geoToScreen(lon, lat));
        countryAreas[key] = polyScreenArea(sp);
      }
    }
  }

  // Normalise areas to boid size range [0.8, 2.6] using log scale
  const areaVals = Object.values(countryAreas);
  const logMin = Math.min(...areaVals.map(a => Math.log(a + 1)));
  const logRange =
      Math.max(...areaVals.map(a => Math.log(a + 1))) - logMin || 1;
  const normalisedSz = {};
  for (const key of Object.keys(countryAreas)) {
    const logA = Math.log(countryAreas[key] + 1);
    normalisedSz[key] = 0.8 + ((logA - logMin) / logRange) * 1.8;
  }

  GROUPS.forEach((g, gi) => {
    const keys = GROUP_GEO_KEYS[gi];
    const validKeys = keys.filter(k => GEO_SHAPES[k]);
    if (validKeys.length === 0) return;

    const baseCount = Math.floor(g.count / validKeys.length);
    validKeys.forEach((key, ki) => {
      const shape = GEO_SHAPES[key];
      const screenPoly = shape.poly.map(([lon, lat]) => geoToScreen(lon, lat));
      // Last country gets any remainder from the floor division
      const count = ki === validKeys.length - 1 ?
          g.count - baseCount * (validKeys.length - 1) :
          baseCount;
      const positions = spawnInPoly(screenPoly, count);
      const center = polyCentroid(screenPoly);
      const sz = normalisedSz[key] || 1.5;

      for (let i = 0; i < count; i++) {
        boids.push({
          x: positions[i].x,
          y: positions[i].y,
          vx: (Math.random() - 0.5) * 0.6,  // small random seed for flow field
          vy: (Math.random() - 0.5) * 0.6,
          sz,
          col: g.color,
          groupId: gi,
          scale: 1.0,
          targetScale: 1.0,
          countryPoly: screenPoly,
          countryCenter: center,
        });
      }
    });
  });
}

// ── Draw ───────────────────────────────────────────────────────────────────
function draw() {
  background(0, 0, 0);

  // Flow field physics — always run (Perlin noise drives boid movement)
  const t = frameCount * TIME_SCALE;
  for (let i = 0; i < boids.length; i++) {
    const b = boids[i];

    // Sample Perlin noise flow field at boid's world position
    const angle = noise(b.x * NOISE_SCALE, b.y * NOISE_SCALE, t) * TWO_PI * 2;
    const fx = Math.cos(angle) * FLOW_FORCE;
    const fy = Math.sin(angle) * FLOW_FORCE;

    // Apply force with damping
    b.vx = b.vx * DAMPING + fx;
    b.vy = b.vy * DAMPING + fy;

    // Clamp to max speed
    const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (spd > MAX_SPEED) {
      b.vx = (b.vx / spd) * MAX_SPEED;
      b.vy = (b.vy / spd) * MAX_SPEED;
    }

    // Tentatively move
    const nx = b.x + b.vx;
    const ny = b.y + b.vy;

    // Boundary: soft friction prevents escape while allowing natural flow
    if (b.countryPoly) {
      if (!pointInPolyScreen(nx, ny, b.countryPoly)) {
        // Hit boundary: dampen velocity (friction) but don't redirect
        // This lets boids flow along edges naturally instead of clustering
        b.vx *= 0.4;
        b.vy *= 0.4;
      } else {
        b.x = nx;
        b.y = ny;
      }
    } else {
      b.x = nx;
      b.y = ny;
    }
  }

  push();
  // Apply camera transformations (shared by map and boids)
  translate(panX, panY);
  translate(width / 2, height / 2);
  scale(zoom);
  translate(-width / 2, -height / 2);

  // Draw cached map buffer
  if (mapBuffer) {
    image(mapBuffer, 0, 0);
  }

  // Draw boids as simple circles
  for (const b of boids) {
    b.scale += (b.targetScale - b.scale) * 0.06;

    const [r, g, bl] = b.col;
    const baseAlpha = 200;
    const alpha = baseAlpha * constrain(b.scale * 0.5 + 0.2, 0, 1.5);

    // Scale down circles as zoom increases so they don't get huge
    const displaySize = (b.sz * b.scale) / zoom;

    noStroke();
    fill(r, g, bl, alpha);
    circle(b.x, b.y, displaySize * 2);
  }

  pop();

  // First-visit hint
  if (firstTouch) {
    const hint = 'tap to explore (scroll to zoom, drag to pan)';
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
  }
}

// ── Interaction ────────────────────────────────────────────────────────────
let firstTouch = true;

// Transform screen coordinates to world coordinates accounting for camera
function screenToWorld(screenX, screenY) {
  const invZoom = 1 / zoom;
  const worldX = (screenX - panX - width / 2) * invZoom + width / 2;
  const worldY = (screenY - panY - height / 2) * invZoom + height / 2;
  return {x: worldX, y: worldY};
}

// Transform world coordinates to screen coordinates
function worldToScreen(worldX, worldY) {
  return {
    x: (worldX - width / 2) * zoom + width / 2 + panX,
    y: (worldY - height / 2) * zoom + height / 2 + panY,
  };
}

function handleInteraction(px, py) {
  firstTouch = false;
  const worldCoords = screenToWorld(px, py);

  // Only trigger if the click is inside a group's country polygon
  let hitGi = -1;
  for (let gi = 0; gi < GROUPS.length; gi++) {
    const polys = groupBoundaries[gi] || [];
    for (const poly of polys) {
      if (pointInPolyScreen(worldCoords.x, worldCoords.y, poly)) {
        hitGi = gi;
        break;
      }
    }
    if (hitGi !== -1) break;
  }
  if (hitGi === -1) return;

  lastClickedGi = hitGi;
  hideSources();
  const g = GROUPS[hitGi];
  const dur = g.wave === 'sine' ? 90 : 6 + g.facts.length * 1.5;
  playPad(hitGi, dur);
  setScales(hitGi);
  // Position panel away from affected countries
  const panelLines =
      g.facts.reduce((acc, f) => acc + Math.ceil(f.length / 44) + 0.5, 0);
  const panelH = PP * 2 + 28 + panelLines * PH + 8;
  const pos = findPanelPosition(hitGi, PW, panelH);
  panel = new Panel(pos.x, pos.y, g.color, g.facts, dur, g.name);
  loop();
}

function mousePressed() {
  if (touches.length === 0) {
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    isPanning = true;
  }
}

function mouseDragged() {
  if (touches.length === 0 && isPanning && !sourcesVisible) {
    const deltaX = mouseX - lastMouseX;
    const deltaY = mouseY - lastMouseY;
    panX += deltaX;
    panY += deltaY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    loop();
    return false;
  }
}

function mouseReleased() {
  isPanning = false;
  // Detect if this was a click (not a drag)
  const dragDistance = dist(mouseX, mouseY, lastMouseX, lastMouseY);
  if (dragDistance < 10 && touches.length === 0) {
    handleInteraction(mouseX, mouseY);
  }
}

function mouseWheel(event) {
  const zoomSpeed = 0.1;
  const zoomFactor = event.deltaY > 0 ? 1 - zoomSpeed : 1 + zoomSpeed;
  const newZoom = zoom * zoomFactor;

  // Clamp zoom between 0.5 and 8
  zoom = constrain(newZoom, 0.5, 8);
  loop();

  return false;
}

function touchStarted() {
  if (touches.length > 0) {
    lastMouseX = touches[0].x;
    lastMouseY = touches[0].y;
    isPanning = true;
  }
  return false;
}

function touchMoved() {
  if (touches.length > 0 && isPanning && !sourcesVisible) {
    const deltaX = touches[0].x - lastMouseX;
    const deltaY = touches[0].y - lastMouseY;
    panX += deltaX;
    panY += deltaY;
    lastMouseX = touches[0].x;
    lastMouseY = touches[0].y;
    loop();
    return false;
  }
}

function touchEnded() {
  isPanning = false;
  // Detect if this was a tap (not a drag)
  if (touches.length === 0) {
    const dragDistance = dist(touchX, touchY, lastMouseX, lastMouseY);
    if (dragDistance < 10) {
      handleInteraction(touchX, touchY);
    }
  }
  return false;
}

// ── Panel Positioning ───────────────────────────────────────────────────────
// Pick the screen corner/edge whose centre is furthest from every active
// country so the panel never covers the highlighted geographic areas.
function findPanelPosition(hitGi, panelW, panelH) {
  const affected = AFFECTS[hitGi] || [];
  const affectedBy = AFFECTED_BY[hitGi] || [];
  const activeGis = new Set([hitGi, ...affected, ...affectedBy]);

  // Convert each active group's world-space centre to screen coords
  const activePts = [];
  for (const gi of activeGis) {
    const c = centers[gi];
    if (c) activePts.push(worldToScreen(c.x, c.y));
  }

  // Candidate panel anchors: 4 corners + 2 vertical mid-points
  const m = PP;
  const candidates = [
    {x: m, y: m},
    {x: width - panelW - m, y: m},
    {x: m, y: height - panelH - m},
    {x: width - panelW - m, y: height - panelH - m},
    {x: m, y: (height - panelH) / 2},
    {x: width - panelW - m, y: (height - panelH) / 2},
  ];

  if (activePts.length === 0) return candidates[1];  // default: top-right

  let bestPos = candidates[0];
  let bestScore = -Infinity;
  for (const cand of candidates) {
    const cx = cand.x + panelW / 2;
    const cy = cand.y + panelH / 2;
    // Score = minimum distance from panel centre to any active group centre
    let minDist = Infinity;
    for (const pt of activePts) {
      const d = Math.hypot(cx - pt.x, cy - pt.y);
      if (d < minDist) minDist = d;
    }
    if (minDist > bestScore) {
      bestScore = minDist;
      bestPos = cand;
    }
  }
  return bestPos;
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
    this.h = PP * 2 + 28 + lines * PH + 8;
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

    fill(r, g, bl, al);
    rect(this.x, py, 3, this.h, 5, 0, 0, 5);

    textFont('Courier New');
    textAlign(LEFT, TOP);
    textSize(14);
    textStyle(BOLD);
    fill(r, g, bl, al * 0.95);
    text(this.groupName.toUpperCase(), this.x + PP, py + PP - 4);

    textSize(11);
    textStyle(NORMAL);
    textLeading(PH);
    let ty = py + PP + 28;
    for (const fact of this.facts) {
      fill(r, g, bl, al * 0.92);
      text(fact, this.x + PP, ty, PW - PP * 2 - 4);
      ty += Math.ceil(fact.length / 44) * PH + 8;
    }

    fill(r, g, bl, al * 0.35);
    textSize(9);
    textAlign(RIGHT, BOTTOM);
    text('S — sources & citations', this.x + PW - PP * 0.5, py + this.h - 6);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mapBuffer = buildMapBuffer();
  init();
  redraw();
}

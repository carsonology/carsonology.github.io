const nodes = [
  {
    id: "Graphics",
    type: "tag",
  },
  {
    id: "Interactive",
    type: "tag",
  },
  {
    id: "Illustration",
    type: "tag",
  },
  {
    id: "Politics",
    type: "tag",
  },
  {
    id: "Multimedia",
    type: "tag",
  },
  {
    id: "Legislation requiring cash",
    image: {
      src: "./cash-legislation.jpg",
      alt: "",
    },
    date: "11/17/2026",
    url: "https://www.pewresearch.org/short-reads/2026/11/17/at-least-10-states-require-in-person-businesses-to-accept-cash/",
    headline: "At Least 10 States Require In-Person Businesses to Accept Cash",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },
  {
    id: "Politics Midterms report",
    image: { src: "./politics-midterms-report.png" },
    date: "10/20/2026",
    url: "https://www.pewresearch.org/politics/2026/10/20/broad-public-confidence-in-elections-in-the-u-s-but-partisans-differ-over-concerns-about-access-security/",
    skills: ["Observable", "Illustrator"],
    headline:
      "Broad Public Confidence in Elections in the U.S. – but Partisans Differ Over Concerns About Access, Security",
    publication: "Pew Research Center",
    tags: ["Graphics"],
    context: `I created 25+ graphics on a two-day turnaround for this report and <a href="https://www.pewresearch.org/short-reads/2026/10/08/iran-conflict-remains-deeply-unpopular-as-many-americans-expect-it-to-go-on-for-months/" target="_blank">two</a> accompanying <a href="https://www.pewresearch.org/politics/2026/10/08/cost-concerns-dominate-as-publics-economic-ratings-turn-more-negative/" target="_blank">articles</a> to provide timely data to the public ahead of the 2026 Midterms.`,
    excludeFromRadar: true,
  },
  {
    id: "Wellness products",
    image: {
      src: "./featured-image-copy.jpg",
      alt: "",
    },
    date: "11/12/2026",
    url: "https://www.pewresearch.org/short-reads/2026/11/12/download-my-free-guide-what-products-and-services-do-health-and-wellness-influencers-promote/",
    headline:
      "‘Download My Free Guide’: What Products and Services Do Health and Wellness Influencers Promote?",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },

  {
    id: "Midterms polling performance",
    image: {
      src: "./midterms-polling.jpg",
      alt: "",
    },
    date: "11/12/2026",
    url: "https://www.pewresearch.org/short-reads/2026/11/12/a-first-look-at-polling-performance-in-2026/",
    headline: "A First Look at Polling Performance in 2026",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },
  {
    id: "Flock cameras ",
    image: {
      src: "./spike-map-animation-first-slide-static.jpg",
      alt: "",
    },
    date: "11/12/2026",
    url: "https://www.instagram.com/p/DfkZSBSAAcr/?hl=en&img_index=1",
    headline:
      "What We Know – and Don’t Know – About Flock’s License Plate Cameras",
    skills: ["photoshop", "d3"],
    tags: ["Illustration", "Graphics", "Social"],
    publication: "Pew Research Center",
    excludeFromWork: true,
  },
  {
    id: "Flock cameras",
    image: {
      src: "./flock-cameras.png",
      alt: "",
    },
    date: "11/9/2026",
    url: "https://www.pewresearch.org/short-reads/2026/11/09/what-we-know-and-dont-know-about-flocks-license-plate-cameras/",
    headline:
      "What We Know – and Don’t Know – About Flock’s License Plate Cameras",
    skills: ["d3"],
    tags: ["Graphics"],
    publication: "Pew Research Center",
    excludeFromRadar: true,
    // select: true,
  },
  {
    id: "Gas prices",
    image: {
      src: "./gas-prices-illustration.jpg",
      alt: "",
    },
    date: "10/30/2026",
    url: "https://www.pewresearch.org/short-reads/2026/10/30/gas-prices-are-high-now-but-for-many-americans-they-were-even-higher-in-the-past/",
    headline:
      "Gas Prices Are High Now, but for Many Americans They Were Even Higher in the Past",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },
  {
    id: "Polling challenges in 2026",
    image: {
      src: "./featured-image-polling.jpg",
      alt: "",
    },
    date: "10/29/2026",
    url: "https://www.pewresearch.org/short-reads/2026/10/29/the-2026-midterms-will-be-uniquely-difficult-for-polls/",
    headline: "The 2026 Midterms Will Be Uniquely Difficult for Polls",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },
  {
    id: "Wellness influencers report",
    image: {
      src: "./influencers.jpeg",
      alt: "",
    },
    date: "10/7/2026",
    url: "https://www.pewresearch.org/data-labs/2026/10/07/what-do-health-and-wellness-influencers-post-about/",
    headline: "What Do Health and Wellness Influencers Post About?",
    skills: ["photoshop"],
    tags: ["Illustration", "Graphics"],
    publication: "Pew Research Center",
    excludeFromRadar: true,
    context:
      "I created all the graphics and the featured illustration for this report.",
  },
  {
    id: "AI on the internet",
    image: {
      src: "./ai-internet.png",
      alt: "",
    },
    date: "7/2/2026",
    url: "https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/",
    headline: "How Much of the Internet Is Written With AI?",
    skills: ["react", "wordpress", "d3"],
    select: true,
    tags: ["Graphics", "Interactive"],
    publication: "Pew Research Center",
  },
  {
    id: "Solar eclipse",
    image: {
      src: "./eclipse.png",
      alt: "",
    },
    date: "3/21/2024",
    url: "https://wapo.st/3VzBcCe",
    headline: "See what the solar eclipse will look like in your city",
    skills: ["d3", "python"],
    tags: ["Graphics", "Interactive", "Design"],
    publication: "The Washington Post",
    select: true,
  },

  // payment

  // old-leaders
  {
    id: "Silicon samples",
    image: {
      src: "./silicon-samples.jpg",
      alt: "",
    },
    publication: "Pew Research Center",
    date: "8/30/2026",
    url: "https://www.pewresearch.org/data-labs/2026/09/30/how-synthetic-polling-results-change-based-on-the-ai-model/",
    headline: "Can AI Stand In for Human Survey-Takers? Not Really",

    skills: ["observable", "d3", "illustrator", "art direction"],
    tags: ["Graphics"],
    excludeFromRadar: true,
    context:
      "I created all the charts for the complex analysis behind this report, and commissioned an illustrator to create a compelling visual that would match the abstract, dystopian topic.",
    select: true,
  },
  {
    id: "Life expectancy",
    image: {
      src: "./shameworld.jpeg",
      alt: "",
    },
    date: "10/3/2023",
    url: "https://wapo.st/46s4RQv",
    headline: "Compare your life expectancy with others around the world",
    skills: ["d3", "react", "illustrator"],
    select: true,
    tags: ["Interactive", "Graphics", "Design"],
    publication: "The Washington Post",
  },
  {
    id: "Payment methods",
    image: {
      src: "./payment.jpeg",
      alt: "",
    },
    publication: "Pew Research Center",
    date: "8/30/2026",
    url: "https://www.pewresearch.org/short-reads/2026/09/30/from-cash-to-credit-how-americans-payment-methods-have-changed-in-the-past-decade/",
    headline:
      "From cash to credit, how Americans’ payment methods have changed in the past decade",

    skills: ["d3", "illustrator", "photoshop"],
    tags: ["Graphics", "Illustration"],
    excludeFromRadar: true,
  },
  {
    id: "Data center ads",
    image: {
      src: "./data-center-illustration.jpg",
      alt: "",
    },
    date: "10/29/2026",
    url: "https://www.pewresearch.org/short-reads/2026/10/29/on-facebook-and-instagram-political-ads-are-increasingly-critical-of-data-centers/",
    headline:
      "On Facebook and Instagram, Political Ads Are Increasingly Critical of Data Centers",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
  },
  {
    id: "Refugee admissions",
    image: {
      src: "./refugees.png",
      alt: "",
    },
    date: "8/17/2026",
    url: "https://www.pewresearch.org/short-reads/2026/08/17/refugee-admissions-to-the-us-are-dropping-sharply-in-trumps-second-term/",
    headline:
      "Refugee admissions to the U.S. are dropping sharply in Trump’s second term",
    skills: ["react", "wordpress", "d3"],
    tags: ["Graphics"],
    publication: "Pew Research Center",
    // excludeFromRadar: true,
  },
  {
    id: "Wellness influencers",
    image: {
      src: "wellness.jpeg",
      alt: "",
    },
    skills: ["illustration"],
    date: "7/13/2026",
    url: "https://www.pewresearch.org/short-reads/2026/07/13/nearly-6-in-10-young-women-get-health-and-wellness-information-from-influencers/",
    headline:
      "Nearly 6 in 10 young women get health and wellness information from influencers",
    tags: ["Illustration", "Graphics"],
    publication: "Pew Research Center",
  },
  {
    id: "Klamath river",
    image: {
      src: "./klamath.png",
      alt: "",
    },
    date: "8/8/2025",
    url: "https://wapo.st/4rU0aJR",
    headline: "15 teens. 300 miles. One mighty ancestral river, running free.",
    skills: ["design", "development", "video", "react", "ux"],
    select: true,
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
  },

  {
    id: "U.S. representation ratio",
    image: {
      src: "./us-democracy-beeswarm.png",
      alt: "",
    },
    date: "7/2/2026",
    url: "https://www.pewresearch.org/short-reads/2026/07/02/8-ways-that-us-style-democracy-stands-out-globally/",
    headline: "8 ways that U.S.-style democracy stands out globally",
    skills: ["d3", "illustrator"],
    tags: ["Graphics"],
    publication: "Pew Research Center",
    select: true,
  },
  {
    id: "Election betting",
    image: {
      src: "./voting.jpeg",
      alt: "",
    },
    date: "6/23/2026",
    url: "https://www.pewresearch.org/short-reads/2026/06/23/more-than-half-of-states-restrict-betting-on-elections/",
    headline: "More than half of states restrict betting on elections",
    skills: ["d3", "illustrator"],
    tags: ["Illustration", "Graphics"],
    publication: "Pew Research Center",
  },
  {
    id: "Juneteenth map",
    image: {
      src: "./juneteenth-social-video.jpg",
      alt: "",
    },
    date: "6/19/2026",
    url: "https://www.instagram.com/p/DZxRkTgCF7O/?hl=en",
    headline:
      "More than half of states will recognize Juneteenth as a legal holiday in 2026",
    skills: ["photoshop", "d3"],
    tags: ["Illustration", "Graphics"],
    publication: "Pew Research Center",
    excludeFromWork: true,
  },
  {
    id: "Juneteenth map",
    image: {
      src: "./juneteenth.gif",
      alt: "",
    },
    date: "6/11/2026",
    url: "https://www.pewresearch.org/short-reads/2026/06/11/more-than-half-of-states-will-recognize-juneteenth-as-a-legal-holiday-in-2026/",
    headline:
      "More than half of states will recognize Juneteenth as a legal holiday in 2026",
    skills: ["python", "photoshop"],
    tags: ["Graphics"],
    publication: "Pew Research Center",
    excludeFromRadar: true,
  },
  {
    id: "Oldest leaders",
    image: {
      src: "./old-leaders.jpeg",
      alt: "",
    },
    date: "6/9/2026",
    url: "https://www.pewresearch.org/short-reads/2026/06/09/as-trump-turns-80-who-are-the-oldest-and-youngest-current-world-leaders/",
    headline:
      "As Trump turns 80, who are the oldest – and youngest – current world leaders?",
    skills: ["photoshop", "illustrator", "d3"],
    tags: ["Illustration", "Graphics"],
    publication: "Pew Research Center",
    excludeFromRadar: true,
  },
  {
    id: "Electric vehicle sales",
    image: {
      src: "./evs.png",
      alt: "",
    },
    date: "5/28/2026",
    url: "https://www.pewresearch.org/short-reads/2026/05/28/worldwide-a-quarter-of-new-car-sales-are-electric-vehicles-or-hybrids/",
    headline:
      "Worldwide, a quarter of new car sales are electric vehicles or hybrids",
    skills: ["observable", "illustrator"],
    tags: ["Graphics"],
    publication: "Pew Research Center",
  },
  {
    id: "Homicide declines",
    image: {
      src: "./homicide-declines-2.png",
      alt: "",
    },
    date: "1/22/2026",
    url: "https://wapo.st/4bD4Lv1",
    headline:
      "U.S. crime has dropped sharply since the pandemic. Here’s where it stands.",
    skills: ["datawrapper", "d3", "python"],
    tags: ["Graphics", "Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Good life quiz",
    image: {
      src: "./good-life.png",
      alt: "",
    },
    date: "12/14/2025",
    url: "https://wapo.st/4a0fK0h",
    headline: "Are you living a good life? Take this quiz to find out.",
    skills: ["design", "development", "quiz", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Nochebuena",
    image: {
      src: "./nochebuena.png",
      alt: "",
    },
    date: "12/13/2025",
    url: "https://wapo.st/4ryaqqI",
    headline: "For Latino families, Nochebuena looks different this year",
    skills: ["development", "react"],
    tags: ["Interactive", "Design"],
    publication: "The Washington Post",
    // excludeFromRadar: true,
  },
  {
    id: "U.S. homicide declines",
    image: {
      src: "./homicide-declines.png",
      alt: "",
    },
    date: "11/20/2025",
    url: "https://wapo.st/4kopwwL",
    headline:
      "These five cities help explain why homicide rates are down across the U.S.",
    skills: ["datawrapper", "d3", "python"],
    tags: ["Graphics", "Interactive"],
    publication: "The Washington Post",
    // excludeFromRadar: true,
  },
  {
    id: "The 7-minute workout",
    image: {
      src: "./7-min-workout.jpeg",
      alt: "",
    },
    date: "1/9/2025",
    url: "https://wapo.st/3PBpp2l",
    headline: "The original, science‑backed 7‑minute workout to get fit fast",
    skills: ["design", "development", "react", "ux"],
    tags: ["Interactive", "Design"],
    publication: "The Washington Post",
    select: true,
  },
  {
    id: "Youth violence in D.C.",
    image: {
      src: "./youth-violence.png",
      alt: "",
    },
    date: "6/9/2025",
    url: "https://wapo.st/4bD4QyP",
    headline: "Do kids feel safe in D.C.? We asked them.",
    skills: ["design", "development", "video", "react", "ux"],
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
    select: true,
  },

  {
    id: "Lucy",
    publication: "The Washington Post",
    image: {
      src: "./lucy.jpeg",
      alt: "",
    },
    date: "11/22/2024",
    url: "https://wapo.st/4gRgE04",
    headline: "Lucy’s Legacy",
    skills: ["design", "development", "react", "print conversion", "figma"],
    tags: ["Interactive", "Graphics"],
    excludeFromRadar: true,
  },
  {
    id: "Voter portraits",
    image: {
      src: "./voter-portraits.jpeg",
      alt: "",
    },
    date: "11/5/2024",
    url: "https://wapo.st/3WgLmr8",
    headline: "Voters across America: Joyful, exhausted and anxious",
    skills: ["design", "development", "react", "snap scroll"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "2024 election deniers",
    image: {
      src: "./election-deniers.jpeg",
      alt: "",
    },
    date: "10/23/2024",
    url: "https://wapo.st/4bKmT5D",
    headline:
      "Over 230 Republican candidates have cast doubt on the 2024 election",
    skills: ["design", "development", "react"],
    tags: ["Interactive", "Graphics"],
    publication: "The Washington Post",
    // excludeFromRadar: true,
  },
  {
    id: "Europa",
    publication: "The Washington Post",
    image: {
      src: "./europa.jpeg",
      alt: "",
    },
    date: "10/12/2024",
    url: "https://wapo.st/40hIfQQ",
    headline:
      "Can an icy Jupiter moon sustain life? NASA’s biggest space probe will investigate.",
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Summer of love",
    image: {
      src: "./summer-of-love.jpeg",
      alt: "",
    },
    date: "8/7/2024",
    url: "https://wapo.st/4jezUWH",
    headline: "A summer of love",
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    publication: "The Washington Post",
  },
  {
    id: "Olympian",
    image: {
      src: "./javelin.jpeg",
      alt: "",
    },
    date: "8/2/2024",
    url: "https://wapo.st/4gaFp7A",
    headline: "Train Like an Olympian",
    skills: [
      "design",
      "development",
      "figma",
      "react",
      "snap scroll",
      "series",
    ],
    tags: ["Interactive", "Multimedia"],
    excludeFromRadar: true,
  },
  {
    id: "Measles memories",
    image: {
      src: "./measles.jpeg",
      alt: "",
    },
    date: "7/7/2024",
    url: "https://wapo.st/3MjmzgD",
    headline: "What it‘s like to survive measles",
    skills: ["design", "development", "figma", "react"],
    tags: ["Interactive", "Graphics"],
    publication: "The Washington Post",
    select: true,
  },
  {
    id: "Heat islands",
    publication: "The Washington Post",
    image: {
      src: "./heat-islands.jpeg",
      alt: "",
    },
    date: "6/26/2024",
    url: "https://wapo.st/3zlQXUD",
    headline: "A day in one of D.C.’s ‘heat islands’",
    skills: ["design", "development", "figma", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Noisy restaurants",
    image: {
      src: "./noise-restaurant.jpeg",
      alt: "",
    },
    date: "6/2/2024",
    url: "https://wapo.st/4cEneV8",
    headline:
      "Why restaurants are so loud, and what science says we can do about it",
    skills: ["development", "react"],
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
  },
  {
    id: "What are people listening to?",
    image: {
      src: "./listening.jpeg",
      alt: "",
    },
    date: "6/1/2024",
    url: "https://wapo.st/4cymr8e",
    headline: "What’s Washington listening to?",
    skills: ["design", "development", "figma", "react", "series"],
    tags: ["Interactive", "Multimedia"],
  },
  {
    id: "Data centers",
    image: {
      src: "./data-centers.jpeg",
      alt: "",
    },
    date: "4/17/2024",
    url: "https://wapo.st/3X2lZsv",
    headline:
      "Internet data centers are fueling drive to old power source: Coal",
    skills: ["design", "development", "figma", "react", "ai2html"],
    tags: ["Interactive", "Graphics"],
    excludeFromRadar: true,
  },
  {
    id: "NAGPRA investigation",
    publication: "Indiana Daily Student",
    date: "4/28/2023",
    image: {
      src: "./nagpra-illo.png",
    },
    url: "https://specials.idsnews.com/iu-nagpra-native-american-remains-repatriation/",
    headline:
      "Thousands of Native American remains, a legacy of offensive research and the effort to move forward",
    skills: ["data reporting", "enterprise"],
    tags: ["Reporting", "Graphics"],
    excludeFromRadar: true,
  },
  {
    id: "Irish pubs",
    image: {
      src: "./irish-pubs.png",
      alt: "",
    },
    date: "3/14/2024",
    url: "https://wapo.st/3To1hS2",
    headline: "Why so many Irish pubs have the same names",
    skills: ["illustrator", "data analysis", "python"],
    tags: ["Graphics", "Reporting"],
    publication: "The Washington Post",
    select: true,
  },
  {
    id: "HBO at the Emmys",
    image: {
      src: "./emmys.png",
      alt: "",
    },
    date: "1/12/2024",
    url: "https://wapo.st/3OnMuWb",
    headline:
      "See how HBO has led Emmy nominations for decades — and why its reign may end",
    skills: ["illustrator", "web scraping", "data analysis", "python"],
    tags: ["Graphics"],
    // excludeFromRadar: true,
  },
  {
    id: "How to rock climb",
    image: {
      src: "./rock-climbing.jpeg",
      alt: "",
    },
    date: "1/3/2024",
    url: "https://wapo.st/41MM4Ot",
    headline: "How to start indoor rock climbing",
    skills: ["design", "development", "figma", "react", "series"],
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
    // excludeFromRadar: true,
  },
  {
    id: "Fitness tune-up",
    image: {
      src: "./fitness.jpeg",
      alt: "",
    },
    date: "1/1/2024",
    url: "https://wapo.st/41NQS5Y",
    headline:
      "Are you fit for your age? Try our New Year’s tune-up to find out.",
    skills: ["development", "react", "svg", "personalization", "figma", "quiz"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Gaza voice notes",
    image: {
      src: "./gaza.jpeg",
      alt: "",
    },
    date: "11/17/2023",
    url: "https://wapo.st/3MMW0RO",
    headline:
      "Life under bombardment: A young Palestinian’s audio diary of the war",
    skills: ["development", "react", "figma", "ux", "snap scroll"],
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
  },
  {
    id: "Zebras",
    publication: "The Washington Post",
    image: {
      src: "./zebra.jpeg",
      alt: "",
    },
    date: "10/23/2023",
    url: "https://wapo.st/46H0VeW",
    headline:
      "Runaway zebras delighted the nation — and exposed their owner’s dark past",
    select: false,
    skills: ["development", "react", "figma"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Golf",
    publication: "The Washington Post",
    image: {
      src: "./golf.png",
      alt: "",
    },
    date: "10/18/2023",
    url: "https://wapo.st/45vSVw1",
    headline:
      "The modern golf swing is powerful but can hurt your back. Here’s how to prevent injuries.",
    select: false,
    skills: ["design", "development", "react"],
    tags: ["Interactive", "Multimedia"],
    excludeFromRadar: true,
  },

  {
    id: "Ticks",
    image: {
      src: "./ticks.jpeg",
      alt: "",
    },
    date: "8/29/2023",
    url: "https://wapo.st/44CAG7p",
    headline:
      "A deadly tick-borne epidemic is raging. Dogs are key to ending it.",
    select: false,
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Hot dog eating contest",
    image: {
      src: "./hot-dog-chart.png",
      alt: "",
    },
    date: "7/1/2023",
    url: "https://wapo.st/3XPezce",
    headline:
      "How hot dog contestants went from eating 10 to 76 hot dogs in 10 minutes",
    skills: ["illustrator", "animation", "data analysis", "python"],
    tags: ["Graphics", "Reporting"],
    publication: "The Washington Post",
    select: true,
  },
  {
    id: "Brooke and Billy",
    publication: "The Washington Post",
    image: {
      src: "./brooke-and-billy.png",
      alt: "",
    },
    date: "8/1/2023",
    url: "https://wapo.st/457F1QQ",
    headline:
      "An abortion ban made them teen parents. This is life two years later.",
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Abortion in America",
    image: {
      src: "./abortion-data.png",
      alt: "",
    },
    date: "6/22/2023",
    publication: "The Washington Post",
    url: "https://wapo.st/3pQ1JxV",
    headline: "A fragile new phase of abortion in America",
    select: false,
    skills: ["design", "development", "react", "datawrapper"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Car crash dashboard",
    image: {
      src: "./map-sc.jpeg",
      alt: "",
    },
    date: "5/7/2023",
    url: "https://specials.idsnews.com/car-crash-dashboard-monroe-county/",
    headline:
      "Crash map: See every car crash reported in Monroe County since 2003",
    skills: ["mapbox js", "data analysis", "python", "open sourcing"],
    tags: ["Interactive", "Graphics", "Reporting"],
    publication: "The Indiana Daily Student",
  },
  {
    id: "Catastrophic",
    publication: "Indiana Daily Student",
    image: {
      src: "./crash-sc.png",
      alt: "A computer screen with the title 'Catastrophic': The difficulty of addressing severe car crashes in Bloomington'",
    },
    date: "5/7/2023",
    url: "https://specials.idsnews.com/car-crash-traffic-safety-iu-monroe-county/",
    headline:
      "‘Catastrophic’: The difficulty of addressing severe car crashes in Bloomington",
    select: false,
    skills: ["design", "development", "reporting", "data analysis", "react"],
    tags: ["Reporting", "Graphics"],
    excludeFromRadar: true,
  },

  {
    id: "Gun violence",
    image: {
      src: "./gun-violence.png",
      alt: "",
    },
    date: "8/17/2022",
    url: "https://wapo.st/3SuPH66",
    headline:
      "Kids who witness parents shot to death rarely get help for trauma",
    select: false,
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Art with a point",
    image: {
      src: "./art.png",
      alt: "A pink neon sign reading 'Art with a Point'",
    },
    date: "8/10/2022",
    url: "https://wapo.st/3dZR3XB",
    headline:
      "Art With a Point: A rotating cast of artists weighs in on the state of the world",
    select: false,
    skills: ["design", "development", "react", "typography"],
    tags: ["Interactive", "Design"],
    publication: "The Washington Post",
  },
  {
    id: "Glacier",
    publication: "The Washington Post",
    image: {
      src: "./glacier.png",
      alt: "",
    },
    date: "8/28/2022",
    url: "https://wapo.st/3RpKWcH",
    headline:
      "A melting glacier, an imperiled city and one farmer’s fight for climate justice",
    select: false,
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Border",
    publication: "The Washington Post",
    image: {
      src: "./border.png",
      alt: "",
    },
    date: "7/8/2022",
    url: "https://wapo.st/3M20nqC",
    headline: "Across southern Arizona, a full range of border woes for Biden",
    select: false,
    skills: ["design", "development", "react"],
    tags: ["Interactive"],
    excludeFromRadar: true,
  },
  {
    id: "Trojan Horse feature",
    publication: "Indiana Daily Student",
    date: "1/5/2022",
    image: {
      src: "./trojan-horse.png",
    },
    url: "https://specials.idsnews.com/trojan-horse-great-resignation-bloomington-kirkwood/",
    headline:
      "Hiring shortages, 70-hour weeks, reduced hours: How the Trojan Horse is surviving the Great Resignation",
    skills: ["data reporting", "enterprise"],
    tags: ["Reporting"],
    excludeFromRadar: true,
  },
  {
    id: "Indignity in death",
    publication: "Indiana Daily Student",
    image: {
      src: "./graves.png",
      alt: "An aerial photo of a cemetery",
    },
    date: "12/10/2021",
    url: "https://specials.idsnews.com/unmarked-graves-racism-bloomington-eagleson-jordan-rose-hill/",
    headline:
      "Indignity in death: Unmarked graves in Bloomington indicate long history of racism",
    skills: [
      "design",
      "development",
      "audio reporting",
      "audio editing",
      "javascript",
      "illustrator",
    ],
    tags: ["Graphics", "Interactive", "Multimedia"],
    excludeFromRadar: true,
  },
  {
    id: "Preschool story",
    publication: "Chalkbeat Indiana",
    date: "11/10/2021",
    url: "https://www.idsnews.com/article/2021/11/preschool-teacher-low-pay-covid-19-iu-hoosier-courts-students",
    headline:
      "Preschool teachers deal with higher COVID risk, overwork for low pay",
    // skills: ["reporting"],
    tags: ["Reporting"],
    excludeFromRadar: true,
  },

  {
    id: "In the Dark",
    image: {
      src: "./in-the-dark.png",
    },
    publication: "Indiana Daily Student",
    date: "10/25/2021",
    url: "http://specials.idsnews.com/iu-health-bloomington-hospital-price-transparency-rule-medical-bill/",
    headline:
      "In the dark: Transparency rule fails to shed light on costs for IU Health Bloomington patients",
    skills: ["data reporting", "d3"],
    tags: ["Reporting", "Graphics"],
    excludeFromRadar: true,
  },
  {
    id: "Bilingual schools",
    publication: "Chalkbeat Indiana",
    date: "7/19/2021",
    url: "https://in.chalkbeat.org/2021/7/19/22580738/dual-language-spanish-hispanic-lawrence-township-school-indianapolis",
    headline:
      "One Indianapolis district’s bilingual classrooms attempt to address learning gaps for Hispanic students",
    tags: ["Reporting"],
    excludeFromRadar: true,
  },
  {
    id: "Graduation",
    publication: "Chalkbeat",
    date: "5/28/2021",
    url: "https://in.chalkbeat.org/2021/5/28/22458705/alternative-school-graduation-simon-mall-indianapolis",
    headline:
      "‘I finally did it’: Once behind in high school, Indianapolis students celebrate graduation",
    skills: ["photography"],
    tags: ["Reporting"],
    excludeFromRadar: true,
  },
  {
    id: "Election deniers print",
    image: {
      src: "election-deniers-print.png",
      alt: "",
    },
    date: "10/24/2024",
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Corpse flower",
    date: "8/3/2024",
    image: {
      src: "corpse-flower-metro.png",
      alt: "",
    },
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Life expectancy print",
    date: "10/22/2023",
    image: {
      src: "A01_RE_EZ_DAILY_20231022.png",
      alt: "",
    },
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Life expectancy print page 2",
    date: "10/22/2023",
    image: {
      src: "A20_RE_EZ_DAILY_20231022.png",
      alt: "",
    },
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Life expectancy print page 2",
    date: "11/24/2024",
    image: {
      src: "lucy-print.png",
      alt: "",
    },
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Voters print",
    image: {
      src: "A08_RE_EZ_DAILY_20240811.png",
      alt: "",
    },
    date: "8/11/2024",
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },

  {
    id: "Heat islands print",
    image: {
      src: "C01_RE_EZ_DAILY_20240630 (1).png",
      alt: "",
    },
    date: "6/30/2024",
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },

  {
    id: "Post A1",
    image: {
      src: "wapo-p1.jpeg",
      alt: "",
    },
    date: "8/6/2022",
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Break out the books",
    date: "9/10/2020",
    image: {
      src: "./IDSB01-CL-0910.jpg",
      alt: "A newspaper page with the headline 'Break out the books",
    },
    skills: ["print layout", "illustration", "photoshop"],
    tags: ["Print", "Design", "Illustration"],
    publication: "The Indiana Daily Student",
    excludeFromRadar: true,
  },
]
const links = nodes.reduce((acc, d) => {
  if (d.type == "tag") {
    return acc
  } else {
    return [
      ...acc,
      ...d.tags.map((t) => {
        return {
          source: d.id,
          target: t,
          value: 1,
        }
      }),
    ]
  }
}, [])

console.log(links)

const data = { nodes, links }

export default data

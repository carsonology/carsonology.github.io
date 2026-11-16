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
    id: "AI on the internet",
    image: {
      src: "./ai-gif.gif",
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
  },
  {
    id: "U.S. democracy beeswarm",
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
  },
  {
    id: "Refugees bump chart",
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
  },
  {
    id: "Hot dog-eating contest",
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
  },

  {
    id: "Open source car crash dashboard",
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
    id: "Wellness illustration",
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
    id: "Youth violence in D.C.",
    image: {
      src: "./youth-violence.png",
      alt: "",
    },
    date: "6/9/2025",
    url: "https://wapo.st/4bD4QyP",
    headline: "Do kids feel safe in D.C.? We asked them.",
    skills: ["design", "development", "video", "react", "ux"],
    // select: true,
    tags: ["Interactive", "Multimedia"],
    publication: "The Washington Post",
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
    id: "Election deniers print",
    image: {
      src: "election-deniers-print.png",
      alt: "",
    },
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
    skills: ["print layout"],
    tags: ["Print", "Design"],
    publication: "The Washington Post",
    excludeFromRadar: true,
  },
  {
    id: "Break out the books",
    image: {
      src: "./IDSB01-CL-0910.jpg",
      alt: "A newspaper page with the headline 'Break out the books",
    },
    skills: ["print layout", "illustration", "photoshop"],
    tags: ["Print", "Design", "Illustration"],
    publication: "The Indiana Daily Student",
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
    id: "Polling update",
    image: {
      src: "./featured-image-polling.jpg",
      alt: "",
    },
    date: "10/29/2026",
    url: "https://www.pewresearch.org/short-reads/2026/11/12/download-my-free-guide-what-products-and-services-do-health-and-wellness-influencers-promote/",
    headline: "The 2026 Midterms Will Be Uniquely Difficult for Polls",
    skills: ["photoshop"],
    tags: ["Illustration"],
    publication: "Pew Research Center",
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
    id: "Flock cameras social post",
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
  },
  {
    id: "Juneteenth social post",
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
  },
  // juneteenth-social-video.jpg

  // spike-map-animation-first-slide-static
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

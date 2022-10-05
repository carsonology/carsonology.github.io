import './App.css';
import { useState, useEffect } from 'react'
import Header from './Header.js'
import Nav from './Nav.js'
import Section from './Section.js'

function App() {

  const [shownSection, setShownSection] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShownSection('webdev')
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const web_clips = [
    {
      image: {
        src: "./art.png",
        alt: "",
        height: 314
      },
      date: "8/10/2022",
      url: "https://wapo.st/3dZR3XB",
      headline: "Art With a Point: A rotating cast of artists weighs in on the state of the world",
      select: true
    },
    {
      image: {
        src: "./graves.png",
        alt: ""
      },
      date: "12/10/2021",
      url: "https://specials.idsnews.com/unmarked-graves-racism-bloomington-eagleson-jordan-rose-hill/",
      headline: "Indignity in death: Unmarked graves in Bloomington indicate long history of racism",
      select: true
    },
    {
      image: {
        src: "./candidates.png",
        alt: ""
      },
      date: "10/3/2022",
      url: "https://specials.idsnews.com/local-state-election-monroe-county-indiana-2022/",
      headline: "Meet your candidates for local Bloomington and executive state office",
      select: false
    },
    {
      image: {
        src: "./pride.png",
        alt: ""
      },
      date: "9/2/2022",
      url: "http://specials.idsnews.com/pride-photos-bloomington-2022/",
      headline: "Scenes from Bloomington Pridefest 2022 on Kirkwood",
      select: false
    },
    {
      image: {
        src: "./glacier.png",
        alt: ""
      },
      date: "8/28/2022",
      url: "https://wapo.st/3RpKWcH",
      headline: "A melting glacier, an imperiled city and one farmer’s fight for climate justice",
      select: false
    },
    {
      image: {
        src: "./wolves.png",
        alt: ""
      },
      date: "8/25/2022",
      url: "https://wapo.st/3LWgea1",
      headline: "Truck, plane, backpack: Inside the extreme effort to save Mexican wolves",
      select: false
    },
    {
      image: {
        src: "./gun-violence.png",
        alt: ""
      },
      date: "8/17/2022",
      url: "https://wapo.st/3SuPH66",
      headline: "Kids who witness parents shot to death rarely get help for trauma",
      select: true
    },
    {
      image: {
        src: "./border.png",
        alt: ""
      },
      date: "7/8/2022",
      url: "https://wapo.st/3M20nqC",
      headline: "Across southern Arizona, a full range of border woes for Biden",
      select: false
    },
    {
      image: {
        src: "./trojan-horse.png",
        alt: ""
      },
      date: "1/5/2022",
      url: "https://specials.idsnews.com/trojan-horse-great-resignation-bloomington-kirkwood/",
      headline: "Hiring shortages, 70-hour weeks, reduced hours: How the Trojan Horse is surviving the Great Resignation",
      select: false
    },
    {
      image: {
        src: "./in-the-dark.png",
        alt: "A photo of a blackboard with the words 'In the dark: Transparency rule fails to shed light on costs for IU Health Bloomington patients'"
      },
      date: "1/5/2022",
      url: "http://specials.idsnews.com/iu-health-bloomington-hospital-price-transparency-rule-medical-bill/",
      headline: "In the dark: Transparency rule fails to shed light on costs for IU Health Bloomington patients",
      select: true
    },
    {
      image: {
        src: "./mcrobbie-speeches.png",
        alt: "A white speech bubble on a red background with the words 'IU is diverse and inclusive —Michael McRobbie, IU president'"
      },
      date: "12/15/2020",
      url: "http://specials.idsnews.com/iu-president-michael-mcrobbie-speeches-gpt-2/",
      headline: "The president’s speeches: Looking back on McRobbie’s tenure by analyzing his words",
      select: false
    },
    {
      image: {
        src: "./steve.png",
        alt: ""
      },
      date: "12/15/2020",
      url: "http://specials.idsnews.com/steve-moore-almost-died-coronavirus-bloomington/",
      headline: "Steve Moore almost died. Now he uses his experience to show COVID-19 is real and life-changing.",
      select: false
    },
    {
      image: {
        src: "./tattoo.jpg",
        alt: "A photo of a man tattooing someone with the words 'Making change loudly: Local tattoo artist fights to create space for Black people in Bloomington'"
      },
      date: "12/1/2020",
      url: "http://specials.idsnews.com/bloomington-tattoo-artist-creates-space-black-people/",
      headline: "'Making change loudly': Local tattoo artist fights to create space for Black people in Bloomington",
      select: false
    },
  ]
  const graphic_clips = [
    {
      date: "10/25/2021",
      headline: "In the dark: Transparency rule fails to shed light on costs for IU Health Bloomington patients",
      url: "http://specials.idsnews.com/iu-health-bloomington-hospital-price-transparency-rule-medical-bill/",
      codepen: "wvrxLpr"
    },
    {
      date: "12/10/2021",
      headline: "Indignity in death: Unmarked graves in Bloomington indicate long history of racism",
      url: "https://specials.idsnews.com/unmarked-graves-racism-bloomington-eagleson-jordan-rose-hill/",
      codepen: "oNGPzQo"
    },
    {
      date: "12/10/2021",
      headline: "Hiring shortages, 70-hour weeks, reduced hours: How the Trojan Horse is surviving the Great Resignation",
      url: "https://specials.idsnews.com/trojan-horse-great-resignation-bloomington-kirkwood/",
      codepen: "bGojPYY"
    },
  ]
  const designs = [
    {
      image: {
        src: './wapo-p1.png',
        alt: "",
        height: 1.6667
      }
    },
    {
      image: {
        src: "./wapo-metro.png",
        alt: ""
      }
    },
    {
      image: {
        src: "IDSA04-CL-0420.jpg",
        alt: "A newspaper page with the headline 'Into the deep end' and a large photo of a man playing soccer"
      }
    },
    {
      image: {
        src: "./IDSB01-CL-0910.jpg",
        alt: "A newspaper page with the headline 'Break out the books"
      }
    },
    {
      image: {
        src: "./sign1twitter.gif",
        alt: "A gif with the words 'how to sign Do you have a mask' above an animation of how to communicate that phrase in sign language"
      }
    },
    {
      image: {
        src: "./sign2twitter.gif",
        alt: "A gif with the words 'how to sign coronavirus' above an animation of how to communicate that phrase in sign language"
      }
    },
    {
      image: {
        src: "./larisa1.png",
        alt: "A poster titled 'The Nutcracker' with a photo of a ballerina in a pink tutu"
      }
    },
    {
      image: {
        src: "./sleeping-beauty.png",
        alt: "A poster titled 'The Sleeping Beauty' with a photo of two dancers dressed in white"
      }
    },
    {
      image: {
        src: "./dashboard-illo.png",
        alt: "An illustration of the Sample Gates at IU surrounded by bar charts and pie charts"
      }
    },
    {
      image: {
        src: "./sports-psych-01.png",
        alt: "An illustration of a brain inside a football helmet"
      }
    },


  ]
  const writing_clips = [
    {
      date: "1/5/2022",
      url: "https://specials.idsnews.com/trojan-horse-great-resignation-bloomington-kirkwood/",
      headline: "Hiring shortages, 70-hour weeks, reduced hours: How the Trojan Horse is surviving the Great Resignation"
    },
    {
      date: "12/15/2021",
      url: "https://in.chalkbeat.org/2021/12/15/22838659/critical-race-theory-reading-lists-curriculum-indiana-republican-bill-legislation-ban",
      headline: "Indiana Republican lawmakers want parents to review school curriculum"
    },
    {
      date: "11/10/2021",
      url: "https://www.idsnews.com/article/2021/11/preschool-teacher-low-pay-covid-19-iu-hoosier-courts-students",
      headline: "Preschool teachers deal with higher COVID risk, overwork for low pay"
    },
    {
      date: "10/25/2021",
      url: "http://specials.idsnews.com/iu-health-bloomington-hospital-price-transparency-rule-medical-bill/",
      headline: "In the dark: Transparency rule fails to shed light on costs for IU Health Bloomington patients"
    },
    {
      date: "7/19/2021",
      url: "https://in.chalkbeat.org/2021/7/19/22580738/dual-language-spanish-hispanic-lawrence-township-school-indianapolis",
      headline: "One Indianapolis district’s bilingual classNamerooms attempt to address learning gaps for Hispanic students"
    },
    {
      date: "7/15/2021",
      url: "https://in.chalkbeat.org/2021/7/15/22578815/indianapolis-students-social-justice-summer-camp",
      headline: "Indianapolis social justice camp taps into students’ desire to tackle big issues"
    },
    {
      date: "7/1/2021",
      url: "https://in.chalkbeat.org/2021/7/1/22558147/kindergarten-summer-school-indianapolis-charter-tindley-genesis-academy",
      headline: "Kindergarten summer program gives kids an edge at one Indianapolis charter school"
    },
    {
      date: "6/16/2021",
      url: "https://in.chalkbeat.org/2021/6/16/22537402/indianapolis-public-schools-covid-stimulus-money-esser-tutoring-mental-health",
      headline: "Tutoring, tech support, therapy: How parents want IPS to spend millions in COVID aid"
    },
    {
      date: "6/14/2021",
      url: "https://in.chalkbeat.org/2021/6/14/22533973/covid-vaccine-children-school-masks-indianapolis",
      headline: "COVID vaccine hesitancy among Black and Latino students concerns Indianapolis officials"
    },
    {
      date: "5/28/2021",
      url: "https://in.chalkbeat.org/2021/5/28/22458705/alternative-school-graduation-simon-mall-indianapolis",
      headline: "‘I finally did it’: Once behind in high school, Indianapolis students celebrate graduation"
    },
    {
      date: "",
      url: "",
      headline: ""
    },
  ]

  return (
    <>
      <Header />

      <main>
        <Nav shownSection={shownSection} setShownSection={setShownSection} />

        {shownSection === 'webdev' && (
          <Section
            title="webdev"
            data={web_clips}
          />
        )}
        {shownSection === 'graphics' && (
          <Section
            title="graphics"
            data={graphic_clips}
          />
        )}
        {shownSection === 'design' && (
          <Section
            title="design"
            data={designs}
          />
        )}
        {shownSection === 'writing' && (
          <Section
            title="writing"
            data={writing_clips}
          />
        )}
      </main>

      <footer>
        <div>
          <img src="./headshot.jpg"
            alt="Carson's headshot" />
          <div>
            <p>I'm <a href="https://twitter.com/_carsonology" target="_blank">Carson TerBush</a>, a journalist
              studying at Indiana University. I like to write, design and code stories. In my free time, I love
              cooking, drawing and rewatching Fleabag.</p>
            <p>Want to connect? <a href="mailto:carson.terbush@gmail.com">Email me!</a></p>
          </div>
        </div>

        <small><p className="footnote">Made with <span style={{ color: "#C93662", marginTop: '-2px' }}>&#9829;</span> and <a href="https://github.com/carsonology/carsonology.github.io" target="_blank">React</a> | &#169; 2022</p></small>
      </footer>
    </>
  );
}

export default App;

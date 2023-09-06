import './App.css';
import { useState } from 'react'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Section from './components/Section.js'
// import content for clips
import web_clips from './clips/web_dev.json'
import graphic_clips from './clips/graphics.json'
import writing_clips from './clips/writing.json'
import design_clips from './clips/design.json'

function App() {

  const config = [
    {
      section: 'webdev',
      data: web_clips,
    },
    {
      section: 'graphics',
      data: graphic_clips,
    },
    {
      section: 'design',
      data: design_clips,
    },
    {
      section: 'writing',
      data: writing_clips,
    }
  ]

  const [shownSection, setShownSection] = useState('graphics')

  return (
    <>
      <Header />

      <main>
        <Nav shownSection={shownSection} setShownSection={setShownSection} />

        {config.map(topic => {
          return (
            <>
              {shownSection === topic.section && (
                <>
                  <Section
                    title={topic.section}
                    data={topic.data}
                  />
                </>
              )}
            </>
          )
        })}
      </main>

      <footer>
        <div>
          <img src="./terbush-headshot.jpg"
            alt="Carson's headshot" />
          <div>
            <p>I'm <a href="https://twitter.com/_carsonology" target="_blank">Carson TerBush</a>, a visual journalist
              with experience in data visualization, design, web development and investigative reporting. In my free time, I love
              cooking, drawing and rewatching Fleabag.</p>
            <p>Want to connect? <a href="mailto:carson.terbush@gmail.com">Email me!</a></p>
          </div>
        </div>

        <small><p className="footnote">Made with <span style={{ color: "#C93662", marginTop: '-2px' }}>&#9829;</span> and <a href="https://github.com/carsonology/carsonology.github.io" target="_blank">React</a> | &#169; 2023</p></small>
      </footer>
    </>
  );
}

export default App;

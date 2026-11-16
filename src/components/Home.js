import { useState } from "react"
import { styled } from "@stitches/react"
// import content for clips
import web_clips from "../clips/web_dev.json"
import graphic_clips from "../clips/graphics.json"
import writing_clips from "../clips/writing.json"
import design_clips from "../clips/design.json"

import Network from "./Network/index.js"
import ProjectPage from "./ProjectPage/index.js"
import Work from "./Work"
import Nav from "./Nav"
import { Link } from "react-router-dom"

const Intro = styled("div", {
  margin: "auto",
  marginTop: "8em",
  paddingLeft: 20,
  paddingRight: 20,
  maxWidth: 700,

  "div p": {
    fontFamily: "Young Serif",
    fontSize: 64,
    lineHeight: 1,
    margin: 0,
  },

  p: {
    marginTop: "1em",
    fontFamily: "Archivo",
    fontSize: 24,
    color: "var(--text-color)",
    lineHeight: 1.6,
  },

  ".name": {
    position: "relative",
    width: "100%",
    display: "flex",
    // flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    p: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
  },
  ".name span:first-child": {
    // position: "absolute",
    top: 0,
    left: "1.3rem",
    mixBlendMode: "multiply",
    zIndex: 1,
    // display: "block",/
  },
  ".name span:nth-child(2)": {
    // display: "block",
    // margin: "auto",
    // transform: "translateX(-2rem)",
    zIndex: 0,
    // margin: "auto",
  },
  ".name span:nth-child(3)": {
    // position: "absolute",
    bottom: 0,
    right: "2.2rem",
    mixBlendMode: "multiply",
    // display: "block",
  },
})

const H4 = styled("h4", {
  fontFamily: "Young Serif",
  fontSize: 48,
  fontWeight: "normal",
  color: "var(--text-color)",
  marginTop: "4rem",
  marginBottom: 0,
})

const Mug = styled("span", {
  display: "inline-block",
  backgroundImage: "url(/mug.jpg)",
  width: 150,
  height: 150,
  backgroundSize: "cover",
  borderRadius: 30,
})

const Home = ({
  setCurrentView,
  setCurrentPage,
  setProjectIdSelectedFromHome,
}) => {
  return (
    <>
      <Intro>
        <div className="name">
          <p>
            <span>Carson</span> <Mug></Mug> <span>TerBush</span>
          </p>
        </div>
        <p>
          I'm a <strong>visual journalist</strong> working at the intersection
          of{" "}
          <strong>
            <span
              style={{
                background: "rgba(188,214,237,.75)",
                paddingLeft: ".2em",
                paddingRight: ".2em",
                mixBlendMode: "multiply",
              }}
            >
              design,
            </span>{" "}
            <span
              style={{
                background: "rgba(253,199,22,.75)",
                paddingLeft: ".2em",
                paddingRight: ".2em",
                mixBlendMode: "multiply",
              }}
            >
              data
            </span>{" "}
            and{" "}
            <span
              style={{
                background: "rgba(122,173,103,.75)",
                paddingLeft: ".2em",
                paddingRight: ".2em",
                mixBlendMode: "multiply",
              }}
            >
              code.
            </span>
          </strong>
          {/* A lot of
                my projects involve graphics, interactive development, design,
                reporting and writing, illustration or a mix. */}
          {/* Last year I won a
                Silver Medal and four Bronze Medals for multimedia design from
                the SND awards. */}
        </p>
        <p>
          I work at{" "}
          <strong>
            {" "}
            <a
              href="https://www.pewresearch.org/staff/carson-terbush/"
              target="_blank"
            >
              Pew Research Center,
            </a>
          </strong>{" "}
          making charts about{" "}
          <a
            href="https://www.pewresearch.org/politics/2026/10/08/with-americans-in-a-sour-mood-democratic-voters-are-more-engaged-in-midterms/"
            target="_blank"
          >
            politics,
          </a>{" "}
          <a
            target="_blank"
            href="https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/"
          >
            AI
          </a>{" "}
          and{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2026/09/23/prediction-markets-trading-volume-doubled-between-may-and-july-largely-driven-by-sports/"
            target="_blank"
          >
            prediction markets,
          </a>{" "}
          among{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2026/11/09/what-we-know-and-dont-know-about-flocks-license-plate-cameras/"
            target="_blank"
          >
            other things.
          </a>{" "}
          I also{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2026/10/30/gas-prices-are-high-now-but-for-many-americans-they-were-even-higher-in-the-past/"
            target="_blank"
          >
            design
          </a>{" "}
          and{" "}
          <a
            href="https://www.pewresearch.org/data-labs/2026/09/30/can-ai-stand-in-for-human-survey-takers-not-really/"
            target="_blank"
          >
            commission
          </a>{" "}
          illustrations for reports.
        </p>
        <p>
          I previously worked at{" "}
          <strong>
            <a
              href="https://www.washingtonpost.com/people/carson-terbush/"
              target="_blank"
            >
              The Washington Post
            </a>
          </strong>{" "}
          on the Design Team, designing{" "}
          <a
            href="https://www.washingtonpost.com/health/interactive/2024/measles-outbreak-vaccine/"
            target="_blank"
          >
            {" "}
            visual articles
          </a>{" "}
          and building interactive tooling for{" "}
          <a
            href="https://www.washingtonpost.com/nation/interactive/2025/klamath-river-kayak-journey/"
            target="_blank"
          >
            new story formats.
          </a>{" "}
          I also often{" "}
          <a
            href="https://www.washingtonpost.com/science/interactive/2024/solar-eclipse-view-cities/"
            target="_blank"
          >
            collaborated
          </a>{" "}
          with the Graphics Team.
        </p>
      </Intro>

      <Intro>
        <H4>Selected projects</H4>
        <p>
          Many of my projects cross disciplines, and these are some I'm proudest
          of. Click on a bubble to see it live on the web. For more detail,
          check out my <Link to="/work">full list of work.</Link>
          {/* and case studies. */}
        </p>
      </Intro>
      <Network
        setCurrentView={setCurrentView}
        setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
      />
      {/* <Intro>
              <p>Case studies</p>
              <p>I'm a visual journalist, designer and graphic artist.</p>
              <p>
                I work at Pew Research Center, making charts about politics, AI
                and prediction markets, among other things. I also design and
                commission illustrations for reports.
              </p>
              <p>
                Previously I worked on The Washington Post Design Team,
                designing visual articles and building interactive tooling for
                new story formats. I also collaborated often with the Graphics
                Team.
              </p>
              <p>Check out my selected projects below.</p>
            </Intro> */}
    </>
  )
}

export default Home

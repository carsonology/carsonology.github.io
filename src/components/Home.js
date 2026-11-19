import { styled } from "@stitches/react"

import Network from "./Network/index.js"
import { Link } from "react-router-dom"

import jump from "jump.js"

const Intro = styled("div", {
  margin: "auto",
  marginTop: "8em",
  paddingLeft: 20,
  paddingRight: 20,
  maxWidth: 700,

  "@media screen and (max-width: 600px)": {
    marginTop: "5em",
  },

  "div p": {
    fontFamily: "Young Serif",
    fontSize: 64,
    lineHeight: 1,
    margin: 0,

    "@media screen and (max-width: 600px)": {
      fontSize: 32,
    },
  },

  p: {
    marginTop: "1em",
    fontFamily: "Archivo",
    fontSize: 24,
    color: "var(--text-color)",
    lineHeight: 1.6,

    "@media screen and (max-width: 600px)": {
      fontSize: 18,
    },
  },

  ".name": {
    position: "relative",
    width: "100%",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    p: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      gap: "1rem",

      "@media screen and (max-width:600px)": {
        flexDirection: "column",
      },
    },
  },
  ".name span:first-child": {
    top: 0,
    left: "1.3rem",
    mixBlendMode: "multiply",
    zIndex: 1,
  },
  ".name span:nth-child(2)": {
    zIndex: 0,
  },
  ".name span:nth-child(3)": {
    bottom: 0,
    right: "2.2rem",
    mixBlendMode: "multiply",
  },
})

const H4 = styled("h4", {
  fontFamily: "Young Serif",
  fontSize: 48,
  fontWeight: "normal",
  color: "var(--text-color)",
  marginTop: "4rem",
  marginBottom: 0,

  "@media screen and (max-width: 600px)": {
    fontSize: 24,
  },
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
                background: "#FB8DA680",
                paddingLeft: ".2em",
                paddingRight: ".2em",
                mixBlendMode: "multiply",
              }}
            >
              design,
            </span>{" "}
            <span
              style={{
                background: "#BBD9F7",
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
                background: "#FFAB0B90",
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
            AI,
          </a>{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2026/09/23/prediction-markets-trading-volume-doubled-between-may-and-july-largely-driven-by-sports/"
            target="_blank"
          >
            prediction markets,
          </a>{" "}
          and many{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2026/11/09/what-we-know-and-dont-know-about-flocks-license-plate-cameras/"
            target="_blank"
          >
            other topics.
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
          My projects tend to cross disciplines.{" "}
          {/* , and these are some I'm proudest
          of.  */}
          Click on a bubble{" "}
          <span style={{ width: 50, position: "inline-block" }}>
            <img
              src="/hand-pointer.svg"
              style={{
                width: "1em",
                height: "1em",
                marginBottom: -3,
                marginRight: -2,
                fill: "var(--text-color",
              }}
            ></img>
          </span>{" "}
          to see it live on the web. For more detail, here is my{" "}
          <Link
            to="/work"
            onClick={() => {
              jump("body", {
                duration: 0, // Optional: time in milliseconds
                offset: -200, // Optional: pixel offset from the top
              })
            }}
          >
            full list of work.
          </Link>{" "}
          <span style={{ width: 50, position: "inline-block" }}>
            <img
              src="/rectangle-list.svg"
              style={{
                width: "1em",
                height: "1em",
                marginBottom: -3,
                fill: "var(--text-color",
              }}
            ></img>
          </span>
          {/* and case studies. */}
        </p>
      </Intro>
      <Network
        setCurrentView={setCurrentView}
        setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
      />
      <Intro css={{ marginTop: 0, marginBottom: "6rem" }}>
        {/* <H4>Selected projects</H4> */}
        <p style={{ textAlign: "center" }}>
          Check out{" "}
          <Link
            to="/work"
            onClick={() => {
              jump("body", {
                duration: 0, // Optional: time in milliseconds
                offset: -200, // Optional: pixel offset from the top
              })
            }}
          >
            my full list of work here{" "}
            <span style={{ width: 50, position: "inline-block" }}>
              <img
                src="/face-grin-wide.svg"
                style={{
                  width: "1em",
                  height: "1em",
                  marginBottom: -3,
                  fill: "var(--text-color",
                }}
              ></img>
            </span>
          </Link>{" "}
          or{" "}
          <a href="mailto:carson.terbush@gmail.com">
            email me{"  "}
            <span style={{ width: 50, position: "inline-block" }}>
              <img
                src="/envelope.svg"
                style={{
                  width: "1em",
                  height: "1em",
                  marginBottom: -3,
                  fill: "var(--text-color",
                }}
              ></img>
            </span>
          </a>{" "}
          if you want to connect. Always happy to chat about data viz, knitting,
          travel photography or my cats. Thanks for stopping by!{" "}
          <span style={{ width: 50, position: "inline-block" }}>
            <img
              src="/hand-peace.svg"
              style={{
                width: "1em",
                height: "1em",
                marginBottom: -3,
                fill: "var(--text-color",
              }}
            ></img>
          </span>
        </p>
      </Intro>
    </>
  )
}

export default Home

import LazyLoad from "react-lazy-load"
import { styled } from "@stitches/react"
import * as d3 from "d3"

const Container = styled("div", {
  alignSelf: "start",
  border: "1px solid var(--text-color)",
  padding: 30,
  background: "rgba(255,255,255,.5)",
  borderRadius: 30,
  width: "calc(100% - 60px)",
  display: "flex",
  gap: 30,
  color: "var(--text-color)",

  "@media screen and (max-width: 600px)": {
    flexDirection: "column",
    width: "calc(100% - 40px)",
    gap: 10,
    padding: 20,
  },

  img: {
    width: 450,

    "@media screen and (max-width: 1000px)": {
      width: 350,
    },
    "@media screen and (max-width: 800px)": {
      width: 300,
    },
    "@media screen and (max-width: 700px)": {
      width: 250,
    },
    "@media screen and (max-width: 600px)": {
      width: "100%",
    },
    flex: 1,
    height: "auto",
    borderRadius: 10,
  },
})
const Sig = styled("p", {
  textTransform: "uppercase",
  fontFamily: '"Archivo", sans-serif',
  margin: 0,
  fontSize: 12,
  marginTop: 8,
  letterSpacing: ".1em",
  marginBottom: ".4em",
  fontWeight: "bold",

  "&.show-mobile": {
    display: "none",
  },
  "&.show-desktop": { display: "block" },

  "@media screen and (max-width: 600px)": {
    "&.show-mobile": {
      display: "block",
    },
    "&.show-desktop": { display: "none" },
  },
})
const Title = styled("h2", {
  fontFamily: '"Young Serif", serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 36,
  lineHeight: 1.3,
  marginBottom: ".3em",
})
const Date = styled("p", {
  fontFamily: '"Archivo", sans-serif',
  letterSpacing: 1,
  textTransform: "uppercase",
  margin: 0,

  "@media screen and (max-width: 600px)": {
    fontSize: 12,
  },
})
const H4 = styled("h4", {
  fontFamily: '"Archivo", sans-serif',
  fontSize: 24,
  letterSpacing: 0.1,
  marginTop: ".75em",
  marginBottom: ".5em",
  lineHeight: 1.4,
  fontWeight: 500,

  "@media screen and (max-width: 900px)": {
    fontSize: 20,
  },

  "@media screen and (max-width: 600px)": {
    fontSize: 18,
    marginTop: 0,
  },

  a: {
    color: "var(--text-color)",
    textDecorationThickness: 1.5,
  },
})

const Clip = (props) => {
  const { id, image, date, url, headline, skills, publication, tags, context } =
    props

  return (
    <Container>
      <Sig className="show-mobile">
        {tags?.length > 0
          ? tags.filter((t) => t != "Design").join(", ")
          : "Project"}
      </Sig>
      {/* <Title>{id}</Title> */}
      {image && (
        <LazyLoad height={image.height} offset={100}>
          <A url={url} className="no-highlight">
            <img
              className="image"
              src={`thumbnails/${image.src}`}
              alt={image.alt}
            />
          </A>
        </LazyLoad>
      )}
      <div className="headline-wrapper">
        <Sig className="show-desktop">
          {tags?.length > 0
            ? tags.filter((t) => t != "Design").join(", ")
            : "Project"}
        </Sig>
        <H4>
          <A url={url}>{headline}</A>
        </H4>
        <Date>
          {date && d3.timeFormat("%B %-d, %Y")(d3.timeParse("%m/%d/%Y")(date))}{" "}
          • {publication && publication}
        </Date>
        {skills && (
          <p style={{ marginTop: "1em" }}>
            <strong>Skills:</strong>{" "}
            {skills.length > 0 &&
              skills
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(", ")}
          </p>
        )}
        {context && <p dangerouslySetInnerHTML={{ __html: context }} />}
      </div>
    </Container>
  )
}
export default Clip

const A = (props) => {
  const { url, className } = props

  if (url) {
    return (
      <a href={url} className={className} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  } else {
    return <span className={`dead-link ${className}`}>{props.children}</span>
  }
}

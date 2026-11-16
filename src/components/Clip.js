import LazyLoad from "react-lazy-load"
import { styled } from "@stitches/react"
import * as d3 from "d3"

const Container = styled("div", {
  // maxWidth: 800,
  // paddingLeft: 30,
  // paddingRight: 30,
  // margin: "auto",
  alignSelf: "start",
  border: "1px solid var(--text-color)",
  padding: 30,
  background: "rgba(255,255,255,.5)",
  borderRadius: 30,
  width: "100%",
  display: "flex",
  gap: 30,
  // paddingTop: 60,
  // paddingBottom: 60,

  // display: "grid",
  // gridTemplateColumns: "repeat(2, 1fr)",

  color: "var(--text-color)",

  img: {
    // width: "100%",
    width: 450,
    height: "auto",
    borderRadius: 10,
    // border: "1px solid var(--text-color)",
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
})
const H4 = styled("h4", {
  fontFamily: '"Archivo", sans-serif',
  fontSize: 24,
  letterSpacing: 0.1,
  marginTop: ".75em",
  marginBottom: ".5em",
  lineHeight: 1.4,
  fontWeight: 500,

  a: {
    color: "var(--text-color)",
    textDecorationThickness: 1.5,
  },
})

const Clip = (props) => {
  const { id, image, date, url, headline, skills, publication, tags } = props

  return (
    <Container>
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
        <Sig>{tags?.length > 0 ? tags.join(", ") : "Project"}</Sig>
        <H4>
          <A url={url}>{headline}</A>
        </H4>
        <Date>
          {date && d3.timeFormat("%B %d, %Y")(d3.timeParse("%M/%d/%Y")(date))}{" "}
          • {publication && publication}
        </Date>
        {skills && (
          <p style={{ marginTop: "2em" }}>
            <strong>Skills:</strong>{" "}
            {skills.length > 0 &&
              skills
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(", ")}
          </p>
        )}
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

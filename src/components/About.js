import { styled } from "@stitches/react"

const H4 = styled("h4", {
  fontFamily: "Young Serif",
  fontSize: 48,
  fontWeight: "normal",
  color: "var(--text-color)",
  marginTop: "4rem",
  marginBottom: 0,
})

const TextContainer = styled("div", {
  margin: "auto",
  marginTop: "8em",
  maxWidth: 700,
  paddingLeft: 20,
  paddingRight: 20,
  //   maxWidth: 990,
  marginBottom: "1.5em",

  p: {
    marginTop: "1em",
    fontFamily: "Archivo",
    fontSize: 24,
    color: "var(--text-color)",
    lineHeight: 1.6,
  },

  //   ".gallery span": {
  //     display: "block",
  //   },
})

const Mug = styled("span", {
  display: "inline-block",
  backgroundImage: "url(/mug.jpg)",
  width: 205,
  height: 150,
  backgroundSize: "cover",
  borderRadius: 10,
  marginRight: "1em",
  marginBottom: "1em",
  marginTop: ".5em",
})

const DottedP = styled("span", {
  fontFamily: "Archivo",
  fontSize: 24,
  color: "var(--text-color)",
  lineHeight: 1.6,

  display: "flex",
  justifyContent: "space-between",

  "span:nth-child(2)": {
    borderBottom: "1.5px solid var(--text-color)",
    borderBottomStyle: "dashed",
    flex: 1,
    marginBottom: ".47em",
    marginLeft: ".25em",
    marginRight: ".25em",
  },
})

const About = () => {
  return (
    <TextContainer>
      {/* <Mug></Mug> */}
      <H4>About Carson</H4>

      {/* <p>Experiences</p> */}

      {/* <DottedP>
        <span>Pew Research Center</span>
        <span></span>
        <span>2026-present</span>
      </DottedP>

      <p>
        I handle all charts featured photos / illustrations for the Politics
        Team, Data Labs Team and Short Reads Team at the Center.{" "}
      </p>

      <DottedP>
        <span>The Washington Post</span>
        <span></span>
        <span>2023-2026</span>
      </DottedP>

      <DottedP>
        <span>Indiana University</span>
        <span></span>
        <span>2019-2023</span>
      </DottedP> */}
      <p>
        I'm a proud Hoosier who graduated from Indiana University with degrees
        in Journalism and Informatics. I interned at the Washington Post in 2022
        and 2023 with the Design and Graphics teams. I worked on the Design team
        for three years until April 2026. In May 2026 I started working at Pew
        Research Center as an Associate Information Graphics Designer.
      </p>

      {/* <H4>Experience</H4>

      <H4>Skills</H4>

      <H4>Education</H4> */}

      <p className="gallery">
        Outside of work, I love to travel & take photos,
        <br />
        <Mug css={{ backgroundImage: "url(/2022-03-26-howth-43.jpg)" }} />
        <Mug css={{ backgroundImage: "url(/03-20-25-kyoto-109.jpg)" }} />
        <Mug css={{ backgroundImage: "url(/10-27-24-shenandoah-051.jpg)" }} />
        <br />
        knit, make pottery & art,
        <br />
        <Mug></Mug>
        <br />
        and hang out with my cats.
        <br />
        <Mug
          css={{
            backgroundImage: "url(/IMG_8244.jpg)",
            backgroundPosition: "50% 40%",
          }}
        />
        <Mug
          css={{
            backgroundImage: "url(/000032220076_Original.jpg)",
            backgroundPosition: "50% 70%",
          }}
        ></Mug>
      </p>
    </TextContainer>
  )
}

export default About

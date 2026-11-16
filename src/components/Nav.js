import { styled } from "@stitches/react"

import { NavLink } from "react-router-dom"

const NavStyled = styled("nav", {
  // background: "var(--text-color)",
  // borderBottom: "1px solid var(--text-color)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 3,
  // mixBlendMode: "multiply",
  // background:
  //   "linear-gradient(to top, rgba(99, 70, 70,.9), rgba(99, 70, 70,.9)), url(/Texturelabs_Paper_234L.jpg)",
  background: "url(/Texturelabs_Paper_234L.jpg)",
  // backgroundColor: "var(--text-color)",
  // background: "",
  backgroundSize: "cover",
  backgroundBlendMode: "lighten",
  backgroundRepeat: "repeat",
  /* Solid from 0% to 50%, then fades to transparent at 100% */
  // WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  // maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  ul: {
    listStyle: "none",
    margin: 10,
    // marginBottom: 20,
    padding: 0,
    display: "flex",
    gap: 40,
    fontFamily: "Archivo",
    color: "var(--text-color)",
    // color: "white",
    // fontWeight: "bold",
    justifyContent: "center",
    letterSpacing: ".075em",

    // a: { textDecoration: "none" },

    a: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      // textTransform: "lowercase",
      cursor: "pointer",
      opacity: 0.7,
      textTransform: "lowercase",

      "&:before": {
        content: "",
        width: 6,
        height: 6,
        border: "2px solid var(--text-color)",
        display: "inline-block",
        marginRight: ".4em",
        borderRadius: 99,
        opacity: 0,
        transition: "200ms opacity ease-in",
      },

      "&:hover": {
        "&:before": {
          opacity: 1,
          background: "none",
          // background: "white",
          transition: "200ms opacity ease-in",
        },
      },
    },
    "a.active": {
      opacity: 1,
      textTransform: "lowercase",
      fontWeight: "bold",
      "&:before": {
        opacity: 1,
        transition: "200ms opacity ease-in",
        background: "var(--text-color)",
      },
    },
  },
})

const config = [
  "Home",
  "Work",
  // "About"
]

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        {config.map((c) => {
          return (
            <NavLink to={`/${c == "Home" ? "" : c.toLowerCase()}`}>
              <li id={c}>{c}</li>
            </NavLink>
          )
        })}
      </ul>
    </NavStyled>
  )
}

export default Nav

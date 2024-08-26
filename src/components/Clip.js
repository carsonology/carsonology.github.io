import LazyLoad from "react-lazy-load"
import Codepen from "react-codepen-embed"

const Clip = (props) => {
  const { image, date, url, headline, codepen, skills } = props

  const getClassName = () => {
    if (image && headline) return "web-clip"
    if (codepen) return "codepen"
    if (!image && !codepen) return "writing-clip"
  }

  return (
    <div className={getClassName()}>
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
      {codepen && (
        <Codepen
          hash={codepen}
          user="carsonology"
          height={600}
          defaultTab="result"
          preview="false"
        />
      )}
      <div className="headline-wrapper">
        <p>{date}</p>
        <h4>
          <A url={url}>{headline}</A>
        </h4>
        {((image && headline) || codepen) && (
          <ul>
            {skills.map((s) => (
              <li className="skill">{s}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
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

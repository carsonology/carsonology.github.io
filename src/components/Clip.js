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
          <img
            className="image"
            src={`thumbnails/${image.src}`}
            alt={image.alt}
          />
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
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              {headline}
            </a>
          )}
          {!url && <span className="dead-link">{headline}</span>}
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

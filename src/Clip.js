import LazyLoad from 'react-lazy-load';
import Codepen from "react-codepen-embed";

function Clip(props) {
    const { type, image, date, url, headline, codepen } = props

    return (
        <div className={`${type === 'webdev' ? 'web-clip' : ''}${type === 'writing' ? ' writing-clip' : ''}`}>
            {image && (
                <LazyLoad height={image.height} offset={100}>
                    <img className="image" src={image.src} alt={image.alt} />
                </LazyLoad>
            )}
            {codepen && (
                <Codepen hash={codepen} user="carsonology" height={500} defaultTab="result" preview="false" />
            )}
            {type === 'writing' && (
                <>
                    <p>{date}</p>
                    <div><a href={url} target="_blank">{headline}</a></div>
                </>
            )}
            {type === 'webdev' && (
                <div>
                    <p>{date}</p>
                    <a href={url} target="_blank">{headline}</a>
                </div>
            )}
        </div>
    )
}
export default Clip
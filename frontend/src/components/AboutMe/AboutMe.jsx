import spotify from '../../images/spotify2.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="about-me__container">
            <img src={spotify} alt="Logo de spotify" className="about-me__image" />
            <h1 className="about-me__description">Esta app sigue en proceso de desarrollo</h1>
        </div>
    )
}

export default AboutMe
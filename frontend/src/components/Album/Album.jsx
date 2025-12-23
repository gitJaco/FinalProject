import ImagePopup from '../Popup/ImagePopup'
import './Album.css'

function Album(props) {
const { image, artist, title } = props
const popup = {popup: <ImagePopup image={image} artist={artist} title={title} handleClosePopup={props.handleClosePopup}/>}
function handleOpenPopup() {
    props.handleOpenPopup(popup)
}
function clickAlbum(e) {
    console.log(e.target)
}
    return (
        <div className="album__container">
            <img src={props.image} alt="Album image" className="album__image" onClick={handleOpenPopup}/>
            <h4 className="album__artist">{props.artist}</h4>
            <p className="album__title">{props.title}</p>
            <button className="album__button" onClick={handleOpenPopup}>Ampliar</button>
        </div>
    )
}

export default Album
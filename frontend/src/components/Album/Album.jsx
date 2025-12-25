import ImagePopup from '../Popup/ImagePopup'
import './Album.css'
import Tracks from '../Tracks/Tracks'
import { getTracks } from '../../utils/auth'

function Album(props) {
const { image, artist, title } = props
const popup = {popup: <ImagePopup image={image} artist={artist} title={title} handleClosePopup={props.handleClosePopup}/>}
function handleOpenPopup() {
    props.handleOpenPopup(popup)
}
async function handleOpenTracks() {
    const songs = await getTracks(props.token, props.id)
    const tracks = {popup: <Tracks songs={songs} handleCloseTracks={props.handleCloseTracks}/>}
    props.handleOpenTracks(tracks)
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
            <button className="album__button album__tracks-button" onClick={handleOpenTracks}>canciones</button>
        </div>
    )
}

export default Album
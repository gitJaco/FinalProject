import './ImagePopup.css';
import closeIcon from '../../images/CloseIcon.png';

function ImagePopup(props) {
    const { image, artist, title } = props
    return (
        <div className="popup">
            <div className="popup__container">
            <img src={closeIcon} alt="Boton para cerrar imagen" className="popup__closeButton" onClick={props.handleClosePopup}/>
        <img src={image} alt="Imagen aumentada del album" className="popup__image" />
        <p className="popup__album">{title}</p>
        <p className="popup__artist">{artist}</p>
       </div>
        </div>
       
    )
}

export default ImagePopup;
import close from '../../images/CloseIcon.png'

function Tracks(props) {
    console.log(props.songs)
    return (
          <div className="popup">
            <div className="popup__container">
              <img src={close} alt="Icono para cerrar" className="popup__closeButton" onClick={props.handleCloseTracks}/>
              {props.songs.map((song) => {
                return <p key={song.id}>{song.name}</p>
            })}
            </div>
            </div>
    )
}

export default Tracks
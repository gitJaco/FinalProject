import './Main.css';
import Album from '../Album/Album';
import spotify from '../../images/logspot.png';

function Main(props) {
    return (
        <main className='main'>
            {props.albums.map((album) =>  (
                 <Album key={album.id} artist={album.artists[0].name} title={album.name} image={album.images[0].url} handleOpenPopup={props.handleOpenPopup} handleClosePopup={props.handleClosePopup} handleOpenTracks={props.handleOpenTracks} handleCloseTracks={props.handleCloseTracks} id={album.id} token={props.token}/>
     )          
         )}
         <div className="spotify__logo">
            <img src={spotify} alt="Spotify logo background" className='spotify__background'/>
         </div>
         {props.popup && props.popup.popup}
         {props.tracks && props.tracks.popup}
        </main>
    )
}

export default Main
import './Main.css'
import Album from '../Album/Album'
import data from '../../utils/data'
import spotify from '../../images/logspot.png'

function Main(props) {

    const dataInfo = data
    return (
        <main className='main'>
            {props.albums.map((album) => (
                <Album key={album.id} artist={album.artists[0].name} title={album.name} image={album.images[0].url} handleOpenPopup={props.handleOpenPopup} handleClosePopup={props.handleClosePopup}/>
            )
            
         )}
         <div className="spotify__logo">
            <img src={spotify} alt="Spotify logo background" className='spotify__background'/>
         </div>
         {props.popup && props.popup.popup}
        </main>
    )
}

export default Main
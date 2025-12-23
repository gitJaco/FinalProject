import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import  Search  from './components/Search/Search';
import Main from './components/Main.jsx/Main';
import Footer from './components/Footer/Footer';
import { authorization, artistId, getAlbums } from './utils/auth';
import './App.css';





function App() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
      (async function() {
        const response = await authorization();
        const data = response.access_token
        setAccessToken(data)
      })()
  }, [])
  // Search
  async function search(e) {
    e.preventDefault();
    console.log('Search for ' + searchInput);
    // Get request using search to get the Artist ID
    const artistID = await artistId(accessToken, searchInput);
    console.log(artistID);
    // Get request with Artist ID grab all the albums from that artist
    const returnedAlbums = await getAlbums(accessToken, artistID);
    console.log(returnedAlbums);
    // Display those albums to the user
    setAlbums(returnedAlbums);
  }

  // Popup
  // Abrir popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  // Cerrar popup
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <>
    <Header></Header>
    <Search search={search} setSearchInput={setSearchInput}></Search>
    <Main albums={albums} handleOpenPopup={handleOpenPopup} handleClosePopup={handleClosePopup} popup={popup}></Main>
    <Footer></Footer>
    </>
  )
}

export default App

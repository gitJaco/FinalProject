import './Search.css';

function Search(props) {
    return (
        <>
        <h1 className='search__title'>Busca tu artista favorito</h1>
        <div className="search__container">
            <form onSubmit={props.search}>
            <input className="search__input" type="text" id='artist' name='artist' placeholder='Escribe tu artista favorito' onChange={e => props.setSearchInput(e.target.value)}/>
            <button className="search__button" type='submit'>Search</button>
            </form>
        </div>
        </>
    )
}

export default Search
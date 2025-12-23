import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    return (
        <header className="header">
          <div className="logo__container">
            <img src={logo} alt="" className="logo" />
            <link rel="stylesheet" href="null" />Album image library
          </div>
          
        </header>
        
    )
}

export default Header;
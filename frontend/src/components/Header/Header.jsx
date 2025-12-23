import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
          <div className="logo__container">
            <img src={logo} alt="" className="logo" />
            <div className='header__link-container'>
              <Link className='header__link header__link-one' to='/about-me'>About me</Link>
            <Link className='header__link' to='/'>Inicio</Link>
            </div>
          </div>
          
        </header>
        
    )
}

export default Header;
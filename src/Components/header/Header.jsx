import logoKasa from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <img src={logoKasa} alt='logo de Kasa' className='header__logo' />
            <nav className='header__nav'>
                <NavLink to='/home' className='header__nav--liens'>Accueil</NavLink> 
                <NavLink to='/about' className='header__nav--liens'>A Propos</NavLink>   
            </nav>
        </header>
    );
}

export default Header;
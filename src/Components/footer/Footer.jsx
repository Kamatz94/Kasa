import logoFooter from '../../assets/images/logoFooter.png'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt='logo de Kasa' className='footer__logo' />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer
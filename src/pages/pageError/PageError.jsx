import './pageError.css';
import { Link } from 'react-router-dom';

function PageError() {
    return (
        <main className='container'>
            <h1 className='container__title'>404</h1>
            <p className='container__text'>{"Oups! La page que vous demandez n'existe pas."}</p>
            <Link to='/home' 
            className='container__lien'>
                {"Retourner sur la page d'accueil"}
            </Link> 
        </main>
    );
}

export default PageError;
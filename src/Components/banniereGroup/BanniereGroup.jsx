import imgHome from '../../assets/images/imgHome.png'
import imgAbout from '../../assets/images/imgAbout.png'
import './banniereGroup.css'

function BanniereGroup({ viewType }) {
    
    {/* On détermine quelle image charger en fonction de la vue*/}
    const getImage = () => {
        if (viewType === 'home') {
            return imgHome;
        } else if (viewType === 'about') {
            return imgAbout;
        }
    } 

    return (
        <section className='banniereGroup'>
            <img src={getImage()} alt='paysage' className='banniereGroup__img' />
            {viewType === 'home' && <h1 className='banniereGroup__text'>Chez vous, partout et ailleurs</h1>}
        </section>
    );
}

export default BanniereGroup
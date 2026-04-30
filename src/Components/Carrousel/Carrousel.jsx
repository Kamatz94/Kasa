import { useState } from 'react';
import { useParams } from 'react-router-dom';
import listingsData from '../../data/appartements';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import './carrousel.css';

function Carrousel() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.id === id ); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex + 1) % selectedListing["pictures"].length);
    }

    const prevSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex - 1 + selectedListing["pictures"].length) % selectedListing["pictures"].length);
    }

    return (
        <section className='carrouselContainer'>
            <img src={selectedListing["pictures"][currentImageIndex]}
                alt="image de couverture" 
                className='carrouselContainer__img' /
            >
            <div className="carrouselContainer__numbertext">{currentImageIndex + 1}/{selectedListing["pictures"].length}</div>
            <div className='carrouselContainer__arrow'>
                <img src={leftArrow} alt="flèche gauche" className='carrouselContainer__arrow--left' onClick={prevSlide} />
                <img src={rightArrow} alt="flèche droite" className='carrouselContainer__arrow--right' onClick={nextSlide} />
            </div>

        </section>
    );
}

export default Carrousel
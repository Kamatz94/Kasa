import { useParams } from 'react-router-dom'
import listingsData from '../../data/appartements'
import redStar from '../../assets/images/redStar.png'
import grayStar from '../../assets/images/grayStar.png'
import PageError from '../pageError/PageError'
import Keywords from '../../components/keywords/Keywords'
import Carrousel from '../../components/carrousel/Carrousel'
import Dropdown from '../../components/dropdown/Dropdown'
import './listing.css'

function Listing() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.id === id );
    
    if (!selectedListing) {
        return <PageError />; 
    }

    const renderStars = (note) => {
        const maxStars = 5;
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i <= note) {
                stars.push(<img key={i} src={redStar} alt="étoile rouge" className='noteContainer__stars' />);
            } else {
                stars.push(<img key={i} src={grayStar} alt="étoile grise" className='noteContainer__stars' />);
            }
        }
        return stars;
    };

    return (
        <main className='listing'>
            <Carrousel pictures={selectedListing.pictures} />
            <section className='containerSection'>
                <div className='titleContainer'>
                    <h1 className='titleContainer__title'>{selectedListing["title"]}</h1>
                    <p className='titleContainer__location'>{selectedListing["location"]}</p>
                    <div className='titleContainer__keywords'>
                        <Keywords tags={selectedListing.tags} />
                    </div>   
                </div>
                <div className='hoteAndNoteContainer'>
                    <div className='hoteContainer'>
                        <p className='hoteContainer__name'>{selectedListing.host.name}</p>
                        <img src={selectedListing.host.picture} 
                            alt="photo de l'hôte" 
                            className="hoteContainer__photo" 
                        />
                    </div>
                    <div className='noteContainer'>
                        {renderStars(parseInt(selectedListing.rating))}
                    </div>
                </div>
                
            </section>
            <section className='containerDescription'>
                <Dropdown title="Description" text={selectedListing.description} />
                <Dropdown title="Équipements" equipments={selectedListing.equipments} />
            </section>                 
        </main>
    );
}

export default Listing
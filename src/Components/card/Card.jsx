import { Link } from "react-router-dom";
import listingsData from '../../data/appartements';
import './card.css'

function Card() {
    return (
        <section className='card-container'>
            {listingsData.map(listing => (
                <Link
                    key={listing.id} 
                    to={`/listing/${listing.id}`} 
                    className='card' 
                >
                    <img src={listing.cover} alt="image de couverture" className="card__img" />
                    <h2 className="card__title">{listing.title}</h2>
                </Link>
            ))}
        </section>
    );
}

export default Card
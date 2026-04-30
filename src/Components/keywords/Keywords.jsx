import { useParams } from 'react-router-dom';
import listingsData from '../../data/appartements';
import './keywords.css';

function Keywords({ tags }) {
    return (
        <div className='keywords-container'>
            {tags.map((keyword, index) => (
                <div key={index} className='keywords-container__keyword'>
                    <p className='keywords-container__keyword--text'>{keyword}</p>
                </div>
            ))}
        </div>
    );
}

export default Keywords;
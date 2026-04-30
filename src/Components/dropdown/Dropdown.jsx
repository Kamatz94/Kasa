import { useState } from 'react';
import topArrow from '../../assets/images/topArrow.png'
import './dropdown.css'

function Dropdown({ title, text, equipments }) {
const [isOpen, setIsOpen] = useState(false);

    const basculerDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`containerDropdown ${isOpen ? 'open' : 'closed'}`} >
            <div className='containerDropdown__dropdown'>
                <h2 className='containerDropdown__dropdown--title'>{title}</h2>
                <img 
                src={topArrow} 
                alt="bouton pour ouvrir ou fermer la fenêtre" 
                className={`containerDropdown__dropdown--img ${isOpen ? 'rotate' : ''}`}
                onClick={basculerDropdown} 
                />
            </div>
            <div className='containerDropdown__contentView'>
            {text && <p className={`containerDropdown__contentView--text content ${isOpen ? 'open' : 'closed'}`}>{text}</p>}
            {equipments && (
                <ul className={`containerDropdown__contentView--equipments content ${isOpen ? 'open' : 'closed'}`}>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}

export default Dropdown
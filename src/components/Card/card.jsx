import './card.css';
import { FaStar } from "react-icons/fa";

function Card( {img, imageDescription, title, voteAverage} ) {
    return (
        <div className='card_content'>
            <div className='photo_container'>
                <img src={img} alt={imageDescription} className='card_photo'/>
            </div>
            <div className="description_container">
                <h1 className='card_title'>{title}</h1>
            </div>
            <p className='card-vote-average'><FaStar /> {voteAverage} </p>
        </div>  
    )
}

export default Card;
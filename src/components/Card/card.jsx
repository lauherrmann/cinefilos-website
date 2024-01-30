import { Link } from 'react-router-dom';
import './card.css';
import { FaStar } from "react-icons/fa";



function Card( {img, imageDescription, title, voteAverage, detailsRedirect, showLink=true} ) {
    return (
        <div className='card_container'>
            <div className='photo_container'>
                <img src={img} alt={imageDescription} className='card_photo'/>
            </div>
            <div className='card_content'>
                <div className="description_container">
                    <h1 className='card_title'>{title}</h1>
                </div>
                <p className='card-vote-average'><FaStar /> {voteAverage} </p>
                <p> 
                    {showLink && <Link to={detailsRedirect} className='card-link-container'>Details</Link>}
                </p>  
            </div>
        </div>  
    )
}

export default Card;
import './card.css';

function Card( {img, imageDescription, title} ) {
    return (
        <div className='card_content'>
            <div className='photo_container'>
                <img src={img} alt={imageDescription} className='card_photo'/>
            </div>
            <div className="description_container">
                <h1 className='card_title'>{title}</h1>
            </div>
        </div>  
    )
}

export default Card;
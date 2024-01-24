import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import './movieCard.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieCard = () => {

        const [topRatedMovies, setTopRetadMovies] = useState([]);
    
        const getTopRatedMovies = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
    
            setTopRetadMovies(data.results);
        };
    
        useEffect(() => {
            const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
            
            getTopRatedMovies(topRatedUrl);
        
        });

        return (
                <section className='cards_container'>
                    {topRatedMovies.length === 0 && <p>Carregabdo...</p>}
                    {topRatedMovies.map(movie => (
                        <Card className='movie_card'
                            key={movie.id}
                            img = {movie.poster_path}
                            imageDescription = {moviesURL.title}
                            title = {moviesURL.title}
                        />
                    ))}
                </section> 
        );
}

export default MovieCard;
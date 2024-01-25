import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import './movieCard.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ showLink = true }) => {

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
                    {topRatedMovies.length === 0 && <p>Carregando...</p>}
                    {topRatedMovies.map(movie => (
                        <Card className='movie_card'
                            key={movie.id}
                            img = {imageURL + movie.poster_path}
                            imageDescription = {movie.title}
                            title = {movie.title}
                            voteAverage = {movie.vote_average}
                            detailsRedirect = {`/movie/${movie.id}`}
                        />
                    ))}
                </section> 
        );
}

export default MovieCard;
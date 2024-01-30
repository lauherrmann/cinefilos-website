import { loadMovies } from '../../utils/loadMovies';
import Card from '../../components/Card/card';
import { useState, useEffect } from 'react';
import './home.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Home = () => {

    const [topRatedMovies, setTopRetadMovies] = useState([]);

    const getMovies = async (url) => {
        const moviesJson = await loadMovies(url);

        setTopRetadMovies(moviesJson);
    };

    useEffect(() => {  
        
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getMovies(topRatedUrl);

    });

    return (
        <>
            <section className='home-container'> 
                <h2 className='home-title'> Top rated films </h2>
                <div className='movies_cards-container'>
                    <div className='cards_container'>
                        {topRatedMovies.length === 0 && <p>Carregando...</p>}
                        {topRatedMovies.map(movie => (
                            <Card className='movie_card'
                                key={movie.id}
                                img = {imageURL + movie.poster_path}
                                imageDescription = {movie.title}
                                title = {movie.title}
                                voteAverage = {movie.vote_average}
                                detailsRedirect = {`/details/${movie.id}`}
                            />
                        ))}
                    </div> 
                </div>
            </section>
        </>
    );
}
  
export default Home;
import { loadMovies } from '../../utils/loadMovies';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/card";
import './search.css'

const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;
const searchURL = import.meta.env.VITE_SEARCH;

/*import "./MoviesGrid.css";*/

function Search() {

  const [searchParams] = useSearchParams();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const moviesJson = await loadMovies(url);

    setSearchedMovies(moviesJson);
  };

  useEffect(() => {  
    const searchWQueryUrl = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWQueryUrl);
  }), [query];

  return (
      <>
        <section className='search-container'> 
          <h2 className='searchPage-title'> Resultados para: <span>"{query}"</span> </h2>
          <div className='movies_cards-container'>
            <div className='cards_container'>
              {searchedMovies.length === 0 && <p>Carregando...</p>}
              {searchedMovies.map(movie => (
                  <Card className='movie_card'
                      key={movie.id}
                      img = {imageURL + movie.poster_path}
                      imageDescription = {movie.title}
                      title = {movie.title}
                      voteAverage = {movie.vote_average}
                      detailsRedirect = {`/movie/${movie.id}`}
                  />
              ))}
            </div> 
          </div>
        </section>
      </>
    )
  }
  
  export default Search;
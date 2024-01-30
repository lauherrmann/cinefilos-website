/*import { loadMovies } from '../../utils/loadMovies';*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import './details.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;


function Details() {

  const {id} = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {

    const moviesResponse = await fetch(url);
    const data = await moviesResponse.json(); 

    setMovie(data);
  };

  const formatCurrency = (num) =>{
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  useEffect(() => {  
    const detailsUrl = `${moviesURL}${id}?${apiKey}`;

    getMovie(detailsUrl);

  }), [];

  return (
    <section className='details_page-container'> 
      {movie && 
        <>  
          <img src={imageURL + movie.poster_path} alt={movie.title} />

          <div className='movie-infos1'>
            <h1>{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <p> <FaStar /> {movie.vote_average} </p>
          </div>

          <div className='movie-infos2'> 
            <div>
              <h3> <BsWallet2 /> Budget:</h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div>
              <h3> <BsGraphUp /> Revenue:</h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div>
              <h3> <BsHourglassSplit /> Runtime:</h3>
              <p>{movie.runtime}</p>
            </div>
            <div>
              <h3> <BsFillFileEarmarkTextFill /> Description:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>

        </> 
      }  
    </section>
  )
}
  
export default Details;
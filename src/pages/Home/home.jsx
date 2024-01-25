import MovieCard from "../../components/MovieCard/movieCard";
import './home.css'

const Home = () => {

    return (
        <>
            <section className='home-container'> 
                <h2 className='home-title'>List <span>of the best films</span></h2>
                <div className='movies_cards-container'>
                    <MovieCard />
                </div>
            </section>
        </>
    );
}
  
export default Home;
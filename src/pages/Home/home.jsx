import MovieCard from "../../components/MovieCard/movieCard";
import './home.css'

const Home = () => {

    return (
        <>
            <section className='home-container'> 
                <div>
                    <h2>Home</h2>
                </div>
                <div className='movies_cards-container'>
                    <MovieCard />
                </div>
            </section>
        </>
    );
}
  
export default Home;
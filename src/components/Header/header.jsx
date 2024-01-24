import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

function Header() {

  return (
    <nav>
        <h2>
        <   Link to="/">
            <BiCameraMovie />
                Cinefilos
            </Link>
        </h2>
        <form>
            <input type='text' placeholder='Search for a movie'/>
            <button type='submit'> <BiSearchAlt2 /> </button>
        </form>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
  </nav>
  )
}

export default Header;
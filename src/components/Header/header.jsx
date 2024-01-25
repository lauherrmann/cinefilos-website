import { Link } from 'react-router-dom';
import Search from '..//Search/search';
import Logo from "../Logo/logo";
import "./header.css";

function Header() {

  return (
    <div className='navbar-container'>
        <nav className='navbar-content'>
            <Logo />
            <Search />
            <Link to="/movie/1" className='navbarLink'>Movie</Link>
            <Link to="/search" className='navbarLink'>Search</Link>
        </nav> 
    </div>

  )
}

export default Header;
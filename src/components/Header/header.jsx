import { Link } from 'react-router-dom';
import Search from '..//Search/search';
import Logo from "../Logo/logo";

function Header() {

  return (
    <nav>
        <Logo />
        <Search />
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
    </nav>
  )
}

export default Header;
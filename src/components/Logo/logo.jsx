import { BiCameraMovie } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./logo.css";

function Logo() {
    return (
        <h2 className='cinefilos-logo'>
            <Link to="/">
                <BiCameraMovie />
                Cinéfilos
            </Link>
        </h2>
    )
}

export default Logo;
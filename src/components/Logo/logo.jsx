import { BiCameraMovie } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./logo.css";

function Logo() {
    return (
        <div className='cinefilos-logo'>
            <BiCameraMovie className='logo-icon' />
            <h2 >
                <Link to="/"> Cinéfilos </Link>
            </h2>  
        </div>
        
    )
}

export default Logo;
import { BiSearchAlt2 } from "react-icons/bi";
import "./search.css"
import { Link } from "react-router-dom";

function Search(){
    return(
        <form>
            <input type='text' placeholder='Search for a movie' className='search-input'/>
            <button type='submit' className='search-button'> <BiSearchAlt2 /> </button>
        </form> 
    )
}

export default Search;
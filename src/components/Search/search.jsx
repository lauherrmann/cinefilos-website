import { BiSearchAlt2 } from "react-icons/bi";
import "./search.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        if(!search) return;
        
        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search for a movie' className='search-input' 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type='submit' className='search-button'> <BiSearchAlt2 className='search-icon' /> </button>
        </form> 
    )
}

export default Search;
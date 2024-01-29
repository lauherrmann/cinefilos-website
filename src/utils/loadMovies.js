export const loadMovies = async (url) => {

        const moviesResponse = await fetch(url);
        const data = await moviesResponse.json();

        return data.results;  
        
}
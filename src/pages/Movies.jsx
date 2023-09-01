import { Loader } from "components/Loader/Loader";
import { SearchBox } from "components/SearchBox/SearchBox";
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovieByName } from "services/api";

const Movies = () => {       
    const [searchMovie, setSearchMovie] = useState([]);      
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";         
    
    useEffect(() => {
        if (query === '') return;        
       
        async function getMovie() {
            setLoading(true);

            if (query === '') {
                return;
            }             
            try {
                const response = await fetchSearchMovieByName(query);
                setSearchMovie(response.results);               
                setLoading(false);
                console.log(response.results);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie()
    },[query]);

    const handleSubmit = evt => {
    evt.preventDefault();      
    const queryMovie = evt.target.elements.query.value.trim();
        
        if (queryMovie === '') {
           setSearchParams({});   
           setSearchMovie([]); 
            return;
        };
        if (queryMovie !== '') {
           setSearchParams({query: queryMovie});        
           evt.target.reset();
            return;
        };   
    }        

    return (
        <main>
            <SearchBox onSubmit={handleSubmit} />
            {loading && <Loader/>}
            <SearchMovies movies={searchMovie} />            
        </main>
    )
}

export default Movies


  
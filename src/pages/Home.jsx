import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "services/api";


const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);    
    
    useEffect(() => {
       async function getTrending() {          
            try {               
                const response = await fetchTrending();       
                // console.log(response.results);
                setTrendMovies([...response.results]);                
            } catch (error) {
                console.log(error);
            }
        }
        getTrending();
    }, []);      
    

    return (
        <ul>
            {trendMovies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`} id={movie.id} >{movie.original_title || movie.original_name} </Link>
                </li>
                 
            ))}
        </ul>
    )
}

export default Home;
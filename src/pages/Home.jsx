import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/api";


const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);       
    
    useEffect(() => {
       async function getTrending() {          
            try {               
                const response = await fetchTrending();                 
                setTrendMovies([...response.results]);                
            } catch (error) {
                console.log(error);
            }
        }
        getTrending();
    }, []);      

    return (
      <main>        
        <TrendingMovies trends={trendMovies} />          
      </main>
    )
}

export default Home;

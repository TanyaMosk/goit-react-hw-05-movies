import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { SearchBox } from "components/SearchBox/SearchBox";
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { fetchSearchMovieByName } from "services/api";
import { Pagination } from "components/Pagination/Pagination";

const Movies = () => {       
    const [searchMovie, setSearchMovie] = useState([]);      
    const [loading, setLoading] = useState(false);  
    const [pages, setPages] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";  
    const page = searchParams.get("page") ?? "";     

    useEffect(() => {
        if (query === '') return;        
       
        async function getMovie() {
            setLoading(true);

            if (query === '') {
                return;
            }             
            try {
                const response = await fetchSearchMovieByName(query, page);
                setSearchMovie(response.results);               
                setLoading(false);
                setPages(response.total_pages);                 
                setActivePage(Number(page) || 1);                
               
            } catch (error) {
                console.log(error);
            }
        }
        getMovie()
    }, [query, page]);    

    const handleSubmit = evt => {
        evt.preventDefault();
        const queryMovie = evt.target.elements.query.value.trim();          
        
        if (queryMovie === '') {
            setSearchParams({});
            setSearchMovie([]);
            
           
        };
        if (queryMovie !== '') {
            setSearchParams({ query: queryMovie, page: 1});            
            evt.target.reset();           
        };
    };     

    const handlePageChange = (selectedPage) => {
        setSearchParams({ query, page: selectedPage.selected + 1});       
  };
   
    return (
        <main>
            <SearchBox onSubmit={handleSubmit} />
            {loading && <Loader/>}
            <SearchMovies movies={searchMovie} /> 
            {pages !== 0 && <Pagination pages={pages} pageChange={handlePageChange} activePage={activePage}
            />}           
        </main>
    )
}

export default Movies


import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "components/SearchBox/SearchBox";
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { fetchSearchMovieByName } from "services/api";
import { Pagination } from "components/Pagination/Pagination";
import { nanoid } from "nanoid";

const Movies = () => {       
    const [searchMovie, setSearchMovie] = useState([]);     
    const [pages, setPages] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";  
    const page = searchParams.get("page") ?? "";     

    useEffect(() => {
        if (query === '') return;        
       
        async function getMovie() {         

            if (query === '') {
                return;
            }             
            try {
                const newQuery = query.slice(query.indexOf('/') + 1);                
                const response = await fetchSearchMovieByName(newQuery, page);
                setSearchMovie(response.results);                
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
            setPages(0);           
        };
        if (queryMovie !== '') {
            setSearchParams({ query: (`${nanoid()}/${queryMovie}`), page: 1 });             
            evt.target.reset();            
        };
    };     

    const handlePageChange = (selectedPage) => {
        setSearchParams({ query, page: selectedPage.selected + 1});       
  };
   
    return (
        <main>
            <SearchBox onSubmit={handleSubmit} />           
            <SearchMovies movies={searchMovie} /> 
            {pages !== 0 && <Pagination pages={pages} pageChange={handlePageChange} activePage={activePage}
            />}           
        </main>
    )
}

export default Movies


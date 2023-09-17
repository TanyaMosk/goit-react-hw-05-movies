import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import SearchBox from "components/SearchBox";
import SearchMovies from "components/SearchMovies";
import Pagination from "components/Pagination";
import { fetchSearchMovieByName } from "services/api";
import 'react-toastify/dist/ReactToastify.css';
import LoadMore from "components/LoadMore";


const Movies = () => {       
    const [searchMovie, setSearchMovie] = useState([]);     
    const [pages, setPages] = useState(0);   
    const [activePage, setActivePage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    // const query = searchParams.get("query") ?? "";  
    const page = searchParams.get("page") ?? "";     
    const [query, setQuery] = useState(searchParams.get("query") ?? '');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (query === '') return;        
       
        async function getMovie() {   
            
            try {         
                const queryId = query.slice(query.indexOf('/') + 1);
                
                const response = await fetchSearchMovieByName(queryId, page);  
                if (currentPage === 1) {
                    setSearchMovie(response.results);
                } else {

                    setSearchMovie(prevState => [...prevState, ...response.results]);
                }                                  
                setPages(response.total_pages);                   
                setActivePage(Number(page) || 1);                  
                
            } catch (error) {                
                toast.error("Oops, something went wrong 🥺. Please try reloading the page!");
            }
        }
        getMovie()
    }, [query, page, currentPage]);      
 
    const handleSubmit = evt => {
        evt.preventDefault();
        const queryMovie = evt.target.elements.query.value.trim();        

        if (queryMovie === '') {
            setSearchParams({});
            setSearchMovie([]);
            setPages(0);             
            toast.info('🦄 Please fill in the field!');
        };
        if (queryMovie !== '') {           
            const newQuery = (`${Date.now()}/${queryMovie}`)
            setSearchParams({ query: queryMovie, page: 1 });
            setQuery(newQuery);            
            setSearchMovie([]); 
            setCurrentPage(1);
            evt.target.reset();            
        };
    };        

    const handlePageChange = (selectedPage) => {         
        setSearchParams({ query, page: selectedPage.selected + 1 });    
        setCurrentPage(1);
    };

    const handleLoadMore = () => {       
    const nextPage = Number(page) + 1;
        setSearchParams({ query, page: nextPage });
        setCurrentPage(nextPage);        
    };  
   
    return (
        <main>
            <SearchBox onSubmit={handleSubmit} />           
            <SearchMovies movies={searchMovie} /> 
            {pages > 1 &&
                <>
                <LoadMore loadMore={handleLoadMore}/>
                <Pagination pages={pages} pageChange={handlePageChange} activePage={activePage} />
                </>}               
            <ToastContainer
            autoClose={4000}
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </main>
    )
}

export default Movies;


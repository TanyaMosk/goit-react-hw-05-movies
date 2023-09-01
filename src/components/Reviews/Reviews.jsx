import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviewsById } from "services/api";


export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
    async function fetchMovieReviews(movieId) {
      try {
        const response = await fetchMovieReviewsById(movieId);
          
        if (response.total_results === 0) {
              setNoResults(true);               
        };
                
        setReviews(response.results);
        
      } catch (error) {
        console.log(error);
     };
    };
       fetchMovieReviews(movieId);
    }, [movieId]);  
    

    return (
        <section>
           {noResults ? <h2>Sorry. We don't have any reviews for this movie.</h2> : <ul>
                {reviews.map(({id,author,content}) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>}            
        </section>
    )
}
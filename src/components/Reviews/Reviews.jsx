import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviewsById } from "services/api";
import {ReviewsTitle, ReviewsText, ReviewsDesc} from './Reviews.styled'
 

export default function Reviews () {
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
           {noResults ? <ReviewsTitle>Sorry. We don't have any reviews for this movie.</ReviewsTitle> : <ul>
                {reviews.map(({id,author,content}) => (
                    <li key={id}>
                        <ReviewsText>Author: {author}</ReviewsText>
                        <ReviewsDesc>{content}</ReviewsDesc>
                    </li>
                ))}
            </ul>}            
        </section>
    )
};

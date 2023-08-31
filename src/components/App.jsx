import { Route, Routes } from "react-router-dom";
import Home from "pages/Home"
import Movies from "pages/Movies";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>          
          <Route path="/movie" element={<Movies/>}/>
          <Route path="/movie/:movieId" element={<MovieDetails />}>
             <Route path="/movie/:movieId/cast" element={<Cast/>}/>
             <Route path="/movie/:movieId/reviews" element={<Reviews/>}/>
          </Route>         
        </Route>        
      </Routes>
      <GlobalStyle/>
    </>
  );
};





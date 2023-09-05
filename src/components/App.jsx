import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { GlobalStyle } from "./GlobalStyle";
import SharedLayout from "./SharedLayout";


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

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





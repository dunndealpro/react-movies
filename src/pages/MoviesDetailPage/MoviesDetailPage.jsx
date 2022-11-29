import { movies } from "../../data.js";
import {Routes, Route, useParams} from 'react-router-dom';

export default function MovieDetailPage() {
  
  let movieTitle = useParams()  
  // console.log('Clicked: ', movieTitle)
  // console.log('All movies', movies)
console.log(movieTitle.movieTitle)

  let movieInfo = movies.find(movies => movies.title === movieTitle.movieTitle)

  console.log('result: ', movieInfo)

  
  return (
    <div>
      <h1>{movieInfo.title}</h1>
      <h2>Released: {movieInfo.releaseDate}</h2>
      <h3>Cast: {movieInfo.cast.join(', ')}</h3>
      <img src={movieInfo.posterPath}></img>

    </div>
    
    );
  }
import './MovieListPage.css'
import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage() {
  console.log('movie list: ',movies)
  return (
    
    <div >    
      <h1>Movies</h1>
      <ul className = "movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
}



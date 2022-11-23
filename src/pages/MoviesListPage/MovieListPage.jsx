import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard/MovieCard";
// './components/NavBar/NavBar'

export default function MovieListPage() {
  console.log(movies)
  return (
    <div>
      <h1>MovieListPage</h1>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

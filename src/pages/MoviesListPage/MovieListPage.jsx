import './MovieListPage.css'
import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard/MovieCard";
// './components/NavBar/NavBar'

export default function MovieListPage() {
  console.log('movie list: ',movies)
  return (
    
    <div className = "movie-list-page">
       {/* <NavBar user={user}/> */}
      <h1>MovieListPage</h1>
      <ul className = "movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
}


// <Routes>
// <Route path='/' element={<MovieListPage/>}/>
// <Route path="/movies/:movieName" element={<MoviesDetailPage/>}/>
// <Route path="/actors" element={<ActorsListPage/>}/>
// </Routes>
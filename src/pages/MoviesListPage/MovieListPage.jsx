import './MovieListPage.css'
import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard/MovieCard";
// './components/NavBar/NavBar'

export default function MovieListPage() {
  console.log('movie list: ',movies)
  return (
    
    <div >
       {/* <NavBar user={user}/> */}
      <h1>Movies</h1>
      <ul className = "movie-list">
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
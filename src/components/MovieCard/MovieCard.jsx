import '../MovieCard/MovieCard.css';
import { Link } from 'react-router-dom';
export default function MovieCard({ movie }) {
    const cardStyle = {    
        backgroundImage: `url(${movie.posterPath})`,
        backgroundSize: "cover",
        width: "20vw",
        height: "50vh",
        margin: "10px",
        border: "solid black 2px",
        borderRadius: "10px",

        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        textAlign: 'center'
    }

    return (
        <Link to={`/movies/${movie.title}`}>
            <div className= "movie-title" style={cardStyle}>
                <div className = "movie-title">
                {movie.title}<br></br>
                    Released: {movie.releaseDate}
                </div>             
            </div>
        </Link>
    )

   

}
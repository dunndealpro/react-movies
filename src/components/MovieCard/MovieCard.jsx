// import '../MovieCard/MovieCard.css';
import { Link } from 'react-router-dom';
export default function MovieCard({movie}){
const cardStyle = {
    // width: "500px",
    // height: "500px",
    color: "white",
    backgroundImage: `url(${movie.posterPath})`,
    margin: "2px",
    border: "solid magenta 2px"
}

    return(
        <Link to={`/movies/${movie.title}`}>
            <div style={cardStyle}>                
                {movie.title}<br></br>
                Released: {movie.releaseDate}            
            </div>
        </Link>
    )

    // {movie.posterPath}



    // backgroundImage = document.createElement

    // return(
    //     <li>
    //         <div className="background-images">                
    //             {movie.title}<br></br>
    //             Released: {movie.releaseDate}<br></br>
    //             <img src={movie.posterPath}></img>
    //         </div>
    //     </li>
    // )
    
}
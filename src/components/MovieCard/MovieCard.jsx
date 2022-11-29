// import '../MovieCard/MovieCard.css';
import { Link } from 'react-router-dom';
export default function MovieCard({movie}){
const cardStyle = {
    // width: "500px",
    // height: "500px",
    // color: "white",
    backgroundImage: `url(${movie.posterPath})`,
   backgroundSize: "cover",
    width:"20vw",
    height: "50vh",
    margin: "10px",
    border: "solid black 2px",
    borderRadius: "10px",
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // textAlign: 'center'
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
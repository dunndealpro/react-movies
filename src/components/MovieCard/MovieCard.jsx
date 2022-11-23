// import '../MovieCard/MovieCard.css';

export default function MovieCard({movie}){
const cardStyle = {
    // width: "900px",
    // height: "500px",
    color: "white",
    backgroundImage: `url(${movie.posterPath})`,
    margin: "2px",
    border: "solid magenta 2px"
}

    return(
        
            <div style={cardStyle}className="background-images">                
                {movie.title}<br></br>
                Released: {movie.releaseDate}<br></br>
                
            </div>
        
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
import { Link } from 'react-router-dom';
import { movies } from "../../data.js";

export default function ({ actor }) {

    const cardStyle = {
        // width: "500px",
        // height: "500px",
        // color: "white",
        backgroundImage: "url(https://picsum.photos/640)",
        backgroundSize: "cover",
        width:"20vw",
        height: "50vh",
        margin: "10px",
        border: "solid black 2px",
        borderRadius: "10px"
        // border: "solid magenta 2px"
    }

    return (
        <div style={cardStyle}>
          <h2>  {actor}</h2>
            
            
        </div>

    )
}
import { movies } from "../../data.js";
import ActorCard from "../../components/ActorCard/ActorCard";
import './ActorsListPage.css'

export default function ActorsListPage() {

let allActors = []
movies.forEach(function(movie){
allActors = allActors.concat(movie.cast)
})

allActors = new Set(allActors)
allActors=Array.from(allActors)
console.log(allActors)
console.log('Actor: ', allActors[1])

    return (
      <div>
        <h1>Actors</h1>
        <ul className = "actor-list">
          {allActors.map((actor)=> (
            <ActorCard actor = {actor} />

          ))}
        </ul>

      </div>
    );
  }
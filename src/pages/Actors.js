import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actorData, setActorData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/actors')
    .then(res=>res.json())
    .then(data=>setActorData(data))
    .catch(error=>console.error(error))
  }, [])

  console.log(actorData)
  const actorListings = actorData.map((actor)=>{
    return (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>{actor.movies.map((movie)=>{
        return <li key={movie}>{movie}</li>
      })}</ul>
    </article>)
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorListings}
      </main>
    </>
  );
};

export default Actors;

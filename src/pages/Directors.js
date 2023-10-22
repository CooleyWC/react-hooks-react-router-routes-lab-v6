import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directorData, setDirectorData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/directors')
    .then(res=>res.json())
    .then(data=>setDirectorData(data))
  }, [])

  const directorListings = directorData.map((director)=>{
    return (
     <>
        <article key={director.id} >
          <h2 key={director.id}>{director.name}</h2>
          <ul>{director.movies.map((movie)=>{
            return <li key={movie}>{movie}</li>
          })}</ul>
        </article>
      </>
    )
  })

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <h1>Directors Page</h1>
        {directorListings}
      </main>
    </>
  );
};

export default Directors;

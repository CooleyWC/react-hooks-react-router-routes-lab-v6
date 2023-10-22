import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false)

  const movieId = params.id; 

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res=>res.json())
    .then(data=>{
      setMovie(data)
      setIsLoaded(!isLoaded)
    })
    .catch(error=>console.error(error))
  }, [movieId])

  if(!isLoaded){
    return <h1>Loading...</h1>
  };

  console.log(movie)


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre)=>{
          return <span key={genre}>{genre}</span> 
        }
        )}
      </main>
    </>
  );
};

export default Movie;

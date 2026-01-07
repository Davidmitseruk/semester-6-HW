import react, { useState, useEffect } from "react";

const API_KEY = "3ec731da1e3463135eb9aea9519c633f"; 

function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(err => console.error(err));
    },[]);

    return(
        <div>
            <h1>Number 1 movies today!</h1>
            <div>
                {movies.map(movie => (
                    <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
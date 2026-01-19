import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = "3ec731da1e3463135eb9aea9519c633f";


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trending movies today</h1>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
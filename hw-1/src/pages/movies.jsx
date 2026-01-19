import React, { useState } from "react";

const API_KEY = "3ec731da1e3463135eb9aea9519c633f";

function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Search movies</h1>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
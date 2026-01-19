import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const API_KEY = "3ec731da1e3463135eb9aea9519c633f";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <img
        src={`${IMG_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
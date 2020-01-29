import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const listMovies = () => {
    return movies.map(movie => (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h4>{movie.time}</h4>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    ))
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {listMovies()}
    </div>
  );
};

export default Movies;

import React, { useState } from 'react';
import './MovieCard.css';
import MovieInfo from '../MovieInfo/MovieInfo';

const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="movie-card-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="movie-card card bg-dark border-0">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-thumbnail card-img-top"
        />
      </div>

      {hovered && (
        <div className="hover-preview">
          <MovieInfo movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;

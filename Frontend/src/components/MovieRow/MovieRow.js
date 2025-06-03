import React, { useRef } from 'react';
import './MovieRow.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieRow = ({ movies }) => {
  const movieRowRef = useRef();

  const scrollLeft = () => {
    movieRowRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    movieRowRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="container mb-4">
      <div className="movie-row-section">
        <div className="row flex-nowrap overflow-auto" ref={movieRowRef}>
          {movies.map((movie, index) => (
            <div key={index} className="col-auto">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        {/* Scroll Buttons */}
        <button className="movie-scroll-button movie-scroll-left" onClick={scrollLeft}>
          &#8592;
        </button>
        <button className="movie-scroll-button movie-scroll-right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MovieRow;

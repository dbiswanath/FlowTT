import React from 'react';

const MovieInfo = ({ movie }) => {
  return (
    <div className="info">
      <h5>{movie.title}</h5>
        <h6>{movie.duration}<br/>
        {movie.language}, {movie.year}
        </h6>
      
      <button className="btn btn-danger mb-1" style={{ width: '150px', height: '35px' , color :'black' , fontWeight:'bold'}}>
        <i className="fa-solid fa-play"></i> Watch Now
      </button>
      <button className="btn btn-secondary me-1" style={{ width: '180px', height: '35px' , fontWeight:'bold'}} >
        <i className="fa-solid fa-plus"></i> Add To Watch List
      </button>
    </div>
  );
};

export default MovieInfo;

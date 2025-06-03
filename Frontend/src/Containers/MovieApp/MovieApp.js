// MovieApp.jsx
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 6 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

// Sample movie sections
const sections = [
  {
    title: 'Trending Now',
    movies: [
      { title: 'Fallout', image: 'https://via.placeholder.com/300x450', description: 'Post-apocalyptic survival story.' },
      { title: 'Reacher', image: 'https://via.placeholder.com/300x450', description: 'Action-packed crime thriller.' },
      { title: 'Kill', image: 'https://via.placeholder.com/300x450', description: 'A gripping revenge drama.' },
    ],
  },
  {
    title: 'Top Rated',
    movies: [
      { title: 'Joker', image: 'https://via.placeholder.com/300x450', description: 'The origin of the infamous villain.' },
      { title: 'The Godfather', image: 'https://via.placeholder.com/300x450', description: 'Classic mafia saga.' },
      { title: '3 Idiots', image: 'https://via.placeholder.com/300x450', description: 'A comedy with a message.' },
    ],
  },
];

// Modal Component
const MovieModal = ({ show, handleClose, movie }) => (
  <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static" className="text-dark">
    <Modal.Header closeButton>
      <Modal.Title>{movie?.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img
        src={movie?.image}
        alt={movie?.title}
        className="img-fluid mb-3"
        style={{ borderRadius: '10px' }}
      />
      <p>{movie?.description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Button variant="danger">Watch Now</Button>
    </Modal.Footer>
  </Modal>
);

// Carousel Section
const MovieCarousel = ({ title, movies, onCardClick }) => (
  <div className="my-5">
    <h4 className="text-white mb-3">{title}</h4>
    <Carousel responsive={responsive} arrows infinite keyBoardControl itemClass="px-2">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          bg="dark"
          text="light"
          onClick={() => onCardClick(movie)}
          style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
          className="movie-card"
        >
          <Card.Img
            variant="top"
            src={movie.image}
            alt={movie.title}
            style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <Card.Body>
            <Card.Title className="text-center" style={{ fontSize: '0.9rem' }}>
              {movie.title}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </Carousel>
  </div>
);

// Main App
const MovieApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <Container fluid className="bg-black text-light p-4" style={{ minHeight: '100vh' }}>
      <h2 className="text-danger mb-4" style={{ fontFamily: 'Netflix Sans, sans-serif' }}>FlowTT</h2>
      {sections.map((section, idx) => (
        <MovieCarousel
          key={idx}
          title={section.title}
          movies={section.movies}
          onCardClick={handleCardClick}
        />
      ))}
      <MovieModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        movie={selectedMovie}
      />
    </Container>
  );
};

export default MovieApp;

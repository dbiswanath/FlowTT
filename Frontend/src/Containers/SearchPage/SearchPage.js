import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../api/tmdb';
import { Spinner, Card } from 'react-bootstrap';

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearch() {
      try {
        const res = await tmdb.get(`/search/movie`, {
          params: { query },
        });
        setMovies(res.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSearch();
  }, [query]);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /></div>;
  }

  return (
    <div className="container mt-5">
      <h2>Results for "{query}"</h2>
      <div className="d-flex flex-wrap">
        {movies.map(movie => (
          <Card key={movie.id} style={{ width: '14rem' }} className="m-2">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

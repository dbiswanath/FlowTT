import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ProfileSelection = () => {
  const profiles = ['John', 'Emma', 'Alex', 'Guest'];

  return (
    <Container className="mt-5 text-center">
      <h2>Who's Watching?</h2>
      <div className="d-flex justify-content-center mt-4">
        {profiles.map(name => (
          <Card key={name} style={{ width: '10rem' }} className="m-3">
            <Card.Img variant="top" src="/profile.png" alt={name} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ProfileSelection;

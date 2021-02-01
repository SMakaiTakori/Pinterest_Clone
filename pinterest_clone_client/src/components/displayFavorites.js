import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const DisplayFavorites = ({ favorites }) => {
  return (
    <div>
      <Container>
        <h1>Your Pins</h1>
        <br />
        {favorites.map((fav) => (
          <ul>
            <img src={fav} alt="" />
          </ul>
        ))}
      </Container>
    </div>
  );
};

export default DisplayFavorites;

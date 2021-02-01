import React from "react";

import Container from "react-bootstrap/Container";

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

import React, { useState } from "react";

import { addFavorites, fetchFavorites } from "../actions/favoritesActions";
import { connect } from "react-redux";
import LikeButton from "./LikeButton";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const DisplayImages = ({ addFavorites, imgSrc, setImgSrc, pinsData }) => {
  return (
    <Container>
      {pinsData.map((data) => (
        <div style={{ display: "inline-grid", margin: "2em" }}>
          <Card.Img alt="" src={data.previewURL} style={{ width: "16em" }} />
          <br />
          <Card.Text>
            Like :{" "}
            <LikeButton
              source={data.previewURL}
              imgSrc={imgSrc}
              setImgSrc={setImgSrc}
            />
            <br />
            Photo Credit: {data.user}
          </Card.Text>
        </div>
      ))}
    </Container>
  );
};

export default connect(null, { addFavorites, fetchFavorites })(DisplayImages);

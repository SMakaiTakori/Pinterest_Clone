import React, { useState } from "react";

import { addFavorites, fetchFavorites } from "../actions/favoritesActions";
import { connect } from "react-redux";
import LikeButton from "./LikeButton";

import Card from "react-bootstrap/Card";

const DisplayImages = ({ addFavorites, imgSrc, setImgSrc, pinsData }) => {
  return pinsData.map((data) => (
    <div key={data.id}>
      <br />
      <br />
      <Card style={{ width: "16em" }}>
        <Card.Img alt="" src={data.previewURL} />
        <Card.Body>
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
        </Card.Body>
      </Card>
    </div>
  ));
};

export default connect(null, { addFavorites, fetchFavorites })(DisplayImages);

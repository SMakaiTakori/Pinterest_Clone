import React, { useState } from "react";
import { addFavorites, fetchFavorites } from "../actions/favoritesActions";
import { connect } from "react-redux";

const LikeButton = ({ source, addFavorites, imgSrc, setImgSrc }) => {
  const [like, setLike] = useState("\u2606");

  // const addLike = (setImgSrc) => {
  //     if (like === '\u2605')
  //     addFavorites(imgSrc)
  //     console.log(setImgSrc)

  // }

  const likeClick = (source) => {
    if (like === "\u2606") setLike("\u2605");
    else setLike("\u2606");
  };

  const handleClick = () => {
    likeClick();
    setImgSrc([...imgSrc, source]);
    addFavorites(source);

    // alert("You saved your favorite!");
  };

  return (
    <label
      className={like === "\u2605" ? "like-button" : "null"}
      onClick={() => handleClick()}
    >
      {like}
    </label>
  );
};

export default connect(null, { addFavorites, fetchFavorites })(LikeButton);

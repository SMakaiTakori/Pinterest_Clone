import React, { useState, useEffect } from "react";

import DisplayCategories from "./DisplayCategories";
import DisplayImages from "./displayImages";
import SearchDisplay from "./SearchDisplay";

import { connect } from "react-redux";
import { fetchCategories } from "../actions/categoriesActions";
import { fetchPins } from "../actions/pinsActions";
import { addFavorites } from "../actions/favoritesActions";
import { fetchQueries } from "../actions/queriesActions";

const CategoriesContainer = ({
  fetchQueries,
  fetchPins,
  fetchCategories,
  catData,
  selected,
  setSelected,
  pinsData,
  favorites,
  addFavorites,
}) => {
  const [imgSrc, setImgSrc] = useState([]);

  useEffect(() => {
    fetchQueries();
    fetchCategories();
    if (selected) {
      fetchPins(selected);
    }
  }, [fetchCategories, selected]);

  return (
    <div>
      <DisplayCategories
        selected={selected}
        setSelected={setSelected}
        catData={catData}
      />
      <br />
      <SearchDisplay fetchQueries={fetchQueries} />
      <br />
      <DisplayImages
        addFavorites={addFavorites}
        pinsData={pinsData}
        favorites={favorites}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catData: state.categories,
    pinsData: state.pins,
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  fetchPins,
  addFavorites,
  fetchQueries,
})(CategoriesContainer);

import React, { useState } from "react";
import PinsContainer from "./PinsContainer";
import CategoriesContainer from "./CategoriesContainer";
import { Route, Switch } from "react-router-dom";
import DisplayFavorites from "./displayFavorites";
import { connect } from "react-redux";

const Home = ({ favorites }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h1 className="center">Find your Pinspiration!</h1>
      <br />
      <PinsContainer favorites={favorites} selected={selected} />
      <br />
      <h4 style={{ textAlign: "center", color: "#E60023", paddingTop: "25px" }}>
        {" "}
        Need suggestions? Select a popular category below to get started!{" "}
      </h4>
      <br />
      <CategoriesContainer
        favorites={favorites}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(Home);

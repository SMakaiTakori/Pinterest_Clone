import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import DisplayFavorites from "./displayFavorites";
import AboutPage from "./aboutPage";
import Home from "./Home";
import NavBar from "./navBar";

const App = ({ favorites }) => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/pins"
          render={() => <DisplayFavorites favorites={favorites} />}
        />
        <Route exact path="/about-app" component={AboutPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(App);

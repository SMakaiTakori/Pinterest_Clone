import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchPins } from "../actions/pinsActions";
import { postQuery } from "../actions/queriesActions";

import { search } from "../images/magnifying-glass.png";

const PinsContainer = ({ selected, fetchPins, postQuery }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (selected) {
      fetchPins(selected);
    }
  }, [selected]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("a");
    postQuery(query);
    console.log("g");
    fetchPins(query);
  };

  return (
    <>
      <form onSubmit={(e) => handleSearch(e)} className="center">
        <input
          className=" search-bar"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search"
        />
        <button type="submit"> Search </button>
      </form>
    </>
  );
};

export default connect(null, { fetchPins, postQuery })(PinsContainer);

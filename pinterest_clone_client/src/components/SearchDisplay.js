import React from "react";

import { connect } from "react-redux";
import { fetchQueries } from "../actions/queriesActions";
import { fetchPins } from "../actions/pinsActions";

export const SearchDisplay = ({ fetchPins, queries }) => {
  const qArray = queries.slice(1).slice(-5);

  return (
    <div className="center">
      <h5> Search History : </h5>
      {qArray.map((q) => (
        <a
          onClick={() => fetchPins(q.query)}
          style={{
            cursor: "pointer",
            marginRight: "10px",
            color: "#E60023",
            textDecoration: "underline",
          }}
        >
          {q.query}
        </a>
      ))}
    </div>
  );
};

// const mapStateToProps = ({ queries }) => ({ queries })

const mapStateToProps = (state) => {
  return {
    queries: state.queries,
  };
};

export default connect(mapStateToProps, { fetchQueries, fetchPins })(
  SearchDisplay
);

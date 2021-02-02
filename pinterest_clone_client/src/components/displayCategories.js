import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const DisplayCategories = ({ catData, selected, setSelected }) => {
  return (
    <div>
      <Container className="flex-container">
        {catData.map((cat) => (
          <div className=" form-check" key={cat.id}>
            <label>
              <input
                type="radio"
                value={cat.name}
                checked={selected === cat.name}
                onChange={(e) => setSelected(e.target.value)}
                className="form-check-input"
              />
              {cat.name}
            </label>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default DisplayCategories;

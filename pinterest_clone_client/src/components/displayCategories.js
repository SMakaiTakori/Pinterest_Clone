import React from "react";

const DisplayCategories = ({ catData, selected, setSelected }) => {
  return (
    <div>
      {catData.map((cat) => (
        <div className="form-check" key={cat.id}>
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
    </div>
  );
};

export default DisplayCategories;

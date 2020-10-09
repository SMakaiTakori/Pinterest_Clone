import React from 'react';
// import { connect } from 'react-redux';
// import { categoriesReducer } from '../reducers/categoriesReducer';

const DisplayCategories = ({ catData, selected, setSelected }) => {

    // const handleChange = (changeEvent) => {
    //     props.setSelected(changeEvent.target.value)
    // }

    console.log('selected', selected)
    return(
        <div>
            {catData.map((cat) => (
                <div className="form-check" key={cat.id}>
                <label>
                <input
                    type="radio"
                    value= {cat.name}
                    checked={ selected === cat.name }
                    onChange={(e) => setSelected(e.target.value)}                  
                    className="form-check-input"
                />
                    {cat.name}
                </label>
                </div> 
            ))}
        </div>
    )
}



export default DisplayCategories;
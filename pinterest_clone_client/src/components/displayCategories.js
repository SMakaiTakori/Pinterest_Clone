import React from 'react';
import { connect } from 'react-redux';

const DisplayCategories = (props) => {

    return(
        <form>
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Yoga Poses
                </label>
            </div> 
    
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Beautiful Architecture
                </label>
            </div> 
          
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Puppies
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Nature
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Spongebob
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name=""
                    value=""
                    checked={true}
                    className="form-check-input"
                />
                    Home Decor
                </label>
            </div>                
        </form>

    )
}

export default DisplayCategories;
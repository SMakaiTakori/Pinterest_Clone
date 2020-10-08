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
                    value=''
                    checked={ props.selected === 'Yoga Poses' }
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
                    checked={ props.selected === 'Yoga Poses' }
                    className="form-check-input"
                />
                    Beautiful Architecture
                </label>
            </div> 
          
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name="puppies"
                    value=""
                    checked={ props.selected === 'Puppies' }
                    className="form-check-input"
                />
                    Puppies
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name="nature"
                    value=""
                    checked={ props.selected === 'Nature' }
                    className="form-check-input"
                />
                    Nature
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name="spongebob"
                    value=""
                    checked={ props.selected === 'Spongebob' }
                    className="form-check-input"
                />
                    Spongebob
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    name="DIY Home Decor"
                    value=""
                    checked={ props.selected === 'Home Decor' }
                    className="form-check-input"
                />
                    Home Decor
                </label>
            </div>                
        </form>

    )
}

const mapStateToProps = state => {
    return {
        catData: state.catData
    }
}

console.log(mapStateToProps)

export default connect(mapStateToProps)(DisplayCategories);
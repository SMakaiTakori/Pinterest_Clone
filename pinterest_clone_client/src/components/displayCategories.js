import React from 'react';
import { connect } from 'react-redux';

const DisplayCategories = (props) => {

    const handleChange = (changeEvent) => {
        props.setSelected(changeEvent.target.value)
    }

  
      

    console.log('selected', props.selected)
    return(
        <form >
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value= "yoga poses"
                    checked={ props.selected === 'Yoga Poses' }
                    onChange={ handleChange}                  
                    className="form-check-input"
                />
                    Yoga Poses
                </label>
            </div> 
    
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value="Beautiful Architecture"
                    checked={ props.selected === 'Beautiful Architecture' }
                    onChange={ handleChange}
                    className="form-check-input"
                />
                    Beautiful Architecture
                </label>
            </div> 
          
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value="Puppies"
                    checked={ props.selected === 'Puppies' }
                    onChange={ handleChange}
                    className="form-check-input"
                />
                    Puppies
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value="Nature"
                    checked={ props.selected === 'Nature' }
                    onChange={ handleChange}
                    className="form-check-input"
                />
                    Nature
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value="Spongebob"
                    checked={ props.selected === 'Spongebob' }
                    onChange={ handleChange}
                    className="form-check-input"
                />
                    Spongebob
                </label>
            </div> 
            <div className="form-check">
                <label>
                <input
                    type="radio"
                    value="DIY Home Decor"
                    checked={ props.selected === 'Home Decor' }
                    onChange={ handleChange}
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
        catData: state.categories
    }
    
}


export default connect(mapStateToProps)(DisplayCategories);
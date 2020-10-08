import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { fetchPins } from '../actions/pinsActions'


const CategoriesContainer = () => {

    const [selection, setSelection] = useState('');

    return(
        <div>
           <h4> 
               Need suggestions? Select a popular category below to get started!
           </h4>
            
        </div>
    )

}

export default CategoriesContainer;
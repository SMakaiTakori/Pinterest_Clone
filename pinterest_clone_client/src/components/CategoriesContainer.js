import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'


const CategoriesContainer = ({ fetchCategories, catData }) => {

    const [selection, setSelection] = useState('');

    useEffect(() => {

    })

    return(
        <div>
           <h4> 
               Need suggestions? Select a popular category below to get started!
           </h4>
           



        
        </div>
    )
}
const mapStateToProps = state => { 
    return {
        catData: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);
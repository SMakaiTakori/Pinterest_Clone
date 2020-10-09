import React, { useState, useEffect } from 'react';
import DisplayCategories from './displayCategories'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'


const CategoriesContainer = ({ fetchCategories, catData, selected, setSelected }) => {

    useEffect(() => {
        fetchCategories();
      }, [fetchCategories]);

    return(
        <div>
           < DisplayCategories 
           selected={selected} 
           setSelected={setSelected} 
           catData={catData}
           />
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        catData: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);
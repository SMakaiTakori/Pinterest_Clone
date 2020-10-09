import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'
import DisplayCategories from './displayCategories'


const CategoriesContainer = ({ fetchCategories, catData }) => {

    const [selected, setSelected] = useState('');
    // const [unselected, setUnselected] = useState('');

    // useEffect(() => {

    // })

    return(
        <div>
           < DisplayCategories selected={selected} setSelected={setSelected}/>
        </div>
    )
}
const mapStateToProps = state => { 
    return {
        catData: state.catData
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);
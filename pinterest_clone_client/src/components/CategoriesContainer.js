import React, { useEffect } from 'react';
import DisplayCategories from './displayCategories'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'
import { fetchPins } from '../actions/pinsActions'
import DisplayImages from './displayImages'

const CategoriesContainer = ({ fetchPins, fetchCategories, catData, selected, setSelected, pinsData, favorite, setFavorite }) => {

    useEffect(() => {

        fetchCategories();
            if (selected) {
            fetchPins(selected)}
      }, [fetchCategories, selected]);

    return(
        <div>
           < DisplayCategories 
           selected={selected} 
           setSelected={setSelected} 
           catData={catData}
           />
           < DisplayImages pinsData={pinsData} favorite={favorite} setFavorite={setFavorite}  />
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        catData: state.categories,
        pinsData: state.pins
    }
}

export default connect(mapStateToProps, { fetchCategories, fetchPins })(CategoriesContainer);
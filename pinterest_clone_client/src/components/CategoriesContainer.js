import React, { useState, useEffect } from 'react';
import DisplayCategories from './DisplayCategories'
import DisplayImages from './DisplayImages'
import DisplayFavorites from './DisplayFavorites'

import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'
import { fetchPins } from '../actions/pinsActions'
import { addFavorites  } from '../actions/favoritesActions'


const CategoriesContainer = ({ fetchPins, fetchCategories, catData, selected, setSelected, pinsData, favorites, addFavorites}) => {

    const [imgSrc, setImgSrc] = useState([]); 


    useEffect(() => {
        fetchCategories();
            if (selected) {
            fetchPins(selected)}
      }, [fetchCategories, selected]);

    return(
        <div>
           {/* { favorites.length ? < DisplayFavorites favorites={favorites}  /> : null } */}
           < DisplayFavorites favorites={favorites}  />
           < DisplayCategories 
           selected={selected} 
           setSelected={setSelected} 
           catData={catData}
           />
           < DisplayImages addFavorites={addFavorites} pinsData={pinsData} favorites={favorites} imgSrc={imgSrc} setImgSrc={setImgSrc}   />
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        catData: state.categories,
        pinsData: state.pins,
     
    }
}

export default connect(mapStateToProps, { fetchCategories, fetchPins, addFavorites })(CategoriesContainer);
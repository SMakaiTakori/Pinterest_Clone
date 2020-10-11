import React, { useEffect } from 'react';
import DisplayCategories from './DisplayCategories'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions'
import { fetchPins } from '../actions/pinsActions'
import DisplayImages from './DisplayImages'
import { Route, Switch } from 'react-router-dom'
import DisplayFavorites from './DisplayFavorites'


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
          
           {/* <Switch>
               <Route exact path='/pins' render={ () => <DisplayFavorites favorite={favorite} setFavorite={setFavorite} />} />
            </Switch>
            */}
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
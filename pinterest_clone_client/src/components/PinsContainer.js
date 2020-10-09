import React, { useEffect, useState } from 'react';
import DisplayImages from './displayImages'
import { connect } from 'react-redux'
import { fetchPins } from '../actions/pinsActions'
import DisplayFavorites from './displayFavorites';


const PinsContainer = ({ selected, fetchPins, pinsData}) => {

    const [query, setQuery] = useState('');  
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        if (selected) {
            fetchPins(selected)}
        }, [selected])
                
    return(                   
        <>
        <div>                
           <input 
                type='text' 
                onChange= {(e) => setQuery(e.target.value)}
                value={query}
                placeholder='Search'
           /> 
           <button onClick={() => fetchPins(query)}> Get Images </button>      
           {/* {pinsData.length ? < DisplayImages pinsData={pinsData} favorite={favorite} setFavorite={setFavorite}  /> : null}        */}
           < DisplayImages pinsData={pinsData} favorite={favorite} setFavorite={setFavorite}  />
           { favorite.length ? < DisplayFavorites pinsData={pinsData} favorite={favorite} setFavorite={setFavorite} /> : null }
        </div>
        </>
    );
}

const mapStateToProps = state => { 
    return {
        pinsData: state.pins
    }
}

export default connect(mapStateToProps, { fetchPins })(PinsContainer);
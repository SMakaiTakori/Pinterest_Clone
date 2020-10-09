import React from 'react';


const DisplayFavorites = ({favorite}) => {
debugger;
    
    return favorite.map(fav => (
        
        <div>
            <h1>Your Favorites</h1>
            <img
            src={fav}
            alt= ""
            />

        </div>
        
        ))
}
        
export default DisplayFavorites;

//create onClick for Images 
//onClick will setFavorite to favorite array
//Display favorites (when they click my favorites in nav)
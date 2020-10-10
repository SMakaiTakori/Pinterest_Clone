import React from 'react';


const DisplayFavorites = ({ favorite }) => {

    return (
        <div>
            <h1>Your Favorites</h1>
          { favorite.map((fav) => (
            <ul>
            <img
            src={fav}
            alt= ""
            />
            </ul>
          ))}
        </div>
    )
}
        
export default DisplayFavorites;



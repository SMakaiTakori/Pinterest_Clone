import React from 'react';


const DisplayFavorites = ({ favorites }) => {

    return (
        <div>
         
            <h1>Your Pins</h1>
          { favorites.map((fav) => (
            <ul >
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



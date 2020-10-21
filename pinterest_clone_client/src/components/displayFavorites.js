import React from 'react';


const DisplayFavorites = ({ favorite }) => {
// debugger;


    return (
        <div>
         
            <h1>Your Pins</h1>
          { favorite.map((fav) => (
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



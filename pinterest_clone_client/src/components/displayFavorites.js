import React, { useEffect } from 'react';


const DisplayFavorites = (favorite) => {

    
    return(
        <div>
            <h1>My Favorites</h1> 
            {/* if (favorite.length){
                // favorite.map(favs=> (
                //   <img src={favs.previewURL}>
                  
                  
                //   </img>  
                )

                )
            } */}
        </div>
    )
}

export default DisplayFavorites;

//create onClick for Images 
//onClick will setFavorite to favorite array
//Display favorites (when they click my favorites in nav)
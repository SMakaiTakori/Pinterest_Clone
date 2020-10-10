import React from 'react';


 const DisplayImages = ({favorite, setFavorite, pinsData}) => {
   
    return pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
      
            <img alt='' 
            src={data.previewURL} 
            onClick={ (e) => setFavorite([...favorite, e.target.src])}
            />
                
        <span>
            <br/>                 
            Number of Favorites: {data.favorites} 
            <br/>    
            Photo Credit: {data.user}
        </span>
        </div>   
    ))
}


export default DisplayImages;
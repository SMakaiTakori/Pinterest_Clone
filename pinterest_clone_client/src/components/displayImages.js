import React from 'react';
import { addFavorites } from '../actions/favoritesActions';




 const DisplayImages = ({favorites, imgSrc, setImgSrc, pinsData}) => {
//    debugger;
    const handleClick = (e) => {
        setImgSrc([...favorites, e.target.src])
        {addFavorites(favorites)}
        alert('You saved your pin!')
    }

    return pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
            <img alt='' 
            src={data.previewURL} 
            onClick={ (e) => handleClick(e) }
            />
                
        <span>
            <br/>                 
            Likes: {data.favorites} 
            <br/>    
            Photo Credit: {data.user}
        </span>
        
        </div>   
        
    ))
}


export default DisplayImages;
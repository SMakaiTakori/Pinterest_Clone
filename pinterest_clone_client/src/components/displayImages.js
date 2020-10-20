import React from 'react';
import { addFavorites } from '../actions/favoritesActions';




 const DisplayImages = ({ addFavorites, favorites, imgSrc, setImgSrc, pinsData}) => {
//    debugger;
  

    const handleClick = (e) => {
        const source = e.target.src

        setImgSrc([...imgSrc, source])
        addFavorites(source)
        
        // alert(e.target.src)
        
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
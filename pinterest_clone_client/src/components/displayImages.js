import React, { useState } from 'react';

import { addFavorites, fetchFavorites } from '../actions/favoritesActions';
import { connect } from 'react-redux';
import  LikeButton  from './LikeButton';



 const DisplayImages = ({ addFavorites, imgSrc, setImgSrc, pinsData}) => {

    const handleClick = (e) => {
        const source = e.target.src

        setImgSrc([...imgSrc, source])
        addFavorites(source);        
        alert('You saved your favorite!');   
        console.log('display images ', source)     
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


            Like : <LikeButton source={data.previewURL} handleClick={handleClick} imgSrc={imgSrc} setImgSrc={setImgSrc} /> 
           
            
            <br/>    
            Photo Credit: {data.user}
        </span>
        
        </div>   
        
    ))
}


export default connect(null, {addFavorites, fetchFavorites})(DisplayImages) ;
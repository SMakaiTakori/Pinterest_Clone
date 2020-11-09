import React, { useState } from 'react';

import { addFavorites, fetchFavorites } from '../actions/favoritesActions';
import { connect } from 'react-redux';
import  LikeButton  from './LikeButton';



 const DisplayImages = ({ addFavorites, imgSrc, setImgSrc, pinsData}) => {

    return pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
            <img alt='' 
            src={data.previewURL} 
            />
                
        <span> 
            <br/>
            Like : <LikeButton source={data.previewURL} imgSrc={imgSrc} setImgSrc={setImgSrc} />     
            <br/>    
            Photo Credit: {data.user}
        </span>
        
        </div>   
        
    ))
}


export default connect(null, {addFavorites, fetchFavorites})(DisplayImages) ;
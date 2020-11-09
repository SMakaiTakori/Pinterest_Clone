import React, { useState } from 'react'
import { addFavorites, fetchFavorites } from '../actions/favoritesActions';
import { connect } from 'react-redux';


const LikeButton = ({ addFavorites, handleClick }) => {

    const [like, setLike] = useState('\u2606');

    
    // const addLike = (setImgSrc) => {
    //     if (like === '\u2605')
    //     addFavorites(imgSrc)
    //     console.log(setImgSrc)

    // }

    const likeClick = () => { 

        handleClick()        
        if (like === '\u2606')
            setLike('\u2605' )
          
        else 
            setLike('\u2606')
    }

    // How to grab source from DisplayImages
    

    // const handleClick = (setImgSrc) => {
    //     addLike(setImgSrc)
    //     likeClick()
    //     alert("favorited")
    // }


    return (  
            <label
             onClick= {() => likeClick()  }  
            >
                {like}              
        
            </label>
    )
}

export default connect(null, {addFavorites, fetchFavorites})(LikeButton);

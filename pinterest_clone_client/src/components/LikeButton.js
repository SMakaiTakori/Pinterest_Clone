import React, { useState } from 'react'
import { addFavorites, fetchFavorites } from '../actions/favoritesActions';
import { connect } from 'react-redux';


const LikeButton = ({source, handleClick, addFavorites, imgSrc, setImgSrc}) => {

    const [like, setLike] = useState('\u2606');

    
    // const addLike = (setImgSrc) => {
    //     if (like === '\u2605')
    //     addFavorites(imgSrc)
    //     console.log(setImgSrc)

    // }

    const likeClick = () => { 
        if (like === '\u2606')
            setLike('\u2605' )
        else 
            setLike('\u2606')
    }

    // How to grab source from DisplayImages????


    const handleLikeClick = (addFavorites, imgSrc, setImgSrc, source) => {
        setImgSrc([...imgSrc, source])
        addFavorites(source)
        likeClick()
        alert("favorited")
        console.log(imgSrc)
    }


    return (  
            <label
             onClick= {() => handleLikeClick(source)}  
            >
                {like}              
        
            </label>
    )
}

export default connect(null, {addFavorites, fetchFavorites})(LikeButton);

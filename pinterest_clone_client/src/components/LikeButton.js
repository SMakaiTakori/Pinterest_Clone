import React, { useState } from 'react'

const LikeButton = () => {

    const [like, setLike] = useState('\u2606');

    const likeClick = () => {
        if (like === '\u2606')
            setLike('\u2605' )
        else 
            setLike('\u2606')
    }

    return (  
            <label
             onClick= {() => likeClick() }  
            >
                {like}              
        
            </label>
    )
}

export default LikeButton;
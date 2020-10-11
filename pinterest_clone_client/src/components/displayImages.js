import React from 'react';



 const DisplayImages = ({favorite, setFavorite, pinsData}) => {
//    debugger;
    const handleClick = (e) => {
        setFavorite([...favorite, e.target.src])
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
            Number of Favorites: {data.favorites} 
            <br/>    
            Photo Credit: {data.user}
        </span>
        
        </div>   
        
    ))
}


export default DisplayImages;
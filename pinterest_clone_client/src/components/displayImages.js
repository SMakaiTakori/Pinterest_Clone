import React from 'react';
import { connect } from 'react-redux';



 const DisplayImages = (props) => {
     console.log('favs', props.favorite)
    //  debugger;

    return props.pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
      
            <img alt='' 
            src={data.previewURL} 
            onClick={ (e) => props.setFavorite([...props.favorite, e.target.src])}
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

const mapStateToProps = state => { 
    return {
        pinsData: state.pins
    }
}


export default connect(mapStateToProps)(DisplayImages);
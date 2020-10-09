import React from 'react';
import { connect } from 'react-redux';


 const DisplayImages = (props) => {
     console.log('favs', props.favorite)
     debugger;

    return props.pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
        <a href= '#'>
            <img alt='' 
            src={data.previewURL} 
            onClick={ (e) => props.setFavorite( e.target.src)}
            // value={props.favorite}
            />
        </a>              
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
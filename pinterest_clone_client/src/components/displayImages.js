import React from 'react';
import { connect } from 'react-redux';


 const DisplayImages = ({favorite, setFavorite, pinsData}) => {
    // debugger;
    return pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
      
            <img alt='' 
            src={data.previewURL} 
            onClick={ (e) => setFavorite([...favorite, e.target.src])}
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
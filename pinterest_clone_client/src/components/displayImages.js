import React from 'react';
import { connect } from 'react-redux';


 const DisplayImages = (props) => {
     
    return props.pinsData.map(realData => (                                                   
        <div key={realData.id}>
        <br/>   
        <br/>
        <a href= '#'><img alt='' src={realData.previewURL} /></a>              
        <span>
            <br/>                 
            Pins: {realData.favorites} 
            <br/>    
            Photo Credit: {realData.user}
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
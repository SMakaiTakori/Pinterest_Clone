import React from 'react';



 const HitsData = () => {
    debugger;     
    return this.props.state.map(realData => (                                                   
        <>
        <br/>   
        <br/>
        <a href= '#'><img alt='' src={realData.previewURL} /></a>              
        <span>
            <br/>                 
            Pins: {realData.favorites} 
            <br/>    
            Photo Credit: {realData.user}
        </span>
        </>   
    ))
}


export default HitsData;
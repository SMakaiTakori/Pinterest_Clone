import React from 'react';
import { connect } from 'react-redux';
// import CategoriesContainer from '../components/CategoriesContainer'


 const DisplayImages = (props) => {
     
    return props.pinsData.map(data => (                                                   
        <div key={data.id}>
        <br/>   
        <br/>
        
        <a href= '#'><img alt='' src={data.previewURL} /></a>              
        <span>
            <br/>                 
            Pins: {data.favorites} 
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
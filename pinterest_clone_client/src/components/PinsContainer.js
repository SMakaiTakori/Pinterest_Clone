import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { fetchPins } from '../actions/pinsActions'


const PinsContainer = ({ fetchPins }) => {
    const [query, setQuery] = useState('');  
    const [imageSearch, setImageSearch] = useState('');
    const [pinsData, setPinsData] = useState([]);
    
    useEffect(() => {   
        // fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
//         .then(res => res.json())
//         .then(data => 
//             setPinsData(data.hits));     
        fetchPins();
    }, [query]);

    const HitsData = () => {               
        return pinsData.map(hit => (                                                   
            <>
            <br/>   
            <br/>
            <a href= '#'><img alt='' src={hit.previewURL} /></a>              
            <span>
                <br/>                 
                Pins: {hit.favorites} 
                <br/>    
                Photo Credit: {hit.user}
            </span>
            </>   
        ))
    }

                
    return(             
        <>
        <div>
           <h1>Find your next inspiration!</h1>
           <input 
                type='text' 
                onChange= {(e) => setImageSearch(e.target.value)}
                value={imageSearch}
                placeholder='Search'
           /> 
           <button onClick={() => setQuery(imageSearch)}> Get Images </button>           
           {pinsData.length ? < HitsData /> : null}                    
        </div>
        </>
    );
}

// export default PinsContainer;
export default connect(null, {fetchPins})(PinsContainer);
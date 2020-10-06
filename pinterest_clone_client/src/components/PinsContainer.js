import React, { useState, useEffect } from 'react';

// import { connect } from 'react-redux'
// import { fetchPins } from '../actions/pinsActions'


const PinsContainer = () => {
    const [query, setQuery] = useState('');  
    const [imageData, setImageData] = useState('flowers');
    const [pinsData, setPinsData] = useState([]);
    console.log('pinsData',pinsData)
    
    useEffect(() => {
        
        fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
        .then(res => res.json())
        .then(data => 
            setPinsData(data.hits));
    }, [query]);

    const HitsData = () => {          
            return pinsData.map(hit => (
                console.log('HitsData', hit)
            ))
    }

    return(
        
        <>
        <div>
           <h1>Find your next inspiration!</h1>
           <input 
            type='text' 
            onChange= {(e) => setImageData(e.target.value)}
            value={imageData}
            placeholder='Search'
           />
           <button onClick={() => setQuery(imageData)} >Get Images</button>
           <p> Total images related to {query}: {pinsData.total} </p>
           <p> Total Hits:{pinsData.totalHits} </p>  


            {pinsData.length ? < HitsData /> : null}
            {console.log('inside JSX',pinsData)}
            
        </div>
        </>
    );
}

export default PinsContainer;
// export default connect(null, {fetchPins})(PinsContainer);
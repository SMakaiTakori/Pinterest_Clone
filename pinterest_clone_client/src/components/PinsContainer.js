import React, { useState, useEffect } from 'react';
import connect from 'react-redux/lib/connect/connect';
// import { connect } from 'react-redux'
// import { fetchPins } from '../actions/pinsActions'


const PinsContainer = () => {
    const [query, setQuery] = useState('');  
    const [imageData, setImageData] = useState('flowers');
    const [pinsData, setPinsData] = useState({});
    
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=18540307-a22579c944a9b0e0dd7d2004b&q=${query}`)
        .then(res => res.json())
        .then(data => setPinsData(data));
    }, [query]);

    return(
        <>
        <div>
           <h1>Find your next inspiration!</h1>
           <input 
            type='text' 
            onChange= {(e) => setImageData(e.target.value)}
            value={imageData}
           />
           <button onClick={() => setQuery(imageData)}> Image Search </button>
           <p> Total images related to {query}: {pinsData.total} </p>
           <p> Total Hits:{pinsData.totalHits} </p>
           
            
            
            {console.log('inside JSX',pinsData)}

             {/* if (pinsData != null) {
                pinsData.hits.map(hit => (
                    <h1>{hit.user}</h1>
                    ))} */}

            
        </div>
        </>
    );
}

export default PinsContainer;
// export default connect(null, {fetchPins})(PinsContainer);
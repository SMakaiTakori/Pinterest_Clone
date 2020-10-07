import React, { useState, useEffect } from 'react';
import HitsData from '../components/displayImages'

import { connect } from 'react-redux'
import { fetchPins } from '../actions/pinsActions'


const PinsContainer = ({ fetchPins }) => {
    const [query, setQuery] = useState('');  
    const [imageSearch, setImageSearch] = useState('');
    const [pinsData, setPinsData] = useState([]);
    
    useEffect(() => {              
        fetchPins(query);
    }, [query]); 

                
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

const mapStateToProps = state => { 
    return {
        pinsData: state.pinsData
    }
}

// export default PinsContainer;
export default connect(mapStateToProps, { fetchPins })(PinsContainer);
import React, { useState, useEffect } from 'react';
import DisplayImages from '../components/displayImages'

import { connect } from 'react-redux'
import { fetchPins } from '../actions/pinsActions'


const PinsContainer = ({ fetchPins, pinsData }) => {
  
    const [query, setQuery] = useState('');  
                
    return(                   
        <>
        <div>
           <h1>Find your next inspiration!</h1>
           <input 
                type='text' 
                onChange= {(e) => setQuery(e.target.value)}
                value={query}
                placeholder='Search'
           /> 
           <button onClick={() => fetchPins(query)}> Get Images </button>           
           {pinsData.length ? < DisplayImages /> : null}                    
        </div>
        </>
    );
}

const mapStateToProps = state => { 
    return {
        pinsData: state.pins
    }
}

export default connect(mapStateToProps, { fetchPins })(PinsContainer);
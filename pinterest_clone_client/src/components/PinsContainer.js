import React, { useEffect, useState } from 'react';
import SearchDisplay from './SearchDisplay'
import { connect } from 'react-redux'
import { fetchPins  } from '../actions/pinsActions'
import { fetchQueries, postQuery } from '../actions/queriesActions'

const PinsContainer = ({ selected, fetchPins, fetchQueries, postQuery }) => {

    const [query, setQuery] = useState('');   

    useEffect(() => {
        // fetchQueries(); 
        if (selected) {
            fetchPins(selected)}
        }, [selected])

    const handleSearch= (e) => {    
        e.preventDefault();
        // console.log('a') //
        postQuery(query)
        // console.log('g') //
        fetchPins(query)       
    }    
   
    return(                   
        <>
        <div>                
           <input 
                type='text' 
                onChange= {(e) => setQuery(e.target.value)}
                value={query}
                placeholder='Search'
           /> 
           <button onClick={(e) => handleSearch(e) }> Search </button> 
                  
        </div>
        </>
    )
}



export default connect(null, { fetchPins, postQuery, fetchQueries })(PinsContainer);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchPins, fetchQuery } from '../actions/pinsActions'


const PinsContainer = ({ selected, fetchPins, fetchQuery}) => {

    const [query, setQuery] = useState('');   

    useEffect(() => {
        if (selected) {
            fetchPins(selected)}
        }, [selected])

    const handleSearch= (e) => {
    
        e.preventDefault();
        // console.log('a') //
        fetchQuery(query);
        // console.log('g') //
        fetchPins(query);       
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

const mapStateToProps = state => {
    return {
        pinsData: state.pins
    }
}

export default connect(mapStateToProps, { fetchPins, fetchQuery })(PinsContainer);

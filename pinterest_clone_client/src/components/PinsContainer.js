import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchPins, fetchQuery } from '../actions/pinsActions'


const PinsContainer = ({ selected, fetchPins}) => {

    const [query, setQuery] = useState('');   

    useEffect(() => {
        if (selected) {
            fetchPins(selected)}
        }, [selected])

    const handleClick = (query) => {
        fetchPins(query)
        fetchQuery(query)
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
           <button onClick={() => {handleClick(query)} }> Get Images </button> 
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
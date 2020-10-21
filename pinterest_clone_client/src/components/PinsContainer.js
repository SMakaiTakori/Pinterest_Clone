import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchPins, fetchQuery } from '../actions/pinsActions'


const PinsContainer = ({ selected, fetchPins}) => {

    const [query, setQuery] = useState('');   

    useEffect(() => {
        if (selected) {
            fetchPins(selected)}
        }, [selected])

    // const handleSubmit = (e) => {
    //     // debugger;
    //     // console.log('button',query)
    //     e.preventDefault();
    //     fetchQuery(query)
        
    // }    
                
    return(                   
        <>
        <div>  
            {/* <form onSubmit={ (e) => handleSubmit(e)} >            */}
           <input 
                type='text' 
                onChange= {(e) => setQuery(e.target.value)}
                value={query}
                placeholder='Search'
           /> 
           {/* <input type='submit' value='submit' /> */}
           {/* </form>  */}
           <button onClick={() => fetchPins(query) }> Get Images </button> 
         
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pinsData: state.pins
    }
}

export default connect(mapStateToProps, { fetchPins})(PinsContainer);
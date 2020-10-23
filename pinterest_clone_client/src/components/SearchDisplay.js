import React from 'react'

import { connect } from 'react-redux'
import { fetchQueries } from '../actions/queriesActions'
import { fetchPins } from '../actions/pinsActions'



export const SearchDisplay = ({ fetchPins, queries }) => {
        
    const qArray = queries.slice(1).slice(-5)

    return (
        <>
         <h3> Search History : </h3>
        { qArray.map((q) => (              
        
        
        <a
        value={q.query}
        onClick={ (e) => fetchPins(e.target.value) }
        style= {{ cursor: 'pointer', marginRight: '10px', color:'#E60023', textDecoration: 'underline'}}
        > 
            {q.query}
        </a>
        ))} 
        </>
    )
}

const mapStateToProps = ({ queries }) => ({ queries })

export default connect(mapStateToProps, { fetchQueries, fetchPins })(SearchDisplay);
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQueries } from '../actions/queriesActions'
import { fetchPins } from '../actions/pinsActions'
import DisplayImages from './DisplayImages'



export const SearchDisplay = ({ fetchPins, fetchQueries, queries }) => {
    
    // useEffect(() => {
            
    // })

    // console.log('qu', props)
    
    const qArray = queries.slice(1).slice(-5)
    


    return (
        <>
         <h3> Search History : </h3>
        { qArray.map((q) => (  
              
        <button
        value={q.query}
        onClick={ (e) => fetchPins(e.target.value) }
        > 
            {q.query}
        </button>
        ))} 
        </>
    )
}

const mapStateToProps = ({ queries }) => ({ queries })

// const mapStateToProps = state => {
//     return {
//         queries: state.queries        
//     }
  
// }

export default connect(mapStateToProps, { fetchQueries, fetchPins })(SearchDisplay);
import React, {  useState }  from 'react';
import { connect } from 'react-redux'
import { fetchQuery } from '../actions/pinsActions'


const PinsForm = () => {

    const [imgLink, setImgLink] = useState('');
    const [owner, setOwner] = useState('');
   
    const handleSubmit = (e) => {
        // debugger;
        // console.log('button',query)
        e.preventDefault();
      
        
        fetchQuery()
        
    }    

    return(
        <>
        <h1> Submit a Pin </h1>

        <form onSubmit={ (e) => handleSubmit(e)} >           
           <input 
                type='text' 
                onChange= {(e) => setImgLink(e.target.value)}
                value={imgLink}
                placeholder='image Link'
                name=''
           /> 
            <input 
                type='text' 
                onChange= {(e) => setOwner(e.target.value)}
                value={owner}
                placeholder='Owner Name'
                name=''
           /> 
           <input type='submit' value='submit' />
           </form> 
    </>
)

}

export default connect(null, { fetchQuery })(PinsForm);
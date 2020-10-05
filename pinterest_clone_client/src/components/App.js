import React from 'react';
import logo from '../images/pinterest-icon.png'
import PinsContainer from './PinsContainer'

const App = () => {

    return(
        <div>
            <img src={ logo } style={{ float:'left', width:'100px', height:'100px' }} />
            <h1 style= {{ color: '#E60023', paddingTop:'25px'}}>
                Clone App
            </h1>
            <PinsContainer />
        </div>
    )

}

export default App;
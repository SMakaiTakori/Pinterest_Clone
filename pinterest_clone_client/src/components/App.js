import React from 'react';
import logo from '../images/pinterest-icon.png'

const App = () => {

    return(
        <div>
            <img src={ logo } style={{ float:'left', width:'100px', height:'100px' }} />
            <h1 style= {{ color: '#E60023', paddingTop:'25px'}}>
                Clone App
            </h1>
        </div>
    )

}

export default App;
import React from 'react';
import logo from '../images/pinterest-icon.png'
import PinsContainer from './PinsContainer'
import CategoriesContainer from './CategoriesContainer'

const App = () => {

    return(
        <div>
            <img alt={logo} src={ logo } style={{ float:'left', width:'60px', height:'60px' }} />
            <h1 style= {{ color: '#E60023', paddingTop:'25px'}}>
                Clone
            </h1>
            <br/>
            <PinsContainer />
            <br/>
            <CategoriesContainer />
        </div>
    )

}

export default App;
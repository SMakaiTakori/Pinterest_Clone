import React, { useState } from 'react';
import logo from '../images/pinterest-icon.png'
import PinsContainer from './PinsContainer'
import CategoriesContainer from './CategoriesContainer'



const App = () => {

    const [selected, setSelected] = useState('');
    const [favorite, setFavorite] = useState([]); 
   

    return(
        <div>
            <img alt={logo} src={ logo } style={{ float:'left', width:'60px', height:'60px' }} />
            <h1 style= {{ color: '#E60023', paddingTop:'25px'}}>
                Clone
            </h1>
            <br/>
            <h1 >Find your Pinspiration!</h1>
            <PinsContainer favorite={favorite} setFavorite={setFavorite} selected={selected} />
            <br/>
            <h4 style= {{ color: '#E60023', paddingTop:'25px'}}> Need suggestions? Select a popular category below to get started! </h4>
            <CategoriesContainer favorite={favorite} setFavorite={setFavorite} selected={selected} setSelected={setSelected}/>          
        </div>
    )
}

export default App;
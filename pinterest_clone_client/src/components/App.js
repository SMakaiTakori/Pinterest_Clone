// import React from 'react';
import React, { useState } from 'react'
import NavBar from './NavBar'
// import { Route } from 'react-router-dom'

import PinsContainer from './PinsContainer'
import CategoriesContainer from './CategoriesContainer'
// import DisplayFavorites from './DisplayFavorites';
// import AboutPage from './AboutPage';
// import Home from './Home'





const App = () => {

    const [selected, setSelected] = useState('');
    const [favorite, setFavorite] = useState([]); 
    

    return(
        <div>        
            <NavBar />
            <br/>
            {/* <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/pins' component={DisplayFavorites} /> */}
             
            <h1 >Find your Pinspiration!</h1>
            <PinsContainer favorite={favorite} setFavorite={setFavorite} selected={selected} />
            <br/>
            <h4 style= {{ color: '#E60023', paddingTop:'25px'}}> Need suggestions? Select a popular category below to get started! </h4>
            <CategoriesContainer favorite={favorite} setFavorite={setFavorite} selected={selected} setSelected={setSelected} />        



        </div>
    )
}

export default App;
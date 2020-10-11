// import React from 'react';
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Route } from 'react-router-dom'

import PinsContainer from './PinsContainer'
import CategoriesContainer from './CategoriesContainer'
import DisplayFavorites from './DisplayFavorites';
import AboutPage from './AboutPage';
import Home from './Home'





const App = () => {
   

    return(
        <div>        
            <NavBar />
            <br/>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/pins' component={DisplayFavorites} />
            
        </div>
    )
}

export default App;
// import React from 'react';
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom'

import CategoriesContainer from './CategoriesContainer';
import DisplayFavorites from './DisplayFavorites';
import AboutPage from './AboutPage';
import Home from './Home'



const App = () => {
    const [favorite, setFavorite] = useState([]); 

    return(
        <>        
            <NavBar />
            
            <Switch>
            
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/pins' render= {() => < DisplayFavorites favorite={favorite} setFavorite={setFavorite} />} />
            </Switch>
            
        </>
    )
}

export default App;
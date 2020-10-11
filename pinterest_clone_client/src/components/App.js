// import React from 'react';
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom'

import DisplayFavorites from './DisplayFavorites';
import AboutPage from './AboutPage';
import Home from './Home'



const App = () => {
    const [favorite, setFavorite] = useState([]); 

    return(
        <>        
            <NavBar />
            
            <Switch>
            <Route exact path='/pins' render= {() => < DisplayFavorites favorite={favorite} setFavorite={setFavorite} />} />
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={AboutPage} />
            </Switch>
        </>
    )
}

export default App;
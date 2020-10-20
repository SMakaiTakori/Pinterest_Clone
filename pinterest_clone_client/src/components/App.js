import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// import DisplayFavorites from './DisplayFavorites';
import AboutPage from './AboutPage';
import DevAbout from './DevAbout'
import Home from './Home'
import NavBar from './NavBar'


const App = () => {
    

    return(
        <>        
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about-app' component={AboutPage} />
                <Route exact path='/about-dev' component={DevAbout} />
                {/* <Route exact path='/pins' render= {() => < DisplayFavorites favorite={favorite} setFavorite={setFavorite} />} /> */}
            </Switch>
            
        </>
    )
}

export default App;
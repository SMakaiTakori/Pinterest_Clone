import React from 'react';
import logo from '../images/pinterest-icon.png';


const NavBar = () => {

    return(
        <div >
            
            <ul id="nav">
            <img alt={logo} src={ logo } style={{ float:'left', width:'60px', height:'60px',  paddingTop:'10px' }} />
            <h1 style= {{ color: '#E60023'}}> 
                Clone
                <li><a href='#'> About </a></li>
                <li><a href='#'> My Pins </a></li>
                <li><a href='#'> Home </a></li>          
                
            </h1>
            </ul>
        </div>
    )
}

export default NavBar;
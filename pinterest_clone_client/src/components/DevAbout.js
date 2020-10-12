import React from 'react';

import pic1 from '../images/IMG_5290.PNG';
import pic2 from '../images/IMG_5308.PNG';
import pic3 from '../images/IMG_5123.PNG';
import pic4 from '../images/IMG_5126.PNG';

const DevAbout = () => {
    
    return(
        <div>
            <h1> About the Developer </h1>
            <p>
                The developer of this app is a student at the Flatiron School. <br/>This is her fifth project with them 
                and she is hoping to get a great job after this!<br/> These past ten months have been an amazing learning
                experience and can't wait to keep learning! <br/>Here are some pictures of her awesome study buddy.
            </p>
            
                <img src={pic1} alt={pic1} style={{ width:'300px', height:'300px',  paddingTop:'10px' }}  /> 
                <img src={pic2} alt={pic2} style={{ width:'300px', height:'300px',  paddingTop:'10px' }}  /> 
                <img src={pic3} alt={pic3} style={{ width:'300px', height:'300px',  paddingTop:'10px' }} /> 
                <img src={pic4} alt={pic4} style={{  width:'300px', height:'300px',  paddingTop:'10px' }} />                    
        
        </div>
    )
}

export default DevAbout;
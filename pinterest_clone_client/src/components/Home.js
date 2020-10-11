import React, { useState } from 'react';
import PinsContainer from './PinsContainer';
import CategoriesContainer from './CategoriesContainer';


const Home = () => {

    const [selected, setSelected] = useState('');
    const [favorite, setFavorite] = useState([]); 
   

    return(
        <div>
            <h1>Find your Pinspiration!</h1>
            <PinsContainer favorite={favorite} setFavorite={setFavorite} selected={selected} />
            <br/>
            <h4 style= {{ color: '#E60023', paddingTop:'25px'}}> Need suggestions? Select a popular category below to get started! </h4>
            <CategoriesContainer favorite={favorite} setFavorite={setFavorite} selected={selected} setSelected={setSelected} />        
        </div>
    )
}

export default Home;
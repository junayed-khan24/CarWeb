import React from 'react';
import Slider from './Slider';
import Cars from './Cars/Cars';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Slider></Slider>
            <Cars></Cars>
        </div>
    );
};

export default Home;
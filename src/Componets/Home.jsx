import React from 'react';
import Slider from './Slider';
import Cars from './Cars/Cars';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cars></Cars>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;
import React from 'react';
import Slider from './Slider';
import Cars from './Cars/Cars';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cars></Cars>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
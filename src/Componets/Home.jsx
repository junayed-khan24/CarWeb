import React from 'react';
import Slider from './Slider';
import Cars from './Cars/Cars';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import Navbar from './Navbar';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Cars></Cars>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;
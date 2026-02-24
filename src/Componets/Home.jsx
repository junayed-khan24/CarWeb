import React from 'react';
import Slider from './Slider';
import Cars from './Cars/Cars';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Cars></Cars>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Cars from './Cars/Cars';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import Hero2 from './Hero2';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero2></Hero2>
            <Cars></Cars>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
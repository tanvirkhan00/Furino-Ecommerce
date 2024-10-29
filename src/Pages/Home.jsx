import React from 'react';
import HeroSection from '../Componenets/HeroSection';
import AboutSection from './AboutSection';
import ProductSection from '../Componenets/ProductSection';
import RoomSection from '../Componenets/RoomSection';
import FurnitureSection from '../Componenets/FurnitureSection';

const Home = () => {
    return (
        <>

            <HeroSection />
            <AboutSection/>
            <ProductSection/>
            <RoomSection/>
            <FurnitureSection/>
        </>
    );
};

export default Home;
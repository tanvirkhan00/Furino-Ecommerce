import React from 'react';
import HeroSection from '../Componenets/HeroSection';
import ProductSection from '../Componenets/ProductSection';
import RoomSection from '../Componenets/RoomSection';
import FurnitureSection from '../Componenets/FurnitureSection';
import AboutSection from '../Componenets/AboutSection';

const Home = () => {
    return (
        <>

            <HeroSection />
            <AboutSection />
            <ProductSection />
            <RoomSection />
            <FurnitureSection />
        </>
    );
};

export default Home;
import React from 'react';
import Footer from '../Footer';
import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from '../Header';

const RootLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </>
    );
};

export default RootLayout;
import React from 'react';
import HeroReusable from '../Componenets/HeroReusable';
import WishListProduct from '../Componenets/WishListProduct';

const WishList = () => {
    return (
        <>

            <HeroReusable heading="Wishlist Product" p="WishList"/>
            <WishListProduct/>
            
        </>
    );
};

export default WishList;
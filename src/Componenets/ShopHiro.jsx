import React from 'react';

// Hiro Section Image

import shopIcon1 from "/src/assets/shopIcon1.png";
import shopIcon2 from "/src/assets/shopIcon2.png";
import shopIcon3 from "/src/assets/shopIcon3.png";
import HeroReusable from './HeroReusable';
import { useSelector } from 'react-redux';

const ShopHiro = () => {

    let productNumber = useSelector((state) => state.cartItemsStore.cartItems)





    return (
        <>

            <section className="hiro">
                <HeroReusable heading="Shop" p="Shop" />
                <div className='bg-yellow-100'>
                    <div className="container flex items-center justify-between h-[100px]">
                        <div className="leftBox flex items-center gap-[30px]">
                            <div className="singleBox flex items-center border-r-2 border-black pr-[30px] gap-[20px]">
                                <img src={shopIcon1} alt="" />
                                <p>Filter</p>
                                <img src={shopIcon2} alt="" />
                                <img src={shopIcon3} alt="" />
                            </div>
                            <div className="singleBox">
                                <p>Showing 1-16 of 32 results</p>
                            </div>
                        </div>
                        <div className="rightBox flex items-center gap-[20px]">
                            <div className="singleBox flex items-center gap-[10px]">
                                <p>Show</p>
                                <textarea className='w-[55px] h-[55px] text-center py-[15px] text-black' name="number" id="" placeholder=''></textarea>
                            </div>
                            <div className="singleBox flex items-center gap-[10px]">
                                <p>Short by</p>
                                <textarea className='w-[55px] h-[55px] text-center py-[15px]' name="text" id="" placeholder='Default'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ShopHiro;
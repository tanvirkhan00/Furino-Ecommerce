import React from 'react';
import { Link } from 'react-router-dom';

// Hiro Section Image
import hiroIcon from "/src/assets/shopIcon.png";
import hiroIcon1 from "/src/assets/hiroIcon.png";

const CartHiro = () => {
    return (
        <>
            <section className="hiro">
                <div className="content flex flex-col justify-center items-center bg-ShopHiroImage h-[320px]">
                    <img src={hiroIcon1} alt="" />
                    <h1 className='text-[48px] font-medium'>Cart</h1>
                    <div className="pages flex items-center gap-[10px]">
                        <a href="#"><Link to="/">Home</Link></a>
                        <img src={hiroIcon} alt="" />
                        <a href="#">Cart</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartHiro;
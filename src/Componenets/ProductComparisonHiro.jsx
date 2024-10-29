import React from 'react';
import { Link } from "react-router-dom";

// Hiro Section Image
import hiroIcon from "/src/assets/shopIcon.png";
import hiroIcon1 from "/src/assets/hiroIcon.png"

const ProductComparisonHiro = () => {
    return (
        <>

            <section className="contact-hiro ">
                <div className="content flex flex-col justify-center items-center bg-ShopHiroImage h-[320px]">
                    <img src={hiroIcon1} alt="" />
                    <h1 className='text-[48px] font-medium'>Product Comparison</h1>
                    <div className="pages flex items-center gap-[10px]">
                        <a href="#"><Link to="/">Home</Link></a>
                        <img src={hiroIcon} alt="" />
                        <a href="#">Comparison</a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductComparisonHiro;
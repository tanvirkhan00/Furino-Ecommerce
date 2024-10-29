import React from 'react';
import { Link } from "react-router-dom";

// Image
import comparisonImg from "/src/assets/comparisonImg.png";
import comparisonImg1 from "/src/assets/comparisonImg1.png";

// Icon
// React Icon
import { FaStar } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";


const MoreProduct = () => {
    return (
        <>

            <section className="moreProduct mt-[50px] px-[50px]">
                <div className="container flex justify-between gap-[20px] flex-wrap">
                    <div className='basis-[23%] flex flex-col gap-[20px]'>
                        <h3 className='text-[30px] font-semibold'>Go to Product page for more Products</h3>
                        <Link to="/shop"><a className='text-slate-400 border-b-2 border-slate-400 max-w-fit pb-[5px]'>View More</a></Link>
                    </div>
                    <div className='basis-[23%]'>
                        <img className='h-[175px]' src={comparisonImg} alt="" />
                        <h1 className='text-[25px] font-semibold'>Asgaard Safa</h1>
                        <p className='font-semibold'>Rs. 250,000.00</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>4.7</p>
                            <a className='text-amber-500 flex items-center gap-2'><FaStar /><FaStar /><FaStar /><FaStar /></a>
                            <p className='text-slate-400 border-l-2 border-slate-400 pl-2'>204 review</p>
                        </div>
                    </div>
                    <div className='basis-[23%]'>
                        <img src={comparisonImg1} alt="" />
                        <h1 className='text-[25px] font-semibold'>Asgaard Safa</h1>
                        <p className='font-semibold'>Rs. 250,000.00</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>4.7</p>
                            <a className='text-amber-500 flex items-center gap-2'><FaStar /><FaStar /><FaStar /><FaStar /></a>
                            <p className='text-slate-400 border-l-2 border-slate-400 pl-2'>145 review</p>
                        </div>
                    </div>
                    <div className='basis-[23%]'>
                        <h1 className='text-[30px] font-bold'>Add A Product</h1>
                        <div className='flex justify-between bg-orange-800 text-white rounded-md items-center px-[20px] py-2 mt-2'>
                            <a>Choose a Product</a>
                            <a className='text-[20px]'><IoChevronDownOutline /></a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MoreProduct;
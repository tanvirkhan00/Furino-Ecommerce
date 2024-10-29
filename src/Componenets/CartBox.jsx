import React from 'react';
import { Link } from "react-router-dom";
import sofa from "/src/assets/Sofa.png";

// Icon
import { MdDelete } from "react-icons/md";


const CartBox = () => {
    return (
        <>

            <section className="cartDetailsBox mt-[50px] px-[50px]">
                <div className="container flex justify-between gap-[20px]">
                    <div className='flex flex-col gap-[20px] basis-[70%]'>
                        <div className='flex items-center bg-orange-400 h-[50px] justify-between px-[130px] pl-[180px]'>
                            <p>Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>
                        <div className='flex items-center justify-between pr-[30px]'>
                            <img src={sofa} alt="" />
                            <p>Asgaard Sofa</p>
                            <p>Rs. 250,000.00</p>
                            <p className='border-4 border-slate-500 py-1 px-2'>1</p>
                            <p>Rs. 250,000.00</p>
                            <a className='text-[20px] text-orange-400 cursor-pointer'><MdDelete /></a>
                        </div>
                    </div>
                    <div className='basis-[30%]'>
                        <div className="cartTotal bg-orange-400 px-[20px] py-[10px] pb-[80px]">
                            <h1 className='text-[30px] font-bold text-center'>Cart Totals</h1>
                            <div className='mt-[20px] flex items-center justify-between'>
                                <h1>Subtotal</h1>
                                <h1>Rs. 250,000.00</h1>
                            </div>
                            <div className='mt-[10px] flex items-center justify-between'>
                                <h1>Total</h1>
                                <h1>Rs. 250,000.00</h1>
                            </div>
                            <div className="button mt-[20px] border-2 border-slate-800 px-[30px] py-[10px] max-w-fit mx-auto rounded-[20px]">
                                <a href="#"><Link to="/ProductComparison">Check Out</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CartBox;
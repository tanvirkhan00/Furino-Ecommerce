import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <footer className='footer mt-[50px] border-slate-400 border-t-2 px-[50px] mx-auto'>
                <div className="container flex justify-between gap-[20px]  py-[50px]">
                    <div className="singleBox text-start">
                        <div className="heading">
                            <h1 className='text-[24px] font-bold'>Funiro.</h1>
                        </div>
                        <div className="content text-[16px] text-slate-400 font-normal mt-[30px]">
                            <h3>400 University Drive Sultan 200 Coral Gables,</h3>
                            <h3>FL 33134 USA</h3>
                        </div>
                    </div>
                    <div className="singleBox text-start">
                        <div className="heading text-slate-400 ">
                            <h1>Links</h1>
                        </div>
                        <div className="content mt-[30px]">
                            <ul className='flex flex-col gap-[10px]'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Shop">Shop</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/Blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="singleBox text-start">
                        <div className="heading text-slate-400">
                            <h1>Help</h1>
                        </div>
                        <div className="content mt-[30px] flex flex-col gap-[10px]">
                            <p>Payment Options</p>
                            <p>Returns</p>
                            <p>Privacy Policies</p>
                        </div>
                    </div>
                    <div className="singleBox flex  items-start gap-[10px] text-[14px]">
                        <input className='border-b-2 border-slate-600' type="email" placeholder='Enter Your Email Address' />
                        <a className='border-b-2 border-slate-600 font-semibold' href="">SUBSCRIVE</a>
                    </div>
                </div>
                <div className="privacy text-start mt-[20px] mx-auto py-[10px]">
                    <p>2023 furino. All right reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;
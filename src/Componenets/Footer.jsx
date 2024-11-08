import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <footer className='footer mt-[50px] border-slate-400 border-t-2'>
                <div className="container flex justify-between flex-wrap gap-[20px] py-[50px]">
                    <div className="singleBox text-start basis-[40%]">
                        <div className="heading">
                            <h1 className='text-[24px] font-bold'>Funiro.</h1>
                        </div>
                        <div className="content text-[16px] text-slate-400 font-normal mt-[30px]">
                            <h3>400 University Drive Sultan 200 Coral Gables,</h3>
                            <h3>FL 33134 USA</h3>
                        </div>
                    </div>
                    <div className="singleBox text-start basis-[15%]">
                        <div className="heading text-slate-400 ">
                            <h1>Links</h1>
                        </div>
                        <div className="content mt-[30px]">
                            <ul className='flex flex-col gap-[10px]'>
                                <li className='hover:text-red-600'><Link to="/">Home</Link></li>
                                <li className='hover:text-red-600'><Link to="/Shop">Shop</Link></li>
                                <li className='hover:text-red-600'><Link to="/Contact">Contact</Link></li>
                                <li className='hover:text-red-600'><Link to="/Blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="singleBox text-start basis-[20%]">
                        <div className="heading text-slate-400">
                            <h1>Help</h1>
                        </div>
                        <div className="content mt-[30px] flex flex-col gap-[10px]">
                            <p className='hover:text-red-600'>Payment Options</p>
                            <p className='hover:text-red-600'>Returns</p>
                            <p className='hover:text-red-600'>Privacy Policies</p>
                        </div>
                    </div>
                    <div className="singleBox flex  items-start gap-[10px] text-[14px] basis-[23%]">
                        <input className='border-b-2 border-slate-600 hover:border-black' type="email" placeholder='Enter Your Email Address' />
                        <a className='border-b-2 border-slate-600 font-semibold hover:text-red-500' href="">SUBSCRIVE</a>
                    </div>
                </div>
                <div className="container text-start mt-[20px] py-[10px]">
                    <p>2023 furino. All right reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;
import React from 'react';

// Service Section Image
import serviceIcon from "/src/assets/trophy1.png";
import serviceIcon1 from "/src/assets/guarantee.png";
import serviceIcon2 from "/src/assets/shipping.png";
import serviceIcon3 from "/src/assets/customer-support.png";


const ServiceSection = () => {
    return (
        <>

            <section className="service mt-[50px] bg-red-100 px-[50px]">
                <div className="container flex items-center justify-between py-[100px]">
                    <div className="singleBox flex item-center gap-[5px]">
                        <img src={serviceIcon} alt="" />
                        <div className="content">
                            <h1 className='text-[25px] font-semibold'>High Quality</h1>
                            <p className='text-slate-500'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="singleBox flex item-center gap-[5px]">
                        <img src={serviceIcon1} alt="" />
                        <div className="content">
                            <h1 className='text-[25px] font-semibold'>Warranty Protection</h1>
                            <p className='text-slate-500'>Over 2 years</p>
                        </div>
                    </div>
                    <div className="singleBox flex item-center gap-[5px]">
                        <img src={serviceIcon2} alt="" />
                        <div className="content">
                            <h1 className='text-[25px] font-semibold'>Free Shipping</h1>
                            <p className='text-slate-500'>Order over 150$</p>
                        </div>
                    </div>
                    <div className="singleBox flex item-center gap-[5px]">
                        <img src={serviceIcon3} alt="" />
                        <div className="content">
                            <h1 className='text-[25px] font-semibold'>24/7 Support</h1>
                            <p className='text-slate-500'>Dedicated Support</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
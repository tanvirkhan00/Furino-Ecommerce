import React from 'react';

const HeroSection = () => {
    return (
        <>
            <section className="hero-section bg-HeroImage h-[100vh]">
                <div className='flex justify-end items-end h-full'>
                    <div className="content bg-red-200 flex flex-col w-[640px] mr-[50px] mb-[50px] text-start p-[50px]">
                        <h3 className='text-black font-semibold'>New Arriavl</h3>
                        <h1 className='text-orange-400 text-[52px] font-bold'>Discover Our New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <a className='w-[220px] h-[70px] bg-orange-400 rounded-md text-white mt-[20px] flex items-center justify-center font-bold' href="#">BUY NOW</a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;
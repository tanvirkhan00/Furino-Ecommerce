import React from 'react';

const HeroSection = () => {
    return (
        <>
            <section className="bg-HeroImage h-[600px]">
                <div className="container mt-[150px]">
                    <div className='flex justify-end items-end h-[500px]'>
                        <div className="bg-red-200 flex flex-col w-[300px] md:w-[400px] text-start p-[20px] lg:p-[60px] bottom-0">
                            <h3 className='text-black font-semibold'>New Arriavl</h3>
                            <h1 className='text-orange-400 text-[20px] font-bold'>Discover Our New Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <a className='w-[150px] h-[50px] bg-orange-400 rounded-md text-white mt-[20px] flex items-center justify-center font-semibold' href="#">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;
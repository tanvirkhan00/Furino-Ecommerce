import React from 'react';


// About Image
import aboutImage from "/src/assets/homeAbout.png";
import aboutImage1 from "/src/assets/homeAbout1.png";
import aboutImage2 from "/src/assets/homeAbout2.png";

import Slider from "react-slick";

const AboutSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };


    return (
        <>

            <section className="mt-[50px] px-[50px] mx-auto">
                <div className="container flex flex-col gap-[30px]">
                    <div className="heading text-center">
                        <h1 className='font-bold text-[48px]'>Browse The Range</h1>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="singleBox flex flex-col gap-[10px]">
                                <img src={aboutImage} alt="" className='rounded-md' />
                                <h1 className='text-[24px] font-semibold text-center'>Dining</h1>
                            </div>
                            <div className="singleBox flex flex-col gap-[10px]">
                                <img src={aboutImage1} alt="" className='rounded-md' />
                                <h1 className='text-[24px] font-semibold text-center'>Living</h1>
                            </div>
                            <div className="singleBox flex flex-col gap-[10px]">
                                <img src={aboutImage2} alt="" className='rounded-md' />
                                <h1 className='text-[24px] font-semibold text-center'>Bedroom</h1>
                            </div>
                            <div className="singleBox flex flex-col gap-[10px]">
                                <img src={aboutImage2} alt="" className='rounded-md' />
                                <h1 className='text-[24px] font-semibold text-center'>Bedroom</h1>
                            </div>
                            <div className="singleBox flex flex-col gap-[10px]">
                                <img src={aboutImage2} alt="" className='rounded-md' />
                                <h1 className='text-[24px] font-semibold text-center'>Bedroom</h1>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutSection;
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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
        <>

            <section className="mt-[50px]">
                <div className="container flex flex-col gap-[30px]">
                    <div className="heading text-center">
                        <h1 className='font-bold text-[30px]'>Browse The Range</h1>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="">
                                <img src={aboutImage} alt="" className='rounded-md md:h-[400px]' />
                                <h1 className='text-[20px] font-semibold text-center'>Dining</h1>
                            </div>
                            <div className="">
                                <img src={aboutImage1} alt="" className='rounded-md md:h-[400px]' />
                                <h1 className='text-[20px] font-semibold text-center'>Living</h1>
                            </div>
                            <div className="">
                                <img src={aboutImage2} alt="" className='rounded-md md:h-[400px]' />
                                <h1 className='text-[20px] font-semibold text-center'>Bedroom</h1>
                            </div>
                            <div className="">
                                <img src={aboutImage2} alt="" className='rounded-md md:h-[400px]' />
                                <h1 className='text-[20px] font-semibold text-center'>Bedroom</h1>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutSection;
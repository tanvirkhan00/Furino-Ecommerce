import React from 'react';

// Contact Image Section
import contactImage from "/src/assets/location.png";
import contactImage1 from "/src/assets/phone.png";
import contactImage2 from "/src/assets/watch.png";

const ContactSection = () => {
    return (
        <>

            <section className="contact mt-[50px] px-[50px] mx-auto">
                <div className="container">
                    <div className="heading text-center">
                        <h1 className='text-[36px] font-semibold'>Get In Touch With Us</h1>
                        <p className='text-slate-400'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    </div>
                    <div className="contentBox flex justify-between mt-[50px]">
                        <div className="singleBox flex flex-col gap-[20px] items-start text-start">
                            <div className="address flex gap-[20px]">
                                <div className="icon">
                                    <img src={contactImage} alt="" />
                                </div>
                                <div className="content">
                                    <h1 className='text-[24px] font-semibold'>Address</h1>
                                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>
                            <div className="phone flex gap-[20px]">
                                <div className="icon">
                                    <img src={contactImage1} alt="" />
                                </div>
                                <div className="content">
                                    <h1 className='text-[24px] font-semibold'>Phone</h1>
                                    <p>Mobile: +(84) 546-6789
                                        Hotline: +(84) 456-6789
                                    </p>
                                </div>
                            </div>
                            <div className="time flex gap-[20px]">
                                <div className="icon">
                                    <img src={contactImage2} alt="" />
                                </div>
                                <div className="content">
                                    <h1 className='text-[24px] font-semibold'>Working Time</h1>
                                    <p>Monday-Friday: 9:00 - 22:00</p>
                                    <p>Saturday-Sunday:9.00-21:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="singleBox flex flex-col gap-[20px]">
                            <div className="company flex flex-col items-start gap-[10px]">
                                <label htmlFor="">Your Name</label>
                                <input className='border-2 border-slate-400 w-[530px] h-[75px] rounded-md px-[20px]' type="text" placeholder='Abc' />
                            </div>
                            <div className="company flex flex-col items-start gap-[10px]">
                                <label htmlFor="">Email Address</label>
                                <input className='border-2 border-slate-400 w-[530px] h-[75px] rounded-md px-[20px]' type="text" placeholder='abc@gmail.com' />
                            </div>
                            <div className="company flex flex-col items-start gap-[10px]">
                                <label htmlFor="">Subject</label>
                                <input className='border-2 border-slate-400 w-[530px] h-[75px] rounded-md px-[20px]' type="text" placeholder='This is an optional' />
                            </div>
                            <div className="company flex flex-col items-start gap-[10px]">
                                <label htmlFor="">Message</label>
                                <input className='border-2 border-slate-400 w-[530px] h-[120px] rounded-md px-[20px]' type="text" placeholder="Hi! I'd like to ask about" />
                            </div>
                            <div className="Button mt-[20px]">
                                <a href="" className='text-white bg-orange-800 px-[70px] py-[15px] rounded-md'>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
import React from 'react';

// roomImage
import roomImage from "/src/assets/roomImage.png";
import roomImage1 from "/src/assets/roomImage1.png";
import roomImage2 from "/src/assets/roomImage2.png";
import roomIcon from "/src/assets/Vector1.png";
import vectorIcon from "/src/assets/Vector2.png";
import roomIcon1 from "/src/assets/Active.png";
import roomIcon2 from "/src/assets/Ellipse1.png";
import roomIcon3 from "/src/assets/Ellipse2.png";
import roomIcon4 from "/src/assets/Ellipse3.png";
import roomIcon5 from "/src/assets/shopIcon.png";

const RoomSection = () => {
    return (
        <>

           <section className="mt-[50px]">
                <div className="container bg-orange-100 flex flex-col md:flex-row gap-[20px] py-[50px]">
                    <div className="singleBox text-start flex flex-col justify-center md:basis-[25%]">
                        <h1 className='text-[30px] font-bold'>50+ Beautiful rooms inspiration</h1>
                        <p className='text-[16px] text-slate-600'>Our desiner already a lot of beautyful protitipe of rooms that inspire you.</p>
                        <div className="btn mt-[40px]">
                            <a className='px-[30px] py-[10px] text-white rounded-md bg-amber-800 ' href="#">Explore More</a>
                        </div>
                    </div>
                    <div className="singleBox relative md:basis-[40%]">
                        <div className="bg-image h-[300px]">
                            <img className='h-full w-full' src={roomImage} alt="" />
                        </div>
                        <div className="content bg-white absolute bottom-[30px] p-[20px] left-[30px] bg-opacity-80 md:bottom-12">
                            <div className="box flex items-center text-slate-400">
                                <p>01</p>
                                <img src={vectorIcon} alt="" />
                                <p>Bed Room</p>
                            </div>
                            <p className='text-[28px] font-semibold'>Inner Peace</p>
                        </div>
                        
                        <div className="right-arrow absolute bottom-[30px] left-[220px] bg-orange-900 p-[10px] md:bottom-12">
                            <img src={roomIcon} alt="" />
                        </div>
                    </div>
                    <div className="singleBox relative md:basis-[30%]">
                        <div className="bg-image h-[300px]">
                            <img className='h-full w-full' src={roomImage1} alt="" />
                        </div>
                        <div className="gillipsBox flex items-center gap-[15px] mt-[20px]">
                            <img src={roomIcon1} alt="" />
                            <img src={roomIcon2} alt="" />
                            <img src={roomIcon3} alt="" />
                            <img src={roomIcon4} alt="" />
                        </div>
                        <div className="rightArrow absolute bg-white text-orange-900 rounded-full h-[48px] w-[48px] flex items-center justify-center right-[-20px] bottom-[200px]">
                            <img className='' src={roomIcon5} alt="" />
                        </div>
                    </div>
                    <div className="singleBox hidden md:block">
                        <div className="bg-image h-[300px]">
                            <img className='h-full' src={roomImage2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default RoomSection;
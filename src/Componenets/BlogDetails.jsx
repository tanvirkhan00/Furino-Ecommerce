import React from 'react';

// Image
import BlogImg from "/src/assets/BlogImg.png";
import BlogImg1 from "/src/assets/BlogImg1.png";
import BlogImg2 from "/src/assets/BlogImg2.png";
import BlogPost from "/src/assets/BlogPost.png";
import BlogPost1 from "/src/assets/BlogPost1.png";
import BlogPost2 from "/src/assets/BlogPost2.png";
import BlogPost3 from "/src/assets/BlogPost3.png";
import BlogPost4 from "/src/assets/BlogPost4.png";


// Icon
import { RiAccountBoxLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";



const BlogDetails = () => {
    return (
        <>

            <section className="blogDetails mt-[50px] px-[50px]">
                <div className="container">
                    <div className="content flex justify-between gap-[50px]">
                        <div className="singleBox flex flex-col gap-[20px] basis-[80%]">
                            <img className='h-[500px]' src={BlogImg} alt="" />
                            <div className='flex items-center gap-[20px] text-slate-500'>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><RiAccountBoxLine /></a>
                                    <h3>Admin</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><MdDateRange /></a>
                                    <h3>14 Oct 2022</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><PiShoppingCartSimpleLight /></a>
                                    <h3>Wood</h3>
                                </div>
                            </div>
                            <h1 className='text-[25px] font-semibold'>Going all-in with millennial design</h1>
                            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorum dolore, molestiae, vel culpa ipsum nostrum veritatis sequi illum deleniti obcaecati debitis. Explicabo vitae commodi minima earum in fugiat illo.</p>
                            <a className='border-b border-black pb-[10px] max-w-fit' href="#">Read More</a>
                            <img className='h-[500px]' src={BlogImg1} alt="" />
                            <div className='flex items-center gap-[20px] text-slate-500'>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><RiAccountBoxLine /></a>
                                    <h3>Admin</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><MdDateRange /></a>
                                    <h3>14 Oct 2022</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><PiShoppingCartSimpleLight /></a>
                                    <h3>Handmade</h3>
                                </div>
                            </div>
                            <h1 className='text-[25px] font-semibold'>Exploring new ways of decorating</h1>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea repudiandae nemo quas, placeat dolore recusandae at aspernatur similique voluptatum, quis culpa, deserunt magni. Ipsum obcaecati non soluta repudiandae repellendus.</p>
                            <a className='border-b border-black pb-[10px] max-w-fit' href="#">Read More</a>
                            <img className='h-[500px]' src={BlogImg2} alt="" />
                            <div className='flex items-center gap-[20px] text-slate-500'>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><RiAccountBoxLine /></a>
                                    <h3>Admin</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><MdDateRange /></a>
                                    <h3>14 Oct 2022</h3>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <a href="#"><PiShoppingCartSimpleLight /></a>
                                    <h3>Wood</h3>
                                </div>
                            </div>
                            <h1 className='text-[25px] font-semibold'>Handmade pieces that took time to make</h1>
                            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum odio consectetur qui eligendi labore, fuga ullam provident natus soluta quod eveniet dolorem eaque aliquid fugit eum illum perferendis deserunt.</p>
                            <a className='border-b border-black pb-[10px] max-w-fit' href="#">Read More</a>
                        </div>
                        <div className="singleBox flex flex-col gap-[20px] basis-[20%]">
                            <div className="inputBox border-2 border-slate-300 flex items-center justify-between py-[5px] rounded-md px-[10px]">
                                <input className='px-[10px] py-[5px]' type="text" />
                                <a className='text-[30px] font-bold' href="#"><CiSearch /></a>
                            </div>
                            <h1 className='text-[25px] font-semibold'>Categories</h1>
                            <div className='mt-[20px] flex flex-col gap-[10px]'>
                                <div className='flex justify-between text-slate-400'>
                                    <p>Crafts</p>
                                    <p>2</p>
                                </div>
                                <div className='flex justify-between text-slate-400'>
                                    <p>Design</p>
                                    <p>8</p>
                                </div>
                                <div className='flex justify-between text-slate-400'>
                                    <p>Interior</p>
                                    <p>1</p>
                                </div>
                                <div className='flex justify-between text-slate-400'>
                                    <p>Handmate</p>
                                    <p>2</p>
                                </div>
                                <div className=' flex justify-between text-slate-400'>
                                    <p>Wood</p>
                                    <p>2</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[20px] mt-[50px]'>
                                <h1 className='text-[25px] font-semibold'>Recent Posts</h1>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={BlogPost} alt="" />
                                    <div>
                                        <h3>Going all-in with millennial design</h3>
                                        <h3 className='text-slate-400'>03 Aug 2022</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={BlogPost1} alt="" />
                                    <div>
                                        <h3>Exploring new ways of decorating</h3>
                                        <h3 className='text-slate-400'>03 Aug 2022</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={BlogPost2} alt="" />
                                    <div>
                                        <h3>Handmade pieces that took time to make</h3>
                                        <h3 className='text-slate-400'>03 Aug 2022</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={BlogPost3} alt="" />
                                    <div>
                                        <h3>Modern home in Milan</h3>
                                        <h3 className='text-slate-400'>03 Aug 2022</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={BlogPost4} alt="" />
                                    <div>
                                        <h3>Colorful office redesign</h3>
                                        <h3 className='text-slate-400'>03 Aug 2022</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] text-center flex items-center justify-center gap-[30px]'>
                        <a className='text-white bg-orange-500 px-[20px] py-[15px] rounded-[10px]' href="#">1</a>
                        <a className='text-black bg-slate-300 px-[20px] py-[15px] rounded-[10px]' href="#">2</a>
                        <a className='text-black bg-slate-300 px-[20px] py-[15px] rounded-[10px]' href="#">3</a>
                        <a className='text-black bg-slate-300 px-[20px] py-[15px] rounded-[10px]' href="#">Next</a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogDetails;
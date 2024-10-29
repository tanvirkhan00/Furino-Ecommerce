import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';

const ProductSection = () => {


    let info = useContext(apiData)
    let filteredProduct = info.filter((item) => item.id <= 8)

    return (
        <>

            <section className="product mt-[50px] px-[50px] mx-auto">
                <div className="container flex flex-col gap-[30px]">
                    <h1 className='font-bold text-[48px] text-center'>Our Product</h1>
                    <div className="content-box flex flex-wrap gap-[35px]">
                        {filteredProduct.map((item) => (
                            <div className="single-box relative bg-slate-200 text-start w-[285px] rounded-md">
                                <Link to={`/Shop/${item.id}`}><img src={item.thumbnail} alt="" className='h-[250px] w-full' /></Link>
                                <div className="content p-[15px]">
                                    <h1 className='text-[24px] font-semibold'>{item.title}</h1>
                                    <p className='text-[24px] font-semibold text-yellow-500'>Rs.   {item.price}$</p>
                                </div>
                                <div className="mark absolute bg-red-500 text-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center right-[20px] top-[20px] text-white">
                                    <p>{item.discountPercentage}%</p>
                                </div>
                            </div>
                        ))}
                        <div className="button text-center w-full mt-[20px]">
                            <Link to="/Shop"><a className='border-2 border-amber-800 text-amber-800 px-[50px] py-[10px] font-semibold rounded-md'>Show More</a></Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductSection;
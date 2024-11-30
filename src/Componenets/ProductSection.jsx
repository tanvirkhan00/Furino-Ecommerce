import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from './Slice/CartSlice';

const ProductSection = () => {


    let dispatch = useDispatch()

    let gggg = (item) => {
        dispatch(addToCart({ ...item, qty: 1 }))
    }

    let info = useContext(apiData)
    let filteredProduct = info.filter((item) => item.id <= 8)

    return (
        <>

            <section className="mt-[50px]">
                <div className="container flex flex-col gap-[30px]">
                    <h1 className='font-bold text-[30px] text-center'>Our Product</h1>
                    <div className="flex flex-wrap gap-[20px] lg:gap-[30px]">
                        {filteredProduct.map((item) => (
                            <div className="single-box relative text-start basis-[47%] md:basis-[31%] lg:basis-[23%]">
                                <div className='relative group'>
                                    <Link to={`/Shop/${item.id}`}><img src={item.thumbnail} alt="" className='h-[180px] lg:h-[230px] w-full bg-green-400 relative' /></Link>
                                    <button onClick={() => gggg(item)} className='bg-black text-white w-full bg-opacity-80 py-2 bottom-0 opacity-0 duration-500  ease-in-out   group-hover:opacity-100 absolute'>Add To Cart</button>
                                </div>
                                <div className="content mt-2">
                                    <h1 className='font-semibold text-[18px] w-[150px] truncate'>{item.title}</h1>
                                    <p className='font-semibold text-red-600'>Rs.   {item.price}$</p>
                                </div>
                                <div className="mark absolute bg-red-500 text-[10px] rounded-full w-[30px] h-[30px] flex items-center justify-center right-[10px] top-[10px] text-white">
                                    <p>{item.discountPercentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="button text-center w-full mt-[20px]">
                        <Link to="/shop"><a className='border-2 border-amber-800 text-amber-800 px-[30px] py-[10px] font-semibold rounded-md'>Show More</a></Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductSection;
import React, { useEffect, useState } from 'react';


import axios from 'axios';
import { Link } from 'react-router-dom';


const RelatedProductsSection = ({ abc }) => {

    let [allData, setAllData] = useState([])

    let data = () => axios.get("https://dummyjson.com/products").then((response) => {
        setAllData(response.data.products);
    })
    useEffect(() => {
        data()
        setAllData(data)
    })


    return (
        <>

            <section className="product mt-[50px] px-[50px] mx-auto">
                <div className="container flex flex-col gap-[30px]">
                    <h1 className='font-bold text-[48px] text-center'>Related Product</h1>
                    <div className="content-box flex flex-wrap gap-[35px]">
                        {abc?.map((item) => (
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default RelatedProductsSection;
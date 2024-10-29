import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// React Icon
import { FaStar } from "react-icons/fa";
import { apiData } from './ContextApi';
import RelatedProductsSection from './RelatedProductsSection';



const ProductDetails = () => {

    let [info, setInfo] = useState([])

    let productId = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId.id}`)
            .then((response) => response.json())
            .then((data) => {
                setInfo(data)
            })
            .then((error) => console.error("This is the error", error))
    }, [])

    let allData = useContext(apiData)

    let filteredProduct = allData.filter((item) => item.category == info.category)

    return (
        <>
            <section className='px-[50px] mx-auto mt-[50px]'>
                <div className="container">
                    <div className="img-content flex justify-between gap-[30px]">
                        <div className="flex items-center justify-center basis-[50%] h-[500px]">
                            {/* {info?.images?.map((item)=>(
                            <img src={item} alt="" className='w-[35%]'/>
                        ))} */}
                            <img src={info.thumbnail} alt="" />
                        </div>
                        <div className="content basis-[50%] flex flex-col gap-[10px]">
                            <h2 className='text-[42px]'>{info.title}</h2>
                            <p className='text-[24px] font-medium text-slate-400'>Rs. {info.price}$</p>
                            <div className="rating flex items-center gap-5">
                                <div className="flex items-center gap-2 text-yellow-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='text-[24px] font-medium'>{info.rating}</p>
                            </div>
                            <p className='text-[13px]'>{info.description}</p>
                            <div className="size">
                                <p className='text-slate-400'>Size</p>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='bg-orange-500 px-[20px] py-[10px] rounded-md text-white'>L</p>
                                    <p className='bg-slate-500 px-[15px] py-[10px] rounded-md text-white'>XL</p>
                                    <p className='bg-slate-500 px-[15px] py-[10px] rounded-md text-white'>XS</p>
                                </div>
                            </div>
                            <div className="color">
                                <p className='text-slate-400'>Color</p>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='bg-cyan-700 w-[40px] rounded-full h-[40px]'></p>
                                    <p className='bg-black w-[40px] rounded-full h-[40px]'></p>
                                    <p className='bg-orange-500 w-[40px] rounded-full h-[40px]'></p>
                                </div>
                            </div>
                            <div className="button flex gap-4 items-center mt-3 border-b-2 border-slate-400 pb-[50px]">
                                <input type="number" placeholder='1' className='w-[150px] px-[20px] py-[15px] border-2 border-slate-400 rounded-md ' />
                                <button className='w-[200px] border-slate-500 border-2 py-[15px] rounded-md'>
                                    Add To Cart
                                </button>
                            </div>
                            <div>
                                <p className='text-[20px] flex items-center gap-[10px]'> <span className='text-semibold text-[25px]'>Category  :</span> {info.category}</p>
                                <p className='text-[20px] flex items-center gap-[10px]'> <span className='text-semibold text-[25px]'>Stock:</span>{info.stock}</p>
                                <p className='text-[20px] flex items-center gap-[10px]' > <span className='text-semibold text-[25px]'>Brand:</span>{info.brand}</p>
                                <p className='text-[20px] flex items-center gap-[10px]'> <span className='text-semibold text-[25px]'>Sku:</span>{info.sku}</p>
                                <p className='text-[20px] flex items-center gap-[10px]'> <span className='text-semibold text-[25px]'>ReturnPolicy:</span>{info.returnPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductsSection abc={filteredProduct} />
        </>
    );
};

export default ProductDetails;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from './Slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopProducts = () => {

    let info = useContext(apiData)
    let dispatch = useDispatch()

    // Add Cart
    let handleToCart = (item) => {
        dispatch(addToCart({ ...item, qty: 1 }));
        toast(`Added to Cart`)
    }

    // Pagination

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(15)

    let lastIndexItem = currentPage * perPage
    let firstIndexItem = lastIndexItem - perPage

    let currentItems = info.slice(firstIndexItem, lastIndexItem)

    let pageNumber = Math.ceil(info.length / perPage);

    let pageNumbers = []

    for (let i = 1; i <= pageNumber; i++) {
        pageNumbers.push(i)
    }
    let handlePage = (item) => {
        setCurrentPage(item)
    }

    let handlePrev =() => {
        setCurrentPage(currentPage - 1)
    }
    let handleNext =() => {
        setCurrentPage(currentPage + 1)
    }

    




    return (
        <>
            <section className="mt-[50px]">
                <div className="container flex flex-col gap-[30px]">
                    <h1 className='font-bold text-[48px] text-center'>Our Product</h1>
                    <div className="flex flex-wrap gap-[30px]">
                        {currentItems.map((item) => (
                            <div className="single-box relative text-start lg:basis-[31%]">
                                <div className='relative group'>
                                    <Link to={`/Shop/${item.id}`}><img src={item.thumbnail} alt="" className='h-[250px] w-full bg-green-400 relative' /></Link>
                                    <button onClick={() => handleToCart(item)} className='bg-black text-white w-full bg-opacity-80 py-2 bottom-0 opacity-0 duration-500  ease-in-out   group-hover:opacity-100 absolute'>Add To Cart</button>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={1000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                    />
                                </div>
                                <div className="content mt-2">
                                    <h1 className='text-[20px] font-semibold'>{item.title}</h1>
                                    <p className='text-[20px] font-semibold text-red-600'>Rs.   {item.price}$</p>
                                </div>
                                <div className="mark absolute bg-red-500 text-[12px] rounded-full w-[48px] h-[48px] flex items-center justify-center right-[20px] top-[20px] text-white">
                                    <p>{item.discountPercentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center mt-10 gap-5 text-[20px] flex-wrap'>
                        <p className='border-2 border-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={handlePrev}>Prev</p>
                        {pageNumbers.map((item) => (
                        <div className='w-[40px] h-[40px] border-2 border-black rounded-full flex items-center justify-center duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-green-500'>
                            <span className='' onClick={() => handlePage(item)}>{item}</span>
                        </div>
                        ))}
                        <p className='border-2 border-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={handleNext}>Next</p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ShopProducts;
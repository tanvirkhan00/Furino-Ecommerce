import React from 'react';
import { Link } from "react-router-dom";

// Icon
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, deleteItem, increment } from './Slice/CartSlice';


const CartBox = () => {

    let cartData = useSelector((state) => state.cartItemsStore.cartItems)

    let dispatch = useDispatch()
    let handleIncrement = (index) => {
        dispatch(increment(index))
    }

    let handleDecrement = (index) => {
        dispatch(decrement(index))
    }

    let handleDelete = (index) => {
        dispatch(deleteItem(index))
    }

    let total = cartData.reduce((acc, item)=>{
        return acc + (item.price * item.qty)
    }, 0)
    

    return (
        <>

            <section className="cartDetailsBox mt-[50px] px-[50px]">
                <div className="container flex justify-between gap-[20px]">
                    <div className='flex flex-col gap-[20px] basis-[70%]'>
                        <div className='flex items-center bg-red-200 h-[50px] justify-between text-center px-10 font-semibold'>
                            <p className='basis-[42%]'>Product</p>
                            <p className='basis-[13%]'>Price</p>
                            <p className='basis-[15%]'>Quantity</p>
                            <p className='basis-[15%] pr-5'>Subtotal</p>
                        </div>
                        {cartData.map((item, index) => (
                            <div className='flex items-center justify-between text-center shadow-sm shadow-black px-3'>
                                <img src={item.thumbnail} alt="" className='h-[80px] basis-[14%]' />
                                <p className='basis-[25%] text-start font-semibold'>{item.title}</p>
                                <p className='basis-[12%] '>Rs {item.price}</p>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-[25px]' onClick={()=>handleIncrement(index)}>+</span>
                                    <p className='border-2 border-slate-300 py-1 px-2 basis-[14%] '>{item.qty}</p>
                                    <span className='text-[25px]' onClick={()=>handleDecrement(index)}>-</span>
                                </div>
                                <p className='basis-[12%] text-green-700 '>Rs. {((item.qty) * (item.price)).toFixed(2)}</p>
                                <a onClick={()=>handleDelete(index)} className='text-[20px] text-orange-400 cursor-pointer basis-[2%] '><MdDelete /></a>
                            </div>
                        ))}
                    </div>
                    <div className='basis-[30%]'>
                        <div className="cartTotal px-[20px] py-[10px] pb-[80px] shadow-md shadow-black">
                            <h1 className='text-[30px] font-bold text-center'>Cart Totals</h1>
                            <div className='mt-[20px] flex items-center justify-between'>
                                <h1>Subtotal</h1>
                                <h1>Rs. {total.toFixed(2)}</h1>
                            </div>
                            <div className='mt-[10px] flex items-center justify-between'>
                                <h1>Total</h1>
                                <h1>Rs. {total.toFixed(2)}</h1>
                            </div>
                            <div className="button mt-[20px] border-2 border-slate-800 px-[30px] py-[10px] max-w-fit mx-auto rounded-[20px]">
                                <a href="#"><Link to="/comparison">Check Out</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CartBox;
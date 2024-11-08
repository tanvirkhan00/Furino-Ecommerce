import React, { useContext, useRef, useState } from 'react';
import Logo from "/src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { apiData } from './ContextApi';


// ReactIcon
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { BsCartXFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { CiMenuFries } from "react-icons/ci";





const Header = () => {

    let carteRef = useRef()
    let [cartShow, setCartShow] = useState(false)
    let navigate = useNavigate()
    let [searchItem, setSearchItem] = useState([])
    let [inputValue, setInputValue] = useState("")
    let data = useContext(apiData)

    document.addEventListener("click", (e) => {
        if (carteRef.current.contains(e.target)) {
            setCartShow(!cartShow)
        } else {
            setCartShow(false)
        }
    })

    let handleSearch = (e) => {
        setInputValue(e.target.value)
        if (e.target.value == "") {
            setSearchItem([])
        } else {
            let filterData = data.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setSearchItem(filterData)
        }
    }

    let handleToDetails = (id) => {
        navigate(`/shop/${id}`)
        setInputValue("")
        setSearchItem([])
    }

    let cartItemNumber = useSelector((state) => state.cartItemsStore.cartItems)

    let cartProducts = useSelector((state) => state.cartItemsStore.cartItems)



    return (

        <header className='fixed bg-green-600 w-full left-0 z-50 top-0 bg-opacity-80'>
            <div className="container flex flex-col md:flex-row md:justify-between gap-[20px] h-[100px]">
                <div className="logo flex items-center justify-between">
                    <Link to="/"><img src={Logo} alt="" className='duration-300 ease-in-out hover:shadow-md hover:shadow-black' /></Link>
                    <span className='md:hidden'><CiMenuFries/></span>
                </div>
                <div className="nav hidden md:flex">
                    <ul className='flex items-center gap-[20px]'>
                        <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/">Home</Link></li>
                        <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/shop">Shop</Link></li>
                        <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/blog">Blog</Link></li>
                        <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="icon flex items-center justify-center gap-[20px] text-[20px] relative">
                    <a className='duration-300 ease-in-out hover:scale-110 hover:text-red-500' href="#"><VscAccount /></a>
                    <input onChange={handleSearch} value={inputValue} type="search" placeholder='Sarch product' className='border-[1px] border-[#000] bg-slate-200 outline-none rounded-lg pl-5 py-1 text-[#000] text-[15px] hover:border-red-500' />
                    {searchItem.length > 0 &&
                        <div className="absolute top-12 left-0 w-[350px] h-[600px] bg-white overflow-y-scroll flex flex-col gap-4 p-2 border-[1px] border-[#000]">
                            {searchItem.map((item) => (
                                <div onClick={() => handleToDetails(item.id)} className="flex items-center gap-2 p-2 shadow-sm shadow-black">
                                    <img className='h-[60px]' src={item.thumbnail} alt="" />
                                    <div className='text-[16px]'>
                                        <h2 className='font-semibold'>{item.title}</h2>
                                        <h4 className='text-red-500'>$ {item.price}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    <span className='duration-300 ease-in-out hover:scale-125 hover:text-red-500'><Link to="/wishList"><CiHeart /></Link></span>
                    <div className="relative">
                        <span className='hover:text-red-500' ref={carteRef}><FaCartPlus /></span>
                        <span className='absolute -top-3 -right-2 bg-red-500 h-4 w-4 rounded-full flex justify-center items-center text-[12px] text-white'>{cartItemNumber.length}</span>
                    </div>
                    {cartShow &&
                        <div className="shoppingCart flex flex-col gap-[30px] bg-white w-[400px] z-10 right-0 top-0 h-[100vh] px-[30px] py-2 absolute border-[1px] border-black">
                            <div className="heading flex justify-between items-center border-b-2 border-slate-500 pb-[30px]">
                                <h1 className='text-[25px] font-bold'>Shopping Cart</h1>
                                <a className='duration-300 ease-in-out hover:scale-110 hover:text-red-500' href="#"><BsCartXFill /></a>
                            </div>
                            <div className='flex flex-col gap-3 h-[350px] overflow-y-scroll'>
                                {cartProducts.map((item) => (
                                    <div className="flex items-center shadow-sm shadow-black p-2 relative group duration-400 ease-in-out">
                                        <Link to={`/shop/${item.id}`}>
                                            <div className='flex  items-center gap-4'>
                                                <img src={item.thumbnail} alt="" className='h-[60px] w-[70px]' />
                                                <div className='text-[16px]'>
                                                    <h1 className='font-semibold'>{item.title}</h1>
                                                    <p>1 * <span className='text-orange-600'>Rs. {item.price}$</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                        <a className='duration-300 ease-in-out hover:scale-110 hover:text-red-500 cursor-pointer absolute right-1 opacity-0 group-hover:opacity-100' href="#"><IoIosCloseCircleOutline /></a>
                                    </div>
                                ))}
                            </div>
                            <div className="total flex  items-center gap-[100px] border-b-2 border-slate-500 pb-[30px]">
                                <p>Subtotal</p>
                                <p className='text-orange-500'>Rs. 520,000.00</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <a className='border-2 border-black rounded-2xl px-[20px] py-[5px]' href="#"><Link to="/Cart">Cart</Link></a>
                                <Link to="/checkOut"><a className='border-2 border-black rounded-2xl px-[10px] py-[5px]'>Checkout</a></Link>
                                <Link to="/comparison"><a className='border-2 border-black rounded-2xl px-[10px] py-[5px]' href="#">Comparison</a></Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header >

    );
};

export default Header;
import React, { useContext, useRef, useState } from 'react';
import Logo from "/src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { apiData } from './ContextApi';

// CartImg

import cartImg from "/src/assets/cartImg.png";
import cartImg1 from "/src/assets/cartImg1.png";


// ReactIcon
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { BsCartXFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";




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


    return (
        <header className='flex items-center justify-between gap-[20px] px-[50px] h-[100px]'>
            <div className="logo">
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className="nav">
                <ul className='flex items-center gap-[20px]'>
                    <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/">Home</Link></li>
                    <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/shop">Shop</Link></li>
                    <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/blog">Blog</Link></li>
                    <li className='border-b-4 border-transparent ease-in-out duration-200 hover:border-yellow-500 hover:scale-y-105'><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="icon flex items-center gap-[20px] text-[20px] relative">
                <a href="#"><VscAccount /></a>
                <input onChange={handleSearch} value={inputValue} type="search" placeholder='Sarch product' className='border-[1px] border-[#000] bg-slate-200 outline-none rounded-lg pl-5 py-1 text-[#000] text-[15px]' />
                {searchItem.length > 0 &&
                    <div className="absolute top-12 left-0 w-[350px] h-[100vh] bg-white overflow-y-scroll flex flex-col gap-3 p-2">
                        {searchItem.map((item) => (
                            <div onClick={()=>handleToDetails(item.id)} className="flex items-center gap-2 bg-slate-200 p-2">
                                <img className='w-24 h-24' src={item.thumbnail} alt="" />
                                <div>
                                    <h2 className='font-semibold'>{item.title}</h2>
                                    <h4 className='text-yellow-500'>{item.price}$</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <a href="#"><CiHeart /></a>
                <a ref={carteRef}><FaCartPlus /></a>
                {cartShow &&
                    <div className="shoppingCart flex flex-col gap-[30px] bg-white w-[400px] z-10 right-0 top-0 h-[100vh] px-[30px] absolute">
                        <div className="heading flex justify-between items-center border-b-2 border-slate-500 pb-[30px]">
                            <h1 className='text-[25px] font-bold'>Shopping Cart</h1>
                            <a href="#"><BsCartXFill /></a>
                        </div>
                        <div className="img-box flex justify-between items-center text-center">
                            <img src={cartImg} alt="" />
                            <div>
                                <h1 className='font-semibold text-[20px]'>Asgaard sofa</h1>
                                <p>1 * <span className='text-orange-600'>Rs. 250,000.00</span></p>
                            </div>
                            <a href="#"><IoIosCloseCircleOutline /></a>
                        </div>
                        <div className="img-box flex justify-between items-center text-center">
                            <img src={cartImg1} alt="" />
                            <div>
                                <h1 className='font-semibold text-[20px]'>Casaliving Wood</h1>
                                <p>1 * <span className='text-orange-600'>Rs. 270,000.00</span></p>
                            </div>
                            <a href="#"><IoIosCloseCircleOutline /></a>
                        </div>
                        <div className="total flex  items-center gap-[100px] border-b-2 border-slate-500 pb-[30px]">
                            <p>Subtotal</p>
                            <p className='text-orange-500'>Rs. 520,000.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <a className='border-2 border-black rounded-2xl px-[20px] py-[5px]' href="#"><Link to="/Cart">Cart</Link></a>
                            <Link to="/checkOut"><a className='border-2 border-black rounded-2xl px-[10px] py-[5px]'>Checkout</a></Link>
                            <Link to="/ProductComparison"><a className='border-2 border-black rounded-2xl px-[10px] py-[5px]' href="#">Comparison</a></Link>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;
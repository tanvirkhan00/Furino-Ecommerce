import React from 'react';
import hiroIcon from "/src/assets/shopIcon.png";
import hiroIcon1 from "/src/assets/hiroIcon.png";
import { Link } from 'react-router-dom';

const HeroReusable = ({heading, p}) => {
    return (
        <div className="content flex flex-col justify-center items-center bg-ShopHiroImage h-[320px]">
            <img src={hiroIcon1} alt="" />
            <h1 className='text-[48px] font-medium'>{heading}</h1>
            <div className="pages flex items-center gap-[10px]">
                <a><Link to="/">Home</Link></a>
                <img src={hiroIcon} alt="" />
                <a href="#">{p}</a>
            </div>
        </div>
    );
};

export default HeroReusable;
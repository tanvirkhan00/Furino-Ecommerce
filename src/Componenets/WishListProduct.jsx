import React from 'react';

const WishListProduct = () => {
    return (
        <>

            <section>
                <div className="container my-[50px] mx-auto">
                    <div>
                        <div>
                            <ul className='flex justify-between gap-2 text-center font-semibold text-[20px]'>
                                <li className='basis-[24%]'>Products Name</li>
                                <li className='basis-[24%]'>Price</li>
                                <li className='basis-[24%]'>Brand</li>
                                <li className='basis-[24%]'>Category</li>
                            </ul>

                        </div>
                        <div>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='basis-[24%] flex items-center gap-2'>
                                    <img src="" alt="" />
                                    <h2></h2>
                                </div>
                                <p className='basis-[24%]'></p>
                                <p className='basis-[24%]'></p>
                                <p className='basis-[24%]'></p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default WishListProduct;
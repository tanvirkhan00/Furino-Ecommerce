import React from 'react';

const DetailsSection = () => {
    return (
        <>

            <section className="details mt-[50px] px-[50px] mx-auto">
                <div className="container flex justify-between gap-[20px]">
                    <div className="details flex flex-col gap-[20px] basis-[50%]">
                        <div className="name flex items-center gap-[25px]">
                            <div className="firstName flex flex-col items-start gap-[10px]">
                                <label htmlFor="fName">First Name</label>
                                <input className='border-2 border-slate-400 w-[211px] h-[75px] rounded-md px-[20px]' type="text" />
                            </div>
                            <div className="lastName flex flex-col items-start gap-[10px]">
                                <label htmlFor="lName">Last Name</label>
                                <input className='border-2 border-slate-400 w-[211px] h-[75px] rounded-md px-[20px]' type="text" />
                            </div>
                        </div>
                        <div className="company flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Company Name (Optional)</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" />
                        </div>
                        <div className="country flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Country / Region</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='Bangladesh' />
                        </div>
                        <div className="street-address flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Street Address</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='' />
                        </div>
                        <div className="town flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Town / City</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='' />
                        </div>
                        <div className="province flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Province</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='Western Province' />
                        </div>
                        <div className="zipCode flex flex-col items-start gap-[10px]">
                            <label htmlFor="">ZIP Code</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='' />
                        </div>
                        <div className="phone flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Phone</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="number" placeholder='' />
                        </div>
                        <div className="email flex flex-col items-start gap-[10px]">
                            <label htmlFor="">Email Address</label>
                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="email" placeholder='' />
                        </div>
                        <div className="additionalInformation flex flex-col items-start gap-[10px]">

                            <input className='border-2 border-slate-400 w-[450px] h-[75px] rounded-md px-[20px]' type="text" placeholder='Additional Information' />
                        </div>
                    </div>
                    <div className="products basis-[50%]">
                        <div className="accountBox flex flex-col gap-[20px] border-b-2 border-slate-500 pb-[20px]">
                            <div className="title flex items-center justify-between gap-[10px] font-semibold text-[24px]">
                                <h3>Product</h3>
                                <h3>Subtotal</h3>
                            </div>
                            <div className="productName flex items-center justify-between gap-[10px]">
                                <h3>Asgaard safa * 1</h3>
                                <h3>Rs. 250,000.00</h3>
                            </div>
                            <div className="subtotal flex items-center justify-between gap-[10px]">
                                <h3>Subtotal</h3>
                                <h3>Rs. 250,000.00</h3>
                            </div>
                            <div className="productName flex items-center justify-between gap-[10px]">
                                <h3>Total</h3>
                                <h3 className='text-amber-700 text-[24px] font-semibold'>Rs. 250,000.00</h3>
                            </div>
                        </div>
                        <div className="bank flex flex-col gap-[20px] items-start text-start pt-[20px]">
                            <h1 className='font-semibold'>Direct Bank Transfer</h1>
                            <p className='text-slate-400'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                            <h3 className='text-slate-400'>1. Direct Bank Transfer</h3>
                            <h3 className='text-slate-400'>2. Cash On Delivery</h3>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
                            <div className="btn mx-auto mt-[20px]">
                                <a className='border-2 border-slate-800 rounded-md px-[70px] py-[15px] inline-block' href="">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default DetailsSection;
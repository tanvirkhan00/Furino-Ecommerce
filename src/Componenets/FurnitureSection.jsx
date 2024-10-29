import React from 'react';

// furnitureImage
import furnitureImage from "/src/assets/furniture.png";

const FurnitureSection = () => {
    return (
        <>

            <section className="furniture mt-[50px] px-[50px] mx-auto">
                <div className="container">
                    <div className="heading text-center">
                        <h3 className='text-zinc-600 font-bold'>Share your setup with</h3>
                        <h1 className='text-[40px] font-bold'>#FuniroFurniture</h1>
                    </div>
                    <div className="content">
                        <img src={furnitureImage} alt="" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default FurnitureSection;
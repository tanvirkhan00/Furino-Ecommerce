import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DescriptionSection = () => {

    let productId = useParams()
    let [info, setInfo] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId.id}`)
            .then((response) => response.json())
            .then((data) => {
                setInfo(data)
            })
    }, [])

    return (
        <>

            <section className="description border-t-2 border-slate-400 mt-[50px] pt-[50px] px-[50px] mx-auto">
                <div className="container ">
                    <Tabs>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Additional information</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>{info.description}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex gap-[50px]">
                                {info?.reviews?.map((item) => (
                                    <div className=''>
                                        <p>Rating:  {item.rating}</p>
                                        <p>Comments:   {item.comment}</p>
                                        <p>Date:  {item.date}</p>
                                        <p>Name:  {item.reviewerName}</p>
                                        <p>Email:  {item.reviewerEmail}</p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div className="img-box flex justify-center mt-[30px]">
                        <div className="flex justify-center items-center h-[500px] gap-[20px] w-[30%]">
                            {info?.images?.map((item) => (
                                <img src={item} alt="" className='h-80 w-80' />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default DescriptionSection;
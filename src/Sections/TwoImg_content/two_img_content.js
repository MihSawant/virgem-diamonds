import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";


const TwoImgContent = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="hero-sec mb-8 lg:mb-0">
                    <div className="">
                        <div className="relative lg:pt-20 2xl:pt-24 pt-14" >
                            <div className="container">
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-[46%] w-full lg:pr-10 2xl:pr-24 lg:order-1 order-2">
                                        <Skeleton className="flex w-[80%] h-[135px]  lg:mb-6 mb-4 lg:mt-0 mt-6 rounded" />
                                        <Skeleton className="flex w-full lg:h-40 h-48 mb-4 rounded" />
                                        <Skeleton className="flex w-full lg:h-40 h-48 mb-4 rounded" />
                                    </div>
                                    <div className="lg:w-[54%] w-full lg:order-2 order-1">
                                        <div className="flex">
                                            <Skeleton className="flex w-1/2 m-auto h-[320px] md:h-[450px] lg:h-[600px] mr-2 rounded-xl" />
                                            <Skeleton className="flex w-1/2 m-auto h-[320px] md:h-[450px] lg:h-[600px] ml-2 rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="hero-sec mb-8 lg:mb-0">
                        <div className="">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="relative lg:pt-20 2xl:pt-24 pt-14" key={index}>
                                        <div className="container">
                                            <div className="flex flex-wrap items-center">
                                                <div className="lg:w-[46%] w-full lg:pr-10 2xl:pr-24 lg:order-1 order-2">
                                                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-6 mb-4 leading-tight lg:mt-0 mt-6">{data.title}</h2>
                                                    <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7 text-gray-800">{data.description}</p>
                                                    <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7  text-gray-800">{data.description2}</p>
                                                </div>
                                                <div className="lg:w-[54%] w-full lg:order-2 order-1">
                                                    <div className="flex">
                                                        <Image src={data.img_1} width={300} height={300} alt={data.alt} title={data.alt} className="w-1/2 m-auto h-auto pr-2" />
                                                        <Image src={data.img_2} width={300} height={300} alt={data.alt} title={data.alt} className="w-1/2 m-auto h-auto pl-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default TwoImgContent;
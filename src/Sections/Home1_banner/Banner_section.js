import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const BannerText = ({ initialValues }) => {

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
                        <div className="relative  lg:py-14 md:py-14 py-8" >
                            <div className="container overflow-hidden ">
                                <div className="bg-gray-400/20 overflow-hidden relative bg-center bg-cover 2xl:p-24 lg:p-12 py-8  px-4 before:content-[''] before:block before:w-[100%] lg:before:w-[70%] before:h-full before:bg-[#00000070] before:absolute ltr:lg:before:-left-[15%] rtl:lg:before:-right-[15%] ltr:before:-left-[0%] rtl:before:-right-[0%] before:top-0 before:z-0 ltr:lg:before:-skew-x-[24deg] rtl:lg:before:skew-x-[24deg]">
                                    <div className="lg:w-1/2 w-full relative z-10">
                                        <div className="text-center max-w-[95%] 2xl:max-w-[85%] m-auto">
                                            <Skeleton className="flex w-48 h-[28px] mb-4 rounded mx-auto" />
                                            <Skeleton className="flex w-full h-[68px] mb-4 rounded mx-auto" />
                                            <Skeleton className="flex w-full sm:h-[112px] h-[192px] mb-4 rounded mx-auto" />
                                            <Skeleton className="flex w-48 h-12 rounded mx-auto" />
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
                                    <div className="relative  lg:py-14 md:py-14 py-8" key={index}>
                                        <div className="container overflow-hidden ">
                                            <div style={{ backgroundImage: `url(${data.bg_img})` }} className=" overflow-hidden relative bg-center bg-cover 2xl:p-24 lg:p-12 py-8  px-4 before:content-[''] before:block before:w-[100%] lg:before:w-[70%] before:h-full before:bg-[#00000070] before:absolute ltr:lg:before:-left-[15%] rtl:lg:before:-right-[15%] ltr:before:-left-[0%] rtl:before:-right-[0%] before:top-0 before:z-0 ltr:lg:before:-skew-x-[24deg] rtl:lg:before:skew-x-[24deg]">
                                                <div className="lg:w-1/2 w-full relative z-10">
                                                    <div className="text-center max-w-[95%] 2xl:max-w-[85%] m-auto">
                                                        <p className="uppercase text-md md:text-lg mb-4 text-white">{data.top_title}</p>
                                                        <h2 className="text-white mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight">{data.title}</h2>
                                                        <p className="mb-4 2xl:text-lg lg:text-[17px] text-md text-white leading-7">{data.description}</p>
                                                        <Link className="all-btn bg-transparent border border-white text-white hover:bg-violet-900 hover:border-violet-900" href={data.btn_slug}>{data.btn_label}</Link>
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

export default BannerText;
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const H3_Banner = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="2xl:pt-24 lg:pt-20 pt-14">
                    <div className="">
                        <div className="relative" >
                            <div className="container overflow-hidden ">
                                <div className="bg-gray-400/10 overflow-hidden relative bg-center bg-cover 2xl:py-20 2xl:px-24 lg:p-12 p-8">
                                    <div className="lg:w-1/2 w-full relative z-10">
                                        <div className="">
                                            <Skeleton className="flex w-full h-[68px] mb-4 rounded" />
                                            <Skeleton className="flex w-full  h-8 mb-8 rounded " />
                                            <Skeleton className=" w-16 h-[25px] rounded inline-block" />
                                            <Skeleton className=" w-16 h-[25px] rounded inline-block ml-2" />
                                            <Skeleton className="flex w-44 h-12 mt-6 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="2xl:pt-24 lg:pt-20 pt-14">
                        <div className="">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="relative" key={index}>
                                        <div className="container overflow-hidden ">
                                            <div style={{ backgroundImage: `url(${data.bg_img})`, backgroundSize:'35%' }} className="rtl:-scale-x-100 overflow-hidden relative bg-right bg-no-repeat bg-[#eed7c9] 2xl:py-20 2xl:px-24 lg:p-12 md:p-8 px-5 py-8">
                                                <div className="relative rtl:-scale-x-100 ">
                                                    <h2 className="text-gray-900 md:mb-4 mb-3 2xl:text-[50px] lg:text-3xl sm:text-1xl text-xl uppercase leading-tight">{data.title}</h2>
                                                    <p className=" w-2/3  2xl:text-[24px] lg:text-[20px] md:text-lg text-md text-gray-800 leading-7 1xl:mb-8 mb-4">{data.description}</p>
                                                    <p><span className="2xl:text-[30px] xl:text-[22px] md:text-[20px] text-lg font-[600] text-gray-100 line-through">{data.sale_price}</span>
                                                        <span className="2xl:text-[30px] xl:text-[22px] md:text-[20px] text-lg font-[600] text-gray-800 md:ml-5 ml-2.5">{data.regular_price}</span></p>
                                                    <Link className="all-btn text-white hover:opacity-100 font-[500] md:px-8 lg:text-lg 1xl:mt-8 md:mt-5 mt-3 inline-flex items-center" href={data.btn_slug}>{data.btn_label}
                                                        <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6 h-6">
                                                            <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
                                                        </svg>
                                                    </Link>
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

export default H3_Banner;
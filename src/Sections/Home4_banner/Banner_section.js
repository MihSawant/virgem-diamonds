import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const H4_Banner = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="2xl:pt-20 lg:pt-16 pt-14">
                    <div className="">
                        <div className="relative" >
                            <div className="container overflow-hidden ">
                                <div className="bg-gray-400/10 overflow-hidden relative bg-center bg-cover 2xl:py-20 2xl:px-24 lg:p-12 p-8">
                                    <div className="lg:w-1/2 w-full relative z-10 ml-auto">
                                        <div className="">
                                            <Skeleton className="flex w-full h-[68px] mb-4 rounded" />
                                            <Skeleton className="flex w-full  h-8 mb-8 rounded " />
                                            <Skeleton className=" w-16 h-[25px] rounded inline-block" />
                                            <Skeleton className=" w-16 h-[25px] rounded inline-block ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="2xl:pt-20 lg:pt-16 pt-14">
                        <div className="">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="relative" key={index}>
                                        <div className="container overflow-hidden ">
                                            <div style={{ backgroundImage: `url(${data.bg_img})` }} className="rtl:-scale-x-100 overflow-hidden relative sm:bg-center bg-[12%] bg-cover bg-no-repeat bg-[#eed7c9] 2xl:py-20 2xl:px-24 lg:p-12 md:p-8 px-5 py-8 before:content-[''] sm:before:hidden before:block before:w-[100%] before:h-[80%] before:bg-gradient-to-t  before:from-[#EFEDE700]  before:to-[#EFEDE7]  before:absolute before:top-0 before:left-0 before:z-0">
                                                <div className="relative rtl:-scale-x-100 sm:w-2/5 sm:pb-0 pb-52 ml-auto sm:text-left text-center z-10">
                                                    <p className="sm:text-[15px] text-[12px] uppercase font-[600] text-black leading-7 md:mb-8 mb-3 font-montserrat">{data.subtitle}</p>
                                                    <h2 className="text-black md:mb-8 mb-3  capitalize tracking-wider lg:text-3xl sm:text-1xl text-[25px] rtl:ml-0 rtl:mr-auto leading-tight font-catchye 1xl:w-[80%]">{data.title}</h2>
                                                        <span className="inline-block align-middle xl:text-[24px] md:text-[20px] text-lg font-[500] text-black font-montserrat ">{data.regular_price}</span>
                                                        <a className="sm:text-md text-sm text-black font-montserrat font-semibold underline underline-offset-4 inline-flex md:ltr:ml-6 md:rtl:mr-6 ltr:ml-3 rtl:mr-3 items-center group gap-1" href={data.btn_slug}>{data.btn_label}
                                                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-black group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180  transition-all sm:w-4 sm:h-4 w-3 h-3"><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z">
                                                            </path></svg></a>
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

export default H4_Banner;
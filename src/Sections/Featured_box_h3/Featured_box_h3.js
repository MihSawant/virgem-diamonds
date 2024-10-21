import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";


const FeaturedBox_h3 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative 2xl:py-24 lg:py-20 py-14">
                    <div className="container">
                        <h2 className="text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">Our features</h2>
                        <p className="mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae inventore. </p>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 2xl:mt-12 mt-6 ">

                            <div className="2xl:p-12 lg:p-8 sm:p-6 p-4 border-5 border-violet-400 flex items-center " >
                                <Skeleton className="flex lg:w-32 lg:h-32 w-20 h-20 lg:min-w-[128px]  min-w-[80px] rounded-full" />
                                <div className="ltr:2xl:pl-12 rtl:2xl:pr-12 ltr:lg:pl-8 rtl:lg:pr-8 ltr:pl-4 rtl:pr-4 grow lg:w-auto w-full">
                                    <Skeleton className="flex w-44 h-12 rounded mb-2 " />
                                    <Skeleton className="flex w-full h-20 mx-auto rounded" />
                                </div>
                            </div>

                            <div className="2xl:p-12 lg:p-8 sm:p-6 p-4 border-5 border-violet-400 flex items-center " >
                                <Skeleton className="flex lg:w-32 lg:h-32 w-20 h-20 lg:min-w-[128px]  min-w-[80px] rounded-full" />
                                <div className="ltr:2xl:pl-12 rtl:2xl:pr-12 ltr:lg:pl-8 rtl:lg:pr-8 ltr:pl-4 rtl:pr-4 grow  lg:w-auto w-full">
                                    <Skeleton className="flex w-44 h-12 rounded mb-2" />
                                    <Skeleton className="flex w-full h-20 mx-auto rounded" />
                                </div>
                            </div>

                            <div className="2xl:p-12 lg:p-8 sm:p-6 p-4 border-5 border-violet-400 flex items-center " >
                                <Skeleton className="flex lg:w-32 lg:h-32 w-20 h-20 lg:min-w-[128px]  min-w-[80px] rounded-full" />
                                <div className="ltr:2xl:pl-12 rtl:2xl:pr-12 ltr:lg:pl-8 rtl:lg:pr-8 ltr:pl-4 rtl:pr-4 grow  lg:w-auto w-full">
                                    <Skeleton className="flex w-44 h-12 rounded mb-2" />
                                    <Skeleton className="flex w-full h-20 mx-auto rounded" />
                                </div>
                            </div>

                            <div className="2xl:p-12 lg:p-8 sm:p-6 p-4 border-5 border-violet-400 flex items-center " >
                                <Skeleton className="flex lg:w-32 lg:h-32 w-20 h-20 lg:min-w-[128px]  min-w-[80px] rounded-full" />
                                <div className="ltr:2xl:pl-12 rtl:2xl:pr-12 ltr:lg:pl-8 rtl:lg:pr-8 ltr:pl-4 rtl:pr-4 grow  lg:w-auto w-full">
                                    <Skeleton className="flex w-44 h-12 rounded mb-2" />
                                    <Skeleton className="flex w-full h-20 mx-auto rounded" />
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            ) : (
                <>
                    <div className="relative 2xl:py-24 lg:py-20 py-14">
                        <div className="container">
                            <h2 className="text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">Our features</h2>
                            <p className="mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae inventore. </p>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 2xl:mt-12 mt-6">
                                {initialValues && initialValues.map((data, index) => {
                                    return (
                                        <div className="2xl:p-12 lg:p-8 sm:p-6 p-4 border-5 border-violet-400 flex items-center " key={index}>
                                            <div className="bg-violet-400 rounded-full lg:w-32 lg:h-32 w-20 h-20 lg:min-w-[128px] min-w-[80px] flex items-center justify-center "><Image src={data.img} width={74} height={74} alt={data.alt} title={data.alt} className="m-auto lg:w-[74px] w-12" /></div>
                                            <div className="ltr:2xl:pl-12 rtl:2xl:pr-12 ltr:lg:pl-8 rtl:lg:pr-8 ltr:pl-4 rtl:pr-4 grow ">
                                                <h3 className="2xl:text-1xl xl:text-xl text-[20px] text-gray-900 uppercase sm:mb-2">{data.title}</h3>
                                                <p className="2xl:text-lg sm:text-md text-[15px] sm:leading-7 text-gray-900">{data.des}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FeaturedBox_h3;
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Link, Skeleton } from "@nextui-org/react";
import ReactCurvedText from 'react-curved-text';



const ProductGrids = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="lg:pt-20 2xl:pt-24 pt-14">
                    <div className="container">
                        <div className="flex flex-wrap lg:-mx-2">
                            <div className="lg:w-[44%] w-full lg:px-2">
                                <div className="flex bg-gray-300 mb-5 last:mb-0 even:flex-row-reverse group">
                                    <Skeleton className="flex w-1/2 2xl:h-[350px] xl:h-[280px] h-[250px] " />
                                    <div className="1xl:p-10 sm:p-6 p-4 w-1/2">
                                        <Skeleton className="flex lg:w-44 w-full h-10 mb-2 2xl:mb-3" />
                                        <Skeleton className="flex w-full h-20 mb-4" />
                                        <Skeleton className="flex w-24 h-8 mt-auto" />
                                    </div>
                                </div>
                                <div className="flex bg-gray-300 mb-5 last:mb-0 even:flex-row-reverse group">
                                    <Skeleton className="flex w-1/2 h-full 2xl:h-[350px] xl:h-[280px] h-[250px]" />
                                    <div className="1xl:p-10 sm:p-6 p-4 w-1/2 " >
                                        <Skeleton className="flex lg:w-44 w-full h-10 mb-2 2xl:mb-3" />
                                        <Skeleton className="flex w-full h-20 mb-4" />
                                        <Skeleton className="flex w-24 h-8 mt-auto" />
                                    </div>
                                </div>
                                <div className="flex bg-gray-300 mb-5 last:mb-0 even:flex-row-reverse group">
                                    <Skeleton className="flex w-1/2 h-full 2xl:h-[350px] xl:h-[280px] h-[250px]" />
                                    <div className="1xl:p-10 sm:p-6 p-4 w-1/2 ">
                                        <Skeleton className="flex lg:w-44 w-full h-10 mb-2 2xl:mb-3" />
                                        <Skeleton className="flex w-full h-20 mb-4" />
                                        <Skeleton className="flex w-24 h-8 mt-auto" />
                                    </div>
                                </div>

                            </div>
                            <div className="lg:w-[56%] w-full lg:mt-0 mt-5 lg:px-4">
                                <div className="relative">
                                    <Skeleton className="flex w-full 2xl:h-[1000px] xl:h-[900px] lg:h-[700px] h-[550px] rounded mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="lg:pt-20 2xl:pt-24 pt-14">
                        {initialValues && initialValues.map((data, index) => {
                            return (
                                <div className="container" key={index}>
                                    <div className="flex flex-wrap lg:-mx-2">
                                        <div className="lg:w-[44%] w-full lg:px-2">
                                            {data.items && data.items.map((item, index) => {
                                                return (
                                                    <div className="flex bg-gray-300 mb-5 last:mb-0 even:flex-row-reverse group" key={index}>
                                                        <Link href={item.pro_link} className="w-1/2 block" ><Image src={item.img} alt={item.alt} title={item.alt} width={350} height={350} className="w-full object-cover h-full"  /></Link>
                                                        <div className="1xl:p-10 sm:p-6 p-4 w-1/2">
                                                            <Link href={item.pro_link} className="flex-col items-start h-full">
                                                                <h3 className="text-[20px] uppercase lg:text-[22px] 2xl:text-xl text-gray-800 group-hover:text-violet-900 mb-2 2xl:mb-3 leading-tight font-[nabi] block">{item.pro_title}</h3>
                                                                <p className="mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 md:leading-7">{item.pro_des}</p>
                                                                <span className="lg:text-[20px] text-lg text-gray-800 font-[nabi] mt-auto">${item.price}</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <div className="lg:w-[56%] w-full lg:mt-0 mt-5 lg:px-4">
                                            <div className="relative h-full">
                                                <Link href={data.img_link} className='block h-full'>
                                                    <Image src={data.single_img} alt={data.img_alt} title={data.img_alt} className="w-full h-full" width={890} height={1100} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default ProductGrids;
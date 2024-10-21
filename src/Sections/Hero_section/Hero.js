import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const Hero = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex lg:min-h-[81vh] flex-wrap dummy-hero">
                    <div className="w-full lg:w-[62%] relative">
                        <Skeleton className="flex w-full lg:h-full sm:h-[450px] h-[300px]" />  </div>
                    <div className="w-full lg:w-[35%] lg:p-10 lg:pl-16 md:px-10  p-4 self-center">
                        <div className="2xl:max-w-[80%] xl:max-w-[85%]">
                            <Skeleton className="flex w-full h-[40px] lg:h-[65px] mb-2 rounded" />
                            <Skeleton className="flex w-full  mb-4  h-[112px] rounded" />
                            <Skeleton className="flex w-48 h-12 rounded" />
                        </div>

                    </div>
                </div >
            ) : (
                <>
                    <div className="hero-sec mb-8 lg:mb-0">
                        <div className="">
                            {initialValues && initialValues.map((data, index) => {
                                return (

                                    <div className="flex lg:min-h-[81vh] flex-wrap hero-sec" key={index} >
                                        <div className="w-full lg:w-[62%] relative"> <Image src={data.img} width={800} height={800} className="object-cover w-full h-full" alt={data.alt} title={data.alt} />  </div>
                                        <div className="w-full lg:w-[35%] lg:p-10 lg:pl-16 md:px-10  p-4 self-center">
                                            <div className="2xl:max-w-[80%] xl:max-w-[85%]">
                                                <h1 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase mb-1.5 leading-tight text-gray-800">{data.title}</h1>
                                                <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7  mb-6 text-gray-800">{data.description}</p>
                                                <Link href={data.btn_slug} className="all-btn">{data.btn_label}</Link>
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

export default Hero;
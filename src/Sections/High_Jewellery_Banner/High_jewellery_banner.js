import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const High_Jewellery_Banner = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            <div className="mb-12 lg:mb-16 2xl:mb-24 ">
                <div className="container overflow-hidden relative p-0 md:pb-0 pb-[50%] ">
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-banner.jpg' alt='trendy jewellery' title='trendy jewellery' fill='true' className='object-cover md:block hidden rtl:-scale-x-100' />
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-banner-mobile.jpg' alt='trendy jewellery' title='trendy jewellery' fill='true' className='object-cover md:hidden block object-bottom' />
                    <div className=" overflow-hidden relative bg-center bg-cover 2xl:p-16 lg:p-10 py-8 2xl:pb-16 md:pb-10 pb-44 px-4 before:content-[''] before:block before:w-[100%] xl:before:w-[62%] md:before:w-[75%] md:before:h-full before:h-[125%] before:bg-violet-900 before:opacity-70 before:absolute ltr:md:before:-left-[15%] md:before:top-0 before:-top-[56%] rtl:md:before:-right-[15%] ltr:before:-left-[0%] rtl:before:-right-[0%] before:z-0 md:before:skew-x-[26deg] md:before:skew-y-0 before:skew-y-[12deg]">
                        <div className="md:w-1/2 w-full relative z-10">
                            <div className="text-center max-w-[95%] 2xl:max-w-[85%] ltr:ml-0 rtl:mr-0  m-auto">
                                <h2 className="text-white md:mb-4 mb-2 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight">trendy jewellery</h2>
                                <p className="md:mb-4 mb-2 2xl:text-lg lg:text-[17px] text-md text-white font-light mx-auto lg:w-1/2 leading-7">There are many variations of passages of but the majority have suffered.</p>
                                <Link className="all-btn bg-white border border-white hover:text-white text-gray-900 font-normal hover:bg-violet-900 hover:border-violet-900 mt-4" href='/shop'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default High_Jewellery_Banner;
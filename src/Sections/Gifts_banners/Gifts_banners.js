import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Select, SelectItem } from "@nextui-org/react";
import { Button, Radio, RadioGroup, Skeleton, cn } from "@nextui-org/react";

const Gifts_banners = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>

            <div className=" container 2xl:mb-20 lg:mb-14 mb-12 ">
                <div className='flex items-stretch flex-wrap bg-gray-300 relative'>
                    <div className='sm:w-1/2 relative w-full before:block before:pt-[75%] ' >
                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/gifts/gift-banner-2.jpg' fill={true} alt='Categoty_img'
                            title='Categoty_img' className='object-cover' />
                    </div>
                    <div className='sm:w-1/2 relative w-full  before:block before:pt-[75%]'>
                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/gifts/gift-banner-1.jpg' fill={true} alt='Categoty_img'
                            title='Categoty_img' className='object-cover' />
                    </div>
                    <h2 className='sm:text-gray-800 text-white w-full text-center 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight  absolute left-0 xl:top-12 sm:top-6 top-0 h-full sm:block flex items-center justify-center flex-col'>
                        <span className='ltr:sm:mr-0 rtl:sm:ml-0 ltr:-mr-[20%] rtl:-ml-[20%]'>Get the new</span> <span className='block text-gray-900 ltr:lg:pl-[25%] ltr:sm:pl-[20%] rtl:lg:pr-[25%] rtl:sm:pr-[20%] ltr:sm:ml-0 ltr:-ml-[20%] rtl:sm:mr-0 rtl:-mr-[20%]'>Jewellery gift.</span></h2>

                </div>

            </div>
        </>

    )
}

export default Gifts_banners;
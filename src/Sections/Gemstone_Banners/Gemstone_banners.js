import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Select, SelectItem } from "@nextui-org/react";
import { Button, Radio, RadioGroup, Skeleton, cn } from "@nextui-org/react";

const Gemstone_banner = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
           
                    <div className="relative container 2xl:mb-20 lg:mb-14 mb-12 ">
                        <div className='flex items-center flex-wrap bg-violet-400'>
                            <div className='lg:w-1/2 relative w-full 1xl:before:pt-[65%] before:pt-[75%] before:block'>
                                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/gemstone/gemstone_banner1.jpg' fill={true} alt='Categoty_img' title='Categoty_img' className='object-cover !absolute sm:max-h-none max-h-[350px]' />
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-8 px-6 2xl:px-24 lg:py-6 md:py-8 py-5'>
                                <h2 className='text-gray-800 1xl:my-6 my-3 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight'>lab created gemstone</h2>
                                <p className='text-gray-600 text-md xl:text-lg xl:leading-7 1xl:mb-8 mb-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                               <Link href='/diamonds' className='all-btn'>Explore Now</Link>
                            </div>
                        </div>
                        <div className='flex items-center flex-wrap bg-violet-400'>
                            
                            <div className='lg:w-1/2 w-full lg:px-8 px-6 2xl:px-24 lg:py-6 md:py-8 py-5 lg:order-1 order-2'>
                                <h2 className='text-gray-800 1xl:my-6 my-3 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight'>natural gemstone</h2>
                                <p className='text-gray-600 text-md xl:text-lg xl:leading-7 1xl:mb-8 mb-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                               <Link href='/diamonds' className='all-btn'>Explore Now</Link>
                            </div>
                            <div className='lg:w-1/2 relative w-full 1xl:before:pt-[65%] before:pt-[75%] before:block  lg:order-2 order-1'>
                                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/gemstone/gemstone_banner2.jpg' fill={true} alt='Categoty_img' title='Categoty_img' className='object-cover !absolute sm:max-h-none max-h-[350px]' />
                            </div>
                        </div>

                    </div>
                </>
          
    )
}

export default Gemstone_banner;
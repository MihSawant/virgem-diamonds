import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Image, Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Category_innerpages } from '../../comman'


const Customise_About = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows bg-violet-400">
                    <div className="relative container">
                        <div className='flex lg:flex-nowrap items-center flex-wrap 1xl:gap-12 gap-4'>
                            <div className='lg:w-1/2 w-full'>
                                <Skeleton className=' md:mb-8 mb-4 w-2/3 2xl:h-16 lg:h-14 h-12 rounded ' />
                                <Skeleton className=' mb-4 w-2/3 2xl:h-32 lg:h-36 h-32 rounded ' />
                                <Skeleton className=' w-2/3 2xl:h-32 lg:h-36 h-32 rounded ' />
                            </div>
                            <div className='lg:w-1/2 w-full flex items-start 1xl:gap-10 sm:gap-4 gap-2'>
                                <div className='bg-white xl:rounded-[80px] md:rounded-[50px] rounded-4xl 1xl:p-10 sm:px-4 px-1 py-6 group w-1/2' >
                                    <Skeleton className='w-full xl:h-60 md:h-48 h-40 rounded' />
                                    <Skeleton className='1xl:mb-3 mb-1 1xl:mt-6 md:mt-2 h-6 w-2/3 mx-auto' />
                                    <Skeleton className='h-5 w-1/3 mx-auto' />
                                </div>
                                <div className='bg-white xl:rounded-[80px] md:rounded-[50px] rounded-4xl 1xl:p-10 sm:px-4 px-1 py-6 group 1xl:mt-24 md:mt-12  w-1/2' >
                                    <Skeleton className='w-full xl:h-60 md:h-48 h-40 rounded' />
                                    <Skeleton className='1xl:mb-3 mb-1 1xl:mt-6 md:mt-2 h-6 w-2/3 mx-auto' />
                                    <Skeleton className='h-5 w-1/3 mx-auto' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows bg-violet-400">
                    <div className="relative container">
                        <div className='flex lg:flex-nowrap items-center flex-wrap 1xl:gap-12 gap-4'>
                            <div className='lg:w-1/2 w-full'>
                                <h2 className="text-gray-800 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight ltr:lg:text-left rtl:lg:text-right text-center">customize jewellery</h2>
                                <p className='2xl:text-lg text-md mb-4 lg:max-w-[75%] text-gray-800'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <p className='2xl:text-lg text-md lg:max-w-[75%] text-gray-800'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated.</p>
                            </div>
                            <div className='lg:w-1/2 w-full flex items-start 1xl:gap-10 sm:gap-4 gap-2'>
                                {initialValues && initialValues.map((data, index) => {
                                    return (
                                        <div className='bg-white xl:rounded-[80px] md:rounded-[50px] rounded-4xl 1xl:p-10 sm:px-4 px-1 py-6 group 1xl:last:mt-24 md:last:mt-12' key={index}>
                                            <Link href={data.Link} className=' text-violet-900 group-hover:text-gray-800'>
                                                <Image src={data.img} alt={data.title} title={data.title} width={270} height={226} className='xl:h-60 md:h-48 h-40 object-contain transition-all group-hover:scale-105' /> </Link>
                                            <h3 className='xl:text-xl lg:text-[24px] sm:text-[22px] text-lg 1xl:mb-3 mb-1 1xl:mt-6 md:mt-2 leading-snug text-center'><Link href={data.Link} className=' text-violet-900 group-hover:text-gray-800'>{data.title}</Link></h3>
                                            <p className='lg:text-md text-sm text-gray-900 text-center'>{data.short_des}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Customise_About;
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const HeroIntro = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="bg-violet-400 overflow-hidden">
                <div className="container">
                    <div className='flex items-stretch 2xl:min-h-[75vh] min-h-[65vh] xl:flex-nowrap flex-wrap gap-14'>

                        <div className='xl:w-1/2 w-full self-center'>
                            <Skeleton className='w-full 2xl:h-36 xl:h-24 h-16 rounded lg:mb-6 mb-4' />
                            <Skeleton className='w-full h-20 rounded xl:mb-4' />
                            <Skeleton className='w-52 h-14 rounded lg:mt-6 mt-3' />
                        </div>
                        <div className='xl:w-1/2 w-full self-end pt-4 2xl:pt-24'>
                                <div className='flex items-end justify-center'>
                                    <Skeleton className='shadow-boxhover ltr:-mr-8 ltr:2xl:-mr-24 rtl:-ml-8 rtl:2xl:-ml-24 2xl:w-2/4 w-[35%] z-1 2xl:h-[572px] xl:h-[520px] h-[430px]'  />
                                    <Skeleton className='shadow-boxhover 2xl:w-3/4 w-[65%] max-w-full 2xl:h-[660px] xl:h-[590px] h-[520px] ' />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <>
                    <div className="bg-violet-400 overflow-hidden">
                        <div className="container">
                            <div className='flex items-stretch 2xl:min-h-[75vh] min-h-[65vh] xl:flex-nowrap flex-wrap pt-6'>
                                <div className='xl:w-1/2 w-full self-center'>
                                    <h1 className='2xl:text-[65px] xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-6 mb-4 leading-tight lg:mt-0 mt-6 2xl:w-[70%]'>multiple jewellery website template</h1>
                                    <p className='2xl:text-lg lg:text-[17px] text-md  xl:mb-4 leading-7 text-gray-800  lg:w-[70%]'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                                    <Link className="relative inline-flex items-center all-btn text-white capitalize px-8 lg:text-lg lg:mt-6 mt-3" tabIndex="0" role="link" href="#homedemos">
                                        explore now
                                        <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
                                            <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className='xl:w-1/2 w-full self-end pt-4 2xl:pt-24'>
                                        <div className='flex items-end justify-center'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Home-4-Mobile.jpg' alt='home_page' title='home_page' width={309} height={572}  className='shadow-boxhover inline-block align-bottom ltr:-mr-8 ltr:2xl:-mr-24 rtl:-ml-8 rtl:2xl:-ml-24 2xl:w-2/4  w-[35%] z-1 '/>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Home-4.jpg' alt='home_page' title='home_page' width={594} height={660} className='shadow-boxhover inline-block align-bottom 2xl:w-3/4 w-[65%] max-w-full'/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default HeroIntro;
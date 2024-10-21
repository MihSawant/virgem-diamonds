import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";


const Intro_Features = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative lg:py-16 py-12 bg-gray-300">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-center gap-y-4 ">
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                        <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                            <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                            <Skeleton className='w-16 h-16 rounded-full' />
                            </div>
                            <Skeleton className='w-40 h-12 rounded mt-4' />
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <>
                    <div className="relative lg:py-16 py-12 bg-gray-300" id='features'>
                        <div className="container">
                            <div className="flex flex-wrap items-start justify-center gap-y-4  ">
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/design-layout.svg' alt='multiple design layout' title='multiple design layout' width={60} height={60} className='lg:w-[58px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>multiple design<br/> layout</p>
                                </div>
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/responsive.svg' alt='Fully Resposive Templates' title='Fully Resposive Templates' width={60} height={60} className='lg:w-[54px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>Fully Resposive<br/> Templates</p>
                                </div>
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/text.svg' alt='Google Fonts & Icons' title='Google Fonts & Icons' width={60} height={60} className='lg:w-[58px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>Google Fonts & <br /> Icons</p>
                                </div>
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/customer-suppoet.svg' alt='premium Customer Support' title='premium Customer Support' width={60} height={60} className='lg:w-[56px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>premium Customer<br /> Support</p>
                                </div>
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu.svg' alt='Mega Menu variants'  title='Mega Menu variants' width={60} height={60} className='lg:w-[53px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>Mega Menu<br /> variants</p>
                                </div>
                                <div className='text-center lg:w-1/6 md:w-1/3 w-1/2'>
                                    <div className='lg:w-28 md:w-24 md:h-24 w-20 lg:h-28 h-20  bg-white rounded-full flex items-center justify-center mx-auto'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/images.svg' alt='unsplash images' title='unsplash images' width={60} height={60} className='lg:w-[58px] md:w-12 w-10' />
                                    </div>
                                    <p className='2xl:text-lg lg:text-md text-[15px] text-center lg:leading-7 text-gray-800 capitalize mt-4'>unsplash images</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Intro_Features;
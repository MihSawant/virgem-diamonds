import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const HomepagesIntro = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="2xl:py-24 xl:py-16 py-12 overflow-hidden">
                    <div className="container">
                        <h2 className='text-gray-800 2xl:mb-6 mb-2 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center '>4+ Home Stunning variants</h2>
                        <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[70%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                        <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mt-6 2xl:mt-12'>
                            <div className='bg-violet-400 rounded-xl border border-[#DCD5D2] 2xl:px-8 px-4 pt-3  group overflow-hidden'>
                                <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home One</h3>
                                <Skeleton className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg w-full' />
                            </div>
                            <div className='bg-violet-400 rounded-xl border border-[#DCD5D2]  2xl:px-8 px-4 pt-3 group overflow-hidden'>
                                <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Two</h3>
                                <Skeleton className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg w-full' />
                            </div>
                            <div className='bg-violet-400 rounded-xl border border-[#DCD5D2]  2xl:px-8 px-4 pt-3 group overflow-hidden'>
                                <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Three</h3>
                                <Skeleton className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg w-full' />
                            </div>
                            <div className='bg-violet-400 rounded-xl border border-[#DCD5D2]  2xl:px-8 px-4 pt-3 group overflow-hidden'>
                                <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Four</h3>
                                <Skeleton className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="2xl:py-24 xl:py-16 py-12 overflow-hidden" id='homedemos'>
                        <div className="container">
                            <h2 className='text-gray-800 2xl:mb-6 mb-2 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center '>4+ Home Stunning variants</h2>
                            <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[70%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mt-6 2xl:mt-12'>
                                <div className='bg-violet-400 rounded-xl border border-[#DCD5D2]  group overflow-hidden'>
                                    <Link href='/home-1' className=' 2xl:px-8 px-4 pt-3 block'>
                                        <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home One</h3>
                                        <div className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Homepage_intro1.jpg' width={317} height={460} alt='homepage-1' className='w-full h-full object-cover object-top transition-all !duration-[2000ms] group-hover:object-bottom	' title='homepage-1' />
                                        </div>
                                    </Link>
                                </div>
                                <div className='bg-violet-400 rounded-xl border border-[#DCD5D2] group overflow-hidden'>
                                    <Link href='/home-2' className=' 2xl:px-8 px-4 pt-3 block'>
                                        <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Two</h3>
                                        <div className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Homepage_intro2.jpg' width={317} height={460} alt='homepage-1' className='w-full h-full object-cover object-top transition-all !duration-[2000ms] group-hover:object-bottom	' title='homepage-1' />
                                        </div>
                                    </Link>
                                </div>
                                <div className='bg-violet-400 rounded-xl border border-[#DCD5D2] group overflow-hidden'>
                                    <Link href='/home-3' className=' 2xl:px-8 px-4 pt-3 block'>
                                        <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Three</h3>
                                        <div className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Homepage_intro3.jpg' width={317} height={460} alt='homepage-1' className='w-full h-full object-cover object-top transition-all !duration-[2000ms] group-hover:object-bottom	' title='homepage-1' />
                                        </div>
                                    </Link>
                                </div>
                                <div className='bg-violet-400 rounded-xl border border-[#DCD5D2] group overflow-hidden'>
                                    <Link href='/home-4' className=' 2xl:px-8 px-4 pt-3 block'>
                                        <h3 className=' text-gray-800 xl:text-[24px] text-[20px] mb-3 text-center'>Home Four</h3>
                                        <div className='xl:h-[460px] sm:h-[350px] h-[300px] overflow-hidden shadow-lg'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/Homepage_intro4.jpg' width={317} height={460} alt='homepage-1' className='w-full h-full object-cover object-top transition-all !duration-[2000ms] group-hover:object-bottom	' title='homepage-1' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default HomepagesIntro;
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Link, Skeleton } from "@nextui-org/react";



const Intro_about = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                 <div className="relative lg:py-20 2xl:py-24 py-14 lg:mb-0 sm:mb-14 mb-6" >
                     <div className="container">
                         <div className="flex flex-wrap items-center">
                             <div className="w-full ">
                                 <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 2xl:mb-6 mb-2  leading-tight  text-center">jewellery & Single product page </h2>
                                 <p className="2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800 lg:w-[50%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                                 <div className='flex items-center flex-wrap lg:flex-nowrap gap-6 mt-8 2xl:mt-16'>
                                     <div className='lg:w-1/3 w-full lg:block flex  items-end flex-row-reverse justify-center lg:pb-0 sm:pb-20 pb-12'>
                                        <Skeleton className='w-3/4 h-[432px] inline-block ltr:ml-20 rtl:mr-20' />
                                        <Skeleton className='w-2/5 h-[223px] ltr:lg:-mr-24 ltr:-mr-44 rtl:lg:-ml-24 rtl:-ml-44 z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
                                     </div>
                                     <div className='lg:w-1/3 2xl:px-10 w-full'>
                                         <p className="2xl:text-lg lg:text-[17px] text-md mb-2.5 xl:mb-4 leading-7 m-auto text-gray-800">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                         </p>
                                         <p className="2xl:text-lg lg:text-[17px] text-md leading-7 m-auto text-gray-800">
                                             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
                                         </p>
                                     </div>
                                     <div className='lg:w-1/3 w-full lg:block flex  items-end flex-row-reverse justify-center lg:pb-0 sm:pb-20 pb-12'>
                                        <Skeleton className='w-3/4 h-[432px] inline-block ltr:ml-20 rtl:mr-20' />
                                        <Skeleton className='w-2/5 h-[223px] ltr:lg:-mr-24 ltr:-mr-44 rtl:lg:-ml-24 rtl:-ml-44 z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
            ) : (
                <>
                        <div className="relative lg:py-20 2xl:py-24 py-14 lg:mb-0 sm:mb-14 mb-6" >
                            <div className="container">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full ">
                                        <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 2xl:mb-6 mb-2  leading-tight  text-center">jewellery & Single product page </h2>
                                        <p className="2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800 lg:w-[50%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                                        <div className='flex items-center flex-wrap lg:flex-nowrap gap-6 mt-8 2xl:mt-16'>
                                            <div className='lg:w-1/3 w-full lg:block flex  items-end flex-row-reverse justify-center lg:pb-0 sm:pb-20 pb-12'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/intro-about-1.jpg' alt='intro-about' title='intro-about' width={387} height={432} className='max-w-[75%] inline-block ltr:ml-20 rtl:mr-20 shadow-xl' />
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/intro-about-2.jpg' alt='intro-about' title='intro-about' width={256} height={223} className='max-w-[50%] ltr:lg:-mr-24 ltr:-mr-44 rtl:lg:-ml-24 rtl:-ml-44  z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
                                            </div>
                                            <div className='lg:w-1/3 2xl:px-10 w-full'>
                                                <p className="2xl:text-lg lg:text-[17px] text-md mb-2.5 xl:mb-4 leading-7 m-auto text-gray-800">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p className="2xl:text-lg lg:text-[17px] text-md leading-7 m-auto text-gray-800">
                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
                                                </p>
                                            </div>
                                            <div className='lg:w-1/3 w-full lg:block flex  items-end flex-row-reverse justify-center'>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/intro-about-3.jpg' alt='intro-about' title='intro-about' width={386} height={432} className='max-w-[75%] inline-block ltr:ml-20 rtl:mr-20 shadow-xl' />
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/intro-about-4.jpg' alt='intro-about' title='intro-about' width={256} height={223} className='max-w-[50%] ltr:lg:-mr-24 ltr:-mr-44 rtl:lg:-ml-24 rtl:-ml-44  z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
                                            </div>
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

export default Intro_about;
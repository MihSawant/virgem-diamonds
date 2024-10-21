import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";


const Customise_Process = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>

            <div className="relative 2xl:py-24 lg:py-20 py-14 ">
                <div className="relative container">
                    <h2 className="text-gray-800 md:mb-4 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight  text-center">customize process</h2>
                    <p className='2xl:text-lg text-md mb-2 text-center lg:max-w-[50%] leading-8 mx-auto text-gray-800'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/arrows-line.svg' alt='arrows-line' title='arrows-line' width={1078} height={118} className='mx-auto lg:block hidden w-auto max-w-[68%] 2xl:my-12 lg:my-8 ' />

                    <div className='flex lg:flex-nowrap items-center flex-wrap relative mt-8'>
                        <div className='lg:w-1/3 w-full 2xl:px-20 lg:px-14 md:px-10 px-4'>
                            <div className='xl:w-28 xl:h-28 w-20 h-20 flex items-center justify-center bg-violet-400 rounded-full mx-auto'>
                                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/creat-design.svg' alt='Creat Design' title='Creat Design' width={70} height={70} className='xl:w-16 w-12' />
                            </div>
                            <h3 className='lg:text-[24px] sm:text-[22px] text-lg 1xl:my-4 my-2 leading-snug text-center text-gray-900'>Creat Design</h3>
                            <p className='xl:text-lg text-md text-gray-800 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>

                        <div className='lg:w-1/3 w-full 2xl:px-20 lg:px-14 md:px-10 px-4 lg:border-l lg:border-r border-violet-400  lg:before:hidden before:block before:bg-[url(https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/mobile-arrow.svg)] before:bg-no-repeat before:bg-center before:bg-contain before:h-14 before:my-6 before:w-full'>
                            <div className='xl:w-28 xl:h-28 w-20 h-20 flex items-center justify-center bg-violet-400 rounded-full mx-auto'>
                                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/production.svg' alt='Creat Design' title='Creat Design' width={70} height={70} className='xl:w-16 w-12' />
                            </div>
                            <h3 className='lg:text-[24px] sm:text-[22px] text-lg 1xl:my-4 my-2 leading-snug text-center  text-gray-900'>Production</h3>
                            <p className='xl:text-lg text-md text-gray-800 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='lg:w-1/3 w-full 2xl:px-20 lg:px-14 md:px-10 px-4  lg:before:hidden before:block before:bg-[url(https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/mobile-arrow.svg)] before:bg-no-repeat before:bg-center before:bg-contain before:h-14 before:my-6 before:w-full'>
                            <div className='xl:w-28 xl:h-28 w-20 h-20 flex items-center justify-center bg-violet-400 rounded-full mx-auto '>
                                <svg  x="0px" y="0px" viewBox="0 0 100 100"   className='xl:w-16 w-12 fill-gray-800'>
                                    <path d="M97.5,52.4c0-0.4-0.1-0.9-0.4-1.2c-3.6-4.8-7.3-9.6-11-14.4c-1.8-2.4-1.7-2.6-4-2.6l0,0h-9.2c0-0.3,0-6.9,0-9.9  c0-1.5-0.7-2.2-2.3-2.2c-16.2,0-32.4,0-48.5,0c-1.6,0-2.4,0.8-2.4,2.4c0,2,0,2.9,0,4.9l0,0c0,1.1,0.9,2,2,2s2-0.9,2-2  c0-1.4,0-1.8,0-3.2c15,0,30,0,45,0c0,13,0,38.9,0,38.9H47.2c-1.5-2.3-4.1-3.9-7.1-3.9s-5.6,1.6-7.1,3.9h-9.3c0,0,0-1.8,0-3.3  c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,2,0,2.9,0,4.9c0,1.7,0.7,2.4,2.4,2.4h9.7c0,0.2,0,0.3,0,0.5c0,4.6,3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4  c0-0.2,0-0.3,0-0.5h26.2c0,0.2,0,0.3,0,0.5c0,4.6,3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4c0-0.2,0-0.3,0-0.5h3.8c1.3,0,2.1-0.8,2.1-2.2  C97.5,62.1,97.5,57.3,97.5,52.4z M40.2,73.7c-2.2,0-4.1-1.8-4.1-4.1s1.8-4.1,4.1-4.1c2.2,0,4.1,1.8,4.1,4.1S42.4,73.7,40.2,73.7z   M72.9,38.4h8.6c0.3,0,0.7,0.1,0.8,0.3c2.9,3.8,8.9,11.6,8.9,11.6H72.9V38.4z M83.2,73.7c-2.2,0-4.1-1.8-4.1-4.1s1.8-4.1,4.1-4.1  c2.2,0,4.1,1.8,4.1,4.1S85.4,73.7,83.2,73.7z M93.4,65.1h-3.1c-1.5-2.3-4.1-3.9-7.1-3.9s-5.6,1.6-7.1,3.9H73V54.5h20.4V65.1z" />
                                    <path d="M30.6,38.6H4.1c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2h26.5c1.2,0,2.2,1,2.2,2.2S31.9,38.6,30.6,38.6z" />
                                    <path d="M30.6,47.9H9.1c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2h21.5c1.2,0,2.2,1,2.2,2.2S31.9,47.9,30.6,47.9z" />
                                    <path d="M30.6,57.1H13.1c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2h17.5c1.2,0,2.2,1,2.2,2.2S31.9,57.1,30.6,57.1z" />
                                </svg>
                            </div>
                            <h3 className='lg:text-[24px] sm:text-[22px] text-lg 1xl:my-4 my-2 leading-snug text-center  text-gray-900'>Delivery</h3>
                            <p className='xl:text-lg text-md text-gray-800 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Customise_Process;
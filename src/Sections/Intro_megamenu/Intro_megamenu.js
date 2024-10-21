import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Link, Skeleton } from "@nextui-org/react";



const Intro_megamenu = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative lg:py-20 2xl:py-24 py-12" >
                    <div className="container">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full ">
                                <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 mb-4 leading-tight lg:mt-0 mt-6 text-center">jewellery & Single product page </h2>
                                <p className="2xl:text-lg lg:text-[17px] text-md text-center xl:mb-10 mb-4 leading-7 m-auto text-gray-800 lg:w-[50%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                                <div className='flex items-center flex-wrap lg:flex-nowrap gap-6 mt-8 2xl:mt-16'>
                                    <div className='lg:w-1/3 w-full lg:block flex  items-end flex-row-reverse justify-center lg:pb-0 sm:pb-20 pb-12'>
                                        <Skeleton className='w-3/4 h-[432px] inline-block ml-20' />
                                        <Skeleton className='w-2/5 h-[223px] lg:-mr-24 -mr-44 z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
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
                                        <Skeleton className='w-3/4 h-[432px] inline-block ml-20' />
                                        <Skeleton className='w-2/5 h-[223px] lg:-mr-24 -mr-44 z-1 lg:-mt-36 lg:mb-0 sm:-mb-16 -mb-8 inline-block shadow-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative lg:py-20 2xl:py-24 py-12" >
                        <div className="container">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full ">
                                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 mb-4 leading-tight  text-center">Mega menu variants</h2>
                                    <p className="2xl:text-lg lg:text-[17px] text-md text-center xl:mb-10 mb-4 leading-7 m-auto text-gray-800 lg:w-[50%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>

                                    <div className='grid sm:grid-cols-2 grid-cols-1 2xl:gap-8 gap-6 mt-8'>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-engagement.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-wedding.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-diamonds.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-highjewellery.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-collection.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megumenu-gifts.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-customise.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-gemstones.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/pages-menu.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
                                        </div>
                                        <div>
                                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/megamenu-engagement.jpg' title='megamenu' alt='megamenu' width={788} height={390} className='w-full block' />
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

export default Intro_megamenu;
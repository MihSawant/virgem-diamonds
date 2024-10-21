import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const ShapeSlider_h4 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative 2xl:pt-16 lg:pt-14 pt-12 ">
                    <div className="container">
                    <div className='border-b border-gray-400/20'>
                            <h2 className="text-gray-800 2xl:mb-6 md:mb-6 mb-2 lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right max-w-[70%] font-catchye capitalize  ">Shop By Shape</h2>
                            </div>
                            <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                                    <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7  md:!bottom-8 !bottom-3 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto  rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4  group-hover:fill-white rotate-180'>
                                    <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                                    </svg>

                                    </div>
                                    <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7  md:!bottom-8 !bottom-3 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4  group-hover:fill-white'>
                                            <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 md:mt-8 mt-3">
                            <div className="relative group cursor-pointer transition-all">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all md:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all 2xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all 2xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex lg:w-[120px] w-[95px] mx-auto h-[75px] lg:h-[90px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative  2xl:pt-16 lg:pt-14 pt-12">
                        <div className="container">
                            <div className='border-b border-gray-400/20'>
                            <h2 className="text-black 2xl:mb-6 md:mb-6 mb-2 lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right max-w-[65%] font-catchye capitalize  ">Shop By Shape</h2>
                            </div>
                            <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                                    <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7  md:!bottom-8 !bottom-3 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto  rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4  group-hover:fill-white rotate-180'>
                                    <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                                    </svg>

                                    </div>
                                    <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7  md:!bottom-8 !bottom-3 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4  group-hover:fill-white'>
                                            <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            <Swiper modules={[Navigation]} dir="ltr"
                                spaceBetween={20}
                                slidesPerView={7}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    420: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    1170: {
                                        slidesPerView: 5,
                                    },
                                    1440: {
                                        slidesPerView: 8,
                                    },
                                }}   navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} className='md:mt-8 mt-3' >
                                {initialValues && initialValues.map((slidedata, index) => {
                                    return (
                                        <SwiperSlide key={index} >
                                            <div className="relative group cursor-pointer transition-all">
                                                <div className="w-full border border-transparent transition-all  py-4">
                                                    <Image src={slidedata.img} width={100} height={100} alt={slidedata.alt} title={slidedata.alt} className="sm:h-[75px] h-[65px] lg:h-[90px] group-hover:scale-105 transition-all object-contain  m-auto" /></div>
                                                <Link href={slidedata.slug} className="md:text-md text-sm text-black text-center mt-1 font-[600] uppercase block font-montserrat ">{slidedata.title}</Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                        </div>

                    </div>
                </>
            )}
        </>
    )
}

export default ShapeSlider_h4;
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const ShapeSlider = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative bg-gray-300 md:py-14 2xl:py-20 py-6 wp-top-arrows">
                    <div className="container">
                        <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:text-left text-center 2xl:mb-10 md:mb-8 mb-4 leading-tight">shop diamond by shape</h2>
                        <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
                            <div className="relative group cursor-pointer transition-all">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all md:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all 2xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                            <div className="relative group cursor-pointer transition-all 2xl:block hidden">
                                <div className="w-full">
                                    <Skeleton className="flex w-full h-[161px] lg:h-[177px] 2xl:h-[285px] rounded-xl" />
                                </div>
                                <Skeleton className="flex w-20 h-7 rounded-md mt-3 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative bg-gray-300 md:py-14 2xl:py-20 py-6 wp-top-arrows">
                        <div className="container">
                            <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:text-left text-center 2xl:mb-10 md:mb-8 mb-4 leading-tight">shop diamond by shape</h2>
                            <Swiper modules={[Navigation]} dir="ltr"
                                spaceBetween={20}
                                slidesPerView={7}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1170: {
                                        slidesPerView: 5,
                                    },
                                    1440: {
                                        slidesPerView: 7,
                                    },
                                }} navigation >
                                {initialValues && initialValues.map((slidedata, index) => {
                                    return (
                                        <SwiperSlide key={index} >
                                            <div className="relative group cursor-pointer transition-all pb-2">
                                                <div className="w-full bg-white border border-transparent group-hover:border-violet-900 transition-all  py-8 lg:py-10 2xl:py-16">
                                                   <Link  href={slidedata.slug} > <Image src={slidedata.img} width={250} height={250} alt={slidedata.alt} title={slidedata.alt} className="h-[75px] lg:h-[90px] 2xl:h-[115px] group-hover:scale-105 transition-all object-contain  m-auto" /></Link></div>
                                                <Link href={slidedata.slug} className="text-lg lg:text-[20px] 2xl:text-[22px] text-gray-800 text-center mt-3 font-[nabi] uppercase block">{slidedata.title}</Link>
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

export default ShapeSlider;
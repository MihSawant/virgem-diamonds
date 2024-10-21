import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Category_Slider = ({ initialValues }) => {


    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (

                        <div className="relative 2xl:py-24 lg:py-20 py-14">
                            <div className="container">
                                <div className="flex items-center justify-between mb-5 flex-wrap">
                                <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center 2xl:mb-10 md:mb-8 mb-4" >explore by category</h2>
                                </div>

                                <Swiper spaceBetween={10}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        430: {
                                            slidesPerView: 3,
                                        },
                                        1170: {
                                            slidesPerView: 5,
                                        },
                                        1640: {
                                            slidesPerView: 7,
                                        },
                                    }}
                                    modules={[Navigation]} className="category_slider arrow-bottom">
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="w-full h-full relative " >
                                        <div className="relative block group" >
                                            <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                                            <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </div>

            ) : (
                <>
                    <div className="relative 2xl:py-24 lg:py-20 py-14" id='scroll-down'>
                        <div className="relative">
                            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center 2xl:mb-10 md:mb-8 mb-4" >explore by category</h2>
                            <div className=" container">
                                <Swiper spaceBetween={10}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        430: {
                                            slidesPerView: 3,
                                        },
                                        1170: {
                                            slidesPerView: 5,
                                        },
                                        1640: {
                                            slidesPerView: 7,
                                        },
                                    }}
                                    modules={[Navigation]} className="category_slider arrow-bottom" dir="ltr">
                                    {initialValues && initialValues.map((slidedata, index) => {
                                        return (
                                            <SwiperSlide className="w-full h-full relative " key={index}>
                                                <Link href={slidedata.cat_link} className='group'>
                                                    <Image src={slidedata.img} width={200} height={200} className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto group-hover:rotate-12	transition-all" alt={slidedata.alt} title={slidedata.alt} />
                                                    <h3 className="text-lg lg:text-[20px] 2xl:text-[22px] text-gray-800 group-hover:text-violet-900 text-center mt-3 font-[nabi] uppercase block">{slidedata.title}</h3>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default Category_Slider;
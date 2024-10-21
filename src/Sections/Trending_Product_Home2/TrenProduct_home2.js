import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card_Product } from '../../comman'


const Related_products = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:pb-24 lg:pb-20 pb-14 wp-top-arrows">
                    <div className="container">
                        <h2 className="text-gray-800 2xl:mb-10 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">Trending products</h2>
                        <Swiper spaceBetween={20}
                            loop={true}
                            dir="ltr"
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 2,
                                },
                                1170: {
                                    slidesPerView: 3,
                                },
                                1440: {
                                    slidesPerView: 4,
                                },
                            }}
                            modules={[Navigation]} className="category_slider">
                             <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative  pb-5" >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[400] lg:h-[360px] h-[280px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                                        <div className="flex justify-between item-center rounded">
                                            <div className="flex item-center ">
                                                <Skeleton className="w-32 h-8 rounded" />
                                            </div>
                                            <Skeleton className="w-12 h-8 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div >
            ) : (
                <>
                    <div className="relative 2xl:pb-24 lg:pb-20 pb-14 wp-top-arrows">
                        <div className="relative container">
                            <h2 className="text-gray-800 2xl:mb-10 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">Trending products</h2>
                                <Swiper spaceBetween={20} dir="ltr"
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        575: {
                                            slidesPerView: 2,
                                        },
                                        1170: {
                                            slidesPerView: 3,
                                        },
                                        1440: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    modules={[Navigation]} className="category_slider" >
                                    {initialValues && initialValues.map((pro, index) => {
                                        return (
                                            <SwiperSlide className="" key={index}>
                                                <Card_Product initialValues={pro} />
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

export default Related_products;
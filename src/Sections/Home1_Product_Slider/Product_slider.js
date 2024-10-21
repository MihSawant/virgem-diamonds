import React, { useEffect, useState } from 'react';
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Default_product } from '../../comman'

const Product_Slider = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative  lg:pt-20 2xl:pt-24 pt-14 wp-top-arrows full-screen-slider overflow-hidden">
                    <div className="container">
                        <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-5 mb-4 lg:text-left text-center">trending products</h2>
                        <Swiper modules={[Navigation]}
                            spaceBetween={20} dir="ltr"
                            slidesPerView={4.5}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                420: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 2.5,
                                },
                                1023: {
                                    slidesPerView: 3.5,
                                },
                                1440: {
                                    slidesPerView: 4.2,
                                },
                            }} navigation onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} className="rtl:direction-[ltr]">
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative group cursor-pointer transition-all pb-5">
                                    <div className="relative product-box">
                                        <div className="image-wrap">
                                            <Skeleton className="flex w-full h-[260px]  xl:h-[450px] rounded-md" />
                                            <button className="w-10 h-10 bg-white    z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                                                <Skeleton className="flex h-6 w-6 rounded-full " />
                                            </button>
                                        </div>
                                        <div className="product-detail rounded-lg p-2 md:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto -mt-14 relative z-10">
                                            <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                                            <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative  lg:pt-20 2xl:pt-24 pt-14 wp-top-arrows full-screen-slider overflow-hidden">
                        <div className="container">
                            <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-5 mb-4 lg:text-left text-center">trending products</h2>
                            <Swiper modules={[Navigation]}
                                spaceBetween={20} dir="ltr"
                                slidesPerView={4.5}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    420: {
                                        slidesPerView: 2,
                                    },
                                    640: {
                                        slidesPerView: 2.5,
                                    },
                                    1023: {
                                        slidesPerView: 3.5,
                                    },
                                    1440: {
                                        slidesPerView: 4.2,
                                    },
                                }} navigation onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} className="rtl:direction-[ltr]">
                                {initialValues && initialValues.map((pro, index) => {
                                    return (
                                        <SwiperSlide key={index} >
                                            <Default_product initialValues={pro} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>


                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default Product_Slider;
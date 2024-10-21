import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Category_Slider_H3 = ({ initialValues }) => {


    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (

                <div className="relative 2xl:py-24 lg:py-20 py-14 2xl:mt-24 lg:mt-20 mt-12 bg-violet-400 wp-top-arrows">
                    <div className="container">
                        <div className="flex items-center justify-between mb-5 flex-wrap">
                            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-left mb-10" >Shop by collection</h2>
                        </div>

                        <Swiper spaceBetween={10}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                430: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1023: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                                1640: {
                                    slidesPerView: 4,
                                    spaceBetween: 60,
                                },
                            }}
                            modules={[Navigation]}  className="category_slider " dir="ltr">
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                    <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative block group" >
                                      <Skeleton className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto" />
                                    <Skeleton className="w-24 h-6 mt-3 uppercase block mx-auto rounded" />
                                    <Skeleton className="w-full h-24 xl:max-w-[85%] lg:mt-4 mt-2 mx-auto rounded" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            ) : (
                <>
                    <div className="relative 2xl:py-24 lg:py-20 py-14 2xl:mt-24 lg:mt-20 mt-12 bg-violet-400 wp-top-arrows">
                        <div className="relative container">
                            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center lg:mb-16 sm:mb-8 mb-3" >Shop by collection</h2>
                            <div className=" container">
                                <Swiper
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        430: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1023: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                        1640: {
                                            slidesPerView: 4,
                                            spaceBetween: 60,
                                        },
                                    }}
                                    modules={[Navigation]} className="category_slider " dir="ltr">
                                    {initialValues && initialValues.map((slidedata, index) => {
                                        return (
                                            <SwiperSlide className="w-full h-full relative pb-3 group" key={index}>
                                                <Link href={slidedata.cat_link}>
                                                    <Image src={slidedata.img} width={100} height={100} className="sm:w-32 w-24 h-32 sm:h-34 lg:mb-6 mb-3 object-contain m-auto transition-all group-hover:scale-90" alt={slidedata.alt} title={slidedata.alt} />
                                                    <h3 className="text-[20px] 2xl:text-[22px] text-gray-800 group-hover:text-violet-900 text-center mt-3 font-[nabi] uppercase block">{slidedata.title}</h3>
                                                    <p className=" text-md mx-auto xl:max-w-[85%] text-center lg:mt-4 mt-2 leading-7 text-gray-800">{slidedata.description}</p>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                <div className="flex items-center justify-center">
                                    <Link className="all-btn text-white hover:opacity-100 font-[500] px-8 lg:text-lg lg:mt-12 mt-6 flex items-center" href='/collection'>
                                    Explore all
                                        <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
                                            <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
                                        </svg>
                                       
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

export default Category_Slider_H3;
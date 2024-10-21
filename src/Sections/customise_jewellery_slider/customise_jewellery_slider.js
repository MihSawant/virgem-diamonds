import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'


const Customise_jewellery = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:pt-24 lg:pt-16 pt-14 wp-top-arrows">
                    <div className="container">
                        <h2 className="text-gray-800 2xl:mb-8 md:mb-6 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">customize Jewellery </h2>
                        <Swiper spaceBetween={20}
                            loop={true}
                            dir="ltr"
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween:10
                                },
                                575: {
                                    slidesPerView: 3,
                                    spaceBetween:20
                                },
                                1170: {
                                    slidesPerView: 4,
                                }
                            }}
                            modules={[Navigation]} className="category_slider">
                              <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                              <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative pb-3 " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full xl:h-[350] lg:h-[320px] h-[260px] mx-auto rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div >
            ) : (
                <>
                    <div className="relative 2xl:pt-24 lg:pt-16 pt-14 wp-top-arrows">
                        <div className="relative container">
                            <h2 className="text-gray-800 2xl:mb-8 md:mb-6 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">customize Jewellery </h2>
                                <Swiper spaceBetween={20}
                                    navigation={true} dir="ltr"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween:10
                                        },
                                        575: {
                                            slidesPerView: 3,
                                            spaceBetween:20
                                        },
                                        1170: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                    modules={[Navigation]} className="!px-0 !mx-0" >
                                    {initialValues && initialValues.map((data, index) => {
                                        return (
                                            <SwiperSlide className="group overflow-hidden pb-3" key={index}>
                                               <Link href={data.link}><Image src={data.img} title={data.alt} alt={data.alt} width={392} height={360} className='group-hover:scale-105 transition-all' /></Link>
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

export default Customise_jewellery;
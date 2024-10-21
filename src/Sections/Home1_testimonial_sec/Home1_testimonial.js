import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

const Testimonial_slide_h1 = ({ initialValues }) => {

    const router = useRouter()
    const current_uri = router.asPath
   

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (

                <div className="relative lg:py-20 lg:mt-8 mt-4 py-10 bg-violet-400">
                    <div className="container">
                        <h2 className="text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">Our client Testimonial</h2>
                        <div className="lg:px-8 m-auto py-4 md:py-8 mx-1 relative wp-testimonial">
                            <Swiper modules={[Navigation]} className="md:px-2 px-0"
                                spaceBetween={60} dir="ltr"
                                slidesPerView={3}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1023: {
                                        slidesPerView: 3,
                                    },

                                }} navigation >
                                <SwiperSlide>
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative">
                                            <div className="rating text-center mb-3">
                                                <Skeleton className="flex mb-3 w-12 h-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-36 h-8 mb-3 2xl:mb-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-full h-24 rounded-md" />
                                                <div className="flex items-center mt-6 justify-center">
                                                    <Skeleton className="flex w-16 h-16 rounded-full" />
                                                    <div className="ml-3">
                                                        <Skeleton className="flex w-28 h-6 2xl:mb-2 rounded-md" />
                                                        <Skeleton className="flex w-16 h-4 2xl:mb-1 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative">
                                            <div className="rating text-center mb-3">
                                                <Skeleton className="flex mb-3 w-12 h-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-36 h-8 mb-3 2xl:mb-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-full h-24 rounded-md" />
                                                <div className="flex items-center mt-6 justify-center">
                                                    <Skeleton className="flex w-16 h-16 rounded-full" />
                                                    <div className="ml-3">
                                                        <Skeleton className="flex w-28 h-6 2xl:mb-2 rounded-md" />
                                                        <Skeleton className="flex w-16 h-4 2xl:mb-1 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative">
                                            <div className="rating text-center mb-3">
                                                <Skeleton className="flex mb-3 w-12 h-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-36 h-8 mb-3 2xl:mb-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-full h-24 rounded-md" />
                                                <div className="flex items-center mt-6 justify-center">
                                                    <Skeleton className="flex w-16 h-16 rounded-full" />
                                                    <div className="ml-3">
                                                        <Skeleton className="flex w-28 h-6 2xl:mb-2 rounded-md" />
                                                        <Skeleton className="flex w-16 h-4 2xl:mb-1 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative">
                                            <div className="rating text-center mb-3">
                                                <Skeleton className="flex mb-3 w-12 h-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-36 h-8 mb-3 2xl:mb-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-full h-24 rounded-md" />
                                                <div className="flex items-center mt-6 justify-center">
                                                    <Skeleton className="flex w-16 h-16 rounded-full" />
                                                    <div className="ml-3">
                                                        <Skeleton className="flex w-28 h-6 2xl:mb-2 rounded-md" />
                                                        <Skeleton className="flex w-16 h-4 2xl:mb-1 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative">
                                            <div className="rating text-center mb-3">
                                                <Skeleton className="flex mb-3 w-12 h-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-36 h-8 mb-3 2xl:mb-5 rounded-md mx-auto" />
                                                <Skeleton className="flex w-full h-24 rounded-md" />
                                                <div className="flex items-center mt-6 justify-center">
                                                    <Skeleton className="flex w-16 h-16 rounded-full" />
                                                    <div className="ml-3">
                                                        <Skeleton className="flex w-28 h-6 2xl:mb-2 rounded-md" />
                                                        <Skeleton className="flex w-16 h-4 2xl:mb-1 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className={current_uri === '/home-1' ? "relative lg:py-20 lg:mt-8 mt-4 py-10 bg-violet-400" :"relative lg:py-20 lg:mt-8 mt-4 py-10"}>
                        <div className="container">
                            <h2 className="text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">Our client Testimonial</h2>
                            <div className="lg:px-8 m-auto py-4 md:py-8 mx-1 relative wp-testimonial">
                                <Swiper modules={[Navigation]} className="md:!px-2 !px-0"
                                    spaceBetween={60} dir="ltr"
                                    slidesPerView={3}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        1023: {
                                            slidesPerView: 3,
                                        },

                                    }} navigation >
                                    {initialValues && initialValues.map((slidedata, index) => {
                                        return (
                                            <SwiperSlide key={index} >
                                                <div className="relative group cursor-pointer transition-all m-auto">
                                                    <div className="relative">
                                                        <div className="rating text-center mb-3">
                                                            <FontAwesomeIcon icon={faStar} className="text-[#F9B856] px-0.5" />
                                                            <FontAwesomeIcon icon={faStar} className="text-[#F9B856] px-0.5" />
                                                            <FontAwesomeIcon icon={faStar} className="text-[#F9B856] px-0.5" />
                                                            <FontAwesomeIcon icon={faStar} className="text-[#F9B856] px-0.5" />
                                                            <FontAwesomeIcon icon={faStar} className="text-[#F9B856] px-0.5" />
                                                        </div>
                                                        <h3 className="text-center block mb-3 2xl:mb-5 font-[nabi] lg:text-[24px] text-[20px] 2xl:text-[30px] text-gray-800" >{slidedata.title}</h3>
                                                        <p className="text-center block text-gray-200 text-md leading-7 2xl:text-lg">{slidedata.des}</p>
                                                        <div className="flex items-center mt-6 justify-center">
                                                            <Image src={slidedata.avatar} width={65} height={65} alt={slidedata.alt} title={slidedata.alt} className="w-[60px] 2xl:w-[65px]" />
                                                            <div className="ml-3">
                                                                <p className="font-[nabi] text-lg lg:text-lg 2xl:text-[22px] text-gray-800 2xl:mb-1">{slidedata.user_name}</p>
                                                                <p className=" text-sm text-gray-800 text-left">{slidedata.user_position}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Testimonial_slide_h1;
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Trending_Jewellery_Today from '../../comman/Trending_Jewellery_Today';

const TrendingProduct_slider_H4 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative 2xl:pt-16 pt-14 ">
                    <div className="container">
                        <div className='border-b border-gray-400/20 group'>
                            <div className='flex items-center lg:flex-nowrap flex-wrap 2xl:mb-8 mb-6'>
                                <h2 className="text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right lg:mb-0 mb-3 lg:w-auto w-full max-w-[70%] font-catchye capitalize  ">trending jewellery Today</h2>
                                <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 ltr:lg:ml-8 rtl:1xl:mr-14 rtl:lg:mr-8 rounded'>
                                    <Image src={'https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/cart-bag.svg'} alt='cart' title='cart' className='sm:w-6 w-4 ' width={22} height={22} />
                                    20,000 people added to cart</span>
                            </div>
                        </div>
                        <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                            <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white rotate-180'>
                                    <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                                </svg>

                            </div>
                            <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white'>
                                    <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                                </svg>
                            </div>
                        </div>
                        <Swiper modules={[Navigation]} dir="ltr"
                            spaceBetween={20}
                            slidesPerView={7}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                420: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1170: {
                                    slidesPerView: 4,
                                },
                                1440: {
                                    slidesPerView: 5,
                                },
                            }} navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} className='mt-8' >
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="bg-white border  border-gray-400/20 p-4 group">
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="w-14 h-6 rounded " />
                                        <Skeleton className="w-6 h-6 rounded " />
                                    </div>
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-16 h-6 my-3 mx-auto rounded" />
                                    <Skeleton className="w-full h-12  mb-3 mx-auto rounded" />
                                    <Skeleton className="w-16 h-8 mx-auto rounded" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative  2xl:pt-16 pt-14">
                        <div className="container">
                            <div className='border-b border-gray-400/20 '>
                                <div className='flex items-center lg:flex-nowrap flex-wrap 2xl:mb-8 mb-6'>
                                    <h2 className="text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right lg:mb-0 mb-3 lg:w-auto w-full max-w-[70%] font-catchye capitalize  ">trending jewellery Today</h2>
                                    <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 ltr:lg:ml-8 rtl:1xl:mr-14 rtl:lg:mr-8 rounded'>
                                        <Image src={'https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/cart-bag.svg'} alt='cart' title='cart' className='sm:w-6 w-4 ' width={22} height={22} />
                                        20,000 people added to cart</span>
                                </div>
                            </div>
                            <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                                <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white rotate-180'>
                                        <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                                    </svg>

                                </div>
                                <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white'>
                                        <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <Swiper modules={[Navigation]} dir="ltr"
                                spaceBetween={20}
                                slidesPerView={7}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    420: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1170: {
                                        slidesPerView: 4,
                                    },
                                    1440: {
                                        slidesPerView: 5,
                                    },
                                }} navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} className='mt-8 ' >
                                {initialValues && initialValues.map((slidedata, index) => {
                                    return (
                                        <SwiperSlide className='!h-auto pb-1' key={index}>
                                            <Trending_Jewellery_Today _initialValues={slidedata} />
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                            <div className='flex items-center justify-center lg:mt-12 mt-6'>
                                <Link className="all-btn rounded font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4" href="/shop">all trending
                                    <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180 "><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path></svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </>
    )
}

export default TrendingProduct_slider_H4;
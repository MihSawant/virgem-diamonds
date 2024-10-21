import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Category_innerpages } from '../../comman'
import Image from 'next/image';


const Categories_gemstone = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>

            {isLoading ? (
                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows">
                    <div className="relative container">
                        <h2 className="text-gray-800 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">SHOP BY CATEGORY</h2>
                        <Swiper spaceBetween={30}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                420: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1170: {
                                    slidesPerView: 4,
                                },
                                1440: {
                                    slidesPerView: 6,
                                }, 
                            }} dir='ltr'
                            modules={[Navigation]} className="category_slider" >

                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>
                            <SwiperSlide className="pb-4" >
                                <div className="relative group"  >
                                    <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                                </div >
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            ) : (
                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows">
                    <div className="relative container">
                        <h2 className="text-gray-800 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">SHOP BY CATEGORY</h2>
                        <Swiper spaceBetween={30}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                420: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1170: {
                                    slidesPerView: 4,
                                },
                                1440: {
                                    slidesPerView: 6,
                                },
                            }} dir='ltr'
                            modules={[Navigation]} className="category_slider" >
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <SwiperSlide className="pb-4" key={index}>
                                        <div className="relative group"  >
                                            <div className="h-full overflow-hidden w-full bg-violet-400  relative transition-all md:min-h-[280px] sn:min-h-[220px] min-h-[180px] flex items-center justify-center">
                                                <Link href={data.cat_link}><Image src={data.img} alt={data.title} title={data.title} width={130} height={130} className=" mx-auto object-contain duration-500 group-hover:scale-105 transition-all md:w-[130px] w-[90px]" /></Link>
                                            </div>
                                            <Link href={data.cat_link} className='text-gray-800 2xl:text-[24px] lg:text-[20px] font-nabi block text-lg shadow-btn bg-white leading-tight 2xl:-mt-6 -mt-3 sm:mx-5 mx-3 sm:py-3 py-2 text-center z-1 relative'>{data.title}</Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            )}

        </>

    )
}

export default Categories_gemstone;
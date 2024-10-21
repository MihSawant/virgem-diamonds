import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial_slide_h3 = ({ initialValues }) => {
    
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <>
                    <div className="relative lg:pb-20 pb-10 mx-auto overflow-hidden">
                        <div className="container">
                            <div className="bg-gray-300 lg:p-8 p-6 flex lg:flex-nowrap flex-wrap">
                                <div className="lg:w-1/2 w-full ltr:lg:pr-12 rtl:lg:pl-12 lg:mb-0 mb-6">
                                    <Skeleton className="w-full 2xl:h-[570px] lg:h-[490px] sm:h-[500px] h-[350px] rounded" />
                                </div>
                                <div className="lg:w-1/2 w-full self-center	">
                                    <Skeleton className="w-1/2 h-24 2xl:mb-6 mb-2 rounded " />
                                    <Skeleton className="w-full h-32 2xl:mb-6 mb-2  rounded" />
                                    <div className="lg:mt-12 mt-4">
                                        <Skeleton className="w-20 h-20 mb-3 rounded-full" />
                                        <Skeleton className="w-32 h-8 mb-1  rounded" />
                                        <Skeleton className="w-24 h-6  rounded" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="relative lg:pb-20 pb-10 mx-auto overflow-hidden">
                        <div className="container">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="bg-gray-300 lg:p-8 p-6 flex lg:flex-nowrap flex-wrap" key={index}>
                                        <div className="lg:w-1/2 w-full ltr:lg:pr-12 rtl:lg:pl-12 lg:mb-0 mb-6">
                                            <Image src={data.img} alt={data.alt} title={data.alt} width={720} height={570} className="object-cover w-full h-full" />
                                        </div>
                                        <div className="lg:w-1/2 w-full self-center	rtl:lg:pl-4">
                                            <h2 className="text-gray-900 2xl:mb-6 mb-2 2xl:text-4xl lg:text-2xl text-left sm:text-1xl text-xl uppercase leading-tight">Customer’s review</h2>
                                            <Swiper spaceBetween={30}
                                                pagination={{
                                                    clickable: true
                                                }}
                                                modules={[Pagination]} className="custom-pagination" dir="ltr">
                                                {data.items && data.items.map((item, index) => {
                                                    return (
                                                        <SwiperSlide className="w-full h-full relative " key={index}>
                                                            <p className="2xl:text-[20px] md:text-lg text-md lg:leading-8 leading-7 text-gray-900 lg:max-w-[90%]">{item.des}</p>
                                                            <div className="lg:mt-12 mt-4">
                                                                <Image src={item.avatar} alt={item.alt} title={item.alt} width={70} height={70} className="mb-3" />
                                                                <h3 className="font-[nabi] text-lg lg:text-lg 2xl:text-[24px] text-gray-800 ">{item.user_name}</h3>
                                                                <p className=" text-[15px] text-gray-800 text-left">{item.user_position}</p>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Testimonial_slide_h3;
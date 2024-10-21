import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {BoxedProduct} from '../../comman';
import Countdown from "react-countdown";


const DealProductSlide = ({ initialValues }) => {

    const Completionist = () => <span>Sale Ends!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <span>
              {'0' + hours}:{minutes}:{seconds}
            </span>
          );
        }
      };

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
                    <div className="relative 2xl:pt-16 lg:pt-14 pt-4">
                        <div className="relative container">
                            <div className='border-b border-gray-400/20 md:mb-8 mb-4'>
                            <div className='flex items-center sm:flex-nowrap flex-wrap 2xl:mb-8 mb-6 gap-3'>
                                    <h2 className="text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right inline-block sm:w-auto w-[65%] sm:mb-0 mb-1 font-catchye capitalize  ">Deal of the Week</h2>
                                    <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 ltr:lg:ml-8 rtl:1xl:mr-14 rtl:lg:mr-8 rounded'>                                                    
                                        Ends To :  <Countdown date={Date.now() + 6000000} renderer={renderer}>
                                            <Completionist />
                                        </Countdown></span>
                                </div>
                            </div>
                                <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                                    <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center sm:!bottom-16 !bottom-24 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto  rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 rotate-180 group-hover:fill-white'>
                                    <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                                    </svg>

                                    </div>
                                    <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center sm:!bottom-16 !bottom-24 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4  group-hover:fill-white'>
                                            <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                                        </svg>
                                    </div>
                                </div>
                                <Swiper spaceBetween={20}
                                      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        430: {
                                            slidesPerView: 2,
                                        },
                                        1170: {
                                            slidesPerView: 3,
                                        },
                                        1440: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                    modules={[Navigation]} className="category_slider"  dir='ltr'>
                                    {initialValues && initialValues.map((pro, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <BoxedProduct initialValues={pro} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                        </div>
                    </div>
    )
}

export default DealProductSlide;
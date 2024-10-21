import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Category_innerpages } from '../../comman'


const Categories_Slide = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows">
                <div className="relative container">
                    <h2 className="text-gray-800 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">SHOP BY CATEGORY</h2>
                    <Swiper spaceBetween={30}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween:15,
                            },
                            420: {
                                slidesPerView: 3,
                                spaceBetween:15,
                            },
                            1170: {
                                slidesPerView: 4,
                            },
                            1440: {
                                slidesPerView: 6,
                            },
                        }} dir='ltr'
                        modules={[Navigation]} className="category_slider" >
                        {initialValues && initialValues.map((pro, index) => {
                            return (
                                <SwiperSlide className="" key={index}>
                                    <Category_innerpages initialValues={pro} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </>

    )
}

export default Categories_Slide;
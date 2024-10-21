import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Product_Thumb_Gallery = ({ initialValues }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
         setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative flex items-start md:flex-nowrap flex-wrap px-2 ">
                    <div className='product-thumbs md:block flex md:min-w-[120px] !p-0 !m-0 md:order-1 order-2 overflow-auto'>
                        <Skeleton className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px]  md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 ' />
                        <Skeleton className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px]  md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 ' />
                        <Skeleton className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px]  md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 ' />
                        <Skeleton className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px]  md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 ' />
                    </div>
                    
                    <div className='flex items-center justify-center xl:h-[620px] lg:h-[500px] h-[420px] w-full md:grow relative bg-violet-400 md:!py-8 !m-0 ltr:md:!ml-6 rtl:md:!mr-6 md:order-2 order-1'>
                        <Skeleton className='w-full h-full absolute top-0 left-0 opacity-40'/>
                    </div>
                    
                </div >
            ) : (

                <div className="relative flex items-start md:flex-nowrap flex-wrap px-2">
                    <Swiper onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={'auto'}
                        
                        modules={[Navigation, Thumbs, FreeMode]} dir='ltr'
                        className="product-thumbs md:min-w-[120px] !p-0 !m-0 md:order-1 order-2 ">
                        <SwiperSlide className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px] bg-violet-400 md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 !flex items-center justify-center cursor-pointer'>
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-1.png" className='w-24 object-contain' width={90} height={90} alt='diamond ring' title='diamond ring' />
                        </SwiperSlide>
                        <SwiperSlide className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px] bg-violet-400 md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 !flex items-center justify-center cursor-pointer'>
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-2.png" className='w-24 object-contain' width={90} height={90} alt='diamond ring' title='diamond ring' />
                        </SwiperSlide>
                        <SwiperSlide className='md:!w-[120px] md:!h-[120px] !w-[90px] !h-[90px] bg-violet-400 md:mb-4 md:mr-0 mr-2 md:mt-0 mt-2 !flex items-center justify-center cursor-pointer'>
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-3.png" className='w-24 object-contain' width={90} height={90} alt='diamond ring' title='diamond ring' />
                        </SwiperSlide>
                    </Swiper>

                    <Swiper thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        spaceBetween={10}
                        slidesPerView={1}  freeMode={true}
                        modules={[Navigation, Thumbs, FreeMode]} dir='ltr'
                        className="mySwiper md:grow relative bg-violet-400 md:!py-8 !m-0 ltr:md:!ml-6 rtl:md:!mr-6 md:order-2 order-1">
                        <SwiperSlide className='!flex !h-auto items-center justify-center' >
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-1.png" width={600} height={500} alt='diamond ring' title='diamond ring' className='block mx-auto' />
                        </SwiperSlide>
                        <SwiperSlide className='!flex !h-auto items-center justify-center' >
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-2.png" width={500} height={500} alt='diamond ring' title='diamond ring' className='block mx-auto' />
                        </SwiperSlide>
                        <SwiperSlide className='!flex !h-auto items-center justify-center' >
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-3.png" width={500} height={500} alt='diamond ring' title='diamond ring' className='block mx-auto' />
                        </SwiperSlide>
                    </Swiper>
                    <span className='bg-violet-900 lg:w-16 lg:h-16 sm:w-12 sm:h-12 w-10 h-10 rounded-full flex items-center justify-center uppercase px-4 py-0.5 sm:text-[15px] text-[12px] text-white font-montserrat font-[500] absolute ltr:lg:left-44 ltr:md:left-44 ltr:left-4 rtl:lg:right-44 rtl:md:right-44 rtl:right-4 sm:top-6 top-3 z-[2]'>Sale</span>
                    <span className='bg-white border border-white hover:bg-violet-900 group lg:w-12 lg:h-12 w-9 h-9 rounded-full absolute ltr:sm:right-6 ltr:right-4 rtl:lg:left-6 rtl:left-4 sm:top-6 top-3 flex items-center justify-center cursor-pointer z-[2]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-gray-900 group-hover:stroke-white lg:w-6 w-5'>
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.9984 21.0004L16.6484 16.6504" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div >
            )}
        </>
    )
}

export default Product_Thumb_Gallery;
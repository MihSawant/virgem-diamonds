import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
import Image from 'next/image'

const GiftProduct_Slider = ({ initialValues }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:pt-24 lg:pt-20 pt-14 wp-top-arrows'>
          <div className='container'>
            <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight mb-6 text-left  pr-28'>
              exclusive gifts
            </h2>

            <div className='lg:text-left text-center lg:mb-0 mb-4 relative'>
              <div className='swiper-button inline-block image-swiper-button-prev absolute 2xl:bottom-12 sm:bottom-10 bottom-8 sm:right-16 right-12 cursor-pointer'>
                <svg
                  width='43'
                  height='27'
                  viewBox='0 0 43 27'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 lg:w-11 sm:w-8 w-6 rotate-180'
                >
                  <path
                    d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                    className='stroke-[1.5px] stroke-gray-900 fill-none'
                  />
                </svg>
              </div>
              <div className='swiper-button inline-block image-swiper-button-next absolute 2xl:bottom-12 sm:bottom-10 bottom-8 right-0 cursor-pointer'>
                <svg
                  width='43'
                  height='27'
                  viewBox='0 0 43 27'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 lg:w-11 sm:w-8 w-6'
                >
                  <path
                    d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                    className='stroke-[1.5px] stroke-gray-900 fill-none'
                  />
                </svg>
              </div>
            </div>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                420: {
                  slidesPerView: 2
                },
                1023: {
                  slidesPerView: 3
                }
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: '.image-swiper-button-next',
                prevEl: '.image-swiper-button-prev'
              }}
              className='category_slider'
              dir='ltr'
            >
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[400px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-3  uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : (
        <>
          <div className='relative 2xl:pt-24 lg:pt-20 pt-14 custom-arrows'>
            <div className='relative container'>
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight md:mb-6 mb-2 text-left pr-28 ml-0'>
                exclusive gifts
              </h2>
              <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                <div className="arrow-right swiper-button-prev !mt-0 after:!hidden !text-black !text-md rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center 2xl:!bottom-12  md:!bottom-8 !bottom-2 md:!right-12 !right-9 !left-auto !top-auto rotate-180">
                <svg width='43' height='27' viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6 ' >
                  <path
                    d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                    className='stroke-[1.5px] stroke-gray-900 fill-none' />
                </svg>
                </div>
                <div className="arrow-left md:!absolute swiper-button-next !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center 2xl:!bottom-12  md:!bottom-8 !bottom-2 !right-0 !left-auto !top-auto ">
                <svg width='43' height='27'  viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6'>
                  <path
                    d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                    className='stroke-[1.5px] stroke-gray-900 fill-none' />
                </svg>
                </div>
              </div>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                420: {
                  slidesPerView: 2
                },
                1023: {
                  slidesPerView: 3
                }
              }}
              modules={[Navigation]}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              className='category_slider'
              dir='ltr'
            >
                {initialValues &&
                  initialValues.map((data, index) => {
                    return (
                      <SwiperSlide className='' key={index}>
                        <div className='relative group'>
                          <Image src={data.img} width={530} height={700} alt={data.pro_name} title={data.pro_name} className='w-full h-auto group-hover:brightness-75	transition' />
                          <Link className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end ' href={data.box_link}  >
                            <h3 className='2xl:text-[36px] xl:text-xl sm:text-[22px] text-[20px] text-white mb-1.5 uppercase block mx-4 lg:mx-4 2xl:mx-12 w-full'>
                              {data.pro_name}
                            </h3>
                            <p className=' text-white 1xl:text-[24px] sm:text-[20px] text-lg font-[300] mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 w-full'>
                              ${data.pro_price}
                            </p>
                          </Link>
                        </div>
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

export default GiftProduct_Slider

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const BlogSlider_h3 = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:pb-24 lg:pb-20 pb-14 overflow-hidden'>
          <div className='container'>
            <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight mb-6 lg:text-left text-center'>
              Latest Blog & Articles
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
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1023: {
                  slidesPerView: 3,
                  spaceBetween: 60
                }
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: '.image-swiper-button-next',
                prevEl: '.image-swiper-button-prev',
                disabledClass: 'swiper-button-disabled'
              }}
              className='category_slider'
              dir='ltr'
            >
              <SwiperSlide className='relative w-full h-full'>
                <div className='relative w-full h-full'>
                  <div className='w-full relative'>
                    <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                  </div>
                  <div className='w-full mt-6'>
                    <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-24 h-8 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative w-full h-full'>
                  <div className='w-full relative'>
                    <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                  </div>
                  <div className='w-full mt-6'>
                    <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-24 h-8 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative w-full h-full'>
                  <div className='w-full relative'>
                    <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                  </div>
                  <div className='w-full mt-6'>
                    <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-24 h-8 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative '>
                <div className='relative w-full h-full'>
                  <div className='w-full relative'>
                    <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                  </div>
                  <div className='w-full mt-6'>
                    <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                    <Skeleton className='w-44 h-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='flex items-center justify-center mt-3'>
              <Skeleton className='w-24 h-8 rounded' />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='relative 2xl:pb-24 lg:pb-20 pb-14 overflow-hidden'>
            <div className='container relative'>
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight md:mb-6 mb-2  text-left pr-28'>
                Latest Blog & Articles
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
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  1023: {
                    slidesPerView: 3,
                    spaceBetween: 60
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
                        <div className='relative w-full h-full group'>
                          <div className='w-full relative'>
                            <Link href={data.slug} className='block'>
                              <Image src={data.blog_img} alt={data.blog_alt} title={data.blog_alt} width={500} height={450} className='group-hover:brightness-110 transition-all object-cover w-full max-h-[385px]'/>
                            </Link>
                            <span className='xl:text-[15px] text-sm font-[600] uppercase xl:py-2 py-1 xl:px-3.5 px-2 bg-white text-gray-900 absolute xl:top-6 top-3 xl:right-6 right-3'>
                              {data.published_date}
                            </span>
                          </div>
                          <div className='w-full mt-6'>
                            <Link href={data.slug}>
                              <h3 className='text-gray-800 group-hover:text-violet-900 text-[22px] capitalize lg:text-[24px] 2xl:text-[28px]  leading-tight mb-3'>
                                {data.title}
                              </h3>
                            </Link>
                            <p className='2xl:mb-5 mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 '>
                              {data.short_des}
                            </p>
                            <Link className='text-gray-800 group-hover:text-violet-900 text-lg uppercase inline-flex items-center gap-0 group-hover:gap-3 transition-all font-[nabi]' href={data.slug} >
                              {data.btn_label}
                              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-1 mb-0.5 inline-block relative white-img rtl:mr-1 group-hover:fill-violet-900 fill-gray-900 '>
                              <path d="M12.2276 3.22998L11.0339 4.42362L15.7577 9.15585H1V10.8489H15.7577L11.0339 15.5812L12.2276 16.7748L19 10.0024L12.2276 3.22998Z"  />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
              <div className='flex items-center justify-center mt-3'>
                <Link className='all-btn text-white hover:opacity-100 font-[500] px-8 lg:text-lg 2xl:mt-12 mt-6 flex items-center' href='/blog' >
                  Show all
                  <svg width='31' height='31' viewBox='0 0 31 31' xmlns='http://www.w3.org/2000/svg' className='ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6'>
                    <path
                      d='M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0'
                      className='stroke-1 stroke-white fill-none'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BlogSlider_h3

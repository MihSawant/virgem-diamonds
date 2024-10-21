import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'

const Intro_InnerPages = ({ initialValues }) => {

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
              <div className='relative 2xl:py-16 py-14  bg-violet-400'>
              <div className='relative container'>
                <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight 2xl:mb-6 mb-2  ml-0 text-center'>
                  22+ Stunning inner pages
                </h2>
                <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[50%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                
                <Swiper
                  spaceBetween={20}
                  centeredSlides={true}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1
                    },
                    640: {
                      slidesPerView: 2
                    },
                    1023: {
                      slidesPerView: 3
                    }
                  }}
                  modules={[Navigation]}
                  navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                  className='intro-pages xl:mt-12 mt-8'
                  dir='ltr'
                >
                  <SwiperSlide className='' >
                    <div className='relative group shadow-lg'>
                      <Skeleton className='w-full h-[400px] rounded' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='' >
                    <div className='relative group shadow-lg'>
                    <Skeleton className='w-full h-[400px] rounded' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='' >
                    <div className='relative group shadow-lg'>
                    <Skeleton className='w-full h-[400px] rounded' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='' >
                    <div className='relative group shadow-lg'>
                    <Skeleton className='w-full h-[400px] rounded' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='' >
                    <div className='relative group shadow-lg'>
                    <Skeleton className='w-full h-[400px] rounded' />
                    </div>
                  </SwiperSlide>
                </Swiper>
  
                <div className="flex gap-3 justify-center items-center w-full  relative sm:mt-0 mt-4" dir='ltr'> 
                  <div className="arrow-right swiper-button-prev !mt-0 after:!hidden !text-black !text-md rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center rotate-180 !static">
                    <svg width='43' height='27' viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6 ' >
                      <path
                        d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                        className='stroke-[1.5px] stroke-gray-900 fill-none' />
                    </svg>
                  </div>
                  <div className="arrow-left swiper-button-next !mt-0 after:!hidden !text-black !text-md rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center !static">
                    <svg width='43' height='27' viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6'>
                      <path
                        d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                        className='stroke-[1.5px] stroke-gray-900 fill-none' />
                    </svg>
                  </div>
                </div>
              </div>
  
            </div>
      ) : (
        <>
          <div className='relative 2xl:py-16 py-14  bg-violet-400' id='innerpages'>
            <div className='relative container'>
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight 2xl:mb-6 mb-2  ml-0 text-center'>
                22+ Stunning inner pages
              </h2>
              <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[50%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
              
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  640: {
                    slidesPerView: 2
                  },
                  1023: {
                    slidesPerView: 3
                  }
                }}
                modules={[Navigation]}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                className='intro-pages xl:mt-12 mt-8'
                dir='ltr'
              >
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                    <Link href="/engagement"><Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/engagement-page.jpg' alt='enagement' title='enagement' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/wedding"> <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/wedding-page.jpg' alt='wedding' title='wedding' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/diamonds"> <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/diamond-page.jpg' alt='diamond' title='diamond' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/collection"> <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/collection-page.jpg' alt='collection' title='collection' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/customise"> <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/customise-page.jpg' alt='customise' title='customise' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/gemstones"><Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/gemstone-page.jpg' alt='gemstone' title='gemstone' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                  <div className='relative group shadow-lg'>
                  <Link href="/high-jewellery"><Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/high-jewellery.jpg' alt='high-jewellery' title='high-jewellery' width={620} height={480} /></Link>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex gap-3 justify-center items-center w-full  relative sm:mt-0 mt-4" dir='ltr'>
                <div className="arrow-right swiper-button-prev !mt-0 after:!hidden !text-black !text-md rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center rotate-180 !static">
                  <svg width='43' height='27' viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6 ' >
                    <path
                      d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                      className='stroke-[1.5px] stroke-gray-900 fill-none' />
                  </svg>
                </div>
                <div className="arrow-left swiper-button-next !mt-0 after:!hidden !text-black !text-md rounded-full !w-[40px] !h-[30px] lg:!w-[52px] lg:!h-[52px] flex items-center justify-center !static">
                  <svg width='43' height='27' viewBox='0 0 43 27' xmlns='http://www.w3.org/2000/svg' className='mx-2 lg:w-11 sm:w-8 w-6 !h-6'>
                    <path
                      d='M28.6667 0.958374C28.6667 2.28779 29.98 4.27296 31.3094 5.93921C33.0186 8.08921 35.0611 9.96508 37.4028 11.3966C39.1587 12.4698 41.2872 13.5 43 13.5M43 13.5C41.2872 13.5 39.1569 14.5302 37.4028 15.6035C35.0611 17.0368 33.0186 18.9127 31.3094 21.0591C29.98 22.7271 28.6667 24.7159 28.6667 26.0417M43 13.5H0'
                      className='stroke-[1.5px] stroke-gray-900 fill-none' />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  )
}

export default Intro_InnerPages

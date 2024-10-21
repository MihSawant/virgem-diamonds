import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'

const Gifts_Banner_Slider = ({ initialValues }) => {

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
   {isLoading ? (
  <div className='relative 2xl:pb-24 lg:pb-16 pb-10 2xl:pt-36 lg:pt-24 pt-10 wp-top-arrows bg-violet-400'>
  <div className='relative container' >
        <Skeleton className='lg:block hidden w-2/3 2xl:h-24 lg:h-16 h-14 rounded mx-auto z-1 relative 2xl:-mb-36 xl:-mb-28 lg:-mb-20'/>
          <div className='flex lg:flex-nowrap flex-wrap items-end'>
            <Skeleton className='lg:w-1/2 relative w-full 2xl:h-[600px] ld:h-[450px] md:h-[400px] h-[320px] xl:mb-16 lg:mb-8' />
            <Skeleton className='lg:hidden block w-2/3 2xl:h-24 lg:h-16 h-14 rounded mx-auto z-1 relative mb-2 mt-4'/>
            <div className='lg:w-1/2 relative w-full '>
              <div className="flex  gap-3 justify-center w-full mb-5 lg:mb-0 relative" dir='ltr'>
                <div className="arrow-right lg:!absolute !static  swiper-button-prev border-[1.5px] border-violet-900 bg-white group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:1xl:!right-14 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:!w-2.5 !w-2 sm:ml-1 rotate-180'>
                    <path d="M9.25 1.2456L0.800751 8L9.25 14.7544L9.25 1.2456Z" stroke="#805A81" />
                  </svg>
                </div>
                <div className="arrow-left lg:!absolute !static swiper-button-next border-[1.5px] border-violet-900 bg-white group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:!w-2.5 !w-2 sm:ml-1'>
                    <path d="M0.749999 14.7544L9.19925 8L0.75 1.2456L0.749999 14.7544Z" stroke="#805A81" />
                  </svg>
                </div>
              </div>
              <Swiper spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 2
                  },
                  420: {
                    slidesPerView: 3
                  }
                }}
                modules={[Navigation]} navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} 
                 className='category_slider 2xl:!pt-36 xl:!pt-28 lg:!pt-20 ltr:lg:!-ml-32 rtl:lg:!-mr-32 !pb-0'  dir='ltr' >
        
                    <SwiperSlide className=''>
                      <div className='relative group'>                        
                        <Skeleton className='w-full 2xl:h-[365px] md:h-[280px] h-[220px]' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                      <div className='relative group'>                        
                        <Skeleton className='w-full 2xl:h-[365px] md:h-[280px] h-[220px]' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                      <div className='relative group'>                        
                        <Skeleton className='w-full 2xl:h-[365px] md:h-[280px] h-[220px]' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                      <div className='relative group'>                        
                        <Skeleton className='w-full 2xl:h-[365px] md:h-[280px] h-[220px]' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                      <div className='relative group'>                        
                        <Skeleton className='w-full 2xl:h-[365px] md:h-[280px] h-[220px]' />
                      </div>
                    </SwiperSlide>
          
              </Swiper>
            </div>
          </div>

  </div>
</div>
   ): (
    <div className='relative 2xl:pb-24 lg:pb-16 pb-10 2xl:pt-36 lg:pt-24 pt-10 wp-top-arrows bg-violet-400'>
    <div className='relative container' >
      {initialValues && initialValues.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <h2 className='lg:block hidden text-gray-800 2xl:text-8xl xl:text-7xl lg:text-3xl md:text-2xl text-xl capitalize leading-tight text-center z-1 relative 2xl:-mb-36 xl:-mb-28 lg:-mb-20 '>
              {data.title}</h2>
            <div className='flex lg:flex-nowrap flex-wrap items-end'>
              <div className='lg:w-1/2 relative w-full  before:block before:pt-[65%] xl:mb-16 lg:mb-8'>
                <Image src={data.main_img} alt={data.title} title={data.title} fill={true} className='object-cover' />
              </div>
              <h2 className='lg:hidden block text-gray-800 md:text-2xl text-xl capitalize leading-tight text-center mb-2 mt-4 w-full'>{data.title}</h2>
              <div className='lg:w-1/2 relative w-full '>
                <div className="flex  gap-3 justify-center w-full mb-5 lg:mb-0 relative" dir='ltr'>
                  <div className="arrow-right lg:!absolute !static  swiper-button-prev border-[1.5px] border-violet-900 bg-white group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:1xl:!right-14 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:!w-2.5 !w-2 sm:ml-1 rotate-180'>
                      <path d="M9.25 1.2456L0.800751 8L9.25 14.7544L9.25 1.2456Z" stroke="#805A81" />
                    </svg>
                  </div>
                  <div className="arrow-left lg:!absolute !static swiper-button-next border-[1.5px] border-violet-900 bg-white group !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-7 sm:!bottom-8 !bottom-20 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:!w-2.5 !w-2 sm:ml-1'>
                      <path d="M0.749999 14.7544L9.19925 8L0.75 1.2456L0.749999 14.7544Z" stroke="#805A81" />
                    </svg>
                  </div>
                </div>
                <Swiper spaceBetween={20}
                  breakpoints={{
                    0: {
                      slidesPerView: 2
                    },
                    420: {
                      slidesPerView: 3
                    }
                  }}
                  modules={[Navigation]} navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} 
                   className='category_slider 2xl:!pt-36 xl:!pt-28 lg:!pt-20 ltr:lg:!-ml-32 rtl:lg:!-mr-32 !pb-0'  dir='ltr' >
                  {data.items && data.items.map((item, index) => {
                    return (
                      <SwiperSlide className='' key={index}>
                        <div className='relative group'>
                          <Link href={item.link} className=' before:block before:pt-[125%]'>
                            <Image src={item.img} fill={true} alt={item.img_alt} title={item.img_alt} className='group-hover:brightness-75 object-cover	transition' />
                          </Link>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  </div>
   )}
    

    </>

  )
}

export default Gifts_Banner_Slider

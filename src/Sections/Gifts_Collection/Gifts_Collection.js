import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
import Image from 'next/image'

const Gifts_Collection = ({ initialValues }) => {

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
            gifts Collection
            </h2>

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
              navigation={true}
              className='category_slider'
              dir='ltr'
            >
              <SwiperSlide className='w-full h-full relative pb-4'>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[400px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-3  uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative pb-4'>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative pb-4'>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative pb-4'>
                <div className='relative'>
                  <Skeleton className='w-full 2xl:h-[700px] xl:h-[520px]  lg:h-[400px] sm:h-[450px] h-[350px] mx-auto rounded opacity-50' />
                  <div className='absolute w-full h-full top-0 left-0 flex flex-wrap content-end '>
                    <Skeleton className='w-full h-14 mb-1.5 uppercase block  mx-4 lg:mx-4 2xl:mx-12 rounded' />
                    <Skeleton className='w-full h-8 uppercase block  mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-12 rounded' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full relative pb-4'>
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
          <div className='relative 2xl:pt-24 lg:pt-20 pt-14 wp-top-arrows'>
            <div className='relative container'>
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight md:mb-6 mb-2 text-left pr-28 ml-0'>
              gifts Collection
              </h2>
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
              navigation={true}
              className='category_slider'
              dir='ltr'
            >
                {initialValues &&
                  initialValues.map((data, index) => {
                    return (
                      <SwiperSlide className='pb-4' key={index}>
                        <div className='relative group '>
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

export default Gifts_Collection

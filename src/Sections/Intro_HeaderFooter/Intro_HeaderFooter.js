import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'

const Intro_HeaderFooter = ({ initialValues }) => {

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:py-16 py-12  bg-violet-400'>
        <div className='relative container'>
          <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight 2xl:mb-6 mb-2  ml-0 text-center'>
            4+ header variants
          </h2>
          <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[50%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>

          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
            <Skeleton className='shadow-lg m-auto rounded-lg w-full h-[147px]' />
          </div>
          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
          <Skeleton className='shadow-lg m-auto rounded-lg w-full lg:w-1/3 h-[120px]' />
          </div>
          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 pt-6'>
          <Skeleton className='shadow-lg m-auto rounded-lg w-full h-[147px]' />
          </div>
          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
          <Skeleton className='shadow-lg m-auto rounded-lg w-full lg:w-1/3 h-[120px]' />
          </div>
          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 pt-6'>
          <Skeleton className='shadow-lg m-auto rounded-lg w-full h-[147px]' />
          </div>
          <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
          <Skeleton className='shadow-lg m-auto rounded-lg w-full lg:w-1/3 h-[120px]' />
          </div>
          <div className='flex items-center justify-center'>
            <Link className="relative inline-flex items-center all-btn text-white capitalize px-8 lg:text-lg lg:mt-6 mt-3" tabIndex="0" role="link" href="#">
              explore now
              <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ml-2.5 rtl:rotate-180 lg:w-8 w-6">
                <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      ) : (
        <>
          <div className='relative 2xl:py-16 py-12  bg-violet-400' id='othervariants'>
            <div className='relative container'>
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight 2xl:mb-6 mb-2  ml-0 text-center'>
                4+ header variants
              </h2>
              <p className='2xl:text-lg lg:text-[17px] text-md text-center xl:mb-4 leading-7 m-auto text-gray-800  lg:w-[50%]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.</p>

              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-1.jpg' alt='headers' title='headers' width={1594} height={147} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-1-mobile.jpg' alt='headers' title='headers' width={430} height={120} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 pt-6'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-2.jpg' alt='headers' title='headers' width={1594} height={147} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-2-mobile.jpg' alt='headers' title='headers' width={430} height={120} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 pt-6'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-3.jpg' alt='headers' title='headers' width={1594} height={147} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='relative group rounded-xl 2xl:my-8 lg:my-6 my-3 '>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Intro/header-3-Mobile.jpg' alt='headers' title='headers' width={430} height={120} className='block w-auto max-w-full shadow-lg m-auto rounded-lg' />
              </div>
              <div className='flex items-center justify-center'>
                <Link className="relative inline-flex items-center all-btn text-white capitalize px-8 lg:text-lg lg:mt-6 mt-3" tabIndex="0" role="link" href="#">
                  explore now
                  <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
                    <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none"></path>
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

export default Intro_HeaderFooter

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'
import Countdown from "react-countdown";


const High_Jewellery_SaleBanner = ({ initialValues }) => {


  const Completionist = () => <span>Sale Ends!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div className='flex items-center md:justify-start justify-center gap-6'>
        <div>
          <span className='bg-gray-900 2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center text-white 2xl:text-[32px] lg:text-[26] text-[22px]'>{days}</span>
          <span className='text-center block font-nabi lg:text-lg text-md uppercase text-gray-900 mt-2'>Days</span>
        </div>
        <div>
          <span className='bg-gray-900 2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center text-white 2xl:text-[32px] lg:text-[26] text-[22px]'>{hours}</span>
          <span className='text-center block font-nabi lg:text-lg text-md uppercase text-gray-900 mt-2'>Hours</span>
        </div>
        <div>
          <span className='bg-gray-900 2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center text-white 2xl:text-[32px] lg:text-[26] text-[22px]'>{minutes}</span>
          <span className='text-center block font-nabi lg:text-lg text-md uppercase text-gray-900 mt-2'>minute</span>
        </div>
        <div>
          <span className='bg-gray-900 2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center text-white 2xl:text-[32px] lg:text-[26] text-[22px]'>{seconds}</span>
          <span className='text-center block font-nabi lg:text-lg text-md uppercase text-gray-900 mt-2'>Second</span>
        </div>
      </div>;
    }
  };
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (


    <>
      <div className='relative 2xl:mt-24 lg:mt-18 mt-14 md:pb-0 sm:pb-[50%] pb-[85%]'>
        <div className='container'>
          <div className='2xl:py-20 lg:py-14 py-12'>
            <div className='lg:w-2/5 md:w-1/2 w-full'>
              <p className='2xl:text-[20px] lg:text-lg text-md text-violet-900 uppercase font-[600] md:mb-4 mb-2 ltr:md:text-left rtl:md:text-right text-center'>Get Up To 50% off</p>
              <h2 className='text-gray-800 md:mb-4 mb-2 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight ltr:md:text-left rtl:md:text-right text-center'>
                coming soon jewellery
              </h2>
              <p className='2xl:mb-8 md:mb-6 mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-normal mx-auto w-full  ltr:md:text-left rtl:md:text-right text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Countdown
                date={new Date().getTime() + 2 * 30 * 24 * 60 * 60 * 1000} // 4 months in milliseconds
                renderer={renderer}
              />
              <Link href='/single-shop' className='2xl:mt-7 md:mt-4 mt-2 all-btn hover:opacity-100 text-white flex w-max items-center justify-center md:mx-0 mx-auto' >
                Shop now
              </Link>
            </div>
          </div>

        </div>
        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-sale-bg.jpg' title='get design for your favorite jewelry' alt='get design for your favorite jewelry'
          fill='true' className='object-cover -z-1 md:block hidden rtl:-scale-x-100' />
          <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-sale-bg-mobile.jpg' title='get design for your favorite jewelry' alt='get design for your favorite jewelry'
          fill='true' className='object-cover -z-1 md:hidden block' />
      </div>
    </>

  )
}

export default High_Jewellery_SaleBanner

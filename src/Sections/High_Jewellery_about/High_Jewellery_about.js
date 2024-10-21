import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'

const High_Jewellery_About = ({ initialValues }) => {


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (


    <>
      <div className='relative 2xl:pt-24 lg:pt-18 pt-14 '>
        <div className='container'>
          <div className='flex md:flex-nowrap lg:gap-14 md:gap-8 gap-4 flex-wrap justify-center'>
            <div className='md:w-1/2 w-full'>
              <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:w-[80%] ltr:md:text-left rtl:md:text-right text-center'>
              get design for your favorite jewelry
              </h2>
                  <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-about-1.jpg' title='get design for your favorite jewelry' alt='get design for your favorite jewelry' width={780} height={720} className='lg:mt-8 mt-4' />
            </div>
            <div className='md:w-1/2 w-full'>
            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/high-jewellery/high-jewellery-about-2.jpg' title='get design for your favorite jewelry' alt='get design for your favorite jewelry' width={780} height={720} className='lg:mb-8 mb-4' />
              <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto w-full  ltr:md:text-left rtl:md:text-right text-center'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <Link href='/design-setting' className='2xl:mt-4 lg:mt-2 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 flex w-max items-center justify-center md:mx-0 mx-auto' >
                Learn More
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                  <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default High_Jewellery_About

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'

const Wedding_quotes = ({ initialValues }) => {


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
        <>
          <div className='relative 2xl:pt-24 lg:pt-18 pt-14 '>
            <div className='container'>
             
             <div className='relative'>

               <h2 className='text-gray-800 mb-4 2xl:text-xl lg:text-[26px] sm:text-[24px] text-[20px] text-center lg:w-2/3 mx-auto'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h2>
              </div>
              <p className='uppercase 2xl:text-lg md:text-md text-sm text-gray-900 2xl:mt-6  mt-4 text-center leading-normal'>- By. <br /> <span className='underline'>starry heavens</span></p>
              <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3 2xl:mt-16 lg:mt-10 mt-6'>
              <div className='relative before:pt-[75%] before:block'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/quote-1.jpg' alt='diamond-flower-ring' title='diamond-flower-ring' fill='true'  />
              </div>
              <div className='relative before:pt-[75%] before:block'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/quote-2.jpg' alt='diamond-flower-ring' title='diamond-flower-ring' fill='true'  />
              </div>
              <div className='relative before:pt-[75%] before:block'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/quote-3.jpg' alt='diamond-flower-ring' title='diamond-flower-ring' fill='true'  />
              </div>
              <div className='relative before:pt-[75%] before:block'>
                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/quote-4.jpg' alt='diamond-flower-ring' title='diamond-flower-ring' fill='true'  />
              </div>
              </div>
            </div>
          </div>
        </>
     
  )
}

export default Wedding_quotes

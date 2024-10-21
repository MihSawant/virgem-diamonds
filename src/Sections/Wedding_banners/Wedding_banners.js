import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'

const Wedding_Banner = ({ initialValues }) => {


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
        <>
          <div className='relative 2xl:pb-24 lg:pb-18 pb-14 '>
            <div className='container xl:px-12 md:px-6 px-4 '>
              <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
              Wedding COLLECTIONS
              </h2>
              <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
             
              <div className='flex md:flex-nowrap lg:gap-6 gap-4 flex-wrap justify-center 2xl:mt-10 mt-8'>
                <div className='md:w-1/2 w-full flex flex-col lg:gap-6 gap-4'>

                  <div className="h-full overflow-hidden w-full before:block bg-violet-400 sm:before:pt-[70%] before:pt-[90%]  relative transition-all group ">
                    <Image src=" https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/wedding-banner-1.jpg"  alt="Solitaire" title="Solitaire" className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" 
                    fill='true' />
                    <div className='z-1 xl:p-9 lg:p-6 p-4 absolute top-0 sm:right-0 left-0 '>
                      <h3 className='text-gray-900 2xl:text-3xl xl:text-1xl sm:text-xl text-[24px] uppercase leading-tight'>Wedding Ring</h3>
                      <p className='text-gray-900 2xl:text-lg text-md 2xl:my-4 my-2 md:w-1/2 w-2/3 '>There are many variations of passages of but the majority have suffered.</p>
                      <Link href='/shop' className=' all-btn hover:opacity-100 text-white mt-3' >Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 w-full'>
                <div className="h-full overflow-hidden w-full before:block bg-violet-400 sm:before:pt-[70%] before:pt-[90%] relative transition-all group ">
                    <Image alt="Solitaire" title="Solitaire" className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" 
                    fill='true' src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Wedding/wedding-banner-2.jpg" />
                    <div className='z-1 xl:p-9 lg:p-6 p-4 absolute bottom-0 left-0  w-full'>
                    <h3 className='text-gray-900 2xl:text-3xl xl:text-1xl sm:text-xl text-[24px] uppercase leading-tight'>Wedding earrings</h3>
                      <p className='text-gray-900 2xl:text-lg text-md 2xl:my-4 my-2 md:w-1/2 w-2/3'>There are many variations of passages of but the majority have suffered.</p>
                      <Link href='/shop' className=' all-btn hover:opacity-100 text-white mt-3' >Shop Now </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href='/shop' className='2xl:mt-10 mt-8 all-btn hover:opacity-100 text-white flex w-max mx-auto ' >
              More Product
              </Link>
            </div>
          </div>
        </>
     
  )
}

export default Wedding_Banner

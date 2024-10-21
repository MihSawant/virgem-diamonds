import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'

const Engagement_banners = ({ initialValues }) => {


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (

    
        <>
          <div className='relative 2xl:pt-24 lg:pt-18 pt-14 '>
            <div className='container xl:px-12 md:px-6 px-4 text-center'>
              <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
                DISCOVER COLLECTIONS
              </h2>
              <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
              <Link href='/collection' className='2xl:mt-4 mt-2 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6' >
                Learn More
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                  <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
                </svg>
              </Link>
              <div className='flex md:flex-nowrap lg:gap-6 gap-4 flex-wrap justify-center 2xl:mt-12 mt-8'>
                <div className='md:w-1/2 w-full flex flex-col lg:gap-6 gap-4'>

                  <div className="h-full overflow-hidden w-full before:block bg-violet-400 lg:before:pt-[50%] before:pt-[56%] relative transition-all group ">
                    <Image alt="Solitaire" title="Solitaire" className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" 
                    fill='true' src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Engagement/eng-banner-1.jpg" />
                    <div className='z-1 xl:p-9 lg:p-6 p-4 absolute bottom-0 sm:right-0 left-0 text-left'>
                      <h3 className='text-white 2xl:text-3xl xl:text-1xl sm:text-xl text-[24px] uppercase'>Trend Product</h3>
                      <Link href="/shop" className='text-white md:text-lg text-[15px]  inline-flex items-center gap-0 group/link transition-all 2xl:mt-3 mt-0' >
                      Discover Now
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 inline-block relative white-img rtl:mr-2 ltr:ml-2  lg:w-5 w-4 fill-white group-hover/link:translate-x-2 transition-all ">
                        <path d="M12.2276 3.22998L11.0339 4.42362L15.7577 9.15585H1V10.8489H15.7577L11.0339 15.5812L12.2276 16.7748L19 10.0024L12.2276 3.22998Z"></path></svg>
                      </Link>
                    </div>
                  </div>

                  <div className="h-full overflow-hidden w-full before:block bg-violet-400 lg:before:pt-[50%] before:pt-[56%] relative transition-all group ">
                    <Image alt="Solitaire" title="Solitaire" className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" fill='true' src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Engagement/eng-banner-2.jpg" />
                    <div className='z-1 xl:p-9 lg:p-6 p-4 absolute bottom-0 left-0 text-left'>
                      <h3 className='text-white 2xl:text-3xl xl:text-1xl sm:text-xl text-[24px] uppercase'>Best Seller</h3>
                      <Link href="/shop" className='text-white md:text-lg text-[15px]  inline-flex items-center gap-0 group/link transition-all 2xl:mt-3 mt-0' >
                      Discover Now
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 inline-block relative white-img rtl:mr-2 ltr:ml-2 lg:w-5 w-4 fill-white group-hover/link:translate-x-2 transition-all ">
                        <path d="M12.2276 3.22998L11.0339 4.42362L15.7577 9.15585H1V10.8489H15.7577L11.0339 15.5812L12.2276 16.7748L19 10.0024L12.2276 3.22998Z"></path></svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 w-full'>
                <div className="h-full overflow-hidden w-full before:block bg-violet-400 before:pt-[100%] relative transition-all group ">
                    <Image alt="Solitaire" title="Solitaire" className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" fill='true' src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Engagement/eng-banner-3.jpg" />
                    <div className='z-1 xl:p-9 lg:p-6 p-4 absolute bottom-0 left-0 text-left'>
                      <h3 className='text-white 2xl:text-3xl xl:text-1xl sm:text-xl text-[24px] uppercase'>new arrivals</h3>
                      <Link href="/shop" className='text-white md:text-lg text-[15px]  inline-flex items-center gap-0 group/link transition-all 2xl:mt-3 mt-0' >
                      Discover Now
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 inline-block relative white-img rtl:mr-2 ltr:ml-2 lg:w-5 w-4 fill-white group-hover/link:translate-x-2 transition-all ">
                        <path d="M12.2276 3.22998L11.0339 4.42362L15.7577 9.15585H1V10.8489H15.7577L11.0339 15.5812L12.2276 16.7748L19 10.0024L12.2276 3.22998Z"></path></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
     
  )
}

export default Engagement_banners

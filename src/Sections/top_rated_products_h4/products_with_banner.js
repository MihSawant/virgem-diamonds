import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@nextui-org/react'
import Top_Rated_Seller from '../../comman/Top_Rated_Seller'

const TopRated_Products = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
  const get_badge = (badge_type = '') => {
    if (badge_type) {
      if (badge_type === 'In available') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#136400] uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'Sold Out') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#a50000] uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'In Stock') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#a5009e] uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'New Arrivals') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#cb7200] uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'Best Seller') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#002eb7] uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      } else {
        return (
          <p className="sm:text-[13px] text-[12px] text-gray-600 uppercase sm:my-3 my-2 text-center font-montserrat font-[600]">{badge_type}</p>
        )
      }
    }
  }
  return (
    <>
      {isLoading ? (
        <div className='relative  2xl:pt-16 lg:pt-14 pt-8'>
          <div className='container'>
            <div className='flex items-center md:justify-between justify-center gap-4 lg:mt-12 mt-6 border-b border-gray-400/20 2xl:mb-8 mb-6 pb-7 sm:flex-nowrap flex-wrap'>
              <div className='flex items-center lg:flex-nowrap flex-wrap sm:w-auto w-full md:justify-start justify-center'>
                <h2 className='text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:md:text-left rtl:md:text-right text-center lg:mb-0 mb-3 lg:w-auto w-full max-w-[70%] font-catchye capitalize  '>
                  Top Rated Seller
                </h2>
                <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 ltr:lg:ml-8  rtl:1xl:mr-14 rtl:lg:mr-8 rounded'>
                  4,039 ordered in last month
                </span>
              </div>
              <Link className='all-btn rounded sm:w-auto w-full justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4' href='#'>
                all trending
                <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg'
                  className='fill-white group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180  transition-all'>
                  <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                </svg>
              </Link>
            </div>

            <div className='flex flex-wrap '>
              <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 xl:w-2/3 w-full xl:pr-5 xl:order-1 order-2'>
                <div className='!h-auto'>
                  <div className='bg-white border h-full border-gray-400/20 p-4 group'>
                    <div className='flex items-center justify-between mb-3'>
                      <Skeleton className='w-14 h-5 rounded' />
                      <Skeleton className='w-6 h-6 rounded-full' />
                    </div>
                    <Skeleton className='mx-auto w-1/2 h-40 sm:my-6 rounded' />
                    <Skeleton className='w-24 h-5 mx-auto rounded sm:my-3 my-2' />
                    <Skeleton className='w-full mx-auto h-5 rounded sm:my-3 my-2' />
                    <Skeleton className='w-16 mx-auto h-6 rounded sm:my-3 my-2' />
                  </div>
                </div>
                <div className='!h-auto'>
                  <div className='bg-white border h-full border-gray-400/20 p-4 group'>
                    <div className='flex items-center justify-between mb-3'>
                      <Skeleton className='w-14 h-5 rounded' />
                      <Skeleton className='w-6 h-6 rounded-full' />
                    </div>
                    <Skeleton className='mx-auto w-1/2 h-40 sm:my-6 rounded' />
                    <Skeleton className='w-24 h-5 mx-auto rounded sm:my-3 my-2' />
                    <Skeleton className='w-full mx-auto h-5 rounded sm:my-3 my-2' />
                    <Skeleton className='w-16 mx-auto h-6 rounded sm:my-3 my-2' />
                  </div>
                </div>
                <div className='!h-auto'>
                  <div className='bg-white border h-full border-gray-400/20 p-4 group'>
                    <div className='flex items-center justify-between mb-3'>
                      <Skeleton className='w-14 h-5 rounded' />
                      <Skeleton className='w-6 h-6 rounded-full' />
                    </div>
                    <Skeleton className='mx-auto w-1/2 h-40 sm:my-6 rounded' />
                    <Skeleton className='w-24 h-5 mx-auto rounded sm:my-3 my-2' />
                    <Skeleton className='w-full mx-auto h-5 rounded sm:my-3 my-2' />
                    <Skeleton className='w-16 mx-auto h-6 rounded sm:my-3 my-2' />
                  </div>
                </div>
              </div>
              <div className='xl:w-1/3 w-full xl:mb-0 mb-5 xl:order-2 order-1'>
                <div className='w-full h-full relative min-h-[300px]'>
                  <div className='z-20 relative border border-gray-400/20  h-full p-6 group flex flex-col justify-between'>
                    <div>
                      <Skeleton className='w-14 h-5 rounded my-3 mx-auto' />
                      <Skeleton className=' w-2/3 h-20 rounded mb-3  mx-auto' />
                    </div>
                    <div className='relative flex items-center overflow-hidden'>
                      <Skeleton className='w-20 h-6 rounded sm:my-3 my-2' />
                      <Skeleton className='w-20 h-6 rounded mx-6 ' />
                    </div>
                  </div>
                  <Skeleton className='w-full object-cover opacity-50 absolute h-full top-0 left-0 z-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {initialValues &&
            initialValues.map((data, index) => {
              return (
                <div className='relative  2xl:pt-16 lg:pt-14 pt-8' key={index}>
                  <div className='container'>
                    <div className='flex items-center md:justify-between justify-center gap-4 lg:mt-12 mt-6 border-b border-gray-400/20 2xl:mb-8 mb-6 pb-7  sm:flex-nowrap flex-wrap'>
                      <div className='flex items-center lg:flex-nowrap flex-wrap sm:w-auto w-full sm:justify-start justify-center'>
                        <h2 className='text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:sm:text-left rtl:sm:text-right text-center lg:mb-0 mb-3 lg:w-auto w-full max-w-[70%] font-catchye capitalize  '>
                          Top Rated Seller
                        </h2>
                        <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 ltr:lg:ml-8 rtl:1xl:mr-14 rtl:lg:mr-8 rounded'>
                          4,039 ordered in last month
                        </span>
                      </div>
                      <Link className='all-btn rounded sm:w-auto w-full justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4 min-w-fit' href='/shop' >
                        all trending
                        <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-white group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180  transition-all' >
                          <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                        </svg>
                      </Link>
                    </div>

                    <div className='flex flex-wrap '>
                      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 xl:w-2/3 w-full xl:pr-5 xl:order-1 order-2'>
                        {data.products &&
                          data.products.map((slidedata, index) => {
                            return (
                              <Top_Rated_Seller initialValues={slidedata} key={index} />
                            )
                          })}
                      </div>
                      <div className=' xl:w-1/3 w-full xl:mb-0 mb-5 xl:order-2 order-1'>
                        {data.product_banner &&
                          data.product_banner.map((banner, index) => {
                            return (
                              <div key={index} className='w-full h-full relative min-h-[300px] overflow-hidden group' >
                                <div className='z-20 relative border border-gray-400/20  h-full p-6 flex flex-col justify-between'>
                                  <div>
                                    <p className='text-sm text-black uppercase font-montserrat my-3 text-center font-[600]'>
                                      {banner.stock_badge}
                                    </p>
                                    <Link href={banner.pro_link} className='2xl:text-[32px] text-[24px] leading-snug text-black mx-auto w-2/3 text-center font-catchye capitalize mb-3 block ' >
                                      {banner.title}
                                    </Link>
                                  </div>
                                  <div className='relative flex items-center overflow-hidden'>
                                    <p className='xl:text-[22px] sm:text-[20px] text-md text-black uppercase font-montserrat font-[500] text-center'>
                                      ${banner.price}
                                    </p>
                                    <Link href={banner.pro_link} className='sm:text-md text-sm text-black hover:text-violet-900 font-montserrat font-[600] inline-flex rounded items-center underline  gap-2 px-6 group '  >
                                      {banner.btn_label}
                                      <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-black group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180  transition-all sm:w-4 sm:h-4 w-3.5 h-3.5' >
                                        <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                                      </svg>
                                    </Link>
                                  </div>
                                </div>
                                <Link href={banner.pro_link}>
                                  <Image src={banner.img} alt={banner.alt} title={banner.alt} width={600} height={600} className='w-full object-cover absolute h-full top-0 left-0 z-0 group-hover:scale-105 transition-all' />
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </>
      )}
    </>
  )
}

export default TopRated_Products

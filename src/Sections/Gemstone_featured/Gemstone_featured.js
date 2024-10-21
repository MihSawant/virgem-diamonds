import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { useCart } from 'react-use-cart'

const Gemstone_Features = ({ initialValues }) => {

  const { addItem, items } = useCart();

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)


  const AddToCart = (data) => {
    addItem(data)
    const old_class = document.getElementById('mini-cart').className;
    const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full -right-full h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full'
    document.getElementById('mini-cart').className = new_class
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:pt-4 lg:pt-4 pt-2 '>
          <div className='container xl:px-12 md:px-6 px-4 text-center'>
            <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
              featured gemstones
            </h2>
            <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>

            <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 2xl:my-12 md:my-8 my-4'>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>
              <div className="relative group"  >
                <Skeleton className='w-full lg:h-[230px] h-[180px]' />
                <Skeleton className='sm:h-6 h-5 mt-3 mb-1.5 w-3/4' />
              </div>

            </div>
            <Link href='/shop' className=' all-btn md:text-lg hover:opacity-100 text-white' >
              Shop Now
            </Link>

          </div>
        </div>
      ) : (
        <div className='relative 2xl:pt-4 lg:pt-4 pt-2 '>
          <div className='container xl:px-12 md:px-6 px-4 text-center'>
            <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
              featured gemstones
            </h2>
            <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>

            <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 2xl:my-12 md:my-8 my-4'>
              {initialValues && initialValues.map((data, index) => {
                const productInCart = items.some((item) => item.id === data.id);
                return (
                  <div className="relative group" key={index} >

                    <div onClick={() => AddToCart(data)} className='bg-violet-400 lg:min-h-[230px] min-h-[180px] flex items-center justify-center overflow-hidden relative' >
                      <Image src={data.img} alt={data.title} title={data.title} width={130} height={130} className='group-hover:scale-110 transition-all lg:w-32 w-24' />
                      {
                        productInCart ?
                          <span className='flex all-btn bg-gray-900 text-white hover:opacity-100 transition-all absolute -bottom-full group-hover:bottom-0 left-1/2 -translate-x-2/4 min-w-max rounded-t sm:py-2.5 py-2 md:px-7 px-3 uppercase font-[500] sm:text-sm text-[12px]' >
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1.5 md:w-5 w-3'>
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.00008 1.60006C6.57204 1.60006 6.16152 1.77688 5.85885 2.09164C5.55618 2.40639 5.38614 2.83329 5.38614 3.27842V3.47237C5.78568 3.46491 6.22395 3.46491 6.70598 3.46491H7.29489C7.77549 3.46491 8.21448 3.46491 8.61474 3.47237V3.27842C8.61474 3.05795 8.57297 2.83965 8.49182 2.63597C8.41066 2.43229 8.29172 2.24724 8.14177 2.09138C7.99183 1.93552 7.81383 1.8119 7.61793 1.7276C7.42203 1.6433 7.21209 1.59996 7.00008 1.60006ZM9.68998 3.52309V3.27842C9.68998 2.53654 9.40658 1.82504 8.90213 1.30045C8.39767 0.77586 7.71349 0.481148 7.00008 0.481148C6.28667 0.481148 5.60249 0.77586 5.09803 1.30045C4.59358 1.82504 4.31018 2.53654 4.31018 3.27842V3.52309C4.2076 3.53204 4.10933 3.54248 4.01321 3.55517C3.28873 3.64841 2.69193 3.84384 2.18407 4.28171C1.67694 4.71958 1.38212 5.29395 1.16048 6.01751C0.945284 6.7187 0.783173 7.61905 0.579457 8.75213L0.564394 8.83418C0.276036 10.4327 0.0493669 11.6926 0.00704571 12.6855C-0.0359928 13.7037 0.110338 14.5466 0.662665 15.2381C1.21499 15.9303 1.98466 16.2347 2.95446 16.3786C3.90131 16.5189 5.13293 16.5189 6.69738 16.5189H7.3035C8.86723 16.5189 10.0996 16.5189 11.0457 16.3786C12.0155 16.2347 12.7859 15.9303 13.3382 15.2381C13.8905 14.5466 14.0354 13.7037 13.9931 12.6855C13.9515 11.6926 13.7241 10.4327 13.4358 8.83418L13.4214 8.75213C13.217 7.61905 13.0542 6.71795 12.8404 6.01751C12.618 5.29395 12.3239 4.71958 11.8161 4.28171C11.3089 3.84384 10.7114 3.64766 9.98695 3.55517C9.88816 3.54257 9.78916 3.53187 9.68998 3.52309ZM4.1452 4.66587C3.5319 4.74419 3.16105 4.89264 2.87126 5.14327C2.58218 5.39242 2.37344 5.74375 2.18551 6.35692C1.99399 6.98351 1.84264 7.81747 1.63031 8.99531C1.33191 10.6491 1.12031 11.8299 1.08229 12.7347C1.04499 13.6224 1.18271 14.1371 1.49044 14.5242C1.79888 14.9099 2.26011 15.1448 3.10653 15.2702C3.9673 15.3985 5.1236 15.3999 6.74113 15.3999H7.25903C8.87656 15.3999 10.0321 15.3985 10.8936 15.2709C11.7401 15.1448 12.2013 14.9099 12.5097 14.5242C12.8182 14.1378 12.9552 13.6231 12.9186 12.734C12.8799 11.8306 12.6682 10.6491 12.3698 8.99531C12.1575 7.81672 12.0069 6.98425 11.8147 6.35692C11.6267 5.74375 11.4187 5.39242 11.1289 5.14253C10.8391 4.89264 10.469 4.74419 9.85497 4.66512C9.2266 4.58456 8.41102 4.58382 7.25831 4.58382H6.74185C5.58914 4.58382 4.77356 4.58456 4.1452 4.66587Z" fill="white" />
                            </svg>
                            Add to cart
                          </span>
                          :
                          <span className='flex all-btn text-white hover:opacity-100 transition-all absolute -bottom-full group-hover:bottom-0 left-1/2 -translate-x-2/4 min-w-max rounded-t sm:py-2.5 py-2 md:px-7 px-3 uppercase font-[500] sm:text-sm text-[12px]' >
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1.5 md:w-5 w-3'>
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.00008 1.60006C6.57204 1.60006 6.16152 1.77688 5.85885 2.09164C5.55618 2.40639 5.38614 2.83329 5.38614 3.27842V3.47237C5.78568 3.46491 6.22395 3.46491 6.70598 3.46491H7.29489C7.77549 3.46491 8.21448 3.46491 8.61474 3.47237V3.27842C8.61474 3.05795 8.57297 2.83965 8.49182 2.63597C8.41066 2.43229 8.29172 2.24724 8.14177 2.09138C7.99183 1.93552 7.81383 1.8119 7.61793 1.7276C7.42203 1.6433 7.21209 1.59996 7.00008 1.60006ZM9.68998 3.52309V3.27842C9.68998 2.53654 9.40658 1.82504 8.90213 1.30045C8.39767 0.77586 7.71349 0.481148 7.00008 0.481148C6.28667 0.481148 5.60249 0.77586 5.09803 1.30045C4.59358 1.82504 4.31018 2.53654 4.31018 3.27842V3.52309C4.2076 3.53204 4.10933 3.54248 4.01321 3.55517C3.28873 3.64841 2.69193 3.84384 2.18407 4.28171C1.67694 4.71958 1.38212 5.29395 1.16048 6.01751C0.945284 6.7187 0.783173 7.61905 0.579457 8.75213L0.564394 8.83418C0.276036 10.4327 0.0493669 11.6926 0.00704571 12.6855C-0.0359928 13.7037 0.110338 14.5466 0.662665 15.2381C1.21499 15.9303 1.98466 16.2347 2.95446 16.3786C3.90131 16.5189 5.13293 16.5189 6.69738 16.5189H7.3035C8.86723 16.5189 10.0996 16.5189 11.0457 16.3786C12.0155 16.2347 12.7859 15.9303 13.3382 15.2381C13.8905 14.5466 14.0354 13.7037 13.9931 12.6855C13.9515 11.6926 13.7241 10.4327 13.4358 8.83418L13.4214 8.75213C13.217 7.61905 13.0542 6.71795 12.8404 6.01751C12.618 5.29395 12.3239 4.71958 11.8161 4.28171C11.3089 3.84384 10.7114 3.64766 9.98695 3.55517C9.88816 3.54257 9.78916 3.53187 9.68998 3.52309ZM4.1452 4.66587C3.5319 4.74419 3.16105 4.89264 2.87126 5.14327C2.58218 5.39242 2.37344 5.74375 2.18551 6.35692C1.99399 6.98351 1.84264 7.81747 1.63031 8.99531C1.33191 10.6491 1.12031 11.8299 1.08229 12.7347C1.04499 13.6224 1.18271 14.1371 1.49044 14.5242C1.79888 14.9099 2.26011 15.1448 3.10653 15.2702C3.9673 15.3985 5.1236 15.3999 6.74113 15.3999H7.25903C8.87656 15.3999 10.0321 15.3985 10.8936 15.2709C11.7401 15.1448 12.2013 14.9099 12.5097 14.5242C12.8182 14.1378 12.9552 13.6231 12.9186 12.734C12.8799 11.8306 12.6682 10.6491 12.3698 8.99531C12.1575 7.81672 12.0069 6.98425 11.8147 6.35692C11.6267 5.74375 11.4187 5.39242 11.1289 5.14253C10.8391 4.89264 10.469 4.74419 9.85497 4.66512C9.2266 4.58456 8.41102 4.58382 7.25831 4.58382H6.74185C5.58914 4.58382 4.77356 4.58456 4.1452 4.66587Z" fill="white" />
                            </svg>
                            Add to cart
                          </span>
                      }
                    </div>

                    <div className='flex items-center md:gap-2 gap-1 mt-3 mb-1.5'>
                      <Link href={data.link} className='font-nabi 2xl:text-[24px] lg:text-[22px] sm:text-lg text-[17px] text-gray-900 leading-6 text-left block'>{data.title}</Link>
                      <span>-</span>
                      <span className=' 2xl:text-[20px] lg:text-lg sm:text-md text-sm text-gray-900'>${data.price}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <Link href='/shop' className=' all-btn md:text-lg hover:opacity-100 text-white' >
              Shop Now
            </Link>

          </div>
        </div>
      )}

    </>

  )
}

export default Gemstone_Features

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@nextui-org/react'
import { BoxedProduct } from '../../comman'
import Countdown from "react-countdown";


const H4_Products_Categories = ({ initialValues }) => {

  const Completionist = () => <span>Sale Ends!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {'0' + hours}:{minutes}:{seconds}
        </span>
      );
    }
  };


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
  const [CatNavshow, setCatNavshow] = React.useState(false);
  function toggle() {
    setCatNavshow(!CatNavshow);
  }
  return (
    <>
      {isLoading ? (
        <div className='2xl:pt-20 lg:pt-16 pt-14'>
          <div className='container'>
            <div className='flex items-center sm:flex-row flex-col  sm:justify-between justify-center border-b border-gray-400/20 sm:mb-8 mb-4 pb-6'>
              <div className='flex items-center lg:flex-nowrap flex-wrap sm:justify-start justify-center sm:mb-0 mb-4 lg:w-auto w-full '>
                <h2 className="text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight lg:mb-0 mb-3 lg:w-auto w-full ltr:sm:text-left rtl:sm:text-right text-center inline-block font-catchye capitalize  "> Popular Categories</h2>
                <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 rtl:1xl:mr-14 ltr:lg:ml-8 rtl:lg:mr-8 rounded'>
                  Start to Deal :  <Countdown date={Date.now() + 16500000} renderer={renderer}>
                    <Completionist />
                  </Countdown></span>
              </div>
              <Link className='all-btn min-w-max rounded font-montserrat text-[13px] sm:text-sm uppercase font-[500] tracking-wider group inline-flex items-center justify-center gap-1.5 lg:py-3 py-2.5 lg:px-6 px-4  sm:w-auto w-full' href='/shop' >
                See all offers
                <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-white group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180' >
                  <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                </svg>
              </Link>
            </div>
            <div className='flex items-stretch xl:flex-nowrap flex-wrap xl:gap-4 xl:mx-0 -mx-2' >
              <div className='xl:w-1/5  w-full xl:mb-0 mb-2 xl:p-0 p-2'  >

                <ul className='h-full bg-violet-400 xl:block hidden rounded py-2'>
                  <li className='px-4'>
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                    <Skeleton className='md:py-4 py-3 mb-2 rounded' />
                  </li>

                </ul>
              </div>

              <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                <div className="container overflow-hidden h-full p-0">
                  <div className="bg-gray-400/10 overflow-hidden relative bg-center bg-cover h-full md:p-8 px-5 py-8">
                    <div className="w-full relative z-10 ml-auto">
                      <div className="">
                        <Skeleton className="flex w-full h-[68px] mb-4 rounded" />
                        <Skeleton className="flex w-full  h-8 mb-8 rounded " />
                        <Skeleton className=" w-16 h-[25px] rounded inline-block" />
                        <Skeleton className=" w-16 h-[25px] rounded inline-block ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                  <div className="bg-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="w-24 h-8 rounded" />
                      <Skeleton className="w-6 h-6 rounded-full" />
                    </div>
                    <Skeleton className="w-full h-12 mb-2 rounded" />
                    <div className='relative'>
                      <Skeleton className="w-full h-52  rounded" />
                      <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Skeleton className="w-16 h-12 rounded" />
                      <Skeleton className="w-16 h-12 rounded" />
                    </div>
                  </div>
                  <div className="bg-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="w-24 h-8 rounded" />
                      <Skeleton className="w-6 h-6 rounded-full" />
                    </div>
                    <Skeleton className="w-full h-12 mb-2 rounded" />
                    <div className='relative'>
                      <Skeleton className="w-full h-52  rounded" />
                      <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Skeleton className="w-16 h-12 rounded" />
                      <Skeleton className="w-16 h-12 rounded" />
                    </div>
                  </div>
                  <div className="bg-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="w-24 h-8 rounded" />
                      <Skeleton className="w-6 h-6 rounded-full" />
                    </div>
                    <Skeleton className="w-full h-12 mb-2 rounded" />
                    <div className='relative'>
                      <Skeleton className="w-full h-52  rounded" />
                      <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Skeleton className="w-16 h-12 rounded" />
                      <Skeleton className="w-16 h-12 rounded" />
                    </div>
                  </div>
                  <div className="bg-gray-300 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="w-24 h-8 rounded" />
                      <Skeleton className="w-6 h-6 rounded-full" />
                    </div>
                    <Skeleton className="w-full h-12 mb-2 rounded" />
                    <div className='relative'>
                      <Skeleton className="w-full h-52  rounded" />
                      <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Skeleton className="w-16 h-12 rounded" />
                      <Skeleton className="w-16 h-12 rounded" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='2xl:pt-20 lg:pt-16 pt-14'>
            <div className='container'>
              <div className='flex items-center sm:flex-row flex-col  sm:justify-between justify-center border-b border-gray-400/20 sm:mb-8 mb-4 pb-6'>
                <div className='flex items-center lg:flex-nowrap flex-wrap sm:justify-start justify-center sm:mb-0 mb-4 lg:w-auto w-full '>
                  <h2 className="text-black  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight lg:mb-0 mb-3 lg:w-auto w-full ltr:sm:text-left rtl:sm:text-right text-center inline-block font-catchye capitalize  "> Popular Categories</h2>
                  <span className=' flex justify-center sm:w-auto w-full items-center gap-2 font-montserrat font-medium bg-[#FED700] text-black lg:text-lg sm:text-md text-sm lg:py-3 py-2 lg:px-8 px-4 ltr:1xl:ml-14 rtl:1xl:mr-14 ltr:lg:ml-8 rtl:lg:mr-8 rounded'>
                    Start to Deal :  <Countdown date={Date.now() + 16500000} renderer={renderer}>
                      <Completionist />
                    </Countdown></span>
                </div>
                <Link className='all-btn min-w-max rounded font-montserrat text-[13px] sm:text-sm uppercase font-[500] tracking-wider group inline-flex items-center justify-center gap-1.5 lg:py-3 py-2.5 lg:px-6 px-4  sm:w-auto w-full' href='/shop' >
                  See all offers
                  <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-white group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180  transition-all' >
                    <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                  </svg>
                </Link>
              </div>

              {initialValues && initialValues.map((categories_data, index) => {
                return (
                  <div className='flex items-stretch xl:flex-nowrap flex-wrap xl:gap-4 xl:mx-0 -mx-2' key={index}>
                    <div className='xl:w-1/5  w-full xl:mb-0 mb-2 xl:p-0 p-2'  >
                      <div className='xl:hidden bg-violet-400'>
                        <div onClick={toggle} className={CatNavshow ? 'active cursor-pointer group flex items-center p-3 text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] text-black wc-custom relative ' : 'group cursor-pointer flex items-center p-3 text-[13px] leading-tight md:text-sm 2xl:text-md text-black font-[500] font-[montserrat] wc-custom relative '}>
                          <span className="grow">Popular Categories</span>
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-black  group-[.active]:rotate-180'>
                            <path d="M13 1L7 7L1 1" />
                          </svg>
                        </div>
                        <ul className='h-full bg-violet-400' style={{ display: CatNavshow ? "block" : "none" }}>
                          {categories_data.cat_list && categories_data.cat_list.map((list_item, index) => {
                            return (
                              <li key={index} className='px-4 '>
                                <Link className='flex items-center group md:py-4 py-3 text-black hover:text-violet-900 capitalize text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] border-b border-gray-400/20' href={list_item.cat_link}>
                                  <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" className="fill-gray-900 w-0 group-hover:w-8 m-0 transition-all"><path d="M9.35632 0L8.36162 0.994699L12.2981 4.93822H0V6.34914H12.2981L8.36162 10.2927L9.35632 11.2874L15 5.64368L9.35632 0Z"></path></svg>
                                  {list_item.label}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <ul className='h-full bg-violet-400 xl:block hidden'>
                        {categories_data.cat_list && categories_data.cat_list.map((list_item, index) => {
                          return (
                            <li key={index} className='px-4 '>
                              <Link className='flex items-center group md:py-4 py-3 text-black hover:text-violet-900 capitalize text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] border-b border-gray-400/20' href={list_item.cat_link}>
                                <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" className="fill-gray-900 w-0 group-hover:w-8 m-0 transition-all"><path d="M9.35632 0L8.36162 0.994699L12.2981 4.93822H0V6.34914H12.2981L8.36162 10.2927L9.35632 11.2874L15 5.64368L9.35632 0Z"></path></svg>
                                {list_item.label}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                      {categories_data.best_seller && categories_data.best_seller.map((best_seller, index) => {
                        return (
                          <div className="relative h-full overflow-hidden" key={index}>
                            <div style={{ backgroundImage: `url(${best_seller.product_img})` }} className="rtl:-scale-x-100 h-full overflow-hidden relative sm:bg-center bg-[12%] bg-cover bg-no-repeat bg-[#eed7c9]  md:p-8 px-5 py-8 before:content-[''] sm:before:hidden before:block before:w-[100%] before:h-[80%] before:bg-gradient-to-t  before:from-[#EFEDE700]  before:to-[#EFEDE7]  before:absolute before:top-0 before:left-0 before:z-0">
                              <div className="relative rtl:-scale-x-100  sm:pb-0 pb-52 ml-auto sm:text-left text-center z-10">
                                <p className="sm:text-[15px] text-[12px] uppercase font-[600] text-black leading-7 md:mb-4 mb-3 font-montserrat">{best_seller.subtitle}</p>
                                <h2 className="text-black md:mb-4 mb-3  capitalize tracking-wider lg:text-3xl sm:text-1xl text-[25px] leading-tight font-catchye 1xl:w-[80%] rtl:ml-0 rtl:mr-auto">{best_seller.title}</h2>
                                <span className="inline-block align-middle xl:text-[24px] md:text-[20px] text-lg font-[500] text-black font-montserrat ">{best_seller.product_price}</span>
                                <Link className="sm:text-md text-sm text-black font-montserrat font-semibold underline inline-flex md:ltr:ml-6 md:rtl:mr-6 ltr:ml-3 rtl:mr-3 items-center group gap-1" href={best_seller.product_link}>{best_seller.product_btn}
                                  <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-black group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180  transition-all sm:w-4 sm:h-4 w-3 h-3"><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z">
                                  </path></svg></Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                        {categories_data.product_grid && categories_data.product_grid.map((products, index) => {
                          return (
                            <BoxedProduct initialValues={products} key={index} />
                          )
                        })}
                      </div>
                    </div>

                  </div>
                )
              })}

            </div>
          </div>
        </>
      )}
    </>
  )
}

export default H4_Products_Categories

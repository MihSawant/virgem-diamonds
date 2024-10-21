import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const Category_Hero = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='relative'>
                  <div className='container '>
                  <div className='flex md:flex-wrap flex-wrap relative md:items-center items-start md:flex-row flex-col-reverse justify-end h-full z-1 md:min-h-[65vh] sm:min-h-[500px] min-h-[400px]'>
                      <div className='1xl:w-3/4 lg:w-[70%] md:w-[62%] w-full'></div>
                      <div className='1xl:w-1/4 lg:w-[30%] md:w-[38%] w-full py-4'>
                          <div className='flex items-center md:justify-start justify-center'>
                            <Skeleton className='md:w-5 w-3.5 md:h-5 h-3.5 rounded' />
                              <span className='md:text-[20px] text-md font-semibold text-gray-800 uppercase mx-1.5'> / </span>
                              <Skeleton className='w-24 h-5 rounded' />
                          </div>
                          <Skeleton className='w-1/3 h-16 rounded ltr:md:ml-0 rtl:md:mr-0 mx-auto md:my-4 my-2 ' />
                          <Skeleton className='w-full h-14 rounded  ltr:md:ml-0 rtl:md:mr-0 mx-auto  md:my-4 my-2 ' />
                          <Skeleton className='w-36 h-12 rounded  ltr:md:ml-0 rtl:md:mr-0 mx-auto ' />
                      </div>
                  </div>
                      <Skeleton className='w-full h-full opacity-40 absolute top-0 left-0 rounded' />
              </div>
              </div>
            ) : (
                <>
                    <div className="relative ">
                        {initialValues && initialValues.map((data, index) => {
                            return (
                                <div className='container' key={index}>
                                    <div className='flex md:flex-wrap flex-wrap relative md:items-center items-start md:flex-row flex-col-reverse justify-end h-full z-1 md:min-h-[65vh] sm:min-h-[500px] min-h-[400px]'>
                                        <div className='1xl:w-3/4 lg:w-[70%] md:w-[62%] w-full'></div>
                                        <div className='1xl:w-1/4 lg:w-[30%] md:w-[38%] w-full py-4'>
                                            <div className='flex items-center md:justify-start justify-center'>
                                                <Link href='./home-1' className=''>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-5 w-3.5'>
                                                        <path d="M3.125 8.28125V17.5C3.125 17.6658 3.19085 17.8247 3.30806 17.9419C3.42527 18.0592 3.58424 18.125 3.75 18.125H7.5V12.8125C7.5 12.5639 7.59877 12.3254 7.77459 12.1496C7.9504 11.9738 8.18886 11.875 8.4375 11.875H11.5625C11.8111 11.875 12.0496 11.9738 12.2254 12.1496C12.4012 12.3254 12.5 12.5639 12.5 12.8125V18.125H16.25C16.4158 18.125 16.5747 18.0592 16.6919 17.9419C16.8092 17.8247 16.875 17.6658 16.875 17.5V8.28125" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.75 10.0001L10.4254 2.0313C10.2301 1.82505 9.77344 1.82271 9.57461 2.0313L1.25 10.0001M15.625 6.99224V2.50005H13.75V5.19536" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                                <span className='md:text-[20px] text-md font-semibold text-gray-800 uppercase mx-1.5'> / </span>
                                                <span className='md:text-[15px] text-[12px] font-semibold text-gray-800 uppercase'>{data.title}</span>
                                            </div>
                                            <h1 className="2xl:text-4xl lg:text-3xl md:text-1xl sm:text-xl text-[28px] uppercase rtl:md:text-right ltr:md:text-left text-center  md:my-6 my-2 leading-none text-gray-800">{data.title}</h1>
                                            <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-6 text-gray-800  rtl:md:text-right ltr:md:text-left text-center ' > {data.description}</p>
                                            <Link className="all-btn text-white hover:opacity-100 font-[500] md:mx-0 mx-auto px-8 lg:text-lg flex w-max items-center" href='/shop'>
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    <Image src={data.img} alt={data.title} title={data.title} fill={true} className='object-cover md:block hidden rtl:-scale-x-100' />
                                    <Image src={data.mobile_img} alt={data.title} title={data.title} fill={true} className='object-cover md:hidden block object-bottom' />
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default Category_Hero;
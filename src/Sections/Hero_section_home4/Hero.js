import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const Hero_h4 = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="hero-sec mb-8 lg:mb-0 bg-[#EAEAE8]">
                    <div className="container">
                        <div className="flex xl:flex-nowrap flex-wrap lg:pb-0 pb-6">
                            <div className='2xl:w-[21%] w-0'></div>
                            <div className='2xl:w-[56%] lg:w-4/6 w-full flex flex-col'>
                                <div className="flex items-center lg:px-6 sm:px-3 2xl:py-16 lg:py-8 py-12 grow">
                                    <div className='sm:w-1/2 w-[40%]'>
                                        <Skeleton className='w-full h-[315px] rounded' />
                                    </div>
                                    <div className='sm:w-1/2 w-[60%] sm:ltr:pl-6 sm:rtl:pr-6 ltr:pl-3 rtl:pr-3 '>
                                        <Skeleton className='w-full h-24 rounded lg:mb-3 mb-2' />
                                        <Skeleton className='w-full h-24 rounded lg:mb-3 mb-2' />
                                        <Skeleton className='w-full h-24 rounded lg:mb-3 mb-2' />
                                        <Skeleton className='w-44 h-12 rounded' />
                                    </div>
                                </div>

                                <div className='flex items-stretch xl:flex-nowrap  max-w-full overflow-auto'>
                                    <div className='border border-gray-400/20 border-r-0 1xl:p-5 p-2.5 bg-white sm:w-1/5 w-1/2'  >
                                        <Skeleton className='w-[80px] h-[80px] rounded-full' />
                                        <Skeleton className='w-24 h-8 rounded mt-3' />
                                    </div>
                                    <div className='border border-gray-400/20 border-r-0 1xl:p-5 p-2.5 bg-white sm:w-1/5 w-1/2'  >
                                        <Skeleton className='w-[80px] h-[80px] rounded-full' />
                                        <Skeleton className='w-24 h-8 rounded mt-3' />
                                    </div>
                                    <div className='border border-gray-400/20 border-r-0 1xl:p-5 p-2.5 bg-white sm:w-1/5 w-1/2'  >
                                        <Skeleton className='w-[80px] h-[80px] rounded-full' />
                                        <Skeleton className='w-24 h-8 rounded mt-3' />
                                    </div>
                                    <div className='border border-gray-400/20 border-r-0 1xl:p-5 p-2.5 bg-white sm:w-1/5 w-1/2'  >
                                        <Skeleton className='w-[80px] h-[80px] rounded-full' />
                                        <Skeleton className='w-24 h-8 rounded mt-3' />
                                    </div>
                                    <div className='border border-gray-400/20 border-r-0 1xl:p-5 p-2.5 bg-white sm:w-1/5 w-1/2'  >
                                        <Skeleton className='w-[80px] h-[80px] rounded-full' />
                                        <Skeleton className='w-24 h-8 rounded mt-3' />
                                    </div>
                                </div>

                            </div>
                            <div className='2xl:w-[23%] lg:w-2/6 w-full flex lg:flex-col flex-wrap'>
                                <div className="border border-gray-400/20 border-t-0 p-3.5 flex items-center bg-white lg:w-full sm:w-1/2 w-full">
                                    <div className='w-2/5'>
                                        <Skeleton className='w-[135px] h-[135px]' />
                                    </div>
                                    <div className="ltr:pl-3 rtl:pr-3 w-3/5">
                                        <Skeleton className='w-full h-11 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 rounded lg:mb-3 mb-2' />
                                    </div>
                                </div>
                                <div className="border border-gray-400/20 border-t-0 p-3.5 flex items-center bg-white lg:w-full sm:w-1/2 w-full">
                                    <div className='w-2/5'>
                                        <Skeleton className='w-[135px] h-[135px]' />
                                    </div>
                                    <div className="ltr:pl-3 rtl:pr-3 w-3/5">
                                        <Skeleton className='w-full h-11 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 rounded lg:mb-3 mb-2' />
                                    </div>
                                </div>
                                <div className="border border-gray-400/20 border-t-0 p-3.5 flex items-center bg-white lg:w-full sm:w-1/2 w-full">
                                    <div className='w-2/5'>
                                        <Skeleton className='w-[135px] h-[135px]' />
                                    </div>
                                    <div className="ltr:pl-3 rtl:pr-3 w-3/5">
                                        <Skeleton className='w-full h-11 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 rounded lg:mb-3 mb-2' />
                                    </div>
                                </div>
                                <div className="border border-gray-400/20 border-t-0 p-3.5 flex items-center bg-white lg:w-full sm:w-1/2 w-full">
                                    <div className='w-2/5'>
                                        <Skeleton className='w-[135px] h-[135px]' />
                                    </div>
                                    <div className="ltr:pl-3 rtl:pr-3 w-3/5">
                                        <Skeleton className='w-full h-11 sm:mb-2 mb-1.5 rounded' />
                                        <Skeleton className='w-full h-8 sm:mb-2 mb-1.5 rounded ' />
                                        <Skeleton className='w-full h-8 rounded lg:mb-3 mb-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="hero-sec mb-8 lg:mb-0 bg-[#EAEAE8]">
                        <div className="container">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="flex xl:flex-nowrap flex-wrap lg:pb-0 pb-6" key={index}>
                                        <div className='2xl:w-[21%] w-0'></div>
                                        <div className='2xl:w-[56%] lg:w-4/6 w-full flex flex-col'>
                                            {data.middle_product && data.middle_product.map((product_data, index) => {
                                                return (
                                                    <div className="flex items-center min-[400px]:flex-nowrap flex-wrap lg:px-6 sm:px-3 2xl:py-16 lg:py-8 py-12 grow" key={index}>
                                                        <div className='sm:w-1/2 min-[400px]:w-[40%] w-full sm:mb-0 mb-3'>
                                                            <Image src={product_data.product_img} alt={product_data.alt} title={product_data.alt} width={315} height={315} className='max-w-full min-[400px]:w-auto w-[250px] mx-auto' />
                                                        </div>
                                                        <div className='sm:w-1/2 min-[400px]:w-[60%] w-full sm:ltr:pl-6 sm:rtl:pr-6 ltr:pl-3 rtl:pr-3 '>
                                                            <h1 className='lg:text-3xl sm:text-1xl text-[24px] lg:mb-3 mb-2 capitalize leading-tight text-black font-catchye tracking-wide'>{product_data.product_name}</h1>
                                                            <p className='2xl:text-lg lg:text-[17px] text-md  lg:mb-6 mb-3 lg:leading-7 text-gray-800 font-montserrat'>{product_data.product_description}</p>
                                                            <p className='2xl:text-xl lg:text-xl sm:text-[20px] text-lg uppercase font-[600] mlg:mb-6 mb-3 lg:leading-10 text-black font-montserrat'><span className='block text-sm'>From</span>{product_data.product_price}</p>
                                                            <Link href={product_data.pro_link} className="all-btn rounded font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4">{product_data.product_btn}
                                                                <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className='fill-white group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180'>
                                                                    <path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div className='flex items-stretch xl:flex-nowrap  max-w-full overflow-auto'>
                                                {data.categories && data.categories.map((categories_data, index) => {
                                                    return (
                                                        <Link href={categories_data.link} className='group 1xl:p-5 p-2.5 bg-white hover:bg-gray-300 sm:w-1/5 w-1/2  border border-gray-400/20 border-r-0 ' key={index} >
                                                            <Image src={categories_data.cat_img} alt={categories_data.img_alt} title={categories_data.img_alt} width={80} height={80} className='group-hover:rotate-12 transition-all min-w-[80px] block rounded-full max-w-full mx-auto' />
                                                            <p className='text-sm mb-2 text-black group-hover:text-violet-900 font-montserrat font-[600] mt-3 uppercase text-center'>{categories_data.label}</p>
                                                        </Link>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                        <div className='2xl:w-[23%] lg:w-2/6 w-full flex lg:flex-col flex-wrap'>
                                            {data.hero_products && data.hero_products.map((products, index) => {
                                                return (
                                                    <div className="border border-gray-400/20 border-t-0 p-3.5 flex items-center bg-white lg:w-full sm:w-1/2 w-full group" key={index}>
                                                        <div className='sm:w-2/5 overflow-hidden'>
                                                            <Link href={products.pro_link}>
                                                                <Image src={products.pro_img} alt={products.img_alt} title={products.img_alt} width={135} height={135} className='group-hover:scale-105 transition-all' />
                                                            </Link>
                                                        </div>
                                                        <div className="ltr:pl-3 rtl:pr-3 w-3/5">
                                                            <Link href={products.pro_link}>
                                                                <h2 className='1xl:text-lg sm:text-[17px] text-sm sm:mb-2 mb-1.5 capitalize leading-tight text-black group-hover:text-violet-900 font-montserrat font-bold'>{products.pro_name}</h2>
                                                            </Link>
                                                            <p className='text-sm sm:mb-2 mb-1.5 text-black font-montserrat font-[500]'>{products.product_price}</p>
                                                            <Link href={products.pro_link} className="text-sm text-black font-montserrat font-semibold underline flex items-center group gap-1 underline-offset-2">{products.product_btn}
                                                                <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className='fill-black group-hover:translate-x-2  rtl:group-hover:-translate-x-2 transition-all rtl:rotate-180 w-4 h-4'>
                                                                    <path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z" />
                                                                </svg></Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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

export default Hero_h4;
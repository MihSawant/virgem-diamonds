import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Blog_h4 = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
        {isLoading ? (
            <div className="relative 2xl:py-20 lg:py-14 py-12">
            <div className="relative container">
                <div className='border-b border-gray-400/20 md:mb-8 mb-4'>
                    <h2 className="text-gray-800 2xl:mb-6 md:mb-6 mb-2  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right max-w-[70%] font-catchye">Latest Blog & News</h2>
                </div>
                <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                    <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-16 md:!bottom-14 !bottom-7 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180 swiper-button-disabled">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white rotate-180'>
                            <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                        </svg>

                    </div>
                    <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-16 md:!bottom-14 !bottom-7 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white'>
                            <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                        </svg>
                    </div>
                </div>
                <Swiper spaceBetween={20}
                    navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        1170: {
                            slidesPerView: 3,
                        }
                    }}
                    modules={[Navigation]} className="category_slider" dir='ltr'>
                        <SwiperSlide className="pb-5">
                            <div className="relative flex flex-wrap items-center w-full h-full text-left">
                                <div className=" w-full">
                                    <Skeleton className='lg:h-[380px] sm:h-[320px] h-[260px] w-full rounded' />
                                </div>
                                <div className=" 2xl:w-[85%] w-[90%] mx-auto md:-mt-20 -mt-16 shadow-md xl:p-6 p-4 bg-white z-10" >
                                <Skeleton className='h-5 w-32 rounded' />
                                <Skeleton className='h-7 w-full rounded sm:my-2.5 my-2 xl:my-3' />
                                <Skeleton className='h-14 w-full rounded sm:mb-3.5 mb-2 ' />
                                <Skeleton className='h-5 w-32 rounded' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="pb-5" >
                                <div className="relative flex flex-wrap items-center w-full h-full text-left">
                                    <div className=" w-full">
                                        <Skeleton className='lg:h-[380px] sm:h-[320px] h-[260px] w-full rounded' />
                                    </div>
                                    <div className=" 2xl:w-[85%] w-[90%] mx-auto md:-mt-20 -mt-16 shadow-md xl:p-6 p-4 bg-white z-10" >
                                    <Skeleton className='h-5 w-32 rounded' />
                                    <Skeleton className='h-7 w-full rounded sm:my-2.5 my-2 xl:my-3' />
                                    <Skeleton className='h-14 w-full rounded sm:mb-3.5 mb-2 ' />
                                    <Skeleton className='h-5 w-32 rounded' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="pb-5">
                                <div className="relative flex flex-wrap items-center w-full h-full text-left">
                                    <div className=" w-full">
                                        <Skeleton className='lg:h-[380px] sm:h-[320px] h-[260px] w-full rounded' />
                                    </div>
                                    <div className=" 2xl:w-[85%] w-[90%] mx-auto md:-mt-20 -mt-16 shadow-md xl:p-6 p-4 bg-white z-10" >
                                    <Skeleton className='h-5 w-32 rounded' />
                                    <Skeleton className='h-7 w-full rounded sm:my-2.5 my-2 xl:my-3' />
                                    <Skeleton className='h-14 w-full rounded sm:mb-3.5 mb-2 ' />
                                    <Skeleton className='h-5 w-32 rounded' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="pb-5">
                                <div className="relative flex flex-wrap items-center w-full h-full text-left">
                                    <div className=" w-full">
                                        <Skeleton className='lg:h-[380px] sm:h-[320px] h-[260px] w-full rounded' />
                                    </div>
                                    <div className=" 2xl:w-[85%] w-[90%] mx-auto md:-mt-20 -mt-16 shadow-md xl:p-6 p-4 bg-white z-10" >
                                    <Skeleton className='h-5 w-32 rounded' />
                                    <Skeleton className='h-7 w-full rounded sm:my-2.5 my-2 xl:my-3' />
                                    <Skeleton className='h-14 w-full rounded sm:mb-3.5 mb-2 ' />
                                    <Skeleton className='h-5 w-32 rounded' />
                                    </div>
                                </div>
                            </SwiperSlide>
                </Swiper>
                <div className='flex items-center justify-center lg:mt-8 mt-4'>
                    <Link className="all-btn rounded justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4" href="/blog">View All BLog
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2 transition-all"><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
        ) : (
            <div className="relative 2xl:py-20 lg:py-14 py-12">
            <div className="relative container">
                <div className='border-b border-gray-400/20 md:mb-8 mb-4'>
                    <h2 className="text-gray-800 2xl:mb-6 md:mb-6 mb-2  lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight ltr:text-left rtl:text-right max-w-[70%] font-catchye">Latest Blog & News</h2>
                </div>
                <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                    <div className="arrow-right swiper-button-prev border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-16 md:!bottom-14 !bottom-7 ltr:1xl:!right-16 ltr:!right-12 ltr:!left-auto rtl:!left-0 rtl:!right-auto !top-auto rotate-180 swiper-button-disabled">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white rotate-180'>
                            <path d="M6.01993 13L7.08094 11.939L2.88204 7.73256L16 7.73256V6.22758L2.88204 6.22758L7.08094 2.02116L6.01993 0.960149L0 6.98007L6.01993 13Z" />
                        </svg>

                    </div>
                    <div className="arrow-left md:!absolute swiper-button-next border-[1.5px] border-black hover:bg-violet-900 hover:border-violet-900 group  !mt-0 after:!hidden !text-black !text-md bg-white rounded-full !w-[35px] !h-[35px] lg:!w-[42px] lg:!h-[42px] flex items-center justify-center 2xl:!bottom-16 md:!bottom-14 !bottom-7 ltr:!right-0 rtl:1xl:!left-16 rtl:!left-12 ltr:!left-auto rtl:!right-auto !top-auto ">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-black lg:!w-5 !w-4 group-hover:fill-white'>
                            <path d="M9.98007 0L8.91906 1.06101L13.118 5.26744H0V6.77242H13.118L8.91906 10.9788L9.98007 12.0399L16 6.01993L9.98007 0Z" />
                        </svg>
                    </div>
                </div>
                <Swiper spaceBetween={20}
                    navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        1170: {
                            slidesPerView: 3,
                        }
                    }}
                    modules={[Navigation]} className="category_slider" dir='ltr'>
                    {initialValues && initialValues.map((blog, index) => {
                        return (
                            <SwiperSlide className="pb-5" key={index} dir='ltr'>
                                <div className="relative flex flex-wrap items-center w-full h-full text-left group">
                                    <div className=" w-full">
                                        <Link href={blog.slug}>
                                            <Image src={blog.blog_img} alt={blog.blog_alt} title={blog.blog_alt} width={500} height={450} className="lg:h-[380px] sm:h-[320px] h-[260px] object-cover w-full transition-all group-hover:grayscale" />
                                        </Link>
                                    </div>
                                    <div className=" 2xl:w-[85%] w-[90%] mx-auto md:-mt-20 -mt-16 shadow-md xl:p-6 p-4 bg-white z-10 group-hover:shadow-lg transition-all" >
                                        <p className='2xl:text-md text-sm font-semibold uppercase text-gray-400 font-montserrat'>{blog.published_date}</p>
                                        <Link href={blog.slug}><h3 className="text-black group-hover:text-violet-900 font-[600] capitalize 2xl:text-[20px] lg:text-[19px] sm:text-lg text-md leading-tight font-montserrat sm:my-2.5 my-2 xl:my-3">{blog.title}</h3></Link>
                                        <p className="sm:mb-3.5 mb-2 font-montserrat 2xl:text-lg sm:text-md text-sm text-gray-800 leading-normal ">{blog.short_des}</p>
                                        <Link className="text-black underline underline-offset-[3px] font-[600] sm:text-md text-sm font-montserrat inline-flex items-center gap-0 group-hover:gap-3 transition-all " href={blog.slug}>{blog.btn_label} <Image src={blog.btn_icon_img} width={14} height={14} alt={blog.btn_img_alt} title={blog.btn_img_alt} className="ml-1 inline-block relative white-img " /></Link>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='flex items-center justify-center lg:mt-8 mt-4'>
                    <Link className="all-btn rounded justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4" href="/blog">View All BLog
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2 transition-all"><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
        )}
        </>
    
    )
}

export default Blog_h4;
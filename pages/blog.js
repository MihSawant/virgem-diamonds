import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { Pagination, Skeleton } from '@nextui-org/react';

export default function LatestBlog() {
  const breadcrumbItems = [
    { title: 'Latest Blog', url: ``, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data } = useFetchData("json/data/blog_data.json");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      {isLoading ? (
        <div className='2xl:py-28 xl:py-20 md:py-12 py-8 container'>
          <div className='lg:w-[40%] inline-block 1xl:pt-10 lg:mb-0 mb-6'>
            <Skeleton className='md:my-4 my-2 w-full h-16 rounded' />
            <Skeleton className='lg:my-4 w-full h-14 rounded' />
          </div>
          <div className='grid sm:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-4 2xl:gap-y-24 lg:gap-y-12 gap-y-6 items-start 2xl:-mt-52 lg:-mt-40 xl:pb-80 lg:pb-44'>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
            <div className="relative group flex flex-wrap items-center w-full bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44">
              <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                <Skeleton className='w-full h-12 mb-3 xl:mb-4 rounded' />
                <Skeleton className='w-full h-36 mb-5 rounded' />
                <Skeleton className='w-24 h-7 rounded' />
              </div>
              <div className="lg:w-1/2 w-full lg:order-2 order-1">
                <Skeleton className=' w-full lg:h-[450px] sm:h-[320px] h-[260px]' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='2xl:py-28 xl:py-20 md:py-12 py-8 container'>
          <div className='lg:w-[40%] inline-block 1xl:pt-10 lg:mb-0 mb-6'>
            <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase md:my-4 my-2 leading-tight text-gray-800 ltr:lg:text-left rtl:lg:text-right text-center">Latest Blog & Articles</h1>
            <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 ltr:lg:text-left rtl:lg:text-right text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {data && data.map((blogs, index) => {
            return (
              <div className='grid sm:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-4 2xl:gap-y-24 lg:gap-y-12 gap-y-6 items-start 2xl:-mt-52 lg:-mt-40 xl:pb-80 lg:pb-44' key={index}>
                {blogs.blogs && blogs.blogs.map((item, index) => {
                  return (
                    <div className="relative group flex flex-wrap items-center w-full  bg-violet-400 ltr:text-left rtl:text-right 2xl:odd:mt-80 xl:odd:mt-60 lg:odd:mt-44 2xl:odd:-mb-80 xl:odd:-mb-60 lg:odd:-mb-44" key={index}>
                      <div className="lg:w-1/2 w-full xl:p-12 md:p-8 sm:p-6 p-4 lg:order-1 order-2" >
                        <Link href={item.slug}><h3 className="text-gray-800 2xl:text-3xl  md:text-xl text-[24px] uppercase leading-tight mb-3 xl:mb-4">{item.title}</h3></Link>
                        <p className="mb-5 2xl:text-lg lg:text-[17px] text-md text-gray-800 md:leading-7 ">{item.short_des}</p>
                        <Link className="text-gray-800 text-lg uppercase inline-flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={item.slug}>{item.btn_label} <Image src={item.btn_icon_img} width={14} height={14} alt={item.btn_img_alt} title={item.btn_img_alt} className="ltr:ml-1 inline-block relative white-img rtl:mr-1.5 rtl:rotate-180" /></Link>
                      </div>
                      <div className="lg:w-1/2 w-full lg:order-2 order-1">
                        <Link href={item.slug}>
                          <Image src={item.blog_img} alt={item.blog_alt} title={item.blog_alt} width={500} height={500} className="lg:h-[450px] sm:h-[320px] h-[260px] object-cover w-full group-hover:grayscale transition-all" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
          <Pagination isCompact showControls total={4} initialPage={1} dir='ltr'
            classNames={{
              base: "lg:mt-12 mt-6 z-10 relative",
              wrapper: "2xl:gap-2 md:gap-1 gap-0 overflow-visible h-8 rounded-full border-0 shadow-none mx-auto",
              item: "2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md text-black font-[600] !rounded-full bg-transparent",
              cursor: "bg-violet-900 rounded-full 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md  text-white font-[600]",
              prev: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full",
              next: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full"
            }} />
        </div>
      )}

      <Footer_h3 />
    </>
  )
}




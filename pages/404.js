import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import React, { useEffect, useState } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { CheckboxGroup } from '@nextui-org/react';

export default function Cart() {
  const breadcrumbItems = [
    { title: 'Cart', url: ``, type: false },
  ];
  const router = useRouter()
  const { data } = useFetchData("json/data/cart_data.json");



  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-20 xl:py-16 py-12 container max-w-[800px]'>
        <div className='flex items-end md:gap-6 gap-3 justify-center'>
          <span className='2xl:text-[350px] lg:text-[280px] md:text-[220px] text-[150px] text-gray-800 font-semibold leading-[1]'>4</span>
          <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/404-ring.png' alt='404' title='404' width={200} height={320} className='2xl:w-48 lg:w-40 md:w-32 w-24' />
          <span className='2xl:text-[350px] lg:text-[280px] md:text-[220px] text-[150px] text-gray-800 font-semibold leading-[1]'>4</span>
        </div>
        <h1 className='2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px]  md:my-8 my-5 leading-tight text-gray-800 text-center'>That Page Can’t Be Found.</h1>
        <p className='md:text-lg text-md text-gray-900 text-center md:my-8 my-5 '>Sorry People , this page doesn’t exist.</p>
        <div className='flex items-center justify-center '>
        <Link className="all-btn flex items-center gap-3" href='/'>
            <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-0 rotate-180 lg:w-8 w-6">
              <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
            </svg>
            Back to Home
          </Link>
          </div>
      </div>

      <Footer_h3 />
    </>
  )
}




import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react';


function Footer_Intro() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  /* ================ Loop Functions end ==================*/

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className='bg-violet-900 2xl:py-24 lg:py-12 py-8'>
      <div className='container'>
        <h2 className='2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-white text-center mx-auto lg:mb-6 mb-4 leading-tight lg:mt-0 mt-6 lg:w-[70%]'>multiple jewellery website template</h2>
        <p className='2xl:text-lg lg:text-[17px] text-md  xl:mb-4 leading-7 text-white font-[300] text-center mx-auto lg:w-[50%]'>Lorem ipsum dolor sit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
        <Link className="relative flex items-center all-btn text-gray-900 hover:text-white bg-white capitalize px-8 lg:text-lg lg:mt-12 mt-3 font-semibold justify-center w-max mx-auto group" tabIndex="0" role="link" href="#">
          Purchase now
          <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
            <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-[1.5px] stroke-gray-900 group-hover:stroke-white fill-none"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Footer_Intro
import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';

export default function Engagement() {
  const breadcrumbItems = [
    { title: 'Thank you', url: ``, type: false },
  ];
  const router = useRouter()
  const { data } = useFetchData("json/data/wishlist_data.json");

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
      <div className='2xl:py-16 lg:py-12 py-8 container max-w-[1400px]'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] capitalize text-center xl:mb-4 mb-2 leading-tight text-gray-800">Thank you for order</h1>
        <p className=' lg:text-lg text-md text-gray-800 text-center'>your order has been received. </p>
        <div className='border border-violet-400 xl:mt-12 md:mt-8 mt-6'>
          <h2 className='bg-violet-400 px-3 xl:px-6 py-2.5 text-[20px] text-gray-900'>Thank you, your order has been received.</h2>
          <div className='flex md:flex-nowrap flex-wrap sm:divide-x divide-y divide-violet-400'>
            <div className='xl:py-6 md:py-4 py-3 xl:px-6 px-2.5 xl:w-1/4 sm:w-1/2 w-full'>
              <p className='lg:text-lg text-md text-gray-800 '>Order Number : <b className='block font-semibold'>180</b></p>
            </div>
            <div className='xl:py-6 md:py-4 py-3 xl:px-6 px-2.5 xl:w-1/4 sm:w-1/2 w-full'>
              <p className='lg:text-lg text-md text-gray-800 '>Date : <b className='block font-semibold'>20 oct, 2023</b></p>
            </div>
            <div className='xl:py-6 md:py-4 py-3 xl:px-6 px-2.5 xl:w-1/4 sm:w-1/2 w-full'>
              <p className='lg:text-lg text-md text-gray-800 '>Total : <b className='block font-semibold'>$2036.00</b></p>
            </div>
            <div className='xl:py-6 md:py-4 py-3 xl:px-6 px-2.5 xl:w-1/4 sm:w-1/2 w-full'>
              <p className='lg:text-lg text-md text-gray-800 '>Email : <b className='block font-semibold'><Link href='emailto:info@cherryblossom22.com' className='hover:text-violet-900'>info@cherryblossom22.com</Link></b></p>
            </div>
          </div>
        </div>
        <div className='flex gap-3.5 md:flex-nowrap flex-wrap xl:my-8 md:my-6 my-4'>
          <div className='border border-violet-400 md:w-1/2 w-full'>
            <h2 className='bg-violet-400 px-3 xl:px-6 py-2.5 text-[20px] text-gray-900'>Order Detail</h2>
            <div className='border-b border-violet-400 '>
              <div className='flex lg:text-lg text-md text-gray-800'>
                <p className='border-r border-violet-400 w-2/3 px-3 xl:px-6 pb-2 pt-4'>Product</p>
                <p className='border-violet-400 w-1/3 px-3 xl:px-6 pb-2 pt-4'> Price :</p>
              </div>
              <div className='flex lg:text-lg text-md text-gray-800'>
                <p className='border-r border-violet-400 w-2/3 px-3 xl:px-6 py-2 font-semibold'>Stylist Diamonds Earring</p>
                <p className='w-1/3 px-3 xl:px-6 py-2 font-semibold'>$589.00</p>
              </div>
              <div className='flex lg:text-lg text-md text-gray-800'>
                <p className='border-r border-violet-400 w-2/3 px-3 xl:px-6 py-2 font-semibold'>Purple Gemstone Hot Wedding Ring</p>
                <p className='w-1/3 px-3 xl:px-6 py-2 font-semibold'>$536.00</p>
              </div>
              <div className='flex lg:text-lg text-md text-gray-800'>
                <p className=' border-r border-violet-400 w-2/3 px-3 xl:px-6 pt-2 pb-4 font-semibold'>Hottest Gold bracelet For Women</p>
                <p className='w-1/3 px-3 xl:px-6 pt-2 pb-4 font-semibold'>$889.00</p>
              </div>
              {/* <div className='px-3 xl:px-6 py-2.5 lg:text-lg text-md text-gray-800 lg:leading-10 leading-8 border-b border-r border-violet-400 w-2/3'>
                <p> Product
                  <b className='block font-semibold'>Stylist Diamonds Earring</b>
                  <b className='block font-semibold'>Purple Gemstone Hot Wedding Ring</b>
                  <b className='block font-semibold'>Hottest Gold bracelet For Women</b>
                </p>
              </div>
              <div className='px-3 xl:px-6 py-2.5 lg:text-lg text-md text-gray-800 lg:leading-10 leading-8 border-b border-violet-400 w-1/3'>
                <p> Price :
                  <b className='block font-semibold'>$589.00</b>
                  <b className='block font-semibold'>$536.00</b>
                  <b className='block font-semibold'>$889.00</b>
                </p>
              </div> */}
            </div>
            <div className='flex '>
              <div className='px-3 xl:px-6 py-2.5 lg:text-lg text-md text-gray-800 lg:leading-10 leading-8 border-r border-violet-400 w-2/3'>
                <p> Subtotal:<br /> total: </p>
              </div>
              <div className='px-3 xl:px-6 py-2.5 lg:text-lg text-md text-gray-800 lg:leading-10 leading-8 w-1/3'>
                <p>$2014.00<br /> $2036.00 </p>
              </div>
            </div>
          </div>
          <div className='border border-violet-400 md:w-1/2 w-full'>
            <h2 className='bg-violet-400 px-3 xl:px-6 py-2.5 text-[20px] text-gray-900'>Billing Address</h2>
           <div className=' px-3 xl:px-6 py-2.5'>
            <p className='lg:text-lg text-md text-gray-800 italic leading-8'>Cherry Blossom<br/>
              9057 Vermont Road<br/>
              Cockeysville<br/>
              Fuquay<br/>
              MD 21030<br/>
              Australia</p>
              <p className='lg:text-lg text-md text-gray-800 italic font-semibold mt-6'>Gmail:<Link href='emailto:cherryblossom20960@gmail.com' className='font-normal break-words'>cherryblossom20960@gmail.com</Link></p>
              </div>
          </div>
        </div>
      </div>
      <Footer_h3 />
    </>
  )
}




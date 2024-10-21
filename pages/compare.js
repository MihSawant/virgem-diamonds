import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import React, { useEffect, useState } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages } from '../src/comman';
import Link from 'next/link';
import Image from 'next/image';

export default function Compare() {
  const breadcrumbItems = [
    { title: 'Compare', url: ``, type: false },
  ];

  const [compareData, setcompareData] = useState([]);

  const get_wishlist_data = () => {
    let comparelist_data = localStorage.getItem('Compare') ? JSON.parse(localStorage.getItem('Compare')) : [];
    console.log(comparelist_data)
    setcompareData(comparelist_data);
  }

  useEffect(() => {
    get_wishlist_data();
  }, [])

  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] text-center  md:my-4 my-2 leading-tight text-gray-800">Compare</h1>
        <p className='lg:text-lg text-md text-gray-800 max-w-[550px] mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='container 2xl:pb-24 lg:pb-16 pb-10 max-w-[1400px]'>

        <div className='sm:block hidden'>
          <table className='border-collapse border border-violet-400 w-full '>
            <tbody>
              <tr>
                <td className='xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden align-top' ><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Product</p></td>
                <td className='xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400'>
                  <div className='relative bg-violet-400 xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] w-full h-[250px] flex items-center justify-center'>
                    <span className="text-[12px] uppercase flex items-center px-3 py-1 justify-center bg-violet-900 text-white font-[600] absolute top-4 left-4">Viewed</span>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-4.png' alt='Lumiere Ring' title='Lumiere Ring' width={200} height={200} className='max-w-full' />
                    <button className="md:w-9 md:h-9 w-8 h-8 bg-white hover:bg-violet-900 group rounded-full  z-[2] absolute md:right-5 right-2 top-4 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-white stroke-black'>
                        <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className='xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400'>
                  <div className='relative bg-violet-400 xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] w-full h-[250px]  flex items-center justify-center'>
                    <span className="text-[12px] uppercase flex items-center px-3 py-1 justify-center bg-violet-900 text-white font-[600] absolute top-4 left-4">New</span>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/shop/shop-pro-1.png' alt='Lumiere Ring' title='Lumiere Ring' width={200} height={200} className='max-w-full' />
                    <button className="md:w-9 md:h-9 w-8 h-8 bg-white hover:bg-violet-900 group rounded-full  z-[2] absolute md:right-5 right-2 top-4 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-white stroke-black'>
                        <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className='bg-violet-400 xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Product Name</p></td>
                <td className='bg-violet-400 xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Lumiere Ring</p></td>
                <td className='bg-violet-400 xl:py-3 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Diamonds Earring</p></td>
              </tr>

              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Review</p></td>
                <td className=' xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'>
                  <div className="flex item-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                    </svg>
                  </div>
                </td>
                <td className=' xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'>
                  <div className="flex item-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                    </svg>
                  </div>
                </td>
              </tr>

              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Price</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>$790.00</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>$589.00</p></td>
              </tr>

              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Clarity</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400 '><p className='text-lg text-gray-900 font-normal'>VVS1</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>F1</p></td>
              </tr>

              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Carat</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>0.50 - 0.59</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>1.00 - 1.49</p></td>
              </tr>
              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Metal</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>Rose Gold</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>Titanium</p></td>
              </tr>
              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Shape</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>Round</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>Pear </p></td>
              </tr>
              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'><p className='text-lg text-gray-900 font-normal'>Discount </p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>-20% Off</p></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><p className='text-lg text-gray-900 font-normal'>-08% Off</p></td>
              </tr>
              <tr>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400  sm:table-cell hidden'></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><Link href='/cart' className='all-btn'>Add To Cart</Link></td>
                <td className='xl:py-4 py-2 xl:px-6 px-2.5 border border-violet-400'><Link href='/cart' className='all-btn'>Add To Cart</Link></td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className='sm:hidden block'>
          <div className='flex flex-col gap-6'>
            <div className='border border-violet-400'>
              <div className='flex items-start border-b border-violet-400'>
                <p className='font-nabi xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5  '>Product</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'>
                  <div className='relative bg-violet-400 xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] w-full h-[250px] flex items-center justify-center '>
                    <span className="text-[12px] uppercase flex items-center px-3 py-1 justify-center bg-violet-900 text-white font-[600] absolute top-4 left-4">Viewed</span>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/single-product/product-thumb-4.png' alt='Lumiere Ring' title='Lumiere Ring' width={200} height={200} className='max-w-full' />
                    <button className="md:w-9 md:h-9 w-8 h-8 bg-white hover:bg-violet-900 group rounded-full  z-[2] absolute md:right-5 right-2 top-4 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-white stroke-black'>
                        <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='font-nabi xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Product Name</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Lumiere Ring</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Review</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'>
                  <div className="flex item-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Price</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>$790.00</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Clarity</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>VVS1</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Carat</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>0.50 - 0.59</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Metal</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>Rose Gold</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Shape</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>Round</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Discount</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>-20% Off</p></div>
              </div>

              <div className='flex items-start '>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '></p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><Link href='/cart' className='all-btn'>Add To Cart</Link></div>
              </div>
            </div>
            <div className='border border-violet-400'>
              <div className='flex items-start border-b border-violet-400'>
                <p className='font-nabi xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5  '>Product</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'>
                  <div className='relative bg-violet-400 xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] w-full h-[250px] flex items-center justify-center '>
                    <span className="text-[12px] uppercase flex items-center px-3 py-1 justify-center bg-violet-900 text-white font-[600] absolute top-4 left-4">Viewed</span>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/shop/shop-pro-1.png' alt='Lumiere Ring' title='Lumiere Ring' width={200} height={200} className='max-w-full' />
                    <button className="md:w-9 md:h-9 w-8 h-8 bg-white hover:bg-violet-900 group rounded-full  z-[2] absolute md:right-5 right-2 top-4 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-white stroke-black'>
                        <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='font-nabi xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Product Name</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='font-nabi xl:text-[20px] text-lg text-gray-900 font-normal'>Diamonds Earring</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Review</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'>
                  <div className="flex item-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Price</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>$589.00</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Clarity</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>F1</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Carat</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>1.00 - 1.49</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Metal</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>Titanium</p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Shape</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>pear </p></div>
              </div>

              <div className='flex items-start border-b border-violet-400'>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '>Discount</p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><p className='sm:text-lg text-md text-gray-900 font-normal'>-08% off</p></div>
              </div>

              <div className='flex items-start '>
                <p className='xl:text-[20px] sm:text-lg text-md text-gray-900 font-normal w-2/5 py-2 px-2.5 '></p>
                <div className='w-3/5 py-2 px-2.5 ltr:border-l rtl:border-r border-violet-400'><Link href='/cart' className='all-btn'>Add To Cart</Link></div>
              </div>
            </div>

          </div>
        </div>


      </div>

      <Footer_h3 />
    </>
  )
}




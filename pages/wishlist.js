import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import React, { useEffect, useState } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from "@nextui-org/react";

export default function Engagement() {
  const breadcrumbItems = [
    { title: 'Wishlist', url: ``, type: false },
  ];
  // const { data } = useFetchData("json/data/wishlist_data.json");
  const [wishData, setwishData] = useState([]);

  const get_wishlist_data = () => {
    let wishlist_data = localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : [];
    setwishData(wishlist_data);
  }

  const clear_wishlist = () => {
    localStorage.setItem('wishList', []);
    window.location.reload();
  }

  useEffect(() => {
    get_wishlist_data();
  }, [])


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      <div className='container 2xl:py-24 lg:py-16 py-10'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase ltr:lg:text-left rtl:lg:text-right text-center leading-tight text-gray-800 mb-6">Wishlist</h1>
        <div className="grid 1xl:grid-cols-5 lg:grid-cols-3 min-[420px]:grid-cols-2 grid-cols-1 md:gap-6 gap-3 " >
          {wishData && wishData.map((product, index) => {
            return (
              <ProductsWithColors initialValues={product} key={index} />
            )
          })}
        </div>
        <div className='flex items-center gap-3 justify-end mt-8 pt-8 border-t border-gray-100/20'>
          <button onClick={() => clear_wishlist()} className='all-btn bg-white border border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white font-medium'>Remove all</button>
          <Link href='#' className='all-btn'>Add To Cart All</Link>
        </div>
      </div>

      <Footer_h3 />
    </>
  )
}


const ProductsWithColors = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  let top_badge = null;
  if (initialValues.badge) {
    top_badge = (
      <span className="text-[12px] uppercase flex items-center px-3 py-1 justify-center bg-violet-900 text-white font-[600] absolute top-4 left-4">{initialValues.badge}</span>
    )
  }

  let shipped_badge = null;
  if (initialValues.shipped) {
    shipped_badge = (
      <span className="absolute top-2 left-4">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.857 23.0887H20.3281C20.5718 23.0887 20.8055 22.9919 20.9778 22.8196C21.1501 22.6473 21.2469 22.4137 21.2469 22.17L24.4461 10.4559C24.4461 10.3343 24.422 10.214 24.3751 10.1018C24.3283 9.9896 24.2596 9.88783 24.1731 9.80237C24.0867 9.71691 23.9841 9.64947 23.8714 9.60395C23.7586 9.55842 23.638 9.53573 23.5164 9.53717H9.63125C9.38708 9.53717 9.15282 9.63379 8.97965 9.80593C8.80649 9.97808 8.70848 10.2118 8.70703 10.4559L5.97266 22.17C5.97266 22.4137 6.06945 22.6473 6.24175 22.8196C6.41405 22.9919 6.64774 23.0887 6.89141 23.0887H8.08359" stroke="#805A81" strokeWidth="1.64062" />
          <path d="M22.7824 23.0893H20.8848L23.6191 13.6338H28.1145C28.1821 13.6336 28.2489 13.6482 28.3103 13.6766C28.3717 13.7049 28.4262 13.7463 28.4699 13.7979L30.4277 17.2432C30.4979 17.3235 30.5367 17.4264 30.5371 17.533L28.716 23.0893H26.7473" stroke="#805A81" strokeWidth="1.64062" />
          <path d="M10.0143 25.7424C11.1348 25.7424 12.0432 24.8218 12.0432 23.6861C12.0432 22.5505 11.1348 21.6299 10.0143 21.6299C8.89372 21.6299 7.98535 22.5505 7.98535 23.6861C7.98535 24.8218 8.89372 25.7424 10.0143 25.7424Z" stroke="#805A81" strokeWidth="1.64062" />
          <path d="M24.8004 25.7424C25.9209 25.7424 26.8293 24.8218 26.8293 23.6861C26.8293 22.5505 25.9209 21.6299 24.8004 21.6299C23.6799 21.6299 22.7715 22.5505 22.7715 23.6861C22.7715 24.8218 23.6799 25.7424 24.8004 25.7424Z" stroke="#805A81" strokeWidth="1.64062" />
          <path d="M12.7127 12.2285H3.75488" stroke="#805A81" strokeWidth="1.64062" strokeLinecap="round" />
          <path d="M10.9475 15.0938H4.62012" stroke="#805A81" strokeWidth="1.64062" strokeLinecap="round" />
          <path d="M11.5896 18.3203H1.75684" stroke="#805A81" strokeWidth="1.64062" strokeLinecap="round" />
        </svg>

      </span>
    )
  }

  const remove_from_wishlist = (productId) => {
    const storedWishList = localStorage.getItem('wishList');
    const product_data = storedWishList ? JSON.parse(storedWishList) : [];
    const updatedWishList = product_data.filter((item) => item.id !== productId);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    window.location.reload();
  }

  return (

    <>
      {isLoading ? (
        <div className="relative product-box bg-white" >
          <div className="image-wrap">
            <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded" />
            <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
          </div>
          <div className="product-detail   relative ">
            <div className="flex items-center justify-center gap-3 my-3.5 2xl:my-6 ">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded mx-auto" />
            <Skeleton className="w-1/3  h-8 rounded mx-auto" />

          </div>
        </div >
      ) : (
        <>
          <div className=" relative filter-item " >
            <div className="relative group cursor-pointer transition-all md:pb-5 pb-3 h-full">
              <div className="relative product-box bg-white flex flex-col h-full">
                <div className="image-wrap overflow-hidden bg-violet-400  flex items-center justify-center w-full grow">
                  <Link href='/single-shop-v2' className='w-full block h-full' >
                    <Image src={initialValues.img} width={250} height={250} alt={initialValues.title} title={initialValues.title} className="transition-all w-full h-full object-cover scale-100 group-hover:scale-105" />
                  </Link>
                  {shipped_badge}
                  {top_badge}
                  <button onClick={() => remove_from_wishlist(initialValues.id)} className="md:w-10 md:h-10 w-8 h-8 bg-white group wishlist-pro rounded-full z-[2] absolute md:right-5 right-2 top-5 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-violet-900 stroke-gray-900'>
                      <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 6L18 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div>
                    <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist text-[0] wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute transition-all md:group-hover:top-[4.6rem] group-hover:top-[4.1rem] opacity-0 group-hover:opacity-100 md:right-5 right-2 top-5 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                        <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                        <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                      </svg>
                    </button>
                    <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist  text-[0] wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute delay-75 transition-all md:group-hover:top-32 group-hover:top-28  md:right-5 right-2 top-5  opacity-0 group-hover:opacity-100  flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 22 24" fill="none" className="md:w-[22px] w-[18px] stroke-[0.3] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 fill-gray-800">
                        <path d="M2.4375 12C2.43949 10.2601 3.13153 8.59209 4.3618 7.36181C5.59208 6.13153 7.26013 5.43949 9 5.43751H19.6416L18.3525 4.14751C18.2531 4.04088 18.199 3.89984 18.2016 3.75411C18.2042 3.60839 18.2632 3.46935 18.3663 3.36629C18.4693 3.26323 18.6084 3.2042 18.7541 3.20163C18.8998 3.19905 19.0409 3.25315 19.1475 3.35251L21.3975 5.60251C21.5028 5.70798 21.562 5.85094 21.562 6.00001C21.562 6.14907 21.5028 6.29204 21.3975 6.39751L19.1475 8.64751C19.0409 8.74687 18.8998 8.80096 18.7541 8.79839C18.6084 8.79582 18.4693 8.73678 18.3663 8.63372C18.2632 8.53066 18.2042 8.39162 18.2016 8.2459C18.199 8.10017 18.2531 7.95914 18.3525 7.85251L19.6416 6.56251H9C7.55842 6.56424 6.17638 7.13768 5.15702 8.15703C4.13767 9.17639 3.56424 10.5584 3.5625 12C3.5625 12.1492 3.50324 12.2923 3.39775 12.3978C3.29226 12.5032 3.14918 12.5625 3 12.5625C2.85082 12.5625 2.70774 12.5032 2.60225 12.3978C2.49676 12.2923 2.4375 12.1492 2.4375 12ZM21 11.4375C20.8508 11.4375 20.7077 11.4968 20.6023 11.6023C20.4968 11.7077 20.4375 11.8508 20.4375 12C20.4358 13.4416 19.8623 14.8236 18.843 15.843C17.8236 16.8623 16.4416 17.4358 15 17.4375H4.35844L5.6475 16.1475C5.74686 16.0409 5.80095 15.8998 5.79838 15.7541C5.79581 15.6084 5.73678 15.4694 5.63372 15.3663C5.53066 15.2632 5.39162 15.2042 5.24589 15.2016C5.10017 15.1991 4.95913 15.2531 4.8525 15.3525L2.6025 17.6025C2.49716 17.708 2.43799 17.8509 2.43799 18C2.43799 18.1491 2.49716 18.292 2.6025 18.3975L4.8525 20.6475C4.95913 20.7469 5.10017 20.801 5.24589 20.7984C5.39162 20.7958 5.53066 20.7368 5.63372 20.6337C5.73678 20.5307 5.79581 20.3916 5.79838 20.2459C5.80095 20.1002 5.74686 19.9591 5.6475 19.8525L4.35844 18.5625H15C16.7399 18.5605 18.4079 17.8685 19.6382 16.6382C20.8685 15.4079 21.5605 13.7399 21.5625 12C21.5625 11.8508 21.5032 11.7077 21.3977 11.6023C21.2923 11.4968 21.1492 11.4375 21 11.4375Z" />
                      </svg>
                    </button>
                  </div>
                </div >
                <div className="product-detail bg-white relative ">
                  <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center gap-3 my-3.5 2xl:my-6'>
                      <span className='w-5 h-5 rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#EFA71B] via-[#F2F2F2] to-[#EFA71B] '></span>
                      <span className='w-5 h-5 rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#727472] via-[#D6D6D6] to-[#727472] '></span>
                      <span className='w-5 h-5 rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#E3C2C2] via-[#F2F2F2] to-[#E3C2C2] '></span>
                    </div>
                  </div>
                  <Link href='/single-shop-v2' className="text-[20px] capitalize lg:text-[22px] 2xl:text-[24px] text-gray-800 group-hover:text-violet-900 mb-2 2xl:mb-3 leading-tight font-[nabi] text-center block" >{initialValues.title}</Link>
                  <p className="block 2xl:text-[20px] text-gray-900 lg:text-[17px] text-md text-center">$ {initialValues.price}</p>
                </div>
              </div >
            </div >
          </div >
        </>
      )}

    </>
  )
}
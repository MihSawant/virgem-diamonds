import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import Best_seller from '../../comman/Best_seller'

const ProductGrid_InsideBox = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="hero-sec mb-8 lg:mb-0">
          <div className="">
            <div className="relative lg:pt-20 2xl:pt-24 pt-14">
              <div className="container">
                <div className="flex items-center justify-between mb-5 flex-wrap">
                  <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800">Best Seller</h2>
                  <Link href="/shop" className="all-btn">View Products</Link>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                  <div className="relative block group" >
                    <button className="w-10 h-10 bg-white z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                      <Skeleton className="flex h-6 w-6 rounded-full " />
                    </button>
                    <Skeleton className="flex w-full h-[350px] 2xl:h-[450px] rounded-md" />
                    <div className="2xl:p-6 p-4 absolute bottom-0 left-0 w-full">
                      <div className="bg-white px-2 xl:px-4 py-4 2xl:py-6 rounded-lg">
                        <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                        <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                      </div>
                    </div>
                  </div>

                  <div className="relative block group" >
                    <button className="w-10 h-10 bg-white z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                      <Skeleton className="flex h-6 w-6 rounded-full " />
                    </button>
                    <Skeleton className="flex w-full h-[350px] 2xl:h-[450px] rounded-md" />
                    <div className="2xl:p-6 p-4 absolute bottom-0 left-0 w-full">
                      <div className="bg-white px-2 xl:px-4 py-4 2xl:py-6 rounded-lg">
                        <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                        <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                      </div>
                    </div>
                  </div>

                  <div className="relative block group" >
                    <button className="w-10 h-10 bg-white z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                      <Skeleton className="flex h-6 w-6 rounded-full " />
                    </button>
                    <Skeleton className="flex w-full h-[350px] 2xl:h-[450px] rounded-md" />
                    <div className="2xl:p-6 p-4 absolute bottom-0 left-0 w-full">
                      <div className="bg-white px-2 xl:px-4 py-4 2xl:py-6 rounded-lg">
                        <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                        <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                      </div>
                    </div>
                  </div>

                  <div className="relative block group" >
                    <button className="w-10 h-10 bg-white z-10 group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e)}>
                      <Skeleton className="flex h-6 w-6 rounded-full " />
                    </button>
                    <Skeleton className="flex w-full h-[350px] 2xl:h-[450px] rounded-md" />
                    <div className="2xl:p-6 p-4 absolute bottom-0 left-0 w-full">
                      <div className="bg-white px-2 xl:px-4 py-4 2xl:py-6 rounded-lg">
                        <Skeleton className="w-full h-10 mb-2 2xl:mb-3 rounded-md" />
                        <Skeleton className="w-24 h-8 rounded-md mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="hero-sec mb-8 lg:mb-0">
            <div className="">
              <div className="relative lg:pt-20 2xl:pt-24 pt-14">
                <div className="container">
                  <div className="flex items-center justify-between mb-5 flex-wrap">
                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800">Best Seller</h2>
                    <Link href="/shop" className="all-btn">View Products</Link>
                  </div>
                  <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                    {initialValues && initialValues.map((data, index) => {
                      return (
                        <Best_seller data={data} key={index} />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductGrid_InsideBox;
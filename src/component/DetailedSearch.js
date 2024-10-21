import React, { useRef, useEffect, useState } from 'react';
import { useFetchData } from '../comman';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react';


function SearchDetailed() {
  const { data } = useFetchData("json/data/SearchDetailed_data.json");

  //Toggle Searchbar:
  const toggleCss = () => {
    const toggle_class = document.getElementById('toggleSearch').className;
    const add_class = toggle_class === 'ltr:ml-auto rtl:mr-auto inline-block font-light flex items-center justify-center group text-white text-[0] lg:text-sm uppercase hover:opacity-60 active' ? 'ltr:ml-auto rtl:mr-auto inline-block font-light flex items-center justify-center group text-white text-[0] lg:text-sm uppercase hover:opacity-60' : 'ltr:ml-auto rtl:mr-auto inline-block font-light flex items-center justify-center group text-white text-[0] lg:text-sm uppercase hover:opacity-60 active'
    document.getElementById('toggleSearch').className = add_class
    const old_class = document.getElementById('searchCategory').className;
    const new_class = old_class === 'fixed top-0 opacity-100 left-0 bg-white w-full z-20 transition-all' ? 'fixed -top-[150%] opacity-0 left-0 bg-white w-full z-20 transition-all' : 'fixed top-0 opacity-100 left-0 bg-white w-full z-20 transition-all'
    document.getElementById('searchCategory').className = new_class
  }

  return (
    <div className=" flex justify-between grow  ltr:mr-1 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 ltr:lg:mr-4 rtl:lg:ml-4 ">
      <button className="ltr:ml-auto rtl:mr-auto  font-light flex items-center justify-center group text-white text-[0] lg:text-sm uppercase hover:opacity-60 " onClick={() => toggleCss()} aria-label="Close" id="toggleSearch">
        <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg" width={20} height={20} alt="main-logo" title="main-logo" className="rtl:sm:ml-1 sm:mr-1.5 header-icons block brightness-[200] 2xl:w-5" />
        Search
      </button>

      <div className="fixed -top-[150%] opacity-0 left-0 bg-white w-full z-20 transition-all" id="searchCategory">
        {data && data.map((Data, index) => {
          return (
            <div className="container" key={index}>
              {Data.searchbar && Data.searchbar.map((item, index) => {
                return (
                  <div className="2xl:py-12 lg:py-8 py-6 flex items-center  border-b border-gray-300 flex-wrap relative" key={index}>
                    <div className="md:w-1/4 w-full md:px-0 px-3">
                      <Link href={item.slug}>
                        <Image src={item.logo_img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img md:w-[260px] md:mx-0 mx-auto w-[210px]" />
                      </Link>
                    </div>
                    <div className="md:w-3/4 w-full ltr:lg:pl-12 rtl:lg:pr-12 ltr:md:pl-8 rtl:md:pr-8 md:mt-0 sm:mt-10 mt-6 flex items-center">
                      <div className="searchbar flex items-center justify-center md:max-w-none max-w-[260px] mx-auto grow">
                        <Image src={item.search_icon} width={26} height={26} alt={item.alt} title="search" className="lg:mr-0 ltr:mr-3.5 rtl:ml-3.5" />
                        <input type="text" placeholder={item.search_placeholder} className="focus:outline-none md:text-lg text-md lg:px-2 lg:py-0 placeholder:text-gray-400 grow font-normal text-gray-800 w-full bg-transparent border-none rounded-none" />
                      </div>
                      <Button onClick={() => toggleCss()} aria-label="Close" id="toggleSearch" className="md:static absolute 2xl:top-12 lg:top-8 top-3 sm:right-0 -right-2 bg-transparent p-0 w-auto min-w-0 h-auto">
                        <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg" className="md:w-7 w-6 stroke-2 stroke-black  white-img ">
                          <path d="M21.3008 7.09961L7.10156 21.2988" />
                          <path d="M7.10156 7.09961L21.3008 21.2988" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                )
              })}

              {Data.searchData && Data.searchData.map((child_items, index) => {
                return (
                  <div className="2xl:py-12 lg:py-8 py-6 flex flex-wrap lg:max-h-[89vh] max-h-[65vh] overflow-auto " key={index}>
                    {child_items.child_items && child_items.child_items.map((items, index) => {
                      return (
                        <div className="lg:w-1/5 w-1/2 lg:mb-0 mb-3" key={index}>
                          <p className="text-[15px] 2xl:text-md font-[700]  mb-5 text-gray-800 uppercase">{items.title}</p>
                          <ul className="">
                            {items.items && items.items.map((item, subIndex) => {
                              return (
                                <li key={subIndex} className="">
                                  <Link className="text-gray-400 hover:text-violet-900 text-[15px] 2xl:text-md my-3 block" href={item.nav_link}>
                                    {item.nav_item}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}

                    {child_items.search_product && child_items.search_product.map((items, index) => {
                      return (
                        <div className="lg:w-3/5 w-full 2xl:pl-12" key={index}>
                          <p className="text-[15px] 2xl:text-md font-[700] mb-5 text-gray-800 uppercase">{items.title}</p>
                          <div className="grid 1xl:grid-cols-3 grid-cols-2 sm:gap-6 gap-3">
                            {items.items && items.items.map((item, index) => {
                              return (
                                <div key={index} className="flex items-center sm:flex-nowrap flex-wrap gap-3 group">
                                  <Image src={item.pro_img} alt={item.img_alt} title={item.img_alt} width={76} height={76} className="w-[75px] h-[75px] object-cover" />
                                  <div className="sm:w-auto w-full">
                                    <Link href={item.link}><p className="sm:text-[15px] text-sm text-gray-900 group-hover:text-violet-900 font-[600]  leading-tight capitalize 2xl:pr-3">{item.pro_name}</p></Link>
                                    <p className="text-sm sm:mt-2 mt-1 text-black font-[500]">{item.pro_price}</p>
                                  </div>
                                </div>
                              )
                            })}
                            <div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchDetailed;
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Select, SelectItem, Skeleton } from '@nextui-org/react'
import { Pagination } from "@nextui-org/react";


const Categories_Collection = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:py-24 lg:py-16 py-12 overflow-hidden'>
          <div className='container relative'>
            <div className="flex gap-3 md:justify-between justify-center items-center lg:flex-nowrap flex-wrap w-full  relative">
              <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-left'>
                Our Collection
              </h2>
              <div className='flex items-center gap-3 md:w-auto w-full'>
                <Select radius='none' placeholder="Filter By"
                  classNames={{
                    trigger: "text-center text-lg h-auto lg:px-6 px-4 2xl:py-2.5 py-2 text-gray-800 border border-gray-200/20 bg-white data-[hover=true]:bg-gray-300 shadow-none bg-white md:min-w-[180px] flex-row items-center",
                    listbox: "max-h-[400px] !w-full",
                    innerWrapper: "w-full",
                    value: "xl:text-lg text-md !text-gray-800 opacity-100 ltr:text-left rtl:text-right ",
                    selectorIcon: "w-7 h-auto static inline-block",
                    base: " sm:grow-0 grow"
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-2xl ",
                      content: "p-0 border-small border-divide border-gray-100/20 text-lg rounded-none",
                    },
                  }}
                  listboxProps={{
                    itemClasses: {
                      title: [
                        "text-[16px] py-1",
                      ],
                    },
                  }}>
                  <SelectItem key='Diamond' value='Diamond' >Diamond</SelectItem>
                  <SelectItem key='Ring' value='Ring'>Ring</SelectItem>
                  <SelectItem key='Necklace' value='Necklace'>Necklace</SelectItem>
                </Select>
                <Select radius='none' placeholder="Short By"
                  classNames={{
                    trigger: "text-center text-lg h-auto lg:px-6 px-4 2xl:py-2.5 py-2 text-gray-800 border border-gray-200/20 bg-white data-[hover=true]:bg-gray-300 shadow-none bg-white md:min-w-[180px] flex-row items-center",
                    listbox: "max-h-[400px] !w-full",
                    innerWrapper: "w-full",
                    value: "xl:text-lg text-md !text-gray-800 opacity-100 ltr:text-left rtl:text-right ",
                    selectorIcon: "w-7 h-auto static inline-block",
                    base: " sm:grow-0 grow"
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-2xl ",
                      content: "p-0 border-small border-divide border-gray-100/20 text-lg rounded-none",
                    },
                  }}
                  listboxProps={{
                    itemClasses: {
                      title: [
                        "text-[16px] py-1",
                      ],
                    },
                  }} >
                  <SelectItem key='Date' value='Date' >Date</SelectItem>
                  <SelectItem key='Newest' value='Newest'>Newest</SelectItem>
                  <SelectItem key='Best Seller' value='Best Seller'>Best Seller</SelectItem>
                  <SelectItem key='Lowest' value='Lowest'>Lowest</SelectItem>
                  <SelectItem key='Newly added' value='Newly added'>Newly added</SelectItem>
                </Select>
              </div>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3.5 mt-8'>
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
              <div className="relative group"  >
                <Skeleton className='w-full md:h-[350px] sm:h-[210px] h-[200px]' />
                <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
              </div >
            </div>
            <div className='flex items-center justify-center w-full 2xl:mt-16 mt-8'>
              <Skeleton className='w-2/3 h-12 rounded mx-auto' />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='relative 2xl:py-24 lg:py-16 py-12 overflow-hidden'>
            <div className='container relative'>
              <div className="flex gap-3 md:justify-between justify-center items-center lg:flex-nowrap flex-wrap w-full  relative">
                <h2 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-left'>
                  Our Collection
                </h2>
                <div className='flex items-center gap-3 md:w-auto w-full'>
                  <Select radius='none' placeholder="Filter By"
                       classNames={{
                        trigger: "text-center text-lg h-auto lg:px-6 px-4 2xl:py-2.5 py-2 text-gray-800 border border-gray-200/20 bg-white data-[hover=true]:bg-gray-300 shadow-none bg-white md:min-w-[200px] flex-row items-center",
                        listbox: "max-h-[400px] !w-full",
                        innerWrapper: "w-full",
                        value: "xl:text-lg text-md !text-gray-800 opacity-100 ltr:text-left rtl:text-right ",
                        selectorIcon: "w-7 h-auto static inline-block",
                        base: " sm:grow-0 grow"
                    }}
                    popoverProps={{
                        classNames: {
                            base: " !w-full rounded-2xl ",
                            content: "p-0 border-small border-divide border-gray-100/20 text-lg rounded-none",
                        },
                    }}
                    listboxProps={{
                        itemClasses: {
                            title: [
                                "text-[16px] py-1",
                            ],
                        },
                    }}>
                    <SelectItem key='Diamond' value='Diamond' >Diamond</SelectItem>
                    <SelectItem key='Ring' value='Ring'>Ring</SelectItem>
                    <SelectItem key='Necklace' value='Necklace'>Necklace</SelectItem>
                  </Select>
                  <Select radius='none' placeholder="Short By"
                      classNames={{
                        trigger: "text-center text-lg h-auto lg:px-6 px-4 2xl:py-2.5 py-2 text-gray-800 border border-gray-200/20 bg-white data-[hover=true]:bg-gray-300 shadow-none bg-white md:min-w-[200px] flex-row items-center",
                        listbox: "max-h-[400px] !w-full",
                        innerWrapper: "w-full",
                        value: "xl:text-lg text-md !text-gray-800 opacity-100 ltr:text-left rtl:text-right ",
                        selectorIcon: "w-7 h-auto static inline-block",
                        base: " sm:grow-0 grow"
                    }}
                    popoverProps={{
                        classNames: {
                            base: " !w-full rounded-2xl ",
                            content: "p-0 border-small border-divide border-gray-100/20 text-lg rounded-none",
                        },
                    }}
                    listboxProps={{
                        itemClasses: {
                            title: [
                                "text-[16px] py-1",
                            ],
                        },
                    }} >
                    <SelectItem key='Date' value='Date' >Date</SelectItem>
                    <SelectItem key='Newest' value='Newest'>Newest</SelectItem>
                    <SelectItem key='Best Seller' value='Best Seller'>Best Seller</SelectItem>
                    <SelectItem key='Lowest' value='Lowest'>Lowest</SelectItem>
                    <SelectItem key='Newly added' value='Newly added'>Newly added</SelectItem>
                  </Select>
                </div>
              </div>
              <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3.5 mt-8'>
                {initialValues && initialValues.map((data, index) => {
                  return (
                    <div className="relative group bg-violet-400" key={index}>
                      <div className="overflow-hidden w-full before:block bg-violet-400 before:pt-[100%] relative transition-all">
                        <Link href={data.cat_link} className='block absolute top-0 left-0 w-full h-full group-hover:opacity-75 transition-all duration-500'><Image src={data.img} alt={data.title} title={data.title} className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" fill={true} /></Link>
                      </div>
                      <Link href={data.cat_link} className='text-gray-800 2xl:text-[24px] lg:text-[20px] font-nabi block sm:text-lg text-md bg-violet-400 leading-tight  sm:py-3 py-2 text-center z-1 relative'>{data.title}</Link>
                    </div>
                  )
                })}
              </div>
              <div className='flex items-center justify-center w-full 2xl:mt-16 mt-8'>
                <Pagination isCompact showControls total={4} initialPage={1}
                  classNames={{
                    base: "z-10 relative",
                    wrapper: "2xl:gap-2 md:gap-1 gap-0 overflow-visible h-8 rounded-full border-0 shadow-none",
                    item: "2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md text-black font-[600] !rounded-full bg-transparent",
                    cursor:
                      "bg-violet-900 rounded-full 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md  text-white font-[600]",
                    prev: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full",
                    next: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full"
                  }} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Categories_Collection

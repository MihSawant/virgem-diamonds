import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { Accordion, AccordionItem } from "@nextui-org/react";


const Gift_Guides = ({ initialValues }) => {
  const itemClasses = {
    base: "!p-0 w-full border border-violet-400 !rounded-none !shadow-none !bg-white",
    title: "font-normal font-[nabi] 2xl:text-[24px] lg:text-[20px] text-gray-900 text-lg hover:bg-transparent bg-transparent",
    trigger: "lg:px-6 px-4 py-2.5  h-auto flex items-center bg-violet-400 ",
    indicator: "md:text-[22px] text-lg 2xl:w-11 2xl:h-11 md:w-9 md:h-9 w-7 h-7 bg-white rounded-full flex items-center justify-center text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90 ",
    content: "2xl:text-lg text-md lg:p-6 p-4 leading-normal !bg-white",
    titleWrapper: "ltr:text-left rtl:text-right"
  };
  const mainitemClasses = {
    base: "!p-0 w-full my-2 border-0  !rounded-none !shadow-none !bg-white",
    title: "font-normal font-[nabi] 2xl:text-1xl xl:text-xl text-gray-900 text-[22px] hover:bg-transparent bg-transparent",
    trigger: "p-0 h-auto flex items-center bg-white ",
    indicator: "md:text-[22px] text-lg 2xl:w-11 2xl:h-11 md:w-9 md:h-9 w-7 h-7 bg-violet-400 rounded-full flex items-center justify-center text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90",
    content: "2xl:text-lg text-md px-0 py-4 text-gray-400 leading-normal !bg-white",
    titleWrapper: "ltr:text-left rtl:text-right md:!flex-none max-w-full"
  };

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      {isLoading ? (
         <div className='relative container 2xl:py-24 lg:py-16 py-12'>
         <div className='w-full'>
          <Skeleton className='w-full h-28 rounded mb-6' />
          <Skeleton className='w-full h-28 rounded mb-6' />
         </div>
       </div>
      ) : (
        <>
          <div className='relative container 2xl:py-24 lg:py-16 py-12'>
            <div className='w-full'>
              {
                initialValues.length > 0 ? (
                  <Accordion defaultExpandedKeys={initialValues.length > 0 ? [initialValues[0].key.toString()] : []} variant="splitted" selectionMode="multiple" className="p-0 gap-4 w-full" itemClasses={mainitemClasses} >
                    {initialValues && initialValues.map((data, index) => {
                      return (
                        <AccordionItem key={index} aria-label={data.title} title={data.title}>
                          <p className='mb-2'>{data.content_1}</p>
                          <p>{data.content_2}</p>
                          <Accordion variant="splitted" defaultExpandedKeys={initialValues.length > 0 ? [initialValues[0].key.toString()] : []} selectionMode="multiple" className="p-0 gap-4 w-full" itemClasses={itemClasses}>
                            {data.inner_accordians && data.inner_accordians.map((accordian, index) => {
                              return (
                                <AccordionItem key={index} aria-label={accordian.title} title={accordian.title}>
                                  <div className='grid 2xl:grid-cols-8 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xl:gap-6 gap-3'>
                                    {accordian.item && accordian.item.map((items, index) => {
                                      return (
                                        <div className='flex items-center md:gap-4 gap-2' key={index}>
                                          <Image src={items.img} alt={items.alt} title={items.alt} className='md:w-14 md:h-14 w-11 h-11 object-cover' width={60} height={60} />
                                          <Link href={items.cat_link} className='text-gray-800 lg:text-lg md:text-md text-sm'>{items.title}</Link>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </AccordionItem>
                              )
                            })}
                          </Accordion>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                ) : (
                  <></>
                )
              }
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Gift_Guides

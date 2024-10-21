import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { Accordion, AccordionItem } from "@nextui-org/react";


const Faq_Section = ({ initialValues }) => {
  const itemClasses = {
    base: "!p-0 w-full border border-violet-400 !rounded-none !shadow-none !bg-white",
    title: "font-normal font-[nabi] 2xl:text-[24px] lg:text-[20px] text-lg hover:bg-transparent text-gray-900",
    trigger: "lg:px-6 px-4 py-2.5  h-auto flex items-center bg-violet-400 ",
    indicator: "md:text-[22px] text-lg 2xl:w-11 2xl:h-11 md:w-9 md:h-9 w-7 h-7 bg-white rounded-full flex items-center justify-center text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90",
    content: "2xl:text-lg text-md lg:p-6 p-4 leading-normal bg-white text-gray-900",
    titleWrapper: "ltr:text-left rtl:text-right"
  };

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='relative container 2xl:py-24 lg:py-16 py-12  border-t border-violet-400'>
          <div className='flex lg:flex-nowrap flex-wrap items-start gap-6'>
            <div className='lg:w-2/5 w-full'>
              <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:ltr:text-left rtl:lg:text-right text-center'>
                Frequently Asked Questions
              </h2>
              <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7  lg:w-3/4 w-full lg:ltr:text-left rtl:lg:text-right text-center'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
              </p>
              <Link href='#' className='2xl:mt-4 mt-2 all-btn hover:opacity-100 text-white flex w-max lg:mx-0 mx-auto' >
                Read All Faq&apos;s
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                  <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
                </svg>
              </Link>
            </div>
            <div className='lg:w-3/5 w-full  flex flex-col gap-4 '>
                <Skeleton className='w-full 2xl:h-16 h-14 rounded' />
                <Skeleton className='w-full 2xl:h-16 h-14 rounded' />
                <Skeleton className='w-full 2xl:h-16 h-14 rounded' />
                <Skeleton className='w-full 2xl:h-16 h-14 rounded' />
                <Skeleton className='w-full 2xl:h-16 h-14 rounded' />
            </div>
          </div>

        </div>
      ) : (
        <>
          <div className='relative container 2xl:py-24 lg:py-16 py-12  border-t border-violet-400'>

            <div className='flex lg:flex-nowrap flex-wrap items-start gap-6'>
              <div className='lg:w-2/5 w-full'>
                <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:ltr:text-left rtl:lg:text-right text-center'>
                  Frequently Asked Questions
                </h2>
                <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7  lg:w-3/4 w-full lg:ltr:text-left rtl:lg:text-right text-center'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <Link href='/faq' className='2xl:mt-4 mt-2 all-btn hover:opacity-100 text-white flex w-max lg:mx-0 mx-auto' >
                  Read All Faq&apos;s
                  <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                    <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
                  </svg>
                </Link>
              </div>
              <div className='lg:w-3/5 w-full'>
                <Accordion variant="splitted" className="p-0 gap-4 w-full" itemClasses={itemClasses}>
                  {initialValues && initialValues.slice(0, 5).map((data, index) => {
                    return (
                      <AccordionItem key={index} aria-label={data.title} title={data.title}>
                        <p>{data.content}</p>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  )
}

export default Faq_Section

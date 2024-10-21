import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link, Skeleton } from '@nextui-org/react'
import { Accordion, AccordionItem } from "@nextui-org/react";


const Diamond_Guide = ({ initialValues }) => {
  const itemClasses = {
    base: "!p-0 w-full border border-violet-400 !rounded-none !shadow-none !bg-white",
    title: "font-normal font-[nabi] 2xl:text-[24px] lg:text-[20px] text-lg hover:bg-transparent bg-transparent  text-gray-900",
    trigger: "lg:px-6 px-4 py-2.5  h-auto flex items-center bg-violet-400 ",
    indicator: "md:text-[22px] text-lg  text-gray-900 2xl:w-11 2xl:h-11 md:w-9 md:h-9 w-7 h-7 bg-white rounded-full flex items-center justify-center text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90",
    content: "2xl:text-lg text-md lg:p-6 p-4 leading-normal bg-white",
    titleWrapper: "ltr:text-left rtl:text-right"
  };
  const mainitemClasses = {
    base: "!p-0 w-full my-2 border-0  !rounded-none !shadow-none !bg-white",
    title: "font-normal font-[nabi] 2xl:text-1xl xl:text-xl text-[22px] hover:bg-transparent bg-transparent  text-gray-900",
    trigger: "p-0 h-auto flex items-center bg-white ",
    indicator: "md:text-[22px] text-lg text-gray-900 2xl:w-11 2xl:h-11 md:w-9 md:h-9 w-7 h-7 bg-violet-400 rounded-full flex items-center justify-center text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90",
    content: "2xl:text-lg text-md px-0 pt-4 text-gray-400 leading-normal bg-white",
    titleWrapper: "ltr:text-left rtl:text-right !flex-none"
  };

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
          <div className='relative container 2xl:pb-24 lg:pb-16 pb-12'>
            <div className='w-full'>
                  <Accordion defaultExpandedKeys={["1"]} variant="splitted" selectionMode="multiple" className="p-0 gap-4 w-full" itemClasses={mainitemClasses} >
                        <AccordionItem  aria-label='Explore Loose fancy Diamonds' title='Explore Loose fancy Diamonds' key="1">
                          <p className='mb-2 text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          <p className='mb-2 text-gray-800'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                          <p className='mb-2 text-gray-800'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                          <p className='mb-2 text-gray-800'>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
                          <ol>
                          <li className='font-nabi 2xl:text-[28px] lg:text-[24px] sm:text-[20px] text-lg md:my-7 my-3 leading-tight text-gray-800 before:inline-block before:w-2.5 before:h-2.5 before:bg-black before:align-middle before:mr-5 before:rounded-full'>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
                          <li className='flex gap-2 mb-3 items-center'><span className='1xl:text-[20px] text-lg text-gray-900 font-semibold'>1.</span>
                          <span className='bg-violet-400 ml-2 py-3 px-5 lg:text-lg text-md text-gray-900 w-full inline-block'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</span></li>
                          <li className='flex gap-2 mb-3 items-center'><span className='1xl:text-[20px] text-lg text-gray-900 font-semibold'>2.</span>
                          <span className='bg-violet-400 ml-2 py-3 px-5 lg:text-lg text-md text-gray-900 w-full inline-block'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing.</span></li>
                          <li className='flex gap-2 mb-3 items-center'><span className='1xl:text-[20px] text-lg text-gray-900 font-semibold'>3.</span>
                          <span className='bg-violet-400 ml-2 py-3 px-5 lg:text-lg text-md text-gray-900 w-full inline-block'>But in certain circumstances and owing to the claims of duty or the obligations of business.</span></li>
                          <li className='flex gap-2 items-center'><span className='1xl:text-[20px] text-lg text-gray-900 font-semibold'>4.</span>
                          <span className='bg-violet-400 ml-2 py-3 px-5 lg:text-lg text-md text-gray-900 w-full inline-block'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></li>
                          </ol>
                        </AccordionItem>
                     
                  </Accordion>
               
            </div>
          </div>
       
    </>
  )
}

export default Diamond_Guide

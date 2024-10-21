import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Faq_Section } from '../src/Sections'
import ShorterFilter from '../src/Sections/Shorter_Filter_shop/ShorterFilter'
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import Subscribe_Newsletter from '../src/component/Subscribe_newsletter_Sec';
import ProductsWithColors from '../src/comman/ProductWithColors';
import { Pagination } from '@nextui-org/react';

export default function Solitaire() {
  const breadcrumbItems = [
    { title: 'Engagement', url: `/engagement`, type: false },
    { title: 'Solitaire', url: ``, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: dimaond_data } = useFetchData("json/data/diamond-filter.json");
  const { data: initialValues } = useFetchData("json/data/solitairerings.json");
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase  text-center  md:my-4 my-2 leading-tight text-gray-800">SOLITAIRE ENGAGEMENT RINGS</h1>
        <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 text-center md:max-w-[600px] mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='container 2xl:pb-20 lg:pb-16 pb-14'>
        <ShorterFilter />
        <div className=" grid 1xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
          {initialValues && initialValues.map((item, index) => {
            return (
              <ProductsWithColors initialValues={item} key={index} />
            )
          })}
        </div>
        <Pagination isCompact showControls total={4} initialPage={1} dir='ltr'
          classNames={{
            base: "lg:mt-12 mt-6 z-10 relative",
            wrapper: "2xl:gap-2 md:gap-1 gap-0 overflow-visible h-8 rounded-full border-0 shadow-none mx-auto",
            item: "2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md text-black font-[600] !rounded-full bg-transparent",
            cursor: "bg-violet-900 rounded-full 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md  text-white font-[600]",
            prev: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full",
            next: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full"
          }} />
      </div>

      <Faq_Section initialValues={faq_data} />
      <Subscribe_Newsletter />
      <Footer_h3 />
    </>
  )
}




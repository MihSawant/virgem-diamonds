import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Faq_Section } from '../src/Sections'
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import Subscribe_Newsletter from '../src/component/Subscribe_newsletter_Sec';
import Link from 'next/link';
import Image from 'next/image';

export default function Engagement() {
  const breadcrumbItems = [
    { title: 'Branches', url: ``, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");
  const { data } = useFetchData("json/data/Store_slider_h2.json");



  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase  text-center  md:my-4 my-2 leading-tight text-gray-800">visit our new branch</h1>
        <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 text-center md:max-w-[600px] mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='container 2xl:pb-24 lg:pb-16 pb-10' >
        <div className='grid sm:grid-cols-2 grid-cols-1 2xl:gap-18 xl:gap-14 lg:gap-10 gap-6'>
          {data && data.map((item, index) => {
            return (
              <div className="relative w-full h-full group" key={index}>
                <Link href={item.slug} className="relative overflow-hidden block">
                  <Image src={item.img} alt={item.alt} title={item.alt} width={960} height={860} className="object-cover group-hover:scale-105 transition-all" />
                  <h3 className="text-violet-900 mb-4 lg:mb-6 xl:mb-10 lg:text-[34px] xl:text-1xl md:text-xl text-[22px] uppercase leading-tight absolute bottom-0 z-10 ltr:2xl:left-16 rtl:2xl:right-16 ltr:xl:left-8 rtl:xl:right-8 ltr:left-4 rtl:right-4">{item.title}</h3>
                </Link>
                <Link href={item.slug} className=' xl:mt-6 mt-4 2xl:mt-8 block 2xl:text-[36px] xl:text-[30px] 1xl:text-[32px] md:text-[26px] text-[22px] font-nabi leading-tight text-gray-800 hover:text-violet-900'>{item.heading}</Link>
                <Link href={item.slug} className='all-btn mt-4 xl:mt-6 2xl:mt-8 '>Explore Now</Link>
              </div>
            )
          })}
        </div>
      </div>
      <Faq_Section initialValues={faq_data} />
      <Subscribe_Newsletter />
      <Footer_h3 />
    </>
  )
}




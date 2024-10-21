import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Diamond_Filter, Diamond_GridList_Filter, Diamond_Guide, Faq_Section } from '../src/Sections'
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import Subscribe_Newsletter from '../src/component/Subscribe_newsletter_Sec';
import MiniCart_sidebar from '../src/component/MiniCart_sidebar';

export default function Engagement() {
  const breadcrumbItems = [
    { title: 'Diamonds', url: `/diamonds`, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: dimaond_data } = useFetchData("json/data/diamond-filter.json");
  const { data: dimaond_griddata } = useFetchData("json/data/Diamond_GridProducts.json");
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");

  const HideCart = () => {
    const old_class = document.getElementById('mini-cart').className;
    const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-full  h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full right-0  h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-full  h-full'
    document.getElementById('mini-cart').className = new_class
  };


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase  text-center  md:my-4 my-2 leading-tight text-gray-800">search loose diamonds</h1>
        <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 text-center md:max-w-[600px] mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <Diamond_Filter initialValues={dimaond_data} />
      <div id='mini-cart' className='color_switch fixed top-0 z-50 transition-all w-full -right-full h-full'>
        <MiniCart_sidebar />
        <div className='absolute w-full h-full bg-gray-900 opacity-50 -z-1 top-0 right-0' onClick={() => HideCart()}></div>
      </div>
      <Diamond_GridList_Filter initialValues={dimaond_griddata} />
      {/* <Diamond_Guide /> */}
      {/* <Faq_Section initialValues={faq_data} /> */}
      {/* <Subscribe_Newsletter /> */}
      <Footer_h3 />
    </>
  )
}







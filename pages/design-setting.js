import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import { Button, Tabs, Tab, Chip, Card, CardBody } from '@nextui-org/react';
import { DiamondSetting_01, Diamond_Filter, Diamond_GridList_Filter, Faq_Section, Related_Product } from '../src/Sections';
import Subscribe_Newsletter from '../src/component/Subscribe_newsletter_Sec';
import Product_Thumb_Gallery from '../src/Sections/Single_Product/Product_Thumb_Gallery';
import Product_Detail from '../src/Sections/Single_Product/Product_detail_default';
import Product_Des_Tabs from '../src/Sections/Single_Product/Product_Des_Tabs';

export default function Solitaire() {
  const breadcrumbItems = [
    { title: 'Engagement', url: `/engagement`, type: false },
    { title: 'Design Setting', url: ``, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: diamondsetting_data } = useFetchData("json/data/diamond-setting-filter.json");
  const { data: dimaond_data } = useFetchData("json/data/diamond-filter.json");
  const { data: dimaond_griddata } = useFetchData("json/data/Diamond_GridProducts.json");
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");
  const { data: product_data } = useFetchData("json/data/ProductData.json");
  const { data: related_products } = useFetchData("json/data/Related_products.json");


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      <div className='xl:pt-14 pt-10'>
        <div className='container'>

          <Tabs
            aria-label="Options"
            classNames={{
              base: "w-full  diamond-setting-tabs",
              tabList: "md:gap-6 gap-8 justify-between w-full relative rounded-none p-0 bg-transparent md:flex-row flex-col",
              cursor: "w-full bg-violet-900 rounded-full",
              tab: "group-data-[hover-unselected=true]:!opacity-100 !opacity-100 px-0 flex items-center md:max-w-fit justify-start md:w-auto !w-full 2xl:gap-6 lg:gap-4 gap-2 bg-violet-400 rounded-full text-white font-nabi 2xl:text-[28px] lg:text-[22px] text-lg lg:p-3 p-2 h-auto 2xl:min-w-[400px] 1xl:min-w-[300px] lg:min-w-[250px]",
              tabContent: "text-gray-800 group-data-[selected=true]:text-white"
            }}
          >
            <Tab key="selected setting"
              title={
                <div className="flex items-center gap-2">
                  <Chip className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full font-nabi 2xl:text-[28px] lg:text-[22px] text-lg max-w-none'>1</Chip>
                  <span>Selected Setting</span>
                </div>
              } >
              <div className='my-12'> 
                <DiamondSetting_01 initialValues={diamondsetting_data} />
              </div>
            </Tab>

            <Tab key="choose a diamond" className='tab-both-arrow'
              title={
                <div className="flex items-center gap-2">
                  <Chip className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full font-nabi 2xl:text-[28px] lg:text-[22px] text-lg max-w-none'>2</Chip>
                  <span>Choose a Diamond</span>
                </div>
              } >
              <div className='mt-8'>
                <div className='2xl:pb-10 pb-8 container'>
                  <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase  text-center  md:my-4 my-2 leading-tight text-gray-800">search loose diamonds</h1>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 text-center md:max-w-[600px] mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Diamond_Filter initialValues={dimaond_data} />
                <Diamond_GridList_Filter initialValues={dimaond_griddata} />
              </div>
            </Tab>
            <Tab key="completed ring"
              title={
                <div className="flex items-center gap-2">
                  <Chip className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full font-nabi 2xl:text-[28px] lg:text-[22px] text-lg max-w-none'>3</Chip>
                  <span> Completed Ring</span>
                </div>
              }>
              <div className=''>
                <div className='flex items-start 2xl:gap-12 gap-6 container 2xl:py-24 xl:py-16 py-12 xl:flex-nowrap flex-wrap'>
                  <div className='xl:w-1/2 w-full'>
                    <Product_Thumb_Gallery />
                  </div>
                  <div className='xl:w-1/2 w-full'>
                    <Product_Detail initialValues={product_data} />
                  </div>
                </div>
                <Product_Des_Tabs />
                <Related_Product initialValues={related_products} />
              </div>
            </Tab>
          </Tabs>
          {/* <div className='flex items-center md:justify-between justify-center md:flex-nowrap gap-3 flex-wrap'>
            <div className='md:w-auto w-full'>
              <Button className='flex items-center justify-start md:w-auto !w-full 2xl:gap-6 lg:gap-4 gap-2 bg-violet-900 rounded-full text-white font-nabi 2xl:text-[28px] lg:text-[22px] text-lg lg:p-3 p-2 h-auto 2xl:min-w-[400px] xl:min-w-[300px] '>
                <span className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full'>1</span>
                Selected Setting</Button>
            </div>
            <div>
              <svg width="141" height="16" viewBox="0 0 141 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-36 lg:w-28 w-14  md:block hidden'>
                <path d="M140.707 8.70711C141.098 8.31658 141.098 7.68342 140.707 7.29289L134.343 0.928932C133.953 0.538408 133.319 0.538408 132.929 0.928932C132.538 1.31946 132.538 1.95262 132.929 2.34315L138.586 8L132.929 13.6569C132.538 14.0474 132.538 14.6805 132.929 15.0711C133.319 15.4616 133.953 15.4616 134.343 15.0711L140.707 8.70711ZM0 9H140V7H0V9Z" fill="#805A81" />
              </svg>
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:hidden block'>
                <path d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z" fill="#805A81" />
              </svg>

            </div>
            <div className='md:w-auto w-full'>
              <Button className='flex items-center justify-start md:w-auto !w-full 2xl:gap-6 lg:gap-4 gap-2 bg-violet-400 hover:bg-violet-900 hover:text-white rounded-full text-gray-800 font-nabi 2xl:text-[28px] lg:text-[22px] text-lg lg:p-3 p-2 h-auto 2xl:min-w-[400px] xl:min-w-[300px] '>
                <span className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full'>2</span>
                Choose a Diamond</Button>
            </div>
            <div>
              <svg width="141" height="16" viewBox="0 0 141 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='2xl:w-36 lg:w-28 w-14 md:block hidden'>
                <path d="M140.707 8.70711C141.098 8.31658 141.098 7.68342 140.707 7.29289L134.343 0.928932C133.953 0.538408 133.319 0.538408 132.929 0.928932C132.538 1.31946 132.538 1.95262 132.929 2.34315L138.586 8L132.929 13.6569C132.538 14.0474 132.538 14.6805 132.929 15.0711C133.319 15.4616 133.953 15.4616 134.343 15.0711L140.707 8.70711ZM0 9H140V7H0V9Z" fill="#805A81" />
              </svg>
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:hidden block'>
                <path d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z" fill="#805A81" />
              </svg>

            </div>
            <div className='md:w-auto w-full'>
              <Button className='flex items-center justify-start md:w-auto !w-full 2xl:gap-6 lg:gap-4 gap-2 bg-violet-400 hover:bg-violet-900 hover:text-white rounded-full text-gray-800 font-nabi 2xl:text-[28px] lg:text-[22px] text-lg lg:p-3 p-2 h-auto 2xl:min-w-[400px] xl:min-w-[300px] '>
                <span className='2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-8 h-8 bg-white text-gray-800 flex items-center justify-center rounded-full'>3</span>
                Completed Ring</Button>
            </div>
          </div> */}
        </div>
      </div>


      <Faq_Section initialValues={faq_data} />
      <Subscribe_Newsletter />
      <Footer_h3 />
    </>
  )
}




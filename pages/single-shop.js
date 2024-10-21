import React, { useEffect, useState } from 'react';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import ThemeChanger from '../src/component/ThemeChanger';
import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import { Related_Product } from '../src/Sections'
import Product_Thumb_Gallery from '../src/Sections/Single_Product/Product_Thumb_Gallery';
import Product_Detail from '../src/Sections/Single_Product/Product_detail_default';
import Product_Des_Tabs from '../src/Sections/Single_Product/Product_Des_Tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function Single_shop() {

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: product_data } = useFetchData("json/data/ProductData.json");
  const { data: related_products } = useFetchData("json/data/Related_products.json");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const breadcrumbItems = [
    { title: 'Shop', url: `/shop`, type: true },
    { title: 'single-shop', url: `/single-shop`, type: false },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      {/*  ===== product gallery and details ===== */}
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
      <Footer_h3 />
    </>
  )
}




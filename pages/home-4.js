import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Blog_h4, DealProductSlide, FilterGallery_h4, H4_Banner, H4_Pro_ProductGallery, H4_Products_Categories, Hero_h4, ShapeSlider_h4, TopRated_Products, TrendingProduct_slider_H4 } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h4 from '../src/component/Footer_h4';
import Header_h4 from '../src/component/Header_h4';
import NewsletterPopup from '../src/component/NewsletterPopup';
import CookieBanner from '../src/component/CookieBanner'
import MiniCart_sidebar from '../src/component/MiniCart_sidebar';

export default function HomeVideo() {

  const { data: hero_data } = useFetchData("json/data/Hero_Home4.json");
  const { data: dealPro_data } = useFetchData("json/data/Deals_product_data_H4.json");
  const { data: diamondShape_slider } = useFetchData("json/data/Shape_slide_h4.json");
  const { data: banner_data } = useFetchData("json/data/Home4_banner_data.json");
  const { data: H4_Product_cat_data } = useFetchData("json/data/H4_Product_cat_data.json");
  const { data: Trend_Product_data } = useFetchData("json/data/Trending_products_h4.json");
  const { data: Product_ProductGallery } = useFetchData("json/data/H4_Product_ProGallery.json");
  const { data: TopRated_Products_data } = useFetchData("json/data/Toprated_products_h4.json");
  const { data: blog_data } = useFetchData("json/data/blogs_data_h4.json");
  const { data: FilterGallery_data } = useFetchData("json/data/FilterTabs_products_h4.json");

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

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
      <NewsletterPopup />
      <ThemeChanger />
      <Header_h4 />
      <div id='mini-cart' className='color_switch fixed top-0 z-50 transition-all w-full -right-full h-full'>
        <MiniCart_sidebar />
        <div className='absolute w-full h-full bg-gray-900 opacity-50 -z-1 top-0 right-0' onClick={() => HideCart()}></div>
      </div>
      <Hero_h4 initialValues={hero_data} />
      <DealProductSlide initialValues={dealPro_data} />
      <ShapeSlider_h4 initialValues={diamondShape_slider} />
      <H4_Banner initialValues={banner_data} />
      <H4_Products_Categories initialValues={H4_Product_cat_data} />
      <TrendingProduct_slider_H4 initialValues={Trend_Product_data} />
      <H4_Pro_ProductGallery initialValues={Product_ProductGallery} />

      <FilterGallery_h4 initialValues={FilterGallery_data} />

      <TopRated_Products initialValues={TopRated_Products_data} />
      <Blog_h4 initialValues={blog_data} />
      <Footer_h4 />
      <CookieBanner />
    </>
  )
}




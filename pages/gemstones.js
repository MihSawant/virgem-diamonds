import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Categories_gemstone, Category_Hero, Gemstone_banner, Faq_Section, Testimonial_slide_h1, Gemstone_Features } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import MiniCart_sidebar from '../src/component/MiniCart_sidebar';

export default function Engagement() {

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_gemstone.json");
  const { data: categories_data } = useFetchData("json/data/Categories_gemstone.json");
  const { data: feature_data } = useFetchData("json/data/Gemstone_featured.json");
  const { data: testimonial_data } = useFetchData("json/data/Home1_testimonial_data.json");
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
      <Category_Hero initialValues={herodata} />
      <Categories_gemstone initialValues={categories_data} />
      <Gemstone_banner />
      <div id='mini-cart' className='color_switch fixed top-0 z-50 transition-all w-full -right-full h-full'>
        <MiniCart_sidebar />
        <div className='absolute w-full h-full bg-gray-900 opacity-50 -z-1 top-0 right-0' onClick={() => HideCart()}></div>
      </div>
      <Gemstone_Features initialValues={feature_data} />
      <Testimonial_slide_h1 initialValues={testimonial_data} isLoading={isLoading} />
      <Faq_Section initialValues={faq_data} />
      <Footer_h3 />
    </>
  )
}




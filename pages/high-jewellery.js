import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Categories_Slide, Category_Hero, High_Jewellery_Banner, Category_trend_slider, High_Jewellery_About, Faq_Section, Testimonial_slide_h1, High_Jewellery_SaleBanner } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';

export default function Engagement() {

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_high-jewellery.json");
  const { data: categories_data } = useFetchData("json/data/Categories_High-jewellery.json");
  const { data: slider_data } = useFetchData("json/data/Engagement_TrendProduct.json");
  const { data: testimonial_data } = useFetchData("json/data/Home1_testimonial_data.json");
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");

 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
   <>
     <ThemeChanger />
     <Header_h1 /> 
     <Category_Hero initialValues={herodata} />
     <Categories_Slide initialValues={categories_data} />
     <High_Jewellery_Banner />
     <Category_trend_slider initialValues={slider_data}/>
     <High_Jewellery_About />
     <High_Jewellery_SaleBanner />
     <Testimonial_slide_h1 initialValues={testimonial_data} isLoading={isLoading}/>
     <Faq_Section initialValues={faq_data} />
     <Footer_h3 />
   </>
  )
}




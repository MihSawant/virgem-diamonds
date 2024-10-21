import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Categories_Slide, Category_Hero, Category_trend_slider, Wedding_Banner, Faq_Section, Testimonial_slide_h1, Wedding_quotes } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';

export default function Engagement() {

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_Wedding.json");
  const { data: categories_data } = useFetchData("json/data/Categories_Wedding.json");
  const { data: slider_data } = useFetchData("json/data/Wedding_TrendProduct.json");
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
     <Wedding_Banner />
     <Category_trend_slider initialValues={slider_data}/>
     <Wedding_quotes />
     <Testimonial_slide_h1 initialValues={testimonial_data} isLoading={isLoading}/>
     <Faq_Section initialValues={faq_data} />
     <Footer_h3 />
   </>
  )
}




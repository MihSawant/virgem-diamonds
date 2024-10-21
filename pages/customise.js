import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Customise_About, Category_Hero, Customise_Process, Faq_Section,  Customise_Video, Testimonial_slide_h1, Customise_jewellery } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';

export default function Customise() {

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_Customise.json");
  const { data: about_data } = useFetchData("json/data/customise_about.json");
  const { data: testimonial_data } = useFetchData("json/data/Home1_testimonial_data.json");
  const { data: faq_data } = useFetchData("json/data/FAQ_data.json");
  const { data: customise_jewel_data } = useFetchData("json/data/customise_jewellery_slider.json");

 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
   <>
     <ThemeChanger />
     <Header_h1 /> 
     <Category_Hero initialValues={herodata} />
     <Customise_About initialValues={about_data} />
     <Customise_Process />
     <Customise_Video />
     <Customise_jewellery initialValues={customise_jewel_data} />
     <Testimonial_slide_h1 initialValues={testimonial_data} isLoading={isLoading}/>
     <Faq_Section initialValues={faq_data} />
     <Footer_h3 />
   </>
  )
}




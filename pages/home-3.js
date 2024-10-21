import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { About_H3, BlogSlider_h3, Category_Slider_H3, FeaturedBox_h3, GiftProduct_Slider, H3_Banner, HeroVideo, ProductGrids, Testimonial_slide_h3 } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import Header_h3 from '../src/component/Header_h3';

export default function HomeVideo() {

const { data: hero_data } = useFetchData("json/data/Hero_Home2.json");
const { data: about_data } = useFetchData("json/data/about_h3_data.json");
const { data: category_data } = useFetchData("json/data/Categories_Home3.json");
const { data: productgrid_data } = useFetchData("json/data/productGrid_h3_data.json");
const { data: bannerData } = useFetchData("json/data/Home3_banner_data.json");
const { data: GiftProducts } = useFetchData("json/data/Gift_product_data_H3.json");
const { data: FeaturedBox_Data } = useFetchData("json/data/Featured_box_h3.json");
const { data: Testimonial_Data } = useFetchData("json/data/Home3_testimonial_data.json");
const { data: blogData } = useFetchData("json/data/blogs_data_h3.json");

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => { 
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
   <>
     <ThemeChanger />
     <Header_h3 />
     <HeroVideo initialValues={hero_data} isLoading={isLoading}/>
     <About_H3 initialValues={about_data} />
     <Category_Slider_H3 initialValues={category_data} />
     <ProductGrids initialValues={productgrid_data} />
     <H3_Banner  initialValues={bannerData}/>
     <GiftProduct_Slider initialValues={GiftProducts} />
     <FeaturedBox_h3 initialValues={FeaturedBox_Data}/>
     <Testimonial_slide_h3 initialValues={Testimonial_Data}/>
     <BlogSlider_h3 initialValues={blogData}/>
     <Footer_h3/>
   </>
  )
}




import Header_h2 from 'src/component/Header_h2'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Category_Slider, FeaturedBox_h2, FilterTabs_Products, Store_slider_h2, Hero_Slider, TrendProduct_Slide, BlogSlider_h2, Testimonial_slide_h2, InstaFeed_h2 } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h2 from '../src/component/Footer_h2';
import Gallery from '../src/Sections/Product_filter_h2/filter_data';

export default function HomeSlider() {

const { data: hero_data } = useFetchData("json/data/Hero_Home2.json");
const { data: cat_slide_data } = useFetchData("json/data/Categories_Home2.json");
const { data: trending_products } = useFetchData("json/data/Trending_product_data_H2.json");
const { data: featured_data } = useFetchData("json/data/Featured_box_h2.json");
const { data: product_tabs } = useFetchData("json/data/FilterTabs_products.json");
const { data: store_slider } = useFetchData("json/data/Store_slider_h2.json");
const { data: blog_data } = useFetchData("json/data/blogs_data_h2.json");
const { data: testimonial_data } = useFetchData("json/data/Home2_testimonial_data.json");
const { data: instafeeds } = useFetchData("json/data/InstaFeed_h2.json");

/*  ============= Skeletone_loader ============   */
 
  const [isLoading, setIsLoading] = React.useState(true);
 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
   <>
     <ThemeChanger />
     <Header_h2/>
     <Hero_Slider  initialValues={hero_data} isLoading={isLoading}/>
     <Category_Slider  initialValues={cat_slide_data} isLoading={isLoading}/>
     <TrendProduct_Slide initialValues={trending_products} isLoading={isLoading}/>
     <FeaturedBox_h2 initialValues={featured_data}  isLoading={isLoading}/>
     <Gallery initialValues={product_tabs} />
     <Store_slider_h2 initialValues={store_slider} isLoading={isLoading}/>
     <BlogSlider_h2 initialValues={blog_data} isLoading={isLoading}/>
     <Testimonial_slide_h2 initialValues={testimonial_data} isLoading={isLoading}/>
     <InstaFeed_h2 initialValues={instafeeds} isLoading={isLoading} />
     <Footer_h2/>

   </>
  )
}




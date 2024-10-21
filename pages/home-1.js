import Header_h1 from 'src/component/Header_h1'
import Footer from 'src/component/Footer'
import React, { useEffect} from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Hero, ShapeSlider, TwoImgContent, ProductGrid_InsideBox, MarqueeVideo, Product_Slider, BannerText, Testimonial_slide_h1, FeaturedBox_h1, InstaFeed } from '../src/Sections'
import { useFetchData } from '../src/comman';


export default function Index() {

  const { data: hero_data } = useFetchData("json/data/Hero_Home1.json");
  const { data: slide_data } = useFetchData("json/data/Shape_slide_h1.json");
  const { data: content_data } = useFetchData("json/data/two_img_content.json");
  const { data: product_data } = useFetchData("json/data/Pro_Grid_Cont_inside.json");
  const { data: marquee_video_data } = useFetchData("json/data/Marquee_video.json");
  const { data: slider_data } = useFetchData("json/data/Home1_Product_slider.json");
  const { data: banner_data } = useFetchData("json/data/Home1_banner_data.json");
  const { data: testimonial_data } = useFetchData("json/data/Home1_testimonial_data.json");
  const { data: featured_data } = useFetchData("json/data/Featured_box_h1.json");
  const { data: insta_data } = useFetchData("json/data/InstaFeed_h1.json");


  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Hero initialValues={hero_data} isLoading={isLoading} />
      <ShapeSlider initialValues={slide_data} isLoading={isLoading}/>
      <TwoImgContent initialValues={content_data} isLoading={isLoading}/>
      <ProductGrid_InsideBox initialValues={product_data} isLoading={isLoading} />
      <MarqueeVideo initialValues={marquee_video_data} isLoading={isLoading}/>
      <Product_Slider initialValues={slider_data} isLoading={isLoading}/>
      <BannerText initialValues={banner_data} isLoading={isLoading}/>
      <Testimonial_slide_h1 initialValues={testimonial_data} isLoading={isLoading}/>
      <FeaturedBox_h1 initialValues={featured_data} isLoading={isLoading}/>
      <InstaFeed initialValues={insta_data} isLoading={isLoading}/>
      <Footer isLoading={isLoading}/>

    </>
  )
}




import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Categories_Slide, Category_Hero,  Gifts_Collection, Engagement_banners, Faq_Section, FeaturedBox_gifts, Gifts_banners, Gift_Guides, Gifts_Banner_Slider } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';

export default function Engagement() {

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_Gifts.json");
  const { data: categories_data } = useFetchData("json/data/Categories_Gifts.json");
  const { data: features_data } = useFetchData("json/data/Featured_box_gifts.json");
  const { data: banner_slider } = useFetchData("json/data/Gifts_Banner_Slider.json");
  const { data: GiftProducts } = useFetchData("json/data/Gifts_Collection.json");
  const { data: guides_data } = useFetchData("json/data/Gift_Guides.json");
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
     <FeaturedBox_gifts initialValues={features_data} />
     <Gifts_banners />
     <Gifts_Banner_Slider initialValues={banner_slider} />
     <Gifts_Collection initialValues={GiftProducts} />
     <Gift_Guides initialValues={guides_data} />
     <Faq_Section initialValues={faq_data} />
     <Footer_h3 />
   </>
  )
}




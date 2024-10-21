import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Category_Hero, Categories_Collection } from '../src/Sections'
import { useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import Subscribe_Newsletter from '../src/component/Subscribe_newsletter_Sec';

export default function Engagement() {

/*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: herodata } = useFetchData("json/data/Hero_Collection.json");
  const { data: cat_data } = useFetchData("json/data/Categories_collection.json");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
   <>
     <ThemeChanger />
     <Header_h1 /> 
     <Category_Hero initialValues={herodata} />
     <Categories_Collection initialValues={cat_data} />
     <Subscribe_Newsletter />
     <Footer_h3 />
   </>
  )
}




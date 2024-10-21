import React, { useEffect } from 'react';
import Header_Intro from '../src/component/Header_Intro';
import ThemeChanger from '../src/component/ThemeChanger';
import { HeroIntro, HomepagesIntro, Intro_Features, Intro_HeaderFooter, Intro_InnerPages, Intro_about, Intro_megamenu } from '../src/Sections';
import Footer_Intro from '../src/component/Footer_Intro';


export default function Index() {

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <ThemeChanger />
      <Header_Intro />
      <HeroIntro />
      <HomepagesIntro />
      <Intro_InnerPages />
      <Intro_about />
      <Intro_HeaderFooter />
      <Intro_megamenu />
      <Intro_Features />
      <Footer_Intro />
    </>
  )
}




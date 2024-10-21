import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react";
import Head from "next/head";
import '@/styles/globals.css'
import '@/styles/custom-style.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import seoconfig from '../src/config/seoconfig'
import { ToastContainer } from 'react-toastify';
import { CartProvider } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    const data = seoconfig.seodata.find(
      (data) => data.key === router.pathname.substring(1)
    );
    setRouteData(data);
  }, [router.pathname]);

  useEffect(() => {
    if (routeData) {
      if (routeData.key === "") {
        document.title = `Starry Heavens`;
      } else {
        document.title = `${routeData.title} | Starry Heavens`;
      }

      // Dynamically update meta description
      const existingMetaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );
      if (existingMetaDescriptionTag) {
        // Update the content attribute
        existingMetaDescriptionTag.setAttribute(
          "content",
          routeData.description
        );
      } else {
        // Create a new meta tag if it doesn't exist
        const newMetaDescriptionTag = document.createElement("meta");
        newMetaDescriptionTag.name = "description";
        newMetaDescriptionTag.content = routeData.description;

        // Append the new meta tag to the head
        document.head.appendChild(newMetaDescriptionTag);
      }
    }
  }, [routeData]);


  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishList = localStorage.getItem("wishList");
    const initialWishList = storedWishList ? JSON.parse(storedWishList) : [];

    // Check if the data is already in the wishlist
    if (initialWishList >= 0) {
      const updatedWishList = [...initialWishList];

      // Update localStorage with the updated wishlist
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    }

    // Load Compare from localStorage
    const storedCompareList = localStorage.getItem("Compare");
    const initialCompareList = storedWishList ? JSON.parse(storedCompareList) : [];

    // Check if the data is already in the Compare
    if (initialCompareList >= 0) {
      const updatedCompareList = [...initialCompareList];

      // Update localStorage with the updated Compare
      localStorage.setItem("Compare", JSON.stringify(updatedCompareList));
    }

  }, [])


  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://starry-heavens.vercel.app${router.asPath}`}
        />
        {routeData &&
          routeData.og_tag.map((tag, index) => (
            <meta key={index} property={tag.type} content={tag.content} />
          ))}
      </Head>
      <CartProvider>
        <ThemeProvider enableSystem={true} attribute="class" themes={['pink', 'emerald', 'light', 'dark']}>
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
import Image from 'next/image'
import Link from 'next/link'
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchData } from '../comman';
import Nav from '../comman/nav';
import Relative_Product_Box from '../comman/relative_product_box';
import { useRouter } from 'next/router';
import Diamond_Clarity from '../comman/nav_diamond_clarity';

function Header_h1() {
  const router = useRouter()
  const current_uri = router.asPath
  const { data } = useFetchData("json/data/Header.json");

  const [CatNavshow, setCatNavshow] = useState(false);
  function toggle() {
    setCatNavshow(!CatNavshow);
  }


  //Toggle Main Menu:
  const toggleClass = () => {
    const old_class = document.getElementById('mainmenu').className;
    const new_class = old_class === 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto rtl:lg:right-auto ltr:-left-0 rtl:-right-0 top-0 bg-white z-10 transition-all ' ? 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto ltr:-left-full rtl:lg:right-auto rtl:-right-full top-0 z-10 transition-all bg-white' : 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto rtl:lg:right-auto ltr:-left-0 rtl:-right-0 top-0 bg-white z-10 transition-all '
    document.getElementById('mainmenu').className = new_class
  }

  //Toggle Searchbar:
  const toggleCss = () => {
    const toggle_class = document.getElementById('toggleSearch').className;
    const add_class = toggle_class === 'ltr:ml-auto rtl:mr-auto inline-block p-2 group active' ? 'ltr:ml-auto rtl:mr-auto inline-block p-2 group' : 'ltr:ml-auto rtl:mr-auto inline-block p-2 group active'
    document.getElementById('toggleSearch').className = add_class
    const old_class = document.getElementById('searchCategory').className;
    const new_class = old_class === 'flex items-center justify-between p-0 lg:p-2 border-b border-gray-800 lg:max-w-[85%] bg-white lg:w-auto w-full lg:static absolute lg:left-auto left-0 lg:top-auto top-full opacity-100 transition-all visible z-10' ? 'flex items-center justify-between p-0 lg:p-2 border-b border-gray-800 lg:max-w-[85%] bg-white lg:w-auto w-full lg:static absolute lg:left-auto left-0 lg:top-auto top-[60%] lg:visible invisible lg:opacity-100 opacity-0 transition-all' : 'flex items-center justify-between p-0 lg:p-2 border-b border-gray-800 lg:max-w-[85%] bg-white lg:w-auto w-full lg:static absolute lg:left-auto left-0 lg:top-auto top-full opacity-100 transition-all visible z-10'
    document.getElementById('searchCategory').className = new_class
  }


  /*  ============= Wishlist_active ============   */

  const [isActive, setIsActive] = React.useState(false);
  const handleClick = e => {
    e.classList.add("active");
  };

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  /* ================ Loop Functions ==================*/

  const Diamond_shapes = ({ initialValues }) => {

    return (
      initialValues && initialValues.map((items, index) => {
        return (
          <div className="relative cursor-pointer" key={index}>
             <Link className="block" href={items.slug}> <div className="flex m-auto items-center justify-center w-full lg:h-28 2xl:h-32 h-24 bg-white outline outline-1 outline-offset-4 outline-violet-900">
              <Image src={items.img} width={0} height={0} sizes="100vw" alt={items.link_title} title={items.link_title} className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] object-fit " />
            </div>
            </Link>
            <Link className="mt-3 text-center text-gray-800 block" href={items.slug}>{items.link_title}</Link>
          </div>
        )
      })
    );
  }

  const Insta_imgs = ({ initialValues }) => {
    return (
      initialValues && initialValues.map((items, index) => {
        return (
          <div className="insta-post" key={index}>
            <Link className="relative group/insta block" href={items.box_link} >
              <Image src={items.img} width={0} height={0} sizes="100vw" alt={items.img_alt} title={items.img_alt} className="w-full" />
              <div className="hover-stake absolute w-full h-full flex items-center justify-center bg-[#00000080] opacity-0  group-hover/insta:opacity-100   top-0 left-0">
                <Image src={items.insta_icon_img} width={30} height={30} sizes="100vw" alt={items.img_alt} title={items.img_alt} />
              </div>
            </Link>
          </div>
        )
      })
    );
  }

  const Nav_posts = ({ initialValues }) => {
    return (
      initialValues && initialValues.map((items, index) => {
        return (
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 mb-6" key={index}>
            <div className=""><Link href={items.box_link}><Image src={items.img} width={115} height={85} alt={items.img_alt} title={items.img_alt} className="ltr:mr-3 rtl:ml-3 w-full min-w-[95px]" /></Link></div>
            <div className="sm:w-auto w-full">
              <p className="text-[15px] 2xl:text-md text-gray-800 mb-2">{items.blog_des}</p>
              <span className="text-[13px] font-semibold text-gray-800">{items.publish_date}</span>
            </div>
          </div>
        )
      })
    );
  }

  const Gift_Products = ({ initialValues }) => {
    return (
      initialValues && initialValues.map((items, index) => {
        return (
          <div className="relative" key={index}>
            <Image src={items.img} width={150} height={250} alt={items.pro_name} title={items.pro_name} className="w-full h-auto " />
            <Link className="absolute w-full h-full top-0 left-0 flex flex-wrap content-end " href={items.box_link}>
              <h3 className="2xl:text-[22px] lg:text-[20px] text-lg text-white mb-1.5 uppercase block mx-2 lg:mx-4 2xl:mx-8 w-full">{items.pro_name}</h3>
              <p className=" text-white text-md mb-4 md:mb-6 mx-4 lg:mx-4 2xl:mx-8 w-full">${items.pro_price}</p>
            </Link>
          </div>
        )
      })
    );
  }

  const Product_slider = (initialValues) => {
    return (
      initialValues && initialValues.map((items, index) => {

        return (
          <SwiperSlide key={index}>
            <div className="relative" >
              <Image src={items.img} width={180} height={180} alt={items.pro_name} title={items.pro_name} className="w-full h-auto" />
              <Link href={items.box_link} className="2xl:text-md text-[15px] text-gray-800 mt-3 block">{items.pro_name}</Link>
            </div>
          </SwiperSlide>
        )
      })
    );
  }

  const Pages_items = ({ initialValues }) => {
    return (
      initialValues && initialValues.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className=""><Link className="text-gray-800 hover:text-violet-900 2xl:text-md text-[15px] py-2 px-6 block" href={item.slug}>{item.title}</Link></li>
          </React.Fragment>
        )
      })
    );
  }
  const [isShown, setIsShown] = useState('');

  const menuClick = (class_name = '') => {
    if (isShown == class_name) {
      setIsShown('')
    } else {
      setIsShown(class_name)
    }
  };
  /* ================ Loop Functions end ==================*/

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  

  return (
    <div className="relative h-full header1 bg-white z-30" id="header">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            {Data.top_bar && Data.top_bar.map((lang_country, index) => {
              return (
                <div className="top-bar bg-violet-900 " key={index}>
                  {/* <div className="flex justify-between items-center container px-0 lg:px-3.5 py-0.5"> */}
                    {/* <ul className="flex items-center ltr:ml-2"> */}
                      {/* <li className="ltr:mr-3 rtl:ml-3 lg:inline-block hidden"><Link href="#" className="text-white pink:text-black  text-[13px] font-light uppercase hover:opacity-80 transition-all leading-tight">Order Tracking</Link>
                      </li> */}
                      {/* <li className="flex">
                        <Select
                          items={lang_country.Lang}
                          placeholder="Select a language"
                          defaultSelectedKeys={['English']}
                          classNames={{
                            base: "dark bg-transparent text-white wp-country text-[13px] font-[300] w-full focus:outline-none font-light uppercase max-w-xs",
                            trigger: "uppercase text-[13px] font-[300] p-1",
                          }}
                          popoverProps={{
                            classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white",
                                content: "p-0 border-small border-divider bg-background text-lg",
                            },
                        }}
                          renderValue={(items) => {
                            return items.map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Avatar
                                  alt={item.data.label}
                                  className="flex-shrink-0 w-[20px]  h-[12px] rounded-none"
                                  size="sm"
                                  src={item.data.avatar}
                                />
                                <div className="flex flex-col">
                                  <span>{item.data.label}</span>
                                </div>
                              </div>
                            ));
                          }}
                        >
                          {(lang) => (
                            <SelectItem key={lang.value} textValue={lang.label}>
                              <div className="flex gap-2 items-center">
                                <Avatar alt={lang.label} className="flex-shrink-0 w-[22px]  h-[15px] rounded-none" size="sm" src={lang.avatar} />
                                <div className="flex flex-col">
                                  <span className="text-small">{lang.label}</span>
                                </div>
                              </div>
                            </SelectItem>
                          )}
                        </Select>
                      </li> */}
                      {/* <li className="flex">
                        <Select
                          items={lang_country.Country}
                          placeholder="Select a Currency"
                          defaultSelectedKeys={['USD']}
                          classNames={{
                            base: "dark bg-transparent text-white wp-country text-[13px] w-full focus:outline-none font-light uppercase",
                            trigger: "text-[13px]  p-1",
                          }}
                          popoverProps={{
                            classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white",
                                content: "p-0 border-small border-divider bg-background text-lg",
                            },
                          }}
                          renderValue={(items) => {
                            return items.map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="flex flex-col">
                                  <span>{item.data.label}</span>
                                </div>
                              </div>
                            ));
                          }}
                        >
                          {(lang) => (
                            <SelectItem key={lang.value} textValue={lang.label}>
                              <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                  <span className="text-small">{lang.label}</span>
                                </div>
                              </div>
                            </SelectItem>
                          )}
                        </Select>
                      </li> */}
                    {/* </ul> */}
                    {/* <ul className="flex items-center ">
                      <li className="ltr:mr-3 rtl:ml-3 ltr:lg:mr-8 rtl:lg:ml-8"><Link href={lang_country.call_slug} className="text-white text-[0] hover:opacity-80 transition-all  lg:text-[13px] font-light uppercase flex items-center leading-tight"> <Image src={lang_country.call_img} width={19} height={19} alt={lang_country.call_alt} title="call" className="ltr:mr-1 rtl:ml-1" />{lang_country.call_label}</Link></li>
                      <li ><Link href={lang_country.mail_slug} className="text-white text-[0] lg:text-[13px] hover:opacity-80 transition-all font-light uppercase flex items-end leading-tight"> <Image src={lang_country.mail_img} width={20} height={20} alt={lang_country.mail_alt} title="mail" className="sm:ltr:mr-3.5 ltr:mr-2.5 rtl:ml-3.5 lg:rtl:ml-2" />{lang_country.mail_label}</Link></li>
                    </ul> */}
                  {/* </div> */}
                </div>
              )
            })}
{/* 
            <div className="header-middle">
              <div className="container flex items-center justify-between px-1 md:px-3.5 md:py-4 py-3 lg:py-7 transition-all">
                {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                  return (
                    <React.Fragment key={index}> 
                      <div className="w-1/4 md:w-1/3">
                        <div className="lg:hidden">
                          <button name="mobile-menu-view" onClick={() => toggleClass()} className="w-[35px] block p-2" aria-label="Close">
                            <span className="w-full bg-gray-900 dark:bg-[#fff] h-[2px] mb-1 block"></span>
                            <span className="w-full bg-gray-900 dark:bg-[#fff] h-[2px] mb-1 block"></span>
                            <span className="w-full bg-gray-900 dark:bg-[#fff] h-[2px] mb-0 block"></span>
                          </button>
                        </div>
                        <form id="searchCategory" className="flex items-center justify-between p-0 lg:p-2 border-b border-gray-800 lg:max-w-[85%] bg-white lg:w-auto w-full lg:static absolute lg:left-auto left-0 lg:top-auto top-[60%] lg:visible invisible lg:opacity-100 opacity-0 transition-all ">
                          {mid_bar_item.searchCategory && mid_bar_item.searchCategory.map((searchCategoryItem, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="searchbar flex items-center grow">
                                  {searchCategoryItem.searchbar_center && searchCategoryItem.searchbar_center.map((item, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        <Image src={item.img} width={20} height={20} alt={item.alt} title="search" className="lg:order-1 order-2 ltr:1xl:mr-3.5 rtl:1xl:ml-3.5 ltr:lg:mr-0 rtl:lg:ml-0 ltr:mr-3.5 rtl:ml-3.5" />
                                        <input type="text" placeholder={item.placeholder} className="lg:order-2 order-1 focus:outline-none text-[14px] p-4 lg:px-2 lg:py-0 placeholder:text-[#2F2F2F] grow font-normal text-gray-800 uppercase w-full bg-transparent border-none rounded-none" />
                                      </React.Fragment>
                                    )
                                  })}
                                </div>
                                <select name="Search" id="Search" form="Search-category" className="lg:block hidden cursor-pointer px-2 ltr:border-l rtl:border-r border-gray-800 focus:outline-none font-normal text-gray-800 text-sm uppercase bg-transparent leading-tight">
                                  {searchCategoryItem.Select_Category && searchCategoryItem.Select_Category.map((A, index) => {
                                    return (
                                      <option key={index} value={A.value}> {A.label}</option>
                                    )
                                  })}
                                </select>
                              </React.Fragment>
                            )
                          })}
                        </form>
                      </div>
                      <div className="site-logo w-2/4 md:w-1/3 ">
                        {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                          return (
                            <Link key={index} href={item.slug}><Image src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img m-auto md:w-[290px]  w-[210px]" /></Link>
                          )
                        })}
                      </div>
                      <div className="w-1/4 md:w-1/3">
                      <ul className="flex items-center justify-end lg:mr-0 lg:ml-0 ltr:mr-1.5 rtl:ml-1.5 ltr:md:-mr-1.5 rtl:md:-ml-1.5">
                          {mid_bar_item.mid_bar_right && mid_bar_item.mid_bar_right.map((right_item, index) => {
                            if (right_item.not_for && !right_item.not_for.includes(current_uri)) {
                              if (right_item.label === "compare") {
                                return null
                              } else {
                                return (
                                  <li key={index} className="ltr:mr-1 last:ltr:mr-0 last:rtl:ml-0 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 ltr:lg:mr-6 rtl:lg:ml-6  "><Link href={right_item.slug} className={right_item.class2}> <Image src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className="rtl:sm:ml-1 sm:mr-1.5 sm:w-[22px] w-[18px] header-icons" />{right_item.label}</Link></li>
                                )
                              }
                            }
                          })}
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </div> */}

         
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Header_h1
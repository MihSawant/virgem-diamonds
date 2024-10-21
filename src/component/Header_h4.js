import Image from 'next/image'
import Link from 'next/link'
import { Button, Select, SelectItem, Avatar, Skeleton, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchData } from '../comman';
import Nav from '../comman/nav';
import { useRouter } from 'next/router';
import Relative_Product_Box from '../comman/relative_product_box';
import Diamond_Clarity from '../comman/nav_diamond_clarity';
import MiniCart from './MiniCart';

function Header_h4() {

  const router = useRouter()
  const current_uri = router.asPath
  const { data } = useFetchData("json/data/Header.json");

  const [CatNavshow, setCatNavshow] = React.useState(false);
  function toggle() {
    setCatNavshow(!CatNavshow);
  }


  //Toggle Main Menu:
  const toggleClass = () => {
    const old_class = document.getElementById('mainmenu').className;
    const new_class = old_class === 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto ltr:-left-0 rtl:lg:right-auto rtl:-right-0 top-0  z-10 transition-all bg-white' ? 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto ltr:-left-full rtl:lg:right-auto rtl:-right-full top-0 z-10 transition-all bg-white' : 'main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] overflow-auto lg:overflow-visible  ltr:lg:left-auto ltr:-left-0 rtl:lg:right-auto rtl:-right-0 top-0  z-10 transition-all bg-white'
    document.getElementById('mainmenu').className = new_class
  }

  //Toggle Searchbar:
  const toggleCss = () => {
    const toggle_class = document.getElementById('toggleSearch').className;
    const add_class = toggle_class === 'ltr:ml-auto rtl:mr-auto inline-block sm:p-2 p-1 group active' ? 'ltr:ml-auto rtl:mr-auto inline-block sm:p-2 p-1 group' : 'ltr:ml-auto rtl:mr-auto inline-block sm:p-2 p-1 group active'
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
            <Link className="block" href={items.slug}>
              <div className="flex m-auto items-center justify-center w-full lg:h-28 2xl:h-32 h-24 bg-white outline outline-1 outline-offset-4 outline-violet-900">
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
    <div className="relative h-full bg-white header4  z-30" id="header">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            {Data.top_bar && Data.top_bar.map((lang_country, index) => {
              return (
                <div className="top-bar bg-white border-b border-gray-200/10 " key={index}>
                  <div className="flex justify-between items-center container px-2.5 lg:px-3.5 py-1.5">
                    <ul className="lg:flex items-center hidden">
                      <li className="ltr:mr-3 rtl:ml-3 ">
                        <span className="text-gray-900 font-montserrat text-[14px] font-[500] transition-all leading-tight">
                          Discount up to 35% for first purchase only this month.
                        </span>
                      </li>
                    </ul>
                    <div className="flex items-center grow lg:justify-end justify-between">
                      <ul className="flex items-center ">
                        <li className='1xl:ltr:pr-3.5 1xl:rtl:pl-3.5 1xl:ltr:mr-3.5 1xl:rtl:ml-3.5 ltr:pr-2 rtl:pl-2 ltr:mr-2 rtl:ml-2 ltr:border-r rtl:border-l border-gray-400/20'>
                          <Link href={lang_country.mail_slug} className="text-gray-900 text-[0] xl:text-[14px] font-montserrat hover:opacity-80 transition-all font-[500] flex items-end leading-tight">
                            <Image src={lang_country.mail_img} width={20} height={20} alt={lang_country.mail_alt} title="mail" className="xl:ltr:mr-2 xl:rtl:ml-2 brightness-0" />
                            {lang_country.mail_label}
                          </Link></li>
                        <li className='1xl:ltr:pr-3.5 1xl:rtl:pl-3.5 1xl:ltr:mr-3.5 1xl:rtl:ml-3.5 ltr:pr-2 rtl:pl-2 ltr:mr-2 rtl:ml-2 ltr:border-r rtl:border-l border-gray-400/20'>
                          <Link href={lang_country.store_locator_slug} className="text-gray-900 text-[0] xl:text-[14px] font-montserrat hover:opacity-80 transition-all font-[500] flex items-end leading-tight">
                            <Image src={lang_country.store_locator_img} width={20} height={20} alt={lang_country.store_locator_alt} title="mail" className="xl:ltr:mr-2 xl:rtl:ml-2 brightness-0" />
                            {lang_country.store_locator_label}
                          </Link></li>
                        <li className='1xl:ltr:pr-3.5 1xl:rtl:pl-3.5 1xl:ltr:mr-3.5 1xl:rtl:ml-3.5 ltr:pr-2 rtl:pl-2 ltr:mr-2 rtl:ml-2 ltr:border-r rtl:border-l border-gray-400/20'>
                          <Link href={lang_country.order_tracker_slug} className="text-gray-900 text-[0] xl:text-[14px] font-montserrat hover:opacity-80 transition-all font-[500] flex items-end leading-tight">
                            <Image src={lang_country.order_tracker_img} width={20} height={20} alt={lang_country.order_tracker_alt} title="mail" className="xl:ltr:mr-2 xl:rtl:ml-2 brightness-0" />
                            {lang_country.order_tracker_label}
                          </Link></li> 
                      </ul>
                      <ul className="flex items-center ">
                        <li className=" flex 1xl:ltr:pr-3.5 1xl:rtl:pl-3.5 1xl:ltr:mr-3.5 1xl:rtl:ml-3.5 ltr:pr-1.5 rtl:pl-1.5 ltr:mr-1.5 rtl:ml-1.5 ltr:border-r rtl:border-l border-gray-400/20">
                          <Select
                            items={lang_country.Lang}
                            placeholder="Select a language"
                            defaultSelectedKeys={['English']}
                            classNames={{
                              base: "p-0 bg-transparent text-gray-900 wp-country sm:text-[14px] text-[13px] font-montserrat capitalize font-[500] w-full focus:outline-none font-light ",
                              trigger: "py-0 pr-0 2xl:pl-0  h-auto bg-transparent hover:bg-transparent shadow-none font-[500] !min-h-[0] rounded",
                              value:"!text-gray-900"
                            }}
                            popoverProps={{
                              classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white ltr:-ml-6 rtl:-mr-6",
                                content: "p-0 border-small border-divider bg-white text-lg text-gray-900",
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
                        </li>
                        <li className="flex">
                          <Select
                            items={lang_country.Country}
                            placeholder="Select a Currency" variant='flat'
                            defaultSelectedKeys={['USD']} fullWidth='true'
                            classNames={{
                              base: "p-0 bg-transparent text-gray-900 wp-country sm:text-[14px] text-[13px] font-montserrat capitalize font-[500] w-full focus:outline-none font-light ",
                              trigger: "py-0 pr-0 2xl:pl-0  h-auto bg-transparent hover:bg-transparent shadow-none font-[500] !min-h-[0] rounded",
                              value:"!text-gray-900"
                            }}
                            popoverProps={{
                              classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white ltr:-ml-6 rtl:-mr-6",
                                content: "p-0 border-small border-divider bg-white text-lg text-gray-900",
                                label:"text-gray-900"
                              },
                            }}
                            renderValue={(items) => {
                              return items.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="flex flex-co l">
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="header-middle">
              <div className="container flex items-center justify-between px-2.5 md:px-3.5 md:py-4 py-3 lg:py-7 sm:gap-0 gap-2 transition-all">
                {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="site-logo w-1/2 lg:w-1/3 ">
                        {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                          return (
                            <Link key={index} href={item.slug}><Image src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img xl:w-[290px] sm:w-[250px] w-[180px]" /></Link>
                          )
                        })}
                      </div>
                      <div className=" lg:w-1/3">
                        <form id="searchCategory" className="flex items-center justify-between py-2.5 px-4 border border-gray-400/20 lg:rounded-full  bg-white lg:w-auto w-full lg:static absolute lg:left-auto left-0 lg:top-auto top-[60%] lg:visible invisible lg:opacity-100 opacity-0 transition-all ">
                          {mid_bar_item.searchCategory && mid_bar_item.searchCategory.map((searchCategoryItem, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="searchbar flex items-center grow">
                                  {searchCategoryItem.searchbar_center && searchCategoryItem.searchbar_center.map((item, index) => {
                                    return (
                                      <React.Fragment key={index}>
                                        <Image src={item.img} width={20} height={20} alt={item.alt} title="search" className="lg:order-1 order-2 lg:mr-0 ltr:mr-2 rtl:ml-2" />
                                        <input type="text" placeholder={item.placeholder} className="lg:order-2 order-1 focus:outline-none text-[14px] p-4 lg:px-2 lg:py-0 placeholder:text-[#2F2F2F] grow  text-gray-800 font-[montserrat] font-[500] w-full bg-transparent border-none rounded-none" />
                                      </React.Fragment>
                                    )
                                  })}
                                </div>
                                <select name="Search" id="Search" form="Search-category" className="lg:block hidden cursor-pointer px-2 ltr:border-l rtl:border-r border-gray-400/20 focus:outline-none font-[500] font-[montserrat]  text-gray-800 text-[14px] bg-transparent leading-tight">
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

                      <div className="w-1/2 lg:w-1/3 flex items-center justify-end">
                        <div className="lg:hidden flex justify-between  text-end sm:ltr:mr-2 ltr:mr-1 rtl:ml-1 sm:rtl:ml-2 ">
                          <button className="ltr:ml-auto rtl:mr-auto inline-block sm:p-2 p-1 group" onClick={() => toggleCss()} aria-label="Close" id="toggleSearch">
                            <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg" width={20} height={20} alt="main-logo" title="main-logo" className="white-img group-[.active]:hidden block" />

                            <svg width="21" height="21" viewBox="0 0 21 21" className="group-[.active]:block hidden stroke-[2px] stroke-[#333] w-[16px] sm:h-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.9811 2.01923L2.01953 18.9808" />
                              <path d="M2.01953 2.01923L18.9811 18.9808" />
                            </svg>

                          </button>
                        </div>
                        <ul className="flex items-center justify-end lg:mr-0 lg:ml-0 ltr:-mr-1.5 rtl:-ml-1.5">
                          {mid_bar_item.mid_bar_right && mid_bar_item.mid_bar_right.map((right_item, index) => {
                            if (right_item.not_for && !right_item.not_for.includes(current_uri)) {
                              if (right_item.title !== "cart") {
                                return (
                                  <li key={index} className="flex items-center ltr:mr-1 last:ltr:mr-0 last:rtl:ml-0 rtl:ml-1 ltr:xl:mr-2 rtl:xl:ml-2 ">
                                    <Link href={right_item.slug} className={right_item.class2}> <Image src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className=" sm:p-1.5 p-1 sm:w-9 sm:h-9 w-7 h-7 header-icons bg-[#EFEDE7] border border-violet-400 hover:border-violet-900 rounded-full" /></Link>
                                    <span className='font-[montserrat] font-[500] text-sm text-gray-900 ml-1.5 lg:inline-block hidden'> {right_item.cart_total}</span></li>
                                )
                              } else {
                                return (
                                  <li key={index} className="flex items-center ltr:mr-1 last:ltr:mr-0 last:rtl:mr-0 rtl:mr-1 ltr:xl:ml-4 rtl:xl:mr-4 order-4 ">
                                    <Popover placement="bottom-end" offset={30} backdrop="opaque" classNames={{
                                      base: [
                                        "p-0 rounded-none shadow-none xl:mt-0 -mt-6"
                                      ],
                                      content: [
                                        "p-0 border-0 rounded-none border-default-200 ",
                                      ],
                                      backdrop: [
                                        "bg-transparent"
                                      ]
                                    }}>
                                      <PopoverTrigger>
                                        <Button className='bg-transparent p-0 rounded-none !opacity-100 gap-0 !min-w-0 !h-auto'>
                                          <div className={right_item.class2}>
                                            <p className="relative"><Image src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className="p-1 sm:p-1.5 sm:w-9 sm:h-9 w-7 h-7 header-icons rounded-full" />
                                              <span className='min-w-[14px] min-h-[14px] bg-violet-900 rounded-full text-white flex items-center justify-center text-[10px] leading-none absolute top-0.5 left-1/2 px-0.5'>{right_item.label}</span></p></div>
                                          <span className='font-[montserrat] text-[15px] font-[500] text-sm text-gray-900 ml-0.5 lg:block hidden'> {right_item.cart_total}</span>
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent>
                                        <div className="p-0">
                                          <MiniCart />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </li>

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
            </div>

            <div className="menu-wrap lg:relative border-opacity-5 bg-violet-900 ">
              <div className="container px-2.5 ">
                <div className="flex lg:items-end items-center justify-between"> {/* all */}
                  <div className="nav-categories w-[200px] transition-all md:w-[220px] lg:w-[16%] 2xl:w-[18%] 1xl:block lg:hidden lg:pt-0 pt-1.5 ">
                    {Data.mega_menu.All_Categories && Data.mega_menu.All_Categories.map((categories_item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className="relative">
                            <div onClick={toggle} className={CatNavshow ? 'active cursor-pointer group flex items-center py-2 lg:py-2.5 text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] bg-white text-gray-800 wc-custom relative ltr:lg:pl-0 rtl:lg:pr-0 pl-2 pr-2 lg:pr-4' : 'group cursor-pointer flex items-center py-2 lg:py-2.5 text-[13px] leading-tight md:text-sm 2xl:text-md bg-white text-gray-800 font-[500] font-[montserrat] wc-custom relative ltr:lg:pl-0 rtl:lg:pr-0 pl-2 pr-2 lg:pr-4'}>
                              <Image src={categories_item.menu_img} width={27} height={27} alt={categories_item.menu_alt} title="list" className="ltr:2xl:mx-3 rtl:2xl:mx-3 ltr:mx-2 rtl:mx-2 rtl:ltr:mx-2 brightness-0 w-[22px] xl:w-[27px] " />
                              <span className="grow">{categories_item.title}</span> <Image src={categories_item.arrow_img} width={12} height={12} alt={categories_item.arrow_alt} title="arrow" className="mx-1  brightness-0  2xl:group-[.active]:rotate-0  group-[.active]:rotate-180 2xl:-rotate-180" />
                            </div>
                              {/* <div onClick={toggle} className='fixed top-0 left-0 w-full h-full z-0' style={{ display: CatNavshow ? "none" : "block" }}></div> */}
                            <div className='2xl:block hidden'>
                              <ul className="cat-nav absolute top-full left-0 bg-white z-10 w-full py-4 border border-gray-300 lg:border-transparent" style={{ display: CatNavshow ? "none" : "block" }}>
                                {categories_item.Categories_Item && categories_item.Categories_Item.map((item, index) => {
                                  if (item.type === 0) {
                                    return (
                                      <li className="px-4" key={index}>
                                        <Link className="flex items-center group md:py-4 py-3  text-gray-800 hover:text-violet-900 capitalize text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] border-b border-gray-400/20" href={item.slug}>
                                          <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 w-0 group-hover:w-8 m-0 transition-all rtl:rotate-180'>
                                            <path d="M9.35632 0L8.36162 0.994699L12.2981 4.93822H0V6.34914H12.2981L8.36162 10.2927L9.35632 11.2874L15 5.64368L9.35632 0Z" />
                                          </svg>
                                          {item.title}</Link></li>
                                    )
                                  }
                                })}
                              </ul>
                            </div>
                            <div className='2xl:hidden block'>
                              <ul className="cat-nav absolute top-full left-0 bg-white z-10 w-full py-4 border border-gray-300 lg:border-transparent" style={{ display: CatNavshow ? "block" : "none" }}>
                                {categories_item.Categories_Item && categories_item.Categories_Item.map((item, index) => {
                                  if (item.type === 0) {
                                    return (
                                      <li className="px-4" key={index}>
                                        <Link className="flex items-center group md:py-4 py-3  text-gray-800 hover:text-violet-900 capitalize text-[13px] leading-tight md:text-sm 2xl:text-md font-[500] font-[montserrat] border-b border-gray-400/20" href={item.slug}>
                                          <svg width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 w-0 group-hover:w-8 m-0 transition-all rtl:rotate-180'>
                                            <path d="M9.35632 0L8.36162 0.994699L12.2981 4.93822H0V6.34914H12.2981L8.36162 10.2927L9.35632 11.2874L15 5.64368L9.35632 0Z" />
                                          </svg>
                                          {item.title}</Link></li>
                                    )
                                  }
                                })}
                              </ul>
                            </div>
                          </div>
                        </React.Fragment>
                      )
                    })}
                  </div>

                  {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="site-logo 1xl:block hidden py-2 self-center ">
                          {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                            return (
                              <Link key={index} href={item.slug}><Image src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img m-auto w-[190px] xl:w-[210px]  w-[180px]" /></Link>
                            )
                          })}
                        </div>
                      </React.Fragment>
                    )
                  })}
                  <div className="w-[0] lg:w-full 1xl:w-[84%] 2xl:w-[82%] z-10">

                    <nav id="mainmenu" className="main-menu lg:static fixed w-full h-full lg:max-h-auto max-h-[100vh] pt-px overflow-auto lg:overflow-visible  ltr:lg:left-auto ltr:-left-full rtl:lg:right-auto rtl:-right-full top-0 z-20 transition-all ">
                      <div className="text-end justify-between items-center px-6 bg-violet-400 lg:hidden flex">
                        {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div className="logo py-2 self-center ">
                                {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                                  return (
                                    <Link key={index} href={item.slug}><Image src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img m-auto w-[190px] xl:w-[210px] " /></Link>
                                  )
                                })}
                              </div>
                            </React.Fragment>
                          )
                        })}
                        <button name="close" onClick={() => toggleClass()} className="text-green-900 text-[22px] py-3" aria-label="Close">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-none stroke stroke-[1.5px] stroke-black'> <path d="M18 6L6 18" /><path d="M6 6L18 18" /></svg>
                        </button>
                      </div>
                      <ul className="main-nav group default w-full lg:flex items-center justify-center 1xl:justify-end lg:bg-transparent bg-white">
                        {Data.mega_menu.main_nav && Data.mega_menu.main_nav.map((sub_menu_column, index) => {
                          let class_name = 'md:py-10 py-6 mega-menu lg:shadow-xl bg-blue-800 hidden lg:group-hover/item:block lg:absolute w-full left-0 z-10 bg-violet-400 top-full '
                          if (sub_menu_column.class) {
                            class_name = sub_menu_column.class
                          }
                          let li_class = 'ltr:xl:ml-4 rtl:xl:mr-4 ltr:lg:ml-3 rtl:lg:mr-3 ltr:2xl:ml-6 rtl:2xl:mr-6 group/item flex lg:flex-nowrap flex-wrap items-center lg:border-b-2 border-transparent lg:border-t-0 border-t border-t-gray-900/10 dark:border-t-white/05  dark:border-t-white/10 cursor-pointer lg:hover:border-violet-900 transition-all'
                          if (sub_menu_column.li_class) {
                            li_class = sub_menu_column.li_class
                          }
                          return (
                            <React.Fragment key={index}>
                              <li className={li_class}>
                                <Link href={sub_menu_column.slug} className="lg:text-white text-gray-900 lg:inline-block w-auto grow flex justify-between items-center  font-normal text-md lg:text-sm 2xl:text-[15px] font-[montserrat] px-6 lg:px-0 py-4 lg:py-3.5">
                                  {sub_menu_column.title}
                                </Link>

                                <span className={"px-6 lg:px-0 py-0 lg:py-3.5  lg:border-transparent ltr:border-l rtl:border-r border-gray-900/10 dark:border-l-white/10 group " + ((sub_menu_column.title) == isShown ? 'active' : '')} onClick={() => menuClick(sub_menu_column.title)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 14 8" fill="none" className="lg:group-[.active]:rotate-0 group-[.active]:rotate-180 inline-block lg:stroke-white stroke-gray-800  ltr:ml-1 rtl:mr-1 ltr:xl:ml-1 rtl:xl:mr-1.5 rtl:ml-0">
                                    <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" className="stroke-[1.4px]" />
                                  </svg>
                                </span>

                                <div className={class_name + ((sub_menu_column.title) == isShown ? 'menu_open' : '')} id="menu_open">
                                  <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">

                                    <div className="grow flex flex-wrap max-w-full">
                                      {(sub_menu_column.Clarity) ?
                                        <Diamond_Clarity initialValues={sub_menu_column.Clarity} />
                                        : ''
                                      }
                                      {sub_menu_column.child_item && sub_menu_column.child_item.map((sub_menu_column, index) => {
                                        let width = ''
                                        if (sub_menu_column.column) {
                                          width = sub_menu_column.column
                                        }
                                        return (
                                          <React.Fragment key={index}>
                                            <div className={width + "  lg:mb-0 mb-3"}><Nav initialValues={sub_menu_column} /></div>
                                          </React.Fragment>
                                        )
                                      })}

                                      {(sub_menu_column.img_with_button) ?

                                        <div className={sub_menu_column.img_with_button_width + " "}>
                                          {sub_menu_column.img_with_button && sub_menu_column.img_with_button.map((img_item, index) => {
                                            return (
                                              <React.Fragment key={index}>
                                                <p className="text-[15px] 2xl:text-md font-semibold mb-5 text-gray-800 uppercase">{img_item.label}</p>
                                                <div className="relative  mb-5">
                                                  <Image src={img_item.img_src} width={500} height={250} alt={img_item.img_alt} title={img_item.img_alt} className=" ltr:mr-2 rtl:ml-2 w-full" />
                                                </div>
                                                <div className="flex items-center text-center gap-3">
                                                  {img_item.buttons && img_item.buttons.map((img_item, index) => {
                                                    return (
                                                      <React.Fragment key={index}>
                                                        <Link className={"all-btn w-1/2 px-2 " + img_item.class} href={img_item.slug}>{img_item.label}</Link>
                                                      </React.Fragment>
                                                    )
                                                  })}
                                                </div>
                                              </React.Fragment>
                                            )
                                          })}
                                        </div>
                                        : ''
                                      }

                                      {(sub_menu_column.product_sections) ?
                                        <>
                                          {sub_menu_column.product_sections && sub_menu_column.product_sections.map((Product_item, index) => {
                                            let width = ''
                                            if (Product_item.column) {
                                              width = Product_item.column
                                            }
                                            return (
                                              <div className={width + " "} key={index}>
                                                <React.Fragment key={index}>
                                                  <p className="2xl:text-md text-[15px] font-semibold mb-5 text-gray-800 uppercase mx-3">{Product_item.title}</p>
                                                  <div className="relative flex gap-2 mx-3">
                                                    <Relative_Product_Box initialValues={Product_item.img_two_btns} />
                                                  </div>
                                                  <Link className="text-gray-800 text-lg  mt-5 uppercase my-3 flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={Product_item.btn_slug}>{Product_item.btn_title}<Image src={Product_item.btn_img} width={14} height={14} alt={Product_item.btn_alt} title={Product_item.btn_alt} className="ml-1 inline-block relative white-img rtl:rotate-180 " /></Link>
                                                </React.Fragment>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''
                                      }
                                      {(sub_menu_column.diamond_shape) ?
                                        <>
                                          {sub_menu_column.diamond_shape && sub_menu_column.diamond_shape.map((diamond_shape_item, index) => {
                                            let width = ''
                                            if (diamond_shape_item.column) {
                                              width = diamond_shape_item.column
                                            }
                                            return (
                                              <div className={width + ""} key={index}>
                                                <div className="flex items-center mb-5 justify-between">
                                                  <p className="2xl:text-md text-[15px] font-semibold mx-3  text-gray-800 uppercase">{diamond_shape_item.label}</p>
                                                  <Link className="text-gray-800 hover:text-violet-900 text-[15px] uppercase font-semibold mb-3 flex items-center transition-all hover:text-violet-900" href={diamond_shape_item.btn_slug}>{diamond_shape_item.btn_label}<Image src={diamond_shape_item.btn_img} width={14} height={14} alt={diamond_shape_item.btn_alt} title={diamond_shape_item.btn_alt} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                                </div>
                                                <div className="relative mx-3 grid 1xl:grid-cols-6 xl:grid-cols-4 sm:grid-cols-6 grid-cols-3 gap-6 sm:gap-10">
                                                  <Diamond_shapes initialValues={diamond_shape_item.item} />
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''
                                      }
                                      {(sub_menu_column.insta_items) ?
                                        <>
                                          {sub_menu_column.insta_items && sub_menu_column.insta_items.map((insta_items_item, index) => {
                                            let width = ''
                                            if (insta_items_item.column) {
                                              width = insta_items_item.column
                                            }
                                            return (
                                              <div className={width + " lg:mx-0 sm:mx-3 mx-1"} key={index}>
                                                <p className="text-[15px] 2xl:text-md font-semibold  mb-5 text-gray-800 uppercase">{insta_items_item.label}</p>
                                                <div className="relative grid sm:grid-cols-3 grid-cols-2 gap-2.5">
                                                  <Insta_imgs initialValues={insta_items_item.items} />
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''
                                      }
                                      {(sub_menu_column.post_items) ?
                                        <>
                                          {sub_menu_column.post_items && sub_menu_column.post_items.map((post_item, index) => {
                                            let width = ''
                                            if (post_item.column) {
                                              width = post_item.column
                                            }
                                            return (
                                              <div className={width + " "} key={index}>
                                                <div className="flex items-center mb-5 justify-between">
                                                  <p className="text-[15px] 2xl:text-md font-semibold mx-3  text-gray-800 uppercase">{post_item.label}</p>
                                                  <Link className="text-gray-800 hover:text-violet-900 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={post_item.btn_slug}>{post_item.btn_label} <Image src={post_item.btn_img} width={14} height={14} alt={post_item.btn_alt} title={post_item.btn_alt} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                                </div>
                                                <div className="relative mx-3 mb-5">
                                                  <Nav_posts initialValues={post_item.items} />
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''
                                      }
                                      {(sub_menu_column.products_item) ?
                                        <>
                                          {sub_menu_column.products_item && sub_menu_column.products_item.map((child_item, index) => {
                                            let width = ''
                                            if (child_item.column) {
                                              width = child_item.column
                                            }
                                            return (
                                              <div className={width + "  xl:mt-0 mt-3 lg:pl-8"} key={index}>
                                                <div className="flex items-center mb-5 justify-between">
                                                  <p className="2xl:text-md text-[15px] font-semibold mx-3  text-gray-800 uppercase">{child_item.label}</p>
                                                  <Link className="text-gray-800 hover:text-violet-900 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={child_item.btn_link}>{child_item.btn_title} <Image src={child_item.btn_icon_img} width={14} height={14} alt={child_item.btn_icon_label} title={child_item.btn_icon_label} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                                </div>
                                                <div className="mx-3">
                                                  <Swiper modules={[Navigation]} spaceBetween={18} slidesPerView={4}
                                                    breakpoints={{
                                                      0: {
                                                        slidesPerView: 2,
                                                      },
                                                      768: {
                                                        slidesPerView: 3,
                                                      },
                                                      1024: {
                                                        slidesPerView: 4,
                                                      },
                                                    }} navigation >
                                                    {Product_slider(child_item.items)}
                                                  </Swiper>
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''}
                                      {(sub_menu_column.single_product) ?
                                        <>
                                          {sub_menu_column.single_product && sub_menu_column.single_product.map((item, index) => {
                                            let width = ''
                                            if (item.column) {
                                              width = item.column
                                            }
                                            return (
                                              <div className={width + " lg:mx-0 mx-3"} key={index}>
                                                <div className="flex items-center mb-5 justify-between">
                                                  <p className="2xl:text-md text-[15px] font-semibold text-gray-800 uppercase">{item.label} </p>
                                                  <Link className="text-gray-800 hover:text-violet-900 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={item.btn_link}>{item.btn_title} <Image src={item.btn_icon_img} width={14} height={14} alt={item.btn_icon_label} title={item.btn_icon_label} className="white-img ml-1 rtl:mr-1 rtl:rotate-180 inline-block relative" /></Link>
                                                </div>
                                                <div className="relative  mb-5 p-4 bg-white shadow-boxhover flex flex-wrap ">
                                                  <div className="relative sm:w-2/5 w-full">
                                                    <Image src={item.pro_img} width={260} height={230} alt={item.pro_alt} title={item.pro_alt} className=" ltr:mr-2 rtl:ml-2 h-full object-cover w-full" />
                                                    <span className="w-12 h-12 rounded-full bg-violet-900 text-white text-[13px] font-semibold uppercase flex items-center justify-center absolute top-2.5 left-2.5">{item.sale_tag}</span>
                                                  </div>
                                                  <div className="sm:w-3/5 p-4 md:pl-6">
                                                    <Link className="text-gray-800 hover:text-violet-900 text-lg lg:text-[20px] 2xl:text-[22px] uppercase font-[nabi] block mb-2" href={item.pro_slug}>{item.pro_name}</Link>
                                                    <p className="2xl:text-md text-[15px] text-gray-800 mb-3">{item.pro_des}</p>
                                                    <p><span className="sale-price text-lg text-gray-400 line-through ">${item.pro_reg_price}</span><span className="regular-price text-lg text-gray-800 ml-3">${item.pro_sale_price}</span></p>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ''}
                                    </div>

                                    {(sub_menu_column.gifts_item) ?
                                      <div className=" w-full">
                                        {sub_menu_column.gifts_item && sub_menu_column.gifts_item.map((child_item, index) => {
                                          return (
                                            <React.Fragment key={index}>
                                              <p className="text-md font-semibold mx-3 mb-5 text-gray-800 uppercase">{child_item.label}</p>
                                              <div className="relative mx-3 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                                                <Gift_Products initialValues={child_item.items} />
                                              </div>
                                              <Link className="text-gray-800 text-lg mx-3 uppercase mt-6 inline-flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={child_item.btn_slug}>{child_item.btn_label} <Image src={child_item.btn_img} width={14} height={14} alt={child_item.btn_label} title={child_item.btn_label} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                            </React.Fragment>
                                          )
                                        })}
                                      </div>
                                      : ''
                                    }

                                  </div>
                                </div>
                              </li>
                            </React.Fragment>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                  <div className="lg:hidden">
                    <button name="mobile-menu-view" onClick={() => toggleClass()} className="sm:w-[40px] w-[38px] block p-2" aria-label="Close">
                      <span className="w-full bg-[#fff] h-[2px] mb-[5px] sm:mb-1.5 block"></span>
                      <span className="w-full bg-[#fff] h-[2px] mb-[5px] sm:mb-1.5 block"></span>
                      <span className="w-full bg-[#fff] h-[2px] mb-0 block"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Header_h4
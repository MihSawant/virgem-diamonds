import Image from 'next/image'
import Link from 'next/link'
import { Button, Select, SelectItem, Avatar, Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchData } from '../comman';
import Nav from '../comman/nav';
import Relative_Product_Box from '../comman/relative_product_box';
import Diamond_Clarity from '../comman/nav_diamond_clarity';
import { useRouter } from 'next/router';

function Header_h2() {

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
    const new_class = old_class === 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-0 top-0 bg-white z-10 transition-all ' ? 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-full top-0  z-10 transition-all' : 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-0 top-0 bg-white z-10 transition-all '
    document.getElementById('mainmenu').className = new_class
  }

  //Toggle Searchbar:
  const toggleCss = () => {
    const toggle_class = document.getElementById('toggleSearch').className;
    const add_class = toggle_class === 'ltr:ml-auto rtl:mr-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group active' ? 'ltr:ml-auto rtl:mr-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group' : 'ltr:ml-auto rtl:mr-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group active'
    document.getElementById('toggleSearch').className = add_class
    const old_class = document.getElementById('searchCategory').className;
    const new_class = old_class === 'w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 top-0 visible opacity-100 transition-all scale-1 origin-center' ? ' w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 -top-full invisible opacity-0 transition-all scale-0 origin-center' : 'w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 top-0 visible opacity-100 transition-all scale-1 origin-center'
    document.getElementById('searchCategory').className = new_class
  }

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  /* ================ Loop Functions ==================*/

  const Diamond_shapes = ({ initialValues }) => {

    return (
      initialValues && initialValues.map((items, index) => {
        return (
          <div className="relative cursor-pointer" key={index}>
              <Link className="block" href={items.slug}><div className="flex m-auto items-center justify-center w-full lg:h-28 2xl:h-32 h-24 bg-white outline outline-1 outline-offset-4 outline-violet-900">
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
    <div className='transition-all border-b border-white/10 bg-black/10 absolute top-0 left-0 w-full h-auto  z-30 header2' id="header">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="top-bar border-b border-white/10" key={index}>
              <div className="flex justify-between items-center  px-3 lg:px-3.5 2xl:px-6 py-0.5">
                {Data.top_bar && Data.top_bar.map((lang_country, index) => {

                  return (
                    <ul className="flex items-center " key={index}>

                      <li className="flex -ml-1">
                        <Select
                          items={lang_country.Lang}
                          placeholder="Select a language"
                          defaultSelectedKeys={['English']}
                          classNames={{
                            base: "dark bg-transparent text-white wp-country text-[13px] w-full focus:outline-none font-light",
                            trigger: "uppercase text-[13px] p-1",
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
                      </li>
                      <li className="flex lg:ltr:ml-2.5 ltr:ml-1.5 lg:rtl:mr-2.5 rtl:mr-1.5">
                        <Select
                          items={lang_country.Country}
                          placeholder="Select a Currency"
                          defaultSelectedKeys={['USD']}
                          classNames={{
                            base: "dark bg-transparent text-white wp-country text-[13px] w-full focus:outline-none font-light",
                            trigger: "uppercase text-[13px]  p-1",
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
                      </li>
                    </ul>
                  )
                })}
                <ul className="flex items-center ">
                  {/* <li className="ltr:mr-3 rtl:ml-3 ltr:lg:mr-8 rtl:lg:ml-8"><Link href={lang_country.call_slug} className="text-white text-[0] hover:opacity-80 transition-all  lg:text-[13px] font-light uppercase flex items-center leading-tight"> <Image src={lang_country.call_img} width={19} height={19} alt={lang_country.call_alt} title="call" className="ltr:mr-1 rtl:ml-1" />{lang_country.call_label}</Link></li>
                  <li ><Link href={lang_country.mail_slug} className="text-white text-[0] lg:text-[13px] hover:opacity-80 transition-all font-light uppercase flex items-end leading-tight"> <Image src={lang_country.mail_img} width={20} height={20} alt={lang_country.mail_alt} title="mail" className="sm:ltr:mr-3.5 ltr:mr-2.5 rtl:ml-3.5 lg:rtl:ml-2" />{lang_country.mail_label}</Link></li> */}

                  {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {mid_bar_item.mid_bar_right && mid_bar_item.mid_bar_right.map((right_item, index) => {
                          if (right_item.not_for && !right_item.not_for.includes(current_uri)) {
                            return (
                              <li key={index} className="sm:ltr:mr-2 ltr:mr-1.5 last:ltr:mr-0 last:rtl:ml-0 sm:rtl:ml-2 rtl:ml-1.5 ltr:lg:mr-5 rtl:lg:ml-5 last:mr-0 last-mt-0">
                                <Link href={right_item.slug} className="text-white text-[0] lg:text-[13px] hover:opacity-80 transition-all font-light uppercase flex items-end leading-tight"> <Image src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className=" sm:w-[16px] w-[18px] header-icons ltr:sm:mr-1.5 rtl:sm:ml-1.5 brightness-[200]" />{right_item.label}</Link>
                              </li>
                            )
                          }
                        })}
                      </React.Fragment>
                    )
                  })}

                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between  transition-all relative xl:p-0 p-2.5">
              {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="xl:hidden block w-1/4">
                      <div className="flex items-center justify-start">
                        <button name="mobile-menu-view" onClick={() => toggleClass()} className="sm:w-[38px] w-[26px] block sm:p-2 p-1" aria-label="Close">
                          <span className="w-full bg-white dark:bg-[#fff] h-[1px] mb-[6px] block"></span>
                          <span className="w-full bg-white dark:bg-[#fff] h-[1px] mb-[6px] block"></span>
                          <span className="w-full bg-white dark:bg-[#fff] h-[1px] mb-0 block"></span>
                        </button>
                      </div>
                    </div>
                    <div className="site-logo 2xl:px-6 xl:px-3 xl:w-auto w-2/4">
                      {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                        return (
                          <Link key={index} href={item.slug}><Image src={item.img} width={260} height={30} alt={item.alt} title="main-logo" className="white-img brightness-[10] m-auto 2xl:w-[260px] 1xl:w-[210px] w-[190px]" /></Link>
                        )
                      })}
                    </div>
                    <div className="grow z-10 ltr:2xl:pr-4 rtl:2xl:pl-4 ltr:pr-2 rtl:pl-2 xl:py-0  xl:border-l xl:border-r border-white/20 ">

                      <nav id="mainmenu" className="main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] pt-px overflow-auto xl:overflow-visible  xl:left-auto -left-full top-0 z-20 transition-all ">
                        <div className=" flex justify-between items-center xl:hidden px-6 bg-violet-400 ">
                          {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="logo py-2 self-center ">
                                  {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                                    return (
                                      <Link key={index} href={item.slug}><Image src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img m-auto w-[190px] xl:w-[210px]  w-[180px]" /></Link>
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
                        <ul className="main-nav group white large-screen  w-full xl:flex items-center justify-center">
                          {Data.mega_menu.main_nav && Data.mega_menu.main_nav.map((sub_menu_column, index) => {
                            let class_name = 'md:py-10 py-6 mega-menu  xl:shadow-xl bg-blue-800 hidden xl:group-hover/item:block xl:absolute w-full left-0 z-10 bg-violet-400 top-full '
                            if (sub_menu_column.class) {
                              class_name = sub_menu_column.class
                            }
                            let li_class = 'ltr:xl:ml-2  rtl:xl:mr-2 ltr:1xl:ml-3.5 rtl:1xl:mr-3.5 ltr:2xl:ml-6 rtl:2xl:mr-6 group/item flex xl:flex-nowrap flex-wrap items-center xl:border-b-2 border-transparent xl:border-t-0 border-t border-t-gray-900/10 dark:border-t-white/05  dark:border-t-white/10  xl:hover:border-white transition-all'
                            if (sub_menu_column.li_class) {
                              li_class = sub_menu_column.li_class
                            }
                            return (
                              <React.Fragment key={index}>
                                <li className={li_class}>
                                  <Link href={sub_menu_column.slug} className="xl:text-white text-gray-800 xl:inline-block w-auto grow flex justify-between items-center font-light text-md 1xl:text-[14px] xl:text-[13px] 2xl:text-[15px] uppercase px-6 xl:px-0 py-4 xl:py-8">
                                    {sub_menu_column.title}
                                  </Link>

                                  <span className={"px-6 xl:px-0 py-0 xl:py-3.5 xl:border-transparent ltr:border-l rtl:border-r border-gray-900/10 dark:border-l-white/10 group " + ((sub_menu_column.title) == isShown ? 'active' : '')} onClick={() => menuClick(sub_menu_column.title)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 14 8" fill="none" className="xl:group-[.active]:rotate-0 group-[.active]:rotate-180 inline-block xl:stroke-white stroke-gray-800 xl:group-hover:stroke-white ltr:ml-1 rtl:mr-1 ltr:xl:ml-1 rtl:xl:mr-1 rtl:ml-0">
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
                                              <div className={width + "  xl:mb-0 mb-3"}><Nav initialValues={sub_menu_column} /></div>
                                            </React.Fragment>
                                          )
                                        })}

                                        {(sub_menu_column.img_with_button) ?

                                          <div className={sub_menu_column.img_with_button_width + " lg:mx-0 sm:mx-3 mx-1"}>
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
                                                    <Link className="text-gray-800 text-lg  mt-5 uppercase my-3 flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={Product_item.btn_slug}>{Product_item.btn_title}<Image src={Product_item.btn_img} width={14} height={14} alt={Product_item.btn_alt} title={Product_item.btn_alt} className="ltr:ml-1 rtl:mr-1 inline-block relative white-img rtl:rotate-180 " /></Link>
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
                                                    <Link className="text-gray-800 text-[15px] uppercase font-semibold mb-3 flex items-center transition-all hover:text-violet-900" href={diamond_shape_item.btn_slug}>{diamond_shape_item.btn_label}<Image src={diamond_shape_item.btn_img} width={14} height={14} alt={diamond_shape_item.btn_alt} title={diamond_shape_item.btn_alt} className="ltr:ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
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
                                                    <Link className="text-gray-800 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={post_item.btn_slug}>{post_item.btn_label} <Image src={post_item.btn_img} width={14} height={14} alt={post_item.btn_alt} title={post_item.btn_alt} className="ltr:ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
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
                                                <div className={width + "  xl:mb-0 mb-3 lg:pl-8"} key={index}>
                                                  <div className="flex items-center mb-5 justify-between">
                                                    <p className="2xl:text-md text-[15px] font-semibold mx-3  text-gray-800 uppercase">{child_item.label}</p>
                                                    <Link className="text-gray-800 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={child_item.btn_link}>{child_item.btn_title} <Image src={child_item.btn_icon_img} width={14} height={14} alt={child_item.btn_icon_label} title={child_item.btn_icon_label} className="ltr:ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                                  </div>
                                                  <div className="mx-3">
                                                    <Swiper modules={[Navigation]} spaceBetween={18} 
                                                      breakpoints={{
                                                        0: {
                                                          slidesPerView: 2,
                                                        },
                                                        991: {
                                                          slidesPerView: 3,
                                                        },
                                                        1024: {
                                                          slidesPerView: 4,
                                                        },
                                                      }} navigation  dir='ltr'>
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
                                                <div className={width + " lg:mx-0 mx-1 sm:mx-3"} key={index}>
                                                  <div className="flex items-center mb-5 justify-between">
                                                    <p className="2xl:text-md text-[15px] font-semibold text-gray-800 uppercase">{item.label} </p>
                                                    <Link className="text-gray-800 text-[15px] uppercase font-semibold  flex items-center transition-all hover:text-violet-900" href={item.btn_link}>{item.btn_title} <Image src={item.btn_icon_img} width={14} height={14} alt={item.btn_icon_label} title={item.btn_icon_label} className="white-img ltr:ml-1 rtl:mr-1 rtl:rotate-180 inline-block relative" /></Link>
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
                                                <Link className="text-gray-800 text-lg mx-3 uppercase mt-6 inline-flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={child_item.btn_slug}>{child_item.btn_label} <Image src={child_item.btn_img} width={14} height={14} alt={child_item.btn_label} title={child_item.btn_label} className="ltr:ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
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
                    <div className="right-content 2xl:px-6 1xl:px-[1%] px-1  xl:w-auto w-1/4">
                      <ul className="flex items-center justify-end ">

                        <li>
                          <div className=" flex justify-between grow text-end  ">
                            <button className="ltr:ml-auto rtl:mr-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group" onClick={() => toggleCss()} aria-label="Close" id="toggleSearch">
                              <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg" width={20} height={20} alt="main-logo" title="main-logo" className="white-img  block brightness-[200] sm:w-[22px] w-[18px]" />
                            </button>

                          <div id="searchCategory" className="w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 -top-full invisible opacity-0 transition-all scale-0 origin-center">
                          <button className="2xl:mb-32 mb-12  border-[1.5px] border-white/25 bg-white/20 hover:bg-white/40 rounded-full group w-10 h-10 flex items-center justify-center " onClick={() => toggleCss()} aria-label="Close" id="toggleSearch">
                               <svg width="18" height="18" viewBox="0 0 14 15"  xmlns="http://www.w3.org/2000/svg" className=" stroke-[1.5] stroke-white  sm:w-[22px] w-[14px]">
                                <path d="M12.3778 1.43341L1.37781 13.4334" />
                                <path d="M1.37781 1.43341L12.3778 13.4334" />
                              </svg>
                            </button>
                            <form className="flex items-center justify-between pr-2 pl-4 py-2 lg:w-1/2 w-full bg-white rounded-full shadow-lg">
                              {mid_bar_item.searchCategory && mid_bar_item.searchCategory.map((searchCategoryItem, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <div className="searchbar flex items-center grow">
                                      {searchCategoryItem.searchbar_center && searchCategoryItem.searchbar_center.map((item, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <input type="text" placeholder={item.placeholder} className="focus:outline-none text-[14px] lg:p-4 lg:px-2 lg:py-0 placeholder:text-[#2F2F2F] grow font-normal text-gray-800 uppercase w-full bg-transparent border-none rounded-none" />
                                            <Button type='submit' className='lg:px-8 min-w-0 px-4 bg-violet-900 hover:bg-gray-900 rounded-full lg:py-6 py-3'> <Image src={item.img} width={24} height={24} alt={item.alt} title="search" className="brightness-[200] " /></Button>
                                          </React.Fragment>
                                        )
                                      })}
                                    </div>
                                  </React.Fragment>
                                )
                              })}
                            </form>
                          </div>  
                            
                          </div>
                        </li>

                      </ul>

                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Header_h2
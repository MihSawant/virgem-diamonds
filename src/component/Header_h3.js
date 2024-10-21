import Image from 'next/image'
import Link from 'next/link'
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
import SearchDetailed from './DetailedSearch';

function Header_h3() {

  const router = useRouter()
  const current_uri = router.asPath
  const { data } = useFetchData("json/data/Header.json");

  //Toggle Main Menu:
  const toggleClass = () => {
    const old_class = document.getElementById('mainmenu').className;
    const new_class = old_class === 'main-menu fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-0 top-0 bg-white z-20 transition-all ' ? 'main-menu fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-full top-0 z-20 transition-all' : 'main-menu fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto -left-0 top-0 bg-white z-20 transition-all '
    document.getElementById('mainmenu').className = new_class
  }

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
    <div className="header3 border-b border-white/20 absolute top-0 left-0 w-full h-auto  z-50" id="header">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="container flex items-center justify-between  transition-all relative lg:py-8 sm:py-4 py-2.5 sm:px-2 px-0">
              {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {

                return (
                  <React.Fragment key={index}>

                    <div className="lg:w-1/3 w-1/4 z-10 2xl:pr-4 pr-2  ">
                      <div className="">
                        <button name="mobile-menu-view" onClick={() => toggleClass()} className="1xl:w-[50px] sm:w-[40px] w-[35px] block p-2" aria-label="Close">
                          <span className="w-full bg-white dark:bg-[#fff] h-[2px] xl:mb-2 mb-1.5 block"></span>
                          <span className="w-full bg-white dark:bg-[#fff] h-[2px] xl:mb-2 mb-1.5 block"></span>
                          <span className="w-full bg-white dark:bg-[#fff] h-[2px] mb-0 block"></span>
                        </button>
                      </div>

                      <nav id="mainmenu" className="main-menu  fixed w-full h-full max-h-[100vh] pt-px overflow-auto -left-full top-0 z-20 transition-all ">
                        <div className="flex ">
                          <div className="lg:w-4/6 w-full">
                            <div className=" flex justify-between items-center sm:py-4 sm:px-6 px-4 bg-violet-400 block">
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

                            <ul className="main-nav group full-screen w-full grow overflow-auto lg:max-h-[calc(100vh-80px)]">
                              {Data.mega_menu.main_nav && Data.mega_menu.main_nav.map((sub_menu_column, index) => {
                                let class_name = 'md:py-10 py-6 mega-menu bg-blue-800 hidden  w-full left-0 z-10 bg-violet-400 top-full '
                                if (sub_menu_column.class) {
                                  class_name = sub_menu_column.class
                                }
                                let li_class = 'group/item flex flex-wrap items-center border-transparent border-t border-t-gray-900/10 dark:border-t-white/05  dark:border-t-white/10  transition-all'
                                if (sub_menu_column.li_class) {
                                  li_class = sub_menu_column.li_class
                                }
                                return (
                                  <React.Fragment key={index}>
                                    <li className={li_class}>
                                      <Link href={sub_menu_column.slug} className="text-gray-800 w-auto grow flex justify-between items-center font-light 2xl:text-1xl lg:text-xl text-[20px] sm:px-8 px-4 sm:py-6 py-4 font-[nabi] ">
                                        {sub_menu_column.title}
                                      </Link>

                                      <span className={"px-6  ltr:border-l rtl:border-r border-gray-900/10 dark:border-l-white/10 group cursor-pointer " + ((sub_menu_column.title) == isShown ? 'active' : '')} onClick={() => menuClick(sub_menu_column.title)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 14 8" fill="none" className=" group-[.active]:rotate-180 inline-block stroke-gray-800 ltr:ml-1 rtl:mr-1 rtl:ml-0 md:w-6 md:h-2">
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

                                              <div className={sub_menu_column.img_with_button_width + " "}>
                                                {sub_menu_column.img_with_button && sub_menu_column.img_with_button.map((img_item, index) => {
                                                  return (
                                                    <React.Fragment key={index}>
                                                      <p className="text-[15px] 2xl:text-md font-semibold mb-5 text-gray-800 uppercase">{img_item.label}</p>
                                                      <div className="relative  mb-5">
                                                        <Image src={img_item.img_src} width={500} height={250} alt={img_item.img_alt} title={img_item.img_alt} className=" ltr:mr-2 rtl:ml-2 w-full" />
                                                      </div>
                                                      <div className="flex items-center text-center xl:gap-3 gap-2">
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
                                                          }} navigation dir='ltr'>
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
                          </div>
                          <div className='w-2/6 lg:block hidden bg-violet-900 relative'>
                            <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/megamenu-img-2.jpg' layout="fill" alt='starry jewellery' title='starry jewellery' className="object-cover" />
                          </div>
                        </div>
                      </nav>
                    </div>

                    <div className="lg:w-1/3 w-2/4 site-logo 2xl:px-6 sm:px-2 grow">
                      {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                        return (
                          <Link key={index} href={item.slug}><Image src={item.img} width={260} height={30} alt={item.alt} title="main-logo" className="white-img brightness-[10] m-auto 2xl:w-[280px] w-[230px]" /></Link>
                        )
                      })}
                    </div>

                    <div className="lg:w-1/3 w-1/4 right-content 2xl:px-6 px-2">
                      <ul className="flex items-center justify-end lg:mr-0 lg:ml-0 ltr:mr-1.5 rtl:ml-1.5 ltr:md:-mr-1.5 rtl:md:-ml-1.5 text-change">
                        <li>
                          <SearchDetailed />
                          {/* <div className=" flex justify-between grow text-end ltr:mr-1 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 ltr:lg:mr-4 rtl:lg:ml-4 ">
                            <button className="ltr:ml-auto rtl:mr-auto inline-block font-light flex items-center justify-center group text-white text-[0] lg:text-sm uppercase hover:opacity-60 transition" onClick={() => toggleCss()} aria-label="Close" id="toggleSearch">
                              <Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg" width={20} height={20} alt="main-logo" title="main-logo" className="rtl:sm:ml-1 sm:mr-1.5 white-img group-[.active]:hidden block brightness-[200] 2xl:w-5" />
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-[.active]:block hidden stroke-[1.5] stroke-white rtl:sm:ml-1 sm:mr-1.5 white-img mb-0.5">
                                <path d="M15.75 5.25L5.25 15.75" />
                                <path d="M5.25 5.25L15.75 15.75" />
                              </svg>
                              Search
                            </button>
                            <form id="searchCategory" className="flex items-center justify-between p-0 lg:p-2 border-b border-gray-800 bg-white lg:w-auto w-full absolute left-0 top-[60%] invisible opacity-0 transition-all">
                              {mid_bar_item.searchCategory && mid_bar_item.searchCategory.map((searchCategoryItem, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <div className="searchbar flex items-center grow">
                                      <SearchDetailed />
                                      {searchCategoryItem.searchbar_center && searchCategoryItem.searchbar_center.map((item, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <Image src={item.img} width={20} height={20} alt={item.alt} title="search" className="lg:order-1 order-2 lg:mr-0 ltr:mr-3.5 rtl:ml-3.5" />
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
                          </div> */}
                        </li>
                        {mid_bar_item.mid_bar_right && mid_bar_item.mid_bar_right.map((right_item, index) => {
                          if (right_item.not_for && !right_item.not_for.includes(current_uri)) {
                            return (
                              <li key={index} className="ltr:mr-1 last:ltr:mr-0 last:rtl:ml-0 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 ltr:lg:mr-4 rtl:lg:ml-4 sm:block hidden  hover:opacity-60 transition"><Link href={right_item.slug} className='text-white text-[0] lg:text-sm uppercase flex items-center font-light leading-tight'> <Image src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className="rtl:sm:ml-1 sm:mr-1.5 sm:w-[22px] w-[18px] header-icons brightness-[200] text-white" />{right_item.label}</Link></li>
                            )
                          }
                        })}
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

export default Header_h3
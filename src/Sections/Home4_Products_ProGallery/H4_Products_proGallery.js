import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@nextui-org/react'
import { BoxedProduct } from '../../comman'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Thumbs } from 'swiper/modules'

const H4_Pro_ProductGallery = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const get_badge = (badge_type='') => {
    if(badge_type){
        if(badge_type === 'In available'){
            return(
                <p className="sm:text-[13px] text-[12px] text-[#136400] uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }else if(badge_type === 'Sold Out'){
            return(
                <p className="sm:text-[13px] text-[12px] text-[#a50000] uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }else if(badge_type === 'In Stock'){
            return(
                <p className="sm:text-[13px] text-[12px] text-[#a5009e] uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }else if(badge_type === 'New Arrivals'){
            return(
                <p className="sm:text-[13px] text-[12px] text-[#cb7200] uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }else if(badge_type === 'Best Seller'){
            return(
                <p className="sm:text-[13px] text-[12px] text-[#002eb7] uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }else{
            return(
                <p className="sm:text-[13px] text-[12px] text-gray-600 uppercase text-center mb-1 font-montserrat font-[600]">{badge_type}</p>
            )
        }
    }
}
  return (
    <>
      {isLoading ? (
        <div className='2xl:pt-20 lg:pt-16 pt-14'>
          <div className='container'>
          <div className='flex items-center sm:flex-row flex-col  sm:justify-between justify-center border-b border-gray-400/20 sm:mb-8 mb-4 pb-6'>
                <h2 className='text-black lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight sm:text-left text-center sm:mb-0 mb-3 sm:max-w-[70%] font-catchye capitalize'>
                  recommended for you
                </h2>
                <Link className='all-btn rounded font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4' href='/shop' >
                  all recommended
                  <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-white group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180 transition-all'>
                    <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                  </svg>
                </Link>
              </div>

              <div className='flex items-stretch xl:flex-nowrap flex-wrap xl:gap-4 xl:mx-0 -mx-2'>
                    <div className='xl:w-3/5 lg:w-1/2 w-full xl:p-0 p-2'>
                        <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                            <div className="bg-gray-300 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4  xl:block hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                            <div className="bg-gray-300 p-4  xl:block hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <Skeleton className="w-24 h-8 rounded" />
                                    <Skeleton className="w-6 h-6 rounded-full" />
                                </div>
                                    <Skeleton className="w-full h-12 mb-2 rounded" />
                                <div className='relative'>  
                                    <Skeleton className="w-full h-52  rounded" />
                                    <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                            
                      <div className='h-full overflow-hidden relative sm:bg-center bg-white p-5'>
                        <div className="flex items-center justify-between mb-2">
                            <Skeleton className="w-24 h-8 rounded" />
                            <Skeleton className="w-6 h-6 rounded-full" />
                        </div>
                            <Skeleton className="w-full h-12 mb-2 rounded" />
                            <div>
                            <Skeleton className="w-full xl:h-[560px] lg:h-[450px] h-[350px] mb-2 rounded" />
                            <div className='grid md:grid-cols-5 grid-cols-3 gap-3'>
                            <Skeleton className="w-24 h-24  rounded" />
                            <Skeleton className="w-24 h-24  rounded" />
                            <Skeleton className="w-24 h-24  rounded" />
                            <Skeleton className="w-24 h-24  rounded" />
                            </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <Skeleton className="w-16 h-12 rounded" />
                                <Skeleton className="w-16 h-12 rounded" />
                            </div>
                        </div>
                      </div>
                    </div>
      
          </div>
        </div>
      ) : (
        <>
          <div className='2xl:mt-16 mt-12 2xl:py-16 lg:py-12 py-8 bg-violet-400'>
            <div className='container'>
              <div className='flex items-center sm:flex-row flex-col  sm:justify-between justify-center border-b border-gray-400/20 sm:mb-8 mb-4 pb-6'>
                <h2 className='text-black lg:text-3xl sm:text-1xl text-xl tracking-wide leading-tight sm:text-left text-center sm:mb-0 mb-3 sm:max-w-[70%] font-catchye capitalize'>
                  recommended for you
                </h2>
                <Link className='all-btn rounded font-montserrat text-sm sm:w-auto w-full justify-center uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4' href='/shop' >
                  all recommended
                  <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-white group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180 transition-all' >
                    <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z'></path>
                  </svg>
                </Link>
              </div>

              {initialValues &&
                initialValues.map((categories_data, index) => {
                  return (
                    <div
                      className='flex items-stretch xl:flex-nowrap flex-wrap xl:gap-4 xl:mx-0 -mx-2'
                      key={index}
                    >
                      <div className='xl:w-3/5 lg:w-1/2 w-full xl:p-0 p-2'>
                        <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                          {categories_data.product_grid &&
                            categories_data.product_grid.map(
                              (products, index) => {
                                return (
                                  <BoxedProduct
                                    initialValues={products}
                                    key={index}
                                  />
                                )
                              }
                            )}
                        </div>
                      </div>
                      <div className='xl:w-2/5 lg:w-1/2 w-full xl:p-0 p-2'>
                        {categories_data.Gallery_pro &&
                          categories_data.Gallery_pro.map(
                            (Gallery_pro, index) => {
                              return (
                                <div className='relative h-full overflow-hidden' key={index} >
                                  <div className='h-full overflow-hidden relative group sm:bg-center bg-white p-5'>
                                    <div className='flex items-center justify-between mb-2'>
                                    {get_badge(Gallery_pro.stock_badge)}
                                      <button className=' group/wishlist wishlist-pro rounded-full z-10 flex items-center justify-center'>
                                        <svg  xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23' fill='none'
                                          className='md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900'
                                        >
                                          <path d='M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z' />
                                        </svg>
                                      </button>
                                    </div>
                                    <Link href={Gallery_pro.product_link} className='text-[17px] text-black group-hover:text-violet-900 font-[600] font-montserrat capitalize mb-2 block min-h-[50px]' >
                                      {Gallery_pro.title}
                                    </Link>

                                    {/* Product Gallery */}
                                    <div>
                                        <Swiper
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        loop={true}
                                        spaceBetween={30}
                                        modules={[FreeMode, Thumbs]}
                                        className='Product_slider mb-4' dir='ltr'
                                        >
                                            {Gallery_pro.gallery && Gallery_pro.gallery.map((ProGallery, index) => {
                                                return(
                                                    <SwiperSlide key={index} className='overflow-hidden'>
                                                    <Link href={Gallery_pro.product_link}>
                                                    <Image src={ProGallery.pro_img} alt={ProGallery.img_alt} title={ProGallery.img_alt} className='w-full group-hover:scale-105 transition-all' width={600} height={570} />
                                                    </Link>
                                                </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                        <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        slidesPerView={5}
                                        spaceBetween={10}
                                        breakpoints={{
                                            '0': {
                                            slidesPerView: 3,
                                            },
                                            '430': {
                                            slidesPerView: 4,
                                            },
                                            '767': {
                                            slidesPerView: 5,
                                            }
                                        }}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Thumbs]}
                                        className='Product_Thumbslider !p-0 !m-0' dir='ltr'
                                        >
                                        {Gallery_pro.gallery && Gallery_pro.gallery.map((ProGallery, index) => {
                                                return(
                                                    <SwiperSlide key={index} className='cursor-pointer'>
                                                    <Image src={ProGallery.pro_img} alt={ProGallery.img_alt} title={ProGallery.img_alt}  width={200} height={200}  className='w-24 h-24 object-cover' />
                                                </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>

                                    <div className='relative overflow-hidden'>
                                      <Link href={Gallery_pro.product_link} className='all-btn text-sm text-white uppercase font-montserrat font-[500] inline-flex mx-auto rounded items-center group gap-2 px-6 absolute group-hover:bottom-0 -bottom-full transition-all left-1/2 -translate-x-2/4 min-w-max'>
                                        <Image src={ 'https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/cart-bag.svg'} alt='cart' title='cart' className='brightness-[200]' width={20} height={20} />
                                        Add to cart
                                      </Link>
                                    </div>
                                    <div className='flex items-center justify-between mt-3'>
                                      <p className='text-lg text-black uppercase font-montserrat font-[500]'>
                                        {Gallery_pro.product_price}
                                      </p>
                                      <Link
                                        href={Gallery_pro.product_link}
                                        className='text-sm text-black font-montserrat font-semibold underline underline-offset-[3px] flex items-center group gap-1'
                                      >
                                        {Gallery_pro.btn_label}
                                        <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' className='fill-black group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180 transition-all w-4 h-4'>
                                          <path d='M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z' />
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default H4_Pro_ProductGallery

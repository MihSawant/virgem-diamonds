import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Skeleton } from '@nextui-org/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Customer_Review = ({ initialValues }) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["best seller"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
          <div className="">
            <Skeleton className=' lg:mb-8 mb-6 w-1/3 h-12 lg:mx-0 mx-auto rounded' />
            <div className='flex items-start lg:flex-nowrap flex-wrap'>
              <div className='lg:w-1/6 w-full flex flex-col lg:items-start items-center lg:mb-0 mb-4'>
                <Skeleton className='w-16 h-12 rounded' />
                <Skeleton className='w-32 h-7 rounded lg:my-3 my-2 ' />
                <Skeleton className='w-28 h-7 rounded  lg:mb-4 mb-2 ' />
                <Skeleton className='w-32 h-7 rounded  lg:mb-4 mb-2 ' />
              </div>

              <div className='lg:w-5/6 w-full wp-top-arrows'>
                <Swiper spaceBetween={10}
                  navigation={true}
                  loop={true} dir='ltr'
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    575: {
                      slidesPerView: 4,
                    },
                    991: {
                      slidesPerView: 5,
                    },
                    1170: {
                      slidesPerView: 6,
                    },
                    1640: {
                      slidesPerView: 7,
                    },
                  }}
                  modules={[Navigation]} className="category_slider !px-0 !mx-0 lg:!pb-0 !pb-6" >
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                  <SwiperSlide className=""><Skeleton className='w-full h-48' /></SwiperSlide>
                </Swiper>
                <div className='flex justify-end mt-4'>
                  <Skeleton className='w-32 h-7 rounded lg:my-3 my-2 ' />
                </div>
              </div>
            </div>

            <div className='py-6'>
              <div className='lg:py-10 py-6 border-t border-gray-200/10' >
                <div className='flex items-start justify-between sm:flex-nowrap flex-wrap sm:mb-0 mb-3'>
                  <div className='sm:w-auto w-full'>
                    <Skeleton className='w-32 h-7 rounded lg:my-3 my-2 ' />
                    <Skeleton className='mb-3 2xl:mb-3 h-7 w-1/3' />
                  </div>
                  <Skeleton className='mb-3 2xl:mb-3 h-9 w-44' />
                </div>
                <Skeleton className='h-14 w-full rounded' />
                <div className='flex items-center mt-6'>
                  <Skeleton className='h-16 w-16 rounded-full' />
                  <div className='ltr:ml-3 rtl:mr-3'>
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                  </div>
                </div>
              </div>
              <div className='lg:py-10 py-6 border-t border-gray-200/10' >
                <div className='flex items-start justify-between sm:flex-nowrap flex-wrap sm:mb-0 mb-3'>
                  <div className='sm:w-auto w-full'>
                    <Skeleton className='w-32 h-7 rounded lg:my-3 my-2 ' />
                    <Skeleton className='mb-3 2xl:mb-3 h-7 w-1/3' />
                  </div>
                  <Skeleton className='mb-3 2xl:mb-3 h-9 w-44' />
                </div>
                <Skeleton className='h-14 w-full rounded' />
                <div className='flex items-center mt-6'>
                  <Skeleton className='h-16 w-16 rounded-full' />
                  <div className='ltr:ml-3 rtl:mr-3'>
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                  </div>
                </div>
              </div>
              <div className='lg:py-10 py-6 border-t border-gray-200/10' >
                <div className='flex items-start justify-between sm:flex-nowrap flex-wrap sm:mb-0 mb-3'>
                  <div className='sm:w-auto w-full'>
                    <Skeleton className='w-32 h-7 rounded lg:my-3 my-2 ' />
                    <Skeleton className='mb-3 2xl:mb-3 h-7 w-1/3' />
                  </div>
                  <Skeleton className='mb-3 2xl:mb-3 h-9 w-44' />
                </div>
                <Skeleton className='h-14 w-full rounded' />
                <div className='flex items-center mt-6'>
                  <Skeleton className='h-16 w-16 rounded-full' />
                  <div className='ltr:ml-3 rtl:mr-3'>
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                    <Skeleton className='h-8 w-32 rounded  2xl:mb-1' />
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center mt-6'>
                <Skeleton className='h-12 w-452 rounded' />
              </div>
            </div>
          </div>
      ) : (
        <div className=''>
          {initialValues && initialValues.map((data, index) => {
            return (
              <div className="" key={index}>
                <h2 className='text-gray-800 1xl:text-3xl xl:text-2xl lg:text-1xl sm:text-xl text-[25px] leading-tight lg:mb-8 mb-6 ltr:lg:ltr:text-left rtl:lg:text-right text-center rtl:lg:text-right'>Customer Reviews </h2>
                <div className='flex items-start lg:flex-nowrap flex-wrap'>
                  <div className='lg:w-1/6 w-full flex flex-col lg:items-start items-center lg:mb-0 mb-4'>
                    <p className='text-gray-800 1xl:text-3xl xl:text-2xl lg:text-1xl sm:text-xl text-[22px] leading-tight'>{data.rating}</p>
                    <div className="flex item-center  lg:my-3 my-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                      </svg>
                    </div>
                    <p className='text-md lg:text-lg text-gray-900 lg:mb-4 mb-2'>{data.review_count} Reviews</p>
                    <Link href="/leave-a-review" className='text-md lg:text-lg text-gray-900 underline hover:text-violet-900'>Leave a Review</Link>
                  </div>

                  <div className='lg:w-5/6 w-full wp-top-arrows sm:w-full w-[97%] mx-auto'>
                    <div className='lg:text-left text-center lg:mb-0 mb-4 relative'>
                      <div className='swiper-button z-10  image-swiper-button-prev absolute lg:bottom-0 -bottom-36 ltr:lg:right-12 ltr:-left-4 ltr:lg:left-auto rtl:-left-4 rtl:lg:left-0 cursor-pointer
                      border border-violet-900 bg-white hover:bg-violet-400 lg:w-10 w-8 lg:h-10 h-8 rounded-full text-violet-900 flex items-center justify-center mt-0 -translate-y-2/4'>
                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/left_triangle.svg' alt='arrow' width={12} height={12} />
                      </div>
                      <div className='swiper-button  z-10  image-swiper-button-next absolute lg:bottom-0 -bottom-36 ltr:lg:right-0 rtl:lg:right-auto -right-4 rtl:lg:left-12 cursor-pointer
                      border border-violet-900 bg-white hover:bg-violet-400 lg:w-10 w-8 lg:h-10 h-8 rounded-full text-violet-900 flex items-center justify-center mt-0 -translate-y-2/4'>
                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/right-triangle.svg' alt='arrow' width={12} height={12} />
                      </div>
                    </div>
                    <Swiper spaceBetween={10} dir='ltr'
                      navigation={{
                        nextEl: '.image-swiper-button-next',
                        prevEl: '.image-swiper-button-prev',
                        disabledClass: 'swiper-button-disabled'
                      }}
                      loop={true}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        575: {
                          slidesPerView: 4,
                        },
                        991: {
                          slidesPerView: 5,
                        },
                        1170: {
                          slidesPerView: 6,
                        },
                        1640: {
                          slidesPerView: 7,
                        },
                      }}
                      modules={[Navigation]} className="category_slider !px-0 !mx-0 lg:!pb-0 !pb-2 " >
                      {data.gallery_imgs && data.gallery_imgs.map((slides, index) => {
                        return (
                          <SwiperSlide className="" key={index}>
                            <div className=" relative ">
                              <Image src={slides.img} width={200} height={200} alt={slides.alt} title={slides.alt} className="w-full h-48 object-cover" />
                            </div >
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <div className='flex justify-end lg:mt-4 mt-2'>
                      <Dropdown classNames={{
                        content: "bg-white"
                      }}>
                        <DropdownTrigger disableAnimation >
                          <Button variant="bordered" className="text-gray-800 capitalize text-md p-0 border-0 aria-expanded:scale-[1] aria-expanded:opacity-100" >
                            <span className='font-semibold'>Sort By:</span> {selectedValue} <span className='rounded-full flex items-center justify-center group-aria-[expanded=true]:rotate-180'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='w-3'>
                                <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                              </svg>
                            </span>
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Single selection example"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={selectedKeys}
                          onSelectionChange={setSelectedKeys}
                        >
                          <DropdownItem className="text-md capitalize text-gray-900" key="default sorting">Default Sorting</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="best seller">Best Seller</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="Top Rated">Top Rated</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="Newest">Newest</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="Price: Low to High">Price: Low to High</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="Price: High to Low">Price: High to Low</DropdownItem>
                          <DropdownItem className="text-md capitalize text-gray-900" key="Name (A - Z)">Name (A - Z)</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>

                <div className='md:py-6 py-3'>
                  {data.Reviews && data.Reviews.map((child_item, index) => {
                    return (
                      <div className='lg:py-10 py-6 border-t border-gray-200/10' key={index}>
                        <div className='flex items-start justify-between sm:flex-nowrap flex-wrap sm:mb-0 mb-3'>
                          <div className='sm:w-auto w-full'>
                            <div className="flex item-center  md:mb-3 mb-2 ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                                <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                              </svg>
                            </div>
                            <h3 className='block mb-3 2xl:mb-3 font-[nabi] lg:text-[23px] text-[20px] 2xl:text-[25px] text-gray-900'>{child_item.title}</h3>
                          </div>
                          <span className='md:text-md text-sm text-gray-900 md:py-2 py-1.5 md:px-6 px-4 border border-gray-800/10 rounded-full'>{child_item.date}</span>
                        </div>
                        <p className='block text-gray-200 text-md leading-7'>{child_item.des}</p>
                        <div className='flex items-center mt-6'>
                          <Image src={child_item.img} alt={child_item.user_name} title={child_item.user_name} width={65} height={65} className='w-[60px] 2xl:w-[65px]' />
                          <div className='ltr:ml-3 rtl:mr-3'>
                            <p className='font-[nabi] text-lg lg:text-lg 2xl:text-[22px] text-gray-800 2xl:mb-1'>{child_item.user_name}</p>
                            <p className=' text-sm text-gray-800 ltr:text-left rtl:text-right'>{child_item.user_position}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  <div className='flex items-center justify-center mt-6'>
                    <Link className="all-btn text-white hover:opacity-100 px-8 1xl:px-10 lg:text-lg flex items-center" href='/leave-a-review'>Load More
                      <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
                        <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
                      </svg>

                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
      }
    </>
  )
}

export default Customer_Review;
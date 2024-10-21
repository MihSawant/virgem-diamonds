import Header_h1 from 'src/component/Header_h1'
import React, { useEffect } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import Footer_h3 from '../src/component/Footer_h3';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@nextui-org/react';
import Left_Filter from '../src/comman/Blog_sidebar';

export default function LatestBlog() {
  const breadcrumbItems = [
    { title: 'Latest Blog', url: ``, type: false },
  ];
  const router = useRouter()

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data } = useFetchData("json/data/blog_grid_data.json");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      {data && data.map((blogs, index) => {
        return (
          <div className='2xl:py-28 xl:py-20 md:py-12 py-8 container' key={index}>
            <div className='flex items-start gap-8 lg:flex-nowrap flex-wrap'>
              <div className='lg:w-1/3 w-full'>
                <Left_Filter initialValues={data} />
              </div>

              {isLoading ? (
                <div className='grid  grid-cols-1 2xl:gap-5 gap-4 items-start lg:w-2/3 w-full'>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                </div>
              ) : (
                <div className='grid  grid-cols-1 2xl:gap-5 gap-4 items-start lg:w-2/3 w-full'>
                  {blogs.blogs && blogs.blogs.map((item, index) => {
                    return (
                      <div className='relative w-full h-full group flex items-center sm:flex-nowrap flex-wrap xl:gap-8 sm:gap-6' key={index}>
                        <div className='sm:w-2/5 w-full relative '>
                          <Link href={item.slug}>
                            <Image src={item.blog_img} alt={item.blog_alt} title={item.blog_alt} width={500} height={450} className='group-hover:brightness-110 transition-all w-full  lg:h-[320px] h-[300px] object-cover' />
                          </Link>
                          <span className='xl:text-[15px] text-sm font-[600] uppercase xl:py-2 py-1 xl:px-3.5 px-2 bg-white text-gray-900 absolute xl:top-6 top-3 xl:right-6 right-3'>
                            {item.published_date}
                          </span>
                        </div>
                        <div className='sm:w-3/5 w-full mt-6'>
                          <Link href={item.slug}>
                            <h3 className='text-gray-800 group-hover:text-violet-900 2xl:text-[26px] lg:text-[22px] text-[20px] uppercase  mb-3'>
                              {item.title}
                            </h3>
                          </Link>
                          <p className='1xl:mb-5 mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-800 md:leading-7 '>
                            {item.short_des}
                          </p>
                          <Link className='text-gray-800 group-hover:text-violet-900 lg:text-lg uppercase inline-flex items-center gap-0 group-hover:gap-3 transition-all font-[nabi]' href={item.slug} >
                            {item.btn_label}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-1  lg:w-5 w-4 inline-block relative white-img rtl:mr-2 group-hover:fill-violet-900 fill-gray-900 rtl:rotate-180'>
                              <path d="M12.2276 3.22998L11.0339 4.42362L15.7577 9.15585H1V10.8489H15.7577L11.0339 15.5812L12.2276 16.7748L19 10.0024L12.2276 3.22998Z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            <div className='flex items-center justify-center xl:mt-12 mt-6'>
              <Link className="all-btn text-white hover:opacity-100 px-8 1xl:px-10 lg:text-lg flex items-center gap-2.5 group" href='#'>Load More
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:animate-spin'>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.5 16C12.0304 16 12.5391 16.2107 12.9142 16.5858C13.2893 16.9609 13.5 17.4696 13.5 18C13.5 18.5304 13.2893 19.0391 12.9142 19.4142C12.5391 19.7893 12.0304 20 11.5 20C10.9696 20 10.4609 19.7893 10.0858 19.4142C9.71071 19.0391 9.5 18.5304 9.5 18C9.5 17.4696 9.71071 16.9609 10.0858 16.5858C10.4609 16.2107 10.9696 16 11.5 16ZM5.241 13C5.90404 13 6.53993 13.2634 7.00877 13.7322C7.47761 14.2011 7.741 14.837 7.741 15.5C7.741 16.163 7.47761 16.7989 7.00877 17.2678C6.53993 17.7366 5.90404 18 5.241 18C4.57796 18 3.94207 17.7366 3.47323 17.2678C3.00439 16.7989 2.741 16.163 2.741 15.5C2.741 14.837 3.00439 14.2011 3.47323 13.7322C3.94207 13.2634 4.57796 13 5.241 13ZM16.819 13.5C17.3494 13.5 17.8581 13.7107 18.2332 14.0858C18.6083 14.4609 18.819 14.9696 18.819 15.5C18.819 16.0304 18.6083 16.5391 18.2332 16.9142C17.8581 17.2893 17.3494 17.5 16.819 17.5C16.2886 17.5 15.7799 17.2893 15.4048 16.9142C15.0297 16.5391 14.819 16.0304 14.819 15.5C14.819 14.9696 15.0297 14.4609 15.4048 14.0858C15.7799 13.7107 16.2886 13.5 16.819 13.5ZM19 9.319C19.3978 9.319 19.7794 9.47704 20.0607 9.75834C20.342 10.0396 20.5 10.4212 20.5 10.819C20.5 11.2168 20.342 11.5984 20.0607 11.8797C19.7794 12.161 19.3978 12.319 19 12.319C18.6022 12.319 18.2206 12.161 17.9393 11.8797C17.658 11.5984 17.5 11.2168 17.5 10.819C17.5 10.4212 17.658 10.0396 17.9393 9.75834C18.2206 9.47704 18.6022 9.319 19 9.319ZM3 6C3.66304 6 4.29893 6.26339 4.76777 6.73223C5.23661 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.23661 9.79893 4.76777 10.2678C4.29893 10.7366 3.66304 11 3 11C2.33696 11 1.70107 10.7366 1.23223 10.2678C0.763392 9.79893 0.5 9.16304 0.5 8.5C0.5 7.83696 0.763392 7.20107 1.23223 6.73223C1.70107 6.26339 2.33696 6 3 6ZM18.286 5.207C18.5512 5.207 18.8056 5.31236 18.9931 5.49989C19.1806 5.68743 19.286 5.94178 19.286 6.207C19.286 6.47222 19.1806 6.72657 18.9931 6.91411C18.8056 7.10164 18.5512 7.207 18.286 7.207C18.0208 7.207 17.7664 7.10164 17.5789 6.91411C17.3914 6.72657 17.286 6.47222 17.286 6.207C17.286 5.94178 17.3914 5.68743 17.5789 5.49989C17.7664 5.31236 18.0208 5.207 18.286 5.207ZM8.5 0C9.29565 0 10.0587 0.31607 10.6213 0.87868C11.1839 1.44129 11.5 2.20435 11.5 3C11.5 3.79565 11.1839 4.55871 10.6213 5.12132C10.0587 5.68393 9.29565 6 8.5 6C7.70435 6 6.94129 5.68393 6.37868 5.12132C5.81607 4.55871 5.5 3.79565 5.5 3C5.5 2.20435 5.81607 1.44129 6.37868 0.87868C6.94129 0.31607 7.70435 0 8.5 0ZM16 3C16.1326 3 16.2598 3.05268 16.3536 3.14645C16.4473 3.24021 16.5 3.36739 16.5 3.5C16.5 3.63261 16.4473 3.75979 16.3536 3.85355C16.2598 3.94732 16.1326 4 16 4C15.8674 4 15.7402 3.94732 15.6464 3.85355C15.5527 3.75979 15.5 3.63261 15.5 3.5C15.5 3.36739 15.5527 3.24021 15.6464 3.14645C15.7402 3.05268 15.8674 3 16 3Z" fill="#F8F8F8" />
                </svg>
              </Link>

            </div>
          </div >
        )
      })}

      <Footer_h3 />
    </>
  )
}




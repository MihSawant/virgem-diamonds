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

export default function Blog() {
  const breadcrumbItems = [
    { title: 'Blog Detail', url: ``, type: false },
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
          <div className='2xl:py-28 py-20 container' key={index}>
            <div className='flex items-start gap-8 lg:flex-nowrap flex-wrap'>
              <div className='lg:w-1/3 w-full'>
                <Left_Filter initialValues={data} />
              </div>

              {isLoading ? (
                <div className='grid  grid-cols-1 2xl:gap-5 gap-4 items-start lg:w-2/3 w-full'>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
                    <div className='sm:w-2/5 w-full relative'>
                      <Skeleton className='w-full xl:h-[380px] sm:h-[280px] h-[280px] rounded ' />
                    </div>
                    <div className='sm:w-3/5 w-full mt-6'>
                      <Skeleton className='w-2/3 h-12 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-full h-20 mb-3 xl:mb-4 rounded' />
                      <Skeleton className='w-44 h-8 rounded' />
                    </div>
                  </div>
                  <div className='relative w-full h-full  flex items-center sm:flex-nowrap flex-wrap gap-8'>
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
                <div className='lg:w-2/3 w-full'>
                  <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/blog/single-blog.jpg' alt='blog single' title='blog single' width={1082} height={460} className='w-full mb-4' />
                  <span className='text-[15px] text-black font-semibold uppercase'>25 April, 2018</span>
                  <h1 className="2xl:text-[32px] lg:text-[28x] sm:text-[24px] text-[20px] uppercase md:my-4 my-2 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</h1>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Donec velit mi, porttitor vel interdum at, lacinia at nunc. Proin vitae interdum diam, et convallis enim. Donec vel tincidunt lacus. Vestibulum scelerisque luctus metus posuere vehicula. Vivamus consequat justo odio, in auctor nibh varius id. Proin pharetra tortor eu mollis accumsan. Pellentesque volutpat ante quis iaculis lobortis. Curabitur placerat aliquet tellus, ac sagittis magna venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam et neque ex. Integer porttitor imperdiet neque, ut sagittis tellus interdum ac</p>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Tellus sed interdum convallis, urna orci efficitur arcu, a suscipit lectus turpis ac est. Donec pretium justo vel aliquam hendrerit. Cras a massa fringilla, ornare velit vitae, malesuada velit. Duis dignissim pellentesque vulputate. Maecenas congue risus sit amet orci tempus vestibulum.</p>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Duis iaculis imperdiet dui, vitae interdum sem. Nam ornare in turpis et tempus. Suspendisse pharetra diam quam, ut lacinia nulla cursus fermentum. Aenean sollicitudin convallis tellus, sed mollis urna congue auctor. Ut quis magna in metus molestie pharetra ac vitae lorem. Donec ac semper ipsum, eu volutpat enim</p>
                  <div className='bg-violet-400 lg:px-6 px-4 lg:py-8 py-6 my-5'>
                  <h3 className='2xl:text-[26px] lg:text-[24px] sm:text-[22px] text-lg text-gray-800 flex items-start capitalize leading-normal'><span className='md:text-8xl text-6xl no-underline	leading-[0.5] inline  mr-2'>“</span><span className='underline'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</span></h3>
                  </div>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Pellentesque volutpat ante quis iaculis lobortis. Curabitur placerat aliquet tellus, ac sagittis magna venenatis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam et neque ex. Integer porttitor imperdiet neque, ut sagittis tellus interdum ac</p>
                  <h3 className='2xl:text-[26px] lg:text-[24px] sm:text-[22px] text-lg text-gray-800'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</h3>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Sed non orci non libero volutpat egestas. Phasellus eget interdum odio. Ut ullamcorper lacinia orci, at pellentesque lacus pharetra vitae. Etiam id turpis vel ipsum sagittis ultricies. Proin volutpat feugiat nibh, non vulputate purus auctor non. Maecenas ipsum felis, commodo ac urna at, aliquam scelerisque mi. Sed suscipit est ante. Proin ut risus eli</p>
                  <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 my-5'>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/blog/single-blog-gallery-1.jpg' alt='diamond ring' title='diamond ring' width={350} height={270} className='w-full' />
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/blog/single-blog-gallery-2.jpg' alt='diamond ring' title='diamond ring' width={350} height={270} className='w-full' />
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/blog/single-blog-gallery-3.jpg' alt='diamond ring' title='diamond ring' width={350} height={270} className='w-full' />
                    </div>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Aliquam erat volutpat. Donec ac purus semper, gravida mauris quis, tincidunt tellus. Duis id magna commodo, efficitur sem vel, bibendum erat. Sed vitae felis maximus, varius dui eu, volutpat velit. Phasellus luctus ante orci</p>
                  <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>

                </div>
              )}
            </div>
          </div >
        )
      })}

      <Footer_h3 />
    </>
  )
}




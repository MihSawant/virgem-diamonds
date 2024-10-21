import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Link, Skeleton } from "@nextui-org/react";
import ReactCurvedText from 'react-curved-text';



const About_H3 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
       setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="hero-sec mb-8 lg:mb-0">
                    <div className="">
                        <div className="relative lg:pt-20 2xl:pt-24 pt-14" >
                            <div className="container">
                                <div className="flex flex-wrap items-center">
                                    <div className="xl:w-[46%] w-full ltr:lg:pr-10 ltr:2xl:pr-24 rtl:lg:pl-10 rtl:2xl:pl-24 xl:order-1 order-2">
                                        <Skeleton className="flex w-[80%] h-[135px] lg:mb-6 mb-4 lg:mt-0 mt-6 rounded" />
                                        <Skeleton className="flex w-full lg:h-38 h-30 mb-4 rounded" />
                                        <Skeleton className="flex w-[80%] h-[45px] lg:mb-4 mb-3 lg:mt-6 mt-3 rounded" />
                                        <Skeleton className="flex w-full lg:h-20 h-18 mb-4 rounded" />
                                        <Skeleton className="flex w-[80%] h-[45px] lg:mb-4 mb-3 lg:mt-6 mt-3 rounded" />
                                        <Skeleton className="flex w-full lg:h-20 h-18 mb-4 rounded" />
                                        <Skeleton className="flex w-40 h-12 rounded" />
                                    </div>
                                    <div className="xl:w-[54%] w-full xl:order-2 order-1 relative">
                                        <div className="flex sm:flex-nowrap flex-wrap items-end">
                                            <Skeleton className="flex lg:w-[330px] sm:w-[250px] sm:mb-0 mb-4 w-full sm:border-8 border-white object-cover lg:h-[370px] sm:h-[300px] lg:-mr-28 sm:-mr-20 z-10 rounded-xl" />
                                            <Skeleton className="flex sm:w-[65%] w-full   object-cover sm:mb-24 rounded-xl 2xl:h-[700px] xl:h-[600px] lg:h-[520px] h-[450px]" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="hero-sec mb-8 lg:mb-0">
                        <div className="">
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <div className="relative lg:pt-20 2xl:pt-24 pt-14" key={index}>
                                        <div className="container">
                                            <div className="flex flex-wrap items-center">
                                                <div className="xl:w-[46%] w-full ltr:lg:pr-10 ltr:2xl:pr-24 rtl:lg:pl-10 rtl:2xl:pl-24  xl:order-1 order-2">
                                                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-6 mb-4 leading-tight lg:mt-0 mt-6">{data.title}</h2>
                                                    <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7 text-gray-800">{data.description}</p>
                                                    <h3 className=" lg:text-1xl sm:text-xl text-[22px] uppercase text-gray-800 lg:mb-4 mb-3 leading-tight lg:mt-6 mt-3">{data.subtitle}</h3>
                                                    <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7  text-gray-800">{data.description2}</p>
                                                    <h3 className=" lg:text-1xl sm:text-xl text-[22px] uppercase text-gray-800 lg:mb-4 mb-3 leading-tight lg:mt-6 mt-3">{data.subtitle2}</h3>
                                                    <p className="2xl:text-lg lg:text-[17px] text-md  mb-4 leading-7  text-gray-800">{data.description3}</p>
                                                    <Link className="all-btn text-white hover:opacity-100 font-[500] px-8 lg:text-lg lg:mt-6 mt-3" href={data.btn_slug}>{data.btn_label}
                                                        <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-8 w-6">
                                                            <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
                                                        </svg>

                                                    </Link>
                                                </div>
                                                <div className="xl:w-[54%] w-full xl:order-2 order-1 relative">
                                                    <div className="flex sm:flex-nowrap flex-wrap items-end">
                                                        <div className="md:block hidden w-[180px] h-[180px] absolute 2xl:left-[85px] sm:left-[35px] left-[155px] 1xl:top-[12%] top-[8%] animate-spin-slow" dir="ltr">
                                                            <span className="w-5 h-5 rounded-full bg-gray-800 absolute inset-[45%]"></span>
                                                            <ReactCurvedText
                                                                width={180} height={180}
                                                                cx={90} cy={90} rx={78} ry={78}
                                                                startOffset={0} reversed={true}
                                                                text="STARRY HEAVENS. STARRY HEAVENS. "
                                                                textProps={{ style: { fontSize: 18, fontFamily: 'nabi', letterSpacing: '8px' } }}
                                                            />
                                                        </div>
                                                        <Image src={data.img_2} width={750} height={750} alt={data.alt} title={data.alt} className="w-full object-cover sm:pb-24 2xl:pl-44 sm:pl-32" />
                                                        <Image src={data.img_1} width={300} height={300} alt={data.alt} title={data.alt} className="2xl:w-[330px] sm:w-[270px] sm:mb-0 mb-4 w-[50%] sm:mt-0 -mt-24 object-cover 2xl:h-[370px] sm:h-[300px] sm:absolute bottom-0 left-0 " />
                                                    </div>
                                                </div>
                                            </div>
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

export default About_H3;
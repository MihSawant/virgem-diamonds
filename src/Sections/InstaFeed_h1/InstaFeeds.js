import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";

const InstaFeed = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div>
                    <Skeleton className="flex w-full lg:w-96 h-[45px] 2xl:mb-10 md:mb-8 mb-4 px-4 mx-auto rounded" /> 
                    <div className="relative flex flex-wrap ">
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                        <div className="insta-post w-1/2 sm:w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-44 lg:h-56" />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="">
                        {initialValues && initialValues.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800  2xl:mb-10 md:mb-8 mb-4 leading-tight text-center px-4">{data.title} <Link href={data.slug}  className="underline decoration-1 hover:text-violet-900 underline-offset-4">{data.link_title}</Link> </h2>
                                    <div className="relative flex flex-wrap ">
                                        {data.items && data.items.map((item, index) => {
                                            return (
                                                <div className="insta-post w-1/2 sm:w-1/3 lg:w-1/6 " key={index} >
                                                    <Link className="relative group/insta block" href={item.slug} >
                                                        <Image src={item.img} width={384} height={286} alt={item.alt} title={item.alt} className="lg:h-56 h-44 object-cover" />
                                                        <div className="hover-stake absolute w-full h-full flex items-center justify-center bg-[#00000080] opacity-0 group-hover/insta:opacity-100 top-0 left-0">
                                                            <Image src={item.insta_icon} width={30} height={30} sizes="100vw" alt={item.alt} title={item.alt} />
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default InstaFeed;
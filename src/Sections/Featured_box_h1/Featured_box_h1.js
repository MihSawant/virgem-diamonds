import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Skeleton } from "@nextui-org/react";


const FeaturedBox_h1 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="relative lg:py-24 py-14">
                    <div className="container">
                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-6 ">
                            <div className="md:p-8 sm:p-4 p-2.5 border border-gray-800 white-img">
                                <Skeleton className="flex w-12 h-12 mx-auto rounded" />
                                <Skeleton className="flex w-42 h-7 mt-4 mx-auto rounded" />
                            </div>
                            <div className="md:p-8 sm:p-4 p-2.5 border border-gray-800 white-img">
                                <Skeleton className="flex w-12 h-12 mx-auto rounded" />
                                <Skeleton className="flex w-42 h-7 mt-4 mx-auto rounded" />
                            </div>
                            <div className="md:p-8 sm:p-4 p-2.5 border border-gray-800 white-img">
                                <Skeleton className="flex w-12 h-12 mx-auto rounded" />
                                <Skeleton className="flex w-42 h-7 mt-4 mx-auto rounded" />
                            </div>
                            <div className="md:p-8 sm:p-4 p-2.5 border border-gray-800 white-img">
                                <Skeleton className="flex w-12 h-12 mx-auto rounded" />
                                <Skeleton className="flex w-42 h-7 mt-4 mx-auto rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="relative lg:py-24 py-14">
                        <div className="container">
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-6 ">
                                {initialValues && initialValues.map((data, index) => {
                                    return (
                                        <div className="md:p-8 sm:p-4 p-2.5 border border-gray-800 white-img" key={index}>
                                            <Image src={data.img} width={50} height={50} alt={data.alt} title={data.alt} className="m-auto" />
                                            <p className="lg:text-lg text-sm sm:text-md mt-4 text-center text-gray-800">{data.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FeaturedBox_h1;
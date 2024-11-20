import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Button, Pagination, Select, SelectItem } from "@nextui-org/react";
import { Diamond_Grid_Product } from '../../comman';
import TableComponent from '../../component/diamond_griddata';
import Tabulator from 'tabulator-tables'; // Import the entire module


const Diamond_GridList_Filter = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    const [openGridList, setOpenGridList] = React.useState(1);
    const slicedItems = initialValues.slice(0, 12)
    // console.log(slicedItems)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);


    return (
        <>
            <div className="relative 2xl:py-24 lg:py-16 py-12">
                <div className="container " >
                    <div className='flex justify-between lg:flex-nowrap flex-wrap items-end gap-3'>
                        {/* <div className='flex items-center flex-wrap gap-3 lg:justify-start justify-center sm:w-auto w-full  '>
                            <Link href='#' className='all-btn sm:block hidden'>Add to cart</Link>
                            <Link href='#' className='all-btn  sm:block hidden'>Add To Wishlist</Link>
                            <Link href='#' className='all-btn  sm:block hidden'>Add To Compare</Link>
                            <Select radius='none'
                                placeholder="Export"
                                classNames={{
                                    trigger: "text-center text-lg h-auto lg:px-8 px-6 2xl:py-2.5 py-2 text-white bg-violet-900 data-[hover=true]:bg-gray-900 shadow-none !w-auto flex-row items-center",
                                    listbox: "max-h-[400px] flex-col",
                                    value: "xl:text-lg text-md !text-white opacity-100 text-center font-light",
                                    base: "sm:w-auto w-full",
                                    innerWrapper: "w-full",
                                    selectorIcon: "lg:w-8 w-6 h-auto static inline-block"
                                }}
                                popoverProps={{
                                    classNames: {
                                        base: "!w-full  rounded-2xl bg-white",
                                        content: "p-0 border-small border-divider border-gray-100/20 bg-background text-lg rounded-none",
                                    },
                                }}
                                listboxProps={{
                                    itemClasses: {
                                        title: [
                                            "text-[16px] py-1 ",
                                        ],
                                    },
                                }} >
                                {/* <SelectItem key='rubi' value='rubi'>Rubi</SelectItem>
                                <SelectItem key='dfjn' value='dfjn'>Rubi</SelectItem>
                                <SelectItem key='ksdjuf' value='ksdjuf'>Rubi</SelectItem> */}
                            {/* </Select> */}
                        {/* </div>  */}

                        <div className='flex items-center gap-3 sm:w-auto w-full  lg:justify-start justify-center lg:mx-0 mx-auto'>
                            {/* <Select radius='none'
                                placeholder="Price Asc"
                                classNames={{
                                    trigger: "text-center text-lg h-auto lg:px-6 px-4 2xl:py-2.5 py-2 text-gray-800 border border-gray-200/20 bg-white data-[hover=true]:bg-gray-300 shadow-none bg-white md:min-w-[180px] flex-row items-center",
                                    listbox: "max-h-[400px] !w-full",
                                    innerWrapper: "w-full",
                                    value: "xl:text-lg text-md !text-gray-800 opacity-100 ltr:text-left rtl:text-right ",
                                    selectorIcon: "w-7 h-auto static inline-block",
                                    base: " sm:grow-0 grow"
                                }}
                                popoverProps={{
                                    classNames: {
                                        base: " !w-full rounded-2xl ",
                                        content: "p-0 border-small border-divide border-gray-100/20 text-lg rounded-none",
                                    },
                                }}
                                listboxProps={{
                                    itemClasses: {
                                        title: [
                                            "text-[16px] py-1",
                                        ],
                                    },
                                }}
                            >
                                <SelectItem key='price dsc' value='price dsc'>Price Dsc</SelectItem>
                                <SelectItem key='Neweset' value='Neweset'>Neweset</SelectItem>
                                <SelectItem key='Lowest' value='Lowest'>Lowest</SelectItem>
                            </Select> */}
                            <Button className={'border border-gray-200/20 rounded-none 2xl:h-12 md:h-11 h-10 md:px-3 px-2.5 min-w-0 flex items-center justify-center hover:bg-violet-900 group' + (openGridList === 1 ? " bg-violet-900 active" : " bg-white")}
                                onClick={e => { e.preventDefault(); setOpenGridList(1); }} >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-2 stroke-gray-900 w-8 h-8 group-hover:stroke-white group-[.active]:stroke-white'>
                                    <path d="M10.3594 2.4375H3.45312C2.89221 2.4375 2.4375 2.89221 2.4375 3.45312V10.3594C2.4375 10.9203 2.89221 11.375 3.45312 11.375H10.3594C10.9203 11.375 11.375 10.9203 11.375 10.3594V3.45312C11.375 2.89221 10.9203 2.4375 10.3594 2.4375Z" />
                                    <path d="M22.5469 2.4375H15.6406C15.0797 2.4375 14.625 2.89221 14.625 3.45312V10.3594C14.625 10.9203 15.0797 11.375 15.6406 11.375H22.5469C23.1078 11.375 23.5625 10.9203 23.5625 10.3594V3.45312C23.5625 2.89221 23.1078 2.4375 22.5469 2.4375Z" />
                                    <path d="M10.3594 14.625H3.45312C2.89221 14.625 2.4375 15.0797 2.4375 15.6406V22.5469C2.4375 23.1078 2.89221 23.5625 3.45312 23.5625H10.3594C10.9203 23.5625 11.375 23.1078 11.375 22.5469V15.6406C11.375 15.0797 10.9203 14.625 10.3594 14.625Z" />
                                    <path d="M22.5469 14.625H15.6406C15.0797 14.625 14.625 15.0797 14.625 15.6406V22.5469C14.625 23.1078 15.0797 23.5625 15.6406 23.5625H22.5469C23.1078 23.5625 23.5625 23.1078 23.5625 22.5469V15.6406C23.5625 15.0797 23.1078 14.625 22.5469 14.625Z" />
                                </svg>
                            </Button>
                            <Button className={'border border-gray-200/20 rounded-none 2xl:h-12 md:h-11 h-10 md:px-3 px-2.5 min-w-0 flex items-center justify-center hover:bg-violet-900 group' + (openGridList === 2 ? " bg-violet-900 active" : " bg-white")}
                                onClick={e => { e.preventDefault(); setOpenGridList(2); }}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900  w-8 h-8  group-hover:fill-white group-[.active]:fill-white'>
                                    <path d="M3.25 4.875C3.25 3.97754 2.52246 3.25 1.625 3.25C0.727537 3.25 0 3.97754 0 4.875C0 5.77246 0.727537 6.5 1.625 6.5C2.52246 6.5 3.25 5.77246 3.25 4.875ZM26 4.875C26 3.97754 25.2725 3.25 24.375 3.25H8.125C7.22754 3.25 6.5 3.97754 6.5 4.875C6.5 5.77246 7.22754 6.5 8.125 6.5H24.375C25.2725 6.5 26 5.77246 26 4.875ZM0 13C0 12.1025 0.727537 11.375 1.625 11.375C2.52246 11.375 3.25 12.1025 3.25 13C3.25 13.8975 2.52246 14.625 1.625 14.625C0.727537 14.625 0 13.8975 0 13ZM26 13C26 12.1025 25.2725 11.375 24.375 11.375H8.125C7.22754 11.375 6.5 12.1025 6.5 13C6.5 13.8975 7.22754 14.625 8.125 14.625H24.375C25.2725 14.625 26 13.8975 26 13ZM0 21.125C0 20.2275 0.727537 19.5 1.625 19.5C2.52246 19.5 3.25 20.2275 3.25 21.125C3.25 22.0225 2.52246 22.75 1.625 22.75C0.727537 22.75 0 22.0225 0 21.125ZM26 21.125C26 20.2275 25.2725 19.5 24.375 19.5H8.125C7.22754 19.5 6.5 20.2275 6.5 21.125C6.5 22.0225 7.22754 22.75 8.125 22.75H24.375C25.2725 22.75 26 22.0225 26 21.125Z" />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <div className={openGridList === 1 ? "block" : "hidden"}>
                        <div className='grid 1xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 2xl:mt-12 lg:mt-8 mt-4'>
                                {
                                    slicedItems.map((item ,index) => {
                                        return(
                                            <Diamond_Grid_Product data={item} key={index}/>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    <div className={openGridList === 2 ? "block" : "hidden"}>
                        <div className=' 2xl:mt-12 lg:mt-8 mt-4'>
                            <TableComponent data={initialValues} />
                        </div>
                    </div>
                    {/* <Pagination isCompact showControls total={4} initialPage={1} dir='ltr'
                            classNames={{
                                base: "lg:mt-12 mt-6 z-10 relative",
                                wrapper: "2xl:gap-2 md:gap-1 gap-0 overflow-visible h-8 rounded-full border-0 shadow-none mx-auto",
                                item: "[&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md text-black font-[600] !rounded-full bg-transparent ",
                                cursor:
                                    "bg-violet-900 rounded-full [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md  text-white font-[600]",
                                prev: "bg-transparent text-lg text-gray-900 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full",
                                next: "bg-transparent text-lg text-gray-900 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full"
                            }} /> */}
                </div>

            </div>
        </>
    )
}

export default Diamond_GridList_Filter;
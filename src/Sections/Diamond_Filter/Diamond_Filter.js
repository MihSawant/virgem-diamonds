import React, { useEffect, useState } from 'react';
import { Input, Skeleton } from "@nextui-org/react";
import { CheckboxGroup } from "@nextui-org/react";
import Diamond_colors_filter from '../../component/diamond_colors_filter';
import FilterItem from '../../component/FilterItem';
import Diamond_more_filter from '../../component/diamond_more_filter';

const Diamond_Filter = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            <div className="relative">
                <div className="container bg-violet-400 2xl:p-12 lg:p-8 p-4">
                    {initialValues && initialValues.map((data, index) => {
                        return (
                            <div key={index}>
                                {/* Diamond Tabs Filter >>>> */}
                                {isLoading ? (
                                    <div>
                                        <div className='bg-white w-full p-3 flex lg:gap-4 gap-2 '>
                                            <Skeleton className='w-40 h-14' />
                                            <Skeleton className='w-40 h-14' />
                                        </div>
                                        <div className=' flex  gap-2 w-full 2xl:mt-12 md:mt-8 mt-5'>
                                            <Skeleton className='w-full grow h-11' />
                                            <Skeleton className='w-full grow h-11' />
                                            <Skeleton className='w-full grow h-11' />
                                            <Skeleton className='w-full grow h-11' />
                                            <Skeleton className='w-full grow h-11' />
                                            <Skeleton className='w-full grow h-11 md:block hidden' />
                                            <Skeleton className='w-full grow h-11 lg:block hidden' />
                                            <Skeleton className='w-full grow h-11 lg:block hidden' />
                                            <Skeleton className='w-full grow h-11 1xl:block hidden' />
                                            <Skeleton className='w-full grow h-11 1xl:block hidden' />
                                        </div>
                                        <div className=' flex  gap-2 w-full 2xl:mt-12 md:mt-8 mt-5'>
                                            <Skeleton className='w-full h-36 grow' />
                                            <Skeleton className='w-full h-36 grow' />
                                            <Skeleton className='w-full h-36 grow' />
                                            <Skeleton className='w-full h-36 grow md:block hidden' />
                                            <Skeleton className='w-full h-36 grow md:block hidden' />
                                            <Skeleton className='w-full h-36 grow lg:block hidden' />
                                            <Skeleton className='w-full h-36 grow lg:block hidden' />
                                            <Skeleton className='w-full h-36 grow 1xl:block hidden' />
                                        </div>
                                        <div className='w-full 2xl:mt-12 md:mt-8 mt-5'>
                                            <div className='flex gap-2 '>
                                            <span className="relative 2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5">Clarity</span>
                                            <div className='flex gap-2 w-full'>
                                                <Skeleton className='lg:w-32 md:w-12 w-full h-11 ' />
                                                <Skeleton className='lg:w-32 md:w-12 w-full h-11 ' />
                                                <Skeleton className='lg:w-32 md:w-12 w-full h-11  ' />
                                            </div>
                                            </div>
                                            <div className=' flex  gap-2 w-full mt-4'>
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow md:block hidden' />
                                                <Skeleton className='w-full h-11 grow md:block hidden' />
                                                <Skeleton className='w-full h-11 grow lg:block hidden' />
                                                <Skeleton className='w-full h-11 grow lg:block hidden' />
                                                <Skeleton className='w-full h-11 grow 1xl:block hidden' />
                                            </div>
                                        </div>
                                        <div className='w-full 2xl:mt-12 md:mt-8 mt-5'>
                                            <div className='flex gap-2'>
                                            <span className="relative 2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5">CARAT</span>
                                            <div className=' flex gap-2 lg:w-auto w-full'>
                                                <Skeleton className='lg:w-44 w-full h-11 ' />
                                                <Skeleton className='lg:w-44 w-full h-11 ' />
                                            </div>
                                            </div>
                                            <div className=' flex  gap-2 w-full mt-4'>
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow' />
                                                <Skeleton className='w-full h-11 grow md:block hidden' />
                                                <Skeleton className='w-full h-11 grow md:block hidden' />
                                                <Skeleton className='w-full h-11 grow lg:block hidden' />
                                                <Skeleton className='w-full h-11 grow lg:block hidden' />
                                                <Skeleton className='w-full h-11 grow 1xl:block hidden' />
                                            </div>
                                            <div className='pt-6 mt-6 border-t border-gray-400/10 flex lg:gap-4 gap-2 '>
                                           
                                            <Skeleton className='w-40 lg:h-14 h-11' />
                                            <Skeleton className='w-40 lg:h-14 h-11' />

                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Diamond_colors_filter initialValues={data} />
                                        {/* Diamond default Filter >>>> */}
                                        <CheckboxGroup
                                            defaultValue={["Round"]}
                                            classNames={{
                                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 shape-filter",
                                                wrapper: "grid 1xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 grid-cols-3 lg:gap-5 xl:gap-4 gap-2 items-start content-start	"
                                            }} >
                                            <FilterItem initialValues={data.white_diamond_share} count={8} type='shape-box' />
                                        </CheckboxGroup>
                                        <div className='relative'>
                                            {data.clarity && data.clarity.map((child_item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <CheckboxGroup label="Clarity"
                                                            defaultValue={["FL"]}
                                                            classNames={{
                                                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                                                label: "2xl:min-w-[150px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                                            }} >
                                                            <div className='grid w-full 1xl:grid-cols-[repeat(16,1fr)] lg:grid-cols-[repeat(14,1fr)] md:grid-cols-10 sm:grid-cols-6 grid-cols-4 xl:gap-4 gap-2  content-start'>
                                                                <FilterItem initialValues={child_item.top_items} count={child_item.top_items.length} type='filter-box' />
                                                            </div>
                                                            <div className='grid w-full 1xl:grid-cols-[repeat(17,1fr)] lg:grid-cols-[repeat(14,1fr)] md:grid-cols-10 sm:grid-cols-6 grid-cols-4 xl:gap-4 gap-2 content-start xl:mt-3 mt-1.5 ltr:2xl:-ml-[160px] ltr:lg:-ml-[120px] rtl:2xl:-mr-[160px] rtl:lg:-mr-[120px]'>
                                                                <FilterItem initialValues={child_item.bottom_items} count={child_item.bottom_items.length} type='filter-box' />
                                                            </div>
                                                        </CheckboxGroup>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                        <CheckboxGroup label="carat"
                                            defaultValue={["0.30 Down"]}
                                            classNames={{
                                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                                label: "2xl:min-w-[150px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                            }} >
                                            <div className='flex gap-3 items-center justify-start w-full'>
                                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                                    classNames={{
                                                        input: ["bg-transparent !text-gray-900",],
                                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                                        base: ["w-auto"]
                                                    }}
                                                />
                                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                                    classNames={{
                                                        input: ["bg-transparent !text-gray-900",],
                                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                                        base: ["w-auto"]
                                                    }}
                                                />
                                            </div>
                                            <div className='grid w-full grow 1xl:grid-cols-11 lg:grid-cols-9 md:grid-cols-7 sm:grid-cols-6 grid-cols-3 xl:gap-4 gap-2 content-start xl:mt-3 mt-1.5 ltr:2xl:-ml-[160px] ltr:lg:-ml-[120px] rtl:2xl:-mr-[160px] rtl:lg:-mr-[120px]'>
                                                <FilterItem initialValues={data.carat} count={10} type='filter-box' />
                                            </div>
                                        </CheckboxGroup>

                                        {/* Diamond More Filter >>>> */}
                                        <Diamond_more_filter initialValues={data} />
                                    </>
                                )}

                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Diamond_Filter;
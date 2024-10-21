import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Button, Checkbox, CheckboxGroupProvider, Input, Skeleton, cn } from "@nextui-org/react";
import { CheckboxGroup } from "@nextui-org/react";
import FilterItem from './FilterItem';


const Diamond_more_filter = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    const [selected, setSelected] = React.useState(false);

    const [Catfiltershow, setCatfiltershow] = React.useState(false);
    function toggle() {
      setCatfiltershow(!Catfiltershow);
    }

    const CustomCheckbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words lg:h-11 h-9",
                        "w-full max-w-full cursor-pointer rounded-none px-1.5 py-1 lg:py-1.5 text-gray-800 hover:bg-violet-900 cursor-pointer hover:text-white bg-white",
                        "data-[selected=true]:border-violet-900 data-[selected=true]:bg-violet-900 group-data-[selected=true]:text-white "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white 2xl:text-[17px] sm:text-[15px] text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }


    return (
        <>
            <div className='hidden'  style={{ display: Catfiltershow ? "block" : "none" }}>
                <div className='flex items-start lg:flex-nowrap flex-wrap 2xl:mt-16 md:mt-10 mt-5'>
                    <div className='lg:w-1/2 w-full ltr:2xl:pr-8 rtl:2xl:pl-8 ltr:lg:pr-6 rtl:lg:pl-6 ltr:lg:border-r rtl:lg:border-l border-gray-400/10'>
                        <CheckboxGroup label="shortcuts"
                            defaultValue={["3X"]}
                            classNames={{
                                base: "w-full lg:flex-row ",
                                wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-5 md:grid-cols-4  grid-cols-3 gap-2 content-start grow group small",
                                label: "2xl:min-w-[140px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.shortcuts} count={initialValues.shortcuts.length} type='filter-box' />
                        </CheckboxGroup>
                        <CheckboxGroup label="cut"
                            defaultValue={["EXCELLENT"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-3 md:grid-cols-5  grid-cols-3 gap-2 grow content-start  group small",
                                label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.cut} count={initialValues.cut.length} type='filter-box' />
                        </CheckboxGroup>
                        <CheckboxGroup label="polish"
                            defaultValue={["EXCELLENT"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-3 md:grid-cols-5  grid-cols-3 gap-2 grow content-start group small",
                                label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.polish} count={initialValues.polish.length} type='filter-box' />
                        </CheckboxGroup>
                        <CheckboxGroup label="symmetry"
                            defaultValue={["EXCELLENT"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-3 md:grid-cols-5  grid-cols-3 gap-2 grow content-start group small",
                                label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.symmetry} count={initialValues.symmetry.length} type='filter-box' />
                        </CheckboxGroup>
                    </div>
                    <div className='lg:w-1/2 w-full ltr:2xl:pl-8 ltr:lg:pl-6 rtl:2xl:pr-8 rtl:lg:pr-6 lg:mt-0 md:mt-8 mt-5'>
                        <CheckboxGroup label="fluorescence"
                            defaultValue={["NONE"]}
                            classNames={{
                                base: "w-full lg:flex-row ",
                                wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] xl:grid-cols-5 md:grid-cols-4  grid-cols-3 gap-2 grow content-start group small",
                                label: "2xl:min-w-[140px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.fluorescence} count={5} type='filter-box' />
                        </CheckboxGroup>
                        <CheckboxGroup label="Labs"
                            defaultValue={["GIA"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                wrapper: "grid 1xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 grid-cols-3 gap-2 grow content-start group small",
                                label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <FilterItem initialValues={initialValues.labs} count={5} type='filter-box' />
                        </CheckboxGroup>
                        <div className='flex items-start 2xl:flex-nowrap flex-wrap 2xl:gap-3'>
                            <CheckboxGroup label="price/ct"
                                defaultValue={["0.30 Down"]}
                                classNames={{
                                    base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                    wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                    label: "2xl:min-w-[90px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                }} >
                                <div className='flex gap-3 items-center justify-start w-full'>
                                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                        classNames={{
                                            input: ["bg-transparent !text-gray-900",],
                                            inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                            base: ["w-full"]
                                        }}
                                    />
                                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                        classNames={{
                                            input: ["bg-transparent !text-gray-900",],
                                            inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                            base: ["w-full"]
                                        }}
                                    />
                                </div>
                            </CheckboxGroup>
                            <CheckboxGroup label="amount"
                                defaultValue={["0.30 Down"]}
                                classNames={{
                                    base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                    wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                    label: "2xl:min-w-[90px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                }} >
                                <div className='flex gap-3 items-center justify-start w-full'>
                                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                        classNames={{
                                            input: ["bg-transparent !text-gray-900",],
                                            inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                            base: ["w-full"]
                                        }}
                                    />
                                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                        classNames={{
                                            input: ["bg-transparent !text-gray-900",],
                                            inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                            base: ["w-full"]
                                        }}
                                    />
                                </div>
                            </CheckboxGroup>
                        </div>
                        <CheckboxGroup label="cer/lot id"
                            defaultValue={["0.30 Down"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                            }} >
                            <div className='w-full grow'>
                                <Input size='lg' type="text" placeholder='Ex: P3612, P3548, 125745366, 121262605'
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900 w-full",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white max-w-full w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <span className='text-[12px] text-gray-900 font-bold uppercase mt-3 block'>enter your diamond id by comma ( , ) separated.</span>
                            </div>
                        </CheckboxGroup>
                    </div>
                </div>

                <div className='flex items-start lg:gap-5 lg:flex-nowrap flex-wrap'>
                    <CheckboxGroup label="fluorescence color"
                        classNames={{
                            base: "w-full 2xl:mt-10 lg:mt-8 mt-5",
                            wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                            label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]  block"
                        }} >
                        <div className='grid w-full 2xl:grid-cols-6 1xl:grid-cols-4  sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 content-start xl:mt-3 mt-1.5'>
                            <FilterItem initialValues={initialValues.fluorescence_color} count={initialValues.fluorescence_color.length} type='color-box' />
                        </div>
                    </CheckboxGroup>
                    <CheckboxGroup label="girdle"
                        defaultValue={["EXT"]}
                        classNames={{
                            base: "w-full 2xl:mt-10 lg:mt-8 mt-5 ",
                            wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                            label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]  block"
                        }} >
                        <div className='grid w-full 2xl:grid-cols-9 1xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:gap-2.5 gap-2 content-start xl:mt-3 mt-1.5'>
                            <FilterItem initialValues={initialValues.girdle} count={initialValues.girdle.length} type='filter-box' />
                        </div>
                    </CheckboxGroup>
                </div>

                <div className='flex items-start lg:gap-5 lg:flex-nowrap flex-wrap'>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="depth"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup label="table"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                    </div>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="Ratio"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <div></div>
                    </div>
                </div>

                <div className='flex items-start lg:gap-5 lg:flex-nowrap flex-wrap'>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="meas length"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup label="meas width"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                    </div>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="meas depth"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <div></div>
                    </div>
                </div>

                <div className='flex items-start lg:gap-5 lg:flex-nowrap flex-wrap'>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="crown height"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup label="crown angle"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                    </div>
                    <div className='flex items-start  lg:w-1/2 sm:gap-5 w-full sm:flex-nowrap flex-wrap'>
                        <CheckboxGroup label="pavalion depth"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                        <CheckboxGroup label="pavalion angle"
                            classNames={{
                                base: "w-full 2xl:mt-12 lg:mt-8 mt-5 sm:w-1/2",
                                wrapper: "flex flex-wrap xl:gap-4 gap-2 flex-row grow",
                                label: " 2xl:text-[17px] lg:text-[17px] text-sm uppercase text-gray-800 font-[600]"
                            }} >
                            <div className='flex gap-3 items-center justify-start w-full'>
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                                <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-1 ltr:pr-1.5 ltr:mr-1 rtl:pr-1 rtl:pl-1.5 rtl:ml-1 ltr:border-r rtl:border-l border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                                    classNames={{
                                        input: ["bg-transparent !text-gray-900",],
                                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10  group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                                        base: ["w-full"]
                                    }}
                                />
                            </div>
                        </CheckboxGroup>
                    </div>
                </div>

                <CheckboxGroup
                    defaultValue={["GIA"]}
                    classNames={{
                        base: "w-full 2xl:mt-12 lg:mt-8 mt-5 lg:flex-row",
                        wrapper: "grid 1xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-2 grow content-start group ",
                        label: "2xl:min-w-[140px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                    }} >
                    <FilterItem initialValues={initialValues.conslusion_filter} count={initialValues.conslusion_filter.length} type='filter-box' />
                </CheckboxGroup>
            </div>
            <div className='pt-6 mt-6 border-t border-gray-400/10'>
                <button className='all-btn ltr:sm:mr-4 ltr:mr-2 rtl:sm:ml-4 rtl:ml-2'>Reset Filter</button>
                <button  onClick={toggle}  className={Catfiltershow ? 'all-btn bg-white border border-gray-400/20 inline-flex items-center justify-center gap-2 font-medium text-gray-900 hover:bg-violet-900 hover:text-white group active' : 'all-btn bg-white border border-gray-400/20 inline-flex items-center justify-center gap-2 font-medium text-gray-900 hover:bg-violet-900 hover:text-white group' }>More Filter
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-gray-900 group-hover:stroke-white lg:w-3 w-2.5 group-[.active]:rotate-180'>
                        <path d="M13.1211 1L7.12109 7L1.12109 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

        </>
    )
}

export default Diamond_more_filter;
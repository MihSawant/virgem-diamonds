import React, { useState } from 'react';
import { Checkbox, cn } from "@nextui-org/react";
import Image from 'next/image';

const FilterItem = ({ initialValues, count, type }) => {

    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? initialValues : initialValues.slice(0, count);
    const initialValuesCount = initialValues.length;

    const CustomCheckbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words lg:h-11 h-9",
                        "w-full max-w-full cursor-pointer rounded-none px-1.5 py-1 lg:py-1.5 text-gray-800 hover:bg-violet-900 cursor-pointer transition-none hover:text-white bg-white",
                        "data-[selected=true]:border-violet-900 data-[selected=true]:bg-violet-900 group-data-[selected=true]:text-white "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px]  !transition-none text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }

    const ShapeCheckbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center justify-center q_radio break-words",
                        "w-full max-w-full cursor-pointer rounded-none p-2 2xl:p-3.5 text-gray-800 text-center hover:bg-violet-900 cursor-pointer hover:text-white bg-white lg:h-40 h-[120px]",
                        "data-[selected=true]:border-violet-900 data-[selected=true]:bg-violet-900 group-data-[selected=true]:text-white "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[15px] md:text-sm text-[13px] w-full h-full flex items-stretch justify-center flex-col",
                    wrapper: "hidden"
                }} >
                {children}
            </Checkbox>
        );
    }

    const get_button = (initialValuesCount, count) => {
        if (initialValuesCount === count) {
            return null
        } else {
            return (
                <button onClick={() => setShowAll(!showAll)} className={showAll ? 'flex items-center 2xl:gap-2 gap-1 justify-center w-full  bg-white hover:bg-violet-900 text-gray-900 hover:text-white 2xl:basis-[118px] 1xl:basis-[110px] lg:basis-[100px] md:basis-[96px] basis-[80px] lg:min-h-[44px] min-h-[36px] 2xl:text-[16px] sm:text-[15px] text-sm 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] group-[.small]:uppercase  self-stretch  group/button btn-more active' : ' 2xl:basis-[118px] 1xl:basis-[110px] lg:basis-[100px] md:basis-[96px] basis-[80px] lg:min-h-[44px] min-h-[36px] 2xl:text-[16px] sm:text-[15px] h-full flex items-center 2xl:gap-2 gap-1 text-sm 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] group-[.small]:uppercase justify-center w-full bg-white hover:bg-violet-900 text-gray-900 hover:text-white btn-more group/button'}>
                    <span>{showAll ? 'Less' : 'More'}</span> 
                    
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-gray-900 group-hover/button:stroke-white group-[.active]/button:rotate-180 lg:w-3 w-2.5'>
                        <path d="M11.9126 1.56445L6.68092 6.32055L1.44922 1.56445" strokeWidth="1.71219" strokeLinecap="round" strokeLinejoin="round"  />
                    </svg>
                </button>
            )
        }
    }

    const get_items = (key = '') => {
        if (key === 'filter-box') {
            return itemsToShow.map((items, index) => (
                <CustomCheckbox value={items.item} key={index}>
                    <span className='w-full text-center block'>{items.item}</span>
                </CustomCheckbox>
            ))
        } else if (key === 'shape-box') {
            return itemsToShow.map((items, index) => (
                <ShapeCheckbox value={items.item} key={index}>
                    <Image src={items.img} alt={items.item} title={items.item} width={90} height={90} className='block mx-auto lg:h-20 h-14 object-contain md:my-2 lg:w-20 w-14' /><span className='w-full bg-violet-400 flex items-center leading-[1.3] p-1 mt-auto justify-center lg:min-h-[35px] min-h-[30px] text-gray-900'>{items.item}</span>
                </ShapeCheckbox>
            ))
        } else if (key === 'color-box') {
            return itemsToShow.map((items, index) => (
                     <CustomCheckbox value={items.item} key={index} className=" grow-1 2xl:basis-[118px] 1xl:basis-[110px] lg:basis-[100px] md:basis-[96px] basis-[80px]"><span className={`w-7 h-7 rounded ltr:mr-2 rtl:ml-2 inline-block align-middle border border-black/10 bg-[${items.bgcolor}]`} style={{ backgroundColor: `${items.bgcolor}` }}></span>{items.item}</CustomCheckbox>
            ))
        }
    }

    return (
        <>
            {get_items(type)}
            {get_button(initialValuesCount, count)}
        </>
    );
};

export default FilterItem;

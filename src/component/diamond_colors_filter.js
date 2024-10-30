import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { CheckboxGroupProvider, Input, Skeleton, cn } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, Checkbox, CheckboxGroup } from "@nextui-org/react";
import FilterItem from './FilterItem';


const Diamond_colors_filter = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    const [selected, setSelected] = React.useState(false);

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
                <Tabs
                    aria-label="Options" radius='none'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    classNames={{
                        base: "bg-white w-full p-3",
                        tabList: "lg:gap-4 gap-2 w-full relative rounded-none p-0 bg-white",
                        cursor: "w-full bg-violet-900 !rounded-none shadow-none",
                        tab: "max-w-fit lg:px-10 px-5 !rounded-none 2xl:text-[20px] lg:text-lg text-md lg:py-7 py-6 text-gray-900 border border-gray-400/20",
                        tabContent: "group-data-[selected=true]:text-white text-gray-900 font-[400]",
                        panel: "p-0 shadow-none border-none"
                    }}
                >
                    <Tab key="White" title="White" className=''>
                        <CheckboxGroup
                            defaultValue={["D"]}
                            classNames={{
                                base: "w-full 2xl:mt-12 md:mt-8 mt-5",
                                wrapper: "grid 1xl:grid-cols-[repeat(17,minmax(0,1fr))] xl:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-12 md:grid-cols-10 grid-cols-6 xl:gap-4 gap-2 content-start"
                            }} >
                            <FilterItem initialValues={initialValues.white_diamond_color} count={initialValues.white_diamond_color.length} type='filter-box' />
                        </CheckboxGroup>
                    </Tab>
                    <Tab key="Fancy Diamond" title="Fancy Diamond">
                        {initialValues.fancy_color && initialValues.fancy_color.map((colors, index) => {
                            return (
                                <div key={index}>
                                    <CheckboxGroup label="Intensity"
                                        defaultValue={["Faint"]}
                                        classNames={{
                                            base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
                                            wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start",
                                            label: "2xl:min-w-[150px]  lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5"
                                        }} >
                                        <FilterItem initialValues={colors.intesity} count={colors.intesity.length} type='filter-box' />
                                    </CheckboxGroup>
                                    <CheckboxGroup label="overtone"
                                        defaultValue={["None"]}
                                        classNames={{
                                            base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
                                            wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start" ,
                                            label: "2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5"
                                        }} >
                                        <FilterItem initialValues={colors.overtone} count={9} type='filter-box' />

                                    </CheckboxGroup>
                                    <CheckboxGroup label="colours"
                                        defaultValue={["None"]}
                                        classNames={{
                                            base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
                                            wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start",
                                            label: "2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5"
                                        }} >
                                        <FilterItem initialValues={colors.colours} count={9} type='color-box' />

                                    </CheckboxGroup>
                                </div>
                            )
                        })}

                    </Tab>
                </Tabs>
            
        </>
    )
}

export default Diamond_colors_filter;
// import React, { useEffect, useState } from 'react';
// import { Tabs, Tab, CheckboxGroup, Skeleton } from "@nextui-org/react";
// import FilterItem from './FilterItem';

// const Diamond_colors_filter = ({ initialValues, onFilterChange }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [selectedWhiteColors, setSelectedWhiteColors] = useState([]);
//     const [selectedIntensities, setSelectedIntensities] = useState([]);
//     const [selectedOvertones, setSelectedOvertones] = useState([]);
//     const [selectedFancyColors, setSelectedFancyColors] = useState([]);
//     const [selectedTab, setSelectedTab] = useState("White");

//     useEffect(() => {
//         setTimeout(() => setIsLoading(false), 1000);
//     }, []);

//     // Handler for white diamond color selection
//     const handleWhiteColorChange = (values) => {
//         setSelectedWhiteColors(values);
//         triggerFilterChange();
//     };

//     // Handler for fancy diamond selections
//     const handleFancyDiamondChange = (type, values) => {
//         if (type === "intensity") setSelectedIntensities(values);
//         if (type === "overtone") setSelectedOvertones(values);
//         if (type === "colors") setSelectedFancyColors(values);

//         triggerFilterChange();
//     };

//     // Trigger API call with filter data
//     const triggerFilterChange = () => {
//         const filters = {
//             whiteColors: selectedWhiteColors,
//             fancyDiamond: {
//                 intensities: selectedIntensities,
//                 overtones: selectedOvertones,
//                 colors: selectedFancyColors,
//             },
//         };
//         onFilterChange(filters);
//     };

//     return (
//         <>
//             <Tabs
//                 aria-label="Options"
//                 radius='none'
//                 selectedKey={selectedTab}
//                 onSelectionChange={setSelectedTab}
//                 classNames={{
//                     base: "bg-white w-full p-3",
//                     tabList: "lg:gap-4 gap-2 w-full relative rounded-none p-0 bg-white",
//                     cursor: "w-full bg-violet-900 !rounded-none shadow-none",
//                     tab: "max-w-fit lg:px-10 px-5 !rounded-none 2xl:text-[20px] lg:text-lg text-md lg:py-7 py-6 text-gray-900 border border-gray-400/20",
//                     tabContent: "group-data-[selected=true]:text-white text-gray-900 font-[400]",
//                     panel: "p-0 shadow-none border-none",
//                 }}
//             >
//                 {/* White Diamond Tab */}
//                 <Tab key="White" title="White">
//                     {isLoading ? (
//                         <Skeleton className="w-full h-10" />
//                     ) : (
//                         <CheckboxGroup
//                             onChange={handleWhiteColorChange}
//                             defaultValue={["D"]}
//                             classNames={{
//                                 base: "w-full 2xl:mt-12 md:mt-8 mt-5",
//                                 wrapper: "grid 1xl:grid-cols-[repeat(17,minmax(0,1fr))] xl:grid-cols-[repeat(15,minmax(0,1fr))] lg:grid-cols-12 md:grid-cols-10 grid-cols-6 xl:gap-4 gap-2 content-start",
//                             }}
//                         >
//                             <FilterItem initialValues={initialValues.white_diamond_color} count={initialValues.white_diamond_color.length} type="filter-box" />
//                         </CheckboxGroup>
//                     )}
//                 </Tab>

//                 {/* Fancy Diamond Tab */}
//                 <Tab key="Fancy Diamond" title="Fancy Diamond">
//                     {isLoading ? (
//                         <Skeleton className="w-full h-10" />
//                     ) : (
//                         initialValues.fancy_color && initialValues.fancy_color.map((colors, index) => (
//                             <div key={index}>
//                                 <CheckboxGroup
//                                     label="Intensity"
//                                     onChange={(values) => handleFancyDiamondChange("intensity", values)}
//                                     defaultValue={["Faint"]}
//                                     classNames={{
//                                         base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
//                                         wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start",
//                                         label: "2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5",
//                                     }}
//                                 >
//                                     <FilterItem initialValues={colors.intesity} count={colors.intesity.length} type="filter-box" />
//                                 </CheckboxGroup>
//                                 <CheckboxGroup
//                                     label="Overtone"
//                                     onChange={(values) => handleFancyDiamondChange("overtone", values)}
//                                     defaultValue={["None"]}
//                                     classNames={{
//                                         base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
//                                         wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start",
//                                         label: "2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5",
//                                     }}
//                                 >
//                                     <FilterItem initialValues={colors.overtone} count={9} type="filter-box" />
//                                 </CheckboxGroup>
//                                 <CheckboxGroup
//                                     label="Colors"
//                                     onChange={(values) => handleFancyDiamondChange("colors", values)}
//                                     defaultValue={["None"]}
//                                     classNames={{
//                                         base: "w-full 2xl:mt-12 md:mt-8 mt-5 lg:flex-row",
//                                         wrapper: "grid 1xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 gap-2 grow content-start",
//                                         label: "2xl:min-w-[150px] lg:min-w-[120px] min-w-[100px] 2xl:text-[19px] lg:text-[17px] text-md uppercase text-gray-800 font-[600] mt-2.5",
//                                     }}
//                                 >
//                                     <FilterItem initialValues={colors.colours} count={9} type="color-box" />
//                                 </CheckboxGroup>
//                             </div>
//                         ))
//                     )}
//                 </Tab>
//             </Tabs>
//         </>
//     );
// };

// export default Diamond_colors_filter;



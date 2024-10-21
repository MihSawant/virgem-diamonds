import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { CheckboxGroup, Link, Skeleton, Checkbox, cn, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const DiamondSetting_01 = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);


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
                    label: "group-data-[selected=true]:text-white text-gray-900 group-data-[hover=true]:text-white 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px] text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }
    const CustomColorbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words  !w-auto !p-0",
                        "w-full max-w-full cursor-pointer rounded-none ",
                        "rounded-full  "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px]  !transition-none text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }

    return (
        <>
            {isLoading ? (
                <div className="mb-8 lg:mb-0">
                    <div className="container bg-violet-400 2xl:p-8 lg:p-6 p-4">

                        <div className='md:flex items-center xl:mb-8 mb-6'>
                            <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>Style Design</p>

                            <div className='grow md:w-[88%]'>
                                <Swiper spaceBetween={15}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                        },
                                        420: {
                                            slidesPerView: 3,
                                        },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        1024: {
                                            slidesPerView: 6,
                                        },
                                        1640: {
                                            slidesPerView: 9,
                                        }
                                    }}
                                    modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>

                        <div className='md:flex items-center xl:mb-8 mb-6'>
                            <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>Shape</p>
                            <div className='grow md:w-[88%]'>
                                <Swiper spaceBetween={15}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                        },
                                        420: {
                                            slidesPerView: 3,
                                        },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        1024: {
                                            slidesPerView: 6,
                                        },
                                        1640: {
                                            slidesPerView: 9,
                                        }
                                    }}
                                    modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-white text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                            <Skeleton className='w-full h-16 rounded' />
                                            <Skeleton className='w-full h-5 rounded mt-2' />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>

                        <div className='md:flex items-center xl:mb-8 mb-6'>
                            <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>CARAT</p>
                            <div className='grow md:w-[88%]'>
                                <Swiper spaceBetween={15}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                        },
                                        420: {
                                            slidesPerView: 3,
                                        },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        1024: {
                                            slidesPerView: 6,
                                        },
                                        1640: {
                                            slidesPerView: 9,
                                        }
                                    }}
                                    modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                    <SwiperSlide > <Skeleton className='w-full h-11 rounded' /> </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className='md:flex items-center '>
                            <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>METAL</p>
                            <div className='grow md:w-[88%]'>
                                <ul className="flex items-center 1xl:gap-6 gap-4 flex-wrap md:ml-3">
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                    <li className=""><Skeleton className='w-32 h-5 rounded' /> </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            ) : (
                <>
                    <div className="mb-8 lg:mb-0">
                        {initialValues && initialValues.map((data, index) => {
                            return (
                                <div className="container bg-violet-400 2xl:p-8 lg:p-6 p-4" key={index}>

                                    <div className='md:flex items-center xl:mb-8 mb-6'>
                                        <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>Style Design</p>
                                        <div className='grow md:w-[88%]'>
                                            <Swiper spaceBetween={15}
                                                navigation={true}
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 2,
                                                    },
                                                    420: {
                                                        slidesPerView: 3,
                                                    },
                                                    767: {
                                                        slidesPerView: 4,
                                                    },
                                                    1024: {
                                                        slidesPerView: 6,
                                                    },
                                                    1640: {
                                                        slidesPerView: 9,
                                                    }
                                                }}
                                                modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                                {data.StyleDesign && data.StyleDesign.map((slides, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <Checkbox classNames={{
                                                                base: cn(
                                                                    "inline-flex w-full max-w-md bg-content1 p-0 m-0 bg-white ",
                                                                ),
                                                                wrapper: "hidden",
                                                                label: "w-full group-data-[selected=true]:bg-violet-900 group-data-[hover=true]:bg-violet-900 bg-white  ",
                                                                icon: "hidden "
                                                            }}>
                                                                <div className='cursor-pointer group text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                                                    <Image src={slides.img} alt={slides.title} title={slides.title} width={112} height={75} className=' mx-auto' />
                                                                    <p className='md:text-md text-[15px] text-gray-900  group-data-[hover=true]:text-white   group-data-[selected=true]:text-white text-center leading-tight mt-2'>{slides.title}</p>
                                                                </div>
                                                            </Checkbox>

                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                    </div>

                                    <div className='md:flex items-center xl:mb-8 mb-6'>
                                        <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>Shape</p>
                                        <div className='grow md:w-[88%]'>
                                            <Swiper spaceBetween={15}
                                                navigation={true}
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 2,
                                                    },
                                                    420: {
                                                        slidesPerView: 3,
                                                    },
                                                    767: {
                                                        slidesPerView: 4,
                                                    },
                                                    1024: {
                                                        slidesPerView: 6,
                                                    },
                                                    1640: {
                                                        slidesPerView: 9,
                                                    }
                                                }}
                                                modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                                {data.diamond_share && data.diamond_share.map((slides, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <Checkbox classNames={{
                                                                base: cn(
                                                                    "inline-flex w-full max-w-md bg-content1 p-0 m-0 bg-white",
                                                                ),
                                                                wrapper: "hidden",
                                                                label: "w-full group-data-[selected=true]:bg-violet-900 group-data-[hover=true]:bg-violet-900 bg-white ",
                                                                icon: "hidden "
                                                            }}>
                                                                <div className='cursor-pointer group text-center flex justify-between items-center px-1.5 py-3 md:min-h-[140px] min-h-[120px] flex-col'>
                                                                    <Image src={slides.img} alt={slides.title} title={slides.title} width={80} height={80} className=' mx-auto' />
                                                                    <p className='md:text-md text-[15px] text-gray-900 group-data-[hover=true]:text-white  group-data-[selected=true]:text-white text-center leading-tight mt-2'>{slides.title}</p>
                                                                </div>
                                                            </Checkbox>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                    </div>

                                    <div className='md:flex items-center xl:mb-8 mb-6'>
                                        <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>CARAT</p>
                                        <div className='grow md:w-[88%]'>
                                            <Swiper spaceBetween={15}
                                                navigation={true}
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 2,
                                                    },
                                                    420: {
                                                        slidesPerView: 3,
                                                    },
                                                    767: {
                                                        slidesPerView: 4,
                                                    },
                                                    1024: {
                                                        slidesPerView: 6,
                                                    },
                                                    1640: {
                                                        slidesPerView: 9,
                                                    }
                                                }}
                                                modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                                                <CheckboxGroup label="shortcuts"
                                                    defaultValue={["0.30 Down"]}
                                                    classNames={{
                                                        base: "w-full lg:flex-row ",
                                                        wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-5 md:grid-cols-4  grid-cols-3 gap-2 grow group small",
                                                        label: "2xl:min-w-[140px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                                    }} >
                                                    {data.carat && data.carat.map((slides, index) => {
                                                        return (
                                                            <SwiperSlide key={index}>
                                                                <CustomCheckbox value={slides.item} key={index}>
                                                                    <span className='w-full text-center block'>{slides.item}</span>
                                                                </CustomCheckbox>
                                                            </SwiperSlide>
                                                        )
                                                    })}
                                                </CheckboxGroup>
                                            </Swiper>
                                        </div>
                                    </div>

                                    <div className='md:flex items-center xl:mb-8 mb-6'>
                                        <p className='font-nabi 2xl:text-[24px] lg:text-[22px] text-lg text-gray-800 md:w-[12%] md:mb-0 mb-2 uppercase'>METAL</p>
                                        <div className='grow md:w-[88%]'>
                                            <CheckboxGroup
                                                defaultValue={["Round"]}
                                                classNames={{
                                                    base: "w-full shape-filter",
                                                    wrapper: "flex flex-row gap-4 items-start content-start	"
                                                }} >
                                                {data.metal && data.metal.map((item, index) => {
                                                    return (
                                                        <CustomColorbox value={item.title} key={index}>
                                                            <p className="text-gray-800 hover:text-violet-900 xl:text-[17px] text-[15px] cursor-pointer flex items-center leading-tight" href={item.slug}>
                                                                <span className="w-8 inline-block text-center ltr:mr-1.5 rtl:ml-1.5 outCircle mb-px"><Image src={item.icon} width={20} height={20} alt={item.alt} title={item.title} className="m-auto inline-block rounded-full outline outline-offset-[1.5px] outline-1 outline-gray-800 hover:outline-violet-900 group-data-[selected=true]:outline-violet-900 group-data-[selected=true]:outline-2" /></span>
                                                                {item.title}
                                                            </p>
                                                        </CustomColorbox>
                                                    )
                                                })}
                                            </CheckboxGroup>
                                        </div>
                                    </div>

                                    <div className='flex items-center sm:justify-between justify-center bg-white p-3 md:flex-nowrap flex-wrap gap-3 '>
                                        <p className=' capitalize lg:text-lg text-md text-gray-900 md:ml-4'>engagement ring : $1590.00</p>
                                        <div className='flex items-center sm:w-auto w-full justify-center sm:flex-nowrap flex-wrap gap-4'>
                                            <p className=' capitalize lg:text-lg text-md text-gray-900'>Total : $1590.00</p>
                                            <button className='all-btn ltr:sm:ml-6 rtl:sm:mr-6 sm:w-auto w-full'>Next</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </>
            )
            }
        </>
    )
}

export default DiamondSetting_01;
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useFetchData } from '../../comman';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link, Input, Slider, CheckboxGroup, cn, Checkbox } from '@nextui-org/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ShorterFilter = () => {
  const { data } = useFetchData("json/data/sort-filter-data.json");
  const [value, setValue] = React.useState([99, 2000]);
  const [valueCarat, setValueCarat] = React.useState([0.30, 1.50]);

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["best seller"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [SortFilter, setSortFilter] = React.useState(false);
  function toggle() {
    setSortFilter(!SortFilter);
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
            " data-[selected=true]:outline-violet-900  data-[selected=true]:outline-[3px]  data-[selected=true]:outline-offset-1 outline outline-1 outline-violet-900 outline-offset-[4px]  "
          ),
          label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px]  !transition-none text-sm w-full flex items-center",
          wrapper: "hidden"
        }}>
        {children}
      </Checkbox>
    );
  }
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])

  return (
    <>
      <div className='relative container xl:mb-10 mb-6 px-0'>
        <div className='flex lg:flex-nowrap flex-wrap items-start justify-between md:gap-6 gap-2 bg-violet-400 py-3 md:px-6 px-3'>
          <Button disableAnimation className={SortFilter ? 'active group text-md uppercase font-[600] text-gray-800 bg-transparent p-0' : 'group text-md uppercase font-[600] text-gray-800 bg-transparent p-0'} onClick={toggle} >Filter
            <span className='bg-white w-7 h-7 rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='w-3 group-[.active]:rotate-180'>
                <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
              </svg>
            </span>
          </Button>

          <Dropdown classNames={{
            base: "before:bg-default-200", // change arrow background
            content: "py-1 px-1  bg-white",
          }} >
            <DropdownTrigger disableAnimation >
              <Button variant="bordered" className="uppercase text-gray-800 text-md p-0 border-0 aria-expanded:scale-[1] aria-expanded:opacity-100" >
                <span className='font-semibold'>Sort By:</span> {selectedValue} <span className='bg-white w-7 h-7 rounded-full flex items-center justify-center group-aria-[expanded=true]:rotate-180'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='w-3'>
                    <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                  </svg>
                </span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem className="text-md uppercase text-gray-900" key="default sorting">Default Sorting</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="best seller">Best Seller</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="Top Rated">Top Rated</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="Newest">Newest</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="Price: Low to High">Price: Low to High</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="Price: High to Low">Price: High to Low</DropdownItem>
              <DropdownItem className="text-md uppercase text-gray-900" key="Name (A - Z)">Name (A - Z)</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className='bg-violet-400 border-t border-gray-200/10 py-8 md:px-6 px-3' style={{ display: SortFilter ? "block" : "none" }}>
          {data && data.map((child_items, index) => {
            return (

              <div className='flex items-start xl:flex-nowrap flex-wrap' key={index}>

                <div className='xl:w-5/12  w-full xl:mb-0 mb-6'>
                  <div className='mb-10'>
                    <p className='text-md uppercase font-[600] text-gray-800 mb-5'>shapes</p>
                    <CheckboxGroup
                      defaultValue={["Round"]}
                      classNames={{
                        base: "w-full shape-filter",
                        wrapper: "grid 1xl:grid-cols-6 xl:grid-cols-4 sm:grid-cols-6 grid-cols-3 gap-4 sm:gap-6 content-start	"
                      }} >
                      {child_items.diamond_shape && child_items.diamond_shape.map((diamond_shape_item, index) => {
                        return (
                          <CustomColorbox value={diamond_shape_item.link_title} key={index}>
                            <div className="relative cursor-pointer w-full"  >
                              <div className="flex m-auto items-center justify-center w-full h-20 bg-white ">
                                <Image src={diamond_shape_item.img} width={0} height={0} sizes="100vw" alt={diamond_shape_item.link_title} title={diamond_shape_item.link_title} className="lg:w-[50px] lg:h-[45px] w-[35px] h-[35px] object-fit " />
                              </div>
                            </div>
                          </CustomColorbox>
                        )
                      })}
                    </CheckboxGroup>

                  </div>
                  <div className='md:flex items-center'>
                    <p className='text-md uppercase font-[600] text-gray-800  md:w-1/5 mb-0'>Ring Style</p>
                    <div className='grow-1 max-w-full md:w-4/5'>
                      <div className="flex md:block gap-3 justify-end w-full mb-3 md:mb-0 relative">
                        <div className="arrow-right swiper-button-prev group !mt-0 after:!hidden !text-black !text-md rounded-full  flex items-center justify-center !top-4 md:!top-2 !-left-4 rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='!w-4 -rotate-90'>
                            <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                          </svg>

                        </div>
                        <div className="arrow-left md:!absolute swiper-button-next  group !mt-0 after:!hidden !text-black !text-md !border-0 rounded-full  flex items-center justify-center !top-4 md:!top-2 !-right-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='!w-4 -rotate-90'>
                            <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                          </svg>
                        </div>
                      </div>
                      <Swiper spaceBetween={20}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        breakpoints={{
                          0: {
                            slidesPerView: 3,
                          },
                          420: {
                            slidesPerView: 6,
                          },
                        }}
                        modules={[Navigation]} className="category_slider !m-0 " dir='ltr'>
                        {child_items.ring_slider && child_items.ring_slider.map((slides, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div>
                                <Image src={slides.img} alt={slides.img_alt} title={slides.img_alt} width={60} height={60} />
                              </div>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>

                  </div>
                </div>

                <div className='xl:w-3/12 md:w-1/3 w-full 2xl:px-14 xl:px-10 '>
                  <ul className="nav xl:w-fit mx-auto">
                    <p className="text-[15px] 2xl:text-md font-semibold  mb-5 text-gray-800 uppercase">Ring Metal</p>
                    {child_items.ring_metal && child_items.ring_metal.map((item, index) => {
                      return (
                        <li key={index} className="">
                          <Link className="text-gray-800 hover:text-violet-900 text-[15px] 2xl:text-md my-3 block" href={item.slug}>
                            <span className="w-8 inline-block text-center  ltr:mr-2 rtl:ml-2 outCircle"><Image src={item.icon} width={18} height={18} alt={item.alt} title={item.title} className="m-auto inline-block rounded-full outline outline-offset-[1.5px] outline-1 outline-gray-800 hover:outline-violet-900" /></span>
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                </div>

                <div className='xl:w-4/12 md:w-2/3 w-full md:mt-0 mt-4'>
                  <div>
                    <p className="text-[15px] 2xl:text-md font-semibold mx-1 mb-3.5 text-gray-800 uppercase">Price range</p>
                    <div className='flex gap-3 items-center justify-start md:w-3/5 w-full'>
                      <Input size='lg' type="text" startContent={<span className='lg:px-2 pl-0 pr-1.5 mr-1 border-r border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                        classNames={{
                          input: ["bg-transparent text-gray-900",],
                          inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                          base: ["w-full"]
                        }}
                      />
                      <Input size='lg' type="text" startContent={<span className='lg:px-2 pl-0 pr-1.5 mr-1 border-r border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                        classNames={{
                          input: ["bg-transparent text-gray-900",],
                          inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                          base: ["w-full"]
                        }}
                      />
                    </div>
                    <div className='mt-3'>
                      <Slider
                        step={50}
                        minValue={99}
                        maxValue={8000}
                        value={value}
                        onChange={setValue}
                        defaultValue={[99, 2000]}
                        formatOptions={{ style: "currency", currency: "USD" }}
                        classNames={{
                          base: "w-full",
                          filler: "bg-gradient-to-r from-violet-900 to-violet-900",
                          labelWrapper: "mb-2",
                          label: "font-medium text-default-700 text-medium",
                          value: "font-medium text-default-500 text-small",
                          track: "bg-white h-1.5 !border-0 mx-1.5",
                          thumb: [
                            "transition-size",
                            "bg-white after:bg-violet-900 after:border-white",
                            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                            "data-[dragging=true]:w-3.5 data-[dragging=true]:h-3.5 data-[dragging=true]:after:h-3.5 data-[dragging=true]:after:w-3.5 before:w-3.5 before:h-3.5 after:w-3.5 after:h-3.5 w-3.5 h-3.5"
                          ],
                          step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
                        }}
                      />
                      <p className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                        <span>{Array.isArray(value) && `$${value[0]}.00`}</span>
                        <span>{Array.isArray(value) && `$${value[1]}.00`}</span>
                      </p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className="text-[15px] 2xl:text-md font-semibold mx-1 mb-3.5 text-gray-800 uppercase">Carat</p>
                    <div className='flex gap-3 items-center justify-start md:w-3/5 w-full'>
                      <Input size='lg' type="text" startContent={<span className='lg:px-2 pl-0 pr-1.5 mr-1 border-r border-gray-200/20 lg:text-md text-sm text-gray-900'>From</span>}
                        classNames={{
                          input: ["bg-transparent text-gray-900",],
                          inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                          base: ["w-full"]
                        }}
                      />
                      <Input size='lg' type="text" startContent={<span className='lg:px-2 pl-0 pr-1.5 mr-1 border-r border-gray-200/20 lg:text-md text-sm text-gray-900'>To</span>}
                        classNames={{
                          input: ["bg-transparent text-gray-900",],
                          inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white w-full lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                          base: ["w-full"]
                        }}
                      />
                    </div>
                    <div className='mt-3'>
                      <Slider
                        step={0.10}
                        minValue={0.30}
                        maxValue={8}
                        value={valueCarat}
                        onChange={setValueCarat}
                        defaultValue={[0.30, 1.50]}
                        formatOptions={{ style: "currency", currency: "USD" }}
                        classNames={{
                          base: "w-full",
                          filler: "bg-gradient-to-r from-violet-900 to-violet-900",
                          labelWrapper: "mb-2",
                          label: "font-medium text-default-700 text-medium",
                          value: "font-medium text-default-500 text-small",
                          track: "bg-white h-1.5 !border-0 mx-1.5",
                          thumb: [
                            "transition-size",
                            "bg-white after:bg-violet-900 after:border-white",
                            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                            "data-[dragging=true]:w-3.5 data-[dragging=true]:h-3.5 data-[dragging=true]:after:h-3.5 data-[dragging=true]:after:w-3.5 before:w-3.5 before:h-3.5 after:w-3.5 after:h-3.5 w-3.5 h-3.5"
                          ],
                          step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
                        }}
                      />
                      <p className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                        <span>{Array.isArray(value) && `${valueCarat[0]} Down`}</span>
                        <span>{Array.isArray(value) && `${valueCarat[1]}`}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ShorterFilter;




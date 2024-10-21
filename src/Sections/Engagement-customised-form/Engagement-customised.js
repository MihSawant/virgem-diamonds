import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Select, SelectItem } from "@nextui-org/react";
import { Button, Radio, RadioGroup, Skeleton, cn } from "@nextui-org/react";

const Enagagement_customised = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
           
                    <div className="relative container 2xl:mb-20 lg:mb-14 mb-12 ">
                        <div className='flex items-stretch flex-wrap bg-gray-300'>
                            <div className='sm:w-1/2 relative w-full'>
                                <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Engagement/eng-ring-form.jpg' fill={true} alt='Categoty_img' title='Categoty_img' className='object-cover sm:!absolute !relative sm:max-h-none max-h-[350px]' />
                            </div>
                            <div className='sm:w-1/2 w-full lg:px-12 2xl:px-24 px-4 lg:py-20 sm:py-10 py-6'>
                                <h2 className='text-gray-800 md:my-6 my-2.5 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>get design for your engagement ring</h2>
                                <p className='text-gray-600 text-md xl:text-lg leading-7 text-center md:my-6 my-2.5'>At vero eos et accusamus et iusto dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                                <form className='text-center'>
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-10 my-3 md:mb-3'>
                                        <input type='text' placeholder='Start with a design' className='bg-white focus:outline-none rounded-none border border-gray-800 w-full grow px-4 2xl:py-3.5 py-3 text-center font-[400] xl:text-lg text-md placeholder:text-gray-900 text-gray-900' />
                                        <Select radius='none'
                                            placeholder="Select an Diamond"
                                            classNames={{
                                                trigger: "text-center text-lg h-auto  px-4 2xl:py-3.5 py-3  text-gray-800 border border-gray-800 shadow-none bg-white data-[hover=true]:bg-white",
                                                listbox: "max-h-[400px] !w-full",
                                                value:"xl:text-lg text-md !text-gray-800 opacity-100 text-center bg-white ",
                                              }}
                                              popoverProps={{
                                                classNames: {
                                                  base: " !w-full rounded-none bg-white",
                                                  content: "p-0 border-small border-divider text-lg rounded-none",
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
                                                <SelectItem key='rubi' value='rubi'>Rubi</SelectItem>
                                                <SelectItem key='dfjn' value='dfjn'>Rubi</SelectItem>
                                                <SelectItem key='ksdjuf' value='ksdjuf'>Rubi</SelectItem>
                                        </Select>
                                    </div>
                                    <RadioGroup
                                        orientation="horizontal" className='flex items-center justify-center gap-4 text-black lg:mt-8 mt-4'
                                    >
                                        <Radio classNames={{
                                            base: cn(
                                                "sm:mx-0.5"
                                            ),
                                            control: cn(
                                                "bg-[url('https://webby-production.s3.amazonaws.com/Starry-Heavens/home-4/check.svg')] bg-black bg-contain bg-center bg-no-repeat w-2.5 h-2.5 rounded-none "
                                            ),
                                            wrapper: cn(
                                                "  group-data-[selected=true]:!bg-black border-1 border-black rounded w-4 h-4 group-data-\[selected\=true\]:border-black "
                                            ),
                                            label: cn(
                                                "!text-black"
                                            ),
                                            labelWrapper: cn(
                                                "mx-2"
                                            )
                                        }} value="Woman">Woman</Radio>
                                        <Radio value="Man" classNames={{
                                            base: cn(
                                                "sm:mx-0.5"
                                            ),
                                            control: cn(
                                                "bg-[url('https://webby-production.s3.amazonaws.com/Starry-Heavens/home-4/check.svg')] bg-black bg-contain bg-center bg-no-repeat w-2.5 h-2.5 rounded-none "
                                            ),
                                            wrapper: cn(
                                                "  group-data-[selected=true]:!bg-black border-1 border-black rounded w-4 h-4  group-data-\[selected\=true\]:border-black "
                                            ),
                                            label: cn(
                                                "!text-black"
                                            ),
                                            labelWrapper: cn(
                                                "mx-2"
                                            )
                                        }}>Man</Radio>
                                    </RadioGroup>
                                    <button className="2xl:mt-10 lg:mt-8 mt-4 all-btn bg-violet-900 text-white border border-violet-900 hover:border-gray-800 px-10 rounded-none justify-center xl:text-lg text-md h-auto font-light group inline-flex items-center " href="/">
                                        Continue Now
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </>
          
    )
}

export default Enagagement_customised;
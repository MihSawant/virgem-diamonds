import Link from 'next/link'
import Image from 'next/image'
import { RadioGroup, Radio, Modal, ModalContent, ModalBody, useDisclosure, Button, cn } from "@nextui-org/react";
import { useFetchData } from '../comman';
import React, { useEffect, useState } from 'react';


function NewsletterPopup() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("outside");


    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            <Modal
                defaultOpen={true}
                backdrop="opaque"
                scrollBehavior={scrollBehavior}
                placement="center"
                onOpenChange={onOpenChange}
                radius="none"
                classNames={{
                    body: "p-0 bg-white relative",
                    base: "w-[800px] max-w-full !my-auto bg-transparent py-4",
                    closeButton: "hover:bg-white/5 active:bg-white/10 z-20  bg-white/50 hover:bg-violet-400 sm:text-[22px] text-black top-6 right-2",
                    backdrop:"backdrop-opacity-100 bg-black/60"
                }}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className='flex items-stretch flex-wrap'>
                                    <div className='sm:w-1/2 relative w-full'>
                                        <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-4/newsletter-img.jpg' fill={true} alt='Categoty_img' title='Categoty_img' className='object-cover sm:!absolute !relative sm:max-h-none max-h-[350px]' />
                                    </div>
                                    <div className='sm:w-1/2 w-full lg:px-8 px-4 lg:py-20 sm:py-10 py-6'>
                                        <h2 className='lg:text-xl md:text-[24px] text-[20px] leading-snug font-montserrat text-black font-semibold text-center'>Subscribe for our Newsletter</h2>
                                        <p className='text-gray-600 text-md font-montserrat text-center md:my-4 my-2.5'>Sed ut perspiciatis unde omnis iste natus error voluptatem.</p>
                                        <form className='text-center'>
                                            <input type='email' placeholder='Enter email address' className='bg-violet-400 focus:outline-none w-full rounded px-4 py-3 md:mb-6 mb-4 text-center font-[400] text-md font-montserrat placeholder:text-black text-black' />
                                            <RadioGroup
                                                orientation="horizontal" className='flex items-center justify-center gap-4 text-black'
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
                                                    )
                                                }} value="Woman">Woman</Radio>
                                                <Radio value="Man"  classNames={{
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
                                                    )
                                                }}>Man</Radio>
                                            </RadioGroup>
                                            <Button className="sm:mt-6 mt-4 all-btn bg-violet-900 text-white border border-violet-900 hover:border-gray-800 rounded justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4" href="/">
                                                Subscribe
                                                <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:translate-x-2 transition-all"><path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path></svg></Button>
                                        </form>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewsletterPopup;
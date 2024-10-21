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
                placement="bottom-right"
                onOpenChange={onOpenChange}
                radius="none"
                classNames={{
                    body: "p-1.5 bg-white  bg-transparent",
                    base: "2xl:w-[750px] w-[650px] max-w-full !ml-auto !mt-auto !mb-6 sm:!mr-10 bg-transparent p-0",
                    closeButton: "hover:bg-white/5 active:bg-white/10 z-20  bg-white/50 hover:bg-violet-400 sm:text-[22px] text-black top-6 right-2 hidden",
                }}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className='w-full 2xl:px-8 lg:px-6 px-4 2xl:py-8 py-6 bg-white relative'>
                                    <h2 className='md:text-[22px] text-lg leading-snug font-montserrat text-black font-semibold capitalize'>cookies & privacy Policy </h2>
                                    <p className='text-gray-600 sm:text-md text-sm font-montserrat 2xl:my-4 my-2.5 font-medium leading-normal'>Lorem Ipsum collects information about you when you use our Website to access our services,
                                        and other online products and services or portions of such mediums, through which you have accessed this <Link href='/privacy-policy' className='text-violet-900 underline'>Privacy Policy.</Link></p>
                                    <div className='flex items-center sm:flex-nowrap flex-wrap justify-end sm:gap-4 gap-2 2xl:mt-8 mt-4'>
                                        <Button onPress={onClose} className='all-btn sm:w-auto w-full rounded border border-black bg-white text-black hover:text-white justify-center font-montserrat text-sm uppercase font-[600] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4 hover:!opacity-100'>manage settings
                                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-black group-hover:fill-white group-hover:translate-x-2 transition-all">
                                                <path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path>
                                            </svg></Button>
                                        <Button onPress={onClose} className="all-btn sm:w-auto w-full bg-violet-900 text-white border border-violet-900 hover:border-gray-800 rounded justify-center font-montserrat text-sm uppercase font-[500] tracking-wider group inline-flex items-center gap-1.5 py-3 lg:px-6 px-4 hover:!opacity-100">
                                            yes, i accept
                                            <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className="fill-white group-hover:translate-x-2 transition-all">
                                                <path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z"></path>
                                            </svg>
                                        </Button>
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
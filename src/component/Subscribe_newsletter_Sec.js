import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';


function Subscribe_Newsletter() {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            <div className='flex items-stretch justify-center flex-wrap relative container 2xl:py-24 lg:py-16 py-12  border-t border-violet-400'>
                <div className='sm:max-w-[670px] w-full lg:px-8 md:px-4 '>
                    <h2 className='2xl:text-3xl lg:text-2xl sm:text-xl text-[24px] leading-snug  text-black uppercase text-center lg:mb-6 mb-3'>Subscribe our Newsletter</h2>
                    <form className='text-center'>
                        <div className='flex items-center sm:flex-nowrap flex-wrap justify-center md:gap-5 gap-3'>
                        <input type='email' placeholder='Enter email address' className='bg-white border border-gray-200/10 focus:outline-none w-full px-6 lg:py-4 py-3 font-[400] md:text-lg text-md  placeholder:text-gray-800 text-gray-800' />
                        <Button className="md:text-lg text-md xl:px-12 md:px-10 px-6 lg:py-4 md:py-3 py-2.5 all-btn bg-black text-white justify-center group rounded-none h-auto" href="/">
                            Subscribe</Button>
                            </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Subscribe_Newsletter;
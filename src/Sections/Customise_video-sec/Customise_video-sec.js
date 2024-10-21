import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Image, Skeleton } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Category_innerpages } from '../../comman'


const Customise_Video = ({ initialValues }) => {

    const videoRef = React.useRef();
    const handlePlay = () => {
        videoRef.current.play();
        const old_class = document.getElementById('toggleVideo').className;
        const new_class = old_class === 'hidden'
        document.getElementById('toggleVideo').className = new_class
    };

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            <div className="relative 2xl:pt-20 lg:pt-16 pt-14 wp-top-arrows bg-violet-400 before:block before:w-full before:h-[200px] before:lg:h-[300px] before:bg-white before:absolute before:bottom-0 before:left-0 before:z-0">
                <div className="relative container">
                    <h2 className="text-gray-800 md:mb-5 mb-3 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight  text-center">create a custom jewellery</h2>
                    <p className='2xl:text-lg text-md mb-4 lg:max-w-[65%] mx-auto text-center  text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p className='2xl:text-lg text-md mb-4 lg:max-w-[65%]  mx-auto text-center text-gray-800'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable</p>
                    <p className='2xl:text-lg text-md lg:max-w-[65%]  mx-auto text-center text-gray-800'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <div className="flex 2xl:mt-16 mt-8 items-center justify-center relative ">
                        <button aria-label="Close" onClick={handlePlay} id="toggleVideo" className="lg:w-24 w-16 h-16 lg:h-24 bg-violet-400 rounded-full flex items-center justify-center outline outline-[6px] outline-white/40 z-10 absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4 ">
                            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:w-7 w-5'>
                                <path d="M27.013 13.3507L4.40747 1.34147C2.40931 0.279947 0 1.7282 0 3.99081V28.0092C0 30.2718 2.40931 31.7201 4.40746 30.6585L27.013 18.6493C29.1364 17.5213 29.1364 14.4787 27.013 13.3507Z" fill="#805A81" />
                            </svg>
                        </button>
                        <video ref={videoRef} loop poster='https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/jewellery-making.jpg' className="w-full max-h-[400px] lg:max-h-[600px] min-h-[400px] lg:min-h-[600px] object-cover"  >
                            <source src='https://webby-production.s3.amazonaws.com/Starry-Heavens/customise/jewellery-making.mp4' type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Customise_Video;
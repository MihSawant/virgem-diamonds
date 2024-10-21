import Header_h1 from 'src/component/Header_h1'
import React, { useState } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import Footer_h3 from '../src/component/Footer_h3';
import { RadioGroup, Radio, cn, Input } from "@nextui-org/react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        wrapper: cn(
          "rounded border-gray-900  group-data-[selected=true]:border-violet-900"
        ),
        control: cn(
          "bg-violet-900 rounded-[2px] w-2.5 h-2.5"
        ),
        label: cn(
          "ltr:ml-1 rtl:mr-2 text-gray-800"
        )
      }}
    >
      {children}
    </Radio>
  );
};

export default function Page() {

  const [review_error, setreview_error] = useState({});

  const save_review = (event) => {
    event.preventDefault()

    const formElement = document.querySelector('#review');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    let error = {}

    if (!formDataJSON.review_headline) {
      error.review_headline = 'Review Headline is required';
    }

    if (!formDataJSON.comments) {
      error.comments = 'Comments is required';
    }

    if (!formDataJSON.service_delivery_comments) {
      error.service_delivery_comments = 'Service/Delivery Comments is required';
    }

    if (!formDataJSON.nickname) {
      error.nickname = 'Nickname is required';
    }

    if (!formDataJSON.location) {
      error.location = 'Location is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formDataJSON.email_address || formDataJSON.email_address.trim() === '') {
      error.email_address = 'Email Address is required';
    } else if (!emailRegex.test(formDataJSON.email_address)) {
      error.email_address = 'Invalid email address';
    }

    if (formDataJSON.image.size === 0) {
      error.image = 'Image is required';
    }

    if (Object.keys(error).length > 0) {
      setreview_error(error);
    } else {
      console.log(formDataJSON)
    }

  }

  return (
    <>
      <Header_h1 />
      <ThemeChanger />
      <div className='relative 2xl:py-24 lg:py-16 py-12'>
        <div className='max-w-[1080px] m-auto px-3'>
          <h1 className='text-gray-800 xl:text-[34px] lg:text-1xl sm:text-xl text-[25px] leading-tight lg:mb-7 mb-2.5 lg:pb-4 pb-2.5 border-b border-gray-100/20 '>Leave a Review</h1>
          <form id='review' onSubmit={save_review}>
            <div className='mb-4'>
              <input type='text' name='review_headline' placeholder='Review Headline*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
              {review_error.review_headline && <span className="text-red-500 text-sm">{review_error.review_headline}</span>}
            </div>
            <div className='mb-4'>
              <textarea name='comments' placeholder='Comments*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 min-h-[120px]  focus-visible:outline-none  focus-visible:border-gray-100/40' />
              {review_error.comments && <span className="text-red-500 text-sm">{review_error.comments}</span>}
            </div>
            <div className='mb-4'>
              <textarea name='service_delivery_comments' placeholder='Service/Delivery Comments*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 min-h-[120px]  focus-visible:outline-none focus-visible:border-gray-100/40' />
              {review_error.service_delivery_comments && <span className="text-red-500 text-sm">{review_error.service_delivery_comments}</span>}
            </div>
            {/* <div className='my-6'>
              <RadioGroup
                classNames={{
                  wrapper: cn(
                    "gap-4 xl:gap-10"
                  ),
                  label: cn(
                    "xl:text-lg text-md text-gray-900 font-[600] mb-2"
                  )
                }}
                label="Bottom Line"
                orientation="horizontal">
                <CustomRadio value="yes">Yes, I would recommend this to a friend</CustomRadio>
                <CustomRadio value="no">No, I would not recommend this to a friend</CustomRadio>
              </RadioGroup>
            </div> */}
            <div className='mb-4'>
              <input type='text' name='nickname' placeholder='Nickname*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' />
              {review_error.nickname && <span className="text-red-500 text-sm">{review_error.nickname}</span>}
            </div>
            <div className='mb-4'>
              <input type='text' name='location' placeholder='Location*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' />
              {review_error.location && <span className="text-red-500 text-sm">{review_error.location}</span>}
            </div>
            <div className='mb-4'>
              <input type='email' name='email_address' placeholder='Email address*' className='block w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' />
              {review_error.email_address && <span className="text-red-500 text-sm">{review_error.email_address}</span>}
            </div>
            <div className='my-4 xl:my-8'>
              <div className='flex items-center sm:flex-nowrap flex-wrap gap-2'>
                <label className='xl:text-lg text-md text-gray-900 font-[600] min-w-[120px] sm:w-auto w-full'>Add an Image :</label>
                <div className='flex items-center xl:gap-6 sm:gap-3 gap-2'>
                  <div className='relative group'>
                    <button className='border-gray-100/20 group-hover:bg-violet-400 group-hover:border-violet-400 border lg:py-2.5 py-2 xl:px-8 sm:px-5 px-2.5 lg:text-md text-sm text-gray-900 flex items-center justify-center sm:gap-2 gap-1.5'>
                      <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/lucide_upload.svg' alt="Upload" title="upload" width={22} height={22} className='lg:w-5 w-4' /> Upload</button>
                    <input name='image' type='file' className='w-full h-full absolute top-0 left-0 cursor-pointer opacity-0 text-[0]' />
                  </div>
                  
                  {/* <button className='border-gray-100/20 hover:bg-violet-400 hover:border-violet-400 border lg:py-2.5 py-2 xl:px-8 sm:px-5 px-2.5  lg:text-md text-sm text-gray-900 flex items-center justify-center sm:gap-2 gap-1.5'>
                    <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook-f lg:text-[20px] text-md" ></FontAwesomeIcon> Facebook</button>
                    <button className='border-gray-100/20 hover:bg-violet-400 hover:border-violet-400 border lg:py-2.5 py-2 xl:px-8 sm:px-5 px-2.5  lg:text-md text-sm text-gray-900 flex items-center justify-center sm:gap-2 gap-1.5'>
                    <FontAwesomeIcon icon={faWhatsapp} className="fa-brands fa-youtube  lg:text-[20px] text-md" ></FontAwesomeIcon> Whatsapp
                  </button> */}
                </div>
                {review_error.image && <span className="text-red-500 text-sm">{review_error.image}</span>}
              </div>
            </div>
            {/* <div className='my-4 xl:my-8'>
              <div className='flex items-center  sm:flex-nowrap flex-wrap sm:gap-2 gap-1.5'>
                <label className='xl:text-lg text-md text-gray-900 font-[600]  min-w-[120px] sm:w-auto  w-full'>Add a Video :</label>
                <div className='relative group'>
                  <button className='border-gray-100/20 group-hover:bg-violet-400 group-hover:border-violet-400 border lg:py-2.5 py-2 xl:px-8 sm:px-5 px-2.5  lg:text-md text-sm text-gray-900 flex items-center justify-center gap-2'>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/lucide_upload.svg' alt="Upload" title="upload" width={22} height={22} className='lg:w-5 w-4' /> Youtube</button>
                  <input type='file' className='w-full h-full absolute top-0 left-0 cursor-pointer opacity-0 text-[0]' />
                </div>
              </div>
            </div> */}
            <div className='border-t border-gray-100/20 py-3 xl:py-8'>
              <p className='text-sm text-gray-900'>By submitting, you represent that you have read and agree to our Terms of Submission and our Privacy Policy. </p>
            </div>
            <button type='submit' className='all-btn text-white hover:opacity-100 px-8 1xl:px-10 lg:text-lg'>Submit Review</button>
          </form>
        </div>
      </div>
      <Footer_h3 />
    </>
  )
}
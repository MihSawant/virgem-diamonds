import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';
import React, { useEffect, useState } from 'react';
import ThemeChanger from '../src/component/ThemeChanger';
import { Breadcrumb_pages } from '../src/comman';
import Link from 'next/link';
import Image from 'next/image';
import react from '@heroicons/react';

export default function Cart() {

  const [contact_us_error, setcontact_us_error] = useState({});

  const breadcrumbItems = [
    { title: 'Contact us', url: ``, type: false },
  ];

  const contact_us_save = (event) => {
    event.preventDefault();

    const formElement = document.querySelector('#contact_us');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    let error = {}

    if (!formDataJSON.name) {
      error.name = 'Name is require'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formDataJSON.email_address || formDataJSON.email_address.trim() === '') {
      error.email_address = 'Email Address is required';
    } else if (!emailRegex.test(formDataJSON.email_address)) {
      error.email_address = 'Invalid email address';
    }

    const mobileRegex = /^\d{10}$/;

    if (!formDataJSON.phone_number || formDataJSON.phone_number.trim() === '') {
      error.phone_number = 'Mobile Number is required'
    } else if (!mobileRegex.test(formDataJSON.phone_number)) {
      error.phone_number = 'Invalid Mobile number'
    }

    if (!formDataJSON.message) {
      error.message = 'Message is require'
    }

    if (Object.keys(error).length > 0) {
      setcontact_us_error(error);
    } else {
      console.log(formDataJSON)
    }

  }

  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-20 xl:py-16 py-12 container 2xl:max-w-[1400px]'>
        <div className='flex items-stretch 2xl:gap-12 xl:gap-8 gap-6 lg:flex-nowrap flex-wrap'>
          <div className='lg:w-1/2 w-full'>
            <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase md:mb-10 mb-5 leading-tight text-gray-800">Contact us</h1>

            <div className='flex flex-col lg:gap-8 gap-4 mb-8'>
              <div className=" inline-flex items-center gap-3 group lg:text-[20px] sm:text-lg text-md text-gray-800 group-hover:text-violet-900">
                <div className='md:min-w-[50px] min-w-[40px] md:min-h-[50px] min-h-[40px] rounded-full bg-violet-400 group-hover:bg-violet-900 flex items-center justify-center'>
                  <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/location.svg' alt='address' title='address' width={20} height={20} className='w-6 group-hover:brightness-[200]' /></div>
                52, Rubin Residence Hall, New York, USA
              </div>
              <div className=" ">
                <Link href="mailto:info@starryheavens.com" className='inline-flex items-center gap-3 group lg:text-[20px] sm:text-lg text-md text-gray-800 group-hover:text-violet-900'><div className='md:min-w-[50px] min-w-[40px] md:min-h-[50px] min-h-[40px] rounded-full bg-violet-400  group-hover:bg-violet-900 flex items-center justify-center'>
                  <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/mail.svg' alt='email' title='email' width={20} height={20} className='w-6 group-hover:brightness-[200]' /></div>
                  info@starryheavens.com</Link>
              </div>
              <div className=" ">
                <Link href="tel:+1 992-507-8740" className='inline-flex items-center gap-3 group lg:text-[20px] sm:text-lg text-md text-gray-800 group-hover:text-violet-900'>
                  <div className='md:min-w-[50px] min-w-[40px] md:min-h-[50px] min-h-[40px] rounded-full bg-violet-400  group-hover:bg-violet-900 flex items-center justify-center'>
                    <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/phone.svg' alt='phone' title='phone' width={20} height={20} className='w-6 group-hover:brightness-[200]' /></div>
                  +1 992-507-8740</Link>
              </div>
            </div>

            <form id='contact_us' onSubmit={contact_us_save}>
              <div className='my-4'>
                <input type='text' placeholder='Name' name='name' className='block grow w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                {contact_us_error.name && <span className="text-red-500 text-sm">{contact_us_error.name}</span>}
              </div>
              <div className='my-4'>
                <input type='text' placeholder='Email' name='email_address' className='block grow w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                {contact_us_error.email_address && <span className="text-red-500 text-sm">{contact_us_error.email_address}</span>}
              </div>
              <div className='my-4'>
                <input type='text' placeholder='Phone' name='phone_number' className='block grow w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                {contact_us_error.phone_number && <span className="text-red-500 text-sm">{contact_us_error.phone_number}</span>}
              </div>
              <div className='my-4'>
                <textarea placeholder='Message' name='message' className='block grow w-full bg-white border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                {contact_us_error.message && <span className="text-red-500 text-sm">{contact_us_error.message}</span>}
              </div>
              <button type='submit' className='all-btn'>Submit</button>
            </form>
          </div>
          <div className='lg:w-1/2 w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2893980102467!2d-73.99983381047535!3d40.73365716253229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599763d17e11%3A0x8fdafac9e17592cd!2sRubin%20Residence%20Hall%2C%2039%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1708085200187!5m2!1sen!2sin" width="100%" height="300" className='h-full min-h-[350px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>



      <Footer_h3 />
    </>
  )
}







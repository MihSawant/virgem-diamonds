import React, { useEffect, useState } from 'react';
import { Skeleton } from '@nextui-org/react'
import { Breadcrumb_pages } from '../src/comman';
import ThemeChanger from '../src/component/ThemeChanger';
import Footer_h3 from '../src/component/Footer_h3';
import Header_h1 from 'src/component/Header_h1'
import Link from 'next/link';

const Account = ({ initialValues }) => {

  const breadcrumbItems = [
    { title: 'Reset password?', url: ``, type: false },
  ];

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = useState(true)
  const [reset_password_error, setreset_password_error] = useState({})

  const reset_password_save = (event) => {
    event.preventDefault()

    const formElement = document.querySelector('#reset_password');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    let error = {}

    if (formDataJSON.password === '') {
      error.password = 'Password is require'
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(formDataJSON.password)) {
      error.password = 'Password is Invalid'
    }
    else {
      error.confirm_password = 'Enter both password same'
    }

    if (Object.keys(error).length > 0) {
      setreset_password_error(error);
    } else {
      console.log(formDataJSON)
    }

  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <>
        {isLoading ? (
          <div className='relative container 2xl:py-24 lg:py-16 py-12 max-w-[550px]'>
            <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>Reset password?</h1>
            <form>
              <div className='mb-4'>
                <Skeleton className='w-full h-12' />
              </div>
              <div className='mb-4'>
                <Skeleton className='w-full h-12' />
              </div>
              <div className='my-6 flex items-center justify-between gap-2'>
                <Skeleton className='w-32 h-8' />
              </div>

              <Skeleton className='w-full h-12' />
            </form>
          </div>
        ) : (
          <>
            <div className='relative container 2xl:py-24 lg:py-16 py-12 max-w-[550px]'>
              <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>Reset password?</h1>
              <form id='reset_password' onSubmit={reset_password_save}>
                <div className='mb-4'>
                  <input name='password' type='password' placeholder='Password' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {reset_password_error.password && <span className="text-red-500 text-sm">{reset_password_error.password}</span>}
                </div>
                <div className='mb-4'>
                  <input name='confirm_password' type='password' placeholder='Confirm Password' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {reset_password_error.confirm_password && <span className="text-red-500 text-sm">{reset_password_error.confirm_password}</span>}
                </div>
                <div className='my-6 flex items-center justify-between gap-2'>
                  <Link className='text-gray-800  md:text-md text-[15px] capitalize underline hover:text-violet-900 hover:opacity-100' href='/login'>Back to Login</Link>
                </div>

                <button type='submit' className='w-full all-btn'>Submit</button>
              </form>
            </div>
          </>
        )}
      </>

      <Footer_h3 />
    </>
  )
}

export default Account

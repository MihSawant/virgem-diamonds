import Image from 'next/image'
import Link from 'next/link'
import { Button, Skeleton, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu,  NavbarMenuItem  } from "@nextui-org/react";
import React, { useRef, useEffect, useState } from 'react';


function Header_Intro() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  /* ================ Loop Functions end ==================*/

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const menu_closed = () => {
    setIsMenuOpen(false);
  }
  return (
    <div className="relative h-full bg-white">
      <div className='bg-violet-900 p-1.5'>
        <div className='container'>
          <p className='flex items-start justify-center sm:text-sm text-[12px] text-center text-white font-[300] capitalize'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1.5 sm:w-6 w-4 '>
              <path d="M14.1641 12.6834C14.1641 13.5001 13.4974 14.1667 12.6807 14.1667C11.8641 14.1667 11.2057 13.5001 11.2057 12.6834C11.2057 11.8667 11.8641 11.2084 12.6807 11.2084C13.4974 11.2084 14.1641 11.8667 14.1641 12.6834ZM7.35573 8.83342C8.1724 8.83342 8.83073 8.17508 8.83073 7.35841C8.83073 6.53341 8.1724 5.87508 7.35573 5.87508C6.53073 5.87508 5.8724 6.53341 5.8724 7.35841C5.8724 8.17508 6.53073 8.83342 7.35573 8.83342ZM5.83073 12.9417L7.08073 14.1917L14.1891 7.08341L12.9391 5.83341L5.83073 12.9417ZM18.3307 10.0001C18.3307 14.5834 14.5807 18.3334 9.9974 18.3334C5.41406 18.3334 1.66406 14.5834 1.66406 10.0001C1.66406 5.41675 5.41406 1.66675 9.9974 1.66675C14.5807 1.66675 18.3307 5.41675 18.3307 10.0001ZM16.6641 10.0001C16.6641 6.32508 13.6724 3.33341 9.9974 3.33341C6.3224 3.33341 3.33073 6.32508 3.33073 10.0001C3.33073 13.6751 6.3224 16.6667 9.9974 16.6667C13.6724 16.6667 16.6641 13.6751 16.6641 10.0001Z" fill="#F8F8F8" />
            </svg>
            Discount up to 35% for first purchase only this month.</p>
        </div>
      </div>
      <div className='container p-0' id='header'>
      <Navbar onMenuOpenChange={setIsMenuOpen}  isMenuOpen={isMenuOpen} maxWidth='full' 
        classNames={{
          base: [
            "lg:py-4 sm:py-2 h-auto bg-white",
          ],
          item: [
            "uppercase xl:text-md text-sm text-gray-900 hover:text-violet-900 font-[500] font-almarai"
          ],
          toggleIcon: [
            "before:h-[2px] after:h-[2px] before:bg-gray-800 after:bg-gray-800 before:w-7 after:w-7 h-8"
          ],
          menuItems: [
            "uppercase xl:text-md text-sm text-gray-900 hover:text-violet-900 font-[500] font-almarai"
          ],
          wrapper:[
            "px-4"
          ]
        }}
      > 
        <NavbarContent>
          <NavbarBrand>
          <Link href='/'><Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/main-logo.svg" alt='starry-heavens-jewellery' title='starry-heavens-jewellery' width={290} height={28} className='2xl:w-72 lg:w-56 w-52' /></Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-6 2xl:gap-8" justify="center">
          <NavbarItem>
            <Link  href="#homedemos" onClick={() => menu_closed()}>  Home Pages </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#innerpages" onClick={() => menu_closed()}> Inner Pages </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="#features" onClick={() => menu_closed()}>  features </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="#othervariants" onClick={() => menu_closed()}> other variants</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className='gap-6 !grow-0 sm:!grow'>
        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />          
          <NavbarItem className='sm:block hidden'>
          <Link className="relative inline-flex items-center capitalize all-btn text-white hover:opacity-100 lg:text-md text-sm xl:px-6 lg:px-5 px-3 lg:py-2 py-1.5" tabIndex="0" role="link" href="#">
            purchase now
            <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="ltr:ml-2.5 rtl:mr-2.5 rtl:rotate-180 lg:w-7 w-5">
              <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none"></path>
            </svg>
          </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='gap-0 bg-gray-300 py-4 sm:mt-12 mt-8'>
            <NavbarItem className='border-b border-gray-100/20 last:border-b-0'>
            <Link  href="#homedemos" className="w-full uppercase text-md text-gray-900 hover:text-violet-900 font-[500] font-almarai py-4 block" onClick={() => menu_closed()}>  Home Pages </Link>
          </NavbarItem>
          <NavbarItem className='border-b border-gray-100/20 last:border-b-0'>
            <Link href="#innerpages" className="w-full uppercase text-md text-gray-900 hover:text-violet-900 font-[500] font-almarai py-4 block" onClick={() => menu_closed()}> Inner Pages </Link>
          </NavbarItem>
          <NavbarItem className='border-b border-gray-100/20 last:border-b-0'>
            <Link  href="#features" className="w-full uppercase text-md text-gray-900 hover:text-violet-900 font-[500] font-almarai py-4 block" onClick={() => menu_closed()}>  features </Link>
          </NavbarItem>
          <NavbarItem className='border-b border-gray-100/20 last:border-b-0'>
            <Link  href="#othervariants"  className="w-full uppercase text-md text-gray-900 hover:text-violet-900 font-[500] font-almarai py-4 block" onClick={() => menu_closed()}> other variants</Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
      </div>
    </div>
  )
}

export default Header_Intro
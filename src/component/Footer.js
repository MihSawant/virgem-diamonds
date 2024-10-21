import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useFetchData } from '../comman';

function Footer(isLoading) {

  const { data } = useFetchData("json/data/Footer.json");

  const Nav = ({ initialValues }) => {
    return (
      <React.Fragment >
        <ul className="nav">
          <p className="text-[15px] 2xl:text-md font-semibold mx-3 mb-5 text-gray-800 uppercase">{initialValues.label}</p>
          {initialValues.item && initialValues.item.map((item, subIndex) => {
            return (
              <React.Fragment key={subIndex}>
                <li key={subIndex} className="mx-3">
                  <Link className="text-gray-800 hover:text-violet-900 text-[15px] 2xl:text-md my-3 block" href={item.slug}>
                    {item.label}
                  </Link>
                </li>
              </React.Fragment>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

  return (
    <div className="relative h-full footer-wrap bg-gray-300 md:pt-16 pt-10 lg:px-4">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="container">
              <div className="flex flex-wrap">
                <div className="xl:w-[30%] w-full ltr:xl:pr-5 rtl:xl:pl-5 xl:mb-0 mb-4">
                  {Data.top_footer && Data.top_footer.map((footer_items, index) => {
                    return (
                      <div className="content lg:w-[80%]" key={index}>
                        {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((logo, index) => {
                          return (
                            <React.Fragment key={index}>
                              {logo.logo && logo.logo.map((logo, index) => {
                                return (
                                  <Link href={logo.slug} key={index}><Image src={logo.img} width={280} height={40} alt={logo.alt} title={logo.alt} className="white-img w-[200px] lg:w-auto" /></Link>
                                )
                              })}
                            </React.Fragment>
                          )
                        })}

                        <form className="mt-6 lg:mt-10">
                          {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((Email, index) => {
                            return (
                              <React.Fragment key={index}>
                                {Email.Email && Email.Email.map((Email, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      <b className="text-gray-800 block mb-3">{Email.item}</b>
                                      <p className="text-md text-gray-800 block mb-3 leading-7">{Email.des}</p>
                                      <div className="flex items-center border-b border-gray-800">
                                        <input type="email" placeholder={Email.placeholder} className="focus:outline-none text-md py-3 placeholder:text-[#2F2F2F] font-normal text-gray-800 w-full bg-transparent border-none rounded-none" />
                                        <button type="submit" className="py-3" aria-label="Close"><Image src={Email.submit_arrow} width={30} height={30} alt={Email.img_alt} title={Email.img_alt} className="white-img rtl:rotate-[270deg]" /></button>
                                      </div>
                                    </React.Fragment>
                                  )
                                })}
                              </React.Fragment>
                            )
                          })}

                        </form>

                        <ul className="flex items-center mt-8">
                          {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((social, index) => {
                            return (
                              <React.Fragment key={index}>
                                {social.social && social.social.map((social, index) => {

                                  return (
                                    <React.Fragment key={index}>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.facebook_slug} ><FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.twitter_slug} ><FontAwesomeIcon icon={faTwitter} className="fa-brands fa-twitter text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.instagram_slug} ><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.pinterest_slug} ><FontAwesomeIcon icon={faPinterestP} className="fa-brands fa-pinterest-p text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.linkedin_slug} ><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.youtube_slug} ><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube text-gray-800 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                    </React.Fragment>
                                  )
                                })}
                              </React.Fragment>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}

                </div>

                <div className="grow lg:pt-0 pt-10 lg:pl-0 2xl:pl-12">
                  {Data.Nav_List && Data.Nav_List.map((nav_items, index) => {
                    return (
                      <div className="flex lg:justify-between justify-start flex-wrap" key={index}>
                        {nav_items.child_item && nav_items.child_item.map((items, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div className="lg:w-auto md:w-1/3 w-1/2 mb-3" > <Nav initialValues={items} /></div>
                            </React.Fragment>
                          )
                        })}

                      </div>
                    )
                  })}
                </div>
              </div>


              <div className="flex items-center gap-2 flex-wrap justify-between border-t border-gray-800 py-5 mt-4 md:mt-16">
                {Data.Copyright_bar && Data.Copyright_bar.map((child_item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ul className="flex items-center flex-wrap lg:w-auto w-full lg:justify-start justify-center">
                        {child_item.links && child_item.links.map((links, index) => {
                          return (
                            <li key={index} className="after:content-[''] last:after:hidden after:inline-block md:after:w-1.5 after:w-1 after:h-1 md:after:h-1.5 after:bg-gray-800 after:rotate-45 md:after:mx-6 after:mx-2 after:align-middle"><Link href={links.slug} className="2xl:text-md text-sm text-gray-800">{links.title}</Link></li>
                          )
                        })}
                      </ul>
                      <p className="text-md text-gray-800 lg:w-auto w-full text-center lg:text-left 2xl:text-md text-sm">{child_item.copyright_text}</p>
                    </React.Fragment>
                  )
                })}

              </div>

            </div>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default Footer
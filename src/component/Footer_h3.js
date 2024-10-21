import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useFetchData } from '../comman';

function Footer_h3() {

  const { data } = useFetchData("json/data/Footer_h3.json");
  return (
    <div className="relative h-full footer-wrap bg-violet-400 ">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="container md:py-16 py-12">
              {Data.Info_List && Data.Info_List.map((nav_items, index) => {
                return (
                  <div className="flex items-start justify-between xl:flex-nowrap 2xl:gap-20 gap-8 flex-wrap" key={index}>

                    {nav_items.logo_social && nav_items.logo_social.map((child_item, index) => {
                      return (
                        <div key={index} className="xl:w-1/4 lg:w-[30%] sm:w-[47%] w-full">
                          <Link href={child_item.slug}><Image src={child_item.logo_img} alt={child_item.alt} title={child_item.alt} width={300} height={38} /></Link>
                          <p className="text-md sm:my-8 my-6 text-gray-800">{child_item.description}</p>
                          <ul className="flex">
                            {child_item.social && child_item.social.map((social, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <li className="mr-2 lg:mr-3.5"><Link href={social.facebook_slug}  className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white hover:bg-violet-900 rounded-full"><FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook-f " ></FontAwesomeIcon></Link></li>
                                  <li className="mr-2 lg:mr-3.5"><Link href={social.instagram_slug}  className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white hover:bg-violet-900 rounded-full"><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram " ></FontAwesomeIcon></Link></li>
                                  <li className="mr-2 lg:mr-3.5"><Link href={social.youtube_slug}  className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white hover:bg-violet-900 rounded-full"><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube " ></FontAwesomeIcon></Link></li>
                                  <li className="mr-2 lg:mr-3.5"><Link href={social.whatsapp_slug}  className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white hover:bg-violet-900 rounded-full"><FontAwesomeIcon icon={faWhatsapp} className="fa-brands fa-whatsapp " ></FontAwesomeIcon></Link></li>
                                </React.Fragment>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}

                    {nav_items.contact && nav_items.contact.map((child_item, index) => {
                      return (
                        <div className="xl:w-1/4 lg:w-[30%] sm:w-[47%] w-full" key={index}>
                          <p className="font-semibold text-md uppercase sm:mb-6 mb-4  text-gray-800">{child_item.title}</p>
                          <p className="text-md mb-6  text-gray-800">{child_item.description}</p>

                          {child_item.items && child_item.items.map((item, index) => {
                            return (
                              <ul key={index}>
                                <li className=" flex items-start gap-3 mb-4 group">
                                  <Image src={item.img} alt={item.alt} title={item.alt} width={20} height={20} className='mt-0.5' />
                                  <p><Link href={item.slug} className=' text-gray-800 group-hover:text-violet-900'>{item.text}</Link></p>
                                </li>
                              </ul>
                            )
                          })}

                        </div>
                      )
                    })}

                    {nav_items.blog && nav_items.blog.map((child_item, index) => {
                      return (
                        <div className="xl:w-1/4 lg:w-[30%] sm:w-[47%] w-full" key={index}>
                          <p className="font-semibold text-md uppercase sm:mb-6 mb-4  text-gray-800">{child_item.title}</p>
                          <p className="text-md mb-4  text-gray-800">{child_item.description}</p>

                          {child_item.items && child_item.items.map((item, index) => {
                            return (
                              <ul key={index}>
                                <li className="group flex items-center gap-3 mb-6">
                                  <Link href={item.link} className="min-w-[80px]"><Image src={item.img} alt={item.alt} title={item.alt} width={80} height={80} className="group-hover:grayscale  transition-all w-20 h-20 object-cover" /></Link>
                                  <div className="pl-3">
                                  <Link href={item.link}><p className="text-[15px] mb-2.5  text-gray-800">{item.text}</p></Link>
                                    <p className="font-semibold text-[13px]  text-gray-800">{item.date}</p>
                                  </div>
                                </li>
                              </ul>
                            )
                          })}
                        </div>
                      )
                    })}

                    {/* {nav_items.InstaFeeds && nav_items.InstaFeeds.map((child_item, index) => {
                      return (
                        <div className="xl:w-1/4 lg:w-full sm:w-[47%]  w-full" key={index}>
                          <p className="font-semibold text-md uppercase  text-gray-800 sm:mb-6 mb-4">{child_item.title}</p>
                          <p className="text-md mb-4  text-gray-800">{child_item.description}</p>
                          <div key={index} className="grid xl:grid-cols-3 lg:grid-cols-6 grid-cols-3 gap-2">
                            {child_item.items && child_item.items.map((item, index) => {
                              return (
                                <div className="insta-post " key={index}>
                                  <Link className="relative group/insta block text-gray-800" href={item.box_link}  >
                                    <Image src={item.img} width={0} height={0} sizes="100vw" alt={item.img_alt} title={item.img_alt} className="w-full" />
                                    <div className="hover-stake absolute w-full h-full flex items-center justify-center opacity-0 group-hover/insta:opacity-100 top-0 left-0 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-violet-900 before:opacity-60 before:-z-0">
                                      <Image src={item.insta_icon_img} width={30} height={30} sizes="100vw" alt={item.img_alt} title={item.img_alt} className='relative z-1'/>
                                    </div>
                                  </Link>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })} */}

                  </div>
                )
              })}


            </div>
            <div className="bg-gray-800 py-7 ">
              <div className="container">
                <div className="flex items-center gap-2 flex-wrap lg:justify-between justify-center">
                  {Data.bottom_footer && Data.bottom_footer.map((child_item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <ul className="flex sm:gap-3 gap-2 xl:gap-6 flex-wrap sm:justify-start justify-center" >
                          {child_item.links && child_item.links.map((links, subIndex) => {
                            return (
                              <React.Fragment key={subIndex}>
                                <li><Link href={links.slug} className="text-white hover:text-violet-900 text-sm uppercase font-light">{links.name}</Link></li>
                              </React.Fragment>
                            )
                          })}
                        </ul>

                        <p className="text-white text-sm uppercase font-light sm:text-left text-center sm:mt-0 mt-2">{child_item.copyright}</p>

                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default Footer_h3
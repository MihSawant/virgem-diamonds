import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useFetchData } from '../comman';

function Footer(isLoading) {

  const { data } = useFetchData("json/data/Footer_h4.json");

  const Nav = ({ initialValues }) => {
    return (
      <React.Fragment >
        <ul className="nav">
          <p className="sm:text-[15px] text-sm 2xl:text-md font-semibold rtl:lg:text-right ltr:lg:text-left text-center lg:mx-3 mb-5 text-white font-montserrat">{initialValues.label}</p>
          {initialValues.item && initialValues.item.map((item, subIndex) => {
            return (
              <React.Fragment key={subIndex}>
                <li key={subIndex} className="lg:mx-3">
                  <Link className="text-white sm:text-md text-sm rtl:lg:text-right ltr:lg:text-left text-center hover:text-violet-900 text-[15px] 2xl:text-md my-3 block font-montserrat" href={item.slug}>
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
    <div className="relative h-full footer-wrap bg-black md:pt-16 pt-10 lg:px-4">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="container">
              <div className="flex flex-wrap justify-between gap-8">
                <div className="lg:w-[23%] w-full lg:pr-5">
                  {Data.top_footer && Data.top_footer.map((footer_items, index) => {
                    return (
                      <div className="content lg:w-[80%]" key={index}>
                        {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((logo, index) => {
                          return (
                            <React.Fragment key={index}>
                              {logo.logo && logo.logo.map((logo, index) => {
                                return (
                                  <Link href={logo.slug} key={index}><Image src={logo.img} width={280} height={40} alt={logo.alt} title={logo.alt} className="white-img w-[200px] lg:w-auto lg:mx-0 mx-auto" /></Link>
                                )
                              })}
                            </React.Fragment>
                          )
                        })}

                        <form className="mt-6 lg:mt-10">
                          {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((Email, index) => {
                            return (
                              <React.Fragment key={index}>
                                {Email.Email && Email.Email.map((Email_data, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                       <Link href={Email_data.tel_link} className='text-white sm:text-md text-sm flex items-center lg:justify-start justify-center gap-3 sm:mb-4 mb-2 font-montserrat'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-white sm:w-5 w-4'>
                                          <path d="M16.7728 14.8269L17.261 15.3179L16.7719 14.8269H16.7728ZM5.13818 12.837L5.6255 12.346L5.13726 12.837H5.13818ZM1.33012 3.06118L0.842807 2.5711L1.33104 3.0621L1.33012 3.06118ZM12.3482 12.0654L12.77 11.6473L11.7926 10.6653L11.3736 11.0834L12.3482 12.0654ZM14.1812 11.472L15.9449 12.4309L16.6048 11.2145L14.842 10.2564L14.1812 11.472ZM16.2836 14.3358L14.9731 15.64L15.9486 16.6211L17.2592 15.3179L16.2836 14.3358ZM14.1738 16.059C12.8355 16.1845 9.37449 16.0728 5.6255 12.346L4.64902 13.3271C8.73951 17.3945 12.6334 17.5938 14.303 17.4379L14.1729 16.059H14.1738ZM5.6255 12.346C2.05279 8.79265 1.46026 5.80509 1.38642 4.50835L0.00385176 4.5868C0.0961461 6.21857 0.829886 9.53009 4.64902 13.3271L5.6255 12.346ZM6.89454 6.6422L7.15943 6.37824L6.1848 5.39715L5.91992 5.66019L6.89547 6.64127L6.89454 6.6422ZM7.36986 3.02334L6.20695 1.4691L5.0985 2.29975L6.2614 3.85306L7.36986 3.02334ZM2.29275 1.13038L0.84373 2.57017L1.8202 3.55218L3.2683 2.11239L2.29275 1.13038ZM6.40723 6.15119C5.91807 5.66019 5.91807 5.66019 5.91807 5.66203H5.91622L5.91346 5.66572C5.86988 5.7102 5.83063 5.75872 5.79624 5.81063C5.7464 5.88446 5.69195 5.98137 5.6458 6.10412C5.53342 6.42098 5.50542 6.76164 5.56458 7.09259C5.68826 7.89094 6.23833 8.94586 7.64674 10.3469L8.62322 9.36488C7.30433 8.0543 6.99053 7.25688 6.93238 6.88032C6.9047 6.70127 6.93331 6.61266 6.94161 6.59236C6.94623 6.57944 6.94807 6.57851 6.94161 6.58682C6.93348 6.59962 6.92421 6.61167 6.91393 6.62282L6.9047 6.63204C6.90171 6.63491 6.89863 6.63769 6.89547 6.64035L6.40631 6.15119H6.40723ZM7.64674 10.3469C9.05608 11.7479 10.1165 12.2943 10.9158 12.4161C11.3247 12.4789 11.6542 12.429 11.9043 12.3358C12.0441 12.2841 12.175 12.2106 12.2919 12.118C12.3078 12.1047 12.3232 12.0909 12.3381 12.0765L12.3445 12.0709L12.3473 12.0682L12.3482 12.0663C12.3482 12.0663 12.3491 12.0654 11.8609 11.5744C11.3717 11.0834 11.3745 11.0825 11.3745 11.0825L11.3764 11.0806L11.3782 11.0788L11.3837 11.0742L11.393 11.0649C11.4041 11.055 11.4158 11.0457 11.428 11.0373C11.4373 11.0308 11.4345 11.0336 11.4216 11.0391C11.3985 11.0474 11.3081 11.076 11.1262 11.0483C10.7441 10.9893 9.94118 10.6755 8.62322 9.36488L7.64674 10.3469ZM6.20695 1.46818C5.26555 0.212977 3.41597 0.0136215 2.29275 1.13038L3.2683 2.11239C3.75931 1.62416 4.63056 1.67492 5.0985 2.29975L6.20603 1.46818H6.20695ZM1.38734 4.50928C1.36888 4.18994 1.51563 3.85583 1.8202 3.55311L0.842807 2.5711C0.347187 3.06395 -0.0432183 3.76169 0.00385176 4.5868L1.38734 4.50928ZM14.9731 15.64C14.7202 15.8929 14.447 16.035 14.1747 16.0599L14.303 17.4379C14.9814 17.3742 15.5361 17.0327 15.9495 16.622L14.9731 15.64ZM7.15943 6.37824C8.06853 5.47467 8.1359 4.04688 7.37078 3.02426L6.26233 3.85399C6.63427 4.35145 6.5789 5.00397 6.18388 5.39807L7.15943 6.37824ZM15.9458 12.4318C16.6999 12.8416 16.8171 13.807 16.2846 14.3368L17.261 15.3179C18.4978 14.0876 18.1166 12.0359 16.6057 11.2154L15.9458 12.4318ZM12.77 11.6482C13.1244 11.2957 13.6948 11.2089 14.1821 11.4729L14.8429 10.2574C13.8425 9.71283 12.602 9.86327 11.7935 10.6662L12.77 11.6482Z"/ >
                                          </svg>
                                        {Email_data.tel}
                                        </Link>
                                      <Link href={Email_data.mail_link} className='text-white sm:text-md text-sm flex items-center lg:justify-start justify-center gap-3 font-montserrat'>
                                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-5 w-4'>
                                      <path d="M19.9375 6.1875V15.8125C19.9375 16.1772 19.7926 16.5269 19.5348 16.7848C19.2769 17.0426 18.9272 17.1875 18.5625 17.1875H3.4375C3.07283 17.1875 2.72309 17.0426 2.46523 16.7848C2.20737 16.5269 2.0625 16.1772 2.0625 15.8125V6.1875M19.9375 6.1875C19.9375 5.82283 19.7926 5.47309 19.5348 5.21523C19.2769 4.95737 18.9272 4.8125 18.5625 4.8125H3.4375C3.07283 4.8125 2.72309 4.95737 2.46523 5.21523C2.20737 5.47309 2.0625 5.82283 2.0625 6.1875M19.9375 6.1875L11.7824 11.8332C11.5525 11.9923 11.2796 12.0775 11 12.0775C10.7204 12.0775 10.4475 11.9923 10.2176 11.8332L2.0625 6.1875" stroke="white" strokeWidth={1.2} strokeLinecap='round' strokeLinejoin='round' />
                                      </svg>
                                        {Email_data.mail}
                                        </Link>
                                        
                                    </React.Fragment>
                                  )
                                })}
                              </React.Fragment>
                            )
                          })}

                        </form>

                        <ul className="flex items-center sm:mt-8 mt-4 lg:justify-start justify-center">
                          {footer_items.Logo_Email_social && footer_items.Logo_Email_social.map((social, index) => {
                            return (
                              <React.Fragment key={index}>
                                {social.social && social.social.map((social, index) => {

                                  return (
                                    <React.Fragment key={index}>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.facebook_slug} ><FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.twitter_slug} ><FontAwesomeIcon icon={faTwitter} className="fa-brands fa-twitter text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.instagram_slug} ><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.pinterest_slug} ><FontAwesomeIcon icon={faPinterestP} className="fa-brands fa-pinterest-p text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.linkedin_slug} ><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link href={social.youtube_slug} ><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube text-white hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link></li>
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

                <div className="1xl:w-[45%] lg:w-[35%] w-full">
                  {Data.Nav_List && Data.Nav_List.map((nav_items, index) => {
                    return (
                      <div className="flex flex-wrap w-full" key={index}>
                        {nav_items.child_item && nav_items.child_item.map((items, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div className="lg:w-1/2  w-1/2 lg:mb-3" > <Nav initialValues={items} /></div>
                            </React.Fragment>
                          )
                        })}

                      </div>
                    )
                  })}
                </div>

                <div className='lg:w-[26%] w-full'>
                  {Data.Subscribe_Email.map((EmailForm, index) => {
                    return(
                      <div key={index}>
                        <b className="text-white sm:text-md text-sm rtl:lg:text-right ltr:lg:text-left text-center block sm:mb-3 mb-1.5 font-montserrat font-semibold">{EmailForm.label}</b>
                        <p className="sm:text-md text-sm  text-white rtl:lg:text-right ltr:lg:text-left text-center block mb-3 leading-7 font-montserrat ">{EmailForm.des}</p>
                        <div className="flex items-center bg-white rounded lg:mt-8 mt-4" >
                          <input type="email" placeholder={EmailForm.placeholder} className="focus:outline-none sm:text-md text-sm  sm:py-4 py-3 sm:px-6 px-3 placeholder:text-[#2F2F2F] font-[500] font-montserrat  text-white w-full bg-transparent border-none rounded-none" />
                          <button type="submit" className="py-4 px-6" aria-label="Close">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className='rtl:-rotate-90 sm:w-5 w-3.5' xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.35753 0.642959L4.37966 2.65474L12.3484 2.74954L0.0487308 15.0492L1.49123 16.4917L13.7909 4.19203L13.8857 12.1608L15.8975 12.1829L15.7719 0.768523L4.35753 0.642959Z" fill="black"/>
                          </svg>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
                
              </div>


              <div className="flex items-center gap-2 flex-wrap lg:justify-between justify-center border-t border-gray-800 py-5 mt-8 md:mt-16">
                {Data.Copyright_bar && Data.Copyright_bar.map((child_item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p className="text-md text-white lg:w-auto w-full text-center lg:text-left 2xl:text-md text-sm font-montserrat">{child_item.copyright_text}</p>
                      <Link href={child_item.payment_link}><Image src={child_item.payment_img} alt={child_item.payment_img_alt} title={child_item.payment_img_alt} width={320} height={36} /></Link>
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
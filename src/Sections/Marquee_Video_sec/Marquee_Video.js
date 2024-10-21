import Link from 'next/link'
import { Skeleton } from "@nextui-org/react";
import React, { useRef, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faPlay } from '@fortawesome/free-solid-svg-icons'

const MarqueeVideo = ({ initialValues, isLoading }) => {
  
  /*  ============= Video_play ============   */
  const videoRef = React.useRef();
  const handlePlay = () => {
    videoRef.current.play();
    const old_class = document.getElementById('toggleVideo').className;
    const new_class = old_class === 'hidden'
    document.getElementById('toggleVideo').className = new_class
  };
  /*  ============= Skeletone_loader ============   */
  return (
    <>
      {isLoading ? (
        <div className="relative lg:pt-20 2xl:pt-24 pt-14">
          <div className="">
            <Marquee className="flex items-center border-t border-b border-violet-900">
              <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
              <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
              <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
              <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
              <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
              <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
              <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
              <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
              <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
              <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
            </Marquee>
            <div className="flex flex-wrap items-center bg-violet-400">
              <div className="lg:w-1/2 w-full relative">
                <div className="flex">
                  <Skeleton className="flex lg:w-24 w-16 h-16 lg:h-24 bg-violet-400 rounded-full outline outline-[6px]  outline-white/40 z-10 absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4 " />
                  <Skeleton className="flex w-full m-auto max-h-[400px] lg:max-h-[600px] min-h-[400px] lg:min-h-[600px] " />
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pr-10  2xl:pr-20 ">
                <div className="lg:max-w-[70%] lg:p-0 sm:p-10 py-8 p-4 text-center m-auto">
                <Skeleton className="flex w-96 m-auto h-[68px] lg:mb-2.5 2xl:mb-5 mb-1.5 rounded" />
                <Skeleton className="flex w-full m-auto lg:h-40 h-96 mb-6 rounded" />
                <Skeleton className="flex w-40 m-auto h-12 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative lg:pt-20 2xl:pt-24 pt-14">
            {initialValues && initialValues.map((data, index) => {
              return (
                <div className="" key={index}>
                  <Marquee className="flex items-center border-t border-b border-violet-900">
                    <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
                    <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
                    <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
                    <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
                    <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
                    <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
                    <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
                    <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
                    <span className="font-[nabi] 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl text-violet-900 uppercase px-8 inline-block">Starry Heavens.</span>
                    <FontAwesomeIcon icon={faSquare} className="fas fa-square text-violet-900 rotate-45 text-sm w-2 h-2 inline-block" ></FontAwesomeIcon>
                  </Marquee>
                  <div className="flex flex-wrap items-center bg-violet-400">
                    <div className="lg:w-1/2 w-full relative">
                      <div className="flex">
                        <button aria-label="Close" onClick={handlePlay} id="toggleVideo" className="lg:w-24 w-16 h-16 lg:h-24 bg-violet-400 rounded-full flex items-center justify-center outline outline-[6px] hover:outline-0 transition-all outline-white/40 z-10 absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4 "><FontAwesomeIcon icon={faPlay} className="fas fa-play text-violet-900 text-xl md:text-1xl" /></button>
                        <video ref={videoRef} loop poster={data.video_poster} className="w-full max-h-[400px] lg:max-h-[600px] min-h-[400px] lg:min-h-[600px] object-cover"  >
                          <source src={data.video_slug} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pr-10  2xl:pr-20 ">
                      <div className="lg:max-w-[70%] lg:p-0 sm:p-10 py-8 p-4 text-center m-auto">
                        <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 lg:mb-2.5 2xl:mb-5 leading-tight mb-1.5">{data.title}</h2>
                        <p className="2xl:text-lg text-gray-200 lg:text-[17px] text-md  mb-6 leading-7">{data.description}</p>
                        <Link href={data.btn_slug} className="all-btn">{data.btn_label}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default MarqueeVideo;
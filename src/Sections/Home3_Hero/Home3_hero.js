import { Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const HeroVideo = () => {
    const [showPoster, setShowPoster] = useState();
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    useEffect(() => {
        const video = document.getElementById('myVideo');

        if (video) {
            video.addEventListener('canplay', () => {
                setShowPoster(false);

                setTimeout(() => {
                    video.play();
                }, 2200);
            }, { once: true });
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative lg:min-h-screen min-h-[400px]">
                    <Skeleton className='w-full h-full absolute left-0 top-0' />
                </div>
            ) : (

                <div className="video-container relative w-full overflow-hidden z-10">

                    <h1 className="absolute inset-y-2/4	text-center w-full z-10 text-white mb-4 2xl:text-[65px] lg:text-3xl sm:text-1xl text-xl uppercase leading-none p-2">The Passionate Pursuit of Jewellery.</h1>
                    {showPoster && (
                        <div className="poster absolute top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center bg-[url('https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/HeroVideo_Cover.jpeg')]">
                            {/* You can add any content you want to display before the video starts playing here */}
                        </div>
                    )}
                    <video id="myVideo" preload="auto" autoPlay muted playsInline loop volume={0} className="w-full h-full object-cover min-h-[400px]">
                        <source src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-3/c3cb0670-7b50-42c8-8754-ce2ac715e884.mp4' type="video/mp4" />
                    </video>

                </div>
            )}
        </>
    );
};

export default HeroVideo;

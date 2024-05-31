'use client';
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    // const calculateTimeLeft = () => {
    //     const difference = +new Date(targetDate) - +new Date();
    //     let timeLeft = {};

    //     if (difference > 0) {
    //         timeLeft = {
    //             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60),
    //         };
    //     }

    //     return timeLeft;
    // };

    // const [timeLeft, setTimeLeft] = useState({ days: '–', hours: '–', minutes: '–', seconds: '–' });

    // useEffect(() => {
    //     // Perform the time left calculation on mount
    //     setTimeLeft(calculateTimeLeft());
        
    //     // Then, set up your interval to update every second
    //     const timer = setInterval(() => {
    //         setTimeLeft(calculateTimeLeft());
    //     }, 1000);

    //     // Clean up the interval on component unmount
    //     return () => clearInterval(timer);
    // }, [targetDate]);


    return (
        <section className='sm:flex sm:justify-center'>
            <div className="px-4 mt-24 mb-6 xl:pr-16 relative overflow-hidden">
                <h1 className="uppercase mx-auto text-2xl sm:text-4xl 2xl:text-5xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
                    Time left
                </h1>
                {/* <div className='flex justify-center items-center space-x-3 sm:space-x-8 text-slate-200'>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">{timeLeft.days}</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">{timeLeft.hours.toString().padStart(2, '0')}</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Seconds</div>
                    </div>
                </div> */}
                <div className='flex justify-center items-center space-x-3 sm:space-x-8 text-slate-200'>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">00</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">00</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">00</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl 2xl:text-3xl">00</div>
                        <div className="text-xs sm:text-sm 2xl:text-base text-slate-400">Seconds</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;

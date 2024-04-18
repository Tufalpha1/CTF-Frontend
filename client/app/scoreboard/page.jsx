'use client';
import React from 'react'
import Leaderboard from '../../components/Leaderboard'
import Latest from '../../components/Latest'
import Countdown from '../../components/Countdown'


const endTime = new Date(Date.UTC(2024, 3, 28, 20, 0, 0));


const page = () => {
    return (
        <div>
            <h1 className="uppercase font-heading linear-wipe text-center pr-2 pb-4 mx-auto pt-20 max-w-lg lg:max-w-7xl text-3xl sm:text-6xl lg:text-8xl sm:w-auto">
                Airoverflow CTF 2024
            </h1>
            <p className="uppercase text-center tracking-widest text-xl 2xl:text-2xl max-w-3xl mx-auto text-slate-300">
                Hack harder
            </p>
            <div className="w-full mx-auto sm:w-[30rem] -mt-[0.26rem] relative">
                <div className="absolute inset-x-20 sm:inset-x-20 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
                <div className="absolute inset-x-20 sm:inset-x-20 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
                <div className="absolute inset-x-28 sm:inset-x-44 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
                <div className="absolute inset-x-28 sm:inset-x-44 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
            </div>
            <div className='xl:flex xl:items-center xl:justify-center xl:-mt-28'>
                <Leaderboard />
                <div className="xl:flex xl:flex-col xl:w-[55%] ">
                    <Countdown targetDate={endTime} />
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default page
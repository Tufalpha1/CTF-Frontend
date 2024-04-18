'use client';
import React from 'react'
import Leaderboard from '../../components/Leaderboard'
import Latest from '../../components/Latest'
import Countdown from '../../components/Countdown'
import { Solves_and_firstBlood, leaderboard } from "../../lib/data";


const endTime = new Date(Date.UTC(2024, 3, 28, 20, 0, 0));


const page = () => {
    // const [showFirstBlood, setShowFirstBlood] = useState(false);
    // const [showNewLeader, setShowNewLeader] = useState(false);
    // const [newLeader, setNewLeader] = useState({});
    // const [firstBloodChallenge, setFirstBloodChallenge] = useState({});
    // const { BACKEND_URL } = keys;
    // const [play] = useSound(audioBlood);
    // const getData = async () => {
    //   try {
    //     console.log(`URL is ${BACKEND_URL}`);
    //     const res = await fetch(`${BACKEND_URL}/api/blood`);

    //     if (!res.ok) {
    //       throw new Error(`Error: ${res.status} - ${res.statusText}`);
    //     }
    //     const data = await res.json();
    //     setFirstBloodChallenge(data);
    //     console.log(data);
    //     if(data.first_blood) {
    //       setShowFirstBlood(true);
    //     }
    //   } catch (err) {
    //     console.error(err)
    //     return null;
    //   }
    // };

    // useEffect(() => {
    //   getData();
    // }, []);

    // useEffect(() => {
    //   if (showFirstBlood) {
    //     const audio = new Audio("/audio.mp3");
    //     audio.play()
    //     setTimeout(() => {
    //       setShowFirstBlood(false);
    //     }, 15000);
    //   }
    // }, [showFirstBlood, firstBloodChallenge]);

    // useEffect(() => {
    //   if (showNewLeader) {
    //     setTimeout(() => {
    //       setShowNewLeader(false);
    //     }, 15000);
    //   }
    // }, [showNewLeader, newLeader]);

    // useEffect(() => {
    //   console.log(showFirstBlood)
    // }, [firstBloodChallenge, showFirstBlood]);

    const firstBloodChallenge = Solves_and_firstBlood[0];
    const showNewLeader = leaderboard.new_leader;

    const showFirstBloodFunc = () => {
        if (!firstBloodChallenge.firstBlood) {
            return (
                <div className="relative pt-20 flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#AA0000] before:dark:opacity-10 after:dark:from-[#AA0000] after:dark:via-[#AA0000] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                    <h1 className="uppercase glow-text-red text-3xl sm:text-6xl lg:text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        First Blood!
                    </h1>
                    <h3 className="py-12 px-8 tracking-tighter text-sm sm:text-lg 2xl:text-3xl max-w-sm sm:max-w-none font-extrabold text-center">
                        CHALLENGE{" "}
                        <span className="font-heading text-base sm:text-xl 2xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
                            {firstBloodChallenge.chal_name}
                        </span>{" "}
                        SOLVED BY{" "}
                        <span className="font-heading text-base sm:text-xl 2xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
                            {firstBloodChallenge.solved_by}{" "}
                        </span>
                        {firstBloodChallenge.points} POINTS FOR TEAM{" "}
                        <span className="font-heading text-base sm:text-xl 2xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
                            {firstBloodChallenge.team_name}
                        </span>
                    </h3>
                </div>
            );
        } else if (!showNewLeader) {
            return (
                <div className="pt-20">
                    <h1 className="uppercase glow-text-blue text-3xl sm:text-6xl lg:text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        New Leader!
                    </h1>
                    <h3 className="py-12 px-8 tracking-tighter text-sm sm:text-lg 2xl:text-3xl max-w-sm sm:max-w-none text-center text-slate-300 font-extrabold">
                        TEAM{" "}
                        <span className="font-heading text-base sm:text-xl 2xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
                            {leaderboard.leader?.name}
                        </span>{" "}
                        HAS TAKEN THE LEAD WITH{" "}
                        <span className="font-heading text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
                            {leaderboard.leader?.points}
                        </span>{" "}
                        POINTS.
                    </h3>
                </div>
            );
        } else {
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
                </div>
            )
        };
    }

    return (
        <div>
            {showFirstBloodFunc()}
            <div className='xl:flex xl:items-center xl:justify-center xl:-mt-28'>
                <Leaderboard />
                <div className="xl:flex xl:flex-col xl:w-[55%] ">
                    <Countdown targetDate={endTime} />
                    <Latest />
                </div>
            </div>
        </div>
    );
}

    export default page
"use client";
import React, { useState, useEffect, useRef } from "react";
import Leaderboard from "../Components/Leaderboard";
import Latest from "../Components/Latest";
import keys from "../lib/variables";
import audioBlood from "../public/audio.mp3";
import useSound from "use-sound";
import { Solves_and_firstBlood, leaderboard } from "../lib/data";

const Home = () => {
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
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#AA0000] before:dark:opacity-10 after:dark:from-[#AA0000] after:dark:via-[#AA0000] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="uppercase glow-text-red text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            First Blood!
          </h1>
          <div className="w-full mx-auto sm:w-[72rem] mt-4 relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#AA0000] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#AA0000] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
          <h3 className="py-12 text-3xl font-extrabold text-center">
            CHALLENGE{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.chal_name}
            </span>{" "}
            SOLVED BY{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.solved_by}.{" "}
            </span>
            {firstBloodChallenge.points} POINTS FOR TEAM{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.team_name}.
            </span>
          </h3>
        </div>
      );
    } else if (!showNewLeader) {
      return (
        <div>
          <h1 className="uppercase glow-text-blue text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            New Leader!
          </h1>
          <div className="w-full mx-auto sm:w-[72rem] mt-4 relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#3c8ce7] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#3c8ce7] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
          <h3 className="py-12 text-3xl text-center font-extrabold">
            TEAM{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
              {leaderboard.leader?.name}
            </span>{" "}
            HAS TAKEN THE LEAD WITH{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
              {leaderboard.leader?.points}
            </span>{" "}
            POINTS.
          </h3>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="uppercase linear-wipe pb-4 mx-auto max-w-full text-8xl tracking-widest">
            CTF Final Round
          </h1>
          <div className="w-full mx-auto sm:w-[72rem] mt-4 relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#ce8f2a] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#ce8f2a] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
        </div>
      );
    }
  };

  return (
    <main className=" font-extrabold flex max-h-screen flex-col items-center gap-14 p-24 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808032_1px,transparent_1px),linear-gradient(to_bottom,#80808032_1px,transparent_1px)] bg-[size:48px_48px]">
      {showFirstBloodFunc()}
      <div className="flex">
        {/* <Leaderboard setNewLeader={setNewLeader} setShowNewLeader={setShowNewLeader}  /> */}
        <Leaderboard />
        <Latest />
      </div>
    </main>
  );
};

export default Home;

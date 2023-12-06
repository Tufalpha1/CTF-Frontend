"use client";
import React, { useState, useEffect, useRef } from "react";
import Leaderboard from "@/Components/Leaderboard";
import Latest from "@/Components/Latest";
import  keys  from "@/lib/variables";
import audioBlood from "@/public/audio.mp3";
import useSound from "use-sound";


const Home = () => {
  const [showFirstBlood, setShowFirstBlood] = useState(false);
  const [showNewLeader, setShowNewLeader] = useState(false); // [false, function
  const [newLeader, setNewLeader] = useState({});
  const [firstBloodChallenge, setFirstBloodChallenge] = useState({});
  const { BACKEND_URL } = keys;
  const [play] = useSound(audioBlood);
  const getData = async () => {
    try {
      console.log(`URL is ${BACKEND_URL}`);
      const res = await fetch(`${BACKEND_URL}/api/blood`);

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setFirstBloodChallenge(data);
      console.log(data);
      if(data.first_blood) {
        setShowFirstBlood(true);
      }
    } catch (err) {
      console.error(err)
      return null;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (showFirstBlood) {
      const audio = new Audio("/audio.mp3");
      audio.play()
      setTimeout(() => {
        setShowFirstBlood(false);
      }, 15000);
    }
  }, [showFirstBlood, firstBloodChallenge]);

  useEffect(() => {
    if (showNewLeader) {
      setTimeout(() => {
        setShowNewLeader(false);
      }, 15000);
    }
  }, [showNewLeader, newLeader]);


  useEffect(() => {
    console.log(showFirstBlood)
  }, [firstBloodChallenge, showFirstBlood]); 

  const showFirstBloodFunc = () => {
    if (showFirstBlood) {
      return (
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#AA0000] before:dark:opacity-10 after:dark:from-[#AA0000] after:dark:via-[#AA0000] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="glow-text text-9xl font-bold tracking-widest text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            First Blood!
          </h1>
          <h3 className="py-12 text-5xl font-medium">
            Challenge{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B90E0A] to-[#AA0000]">
              {firstBloodChallenge?.chal_name}
            </span>{" "}
            solved by{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B90E0A] to-[#AA0000]">
              { firstBloodChallenge?.solved_by}.{" "}
            </span>
            {firstBloodChallenge?.points} points for team{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B90E0A] to-[#AA0000]">
              { firstBloodChallenge?.team_name}.
            </span>
          </h3>
        </div>
      );
    } else if (showNewLeader) {
       return (<div>
        <h1 className="text-5xl font-bold tracking-widest text-center bg-clip-text text-transparent bg-gradient-to-r from-[#19fb9b] via-[#199890] to-[#005f59]">
          New Leader!
        </h1>
        <h3 className="py-12 text-5xl font-medium">
          Team{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B90E0A] to-[#AA0000]">
            {newLeader.name}
          </span>{" "}
          has taken the lead with{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B90E0A] to-[#AA0000]">
            {newLeader.points} points.
          </span>
        </h3>
      </div>) }
     else {
      return (
        <h1 className="my-8 mx-auto max-w-full text-6xl font-bold tracking-widest text-center bg-clip-text text-transparent bg-gradient-to-r from-[#19fb9b] via-[#199890] to-[#005f59]">
          Pakistan Cybersecurity Challenge 2023
        </h1>
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808016_1px,transparent_1px)] bg-[size:32px_32px]">
       
      {showFirstBloodFunc()}
      <div className="flex">
        <Leaderboard setNewLeader={setNewLeader} setShowNewLeader={setShowNewLeader}  />
        <Latest />
      </div>
    </main>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
// import { leaderboard } from "@/lib/data";
import keys from "../lib/variables";
import { leaderboard } from "../lib/data";
import BackgroundGradient from "../Components/BackgroundGradient";

const Leaderboard = ({ setNewLeader, setShowNewLeader }) => {
  // const [data, setData] = useState([]);
  // const [top3Teams, setTop3Teams] = useState([]);
  // const [remainingTeams, setRemainingTeams] = useState([]);
  // const { BACKEND_URL } = keys;
  // const getData = async () => {
  //   try {
  //     console.log(`URL is ${BACKEND_URL}`);
  //     const res = await fetch(`${BACKEND_URL}/api/leaderboard`);

  //     if (!res.ok) {
  //       throw new Error(`Error: ${res.status} - ${res.statusText}`);
  //     }
  //     const apiData = await res.json();
  //     console.log("Received Data",apiData)
  //     setData(apiData.data);
  //     setNewLeader(apiData.leader);
  //     setShowNewLeader(apiData.new_leader);
  //     setTop3Teams(apiData.data.slice(0, 3));
  //     setRemainingTeams(apiData.data.slice(3));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // console.log("top3Teams",top3Teams)
  // console.log("RemainingTeam",remainingTeams)
  // useEffect(() => {
  //   getData();
  // }, []);
  const data = leaderboard.data;
  const top3Teams = data.slice(0, 3);
  const remainingTeams = data.slice(3);

  if (data === undefined || data.length === 0) {
    return (
      <section className="px-7 sm:px-16 relative mx-auto mt-48 mb-24 lg:w-[80%]">
        <h1 className="uppercase mx-auto text-2xl sm:text-4xl 2xl:text-5xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
          Leaderboard
        </h1>
        <p className="text-center my-4 font-medium text-xl 2xl:text-2xl text-gray-400">
          Loading...
        </p>
      </section>
    );
  }

  return (
    <section className="px-5 sm:px-16 relative mx-auto mt-12 lg:mt-48 mb-24 lg:w-[80%] overflow-hidden">
      <h1 className="uppercase mx-auto text-2xl sm:text-4xl 2xl:text-5xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Leaderboard
      </h1>
      {/* <div className="w-full mx-auto sm:w-[64rem] -mt-12  relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div> */}
      <div className="-ml-3 flex flex-col md:flex-row xl:flex-row items-center justify-center gap-5">
        {/* {top3Teams.map((team, index) => (
          <div
            key={index}
            className={`flex items-center flex-grow p-3 m-3 border-b bg-black hover:text-black hover:bg-gray-200 ${
              index === 0
                ? "order-2 bg-gradient-to-r from-[#ffdd00] to-[#ce8f2a] text-black border-none"
                : index === 1
                ? "order-1"
                : "order-3"
            }`}
          >
            <BackgroundGradient className="text-center">
              <h2 className="text-4xl font-bold pb-2 ">{index + 1}</h2>
              <h4 className="inline text-2xl tracking-wider">
                {team?.name} - {team?.points}
              </h4>
            </BackgroundGradient>
          </div>
        ))} */}
        {top3Teams
          .filter((team) => team.position == 2)
          .map((team, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center flex-grow p-3 m-3 border-b bg-black hover:text-black hover:bg-gray-200"
            >
              <h2 className="text-xl 2xl:text-2xl font-bold pb-2 ">{team?.position}</h2>
              <h4 className="inline text-sm 2xl:text-xl tracking-wider">
                {team?.name} - {team?.points}
              </h4>
            </div>
          ))}
        <BackgroundGradient className="max-w-sm sm:w-auto h-[10rem] 2xl:h-[12rem] p-4 sm:p-10 mx-auto bg-black">
          {top3Teams
            .filter((team) => team.position == 1)
            .map((team, index) => (
              <div
                key={index}
                className="flex flex-col text-center items-center flex-grow p-3 m-3  bg-black "
              >
                <h2 className="text-xl 2xl:text-2xl font-bold pb-2 ">{team?.position}</h2>
                <h4 className="inline text-sm 2xl:text-xl tracking-wider">
                  {team?.name} - {team?.points}
                </h4>
              </div>
            ))}
        </BackgroundGradient>
        {top3Teams
          .filter((team) => team.position == 3)
          .map((team, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center flex-grow p-3 m-3 border-b bg-black hover:text-black hover:bg-gray-200"
            >
              <h2 className="text-xl 2xl:text-2xl font-bold pb-2 ">{team?.position}</h2>
              <h4 className="inline text-sm 2xl:text-xl tracking-wider">
                {team?.name} - {team?.points}
              </h4>
            </div>
          ))}
      </div>
      <div className="">
        <table className="w-full text-left rtl:text-right">
          <tbody>
            {remainingTeams.map((team, index) => (
              <tr key={index} className="border-b">
                <td className="text-xl 2xl:text-2xl px-4 lg:px-24 py-4">{team?.position}</td>
                <td className="text-sm 2xl:text-xl px-6 py-4">{team?.name}</td>
                <td className="text-sm 2xl:text-xl px-3 py-4">{team?.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Leaderboard;

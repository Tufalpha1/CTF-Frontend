import React, { useState, useEffect } from "react";
// import { leaderboard } from "@/lib/data";
import  keys  from "@/lib/variables";
import { leaderboard } from "@/lib/data";



const Leaderboard = ({setNewLeader , setShowNewLeader}) => {
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

    if( data === undefined || data.length === 0 ) {
      return (
        <section className="pr-32 relative overflow-x-auto">
          <h1 className="font-bold text-4xl pr-6 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
            Leaderboard
          </h1>
          <p className="text-center my-4 font-medium text-xl text-gray-400">
            Loading...
          </p>
        </section>
      );
    }

  return (
    <section className="pr-32 relative overflow-x-auto">
      <h1 className="font-bold text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Leaderboard
      </h1>

      <div className="p-5 m-3 flex flex-col lg:flex-row items-center gap-5 mt-5">
        {top3Teams.map((team, index) => (
          <div
            key={index}
            className={`flex items-center flex-grow p-3 m-3 border-b hover:text-black hover:bg-gray-200 ${
              index === 0
                ? "order-2 bg-gradient-to-br from-[#FFDD00] to-[#FBB034] hover:text-white border-none"
                : index === 1
                ? "order-1"
                : "order-3"
            }`}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2 ">{index + 1}</h2>
              <h4 className="inline text-2xl font-medium tracking-wider">
                {team?.name} - {team?.points}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <table className="w-full  text-left rtl:text-right">
        <tbody>
          {remainingTeams.map((team, index) => (
            <tr key={index} className="border-b">
              <td className="text-4xl px-24 py-4">{team?.position}</td>
              <td className="text-2xl px-6 py-4">{team?.name}</td>
              <td className="text-2xl px-3 py-4">{team?.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard
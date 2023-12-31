import React, { useState, useEffect } from "react";
import { latestSolves } from "@/lib/data";
import  keys  from "@/lib/variables";


const Latest = () => {
  // const [latestCaptures, setLatestCaptures] = useState([]);
  // const { BACKEND_URL } = keys;

  // const getData = async () => {
  //   try {
  //     console.log(`URL is ${BACKEND_URL}`);
  //     const res = await fetch(`${BACKEND_URL}/api/solves`);
  //     if (!res.ok) {
  //       throw new Error(`Error: ${res.status} - ${res.statusText}`);
  //     }

  //     const apiData = await res.json();
  //     console.log("Received Data",apiData)
  //     setLatestCaptures(apiData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //       getData();
  // }, []);

  // console.log("Captures",latestCaptures)
  

  return (
    <section className=" relative overflow-x-auto">
      <h1 className="font-bold text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Latest Captures
      </h1>
      {latestSolves.length > 0 ? (
        <table className="w-full text-xl text-left rtl:text-right">
          <thead className="text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Points</th>
              <th className="px-6 py-3">Challenge</th>
              <th className="px-6 py-3">Team</th>
            </tr>
          </thead>
          <tbody>
            {latestSolves.map((team, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">{team?.points}</td>
                <td className="px-6 py-4">{team?.chal_name}</td>
                <td className="px-6 py-4">{team?.team_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <table className="w-full text-2xl text-left rtl:text-right">
            <thead className="text-gray-700 uppercase bg-gray-200">
              <tr>
                <th className="px-6 py-3">Points</th>
                <th className="px-6 py-3">Challenge</th>
                <th className="px-6 py-3">Team</th>
              </tr>
            </thead>
          </table>
          <p className="text-center my-4 font-medium text-xl text-gray-400">No captures at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default Latest;

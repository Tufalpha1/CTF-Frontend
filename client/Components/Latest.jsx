import React, { useState, useEffect } from "react";
import { Solves_and_firstBlood } from "@/lib/data";
import  keys  from "@/lib/variables";


const Latest = () => {
  const [data, setData] = useState({});
  const [latestCaptures, setLatestCaptures] = useState([]);
  const { BACKEND_URL } = keys;

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(`URL is ${BACKEND_URL}`);
        const res = await fetch(`${BACKEND_URL}/api/solves`);

        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const apiData = await res.json();
        console.log("Latest Data",apiData)
        setData(apiData);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

/*
IN case of empty: {}
In case of data: [{"name"}, {"name"}...]
In case of data: [{"name"}, {"name"}...]
*/

  return (
    <section className=" relative overflow-x-auto">
      <h1 className="font-bold text-6xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12 pb-16">
        Latest Captures
      </h1>
      <table className="w-full text-2xl text-left rtl:text-right">
        <thead className="text-gray-700 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">Points</th>
            <th className="px-6 py-3">Challenge</th>
            <th className="px-6 py-3">Team</th>
          </tr>
        </thead>
        <tbody>
          {Solves_and_firstBlood.map((team, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">{team.points}</td>
              <td className="px-6 py-4">{team.chal_name}</td>
              <td className="px-6 py-4">{team.team_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Latest;

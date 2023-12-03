import React from 'react'
import { leaderboard } from "@/lib/data";

const Latest = () => {
  return (
    <section className=" relative overflow-x-auto">
      <h1 className="font-bold text-6xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12 pb-16">
        Latest Captures
      </h1>
      <table className="w-full text-2xl text-left rtl:text-right">
        <thead className="text-gray-700 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">Place</th>
            <th className="px-6 py-3">Team</th>
            <th className="px-6 py-3">Score</th>
            <th className="px-6 py-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((team, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">{team.position}</td>
              <td className="px-6 py-4">{team.team_name}</td>
              <td className="px-6 py-4">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Latest
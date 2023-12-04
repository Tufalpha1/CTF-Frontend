import React, { useState, useEffect } from "react";


const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${process.env.BACKEND_URL}/api/leaderboard`);

        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const apiData = await res.json();
        setData(apiData);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

    const top3Teams = data.slice(0, 3);
    const remainingTeams = data.slice(3);

  return (
    <section className="pr-32 relative overflow-x-auto">
      <h1 className="font-bold text-6xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Leaderboard
      </h1>

      <div className="p-5 m-3 flex flex-col lg:flex-row items-center gap-5 mt-5">
        {top3Teams.map((team, index) => (
          <div
            key={index}
            className={`flex items-center flex-grow p-3 m-3 border-b hover:text-black hover:bg-gray-200 ${
              index === 0
                ? "order-2 bg-gradient-to-br from-[#19fb9b] to-[#005f59] hover:text-white border-none"
                : index === 1
                ? "order-1"
                : "order-3"
            }`}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2 ">{index + 1}</h2>
              <h4 className="inline text-2xl font-medium tracking-wider">
                {team.team_name} - {team.points}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <table className="w-full text-3xl text-left rtl:text-right">
        <tbody>
          {remainingTeams.map((team, index) => (
            <tr key={index} className="border-b">
              <td className="px-24 py-4">{team.position}</td>
              <td className="px-6 py-4">{team.team_name}</td>
              <td className="px-3 py-4">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard
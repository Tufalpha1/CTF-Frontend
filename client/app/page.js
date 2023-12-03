import Image from 'next/image'
import { Solves_and_firstBlood } from '@/lib/data';
import Leaderboard from '@/Components/Leaderboard';
import Latest from '@/Components/Latest';


const firstBloodChallenge = Solves_and_firstBlood.find(
  (challenge) => challenge.firstBlood === true
);
const points = firstBloodChallenge?.points;
const chal_name = firstBloodChallenge?.chal_name;
const user_name = firstBloodChallenge?.solved_by;
const team_name = firstBloodChallenge?.team_name;

const getData = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/data`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};


export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-[size:24px_24px]">
      {firstBloodChallenge && (
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#199890] before:dark:opacity-10 after:dark:from-[#005f59] after:dark:via-[#19fb9b] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="glow-text text-9xl font-bold tracking-widest text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            First Blood!
          </h1>
          <h3 className="py-12 text-3xl font-medium">
            Challenge{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19fb9b] to-[#005f59]">
              {chal_name}
            </span>{" "}
            solved by{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19fb9b] to-[#005f59]">
              {user_name}.{" "}
            </span>
            {points} points for team{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19fb9b] to-[#005f59]">
              {team_name}.
            </span>
          </h3>
        </div>
      )}
      <div className='flex'>
        <Leaderboard />
        <Latest />
      </div>
    </main>
  );
}

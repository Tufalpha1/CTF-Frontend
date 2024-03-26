import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { leaderboard } from '../lib/data';


const shuffleArray = (array) => {
  // Create a copy to avoid modifying original data
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const randomizedLeaderboard = {
  data: shuffleArray(leaderboard.data),
};

console.log(randomizedLeaderboard.data);
const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="40%" className="mt-16 mx-auto text-slate-100 w-full">
      <BarChart width={150} height={40} data={randomizedLeaderboard.data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
        <XAxis dataKey="name" stroke='#fff'/>
        <YAxis stroke='#fff'/>
        <Tooltip wrapperStyle={{ color: '#000', border: '1px solid #777', borderRadius: 2, lineHeight: '40px'}}/>
        <Legend />
        <Bar dataKey="points" fill="#FFFF00" barSize={45} activeBar={<Rectangle fill="#ffdd00" stroke="#ffdd00" className='text-black'/>}  />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
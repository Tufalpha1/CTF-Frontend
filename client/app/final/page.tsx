"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../Components/CanvasRevealEffect";
import { Spotlight } from "../../Components/Spotlight";

const page = () => {
  return (
    <div className="relative antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="text-7xl z-20 font-bold text-center mt-32 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Final Results
      </h1>
      <div className="w-full mx-auto sm:w-[72rem] mt-4 relative">
        <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#ce8f2a] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
        <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#ce8f2a] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
        <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
        <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
      </div>

      <div className="mx-auto text-center my-8 ">
        {/* <button className="uppercase inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 tracking-widest  text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          Top 3 Winners
        </button> */}
        <button className="px-8 py-2 rounded-full relative bg-black text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent" />
          <span className="relative z-20 uppercase">Top 3 Winners</span>
        </button>
      </div>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Runner up - 2nd Place" number={0o2}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[#00eaff]"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Winner - 1st Place" number={0o1}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#ffdd00]"
            colors={[[255, 221, 0]]}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="2nd runner up - 3rd Place" number={0o3}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#AA0000]"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default page;

const Card = ({
  title,
  number,
  children,
}: {
  title: string;
  number: number;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-5xl text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {number}
        </div>
        <h2 className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

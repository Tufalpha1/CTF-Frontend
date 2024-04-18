"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../Components/CanvasRevealEffect";
import { Spotlight } from "../../Components/Spotlight";

const page = () => {
  return (
    <div className="relative antialiased overflow-hidden ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="px-4 mx-auto text-center lg:px-12">
        <h1 className="uppercase font-heading linear-wipe mt-32 pb-4 mx-auto max-w-5xl lg:max-w-full text-4xl sm:text-6xl lg:text-8xl">
          AirOverflow CTF 2024
        </h1>
        <div className="mt-16">
          <p className="uppercase text-center text-[1.5rem] sm:text-4xl max-w-4xl mx-auto ">Final Results</p>
          <div className="w-full mx-auto sm:w-[50rem] -mt-1 relative">
            <div className="absolute inset-x-20 sm:inset-x-28 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-20 sm:inset-x-28 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-28 sm:inset-x-[20rem] bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-28 sm:inset-x-[20rem] bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
        </div>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black/50 w-full gap-4 mx-auto px-8">
          <Card title="Runner up - 2nd Place" number={0o2}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-[#47f7fe]"
              colors={[[64, 224, 208]]}
              dotSize={3}
            />
          </Card>
          <Card title="Winner - 1st Place" number={0o1}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-[#7928b8]"
              colors={[[255, 0, 190]]}
              dotSize={3}
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

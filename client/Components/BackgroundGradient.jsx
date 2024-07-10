import React from "react";
import { motion } from "framer-motion";

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0  z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 bg-[radial-gradient(circle_farthest-side_at_0_100%,#F42B03,transparent),radial-gradient(circle_farthest-side_at_100%_0,#FFBE0B,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F42B03,transparent),radial-gradient(circle_farthest-side_at_0_0,#FFBE0B,#F42B03)]`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 z-[1] bg-[radial-gradient(circle_farthest-side_at_0_100%,#F42B03,transparent),radial-gradient(circle_farthest-side_at_100%_0,#FFBE0B,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F42B03,transparent),radial-gradient(circle_farthest-side_at_0_0,#FFBE0B,#F42B03)]`}
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default BackgroundGradient;

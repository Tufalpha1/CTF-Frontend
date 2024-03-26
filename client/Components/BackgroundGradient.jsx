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
        className={`absolute inset-0  z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffdd00,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ce8f2a,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]`}
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
        className={`absolute inset-0 z-[1] bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffff00,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ce8f2a,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#ce8f2a,#141316)]`}
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default BackgroundGradient;

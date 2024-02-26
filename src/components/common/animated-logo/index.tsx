'use client';

import { motion } from 'framer-motion';

const AdamAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const ThomasAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const AnimatedLogo = () => {
  return (
    <div className="text-black dark:text-white">
      <motion.div className="flex gap-x-2 lg:gap-x-8" initial="initial" animate="animate">
        <motion.h1
          variants={AdamAnimation}
          className="z-10 text-3xl duration-1000 cursor-default sm:text-6xl lg:text-9xl whitespace-nowrap bg-clip-text font-bold"
        >
          Adam
        </motion.h1>
        <motion.h1
          variants={ThomasAnimation}
          className="z-10 text-3xl duration-1000 cursor-default sm:text-6xl lg:text-9xl whitespace-nowrap bg-clip-text font-bold"
        >
          Thomas
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;

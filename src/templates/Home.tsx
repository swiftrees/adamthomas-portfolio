'use client';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/common/animated-logo';
import AnimatedTextCharacter from '@/components/common/animated-text';
import Intro from '@/components/common/intro';
import WorkExperience from '@/components/common/work-experience';
import Skills from '@/components/common/skills';
import { useState, useEffect } from 'react';
import SplashScreen from '@/components/common/splash-screen';

const HomeTemplate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [responsiveAnimation, setResponsiveAnimation] = useState({});

  useEffect(() => {
    if (isLoading) return;

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setResponsiveAnimation({
          initial: { y: '20vh', scale: 1 },
          animate: {
            y: 0,
            scale: 1, 
            transition: {
              duration: 1,
              delay: 2.2,
              when: 'afterChildren',
              delayChildren: 0.5,
              staggerChildren: 0.2,
            },
          },
        });
      } else {
        setResponsiveAnimation({
          initial: { y: '50vh', scale: 1 },
          animate: {
            y: 0,
            scale: 0.5, 
            transition: {
              duration: 1,
              delay: 2.2,
              when: 'afterChildren',
              delayChildren: 0.5,
              staggerChildren: 0.2,
            },
          },
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoading]);

  return (
    <div>
      {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}

      <div className="flex min-h-screen flex-col items-center p-8 lg:p-24">
        <motion.div
          className="z-10 w-full items-center justify-between text-sm lg:flex flex-col"
          variants={responsiveAnimation}
          initial="initial"
          animate="animate"
        >
          <AnimatedLogo />
          <AnimatedTextCharacter text={'Full Stack Web Developer'} />
        </motion.div>
        <div className="max-w-6xl mt-12 lg:mt-4">
          <Intro />
          <div className="flex flex-col lg:flex-row justify-between">
            <Skills />
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;

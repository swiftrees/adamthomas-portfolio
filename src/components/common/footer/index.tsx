'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkedIn from '@/icons/linkedin';
import { FooterCopyright } from '../footer-copyright';
import GitHub from '@/icons/github';

const Footer = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
    },
  };
  const gitIconVariants = {
    hover: {
      scale: 1.1,
    },
  };
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-gray-200 dark:bg-gray-800 p-4 backdrop-filter backdrop-blur-lg border-t border-zinc dark:border-gray-900 !bg-opacity-30 shadow-2xl dark:shadow-none">
      <div className="max-w-6xl flex justify-between mx-auto gap-y-2 lg:gap-y-0">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-x-2 ">
            <p className="text-xs lg:text-sm">
              Built using{' '}
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="hover:underline"
              >
                Next JS 14
              </Link>
              ,{' '}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="hover:underline"
              >
                Tailwind CSS
              </Link>{' '}
              &{' '}
              <Link
                href="https://www.framer.com/motion/"
                target="_blank"
                className="hover:underline"
              >
                Framer Motion.
              </Link>
            </p>
            <p className="text-xs lg:text-sm ">
              Deployed with{' '}
              <Link
                href="https://github.com/"
                target="_blank"
                className="hover:underline"
              >
                Git
              </Link>
              , hosted with{' '}
              <Link
                href="https://vercel.com/"
                target="_blank"
                className="hover:underline"
              >
                Vercel.
              </Link>
            </p>
          </div>

          <div className="text-xs lg:text-sm mt-2">
            <FooterCopyright />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <motion.a
            href="https://www.linkedin.com/in/adam-thomas-3518852b2/"
            target="_blank"
            rel="noreferrer"
            aria-label="Adam Thomas LinkedIn Profile"
            whileHover="hover"
            variants={iconVariants}
            className="hover:underline"
          >
            <LinkedIn className="w-8 h-8  text-[#0a66c2] hover:opacity-80" />
          </motion.a>
          <motion.a
            href="https://github.com/swiftrees/adamthomas-portfolio"
            target="_blank"
            rel="noreferrer"
            aria-label="Adam R Thomas Portfolio Git"
            whileHover="hover"
            variants={gitIconVariants}
            className="hover:underline text-gray-800 dark:text-gray-200 hover:text-black"
          >
            <GitHub className="w-8 h-8  " />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

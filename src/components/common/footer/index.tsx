'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import LogoIcon from '@/icons/logo';
import LinkedIn from '@/icons/linkedin';
import { FooterCopyright } from '../footer-copyright';

const INSTAGRAM_LINK =
  process.env.NEXT_PUBLIC_NSTAGRAM_LINK || 'https://instagram.com/swiftrees_';
const ECOLOGI_LINK = 'https://ecologi.com/swiftrees';
const Footer = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
      color: '#0a66c2',
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
              Deployed with Git, Hosted with{' '}
              <Link
                href="https://vercel.com/"
                target="_blank"
                className="hover:underline"
              >
                Vercel.
              </Link>
            </p>
          </div>

          <div className="text-xs lg:text-sm ">
            <FooterCopyright />
          </div>
        </div>

        <div className="flex justify-center">
          <motion.a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="HEYi Instagram"
            whileHover="hover"
            variants={iconVariants}
            className="hover:underline"
          >
            <LinkedIn size={40} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

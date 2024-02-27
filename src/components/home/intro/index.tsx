import Link from 'next/link';

const LINKEDIN_PROFILE = process.env.LINKEDIN_PROFILE || '';
const Intro = () => {
  return (
    <div className="font-mono bg-white text-zinc-600 dark:text-gray-300 dark:bg-gray-700 shadow-lg p-4 lg:p-8 rounded-xl border-emerald-600 border">
      <p>
        Hey, I&apos;m Adam! A passionate Full Stack Developer based in South
        Wales. With 7 years of professional experience as a software developer,
        and a lifelong interest in computing, I have explored a variety of
        domains — from game development to Windows applications — and now, most
        recently, web development and AI technology. This portfolio primarily
        showcases the full stack web projects I have been working on in my spare
        time. For a full copy of my CV, please see my{' '}
        <Link href={LINKEDIN_PROFILE} target="_blank" className='hover:underline'>
          LinkedIn.
        </Link>
      </p>
    </div>
  );
};

export default Intro;

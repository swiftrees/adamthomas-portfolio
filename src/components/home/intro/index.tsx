import Link from 'next/link';

const Intro = () => {
  return (
    <div className="font-mono bg-white text-zinc-600 dark:text-gray-300 dark:bg-gray-700 shadow-lg p-4 lg:p-8 rounded-xl border-emerald-600 border">
      <p>
        Hey, I&apos;m Adam! A passionate Full Stack Developer with 8 years of professional experience. I’ve worked across a range of domains
        from game development and Windows applications to modern web platforms and AI-driven tools.
        This portfolio primarily showcases the full stack web projects I have been working on in my spare
        time. For a full copy of my CV, please see my{' '}
        <Link href="https://www.linkedin.com/in/adam-thomas-3518852b2/" target="_blank" className='hover:underline'>
          LinkedIn.
        </Link>
      </p>
    </div>
  );
};

export default Intro;

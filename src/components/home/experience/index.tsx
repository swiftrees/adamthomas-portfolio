import Image from 'next/image';
import Link from 'next/link';

export default function WorkExperience() {
  const jobs = [
    {
      name: 'Huntleigh Healthcare',
      logo: '/logos/images.jpeg',
      url: 'https://www.huntleigh-diagnostics.com/',
      title: 'Software Engineer',
      startDate: 'April 2024',
      endDate: 'Present',
      description: (
        <div className="flex flex-col gap-y-2">
          <p>
            Development of Fetal Heart Rate Monitors with <span className="text-emerald-500">C#</span> and{' '}
            <span className="text-emerald-500">WPF</span>
          </p>
        </div>
      ),
    },
    {
      name: 'Cegedim Healthcare Solutions',
      logo: '/logos/cegedim-logo.png',
      url: 'https://www.cegedim-healthcare.co.uk/',
      title: 'Software Developer',
      startDate: 'June 2017',
      endDate: 'March 2024',
      description: (
        <div className="flex flex-col gap-y-2">
          <p>
            Sole developer responsible for the updating of desktop clinical
            tools software from Delphi to{' '}
            <span className="text-emerald-500">C#</span> and{' '}
            <span className="text-emerald-500">WPF</span>, improving
            functionality and performance.
          </p>
          <p>
            Followed designs to develop{' '}
            <span className="text-emerald-500">WPF</span> frontend using{' '}
            <span className="text-emerald-500">MahApps.Metro</span> framework
            and custom components from the UI team.
          </p>
          <p>
            Developed and managed databases and stored procedures with{' '}
            <span className="text-emerald-500">PostgreSQL/SQL</span>.
          </p>
          <p>
            Transitioned from Windows to web development, gaining knowledge and
            experience in <span className="text-emerald-500">HTML</span>,{' '}
            <span className="text-emerald-500">CSS</span>,{' '}
            <span className="text-emerald-500">JavaScript</span>, and{' '}
            <span className="text-emerald-500">React</span>.
          </p>
          <p>
            Rewrote existing SMS dashboard and{' '}
            <span className="text-emerald-500">C# API</span>, learning new
            technologies and modern{' '}
            <span className="text-emerald-500">DevExtreme</span> components.
          </p>
        </div>
      ),
    },
    {
      name: 'HEYi',
      logo: '/logos/heyi-logo.png',
      url: 'https://www.heyi.app/',
      title: 'Founder | Full Stack Developer',
      startDate: 'January 2023',
      endDate: 'Present',
      description: (
        <div className="flex flex-col gap-y-2">
          <p>
            My first major solo project, HEYi combines creativity with
            artificial intelligence to let users design their own custom
            one-of-a-kind products including phone cases, tattoos and t-shirts.
          </p>
          <p>
            Developed using <span className="text-emerald-500">Next.js</span>,{' '}
            <span className="text-emerald-500">Tailwind CSS</span>,{' '}
            <span className="text-emerald-500">PostgreSQL</span> and{' '}
            <span className="text-emerald-500">Node.js</span>, this full stack
            project taught me a lot about web development and overcoming
            complicated problems.
          </p>
          <p>
            Key features I have developed include the user marketplace, AI image
            creation, draw and erase using{' '}
            <span className="text-emerald-500">HTML5 Canvas</span>, live product
            mockups, design repositioning, and AI image editing, allowing the
            user to remove and replace parts of their design.
          </p>
          <p>
            HEYi also includes a range of AI tools including background removal,
            vintage photo restoration and image enhancement.{' '}
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Frontend hosted on{' '}
              <span className="text-emerald-500">Netlify</span> and the backend
              on <span className="text-emerald-500">Heroku</span>.
            </li>
            <li>
              Version control managed with{' '}
              <span className="text-emerald-500">Git</span>.
            </li>
            <li>
              Images and files stored with{' '}
              <span className="text-emerald-500">AWS S3</span>.
            </li>
            <li>
              Payments handled by{' '}
              <span className="text-emerald-500">Stripe</span>.
            </li>
            <li>
              Store powered by{' '}
              <span className="text-emerald-500">Medusa.js</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Canvart',
      logo: '/logos/canvart-logo.png',
      url: 'https://www.canvart.ai/',
      title: 'Co-Founder | Full Stack Developer',
      startDate: 'January 2024',
      endDate: 'Present',
      description: (
        <div className="flex flex-col gap-y-2">
          <p>
            Building on the experience gained from HEYi, Canvart is my first
            joint venture, designed to bring unique, gallery-quality pieces into
            any space.
          </p>
          <p>
            Following the creative direction of my partner&apos;s UI/UX designs,
            Canvart is developed with an updated tech stack, utilising the
            latest features of{' '}
            <span className="text-emerald-500">Next.js 14</span>, and the newest
            release of <span className="text-emerald-500">Medusa.js</span> for
            the store&apos;s backend.{' '}
          </p>
          <p>
            Learning, and adapting to, these latest versions has been one of the
            biggest challenges so far as well as implementing multilingual
            support.{' '}
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Frontend hosted on{' '}
              <span className="text-emerald-500">Vercel</span> and the backend
              on <span className="text-emerald-500">Railway</span>.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="mt-16 flex-grow bg-white border border-emerald-600 dark:bg-gray-700 shadow-lg p-4 lg:p-8 pb-12 rounded-xl">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Experience</h2>
      </div>
      <div className="flex flex-col gap-y-12">
        {jobs.map((data, index) => (
          <div className="flex-col" key={index}>
            <div className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative lg:before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] lg:before:bg-emerald-800 before:bg-transparent lg:before:block before:hidden">
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
              >
                <Image
                  src={data.logo}
                  className="object-cover"
                  alt={`${data.name} logo`}
                  fill
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.title}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {data.startDate.toString()} - {data.endDate.toString()}
                </small>

                <div className="font-mono text-zinc-400 my-4 hidden lg:block">
                  {data.description}
                </div>
              </div>
            </div>

            <div className="font-mono text-zinc-400 my-4 block lg:hidden">
              {data.description}
            </div>
            {index !== jobs.length - 1 && (
              <div className="self-center h-[1px] w-full bg-emerald-600 opacity-50 block lg:hidden"></div>
            )}
          </div>
        ))}
      </div>
      <Link href="/projects" className="block hover:underline mt-12">
        View more of my projects
      </Link>
    </section>
  );
}

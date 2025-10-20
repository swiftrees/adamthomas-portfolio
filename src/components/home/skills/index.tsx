import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      url: 'https://docs.microsoft.com/en-us/dotnet/',
      logo: '/logos/dotnet-logo.png',
      name: '.NET',
    },
    {
      url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      logo: '/logos/c-logo.png',
      name: 'C#',
    },
    {
      url: 'https://docs.microsoft.com/en-us/dotnet/desktop/wpf/',
      logo: '/logos/wpf-logo.png',
      name: 'WPF',
    },
    {
      url: 'https://www.postgresql.org/',
      logo: '/logos/postgres-logo.png',
      name: 'PostgreSQL',
    },
    {
      url: 'https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.',
      logo: '/logos/sql-logo.png',
      name: 'SQL',
    },
    {
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      logo: '/logos/html-logo.png',
      name: 'HTML',
    },
    {
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      logo: '/logos/css-logo.png',
      name: 'CSS',
    },
    {
      url: 'https://tailwindcss.com/',
      logo: '/logos/tailwindcss-logo.png',
      name: 'Tailwind CSS',
    },
    {
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      logo: '/logos/javascript-logo.png',
      name: 'JavaScript',
    },
    {
      url: 'https://www.typescriptlang.org/',
      logo: '/logos/typescript-logo.png',
      name: 'TypeScript',
    },
    {
      url: 'https://reactjs.org/',
      logo: '/logos/react-logo.png',
      name: 'React',
    },
    {
      url: 'https://nextjs.org/',
      logo: '/logos/nextjs-logo.png',
      name: 'Next.js',
    },
    {
      url: 'https://nodejs.org/',
      logo: '/logos/nodejs-logo.png',
      name: 'Node.js',
    },
    {
      url: 'https://www.python.org/',
      logo: '/logos/python-logo.png',
      name: 'Python',
    },
  ];

  return (
    <div className="mt-16 bg-white dark:bg-gray-700 shadow-lg p-4 lg:p-8 rounded-xl flex-grow border border-emerald-600">
      <div className="flex flex-col justify-between h-full gap-y-4">
        <h2 className="font-semibold text-4xl mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative mt-4 lg:mt-0"
          >
            <a
              href={skill.url}
              rel="noreferrer noopener"
              target="_blank"
              className="min-h-[40px] min-w-[40px] rounded-md overflow-clip relative"
            >
              <Image
                src={skill.logo}
                className="object-cover"
                alt={`${skill.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

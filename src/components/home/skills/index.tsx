import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      url: '',
      logo: '/logos/c-logo.png',
      name: 'C#',
    },
    {
      url: '',
      logo: '/logos/wpf-logo.png',
      name: 'WPF',
    },
    {
      url: '',
      logo: '/logos/postgres-logo.png',
      name: 'PostgreSQL',
    },
    {
      url: '',
      logo: '/logos/sql-logo.png',
      name: 'SQL',
    },
    {
      url: '',
      logo: '/logos/html-logo.png',
      name: 'HTML',
    },
    {
      url: '',
      logo: '/logos/css-logo.png',
      name: 'CSS',
    },
    {
      url: '',
      logo: '/logos/tailwindcss-logo.png',
      name: 'Tailwind CSS',
    },
    {
      url: '',
      logo: '/logos/javascript-logo.png',
      name: 'JavaScript',
    },
    {
      url: '',
      logo: '/logos/react-logo.png',
      name: 'React',
    },
    {
      url: '',
      logo: '/logos/nextjs-logo.png',
      name: 'Next.js',
    },
    {
      url: '',
      logo: '/logos/nodejs-logo.png',
      name: 'Node.js',
    },
  ];

  return (
    <div className="mt-16 bg-white dark:bg-gray-700 shadow-lg p-4 lg:p-8 rounded-xl flex-grow border border-emerald-600">
      <div className="flex flex-col justify-between h-full">
        <h2 className="font-semibold text-4xl mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative mt-4 lg:mt-0"
          >
            <a
              href={skill.url}
              rel="noreferrer noopener"
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

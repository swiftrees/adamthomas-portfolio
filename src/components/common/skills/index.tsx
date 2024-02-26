import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      url: '',
      logo: '/Logo_C_sharp.svg.png',
      name: 'C#',
    },
    {
      url: '',
      logo: '/wpf_logo.jpeg',
      name: 'WPF',
    },
    {
      url: '',
      logo: '/html5_logo.png',
      name: 'HTML',
    },
    {
      url: '',
      logo: '/css_logo.png',
      name: 'CSS',
    },
    {
      url: '',
      logo: '/tailwindcss_logo.png',
      name: 'Tailwind CSS',
    },
    {
      url: '',
      logo: '/javascript_logo.png',
      name: 'JavaScript',
    },
    {
      url: '',
      logo: '/react_logo.png',
      name: 'React',
    },
    {
      url: '',
      logo: '/next.svg',
      name: 'Next.js',
    },
    {
      url: '',
      logo: '/nodejs_logo.png',
      name: 'Node.js',
    },
  ];

  return (
    <div className="mt-16 bg-white dark:bg-gray-700 shadow-lg p-4 lg:p-8 rounded-xl flex-grow border border-emerald-600">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Skills</h2>
      </div>
      <div className="flex flex-col gap-y-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative"
          >
            <a
              href={skill.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={skill.logo}
                className="object-cover"
                alt={`${skill.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import Image from 'next/image';

const Skills = () => {
  const skills = [
    {
      url: '',
      logo: '',
      name: 'C#',
    },
    {
      url: '',
      logo: '',
      name: 'WPF',
    },
    {
      url: '',
      logo: '',
      name: 'HTML',
    },
    {
      url: '',
      logo: '',
      name: 'CSS',
    },
    {
      url: '',
      logo: '',
      name: 'JavaScript',
    },
    {
      url: '',
      logo: '',
      name: 'React',
    },
    {
      url: '',
      logo: '',
      name: 'Next.js',
    },
    {
      url: '',
      logo: '',
      name: 'Node.js',
    },
  ];

  return (
    <div className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Skills</h2>
      </div>
      <div className="flex flex-col gap-y-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
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

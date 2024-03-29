import Image from 'next/image';

export default function Education() {
  const jobs = [
    {
      name: 'University of South Wales',
      logo: '/logos/usw-logo.png',
      url: 'https://www.southwales.ac.uk/',
      title: 'BSc (Hons) Computer Science 2:1',
      startDate: '2013',
      endDate: '2017',
      description:
        'Studied subjects including AI, OOP, and real-time rendering. Developed a Unity 3D piano learning game, showcasing my skills in game development, C#, and problem-solving.',
    },
  ];

  return (
    <section className="mt-16 bg-white dark:bg-gray-700 border border-emerald-600 shadow-lg p-4 lg:p-8 pb-12 rounded-xl">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Education</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {jobs.map((data, index) => (
          <div
            key={index}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative"
          >
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

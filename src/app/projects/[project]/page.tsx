import ProjectTemplate from '@/templates/Project';
import { promises as fs } from 'fs';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.project;
  const file = await fs.readFile(
    process.cwd() + `/src/data/${id}.json`,
    'utf8',
  );
  const project = JSON.parse(file);
  return {
    title: `${project.title} | Project by Adam Thomas`,
    description: project.tagline,
    openGraph: {
      images:
        project.image ||
        'https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png',
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  console.log({ params });
  const id = params.project;
  const file = await fs.readFile(
    process.cwd() + `/src/data/${id}.json`,
    'utf8',
  );
  const project = JSON.parse(file);
  console.log({ project });
  return (
    <div className="flex flex-col items-center p-4 lg:p-24 justify-center mx-auto">
      <ProjectTemplate project={project} />
    </div>
  );
}

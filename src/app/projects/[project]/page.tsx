import ProjectTemplate from '@/templates/Project';
import { promises as fs } from 'fs';
import { Metadata } from 'next';
import path from 'path';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.project;
  const file = await fs.readFile(path.resolve(`./src/app/data/${id}.json`), 'utf8');
  const project = JSON.parse(file);
  return {
    metadataBase: new URL(baseUrl),
    title: `${project.title} | Project | Adam Thomas`,
    description: project.tagline,
    openGraph: {
      images: project.image || '',
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const id = params.project;
  const file = await fs.readFile(path.resolve(`./src/app/data/${id}.json`), 'utf8');
  const project = JSON.parse(file);
  return (
    <div className="flex flex-col items-center p-4 lg:p-24 justify-center mx-auto">
      <ProjectTemplate project={project} />
    </div>
  );
}

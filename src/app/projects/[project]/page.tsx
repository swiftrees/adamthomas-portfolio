import ProjectTemplate from '@/templates/Project';
import { promises as fs } from 'fs';
import { Metadata } from 'next';

type Props = {
  params: {
    project: string;
  };
};

async function loadProjectData(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Ensure you have this environment variable set up
  const response = await fetch(`${baseUrl}/projects/data/${id}.json`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch project data for ${id}: ${response.statusText}`,
    );
  }
  const data = await response.json();
  console.log({ data })
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.project;
  const project = await loadProjectData(id);
  return {
    title: `${project.title} | Project by Adam Thomas`,
    description: project.tagline,
    openGraph: {
      images: project.image || '',
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  console.log({ params });
  const id = params.project;
  const project = await loadProjectData(id);
  console.log({ project });
  return (
    <div className="flex flex-col items-center p-4 lg:p-24 justify-center mx-auto">
      <ProjectTemplate project={project} />
    </div>
  );
}

import ProjectTemplate from '@/templates/Project';
import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

type Props = {
  params: {
    project: string;
  };
};

async function loadProjectData(id: string) {
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
  const project = await loadProjectData(id);
  return (
    <div className="flex flex-col items-center p-4 lg:p-24 justify-center mx-auto">
      <ProjectTemplate project={project} />
    </div>
  );
}

import ProjectsTemplate from '@/templates/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Adam Thomas',
  description: 'View my recent projects',
};

export default async function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      <ProjectsTemplate />
    </main>
  );
}

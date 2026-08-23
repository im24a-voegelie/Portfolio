import { projects } from '@/data/projects';
import ProjectDetail from './ProjectDetail';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  return <ProjectDetail project={project} />;
}

import ProjectInfo from '@/components/ProjectInfo';
import client from '@/contentful';
import { ProjectContent } from '@/types/Project';

const getProject = async (pathID: string) => {
	const projects = await client.getEntries<ProjectContent>({
		content_type: 'projects',
	});

	const projectsList: any = projects.items[0].fields.projects;

	return projectsList.find((project: any) => project.id === Number(pathID));
};

const ProjectInfoPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;

	const project = await getProject(id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<main className="flex flex-col items-center p-4">
			<ProjectInfo project={project} />
		</main>
	);
};

export default ProjectInfoPage;

import client from '@/contentful';
import { ProjectContent } from '@/types/Project';
import { Entry } from 'contentful';

import Link from 'next/link';
import Project from './Project';
import Title from './Title';

const Projects = async () => {
	const projects = await client.getEntries<ProjectContent>({
		content_type: 'projects',
	});

	const projectsList: Entry<ProjectContent>[] =
		projects.items[0].fields.projects;

	return (
		<section className=" text-3xl text-center py-10 md:py-[35px]">
			<Title msg="My Projects" />
			<div className="flex flex-wrap -m-3">
				{projectsList.map((project: any, index) => {
					return (
						<Link
							className="p-3 w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4"
							key={project.id}
							href={`/${project.id}`}
						>
							<Project project={project} index={index} />
						</Link>
					);
				})}
			</div>
		</section>
	);
};
export default Projects;

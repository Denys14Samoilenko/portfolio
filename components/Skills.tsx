import client from '@/contentful';
import { SkillsContent } from '@/types/SkillType';
import { Entry } from 'contentful';
import Skill from './Skill';
import Title from './Title';

const Skills = async () => {
	const skills = await client.getEntries<SkillsContent>({
		content_type: 'skills',
	});

	const skillsList: Entry<SkillsContent>[] = skills.items[0].fields.skills;

	return (
		<section className=" text-3xl text-center py-10 md:py-[35px]">
			<Title msg="My skills" />
			<div className="flex ">
				<ul className="flex items-center justify-center gap-2 flex-wrap ">
					{skillsList.map(({id,title}: any) => (
						<Skill key={id} title={ title} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

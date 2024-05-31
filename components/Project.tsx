'use client';
import { ProjectData } from '@/types/Project';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Project = ({
	project,
	index,
}: {
	project: ProjectData;
	index: number;
}) => {
	const { title, image } = project;

	const projectsAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.10 * index,
			},
		}),
	};
	return (
		<motion.div
			className="p-4 border flex flex-col items-center rounded-lg gap-3 border-[#5C62EC] h-full"
			id="projects"
			variants={projectsAnimationVariants}
			initial="initial"
			whileInView="animate"
			custom={index}
			whileHover={{
				boxShadow: '0px 0px 15px #5C62EC',
				textShadow: '0px 0px 10px #fff',
			}}
		>
			<motion.figure initial={{ scale: 0.9 }} whileHover={{ scale: 1 }}>
				<Image
					className="object-cover h-[200px]"
					src={image}
					width={400}
					height={200}
					alt={title}
				/>
			</motion.figure>

			<h4 className="flex-auto text-2xl">{title}</h4>
		</motion.div>
	);
};
export default Project;

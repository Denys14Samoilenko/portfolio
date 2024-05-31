'use client';
import { ProjectData } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectsAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.15 * index,
		},
	}),
};

const ProjectInfo = ({ project }: { project: ProjectData }) => {
	const { title, description, image, tech, demo, code } = project;

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col md:flex-row items-center gap-4 ">
				<motion.figure
					className="w-1/1 sm:w-1/2"
					initial={{ x: -1000 }}
					animate={{ x: 0 }}
				>
					<Image src={image} width={900} height={500} alt={title} />
				</motion.figure>
				<div className="w-1/1 sm:w-1/2 flex flex-col  gap-5">
					<motion.div
						className="flex gap-2 md:gap-10 items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						<Link
							className="border px-3 py-2 rounded-md hover:bg-[#5C62EC] hover:text-black hover:border-black transition-colors duration-500"
							href={code}
							target="_blank"
						>
							CODE
						</Link>
						<Link
							className="border px-3 py-2 rounded-md hover:bg-[#5C62EC] hover:text-black hover:border-black transition-colors duration-500"
							href={demo}
							target="_blank"
						>
							DEMO
						</Link>
					</motion.div>
					<ul className="flex flex-wrap gap-3 items-center justify-center">
						{tech.map((skill, index) => (
							<motion.li
								className="border rounded-lg px-2 py-1"
								key={skill}
								variants={projectsAnimationVariants}
								initial="initial"
								whileInView="animate"
								custom={index}
								whileHover={{
									boxShadow: '0px 0px 15px #5C62EC',
									textShadow: '0px 0px 10px #fff',
								}}
							>
								{skill}
							</motion.li>
						))}
					</ul>
				</div>
			</div>
			<motion.div
				className="text-center pb-[30px]"
				initial={{ y: '100vh' }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<h3 className="text-3xl p-4">{title}</h3>
				<p className="text-xl">{description}</p>
			</motion.div>
		</div>
	);
};
export default ProjectInfo;

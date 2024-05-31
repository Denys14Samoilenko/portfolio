'use client';
import { motion } from 'framer-motion';
const About = () => {
	return (
		<main className="flex flex-col items-center p-4 overflow-hidden">
			<div className="flex flex-col gap-8 pb-10 md:pb-[20px] ">
				<motion.p initial={{ y: -300 }} animate={{ y: 0 }}>
					I am highly enthusiastic about the Full-stack Developer position
					within your esteemed company. In today`s digital landscape, the role
					of a Full-stack developer is indispensable, as virtually every
					application and website undergoes modernization and digitization. The
					prospect of breaking away from conventional norms and crafting
					innovative solutions truly excites me. Thus, I am keen to join your
					dynamic development team, confident that my skill set will contribute
					significantly to the company`s project successes. My technical
					proficiencies encompass a wide array of technologies, including:
					Working with HTML, CSS, SCSS, JS, TS, React, NodeJS, Express .More
					than 500 hours of coding. Solving more than 200 algorithmic problems
					Carrying out more than 170 development tasks such as websites,
					functions and web applications on React using RESTful API and with
					Backend, NodeJS with Express, DB on SQL. I have theoretical knowledge
					in the field of Manual QA, and experience in compiling bug reports.
					Additionally, my previous role as a sales manager has equipped me with
					excellent communication skills, an invaluable asset for effective
					collaboration within a team. For a more comprehensive overview of my
					qualifications, please refer to my attached CV. Thank you for
					considering my application. I am eager to undertake any test task and
					welcome the opportunity for an interview, where we can delve into
					further details and I can showcase my development skills. Wishing you
					a productive day ahead!
				</motion.p>
			</div>
		</main>
	);
};

export default About;

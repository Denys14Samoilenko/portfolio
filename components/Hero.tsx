'use client';
import { motion } from 'framer-motion';
import DownloadBtn from './DownloadBtn';
import Link from 'next/link';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';

const Hero = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col gap-5 items-center text-center"
		>
			<motion.h1
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				className="text-5xl  text-[#5C62EC]"
			>
				Denys Samoilenko
			</motion.h1>
			<motion.p
				initial={{ x: 300 }}
				animate={{ x: 0 }}
				className="italic text-md max-w-[750px] "
			>
				I am a dedicated Front-End Developer with a year of experience in
				creating dynamic and responsive web applications. I have a strong
				proficiency in HTML, CSS, and JavaScript/TypeScript, with a particular
				focus on React. Additionally, I have worked with frameworks such as
				Next.js and Vue.js, enabling me to build efficient and scalable
				applications. I am committed to staying current with industry trends and
				continuously enhancing my skills to deliver exceptional user
				experiences.
			</motion.p>
			<div className="flex gap-5 items-center justify-center">
				<DownloadBtn />
				<Link
					href="https://www.linkedin.com/in/denys-samoilenko-4a3664119/"
					target="_blank"
				>
					<SlSocialLinkedin className="text-[#5C62EC] text-2xl hover:text-white duration-500" />
				</Link>
				<Link href="https://github.com/Denys14Samoilenko" target="_blank">
					<FiGithub className="text-[#5C62EC] text-2xl hover:text-white duration-500" />
				</Link>
			</div>
		</motion.section>
	);
};

export default Hero;

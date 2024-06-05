'use client';
import { motion } from 'framer-motion';

const Skill = ({ title }: { title: string }) => {
	return (
		<motion.li
			className="p-2 border flex flex-col items-center rounded-lg gap-3 border-[#5C62EC] text-[14px]"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			{title}
		</motion.li>
	);
};

export default Skill;

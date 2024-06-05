'use client';
import { motion } from 'framer-motion';

const Title = ({ msg }: { msg: string }) => {
	return (
		<motion.h2
			className="mb-[30px] text-3xl"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			{msg}
		</motion.h2>
	);
};

export default Title;

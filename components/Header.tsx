'use client';
import Link from 'next/link';
import Nav from './Nav';
import { motion } from 'framer-motion';



const Header = () => {
	return (
		<motion.header
			className="flex justify-between items-center p-[16px] gap-3"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
		>
			<Link
				href="/"
				className="hover:scale-110 text-2xl transition-transform duration-500"
			>
				Samoilenko FE
			</Link>
			<Nav />
		</motion.header>
	);
};

export default Header;

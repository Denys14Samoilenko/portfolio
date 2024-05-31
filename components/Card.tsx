'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Card = () => {
	return (
		<>
			<motion.section
				className="flex flex-col md:flex-row gap-5 items-center bg-[#1C1E22]
      p-8 rounded-xl max-w-[800px] hover:shadow-md hover:shadow-[#5C62EC] transition-shadow duration-500 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				<motion.figure
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="w-full flex justify-center"
				>
					<Image
						className="rounded-xl"
						src="https://images.ctfassets.net/h83hbiynbn1w/5wGhNUZxcevh9BRmHEnStO/de65a808b0a00b80f8b7a8972d61edb7/photo.jpg"
						width={150}
						height={150}
						alt="My Photo"
					/>
				</motion.figure>
				<motion.div
					className="flex flex-col gap-3 items-center"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					<h2 className="text-3xl">About me</h2>
					<p>
						After experimenting with various programming languages, I made the
						decision to specialize in Front-end development. I appreciate the
						abundant job prospects and the vast array of libraries and
						frameworks available within this field. It`s akin to becoming a
						versatile expert in the realm of user interfaces and user
						experiences. I am highly organized, punctual, and a responsible
						individual.
					</p>
					<Link
						href="/about"
						className="flex gap-2 items-center bg-[#5C62EC] px-3 py-2 rounded-md hover:bg-white hover:text-[#5C62EC] hover:border-[#5C62EC] transition-colors duration-500 after:content-['→']"
					>
						More about me
					</Link>
				</motion.div>
			</motion.section>

			{/* <span
				className="absolute bottom-5 animate-bounce left-1/2 text-3xl hidden lg:block mx-auto cursor-pointer"
				onClick={() => {
					window.scrollTo({
						top: window.innerHeight + 75,
					});
				}}
			>
				&#8595;
			</span> */}
		</>
	);
};

export default Card;

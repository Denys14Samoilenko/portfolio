import Link from 'next/link';

const navLinks: string[] = ['home', 'contacts'];

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3 flex-wrap">
				<li className="group">
					<Link
						className={`capitalize hover:text-[#5C62EC] transition duration-500 relative `}
						href="/"
					>
						{navLinks[0]}
						<span className="absolute bottom-[-5px] left-0 w-full bg-[#5C62EC] h-0.5 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
					</Link>
				</li>
				{(navLinks as string[]).slice(1).map((link: string) => {
					return (
						<li key={link} className="group">
							<Link
								className={`capitalize hover:text-[#5C62EC] transition duration-500 relative`}
								href={`/${link}`}
							>
								{link}
								<span className="absolute bottom-[-5px] left-0 w-full bg-[#5C62EC] h-0.5 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
export default Nav;

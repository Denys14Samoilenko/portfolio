import Link from 'next/link';

const navLinks: string[] = ['about me', 'contacts'];

const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3 flex-wrap">
				{(navLinks as string[]).map((link: string, index: number) => {
					const href = index === 0 ? '/' : `/${link}`;

					return (
						<li key={link} className="group">
							<Link
								className={`capitalize hover:text-[#5C62EC] transition duration-500 relative`}
								href={`${href}`}
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

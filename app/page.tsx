import Card from '@/components/Card';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

const Home = async () => {
	return (
		<main className="flex flex-col items-center p-4 overflow-hidden">
			<div className="flex flex-col gap-8 pb-10 md:pb-[20px] ">
				<Hero  />
				<Card />
			</div>
			<Projects />
		</main>
	);
};

export default Home;

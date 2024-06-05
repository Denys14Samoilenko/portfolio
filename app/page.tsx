import Card from '@/components/Card';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import 'react-toastify/dist/ReactToastify.css';

const Home = async () => {
	return (
		<main className="flex flex-col items-center p-4 overflow-hidden">
			<div className="flex flex-col items-center gap-8 pb-10 md:pb-[20px] ">
				<Hero />
				<Card />
				<Skills />
			</div>
			<Projects />
		</main>
	);
};

export default Home;

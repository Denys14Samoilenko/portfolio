import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import client from '@/contentful';
import { HeaderContent } from '@/types/headerContentType';

const sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Denys Samoilenko portfolio',
	description: 'Full-stack developer portfolio',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body
				className={`${sans.className} flex text-base bg-[#171718] text-white w-full min-h-screen flex-col`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}

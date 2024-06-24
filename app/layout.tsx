import AppLayout from '@/components/core/layout/AppLayout';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fitness App',
	description: 'Fitness App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}

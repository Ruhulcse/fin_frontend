import AppLayout from '@/components/core/layout/AppLayout';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fitness App',
	description: 'Fitness App',
};

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<AppLayout locale={locale}>{children}</AppLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

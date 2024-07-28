'use client';
import { Toaster } from 'sonner';
import AuthProvider from '../provider/AuthProvider';
import StoreProvider from '../provider/StoreProvider';
import { ThemeProvider } from '../provider/ThemeProvider';
import Middleware from './Middleware';

const AppLayout = ({
	children,
	locale,
}: {
	children: React.ReactNode;
	locale?: string;
}) => {
	return (
		<AuthProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<StoreProvider>
					<Toaster richColors />
					<Middleware locale={locale} />
					{children}
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default AppLayout;

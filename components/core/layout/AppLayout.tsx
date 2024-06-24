'use client';
import { Toaster } from 'sonner';
import AuthProvider from '../provider/AuthProvider';
import StoreProvider from '../provider/StoreProvider';
import { ThemeProvider } from '../provider/ThemeProvider';
import Middleware from './Middleware';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<StoreProvider>
					<Middleware />
					{children}
					<Toaster richColors />
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default AppLayout;

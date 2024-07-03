'use client';
import { Toaster } from 'sonner';
import AuthProvider from '../provider/AuthProvider';
import StoreProvider from '../provider/StoreProvider';
import { ThemeProvider } from '../provider/ThemeProvider';
import Middleware from './Middleware';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Toaster richColors />
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
					</StoreProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
};

export default AppLayout;

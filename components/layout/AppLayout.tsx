'use client';
import store, { persistor } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Middleware from './Middleware';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<Middleware />
				{children}
			</PersistGate>
		</Provider>
	);
};

export default AppLayout;

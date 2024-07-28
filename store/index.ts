import apiSlice from '@/store/features/api';
import userSlice from '@/store/features/user/slice';
import storage from '@/store/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import themeSlice from './theme/slice';

const persistConfig = {
	key: 'fitness-dashboard',
	version: 1,
	storage,
	whitelist: ['user', 'theme'],
};

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	[userSlice.name]: userSlice.reducer,
	[themeSlice.name]: themeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: false,
		}).concat(apiSlice.middleware),
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const persistor = persistStore(store);
export default store;

import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	locale: 'en',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeLocale: (state, action) => {
			state.locale = action.payload;
		},
	},
});

export const { setThemeLocale } = themeSlice.actions;
export const getUserState = (state: RootState): typeof initialState =>
	state.theme;
export default themeSlice;

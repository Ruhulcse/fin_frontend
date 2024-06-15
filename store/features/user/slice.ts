import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
		},
		removeUser: (state) => {
			state.name = null;
			state.email = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export const getUserState = (state: RootState): typeof initialState =>
	state.user;
export default userSlice;

import apiSlice from '../api';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		genderWiseVideo: builder.mutation({
			query: (payload) => ({
				url: 'users/get-intro-url',
				method: 'POST',
				body: payload?.data,
			}),
		}),
	}),
});

export const { useGenderWiseVideoMutation } = userApi;

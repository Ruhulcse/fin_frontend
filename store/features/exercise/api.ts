import apiSlice from '../api';

export const exerciseApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getExercises: builder.query({
			query: () => ({
				url: `exercises`,
			}),
		}),
		getExercise: builder.query({
			query: (id) => ({
				url: `exercises/${id}`,
			}),
		}),
		addExercise: builder.mutation({
			query: (payload) => ({
				url: `exercises`,
				method: 'POST',
				body: payload,
			}),
		}),
		editExercise: builder.mutation({
			query: (payload) => ({
				url: `exercises/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
	}),
});

export const {
	useEditExerciseMutation,
	useGetExercisesQuery,
	useGetExerciseQuery,
	useAddExerciseMutation,
} = exerciseApi;

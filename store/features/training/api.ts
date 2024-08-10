import apiSlice from '../api';

export const trainingApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTrainings: builder.query({
			query: ({ query = '' }) => ({
				url: `trainings${query ? `?${query}` : ''}`,
			}),
		}),
		getTraining: builder.query({
			query: (id) => ({
				url: `trainings/${id}`,
			}),
		}),
		addTraining: builder.mutation({
			query: (payload) => ({
				url: `trainings`,
				method: 'POST',
				body: payload,
			}),
		}),
		editTraining: builder.mutation({
			query: (payload) => ({
				url: `trainings/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
	}),
});

export const {
	useAddTrainingMutation,
	useEditTrainingMutation,
	useGetTrainingQuery,
	useGetTrainingsQuery,
} = trainingApi;

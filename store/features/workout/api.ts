import apiSlice from '../api';

export const workoutApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getWorkouts: builder.query({
			query: ({ query = '' }) => ({
				url: `workouts${query ? `?${query}` : ''}`,
			}),
		}),
		getWorkout: builder.query({
			query: (id) => ({
				url: `workouts/${id}`,
			}),
		}),
		addWorkout: builder.mutation({
			query: (payload) => ({
				url: `workouts`,
				method: 'POST',
				body: payload,
			}),
		}),
		editWorkout: builder.mutation({
			query: (payload) => ({
				url: `workouts/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		editWorkoutExercises: builder.mutation({
			query: (payload) => ({
				url: `admin/training`,
				method: 'PUT',
				body: payload,
			}),
		}),
		editUserWorkout: builder.mutation({
			query: (payload) => ({
				url: `workouts/update`,
				method: 'PUT',
				body: payload,
			}),
		}),
	}),
});

export const {
	useEditWorkoutMutation,
	useGetWorkoutsQuery,
	useGetWorkoutQuery,
	useAddWorkoutMutation,
	useEditUserWorkoutMutation,
	useEditWorkoutExercisesMutation,
} = workoutApi;

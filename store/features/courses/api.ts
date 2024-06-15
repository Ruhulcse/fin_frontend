import apiSlice from '../api';

export const budgetCategoryApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCourses: builder.query({
			query: () => ({
				url: 'courses',
			}),
		}),
		getCourse: builder.query({
			query: (id) => ({
				url: `course/${id}`,
			}),
		}),
		addCourse: builder.mutation({
			query: (payload) => ({
				url: `course`,
				method: 'POST',
				body: payload?.data,
			}),
		}),
		editCourse: builder.mutation({
			query: (payload) => ({
				url: `course/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteCourse: builder.mutation({
			query: (id) => ({
				url: `course/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetCoursesQuery,
	useGetCourseQuery,
	useAddCourseMutation,
	useEditCourseMutation,
	useDeleteCourseMutation,
} = budgetCategoryApi;

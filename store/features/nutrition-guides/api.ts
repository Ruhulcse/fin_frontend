import apiSlice from '../api';

export const nutritionGuideApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNutritionGuides: builder.query({
			query: () => ({
				url: `nutrition-guides`,
			}),
		}),
		getNutritionGuide: builder.query({
			query: (id) => ({
				url: `nutrition-guides/${id}`,
			}),
			transformResponse: (response: any) => ({
				...response,
				data: response.data[0],
			}),
		}),
		addNutritionGuide: builder.mutation({
			query: (payload) => ({
				url: `nutrition-guides`,
				method: 'POST',
				body: payload,
			}),
		}),
		editNutritionGuide: builder.mutation({
			query: (payload) => ({
				url: `nutrition-guides/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
	}),
});

export const {
	useEditNutritionGuideMutation,
	useGetNutritionGuideQuery,
	useGetNutritionGuidesQuery,
	useAddNutritionGuideMutation,
} = nutritionGuideApi;

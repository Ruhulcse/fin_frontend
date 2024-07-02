import apiSlice from '../api';

export const nutritionGuideApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNutritionGuides: builder.query({
			query: () => ({
				url: `nutrition-plans/guides`,
			}),
		}),
		getNutritionGuide: builder.query({
			query: (id) => ({
				url: `nutrition-plans/guides?id=${id}`,
			}),
		}),
	}),
});

export const { useGetNutritionGuideQuery, useGetNutritionGuidesQuery } =
	nutritionGuideApi;

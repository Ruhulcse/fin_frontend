import apiSlice from '../api';

export const nutritionPlanApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNutritionPlans: builder.query({
			query: () => ({
				url: `nutrition-plans`,
			}),
		}),
		getNutritionPlan: builder.query({
			query: (id) => ({
				url: `nutrition-plans/${id}`,
			}),
		}),
		addNutritionPlan: builder.mutation({
			query: (payload) => ({
				url: `nutrition-plans`,
				method: 'POST',
				body: payload,
			}),
		}),
		editNutritionPlan: builder.mutation({
			query: (payload) => ({
				url: `nutrition-plans/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
	}),
});

export const {
	useEditNutritionPlanMutation,
	useGetNutritionPlanQuery,
	useGetNutritionPlansQuery,
	useAddNutritionPlanMutation,
} = nutritionPlanApi;

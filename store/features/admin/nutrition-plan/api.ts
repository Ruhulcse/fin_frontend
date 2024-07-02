import apiSlice from '../../api';

export const userNutritionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userNutritionPlan: builder.mutation({
			query: (payload) => ({
				url: 'admin/user-nutrition-plans',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});

export const { useUserNutritionPlanMutation } = userNutritionApi;

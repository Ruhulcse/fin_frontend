import apiSlice from "../api";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    genderWiseVideo: builder.mutation({
      query: (payload) => ({
        url: "users/get-intro-url",
        method: "POST",
        body: payload,
      }),
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `users/update-details/${payload.id}`,
        method: "PUT",
        body: payload?.data,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (payload) => ({
        url: `users/${payload.id}`,
        method: "PUT",
        body: payload?.data,
      }),
    }),
    updateUserStatusInfo: builder.mutation({
      query: (payload) => ({
        url: `users/update-status/${payload.id}`,
        method: "PUT",
        body: payload?.data,
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
    }),
    userMeasurement: builder.mutation({
      query: (payload) => ({
        url: `tracking`,
        method: "POST",
        body: payload,
      }),
    }),
    getUserAssets: builder.mutation({
      query: (payload) => ({
        url: "users/generate-asset-url",
        method: "POST",
        body: payload,
      }),
    }),
    setUserStepTask: builder.mutation({
      query: (payload) => ({
        url: "tracking/user-steps",
        method: "POST",
        body: payload,
      }),
    }),
    getUserStepStats: builder.query({
      query: () => ({
        url: "tracking/steps-stats",
      }),
    }),
    setUserTask: builder.mutation({
      query: (payload) => ({
        url: "tracking/food-entry",
        method: "POST",
        body: payload,
      }),
    }),
    updateUserTask: builder.mutation({
      query: (payload) => ({
        url: `tracking/food-entry/${payload.id}`,
        method: "PUT",
        body: payload.data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGenderWiseVideoMutation,
  useUpdateUserMutation,
  useGetUserQuery,
  useUserMeasurementMutation,
  useGetUserAssetsMutation,
  useSetUserTaskMutation,
  useUpdateUserTaskMutation,
  useUpdateUserInfoMutation,
  useUpdateUserStatusInfoMutation,
  useSetUserStepTaskMutation,
  useGetUserStepStatsQuery,
} = userApi;

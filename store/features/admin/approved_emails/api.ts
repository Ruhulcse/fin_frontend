import apiSlice from '../../api';

export const approvedEmailApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addApprovedEmail: builder.mutation({
			query: (payload) => ({
				url: 'admin/approved_emails',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});

export const { useAddApprovedEmailMutation } = approvedEmailApi;

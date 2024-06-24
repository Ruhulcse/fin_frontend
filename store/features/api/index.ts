import { logoutHandler } from '@/lib/helper/common';
import { getCookieValue } from '@/lib/helper/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
	// credentials: 'include',
	credentials: 'same-origin',
	prepareHeaders: async (headers) => {
		const authToken = await getCookieValue('token');
		headers.set('Authorization', authToken);
		return headers;
	},
});

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: async (args, api, extraOptions) => {
		let result = await baseQuery(args, api, extraOptions);
		if (result?.error?.status === 401) {
			await logoutHandler();
		}
		return result;
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;

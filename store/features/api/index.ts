import { clearCookie, getCookieValue } from '@/lib/helper/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

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
			toast.error('Unauthorized');
			await signOut({
				redirect: true,
				callbackUrl: '/login',
			});
			await clearCookie();
		}
		return result;
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;

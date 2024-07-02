'use server';

import { getCookieValue } from './server-func';

export const nextProperties = (revalidate = 0) => {
	return { next: { revalidate } };
};

export const baseFetch = (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
	const path = `${baseURL}/${url}`;
	return fetch(path, {
		...next_options,
	});
};

export const serverAuthFetch = async (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL;
	const path = `${baseURL}/api/${url}`;
	return fetch(path, {
		headers: { Authorization: await getCookieValue('token') },
		...next_options,
	});
};

export const generateDataFromServer = async (
	url: string,
	options?: {
		next: { revalidate: number };
	}
) => {
	try {
		const res = await serverAuthFetch(url, options);
		if (res?.status === 401) {
			throw new Error('Unauthorized');
		}
		const data = await res.json();
		if (data?.error) {
			throw new Error('Failed to fetch data');
		}
		return data;
	} catch (error: any) {
		return error?.message ?? 'Error Found';
	}
};

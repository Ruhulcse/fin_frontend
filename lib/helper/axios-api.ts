import axios from 'axios';
import { getCookieValue } from './server-func';

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	// withCredentials: true,
});

axiosInstance.interceptors.request.use(
	async (config: any) => {
		try {
			const authToken = await getCookieValue('token');
			if (authToken) {
				config.headers['Authorization'] = authToken;
			}
			return config;
		} catch (error) {
			return config;
		}
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response: any) => {
		return response;
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

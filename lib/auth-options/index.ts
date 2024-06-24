import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import { cookieOptions } from '../helper/common';
import { axiosInstance } from '../helper/fetch';

const { GOOGLE_SECRET = '', GOOGLE_ID = '' } = process.env;

export const authOptions = {
	pages: {
		signIn: '/login',
		error: '/login',
	},
	providers: [
		GoogleProvider({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
		}),
		CredentialsProvider({
			id: 'login',
			name: 'Login',
			credentials: {},
			async authorize(credentials) {
				try {
					const {
						data: { data },
					} = await axiosInstance.post('/login', credentials);
					cookies().set('token', data.token, cookieOptions());
					return data ?? null;
				} catch (error) {
					return null;
				}
			},
		}),
		CredentialsProvider({
			id: 'signup',
			name: 'Signup',
			credentials: {},
			async authorize(credentials) {
				try {
					const data: any = { ...credentials };
					cookies().set('token', data.token, cookieOptions());
					return data ?? null;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account }: any) {
			if (['google'].includes(account.provider)) {
				const {
					data: { data },
				} = await axiosInstance.post('/social-login', {
					...user,
					from: account.provider,
				});
				const { token, role, name } = data;
				if (data) {
					user.name = name;
					user.role = role;
					user.token = token;
					cookies().set('token', token, cookieOptions());
					return true;
				}
				return false;
			} else {
				return true;
			}
		},
		async jwt({ token, user }: any) {
			if (user) {
				token = { ...user, iat: token.iat, exp: token.exp, jti: token.jti };
			}
			return token;
		},
		async session({ session, token }: any) {
			const { iat, exp, jti, ...rest } = token;
			return { expires: session.expires, user: rest };
		},
	},
};

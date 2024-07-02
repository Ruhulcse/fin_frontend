import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import { axiosInstance } from '../helper/axios-api';
import { cookieOptions } from '../helper/common';

const { GOOGLE_SECRET = '', GOOGLE_ID = '' } = process.env;

export const authOptions = (req?: any, res?: any) => {
	return {
		pages: {
			signIn: '/login',
			error: '/login',
		},
		providers: [
			GoogleProvider({
				profile(profile) {
					return {
						id: profile.sub,
						password: profile.sub,
						name: profile.name,
						first_name: profile.given_name,
						last_name: profile.family_name,
						email: profile.email,
					};
				},
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
					const { id, ...rest } = user;
					const {
						data: { data },
					} = await axiosInstance.post(`/signup-google`, rest);
					const { name, gender = '', role, token, new_user } = data;
					if (data) {
						user.name = name;
						user.gender = gender;
						user.id = data.id;
						user.role = role;
						user.new_user = new_user;
						user.token = token;
						cookies().set('token', token, cookieOptions());
						return true;
					}
					return false;
				} else {
					return true;
				}
			},
			async jwt({ token, trigger, user, session }: any) {
				if (user) {
					const { first_name, last_name, password, ...rest } = user;
					token = { ...rest, iat: token.iat, exp: token.exp, jti: token.jti };
				}
				if (trigger === 'update' && session?.gender) {
					token.gender = session.gender;
				}
				return token;
			},
			async session({ session, token }: any) {
				const { iat, exp, jti, first_name, last_name, password, ...rest } =
					token;
				return { expires: session.expires, user: rest };
			},
		},
	};
};

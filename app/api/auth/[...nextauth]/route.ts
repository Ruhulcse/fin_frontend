import { authOptions } from '@/lib/auth-options';
import NextAuth from 'next-auth';

const handler = async function auth(req: any, res: any) {
	return await NextAuth(req, res, authOptions(req, res));
};

export { handler as GET, handler as POST };

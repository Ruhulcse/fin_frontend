import { useGetUserQuery } from '@/store/features/user/api';
import { useSession } from 'next-auth/react';

const publicPaths = ['/login', '/registration', '/forgot-password'];
const Middleware = () => {
	const session: any = useSession();
	useGetUserQuery(session?.data?.user?.id, {
		skip: !session?.data?.user?.id,
	});
	return null;
};

export default Middleware;

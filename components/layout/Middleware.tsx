'use client';
import { useAppSelector } from '@/store/hooks';
import { usePathname, useRouter } from 'next/navigation';
const publicPaths = ['/login', '/registration', '/forgot-password'];
const Middleware = () => {
	const user = useAppSelector((state) => state.user);
	const pathname = usePathname();
	const router = useRouter();
	if (pathname && publicPaths.includes(pathname) && user?.email) {
		router.push('/');
		return null;
	}
	if (pathname && !publicPaths.includes(pathname) && !user?.email) {
		router.push('/login');
		return null;
	}
	return null;
};

export default Middleware;

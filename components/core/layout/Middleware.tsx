import { useGetUserQuery } from '@/store/features/user/api';
import { useAppDispatch } from '@/store/hooks';
import { setThemeLocale } from '@/store/theme/slice';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Middleware = ({ locale }: { locale?: string }) => {
	const dispatch = useAppDispatch();
	const session: any = useSession();
	useGetUserQuery(session?.data?.user?.id, {
		skip: !session?.data?.user?.id,
	});
	useEffect(() => {
		locale && dispatch(setThemeLocale(locale));
	}, [dispatch, locale]);
	return null;
};

export default Middleware;

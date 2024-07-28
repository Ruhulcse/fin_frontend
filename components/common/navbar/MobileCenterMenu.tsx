'use client';

import { useAppSelector } from '@/store/hooks';
import { usePathname } from 'next/navigation';

const MobileCenterMenu = () => {
	const { locale } = useAppSelector((state) => state.theme);
	const pathName = usePathname();
	const splitByLocale = pathName.split(locale);
	const splitPathName = splitByLocale[1]?.split('/')[1] ?? '';
	return (
		<strong className="block text-[18px] xl:hidden capitalize">
			{splitPathName.replace('-', ' ')}
		</strong>
	);
};

export default MobileCenterMenu;

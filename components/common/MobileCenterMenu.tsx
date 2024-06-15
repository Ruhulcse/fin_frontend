'use client';

import { usePathname } from 'next/navigation';

const MobileCenterMenu = () => {
	const pathName = usePathname();
	const splitPathName = pathName.split('/')[1];
	return (
		<strong className="block text-[18px] xl:hidden capitalize">
			{splitPathName.replace('-', ' ')}
		</strong>
	);
};

export default MobileCenterMenu;

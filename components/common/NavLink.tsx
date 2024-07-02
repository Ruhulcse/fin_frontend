'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const NavLink = ({
	href,
	children,
	exact = true,
	extraClasses,
}: {
	href: string;
	children: ReactNode;
	exact?: boolean;
	extraClasses?: string;
}) => {
	const pathName = usePathname();
	return (
		<Link
			href={href}
			className={
				(exact ? href === pathName : href.includes(pathName))
					? `${cn('font-bold', extraClasses)}`
					: `${cn(extraClasses)}`
			}
		>
			{children}
		</Link>
	);
};

export default NavLink;

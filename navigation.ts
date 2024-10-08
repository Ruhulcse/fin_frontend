import { locales } from '@/lib/helper/locales';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales });

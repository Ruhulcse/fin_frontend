'use client';
import { defaultLocale, locales } from '@/lib/helper/locales';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/store/hooks';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = ({ extraClass = '' }: { extraClass?: string }) => {
	const router = useRouter();
	const { locale } = useAppSelector((state) => state.theme);
	const pathname = usePathname();

	const routeChange = (localeString: string) => {
		const currentPath =
			locale === defaultLocale
				? pathname
				: pathname.split(`/${locale}/`)[1] ?? '';
		const url = `/${localeString ?? ''}/${currentPath}`;
		router.push(url);
	};

	return (
		<select
			defaultValue={locale}
			onChange={(e) => {
				routeChange(e.target.value);
			}}
			className={cn(
				'block p-0 w-max text-sm bg-transparent  cursor-pointer focus:outline-none',
				extraClass
			)}
		>
			{locales.map((locale) => (
				<option
					key={locale}
					value={locale}
					className="text-black bg-card p-1 border-card"
				>
					{locale}
				</option>
			))}
		</select>
	);
};

export default LanguageSwitcher;

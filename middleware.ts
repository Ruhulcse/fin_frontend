import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { publicPaths } from './lib/helper/common';
import { defaultLocale, locales } from './lib/helper/locales';

const intlMiddleware = createMiddleware({
	locales: locales,
	localePrefix: 'as-needed',
	defaultLocale: defaultLocale,
});

const authMiddleware = withAuth(
	(req) => {
		if (
			req.nextUrl.pathname.includes('/admin') &&
			req?.nextauth?.token?.role !== 'admin'
		) {
			req.nextUrl.pathname = '/';
		}
		const response = intlMiddleware(req);
		return response;
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
		pages: {
			signIn: '/login',
			error: '/login',
		},
	}
);

export default function middleware(req: NextRequest) {
	const publicPathnameRegex = RegExp(
		`^(/(${locales.join('|')}))?(${publicPaths()
			.flatMap((p) => (p === '/' ? ['', '/'] : p))
			.join('|')})/?$`,
		'i'
	);
	const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
	if (isPublicPage) {
		return intlMiddleware(req);
	} else {
		return (authMiddleware as any)(req);
	}
}

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};

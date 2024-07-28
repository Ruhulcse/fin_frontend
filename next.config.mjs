/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fin-backend-0dcb.onrender.com',
			},
			{
				protocol: 'https',
				hostname: 'fitalbucket.s3.eu-north-1.amazonaws.com',
			},
		],
	},
};

export default withNextIntl(nextConfig);

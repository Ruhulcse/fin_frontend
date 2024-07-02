/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fin-backend-mm5k.onrender.com',
			},
			{
				protocol: 'https',
				hostname: 'fitalbucket.s3.eu-north-1.amazonaws.com',
			},
		],
	},
};

export default nextConfig;

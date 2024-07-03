'use client';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

const SocialLogin = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const unverifiedEmail = searchParams.get('error') === 'unverified-email';

	const googleLogin = async () => {
		await signIn('google', {
			redirect: true,
			callbackUrl: '/',
		});
	};

	useEffect(() => {
		if (unverifiedEmail) {
			toast.error('Please Contact With Admin. Your Email Not Entry To System!');
			router.replace('/login');
		}
	}, [router, unverifiedEmail]);

	return (
		<section>
			<h4 className="auth-header">
				<span>or continue with</span>
				<div className="line"></div>
			</h4>
			<div className="login-options grid gap-3 xl:gap-4">
				<button
					onClick={googleLogin}
					className="bg-primary text-center flex items-center justify-center gap-2 p-2 rounded"
				>
					<FcGoogle size={20} />
					<span>Continue with Google</span>
				</button>
			</div>
		</section>
	);
};

export default SocialLogin;

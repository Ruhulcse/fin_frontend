'use client';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

interface SocialLoginProps {
	type: 'normal_user' | 'recipe_user';
  }

const SocialLogin = ({ type="" }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const errorMessage = searchParams.get('error');
	const t = useTranslations('auth');
	const googleMessage = t.raw('googleMessage');

	const googleLogin = async () => {
		await signIn('google', {
			redirect: true,
		});
	};

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage);
			router.replace('/login');
		}
	}, [router, errorMessage]);

	return (
		<section>
			{/* {['/login'].includes(pathName) ? (
				<h4 className="auth-header">
					<span>or continue with</span>
					<div className="line"></div>
				</h4>
			) : null} */}
			<div className="login-options grid gap-3 xl:gap-4">
				<button
					onClick={googleLogin}
					className="bg-primary text-center flex items-center justify-center gap-2 p-2 rounded"
				>
					<FcGoogle size={20} />
					<span>{googleMessage}</span>
				</button>
			</div>
		</section>
	);
};

export default SocialLogin;

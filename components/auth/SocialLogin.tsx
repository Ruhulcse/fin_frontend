'use client';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';
import AuthHeader from './AuthHeader';

interface SocialLoginProps {
	type: 'normal_user' | 'recipe_user';
  }

const SocialLogin = ({ type="" }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const errorMessage = searchParams.get('error');
	const t = useTranslations('auth');
	const googleMessage = t.raw('googleMessage');

	console.log("type from social login", type);

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
		<>
			<AuthHeader title={`${type==="normal_user" ? "Normal User Login" : "Recipe User Login"}`} />
			{/* <h1 className="text-center mb-6">{"hello"}</h1> */}
			<section>
				{/* <h1 className="text-center mb-6">{"hello"}</h1> */}
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
		</>
	);
};

export default SocialLogin;

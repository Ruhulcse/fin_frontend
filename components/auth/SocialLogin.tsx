'use client';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
	return (
		<section className="text-white">
			<h4 className="auth-header">
				<span>or continue with</span>
				<div className="line"></div>
			</h4>
			<div className="login-options grid gap-3 xl:gap-4">
				<button
					onClick={() => signIn('google')}
					className="bg-[#33393F] text-center flex items-center justify-center gap-2 p-2 rounded"
				>
					<FcGoogle size={20} />
					<span>Continue with Google</span>
				</button>
			</div>
		</section>
	);
};

export default SocialLogin;

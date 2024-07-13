import authImg from '@/assets/images/auth.png';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import SocialLogin from '../../auth/SocialLogin';
const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions());
	const userRole = session?.user?.role;
	if (session?.user?.token) {
		return redirect(userRole === 'admin' ? '/admin' : '/');
	}
	return (
		<main className="bg-card xl:bg-white container auth grid place-items-center">
			<section className="grid gap-20 grid-cols-2 py-[40px] xl:py-[60px] w-full items-center">
				<Image
					src={authImg}
					alt="auth image"
					className="hidden xl:block m-auto"
				/>
				<div className="xl:bg-card p-[10px] xl:p-[20px] col-span-2 xl:col-span-1 rounded-lg grid gap-6 xl:gap-4">
					{children}
					<SocialLogin />
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;

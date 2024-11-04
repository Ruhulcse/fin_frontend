import authImg from '@/assets/images/auth.png';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import SocialLogin from '../../auth/SocialLogin';
import { getTranslations } from 'next-intl/server';
const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const t = await getTranslations('auth');
	const loginPageTitle = t.raw('loginPageTitle');
	
	const session = await getServerSession(authOptions());
	const userRole = session?.user?.role;
	if (session?.user?.token) {
		return redirect(userRole === 'admin' ? '/admin' : '/');
	}


	return (
		<main className="bg-card xl:bg-white container auth grid place-items-center relative">
			<div className="absolute top-1 right-1">
				<LanguageSwitcher />
			</div>
			<h1 className='text-5xl  font-extrabold text-center'>{loginPageTitle}</h1>
			<section className="grid gap-20 grid-cols-2 py-[20px] xl:py-[60px] w-full items-center">
			
				{/* <Image
					src={authImg}
					alt="auth image"
					className="hidden xl:block m-auto"
				/> */}
				<div className="xl:bg-card p-[10px] xl:p-[20px] col-span-2 xl:col-span-1 rounded-lg grid gap-6 xl:gap-4">
					{children}
					<SocialLogin type="normal_user" />
				</div>
				<div className="xl:bg-card p-[10px] xl:p-[20px] col-span-2 xl:col-span-1 rounded-lg grid gap-6 xl:gap-4">
					{children}
					<SocialLogin type="recipe_user" />
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;

import GenderSet from '@/components/auth/GenderSet';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Footer from '../../common/Footer';
import Navbar from '../../common/Navbar';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getServerSession(authOptions());
	if (!session?.user?.token) {
		return redirect('/login');
	}
	return session?.user?.gender ? (
		<main className="dashboard">
			<Navbar />
			<div className="container text-white py-[20px] xl:py-[40px]">
				{children}
			</div>
			<Footer />
		</main>
	) : (
		<GenderSet userId={session?.user?.id} />
	);
};

export default DashboardLayout;

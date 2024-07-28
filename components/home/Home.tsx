import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import Measurements from './Measurements';
import Steps from './Steps';
import Todos from './Todos';

const Home = async () => {
	const { user }: any = await getServerSession(authOptions());
	const t = await getTranslations('dashboard');
	const homeI18n = t.raw('home');
	if (user?.role === 'admin') {
		redirect('/admin');
	}
	return (
		<section className="home">
			<Measurements
				homeI18n={homeI18n}
				userId={user?.id}
			/>
			<Steps homeI18n={homeI18n} />
			<Todos homeI18n={homeI18n} />
		</section>
	);
};

export default Home;

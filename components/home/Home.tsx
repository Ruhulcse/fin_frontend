import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Measurements from './Measurements';
import Steps from './Steps';
import Todos from './Todos';

const Home = async () => {
	const { user }: any = await getServerSession(authOptions());
	if (user?.role === 'admin') {
		redirect('/admin');
	}
	return (
		<section className="home">
			<Measurements userId={user?.id} />
			<Steps />
			<Todos />
		</section>
	);
};

export default Home;

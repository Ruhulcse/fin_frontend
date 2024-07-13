import { generateDataFromServer } from '@/lib/helper/server-fetch';
import Link from 'next/link';
import BasicCard from '../common/BasicCard';
import AdminSearch from './AdminSearch';

const AdminDashboard = async () => {
	const { data: users = [] } = await generateDataFromServer('users');
	return (
		<section className="grid gap-4 xl:gap-8">
			<AdminSearch users={users} />
			<Link
				href="/admin/trainee"
				className="home-card grid place-items-center !py-[40px] xl:!py-[60px]"
			>
				<strong className="text-4xl">
					{users?.filter((user: any) => user.status === 'active')?.length}
				</strong>
				<p className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
					Active users
				</p>
			</Link>
			<div className="quick-links grid gap-2 xl:gap-4">
				<BasicCard link="/admin/exercise/manage">
					<span>Manage Exercise</span>
				</BasicCard>
				<BasicCard link="/admin/nutrition-plan/manage">
					<span>Manage Nutrition Guides</span>
				</BasicCard>
				<BasicCard link="/admin/approve-email">
					<span>Approve email address</span>
				</BasicCard>
			</div>
		</section>
	);
};

export default AdminDashboard;

import { serverAuthFetch } from '@/lib/helper/fetch';
import BasicCard from '../common/BasicCard';
import AdminSearch from './AdminSearch';
export const getAdminInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}];
	}
};
const AdminDashboard = async () => {
	const admin = await getAdminInfo();
	return (
		<section className="grid gap-4 xl:gap-8">
			<AdminSearch />
			<div className="home-card grid place-items-center !py-[40px] xl:!py-[60px]">
				<strong className="text-4xl">{admin?.users ?? 120}</strong>
				<p className="text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
					Active users
				</p>
			</div>
			<div className="quick-links grid gap-2 xl:gap-4">
				<BasicCard link="/admin/exercise/add">
					<span>Add New Exercise</span>
				</BasicCard>
				<BasicCard>
					<span>Add Nutrition Guide</span>
				</BasicCard>
				<BasicCard link="/admin/approve-email">
					<span>Approve email address</span>
				</BasicCard>
			</div>
		</section>
	);
};

export default AdminDashboard;

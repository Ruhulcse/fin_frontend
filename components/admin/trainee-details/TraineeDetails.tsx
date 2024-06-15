import { serverAuthFetch } from '@/lib/helper/fetch';
import TraineeActions from './TraineeActions';
import TraineeDetailsInfo from './TraineeDetailsInfo';

export const getDetailsInfo = async (id: string) => {
	try {
		const res = await serverAuthFetch(`/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};
const TraineeDetails = async ({ id }: { id: string }) => {
	const trainee = await getDetailsInfo(id);
	return (
		<section className="trainee-details grid gap-4 xl:gap-8">
			<TraineeDetailsInfo trainee={trainee} />
			<TraineeActions />
		</section>
	);
};

export default TraineeDetails;

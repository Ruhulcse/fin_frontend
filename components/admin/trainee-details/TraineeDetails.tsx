import { generateDataFromServer } from '@/lib/helper/server-fetch';
import TraineeActions from './TraineeActions';
import TraineeDetailsInfo from './TraineeDetailsInfo';

const TraineeDetails = async ({ id }: { id: string }) => {
	const { data: trainee } = await generateDataFromServer(`users/${id}`);
	return (
		<section className="trainee-details grid gap-4 xl:gap-8">
			<TraineeDetailsInfo trainee={trainee} />
			<TraineeActions trainee={trainee} />
		</section>
	);
};

export default TraineeDetails;

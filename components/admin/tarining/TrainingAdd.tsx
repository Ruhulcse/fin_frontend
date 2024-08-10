import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import TrainingForm from './TrainingForm';

const TrainingAdd = async ({ traineeId }: { traineeId: string }) => {
	const { data: userTrainings = [] } = await generateDataFromServer(
		`trainings`,
		nextProperties()
	);
	return (
		<section className="add-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Add Training</h3>
			<TrainingForm
				traineeId={traineeId}
				userTrainings={userTrainings}
			/>
		</section>
	);
};

export default TrainingAdd;

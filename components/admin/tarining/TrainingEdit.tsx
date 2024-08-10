import { generateDataFromServer } from '@/lib/helper/server-fetch';
import TrainingForm from './TrainingForm';

const TrainingEdit = async ({
	id,
	traineeId,
}: {
	id: string;
	traineeId: string;
}) => {
	const { data: training = {} } = await generateDataFromServer(
		`trainings/${id}`
	);
	return (
		<section className="edit-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Training</h3>
			<TrainingForm
				training={training}
				traineeId={traineeId}
			/>
		</section>
	);
};

export default TrainingEdit;

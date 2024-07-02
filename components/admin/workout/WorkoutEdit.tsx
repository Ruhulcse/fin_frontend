import { generateDataFromServer } from '@/lib/helper/server-fetch';
import WorkoutForm from './WorkoutForm';

const WorkoutEdit = async ({
	id,
	traineeId,
}: {
	id: string;
	traineeId: string;
}) => {
	const { data: workout = {} } = await generateDataFromServer(`workouts/${id}`);
	return (
		<section className="edit-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Workout</h3>
			<WorkoutForm
				workout={workout}
				traineeId={traineeId}
			/>
		</section>
	);
};

export default WorkoutEdit;

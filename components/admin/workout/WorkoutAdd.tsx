import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import WorkoutForm from './WorkoutForm';

const WorkoutAdd = async ({
	traineeId,
	trainingId,
}: {
	traineeId: string;
	trainingId: string;
}) => {
	const { data: userWorkouts = [] } = await generateDataFromServer(
		`workouts`,
		nextProperties()
	);
	const t = await getTranslations('admin');
	const execData = t.raw('workout');
	return (
		<section className="add-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">{execData.addWorkout}</h3>
			<WorkoutForm
				traineeId={traineeId}
				userWorkouts={userWorkouts}
				trainingId={trainingId}
			/>
		</section>
	);
};

export default WorkoutAdd;

import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import WorkoutForm from './WorkoutForm';

const WorkoutEdit = async ({
	id,
	traineeId,
	trainingId,
}: {
	id: string;
	traineeId: string;
	trainingId: string;
}) => {
	const { data: workout = {} } = await generateDataFromServer(`workouts/${id}`);
	const { data: workoutExercises = [] } = await generateDataFromServer(
		`admin/training/${id}`,
		nextProperties(0)
	);
	const t = await getTranslations('admin');
	const execData = t.raw('workout');
	return (
		<section className="edit-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">{execData.editWorkout}</h3>
			<WorkoutForm
				workout={{
					...workout,
					exercises: workoutExercises.map((exercise: any) => ({
						manipulation: exercise?.manipulation ?? '',
						sets_to_do: exercise?.sets_to_do ?? 0,
						goal_weight: exercise?.goal_weight ?? 0,
						reps_to_do: exercise?.reps_to_do ?? 0,
						exercise_id: exercise?.exercise_id ?? null,
						trainer_exp: exercise?.trainer_exp ?? '',
						exercise_name: exercise?.Exercise?.name ?? '',
						training_id: exercise?.training_id ?? null,
						training_record_id: exercise?.training_record_id ?? null,
					})),
				}}
				traineeId={traineeId}
				trainingId={trainingId}
			/>
		</section>
	);
};

export default WorkoutEdit;

import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import WorkoutProgramWrapperView from './WorkoutProgramWrapperView';

const WorkingProgramView = async ({ id }: { id: string }) => {
	const { data: workout = {} } = await generateDataFromServer(
		`workouts/${id}`,
		nextProperties(0)
	);
	const { data: workoutExercises = [] } = await generateDataFromServer(
		`admin/training/${id}`,
		nextProperties(0)
	);

	return (
		<WorkoutProgramWrapperView
			workoutExercises={workoutExercises}
			workout={workout}
		/>
	);
};

export default WorkingProgramView;

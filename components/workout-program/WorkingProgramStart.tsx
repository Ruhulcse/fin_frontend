import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import WorkoutProgramWrapperStart from './WorkoutProgramWrapperStart';

const WorkingProgramStart = async ({ id }: { id: string }) => {
	const session = await getServerSession(authOptions());
	const user = session?.user;
	if (user?.role === 'admin') {
		redirect('/');
	}
	const { data: workout = {} } = await generateDataFromServer(
		`workouts/${id}`,
		nextProperties(0)
	);
	const { data: workoutExercises = [] } = await generateDataFromServer(
		`admin/training/${id}`,
		nextProperties(0)
	);
	const { data: userWorkouts = [] } = await generateDataFromServer(
		`workouts/training/${user?.id}`,
		nextProperties(0)
	);

	return (
		<WorkoutProgramWrapperStart
			workout={workout}
			workoutExercises={workoutExercises}
			id={id}
			prevWorkout={userWorkouts[0]}
		/>
	);
};

export default WorkingProgramStart;

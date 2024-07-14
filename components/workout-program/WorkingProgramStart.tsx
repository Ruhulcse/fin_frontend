import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkoutExercises from './WorkoutExercises';
import WorkingProgramPrevData from './WorkingProgramPrevData';

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
		<section className="grid gap-2 xl:gap-4">
			<WorkingProgramInfo workProgramDetails={workout} />
			<WorkingProgramPrevData prevWorkout={userWorkouts[0]} />
			<WorkoutExercises
				workoutExercises={workoutExercises}
				id={id}
			/>
		</section>
	);
};

export default WorkingProgramStart;

import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkoutExercises from './WorkoutExercises';

const WorkingProgramStart = async ({ id }: { id: string }) => {
	const { data: workout = {} } = await generateDataFromServer(
		`workouts/${id}`,
		nextProperties(0)
	);
	const { data: workoutExercises = [] } = await generateDataFromServer(
		`admin/training/${id}`,
		nextProperties(0)
	);

	const session = await getServerSession(authOptions());
	const userRole = session?.user?.role;
	if (userRole === 'admin') {
		redirect('/');
	}
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkingProgramInfo workProgramDetails={workout} />
			<WorkoutExercises
				workoutExercises={workoutExercises}
				id={id}
			/>
		</section>
	);
};

export default WorkingProgramStart;

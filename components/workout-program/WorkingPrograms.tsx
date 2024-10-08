import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import NotDataFound from '../common/message/NotDataFound';
import WorkingProgram from './WorkingProgram';
import WorkoutSearch from './WorkoutSearch';
import { sortArray } from '@/lib/helper/common';

const WorkingPrograms = async ({ searchParams }: { searchParams: any }) => {
	const queryParams =
		Object.keys(searchParams).length > 0
			? new URLSearchParams(searchParams)
			: '';
	const { data: workoutPrograms = [] } = await generateDataFromServer(
		queryParams ? `workouts?${queryParams}` : 'workouts',
		nextProperties()
	);
	const { data: trainings = [] } = await generateDataFromServer(
		`trainings`,
		nextProperties()
	);
	const session = await getServerSession(authOptions());
	const userRole = session?.user?.role;
	return (
		<>
			<WorkoutSearch
				trainings={trainings}
				searchParams={searchParams}
			/>
			{workoutPrograms?.length > 0 ? (
				<section className="workout-programs">
					{sortArray(workoutPrograms, 'workout_id')?.map(
						(program: any, index: number) => {
							return (
								<WorkingProgram
									key={index}
									workoutProgram={program}
									userRole={userRole}
								/>
							);
						}
					)}
				</section>
			) : (
				<NotDataFound />
			)}
		</>
	);
};

export default WorkingPrograms;

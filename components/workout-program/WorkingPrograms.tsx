import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import NotDataFound from '../common/message/NotDataFound';
import WorkingProgram from './WorkingProgram';

const WorkingPrograms = async () => {
	const { data: workoutPrograms = [] } = await generateDataFromServer(
		'workouts',
		nextProperties(0)
	);
	return workoutPrograms?.length > 0 ? (
		<section className="workout-programs">
			{workoutPrograms?.map((program: any, index: number) => {
				return (
					<WorkingProgram
						key={index}
						workoutProgram={program}
					/>
				);
			})}
		</section>
	) : (
		<NotDataFound />
	);
};

export default WorkingPrograms;

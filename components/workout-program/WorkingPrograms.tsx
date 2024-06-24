import { generateDataFromServer, nextProperties } from '@/lib/helper/fetch';
import WorkingProgram from './WorkingProgram';



const WorkingPrograms = async () => {
	const workoutPrograms = await generateDataFromServer('courses', nextProperties(0));
	return (
		<section className="workout-programs">
			{[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((program: any, index: number) => {
				return (
					<WorkingProgram
						key={index}
						workoutProgram={program}
					/>
				);
			})}
		</section>
	);
};

export default WorkingPrograms;

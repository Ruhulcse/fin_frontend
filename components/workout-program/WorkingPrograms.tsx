import { serverAuthFetch } from '@/lib/helper/fetch';
import WorkingProgram from './WorkingProgram';

export const getAllInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}, {}, {}, {}, {}, {}, {}];
	}
};

const WorkingPrograms = async () => {
	const workoutPrograms = await getAllInfo();
	return (
		<section className="workout-programs">
			{workoutPrograms.map((program: any, index: number) => {
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

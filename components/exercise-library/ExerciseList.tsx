import { generateDataFromServer, nextProperties } from '@/lib/helper/fetch';
import Exercise from './Exercise';

const ExerciseList = async ({ searchParams }: { searchParams: any }) => {
	const queryParams = new URLSearchParams(searchParams);
	const exercises = await generateDataFromServer(
		`exercises?${queryParams}`,
		nextProperties(0)
	);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Exercise List</h3>
			<div className="grid grid-cols-1 gap-4">
				{[{}, {}, {}].map((exercise: any, index: number) => (
					<Exercise
						exercise={exercise}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default ExerciseList;

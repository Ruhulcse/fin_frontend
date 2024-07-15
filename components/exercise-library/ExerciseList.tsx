import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import NotDataFound from '../common/message/NotDataFound';
import Exercise from './Exercise';

const ExerciseList = async ({ searchParams }: { searchParams: any }) => {
	const queryParams = new URLSearchParams(searchParams);
	const { data: exercises = [] } = await generateDataFromServer(
		`exercises?${queryParams}`,
		nextProperties(0)
	);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Exercise List</h3>
			{exercises?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{exercises?.map((exercise: any, index: number) => (
						<Exercise
							exerciseId={exercise.exercise_id}
							key={index}
						/>
					))}
				</div>
			) : (
				<NotDataFound />
			)}
		</section>
	);
};

export default ExerciseList;

import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import NotDataFound from '../common/message/NotDataFound';
import Exercise from './Exercise';
import { getTranslations } from 'next-intl/server';
import { sortArray } from '@/lib/helper/common';

const ExerciseList = async ({ searchParams }: { searchParams: any }) => {
	const queryParams = new URLSearchParams(searchParams);
	const { data: exercises = [] } = await generateDataFromServer(
		`exercises?${queryParams}`,
		nextProperties(0)
	);
	return (
		<section className="exercise-list-area">
			{exercises?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{sortArray(exercises, 'exercise_id')?.map(
						(exercise: any, index: number) => (
							<Exercise
								exerciseId={exercise.exercise_id}
								key={index}
							/>
						)
					)}
				</div>
			) : (
				<NotDataFound />
			)}
		</section>
	);
};

export default ExerciseList;

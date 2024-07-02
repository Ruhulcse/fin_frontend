'use client';
import { useGetExercisesQuery } from '@/store/features/exercise/api';
import NotDataFound from '../common/message/NotDataFound';
import SkeletonGroup from '../common/skeleton/SkeletonGroup';
import Exercise from './Exercise';

const ExerciseList = ({ searchParams }: { searchParams: any }) => {
	const queryParams = new URLSearchParams(searchParams);
	const { data = {}, isLoading } = useGetExercisesQuery({ queryParams });
	const { data: exercises = [] } = data || {};
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Exercise List</h3>
			<div className="grid grid-cols-1 gap-4">
				{isLoading ? (
					<SkeletonGroup
						extraClass="h-30 xl:h-40"
						count={3}
					/>
				) : exercises?.length > 0 ? (
					exercises?.map((exercise: any, index: number) => (
						<Exercise
							exerciseId={exercise.exercise_id}
							key={index}
						/>
					))
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
};

export default ExerciseList;

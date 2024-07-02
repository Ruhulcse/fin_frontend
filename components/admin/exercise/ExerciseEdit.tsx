'use client';
import { useGetExerciseQuery } from '@/store/features/exercise/api';
import ExerciseForm from './ExerciseForm';

const ExerciseEdit = ({ id }: { id: string }) => {
	const { data = {} } = useGetExerciseQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: exercise = {} } = data || {};
	return (
		<section className="edit-exercise grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Exercise</h3>
			<ExerciseForm exercise={exercise} />
		</section>
	);
};

export default ExerciseEdit;

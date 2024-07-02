import { useGetExercisesQuery } from '@/store/features/exercise/api';
import AddExerciseForm from './AddexerciseForm';

const AddExerciseForWorkout = ({
	setExercises,
	setAddExercise,
	addExercise,
	exercises,
	setEditExercise,
	editExercise,
}: {
	setExercises: any;
	setAddExercise: any;
	addExercise: any;
	exercises: any;
	setEditExercise: any;
	editExercise: any;
}) => {
	const { data = {} } = useGetExercisesQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
		}
	);
	const { data: exerciseData = [] } = data || {};
	return (
		<>
			{addExercise ? (
				<AddExerciseForm
					exerciseData={exerciseData}
					setAddExercise={setAddExercise}
					setExercises={setExercises}
					exercises={exercises}
					open={addExercise}
					setEditExercise={setEditExercise}
					editExercise={editExercise}
				/>
			) : null}
		</>
	);
};

export default AddExerciseForWorkout;

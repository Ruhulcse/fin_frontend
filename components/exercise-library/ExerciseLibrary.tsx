import ExerciseFilter from './ExerciseFilter';
import ExerciseList from './ExerciseList';

const ExerciseLibrary = ({ searchParams }: { searchParams: any }) => {
	return (
		<section>
			<ExerciseFilter searchParams={searchParams} />
			<ExerciseList searchParams={searchParams} />
		</section>
	);
};

export default ExerciseLibrary;

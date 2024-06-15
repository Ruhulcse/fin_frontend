import ExerciseForm from './ExerciseForm';

const ExerciseAdd = () => {
	return (
		<section className="add-exercise grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Add Exercise</h3>
			<ExerciseForm />
		</section>
	);
};

export default ExerciseAdd;

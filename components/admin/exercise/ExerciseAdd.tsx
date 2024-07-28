import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';
import ExerciseForm from './ExerciseForm';

const ExerciseAdd = () => {
	return (
		<BackLinkWrapper
			href="/admin/exercise/manage"
			title="Back To Manage Exercises"
		>
			<section className="add-exercise grid gap-4 xl:gap-8">
				<h3 className="section-title text-right">Add Exercise</h3>
				<ExerciseForm />
			</section>
		</BackLinkWrapper>
	);
};

export default ExerciseAdd;

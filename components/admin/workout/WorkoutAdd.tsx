import WorkoutForm from './WorkoutForm';

const WorkoutAdd = ({ traineeId }: { traineeId: string }) => {
	return (
		<section className="add-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Add Workout</h3>
			<WorkoutForm traineeId={traineeId} />
		</section>
	);
};

export default WorkoutAdd;

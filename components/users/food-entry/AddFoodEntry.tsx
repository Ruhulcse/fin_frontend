import FoodEntryForm from './FoodEntryForm';

const AddFoodEntry = ({ taskId }: { taskId: string }) => {
	return (
		<section>
			<h3 className="section-title text-right">Add Todo</h3>
			<FoodEntryForm taskId={taskId} />
		</section>
	);
};

export default AddFoodEntry;

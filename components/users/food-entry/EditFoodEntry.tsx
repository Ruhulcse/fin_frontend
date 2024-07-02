import { generateDataFromServer } from '@/lib/helper/server-fetch';
import TodoForm from './FoodEntryForm';

const EditFoodEntry = async ({ id }: { id: string }) => {
	const { data: fooEntry = {} } = await generateDataFromServer(
		`tracking/food-entry/${id}`
	);
	return (
		<section>
			<h3 className="section-title text-right">Edit Todo</h3>
			<TodoForm fooEntry={fooEntry} />
		</section>
	);
};

export default EditFoodEntry;

import AddFoodEntry from '@/components/users/food-entry/AddFoodEntry';

const page = ({ searchParams }: { searchParams: any }) => {
	return <AddFoodEntry taskId={searchParams.task_id} />;
};

export default page;

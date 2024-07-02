import FoodEntry from '@/components/users/food-entry/FoodEntry';

const page = ({ params }: { params: { id: string } }) => {
	return <FoodEntry id={params?.id} />;
};

export default page;

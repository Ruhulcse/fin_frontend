import NutritionPlanView from '@/components/nutrition-plan/NutritionPlanView';

const page = ({ params }: { params: { id: string } }) => {
	return <NutritionPlanView id={params?.id} />;
};

export default page;

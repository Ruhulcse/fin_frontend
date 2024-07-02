import NutritionPlanEdit from '@/components/admin/nutrition-plan/NutritionPlanEdit';

const page = ({ params }: { params: { id: string } }) => {
	return <NutritionPlanEdit id={params?.id} />;
};

export default page;

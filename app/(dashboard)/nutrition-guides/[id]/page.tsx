import NutritionGuideView from '@/components/nutrition-guides/NutritionGuideView';

const page = ({ params }: { params: { id: string } }) => {
	return <NutritionGuideView id={params?.id} />;
};

export default page;

import RecipeView from '@/components/recipes/RecipeView';

const page = ({ params }: { params: { id: string } }) => {
	return <RecipeView id={params?.id} />;
};

export default page;

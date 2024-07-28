import NutritionGuidesEdit from '@/components/admin/nutrition-guides/NutritionGuidesEdit';
import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';

const page = ({ params }: { params: { id: string } }) => {
	return (
		<BackLinkWrapper
			href="/admin/nutrition-guides/manage"
			title="Back To Nutrition Guides"
		>
			<NutritionGuidesEdit id={params?.id} />
		</BackLinkWrapper>
	);
};

export default page;

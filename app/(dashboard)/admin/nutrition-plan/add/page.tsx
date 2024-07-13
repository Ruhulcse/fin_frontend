import NutritionPlanAdd from '@/components/admin/nutrition-plan/NutritionPlanAdd';
import BackLinkWrapper from '@/components/common/BackLinkWrapper';

const page = () => {
	return (
		<BackLinkWrapper
			href="/admin/nutrition-plan/manage"
			title="Back To Dashboard"
		>
			<NutritionPlanAdd />
		</BackLinkWrapper>
	);
};

export default page;

'use client';
import { useGetNutritionPlanQuery } from '@/store/features/nutrition-plans/api';
import NutritionPlanForm from './NutritionPlanForm';

const NutritionPlanEdit = ({ id }: { id: string }) => {
	const { data = {} } = useGetNutritionPlanQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: plan = {} } = data || {};
	return (
		<section className="edit-nutrition-plan grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Nutrition Plan</h3>
			<NutritionPlanForm plan={plan} />
		</section>
	);
};

export default NutritionPlanEdit;

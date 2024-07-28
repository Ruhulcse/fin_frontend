'use client';
import { useGetNutritionGuideQuery } from '@/store/features/nutrition-guides/api';
import NutritionGuidesForm from './NutritionGuidesForm';

const NutritionGuidesEdit = ({ id }: { id: string }) => {
	const { data = {} } = useGetNutritionGuideQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: guide = {} } = data || {};
	return (
		<section className="edit-nutrition-plan grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Nutrition Guides</h3>
			<NutritionGuidesForm guide={guide} />
		</section>
	);
};

export default NutritionGuidesEdit;

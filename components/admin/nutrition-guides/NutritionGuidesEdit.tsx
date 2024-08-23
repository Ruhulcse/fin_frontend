'use client';
import { useGetNutritionGuideQuery } from '@/store/features/nutrition-guides/api';
import { useTranslations } from 'next-intl';
import NutritionGuidesForm from './NutritionGuidesForm';

const NutritionGuidesEdit = ({ id }: { id: string }) => {
	const { data = {} } = useGetNutritionGuideQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: guide = {} } = data || {};
	const t = useTranslations('nutritionForm');
	const nutritionForm = t.raw('formLabel');
	return (
		<section className="edit-nutrition-plan grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">{nutritionForm.edit}</h3>
			<NutritionGuidesForm
				guide={guide}
				nutritionForm={nutritionForm}
			/>
		</section>
	);
};

export default NutritionGuidesEdit;

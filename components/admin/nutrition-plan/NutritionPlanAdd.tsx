import { getTranslations } from 'next-intl/server';
import NutritionPlanForm from './NutritionPlanForm';

const NutritionPlanAdd = async () => {
	const t = await getTranslations('nutritionForm');
	const nutritionForm = t.raw('formLabel');
	return (
		<section className="add-nutrition-plan grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">
				{nutritionForm.nutritionPlan}
			</h3>
			<NutritionPlanForm />
		</section>
	);
};

export default NutritionPlanAdd;

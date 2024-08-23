import { generateDataFromServer } from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import UserNutritionTab from './UserNutritionTab';

const UserNutritionPlan = async ({ traineeId }: { traineeId: string }) => {
	const { data: plans } = await generateDataFromServer('nutrition-plans');
	const { data: existingPlans } = await generateDataFromServer(
		`nutrition-plans/user?user_id=${traineeId}`
	);
	const t = await getTranslations('admin');
	const nutrition = t.raw('userNutrition');
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{nutrition.nutritionPlan}
			</h3>
			<UserNutritionTab
				plans={plans}
				existingPlans={existingPlans}
				traineeId={traineeId}
				nutrition={nutrition}
			/>
		</section>
	);
};

export default UserNutritionPlan;

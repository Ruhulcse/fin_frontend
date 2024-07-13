import { generateDataFromServer } from '@/lib/helper/server-fetch';
import UserNutritionTab from './UserNutritionTab';

const UserNutritionPlan = async ({ traineeId }: { traineeId: string }) => {
	const { data: plans } = await generateDataFromServer('nutrition-plans');
	const { data: existingPlans } = await generateDataFromServer(
		`nutrition-plans/user?user_id=${traineeId}`
	);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				Manage Use Nutrition Plan
			</h3>
			<UserNutritionTab
				plans={plans}
				existingPlans={existingPlans}
				traineeId={traineeId}
			/>
		</section>
	);
};

export default UserNutritionPlan;

import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import NotDataFound from '../common/message/NotDataFound';
import NutritionPlan from './NutritionPlan';

const NutritionPlans = async () => {
	const session = await getServerSession(authOptions());
	const { data: nutritionPlans = [] } = await generateDataFromServer(
		`nutrition-plans/user?user_id=${session?.user?.id}`,
		nextProperties()
	);
	const t = await getTranslations('nutritionForm');
	const plan = t.raw('formLabel');
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{plan.nutriPlan}
			</h3>
			{nutritionPlans?.length > 0 ? (
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					{nutritionPlans.map((plan: any, index: number) => (
						<NutritionPlan
							plan={{ ...plan, ...plan.NutritionPlan }}
							key={index}
						/>
					))}
				</div>
			) : (
				<NotDataFound />
			)}
		</section>
	);
};

export default NutritionPlans;

'use client';
import { useGetNutritionPlansQuery } from '@/store/features/nutrition-plans/api';
import NotDataFound from '../common/message/NotDataFound';
import SkeletonGroup from '../common/skeleton/SkeletonGroup';
import NutritionPlan from './NutritionPlan';

const NutritionPlans = () => {
	const { data = {}, isLoading } = useGetNutritionPlansQuery({});
	const { data: nutritionPlans = [] } = data || {};
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Nutrition Plan</h3>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				{isLoading ? (
					<SkeletonGroup
						extraClass="h-30 xl:h-40"
						count={4}
					/>
				) : nutritionPlans?.length > 0 ? (
					nutritionPlans.map((plan: any, index: number) => (
						<NutritionPlan
							plan={plan}
							key={index}
						/>
					))
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
};

export default NutritionPlans;

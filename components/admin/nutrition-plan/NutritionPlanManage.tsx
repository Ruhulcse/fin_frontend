'use client';
import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import SkeletonGroup from '@/components/common/skeleton/SkeletonGroup';
import { useGetNutritionPlansQuery } from '@/store/features/nutrition-plans/api';
import NutritionPlanSmallInfo from './NutritionPlanSmallInfo';
import { useTranslations } from 'next-intl';
import { sortArray } from '@/lib/helper/common';

const NutritionPlanManage = () => {
	const { data = {}, isLoading } = useGetNutritionPlansQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
		}
	);
	const { data: plans = [] } = data || {};
	const t = useTranslations('nutritionForm');
	const nutritionForm = t.raw('formLabel');
	return (
		<section className="nutrition-plan-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{nutritionForm.mngNutritionPlan}
			</h3>
			<BasicCard link="/admin/nutrition-plan/add">
				<strong>{nutritionForm.addNutrition}</strong>
			</BasicCard>
			<br />
			{isLoading ? (
				<div className="grid grid-cols-1 gap-4">
					<SkeletonGroup count={3} />
				</div>
			) : plans?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{sortArray(plans, 'id')?.map((plan: any, index: number) => (
						<NutritionPlanSmallInfo
							plan={plan}
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

export default NutritionPlanManage;

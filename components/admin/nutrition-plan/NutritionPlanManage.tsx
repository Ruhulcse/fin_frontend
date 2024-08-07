'use client';
import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import SkeletonGroup from '@/components/common/skeleton/SkeletonGroup';
import { useGetNutritionPlansQuery } from '@/store/features/nutrition-plans/api';
import NutritionPlanSmallInfo from './NutritionPlanSmallInfo';

const NutritionPlanManage = () => {
	const { data = {}, isLoading } = useGetNutritionPlansQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
		}
	);
	const { data: plans = [] } = data || {};
	return (
		<section className="nutrition-plan-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				Manage Nutrition Plan
			</h3>
			<BasicCard link="/admin/nutrition-plan/add">
				<strong>Add Nutrition Plan</strong>
			</BasicCard>
			<br />
			{isLoading ? (
				<div className="grid grid-cols-1 gap-4">
					<SkeletonGroup count={3} />
				</div>
			) : plans?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{plans?.map((plan: any, index: number) => (
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

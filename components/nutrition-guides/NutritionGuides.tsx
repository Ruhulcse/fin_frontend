'use client';
import { useGetNutritionGuidesQuery } from '@/store/features/nutrition-guides/api';
import NotDataFound from '../common/message/NotDataFound';
import SkeletonGroup from '../common/skeleton/SkeletonGroup';
import NutritionGuide from './NutritionGuide';

const NutritionGuides = () => {
	const { data = {}, isLoading } = useGetNutritionGuidesQuery({});
	const { data: nutritionGuides = [] } = data || {};
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Nutrition Guide</h3>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				{isLoading ? (
					<SkeletonGroup
						extraClass="h-30 xl:h-40"
						count={4}
					/>
				) : nutritionGuides?.length > 0 ? (
					nutritionGuides?.map((guide: any, index: number) => (
						<NutritionGuide
							guide={guide}
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

export default NutritionGuides;

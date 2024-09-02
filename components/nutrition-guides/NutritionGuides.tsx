import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import NotDataFound from '../common/message/NotDataFound';
import NutritionGuide from './NutritionGuide';
import { getTranslations } from 'next-intl/server';
import { sortArray } from '@/lib/helper/common';

const NutritionGuides = async () => {
	const { data: nutritionGuides = [] } = await generateDataFromServer(
		'nutrition-guides',
		nextProperties()
	);
	const t = await getTranslations('nutritionForm');
	const guide = t.raw('formLabel');
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{guide.nutritionGuide}
			</h3>
			{nutritionGuides?.length > 0 ? (
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					{sortArray(nutritionGuides, 'id')?.map(
						(guide: any, index: number) => (
							<NutritionGuide
								guide={guide}
								key={index}
							/>
						)
					)}
				</div>
			) : (
				<NotDataFound />
			)}
		</section>
	);
};

export default NutritionGuides;

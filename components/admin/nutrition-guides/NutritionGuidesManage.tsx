import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import NutritionGuidesSmallInfo from './NutritionGuidesSmallInfo';
import { sortArray } from '@/lib/helper/common';

const NutritionGuidesManage = async () => {
	const { data: guides = [] } = await generateDataFromServer(
		'nutrition-guides',
		nextProperties()
	);
	const t = await getTranslations('nutritionForm');
	const nutritionForm = t.raw('formLabel');
	return (
		<section className="nutrition-plan-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{nutritionForm.mngNutrition}
			</h3>
			<BasicCard link="/admin/nutrition-guides/add">
				<strong>{nutritionForm.addNutrition}</strong>
			</BasicCard>
			<br />
			{guides?.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{sortArray(guides, 'id')?.map((guide: any, index: number) => (
						<NutritionGuidesSmallInfo
							guide={guide}
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

export default NutritionGuidesManage;

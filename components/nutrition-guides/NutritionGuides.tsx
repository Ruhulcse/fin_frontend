import { generateDataFromServer, nextProperties } from '@/lib/helper/fetch';
import NutritionGuide from './NutritionGuide';

const NutritionGuides = async () => {
	const guides = await generateDataFromServer(
		'nutrition-guides',
		nextProperties(0)
	);
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Nutrition Guide</h3>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				{[{}, {}, {}, {}].map((guide: any, index: number) => (
					<NutritionGuide
						guide={guide}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default NutritionGuides;

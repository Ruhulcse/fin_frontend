import { serverAuthFetch } from '@/lib/helper/fetch';
import NutritionGuide from './NutritionGuide';

export const getInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}, {}];
	}
};

const NutritionGuides = async () => {
	const guides = await getInfo();
	return (
		<section className="nutrition-guide-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Nutrition Guide</h3>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				{guides.map((guide: any, index: number) => (
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

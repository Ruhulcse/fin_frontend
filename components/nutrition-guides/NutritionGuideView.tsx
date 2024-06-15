import { serverAuthFetch } from '@/lib/helper/fetch';
import PdfView from '../common/PdfView';

export const getDetailsInfo = async (id: string) => {
	try {
		const res = await serverAuthFetch(`/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const NutritionGuideView = async ({ id }: { id: string }) => {
	const nutritionGuide = await getDetailsInfo(id);
	return <PdfView pdf={nutritionGuide?.pdf} />;
};

export default NutritionGuideView;

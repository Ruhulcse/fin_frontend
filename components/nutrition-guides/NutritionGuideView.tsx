'use client';
import { useGetNutritionGuideQuery } from '@/store/features/nutrition-guides/api';
import PdfView from '../common/PdfView';

const NutritionGuideView = ({ id }: { id: string }) => {
	const { data = {} } = useGetNutritionGuideQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: nutritionGuide = {} } = data || {};
	return (
		<>
			<section className="nutrition-plan grid gap-2 xl:gap-4 grid-rows-[auto_auto_1fr] min-h-full">
				<h3 className="section-title text-right">
					{nutritionGuide?.title ?? ''}
				</h3>
				<p className="nutrition-plan-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
					{nutritionGuide?.description ?? ''}
				</p>
				{nutritionGuide?.pdf_link ? (
					<div className="img-area bg-card rounded-lg grid place-items-center mt-4 xl:mt-8 px-4 py-8 xl:p-6 xl:py-24 h-full">
						<PdfView pdf={nutritionGuide?.pdf_link} />
					</div>
				) : null}
			</section>
		</>
	);
};

export default NutritionGuideView;

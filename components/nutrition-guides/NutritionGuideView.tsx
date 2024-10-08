'use client';
import { useGetSingleNutritionGuideQuery } from '@/store/features/nutrition-guides/api';
import PdfView from '../common/pdf/PdfView';

const NutritionGuideView = ({ id }: { id: string }) => {
	const { data = {} } = useGetSingleNutritionGuideQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: guide = {} } = data || {};
	return (
		<section className="nutrition-plan grid gap-2 xl:gap-4 grid-rows-[auto_auto_1fr] min-h-full">
			<h3 className="section-title text-right">{guide?.title ?? ''}</h3>
			<p className="nutrition-plan-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
				{guide?.description ?? ''}
			</p>
			{guide?.pdf_link ? (
				<div className="img-area bg-card rounded-lg grid place-items-center mt-4 xl:mt-8 p-4 h-full">
					<PdfView pdf={guide?.pdf_link} />
				</div>
			) : null}
			<br />
		</section>
	);
};

export default NutritionGuideView;

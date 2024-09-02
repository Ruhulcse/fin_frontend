'use client';
import { useGetNutritionPlanQuery } from '@/store/features/nutrition-plans/api';
import PdfView from '../common/pdf/PdfView';

const NutritionPlanView = ({ id }: { id: string }) => {
	const { data = {} } = useGetNutritionPlanQuery(id, {
		skip: !id,
		refetchOnMountOrArgChange: true,
	});
	const { data: nutritionPlan = {} } = data || {};
	return (
		<>
			<section className="nutrition-plan grid gap-2 xl:gap-4 grid-rows-[auto_auto_1fr] min-h-full">
				<h3 className="section-title text-right">
					{nutritionPlan?.name ?? ''}
				</h3>
				<p className="nutrition-plan-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
					{nutritionPlan?.description ?? ''}
				</p>
				{nutritionPlan?.pdf_link ? (
					<div className="img-area bg-card rounded-lg grid place-items-center mt-4 xl:mt-8 p-4 h-full">
						<PdfView pdf={nutritionPlan?.pdf_link} />
					</div>
				) : null}
				<br />
			</section>
		</>
	);
};

export default NutritionPlanView;

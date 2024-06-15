import pdfImage from '@/assets/images/pdf.png';
import { serverAuthFetch } from '@/lib/helper/fetch';
import Image from 'next/image';
import Link from 'next/link';
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
		return {};
	}
};
const NutritionPlan = async () => {
	const plan = await getInfo();
	return (
		<section className="nutrition-plan grid gap-2 xl:gap-4">
			<h3 className="section-title text-right">
				{plan?.name ?? 'The Recipe Book Guide'}
			</h3>
			<p className="nutrition-plan-info text-right text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
				{plan?.description ??
					`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
			</p>
			<div className="img-area bg-[#33393F] rounded-lg grid place-items-center mt-4 xl:mt-8 px-4 py-8 xl:p-6 xl:py-24">
				<Link href="/nutrition-plan/555">
					<div className="nutrition-plan-pdf grid gap-2 xl:gap-4 place-items-center">
						<Image
							src={plan?.img ?? pdfImage}
							alt="pdf"
						/>
						<strong>{plan.description ?? 'Click to View'}</strong>
						<span className="text-[#F1D7B5]">Last Update on 08/06/2024</span>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default NutritionPlan;

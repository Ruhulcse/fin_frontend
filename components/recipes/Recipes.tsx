'use client';
import { useGetUserAssetsMutation } from '@/store/features/user/api';
import { useEffect } from 'react';
import PdfView from '../common/pdf/PdfView';
import SkeletonGroup from '../common/skeleton/SkeletonGroup';

const Recipes = () => {
	const [asset, { isLoading, data: { data: recipe = '' } = {} }]: any =
		useGetUserAssetsMutation();
	useEffect(() => {
		asset({
			path: 'Assets/Recipes_book.pdf',
		});
	}, [asset]);
	return isLoading ? (
		<div className="grid gap-4">
			<SkeletonGroup
				extraClass="h-30 xl:h-40"
				count={3}
			/>
		</div>
	) : (
		<section className="recipes grid gap-2 grid-rows-[auto_auto_1fr] xl:gap-4 h-full">
			<h3 className="section-title text-right">
				{recipe?.name ?? 'The Recipe Book Guide'}
			</h3>
			<p className="recipe-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
				{recipe?.description ??
					`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&apos;s standard dummy text
				ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.`}
			</p>
			<div className="img-area bg-card xl:bg-[#33393F] rounded-lg grid place-items-center xl:mt-8 p-3 xl:p-6 xl:py-12">
				<PdfView pdf={recipe} />
			</div>
		</section>
	);
};

export default Recipes;

import recipeBook from '@/assets/images/recipe-book.png';
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

const Recipes = async () => {
	const recipe = await getInfo();
	return (
		<section className="recipes grid gap-2 xl:gap-4">
			<h3 className="section-title text-right">
				{recipe?.name ?? 'The Recipe Book Guide'}
			</h3>
			<p className="recipe-info text-right text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
				{recipe?.description ??
					`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&apos;s standard dummy text
				ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.`}
			</p>
			<div className="img-area bg-[#F1D7B5] xl:bg-[#33393F] rounded-lg grid place-items-center mt-4 xl:mt-8 p-3 xl:p-6 xl:py-12">
				<Link href="/recipes/555">
					<Image
						src={recipe?.img ?? recipeBook}
						alt="Recipe Book"
					/>
				</Link>
			</div>
		</section>
	);
};

export default Recipes;

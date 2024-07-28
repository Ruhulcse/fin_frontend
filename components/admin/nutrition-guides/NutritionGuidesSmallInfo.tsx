import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const NutritionGuidesSmallInfo = ({ guide }: { guide: any }) => {
	return (
		<section className="nutrition-plan-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary">
			<Link href={`/admin/nutrition-guides/edit/${guide?.id}`}>
				<FaEdit />
			</Link>
			<h3>{guide?.title ?? ''}</h3>
		</section>
	);
};

export default NutritionGuidesSmallInfo;

import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const NutritionPlanSmallInfo = ({ plan }: { plan: any }) => {
	return (
		<section className="nutrition-plan-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary">
			<Link href={`/admin/nutrition-plan/edit/${plan?.id}`}>
				<FaEdit />
			</Link>
			<h3>{plan?.name ?? 'How to do push up'}</h3>
		</section>
	);
};

export default NutritionPlanSmallInfo;

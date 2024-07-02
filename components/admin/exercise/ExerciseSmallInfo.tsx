import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const ExerciseSmallInfo = ({ exercise }: { exercise: any }) => {
	return (
		<section className="exercise-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary">
			<Link href={`/admin/exercise/edit/${exercise?.exercise_id}`}>
				<FaEdit />
			</Link>
			<h3>{exercise?.name ?? 'N/A'}</h3>
		</section>
	);
};

export default ExerciseSmallInfo;

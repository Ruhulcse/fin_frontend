import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const WorkoutSmallInfo = ({
	training,
	traineeId,
}: {
	training: any;
	traineeId: string;
}) => {
	return (
		<section className="exercise-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary">
			<Link
				href={`/admin/training/edit/${training?.training_id}?trainee_id=${traineeId}`}
			>
				<FaEdit />
			</Link>
			<Link
				href={`/admin/workout/manage?trainee_id=${traineeId}&training_id=${training?.training_id}`}
				className="mr-auto text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
			>
				Workout Manage
			</Link>
			<h3>{training?.training_name ?? 'N/A'}</h3>
		</section>
	);
};

export default WorkoutSmallInfo;

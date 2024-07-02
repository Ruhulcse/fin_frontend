import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const WorkoutSmallInfo = ({
	workout,
	traineeId,
}: {
	workout: any;
	traineeId: string;
}) => {
	return (
		<section className="exercise-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary">
			<Link
				href={`/admin/workout/edit/${workout?.workout_id}?trainee_id=${traineeId}`}
			>
				<FaEdit />
			</Link>
			<h3>{workout?.workout_name ?? 'N/A'}</h3>
		</section>
	);
};

export default WorkoutSmallInfo;

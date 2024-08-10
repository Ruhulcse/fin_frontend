import TrainingEdit from '@/components/admin/tarining/TrainingEdit';
import WorkoutEdit from '@/components/admin/workout/WorkoutEdit';
import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';

const page = ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: any;
}) => {
	return (
		<BackLinkWrapper
			href={`/admin/training/manage?trainee_id=${searchParams?.trainee_id}`}
			title="Back To Training Manage"
		>
			<TrainingEdit
				id={params?.id}
				traineeId={searchParams?.trainee_id}
			/>
		</BackLinkWrapper>
	);
};

export default page;

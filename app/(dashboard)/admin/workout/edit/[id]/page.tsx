import WorkoutEdit from '@/components/admin/workout/WorkoutEdit';
import BackLinkWrapper from '@/components/common/BackLinkWrapper';

const page = ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: any;
}) => {
	return (
		<BackLinkWrapper
			href={`/admin/workout/manage?trainee_id=${searchParams?.trainee_id}`}
			title="Back To Workout Manage"
		>
			<WorkoutEdit
				id={params?.id}
				traineeId={searchParams?.trainee_id}
			/>
		</BackLinkWrapper>
	);
};

export default page;

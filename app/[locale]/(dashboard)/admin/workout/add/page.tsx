import WorkoutAdd from '@/components/admin/workout/WorkoutAdd';
import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';

const page = ({ searchParams }: { searchParams: any }) => {
	return (
		<BackLinkWrapper
			href={`/admin/workout/manage?trainee_id=${searchParams?.trainee_id}`}
			title="Back To Workout Manage"
		>
			<WorkoutAdd traineeId={searchParams?.trainee_id} />;
		</BackLinkWrapper>
	);
};

export default page;

import WorkoutManage from '@/components/admin/workout/WorkoutManage';
import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';

const Page = ({ searchParams }: { searchParams: any }) => {
	return (
		<BackLinkWrapper
			href={`/admin/trainee-details/${searchParams?.trainee_id}`}
			title="Back To Trainee Details"
		>
			<WorkoutManage traineeId={searchParams?.trainee_id} />
		</BackLinkWrapper>
	);
};

export default Page;

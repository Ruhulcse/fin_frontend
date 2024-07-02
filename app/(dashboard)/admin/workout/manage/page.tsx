import WorkoutManage from '@/components/admin/workout/WorkoutManage';

const Page = ({ searchParams }: { searchParams: any }) => {
	return <WorkoutManage traineeId={searchParams?.trainee_id} />;
};

export default Page;

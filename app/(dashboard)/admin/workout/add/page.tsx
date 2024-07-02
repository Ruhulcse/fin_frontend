import WorkoutAdd from '@/components/admin/workout/WorkoutAdd';

const page = ({ searchParams }: { searchParams: any }) => {
	return <WorkoutAdd traineeId={searchParams?.trainee_id} />;
};

export default page;

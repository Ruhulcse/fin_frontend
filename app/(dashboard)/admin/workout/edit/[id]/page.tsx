import WorkoutEdit from '@/components/admin/workout/WorkoutEdit';

const page = ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: any;
}) => {
	return (
		<WorkoutEdit
			id={params?.id}
			traineeId={searchParams?.trainee_id}
		/>
	);
};

export default page;

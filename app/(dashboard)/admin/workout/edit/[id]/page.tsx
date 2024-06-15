import WorkoutEdit from '@/components/admin/workout/WorkoutEdit';

const page = ({ params }: { params: { id: string } }) => {
	return <WorkoutEdit id={params?.id} />;
};

export default page;

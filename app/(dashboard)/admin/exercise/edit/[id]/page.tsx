import ExerciseEdit from '@/components/admin/exercise/ExerciseEdit';

const page = ({ params }: { params: { id: string } }) => {
	return <ExerciseEdit id={params?.id} />;
};

export default page;

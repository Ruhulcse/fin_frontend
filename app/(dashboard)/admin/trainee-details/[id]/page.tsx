import TraineeDetails from '@/components/admin/trainee-details/TraineeDetails';

const page = ({ params }: { params: { id: string } }) => {
	return <TraineeDetails id={params?.id} />;
};

export default page;

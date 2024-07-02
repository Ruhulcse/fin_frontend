import TraineeFiles from '@/components/admin/trainee-details/files/TraineeFiles';

const page = ({ searchParams }: { searchParams: any }) => {
	return <TraineeFiles traineeId={searchParams?.trainee_id} />;
};

export default page;

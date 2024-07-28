import UpdateMeasurement from '@/components/users/measurement/UpdateMeasurement';

const page = ({ searchParams }: { searchParams: any }) => {
	return <UpdateMeasurement taskId={searchParams?.task_id} />;
};

export default page;

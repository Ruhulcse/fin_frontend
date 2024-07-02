import Progress from '@/components/admin/trainee-details/progress/Progress';

const page = ({ params }: { params: { id: string } }) => {
	return <Progress id={params?.id} />;
};

export default page;

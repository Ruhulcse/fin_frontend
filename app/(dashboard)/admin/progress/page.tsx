import Progress from '@/components/admin/progress/Progress';

const page = ({ params }: { params: { id: string } }) => {
	return <Progress id={params?.id} />;
};

export default page;

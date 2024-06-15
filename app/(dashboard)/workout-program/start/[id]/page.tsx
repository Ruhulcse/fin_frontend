import WorkingProgramStart from '@/components/workout-program/WorkingProgramStart';

const Page = ({ params }: { params: { id: string } }) => {
	return <WorkingProgramStart id={params.id} />;
};

export default Page;

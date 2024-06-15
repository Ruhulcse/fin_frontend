import WorkingProgramView from '@/components/workout-program/WorkingProgramView';

const Page = ({ params }: { params: { id: string } }) => {
	return <WorkingProgramView id={params.id} />;
};

export default Page;

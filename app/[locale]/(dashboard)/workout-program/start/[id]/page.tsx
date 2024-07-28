import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';
import WorkingProgramStart from '@/components/workout-program/WorkingProgramStart';

const Page = ({ params }: { params: { id: string } }) => {
	return (
		<BackLinkWrapper
			href="/workout-program"
			title="Back To Workout"
		>
			<WorkingProgramStart id={params.id} />
		</BackLinkWrapper>
	);
};

export default Page;

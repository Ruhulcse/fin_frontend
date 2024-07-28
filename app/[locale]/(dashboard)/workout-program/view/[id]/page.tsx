import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';
import WorkingProgramView from '@/components/workout-program/WorkingProgramView';

const Page = ({ params }: { params: { id: string } }) => {
	return (
		<BackLinkWrapper
			href="/workout-program"
			title="Back To Workout"
		>
			<WorkingProgramView id={params.id} />
		</BackLinkWrapper>
	);
};

export default Page;

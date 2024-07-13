import TraineeDetails from '@/components/admin/trainee-details/TraineeDetails';
import BackLinkWrapper from '@/components/common/BackLinkWrapper';

const page = ({ params }: { params: { id: string } }) => {
	return (
		<BackLinkWrapper
			href="/admin/trainee"
			title="Back To Trainee"
		>
			<TraineeDetails id={params?.id} />
		</BackLinkWrapper>
	);
};

export default page;

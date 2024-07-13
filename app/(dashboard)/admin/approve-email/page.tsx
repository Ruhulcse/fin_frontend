import ApproveEmail from '@/components/admin/approve-email/ApproveEmail';
import BackLinkWrapper from '@/components/common/BackLinkWrapper';

const page = () => {
	return (
		<BackLinkWrapper
			href="/admin"
			title="Back To Dashboard"
		>
			<ApproveEmail />
		</BackLinkWrapper>
	);
};

export default page;

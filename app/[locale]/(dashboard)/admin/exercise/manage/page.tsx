import ExerciseManage from '@/components/admin/exercise/ExerciseManage';
import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';

const Page = () => {
	return (
		<BackLinkWrapper
			href="/admin"
			title="Back To Dashboard"
		>
			<ExerciseManage />
		</BackLinkWrapper>
	);
};

export default Page;

import BasicCard from '@/components/common/BasicCard';
import { LiaFileDownloadSolid } from 'react-icons/lia';

const TraineeActions = ({ trainee }: { trainee: any }) => {
	return (
		<>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">Add New</h4>
				<BasicCard
					link={`/admin/workout/manage?trainee_id=${trainee?.user_id}`}
				>
					<strong>Workout Manage</strong>
				</BasicCard>
				<BasicCard
					link={`/admin/user-nutrition-plan?trainee_id=${trainee?.user_id}`}
				>
					<strong>Nutrition Plan</strong>
				</BasicCard>
			</div>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">Reports</h4>
				<BasicCard
					link={`/admin/trainee-details/progress?trainee_id=${trainee?.user_id}`}
				>
					<strong>Measurements & Exercise</strong>
					<small className="text-textSecondary">Progress</small>
				</BasicCard>
			</div>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">File Download</h4>
				<BasicCard
					link={`/admin/trainee-details/files?trainee_id=${trainee?.user_id}`}
					icon={<LiaFileDownloadSolid size={24} />}
				>
					<strong>Training Programs</strong>
				</BasicCard>
			</div>
		</>
	);
};

export default TraineeActions;

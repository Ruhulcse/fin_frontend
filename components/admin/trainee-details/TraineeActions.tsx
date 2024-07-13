import BasicCard from '@/components/common/BasicCard';
import MeasurementReport from './MeasurementReport';
import TrainingReport from './TrainingReport';

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
			<MeasurementReport trainee={trainee} />
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">Agreement</h4>
				<BasicCard link={`/agreements/${trainee?.user_id}`}>
					<strong>User Agreement</strong>
				</BasicCard>
			</div>
			<TrainingReport trainee={trainee} />
		</>
	);
};

export default TraineeActions;

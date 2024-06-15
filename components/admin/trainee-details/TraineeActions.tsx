import BasicCard from '@/components/common/BasicCard';
import { LiaFileDownloadSolid } from 'react-icons/lia';

const TraineeActions = () => {
	return (
		<>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">Add New</h4>
				<BasicCard>
					<strong>Workout Edit</strong>
				</BasicCard>
				<BasicCard>
					<strong>Nutrition Plan</strong>
				</BasicCard>
			</div>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">Reports</h4>
				<BasicCard>
					<strong>Measurements</strong>
					<small className="text-[#F1D7B5]">View Report</small>
				</BasicCard>
				<BasicCard>
					<strong>Exercise</strong>
					<small className="text-[#F1D7B5]">View Report</small>
				</BasicCard>
			</div>
			<div className="grid gap-2 xl:gap-4">
				<h4 className="semi-section-title text-right">File Download</h4>
				<BasicCard icon={<LiaFileDownloadSolid size={24} />}>
					<strong>Training Programs</strong>
				</BasicCard>
			</div>
		</>
	);
};

export default TraineeActions;

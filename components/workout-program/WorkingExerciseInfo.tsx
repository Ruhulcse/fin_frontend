import { cn } from '@/lib/utils';

const WorkingExerciseInfo = ({
	workProgramDetails,
	extraClasses = '',
}: any) => {
	return (
		<section className={cn('work-start-input', extraClasses)}>
			<div className="flex-center-between work-input-header">
				<h3 className="section-title">Done</h3>
				<h3 className="section-title">Target</h3>
			</div>
			<div className="start-input-area">
				<div className="flex-center-between input">
					<strong className="underline">
						{workProgramDetails?.sets_to_do ?? 0}
					</strong>
					<div className="start-info">
						<strong>Sets</strong>
						<small>{workProgramDetails?.sets_to_do ?? 0}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<strong className="underline">
						{workProgramDetails?.reps_to_do ?? 0}
					</strong>
					<div className="start-info">
						<strong>Reps</strong>
						<small>{workProgramDetails?.reps_to_do ?? 0}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<strong className="underline">
						{workProgramDetails?.last_set_weight ?? 0}
					</strong>
					<div className="start-info">
						<strong>Weight (lbs)</strong>
						<small>{workProgramDetails?.goal_weight ?? 0}</small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkingExerciseInfo;

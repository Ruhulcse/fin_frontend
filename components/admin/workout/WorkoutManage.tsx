import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import SkeletonGroup from '@/components/common/skeleton/SkeletonGroup';
import { useTranslations } from 'next-intl';
import WorkoutSmallInfo from './WorkoutSmallInfo';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';

const WorkoutManage = async ({
	traineeId,
	trainingId,
}: {
	traineeId: string;
	trainingId: string;
}) => {
	const t = useTranslations('admin');
	const traineInfo = t.raw('traineeDetails');
	const { data: workouts = [] } = await generateDataFromServer(
		`workouts?user_id=${traineeId}&training_id=${trainingId}`,
		nextProperties()
	);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Manage Workout</h3>
			<BasicCard link={`/admin/workout/add?trainee_id=${traineeId}`}>
				<strong>Add Workout</strong>
			</BasicCard>
			<br />
			<div className="grid grid-cols-1 gap-4">
				{workouts?.length > 0 ? (
					workouts?.map((workout: any, index: number) => (
						<WorkoutSmallInfo
							workout={workout}
							traineeId={traineeId}
							trainingId={trainingId}
							key={index}
						/>
					))
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
};

export default WorkoutManage;

import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import WorkoutSmallInfo from './WorkoutSmallInfo';

const WorkoutManage = async ({
	traineeId,
	trainingId,
}: {
	traineeId: string;
	trainingId: string;
}) => {
	const { data: workouts = [] } = await generateDataFromServer(
		`workouts?user_id=${traineeId}&training_id=${trainingId}`,
		nextProperties()
	);
	const t = await getTranslations('admin');
	const execData = t.raw('workout');
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{execData.manageWorkout}
			</h3>
			<BasicCard
				link={`/admin/workout/add?trainee_id=${traineeId}&training_id=${trainingId}`}
			>
				<strong>{execData.addWorkout}</strong>
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

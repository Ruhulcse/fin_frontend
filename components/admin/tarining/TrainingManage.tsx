import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import TrainingSmallInfo from './TrainingSmallInfo';
import { sortArray } from '@/lib/helper/common';

const TrainingManage = async ({ traineeId }: { traineeId: string }) => {
	const { data: trainings = [] } = await generateDataFromServer(
		`trainings?user_id=${traineeId}`,
		nextProperties()
	);
	const t = await getTranslations('traineeDetails');
	const traineData = t.raw('traineeData');
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{traineData?.mngTrainig}
			</h3>
			<BasicCard link={`/admin/training/add?trainee_id=${traineeId}`}>
				<strong>{traineData.addTraining}</strong>
			</BasicCard>
			<br />
			<div className="grid grid-cols-1 gap-4">
				{trainings?.length > 0 ? (
					sortArray(trainings, 'training_id')?.map(
						(training: any, index: number) => (
							<TrainingSmallInfo
								training={training}
								traineeId={traineeId}
								key={index}
							/>
						)
					)
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
};

export default TrainingManage;

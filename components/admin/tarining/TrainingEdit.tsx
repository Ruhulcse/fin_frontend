import { generateDataFromServer } from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import TrainingForm from './TrainingForm';

const TrainingEdit = async ({
	id,
	traineeId,
}: {
	id: string;
	traineeId: string;
}) => {
	const { data: training = {} } = await generateDataFromServer(
		`trainings/${id}`
	);

	const t = await getTranslations('traineeDetails');
	const traineData = t.raw('traineeData');

	return (
		<section className="edit-workout grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">{traineData.editTraining}</h3>
			<TrainingForm
				training={training}
				traineeId={traineeId}
			/>
		</section>
	);
};

export default TrainingEdit;

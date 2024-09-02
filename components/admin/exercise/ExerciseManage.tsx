import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getTranslations } from 'next-intl/server';
import ExerciseSmallInfo from './ExerciseSmallInfo';
import { sortArray } from '@/lib/helper/common';

const ExerciseManage = async () => {
	const { data: exercises = [] } = await generateDataFromServer(
		'exercises',
		nextProperties()
	);
	const t = await getTranslations('exercise');
	const excData = t.raw('exerciseForm');
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">
				{excData.mngExc}
			</h3>
			<BasicCard link="/admin/exercise/add">
				<strong>{excData.addExc}</strong>
			</BasicCard>
			<br />
			<div className="grid grid-cols-1 gap-4">
				{exercises?.length > 0 ? (
					sortArray(exercises, 'exercise_id')?.map(
						(exercise: any, index: number) => (
							<ExerciseSmallInfo
								exercise={exercise}
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

export default ExerciseManage;

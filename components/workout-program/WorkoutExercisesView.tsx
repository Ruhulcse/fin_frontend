'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import BasicButton from '../common/BasicButton';
import WorkingExerciseInfo from './WorkingExerciseInfo';

const WorkoutExercisesView = ({
	workoutExercises,
	setCurrentExercise,
}: any) => {
	const t = useTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	const [tab, setTab] = useState(0);
	const [supersetWorkoutExercises, setSupersetWorkoutExercises] = useState<any>(
		{}
	);
	const [setWorkoutExercises, setSetWorkoutExercises] = useState<any>([]);
	const tabChangeHandler = async (tab: number) => {
		setTab(tab);
		setCurrentExercise(workoutExercises[tab]);
	};

	useEffect(() => {
		if (workoutExercises?.length > 0) {
			setCurrentExercise(workoutExercises[0]);
			setSetWorkoutExercises(
				workoutExercises.filter(
					(elm: any) => elm.manipulation.toLowerCase() === 'set'
				)
			);
			workoutExercises.forEach((element: any, index: number) => {
				if (element.manipulation.toLowerCase() === 'superset') {
					const nextElm = workoutExercises[index + 1];
					nextElm?.training_record_id &&
						setSupersetWorkoutExercises((prev: any) => ({
							...prev,
							[nextElm?.training_record_id]: element,
						}));
				}
			});
		}
	}, [setCurrentExercise, workoutExercises]);

	return (
		<>
			{setWorkoutExercises?.map((exercise: any, index: number) => (
				<>
					{supersetWorkoutExercises[exercise?.training_record_id] ? (
						<WorkingExerciseInfo
							extraClasses={tab === index ? 'block' : 'hidden'}
							workProgramDetails={
								supersetWorkoutExercises[exercise?.training_record_id]
							}
						/>
					) : null}
					<WorkingExerciseInfo
						workProgramDetails={exercise}
						extraClasses={tab === index ? 'block' : 'hidden'}
					/>
				</>
			))}

			<div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
				{setWorkoutExercises?.length > 1 && tab !== 0 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab - 1)}
						extraClasses="!w-full"
						hard
					>
						{details.prevExercise}
					</BasicButton>
				) : null}
				{setWorkoutExercises?.length > 1 &&
				tab !== setWorkoutExercises.length - 1 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab + 1)}
						hard
						extraClasses="!w-full"
					>
						{details.nextExercise}
					</BasicButton>
				) : null}
			</div>
		</>
	);
};

export default WorkoutExercisesView;

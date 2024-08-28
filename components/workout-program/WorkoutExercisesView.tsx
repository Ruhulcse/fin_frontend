'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import BasicButton from '../common/BasicButton';
import WorkingExerciseInfo from './WorkingExerciseInfo';
import WorkingProgramInfo from './WorkingProgramInfo';

const WorkoutExercisesView = ({ workoutExercises, workout }: any) => {
	const t = useTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	const [currentExercise, setCurrentExercise] = useState({});
	const [tab, setTab] = useState(0);
	const [supersetWorkoutExercises, setSupersetWorkoutExercises] = useState<any>(
		{}
	);
	const [setWorkoutExercises, setSetWorkoutExercises] = useState<any>([]);
	const tabChangeHandler = async (tab: number) => {
		setTab(tab);
		setCurrentExercise(setWorkoutExercises[tab]);
	};

	useEffect(() => {
		if (workoutExercises?.length > 0) {
			setCurrentExercise(setWorkoutExercises[0]);
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
	}, [setWorkoutExercises, workoutExercises]);

	useEffect(() => {
		if (workoutExercises?.length > 0) {
			setSetWorkoutExercises(
				workoutExercises.filter(
					(elm: any) => elm.manipulation.toLowerCase() === 'set'
				)
			);
		}
	}, [workoutExercises]);

	return (
		<>
			{setWorkoutExercises?.map((exercise: any, index: number) => (
				<div
					key={index}
					className={`${tab !== index ? 'hidden' : ''}`}
				>
					{supersetWorkoutExercises[exercise?.training_record_id] ? (
						<>
							<WorkingProgramInfo
								currentExercise={
									supersetWorkoutExercises[exercise?.training_record_id]
								}
								workProgramDetails={workout}
							/>
							<WorkingExerciseInfo
								workProgramDetails={
									supersetWorkoutExercises[exercise?.training_record_id]
								}
							/>
						</>
					) : null}
					<WorkingProgramInfo
						currentExercise={currentExercise}
						workProgramDetails={workout}
					/>
					<WorkingExerciseInfo workProgramDetails={exercise} />
				</div>
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

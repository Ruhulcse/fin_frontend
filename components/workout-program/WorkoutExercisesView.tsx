'use client';
import { useEffect, useState } from 'react';
import BasicButton from '../common/BasicButton';
import WorkingExerciseInfo from './WorkingExerciseInfo';

const WorkoutExercisesView = ({
	workoutExercises,
	setCurrentExercise,
}: any) => {
	const [tab, setTab] = useState(0);

	const tabChangeHandler = async (tab: number) => {
		setTab(tab);
		setCurrentExercise(workoutExercises[tab]);
	};

	useEffect(() => {
		if (workoutExercises?.length > 0) {
			setCurrentExercise(workoutExercises[0]);
		}
	}, [setCurrentExercise, workoutExercises]);

	return (
		<>
			{workoutExercises?.map((exercise: any, index: number) => (
				<WorkingExerciseInfo
					key={index}
					workProgramDetails={exercise}
					extraClasses={tab === index ? 'block' : 'hidden'}
				/>
			))}

			<div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
				{workoutExercises?.length > 1 && tab !== 0 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab - 1)}
						extraClasses="!w-full"
						hard
					>
						Previous Exercise
					</BasicButton>
				) : null}
				{workoutExercises?.length > 1 && tab !== workoutExercises.length - 1 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab + 1)}
						hard
						extraClasses="!w-full"
					>
						Next Exercise
					</BasicButton>
				) : null}
			</div>
		</>
	);
};

export default WorkoutExercisesView;
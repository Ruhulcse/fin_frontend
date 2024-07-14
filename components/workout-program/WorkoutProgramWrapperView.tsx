'use client';

import { useState } from 'react';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkoutExercisesView from './WorkoutExercisesView';

const WorkoutProgramWrapperView = ({
	workout,
	workoutExercises,
}: {
	workout: any;
	workoutExercises: any;
}) => {
	const [currentExercise, setCurrentExercise] = useState({});
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkingProgramInfo
				currentExercise={currentExercise}
				workProgramDetails={workout}
			/>
			<WorkoutExercisesView
				workoutExercises={workoutExercises}
				setCurrentExercise={setCurrentExercise}
			/>
		</section>
	);
};

export default WorkoutProgramWrapperView;

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
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkoutExercisesView
				workoutExercises={workoutExercises}
				workout={workout}
			/>
		</section>
	);
};

export default WorkoutProgramWrapperView;

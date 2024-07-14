'use client';

import { useState } from 'react';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkingProgramPrevData from './WorkingProgramPrevData';
import WorkoutExercises from './WorkoutExercises';

const WorkoutProgramWrapperStart = ({
	workout,
	prevWorkout,
	workoutExercises,
	id,
}: {
	workout: any;
	prevWorkout: any;
	workoutExercises: any;
	id: string;
}) => {
	const [currentExercise, setCurrentExercise] = useState({});
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkingProgramInfo
				currentExercise={currentExercise}
				workProgramDetails={workout}
			/>
			<WorkingProgramPrevData prevWorkout={prevWorkout} />
			<WorkoutExercises
				workoutExercises={workoutExercises}
				setCurrentExercise={setCurrentExercise}
				id={id}
			/>

			
		</section>
	);
};

export default WorkoutProgramWrapperStart;

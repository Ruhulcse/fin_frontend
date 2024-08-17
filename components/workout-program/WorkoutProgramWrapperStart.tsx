'use client';

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
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkoutExercises
				workProgramDetails={workout}
				workoutExercises={workoutExercises}
				prevWorkout={prevWorkout}
				id={id}
			/>
		</section>
	);
};

export default WorkoutProgramWrapperStart;

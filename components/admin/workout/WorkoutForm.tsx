'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import {
	useAddWorkoutMutation,
	useEditWorkoutExercisesMutation,
	useEditWorkoutMutation,
} from '@/store/features/workout/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { FaSpinner, FaTrash } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
import AddExerciseForWorkout from './AddExerciseForWorkout';
import WorkoutPredefined from './WorkoutPredefined';
type Inputs = {
	workout_name: string;
	workout_description: string;
};

const WorkoutForm = ({
	workout,
	traineeId,
	userWorkouts,
	trainingId,
}: {
	workout?: any;
	traineeId: string;
	userWorkouts?: any;
	trainingId: string;
}) => {
	const router = useRouter();
	const [exercises, setExercises] = useState<any[]>([]);
	const [editExercise, setEditExercise] = useState({});
	const [addExercise, setAddExercise] = useState(false);
	const t = useTranslations('admin');
	const workoutData = t.raw('workout');
	const schema = yup.object({
		workout_name: yup
			.string()
			.required(workoutData.nameErr)
			.min(3, workoutData.nameChrErr),
		workout_description: yup
			.string()
			.required(workoutData.desErr)
			.min(3, workoutData.descriptionCharectersErr),
	});
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const [
		addWorkout,
		{
			isLoading: addWorkoutLoading,
			error: addWorkoutError,
			isError: addWorkoutIsError,
			isSuccess: addWorkoutIsSuccess,
		},
	] = useAddWorkoutMutation();
	const [
		updateWorkout,
		{
			isLoading: updateWorkoutLoading,
			error: updateWorkoutError,
			isError: updateWorkoutIsError,
			isSuccess: updateWorkoutIsSuccess,
		},
	] = useEditWorkoutMutation();

	const [updateWorkoutExercises] = useEditWorkoutExercisesMutation();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		if (exercises.length > 0) {
			if (
				exercises[exercises.length - 1]?.manipulation?.toLowerCase() !== 'set'
			) {
				toast.error(workoutData.lastExrErr);
				return;
			}
			const payload = {
				...data,
				user_id: Number(traineeId),
				training_id: Number(trainingId),
				training: exercises.map((exercise: any) => {
					const { exercise_name, ...rest } = exercise;
					return rest;
				}),
			};
			if (workout?.workout_id) {
				const { training, ...rest } = payload;
				await updateWorkoutExercises(
					exercises.map((item) => ({
						...item,
						training_id: Number(trainingId),
						workout_id: workout.workout_id,
					}))
				);
				await updateWorkout({
					data: { ...rest, training_id: Number(trainingId) },
					id: workout.workout_id,
				});
			} else {
				await addWorkout(payload);
			}
		} else {
			toast.error(workoutData.oneChrErr);
		}
	};

	useEffect(() => {
		if (workout?.workout_id) {
			setValue('workout_name', workout.workout_name);
			setValue('workout_description', workout.workout_description);
			setExercises(workout.exercises);
		}
	}, [workout, setValue]);

	useEffect(() => {
		if (updateWorkoutIsError || addWorkoutIsError) {
			toast.error(getError(updateWorkoutError || addWorkoutError));
		} else if (updateWorkoutIsSuccess || addWorkoutIsSuccess) {
			toast.success(
				`${workoutData.workout} ${
					workout?.workout_id ? workoutData.updated : workoutData.added
				} ${workoutData.successfully}`
			);
			router.refresh();
			router.back();
		}
	}, [
		addWorkoutError,
		addWorkoutIsError,
		addWorkoutIsSuccess,
		router,
		updateWorkoutError,
		updateWorkoutIsError,
		updateWorkoutIsSuccess,
		workout?.workout_id,
		workoutData.added,
		workoutData.successfully,
		workoutData.updated,
		workoutData.workout,
	]);
	return (
		<>
			<form
				className="grid gap-2 xl:gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				{workout?.workout_id ? (
					<Input
						type="text"
						name="workout_name"
						label={workoutData.name}
						register={register}
						errors={errors}
					/>
				) : (
					<WorkoutPredefined
						setExercises={setExercises}
						setValue={setValue}
						userWorkouts={userWorkouts}
					/>
				)}
				<Input
					type="textarea"
					name="workout_description"
					label={workoutData.description}
					register={register}
					errors={errors}
				/>
				{exercises.length > 0 ? (
					<>
						<h4 className="semi-section-title text-right">
							{workoutData.exerciseList}
						</h4>
						{exercises.map((exercise: any, index: number) => (
							<section
								key={index}
								className="exercise-info bg-card flex items-center justify-between gap-2 p-4 rounded text-textPrimary"
							>
								<button
									type="button"
									onClick={() => {
										setExercises((prev) =>
											prev.filter(
												(ex: any) => ex.exercise_id !== exercise.exercise_id
											)
										);
									}}
								>
									<FaTrash />
								</button>
								<button
									type="button"
									onClick={() => {
										setAddExercise(true);
										setEditExercise(exercise);
									}}
									className="mr-auto"
								>
									<FaEdit />
								</button>
								<h3>{exercise?.exercise_name ?? ''}</h3>
							</section>
						))}
					</>
				) : null}

				<div className="flex items-center gap-2">
					<BasicButton
						disabled={updateWorkoutLoading || addWorkoutLoading}
						onClick={() => setAddExercise(true)}
						hard
						extraClasses="!m-0 !w-full !mt-6"
					>
						{workoutData.addExercise}
					</BasicButton>
					<BasicButton
						disabled={updateWorkoutLoading || addWorkoutLoading}
						type="submit"
						extraClasses="flex items-center justify-center gap-2 !m-0 !w-full !mt-6"
					>
						{updateWorkoutLoading || addWorkoutLoading ? (
							<FaSpinner
								className="animate-spin"
								size={16}
							/>
						) : null}
						{workout?.workout_id ? workoutData.update : workoutData.save}{' '}
						{workoutData.workout}
					</BasicButton>
				</div>
			</form>
			<AddExerciseForWorkout
				setExercises={setExercises}
				addExercise={addExercise}
				setAddExercise={setAddExercise}
				exercises={exercises}
				editExercise={editExercise}
				setEditExercise={setEditExercise}
				workoutId={workout?.workout_id ?? null}
			/>
		</>
	);
};

export default WorkoutForm;

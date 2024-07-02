'use client';
import { useEditUserWorkoutMutation } from '@/store/features/workout/api';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import BasicButton from '../common/BasicButton';
import WorkingProgramStartInput from './WorkingProgramStartInput';

const WorkoutExercises = ({ workoutExercises, id }: any) => {
	const [tab, setTab] = useState(0);
	const [updatedData, setUpdatedData] = useState<any>({});

	const [update, { isLoading }] = useEditUserWorkoutMutation();

	const tabChangeHandler = async (tab: number) => {
		setTab(tab);
	};

	const submitHandler = async () => {
		const payload: any = {
			...updatedData,
			exercises: [updatedData?.exercises || {}],
		};
		update(payload).then((res) => {
			if (res?.data) {
				toast.success('Exercises Updated');
			}
		});
	};

	useEffect(() => {
		const currentData = workoutExercises[tab];
		if (currentData?.workout_id && currentData?.training_id) {
			const exerciseInfo = {
				workout_id: currentData?.workout_id,
				exercises: {
					sets_done: currentData?.sets_done ?? 0,
					reps_done: currentData?.reps_done ?? 0,
					last_set_weight: currentData?.last_set_weight ?? 50,
					training_id: currentData?.training_id,
				},
			};
			setUpdatedData(exerciseInfo);
		}
	}, [id, tab, workoutExercises]);

	return (
		<>
			{workoutExercises?.map((exercise: any, index: number) => (
				<WorkingProgramStartInput
					key={index}
					extraClass={`${tab !== index ? 'hidden' : ''}`}
					workProgramDetails={exercise}
					setUpdatedData={setUpdatedData}
				/>
			))}

			<div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
				{workoutExercises?.length > 1 && tab !== 0 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab - 1)}
						disabled={isLoading}
						extraClasses="!w-full "
						hard
					>
						Previous Exercise
					</BasicButton>
				) : null}
				{workoutExercises?.length > 0 ? (
					<BasicButton
						onClick={submitHandler}
						disabled={isLoading}
						extraClasses="!w-full flex justify-center gap-1 items-center"
					>
						{isLoading ? (
							<FaSpinner
								size={20}
								className="animate-spin"
							/>
						) : null}
						Save
					</BasicButton>
				) : null}
				{workoutExercises?.length > 1 && tab !== workoutExercises.length - 1 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab + 1)}
						disabled={isLoading}
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

export default WorkoutExercises;

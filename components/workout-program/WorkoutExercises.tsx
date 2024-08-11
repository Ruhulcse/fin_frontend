'use client';
import { useEditUserWorkoutMutation } from '@/store/features/workout/api';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import BasicButton from '../common/BasicButton';
import WorkingProgramStartInput from './WorkingProgramStartInput';

const WorkoutExercises = ({
	workoutExercises,
	setCurrentExercise,
	id,
}: any) => {
	const [tab, setTab] = useState(0);
	const router = useRouter();
	const t = useTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	const [supersetWorkoutExercises, setSupersetWorkoutExercises] = useState<any>(
		{}
	);
	const [setWorkoutExercises, setSetWorkoutExercises] = useState<any>([]);
	const [workoutExercisesData, setWorkoutExercisesData] = useState<any>({
		workout_id: id,
		exercises: workoutExercises?.map((exercise: any) => {
			return {
				sets_done: exercise?.sets_done ?? 0,
				reps_done: exercise?.reps_done ?? 0,
				last_set_weight: exercise?.last_set_weight ?? 0,
				training_id: exercise?.training_id,
			};
		}),
	});

	const [update, { isLoading }] = useEditUserWorkoutMutation();

	const tabChangeHandler = async (tab: number) => {
		setCurrentExercise(workoutExercises[tab]);
		setTab(tab);
	};

	const submitHandler = async () => {
		update(workoutExercisesData).then((res) => {
			if (res?.data) {
				toast.success('Exercises Updated');
				router.push('/workout-program');
			}
		});
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
						<WorkingProgramStartInput
							extraClass={`${tab !== index ? 'hidden' : ''}`}
							workProgramDetails={
								supersetWorkoutExercises[exercise?.training_record_id]
							}
							setUpdatedData={setWorkoutExercisesData}
						/>
					) : null}
					<WorkingProgramStartInput
						extraClass={`${tab !== index ? 'hidden' : ''}`}
						workProgramDetails={exercise}
						setUpdatedData={setWorkoutExercisesData}
					/>
				</>
			))}

			<div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
				{setWorkoutExercises?.length > 1 && tab !== 0 ? (
					<BasicButton
						onClick={() => tabChangeHandler(tab - 1)}
						disabled={isLoading}
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
						disabled={isLoading}
						hard
						extraClasses="!w-full"
					>
						{details.nextExercise}
					</BasicButton>
				) : null}
				{setWorkoutExercises?.length > 0 &&
				tab === setWorkoutExercises.length - 1 ? (
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
						{details.finish}
					</BasicButton>
				) : null}
			</div>
		</>
	);
};

export default WorkoutExercises;

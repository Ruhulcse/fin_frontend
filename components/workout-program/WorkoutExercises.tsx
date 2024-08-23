'use client';
import { useEditUserWorkoutMutation } from '@/store/features/workout/api';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import BasicButton from '../common/BasicButton';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkingProgramPrevData from './WorkingProgramPrevData';
import WorkingProgramStartInput from './WorkingProgramStartInput';

const WorkoutExercises = ({
	workoutExercises,
	id,
	prevWorkout,
	workout,
}: any) => {
	const [tab, setTab] = useState(0);
	const router = useRouter();
	const t = useTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	const [supersetWorkoutExercises, setSupersetWorkoutExercises] = useState<any>(
		{}
	);
	const [setWorkoutExercises, setSetWorkoutExercises] = useState<any>([]);
	const [currentExercise, setCurrentExercise] = useState({});
	const [workoutExercisesData, setWorkoutExercisesData] = useState<any>({
		workout_id: id,
		exercises: workoutExercises?.map((exercise: any) => {
			return {
				sets_done: exercise?.sets_done ?? 0,
				reps_done: exercise?.reps_done ?? 0,
				last_set_weight: exercise?.last_set_weight ?? 0,
				training_record_id: exercise?.training_record_id,
			};
		}),
	});

	const [update, { isLoading }] = useEditUserWorkoutMutation();

	const tabChangeHandler = async (tab: number) => {
		setCurrentExercise(setWorkoutExercises[tab]);
		setTab(tab);
	};

	const submitHandler = async () => {
		update(workoutExercisesData).then((res) => {
			if (res?.data) {
				toast.success(details.excUpdated);
				router.push('/workout-program');
			}
		});
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
								workProgramDetails={workout}
								currentExercise={
									supersetWorkoutExercises[exercise?.training_record_id]
								}
							/>
							<WorkingProgramPrevData prevWorkout={prevWorkout} />
							<WorkingProgramStartInput
								workProgramDetails={
									supersetWorkoutExercises[exercise?.training_record_id]
								}
								setUpdatedData={setWorkoutExercisesData}
							/>
						</>
					) : null}
					<WorkingProgramInfo
						workProgramDetails={workout}
						currentExercise={currentExercise}
					/>
					<WorkingProgramPrevData prevWorkout={prevWorkout} />
					<WorkingProgramStartInput
						workProgramDetails={exercise}
						setUpdatedData={setWorkoutExercisesData}
					/>
				</div>
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

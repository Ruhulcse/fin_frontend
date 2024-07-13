import BasicButton from '@/components/common/BasicButton';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/input/Input';
import { workoutExerciseInputs } from '@/lib/helper/inputs';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import WorkoutExercisePredefined from './WorkoutExercisePredefined';

type Inputs = {
	trainer_exp: string;
	exercise_id: string;
	manipulation: string;
	sets_to_do: string;
	reps_to_do: string;
	goal_weight: string;
};

const schema = yup.object({
	manipulation: yup.string().required('Enter'),
	sets_to_do: yup.string().required('Enter'),
	reps_to_do: yup.string().required('Enter'),
	goal_weight: yup.string().required('Enter'),
	trainer_exp: yup
		.string()
		.required('Please enter description')
		.min(3, 'Description must be at least 3 characters.'),
	exercise_id: yup.string().required('Please select your exercises'),
});

const AddExerciseForm = ({
	open,
	setAddExercise,
	exerciseData,
	setExercises,
	exercises,
	setEditExercise,
	editExercise,
}: {
	open: boolean;
	setAddExercise: any;
	exerciseData: any;
	setExercises: any;
	exercises: any;
	setEditExercise: any;
	editExercise: any;
}) => {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});
	const exerciseOptions = exerciseData?.map((exercise: any) => ({
		label: exercise?.name,
		value: `${exercise?.exercise_id}__${exercise?.name}`,
	}));
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const payload = {
			...data,
			exercise_id: data.exercise_id.split('__')[0],
			exercise_name: data.exercise_id.split('__')[1],
		};
		const findItem = exercises.find(
			(item: any) => Number(item.exercise_id) === Number(payload.exercise_id)
		);
		setExercises((prev: any) =>
			findItem
				? prev.map((item: any) => {
						if (String(item.exercise_id) === String(payload.exercise_id)) {
							return payload;
						} else {
							return item;
						}
				  })
				: [...prev, payload]
		);
		setEditExercise({});
		setAddExercise(false);
	};

	const getFieldError = (name: string) => {
		const error = errors[name as keyof Inputs];
		return error;
	};

	useEffect(() => {
		if (editExercise?.exercise_id) {
			setValue(
				'exercise_id',
				`${editExercise?.exercise_id}__${editExercise?.exercise_name}`
			);
			setValue('manipulation', editExercise?.manipulation);
			setValue('sets_to_do', editExercise?.sets_to_do);
			setValue('reps_to_do', editExercise?.reps_to_do);
			setValue('goal_weight', editExercise?.goal_weight);
			setValue('trainer_exp', editExercise?.trainer_exp);
		}
	}, [editExercise, setValue]);

	return (
		<>
			<Modal
				open={open}
				closeModal={() => {
					setAddExercise(false);
					setEditExercise({});
				}}
			>
				<div className="bg-primary min-w-[300px] w-[50vw] rounded p-3">
					<h3 className="semi-section-title">Add Exercise</h3>
					<form
						className="grid gap-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						<WorkoutExercisePredefined
							setValue={setValue}
							exerciseOptions={exerciseOptions}
							getValues={getValues}
							disabled={!!editExercise?.exercise_id}
						/>
						<Input
							type="select"
							name="exercise_id"
							label="Select Exercise"
							options={exerciseOptions}
							register={register}
							errors={errors}
							hidden
						/>
						<div className="grid grid-cols-4 gap-2">
							{workoutExerciseInputs.map((input: any, index) => (
								<div
									key={index}
									className="grid place-items-center overflow-hidden w-full"
								>
									<label htmlFor="">{input.label}</label>
									<input
										type={input.name === 'manipulation' ? 'text' : 'number'}
										min={1}
										className="w-full simple-basic-input"
										{...register(input.name)}
									/>

									{getFieldError(input.name) ? (
										<p className="text-red-500 text-right">
											{getFieldError(input.name)?.message}
										</p>
									) : null}
								</div>
							))}
						</div>
						<Input
							type="textarea"
							name="trainer_exp"
							label="Exercise Description"
							register={register}
							errors={errors}
						/>
						<BasicButton
							type="submit"
							hard
							extraClasses="!m-0 !w-full !mt-2"
						>
							{editExercise?.training_id ? 'Update' : 'Add'} Exercise
						</BasicButton>
					</form>
				</div>
			</Modal>
		</>
	);
};

export default AddExerciseForm;

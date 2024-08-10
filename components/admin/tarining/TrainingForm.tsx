'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import {
	useAddTrainingMutation,
	useEditTrainingMutation,
} from '@/store/features/training/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
import TrainingPredefined from './TrainingPredefined';
type Inputs = {
	training_name: string;
	training_description: string;
};

const schema = yup.object({
	training_name: yup
		.string()
		.required('Please enter name')
		.min(3, 'Name must be at least 3 characters.'),
	training_description: yup
		.string()
		.required('Please enter description')
		.min(3, 'Description must be at least 3 characters.'),
});
const TrainingSmallInfo = ({
	training,
	traineeId,
	userTrainings,
}: {
	training?: any;
	traineeId: string;
	userTrainings?: any;
}) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const [
		addTraining,
		{
			isLoading: addTrainingLoading,
			error: addTrainingError,
			isError: addTrainingIsError,
			isSuccess: addTrainingIsSuccess,
		},
	] = useAddTrainingMutation();
	const [
		updateTraining,
		{
			isLoading: updateTrainingLoading,
			error: updateTrainingError,
			isError: updateTrainingIsError,
			isSuccess: updateTrainingIsSuccess,
		},
	] = useEditTrainingMutation();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const payload = {
			...data,
			user_id: Number(traineeId),
		};
		if (training?.training_id) {
			await updateTraining({
				data: payload,
				id: training?.training_id,
			});
		} else {
			await addTraining(payload);
		}
	};

	useEffect(() => {
		if (training?.training_id) {
			setValue('training_name', training.training_name);
			setValue('training_description', training.training_description);
		}
	}, [training, setValue]);

	useEffect(() => {
		if (updateTrainingIsError || addTrainingIsError) {
			toast.error(getError(updateTrainingError || addTrainingError));
		} else if (updateTrainingIsSuccess || addTrainingIsSuccess) {
			toast.success(
				`Training ${training?.training_id ? 'updated' : 'added'} successfully`
			);
			router.refresh();
			router.back();
		}
	}, [
		addTrainingError,
		addTrainingIsError,
		addTrainingIsSuccess,
		router,
		updateTrainingError,
		updateTrainingIsError,
		updateTrainingIsSuccess,
		training?.training_id,
	]);
	return (
		<>
			<form
				className="grid gap-2 xl:gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				{training?.training_id ? (
					<Input
						type="text"
						name="training_name"
						label="Name"
						register={register}
						errors={errors}
					/>
				) : (
					<TrainingPredefined
						setValue={setValue}
						userTrainings={userTrainings}
					/>
				)}
				<Input
					type="textarea"
					name="training_description"
					label="Description"
					register={register}
					errors={errors}
				/>

				<div className="flex items-center gap-2">
					<BasicButton
						disabled={updateTrainingLoading || addTrainingLoading}
						type="submit"
						extraClasses="flex items-center justify-center gap-2 !m-0 !w-full !mt-6"
					>
						{updateTrainingLoading || addTrainingLoading ? (
							<FaSpinner
								className="animate-spin"
								size={16}
							/>
						) : null}
						{training?.training_id ? 'Update' : 'Save'} Training
					</BasicButton>
				</div>
			</form>
		</>
	);
};

export default TrainingSmallInfo;
